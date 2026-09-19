/*
  ACCOUNTS
  --------
  Add one line per person who should be able to log in.
  This is a simple client-side gate, NOT real security — anyone who
  opens the page source can read these values. Don't store anything
  here you wouldn't be okay with a curious student seeing.
*/
const ACCOUNTS = {
  "zain": "123"
};

/* Checks a username/password pair against ACCOUNTS above. */
function checkLogin(username, password) {
  const u = username.trim().toLowerCase();
  return ACCOUNTS.hasOwnProperty(u) && ACCOUNTS[u] === password;
}

/* Call this after a successful login. Stores the session for this tab only —
   it clears automatically when the browser/tab is closed. */
function startSession(username) {
  sessionStorage.setItem("pgen_user", username.trim());
}

/* Used by other pages to find out who's logged in, and to guard pages
   that require login. Returns null if nobody is logged in. */
function getCurrentUser() {
  return sessionStorage.getItem("pgen_user");
}

/* Call at the top of any page that requires login. Redirects to the
   login screen if nobody is logged in. */
function requireLogin() {
  if (!getCurrentUser()) {
    window.location.href = "index.html";
  }
}

function logout() {
  sessionStorage.removeItem("pgen_user");
  window.location.href = "index.html";
}
