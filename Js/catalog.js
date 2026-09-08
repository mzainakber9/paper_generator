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
        { file: "data/class9-math-ch1-4.js", varName: "CLASS9_MATH_CH1_4" }
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

/* Loads every file listed for a catalog entry and merges their
   .chapters arrays into one combined list, in file order. */
async function loadAllChapters(entry) {
  const allChapters = [];
  for (const f of entry.files) {
    await loadDataScript(f.file);
    const data = window[f.varName];
    if (data && data.chapters) {
      allChapters.push(...data.chapters);
    }
  }
  return { chapters: allChapters };
}
