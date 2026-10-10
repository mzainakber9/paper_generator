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
   button that appears throughout the app. Asks first, using the styled
   confirmation popup below (built on the fly, so every page gets it). */
function startNewPaper() {
  showNewPaperPopup(function () {
    clearSelectionState();
    clearPicks();
    window.location.href = "class-subject.html";
  });
}

function showNewPaperPopup(onConfirm) {
  if (document.getElementById("npOverlay")) return;

  if (!document.getElementById("npStyles")) {
    const css = document.createElement("style");
    css.id = "npStyles";
    css.textContent = `
      @keyframes npFade { from{opacity:0} to{opacity:1} }
      @keyframes npPop  { 0%{opacity:0; transform:translateY(24px) scale(.92)} 70%{transform:translateY(-4px) scale(1.01)} 100%{opacity:1; transform:none} }
      @keyframes npPulse{ 0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,.45)} 50%{box-shadow:0 0 0 12px rgba(255,255,255,0)} }
      #npOverlay{
        position:fixed; inset:0; z-index:9999;
        display:flex; align-items:center; justify-content:center; padding:20px;
        background:rgba(20,28,52,.62); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px);
        animation:npFade .2s ease-out;
      }
      #npCard{
        width:100%; max-width:380px; background:#fff; border-radius:22px; overflow:hidden;
        box-shadow:0 24px 60px rgba(0,0,0,.4); animation:npPop .38s cubic-bezier(.2,.8,.3,1);
        font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
      }
      #npHead{
        position:relative; padding:26px 20px 22px; text-align:center; color:#fff;
        background:linear-gradient(135deg,#8a2432 0%,#c2410c 55%,#f59e0b 100%);
      }
      #npHead::before,#npHead::after{
        content:""; position:absolute; border-radius:50%; background:rgba(255,255,255,.12);
      }
      #npHead::before{ width:120px; height:120px; top:-50px; left:-40px; }
      #npHead::after { width:90px; height:90px; bottom:-45px; right:-20px; }
      #npIcon{
        position:relative; z-index:1; width:64px; height:64px; margin:0 auto 12px; border-radius:50%;
        background:rgba(255,255,255,.22); border:2px solid rgba(255,255,255,.7);
        display:flex; align-items:center; justify-content:center; font-size:30px;
        animation:npPulse 2s infinite;
      }
      #npHead h3{ position:relative; z-index:1; margin:0; font-size:21px; font-weight:800; letter-spacing:.2px; }
      #npHead p{ position:relative; z-index:1; margin:6px 0 0; font-size:13px; color:rgba(255,255,255,.92); }
      #npBody{ padding:18px 20px 20px; background:linear-gradient(180deg,#fffaf3 0%,#fff 100%); }
      #npBody .np-label{ font-size:11.5px; font-weight:700; text-transform:uppercase; letter-spacing:.6px; color:#5b6572; margin:0 0 10px; }
      .np-chip{
        display:flex; align-items:center; gap:12px; padding:10px 12px; margin-bottom:8px;
        border-radius:12px; font-size:13.5px; font-weight:600; color:#1c2b4a;
      }
      .np-chip .dot{
        width:34px; height:34px; border-radius:10px; flex-shrink:0;
        display:flex; align-items:center; justify-content:center; font-size:17px;
      }
      .np-chip small{ display:block; font-weight:500; font-size:11.5px; color:#5b6572; margin-top:1px; }
      .np-chip.c1{ background:#eef2ff; } .np-chip.c1 .dot{ background:#c7d2fe; }
      .np-chip.c2{ background:#ecfdf5; } .np-chip.c2 .dot{ background:#a7f3d0; }
      .np-chip.c3{ background:#fff7ed; } .np-chip.c3 .dot{ background:#fed7aa; }
      #npWarn{
        margin:12px 0 16px; padding:9px 12px; border-radius:10px; font-size:12.5px; font-weight:600;
        color:#9a3412; background:#ffedd5; border:1px dashed #fb923c; text-align:center;
      }
      #npBtns{ display:flex; gap:10px; }
      #npBtns button{
        flex:1; padding:14px 10px; border:none; border-radius:13px; font-size:14.5px; font-weight:800;
        cursor:pointer; transition:transform .12s, box-shadow .12s;
      }
      #npBtns button:active{ transform:scale(.96); }
      #npKeep{ background:linear-gradient(135deg,#22c55e,#0d9488); color:#fff; box-shadow:0 6px 14px rgba(13,148,136,.35); }
      #npGo  { background:linear-gradient(135deg,#8a2432,#dc2626); color:#fff; box-shadow:0 6px 14px rgba(138,36,50,.35); }
    `;
    document.head.appendChild(css);
  }

  const overlay = document.createElement("div");
  overlay.id = "npOverlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "npTitle");
  overlay.innerHTML = `
    <div id="npCard">
      <div id="npHead">
        <div id="npIcon">🗒️</div>
        <h3 id="npTitle">Start a New Paper?</h3>
        <p>You are about to begin from scratch</p>
      </div>
      <div id="npBody">
        <p class="np-label">This will clear</p>
        <div class="np-chip c1"><span class="dot">🎓</span><span>Class &amp; Subject<small>Your current selection</small></span></div>
        <div class="np-chip c2"><span class="dot">✅</span><span>Question Picks<small>MCQs, short &amp; long questions</small></span></div>
        <div class="np-chip c3"><span class="dot">📝</span><span>Paper Details<small>Institution, time, marks &amp; more</small></span></div>
        <div id="npWarn">⚠️ This cannot be undone</div>
        <div id="npBtns">
          <button type="button" id="npKeep">Keep Working</button>
          <button type="button" id="npGo">Yes, Start New</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  function close() {
    document.removeEventListener("keydown", onKey);
    overlay.remove();
  }
  function onKey(e) { if (e.key === "Escape") close(); }
  document.addEventListener("keydown", onKey);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
  document.getElementById("npKeep").addEventListener("click", close);
  document.getElementById("npGo").addEventListener("click", function () { close(); onConfirm(); });
  document.getElementById("npKeep").focus();
}
