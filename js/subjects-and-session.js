/*
  SUBJECT RULES
  -------------
  Which subjects are offered for which classes. Add/remove classes in the
  "classes" array to change where a subject appears. This is the single
  place that controls the Class -> Subject filtering.
*/
const ALL_SUBJECTS = [
  { name: "Math",                     classes: [9, 10, 11, 12] },
  { name: "Physics",                  classes: [9, 10, 11, 12] },
  { name: "Biology",                  classes: [9, 10, 11, 12] },
  { name: "Chemistry",                classes: [9, 10, 11, 12] },
  { name: "Computer",                 classes: [9, 10, 11, 12] },
  { name: "Stats",                    classes: [9, 10, 11, 12] },
  { name: "Urdu",                     classes: [9, 10, 11, 12] },
  { name: "English",                  classes: [9, 10, 11, 12] },
  { name: "Islamiyat",                classes: [9, 11] },
  { name: "Translation of Holy Quran",classes: [9, 10, 11, 12] },
  { name: "Pak Study",                classes: [10, 12] }
];

/* Returns the list of subject names available for a given class (number). */
function getSubjectsForClass(cls) {
  const c = Number(cls);
  return ALL_SUBJECTS.filter(s => s.classes.includes(c)).map(s => s.name);
}

/*
  SELECTION STATE
  ---------------
  Carries the user's choices (class, subject, question types, picked
  questions, etc.) from page to page during one session. Cleared when
  the browser/tab closes, and reset whenever a new paper is started.
*/
function saveSelection(key, value) {
  const state = getSelectionState();
  state[key] = value;
  sessionStorage.setItem("pgen_selection", JSON.stringify(state));
}

function getSelectionState() {
  const raw = sessionStorage.getItem("pgen_selection");
  return raw ? JSON.parse(raw) : {};
}

function clearSelectionState() {
  sessionStorage.removeItem("pgen_selection");
}
