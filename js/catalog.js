/*
  CATALOG
  -------
  Tells the app which data file(s) (and which global variable inside each)
  hold the chapters/questions for a given class + subject. A subject can
  span multiple files — e.g. Math is split into three files by chapter
  group (Ch1-4, Ch5-8, Ch9-11) — the app loads all of them and merges
  their chapters into one combined list for the picker.

  To add a new subject or file later:
    1. Create its data file under /data/ (copy the pattern in
       class9-math-ch1-4.js)
    2. Add or extend the "files" array here.
  Nothing else in the app needs to change.

  IMPORTANT: every data file must declare its top-level variable with
  "var", not "const" or "let". Only "var" attaches to window when a
  script is loaded dynamically like this — const/let stay invisible
  to window[varName] and the app will silently fail to find the data.
*/
const CATALOG = {
  9: {
    "Math": {
      files: [
        { file: "data/class9-math-ch1-4.js", varName: "CLASS9_MATH_CH1_4" },
        { file: "data/class9-math-ch5-8.js", varName: "CLASS9_MATH_CH5_8" },
        { file: "data/class9-math-ch9-11.js", varName: "CLASS9_MATH_CH9_11" },
        { file: "data/class9-math-long-ch2-7.js", varName: "CLASS9_MATH_LONG_CH2_7" },
        { file: "data/class9-math-long-ch8-11.js", varName: "CLASS9_MATH_LONG_CH8_11" }
      ]
    }
  }
};

function getCatalogEntry(cls, subject) {
  const c = CATALOG[Number(cls)];
  return (c && c[subject]) ? c[subject] : null;
}

/* Dynamically loads a data file (a plain <script> tag) and resolves
   once it has run, so its global variable is available. */
function loadDataScript(path) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = path;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load " + path));
    document.head.appendChild(s);
  });
}

/* Loads every file listed for a catalog entry and merges chapters by id
   across files (so a chapter's mcq/short/long can be split across
   multiple files — e.g. short questions in one file, long questions in
   another — without creating duplicate chapter entries in the picker). */
async function loadAllChapters(entry) {
  const chapterMap = new Map();
  for (const f of entry.files) {
    await loadDataScript(f.file);
    const data = window[f.varName];
    if (data && data.chapters) {
      data.chapters.forEach(ch => {
        if (chapterMap.has(ch.id)) {
          const existing = chapterMap.get(ch.id);
          existing.mcq = existing.mcq.concat(ch.mcq || []);
          existing.short = existing.short.concat(ch.short || []);
          existing.long = existing.long.concat(ch.long || []);
        } else {
          chapterMap.set(ch.id, {
            id: ch.id,
            name: ch.name,
            mcq: (ch.mcq || []).slice(),
            short: (ch.short || []).slice(),
            long: (ch.long || []).slice()
          });
        }
      });
    }
  }
  const allChapters = Array.from(chapterMap.values()).sort((a, b) => a.id - b.id);
  return { chapters: allChapters };
}
