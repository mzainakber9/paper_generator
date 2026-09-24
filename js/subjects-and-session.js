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
  questions, etc.) from page to page. Stored in localStorage (not
  sessionStorage) so it survives logging out and logging back in, and
  even closing the browser entirely -- it only goes away when the user
  explicitly starts a new paper (see startNewPaper() below).
*/
function saveSelection(key, value) {
  const state = getSelectionState();
  state[key] = value;
  localStorage.setItem("pgen_selection", JSON.stringify(state));
}

function getSelectionState() {
  const raw = localStorage.getItem("pgen_selection");
  return raw ? JSON.parse(raw) : {};
}

function clearSelectionState() {
  localStorage.removeItem("pgen_selection");
}

/*
  QUESTION PICKS
  --------------
  The actual questions ticked by the user, per type. Also stored in
  localStorage for the same reason as the selection state above.
*/
function getPicks() {
  const raw = localStorage.getItem("pgen_picks");
  const picks = raw ? JSON.parse(raw) : { mcq: [], short: [], long: [] };
  // Upgrade any older flat picks ({text, answer, diagram}) to the stem/parts format.
  ["short", "long"].forEach(type => {
    picks[type] = (picks[type] || []).map(p => p.parts ? p : Object.assign({}, p, {
      stem: null,
      parts: [{ partIdx: 0, label: null, text: p.text, answer: p.answer, diagram: p.diagram || null }]
    }));
  });
  return picks;
}

function savePicks(picks) {
  localStorage.setItem("pgen_picks", JSON.stringify(picks));
}

function clearPicks() {
  localStorage.removeItem("pgen_picks");
}

/* Wipes the in-progress paper (selection + picks) and sends the user
   back to the start of a fresh paper. Bound to the "Start New Paper"
   button that appears throughout the app. */
function startNewPaper() {
  if (!confirm("Start a new paper? This clears the class/subject, question picks, and details you've entered so far.")) {
    return;
  }
  clearSelectionState();
  clearPicks();
  window.location.href = "class-subject.html";
}
