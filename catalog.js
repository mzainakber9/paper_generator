/*
  CATALOG
  -------
  Tells the app which data file (and which global variable inside it)
  holds the chapters/questions for a given class + subject.

  To add a new subject later:
    1. Create its data file under /data/ (copy the pattern in class9-math.js)
    2. Add one line here pointing to it.
  Nothing else in the app needs to change.

  IMPORTANT: every data file must declare its top-level variable with
  "var", not "const" or "let". Only "var" attaches to window when a
  script is loaded dynamically like this — const/let stay invisible
  to window[varName] and the app will silently fail to find the data.
*/
const CATALOG = {
  9: {
    "Math": { file: "data/class9-math.js", varName: "CLASS9_MATH" }
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
