/*
  QUESTION TEXT FORMATTER
  -----------------------
  renderQText(text) -> HTML string.

  Escapes the question text and, wherever the text contains data that reads
  better as a table (frequency distributions, x/f lists, paired readings,
  weighted marks ...), swaps that data for a real table. Question banks keep
  their plain-text wording, so nothing in the /data files has to change and
  new questions written in these same styles become tables automatically.

  Tables use inline styles only, so they survive the Word (.doc) export.
  Anything not recognised is left exactly as plain text.
*/
(function () {
  var TD = "border:1px solid #444;padding:3px 6px;text-align:center;font-size:inherit;font-weight:normal;white-space:nowrap;";
  var TH = TD + "background:#f2f2f2;font-weight:bold;";
  var TH_LEFT = TH + "text-align:left;";

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function wrap(inner) {
    return '<div class="qdata-wrap" style="overflow-x:auto;max-width:100%;margin:5px 0;"><table class="qdata" style="border-collapse:collapse;">' + inner + "</table></div>";
  }

  /* Horizontal table: first column = row headings, remaining columns = data. */
  function rowsTable(rows) {
    return wrap(rows.map(function (r) {
      return "<tr>" + r.map(function (c, i) {
        return i === 0 ? '<th style="' + TH_LEFT + '">' + esc(c) + "</th>" : '<td style="' + TD + '">' + esc(c) + "</td>";
      }).join("") + "</tr>";
    }).join(""));
  }

  /* Vertical table: a header row on top, then one row per record. */
  function colsTable(head, body) {
    return wrap(
      "<tr>" + head.map(function (h) { return '<th style="' + TH + '">' + esc(h) + "</th>"; }).join("") + "</tr>" +
      body.map(function (r) {
        return "<tr>" + r.map(function (c) { return '<td style="' + TD + '">' + esc(c) + "</td>"; }).join("") + "</tr>";
      }).join("")
    );
  }

  function list(s) {
    return s.replace(/[.\s]+$/, "").split(/\s*,\s*/).filter(function (x) { return x !== ""; });
  }
  function seq(start, step, n) {
    var out = [];
    var dec = Math.max((String(step).split(".")[1] || "").length, (String(start).split(".")[1] || "").length);
    for (var i = 0; i < n; i++) out.push(String(Number((Number(start) + i * Number(step)).toFixed(dec))));
    return out;
  }

  var NUM = "-?\\d+(?:\\.\\d+)?";
  var IV = NUM + "\\s*[–-]\\s*" + NUM;   // class interval, e.g. 20–24 or 10-20
  var ivRe = new RegExp(IV);

  /* Each rule: re = pattern, build(match) -> { html, label? } or null (leave as text). */
  var RULES = [
    /* classes: A, B, C; frequencies: 1, 2, 3  (also "classes A, B with frequencies ... respectively") */
    {
      re: new RegExp("\\(?classes:?\\s*(" + IV + "(?:\\s*,\\s*" + IV + ")+)\\s*(?:;|,|with)\\s*(?:their\\s+)?frequenc(?:y|ies):?\\s*(" + NUM + "(?:\\s*,\\s*" + NUM + ")+)(?:\\s+respectively)?", "i"),
      build: function (m) {
        var c = list(m[1]), f = list(m[2]);
        if (c.length !== f.length) return null;
        return rowsTable([["Class interval"].concat(c), ["Frequency (f)"].concat(f)]);
      }
    },
    /* \(x=0,1,2\) with \(f=3,5,9\)   and   \(x\): 5, 10 with \(f\): 2, 4 */
    {
      re: new RegExp("\\\\\\(x\\s*=\\s*(" + NUM + "(?:\\s*,\\s*" + NUM + ")+)\\\\\\)\\s*with\\s*\\\\\\(f\\s*=\\s*(" + NUM + "(?:\\s*,\\s*" + NUM + ")+)\\\\\\)"),
      build: function (m) {
        var x = list(m[1]), f = list(m[2]);
        if (x.length !== f.length) return null;
        return rowsTable([["\\(x\\)"].concat(x), ["\\(f\\)"].concat(f)]);
      }
    },
    {
      re: new RegExp("\\\\\\(x\\\\\\):\\s*(" + NUM + "(?:\\s*,\\s*" + NUM + ")+)\\s*with\\s*\\\\\\(f\\\\\\):\\s*(" + NUM + "(?:\\s*,\\s*" + NUM + ")+?)(?=\\s*,\\s*[a-z]|\\.\\s|\\.$|$)"),
      build: function (m) {
        var x = list(m[1]), f = list(m[2]);
        if (x.length !== f.length) return null;
        return rowsTable([["\\(x\\)"].concat(x), ["\\(f\\)"].concat(f)]);
      }
    },
    /* Using the table (\(x=0\) to \(4\), step \(0.5\); \(f(x)=1,2,3\)) */
    {
      re: new RegExp("Using the table\\s*\\(\\\\\\(x=(" + NUM + ")\\\\\\)\\s*to\\s*\\\\\\((" + NUM + ")\\\\\\),\\s*step\\s*\\\\\\((" + NUM + ")\\\\\\);\\s*\\\\\\(f\\(x\\)=([-\\d.,\\s]+)\\\\\\)\\)"),
      build: function (m) {
        var f = list(m[4]);
        var x = seq(m[1], m[3], f.length);
        if (Number(x[x.length - 1]) !== Number(m[2])) return null;
        return { html: rowsTable([["\\(x\\)"].concat(x), ["\\(f(x)\\)"].concat(f)]), intro: "Using the table below" };
      }
    },
    /* t(s)=0,2,4; s(m)=0,2,4 */
    {
      re: new RegExp("\\\\\\(t\\(\\\\text\\{s\\}\\)=([-\\d.,\\s]+?)\\\\\\);\\s*\\\\\\(s\\(\\\\text\\{m\\}\\)=([-\\d.,\\s]+?)\\\\\\)"),
      build: function (m) {
        var t = list(m[1]), s = list(m[2]);
        if (t.length !== s.length) return null;
        return rowsTable([["\\(t\\) (s)"].concat(t), ["\\(s\\) (m)"].concat(s)]);
      }
    },
    /* speed (km/h) is given at t=0,0.2,...,2 hours as 0,5,12 ... */
    {
      re: new RegExp("is given at\\s*\\\\\\(t=(" + NUM + "),(" + NUM + "),\\\\dots,(" + NUM + ")\\\\\\)\\s*hours as\\s*(?:\\\\\\()?([-\\d.,\\s]+?)(?:\\\\\\))?\\.(?=\\s|$)"),
      build: function (m) {
        var v = list(m[4]);
        var t = seq(m[1], Number(m[2]) - Number(m[1]), v.length);
        if (Number(t[t.length - 1]) !== Number(m[3])) return null;
        return { html: rowsTable([["\\(t\\) (hours)"].concat(t), ["Speed (km/h)"].concat(v)]), intro: "is given as" };
      }
    },
    /* A: 12,15,6 and B: 47,12,76. */
    {
      re: /\bA:\s*(\d+(?:\s*,\s*\d+)+)\s+and\s+B:\s*(\d+(?:\s*,\s*\d+)+)/,
      build: function (m) {
        var a = list(m[1]), b = list(m[2]);
        if (a.length !== b.length) return null;
        return rowsTable([["Innings"].concat(a.map(function (v, i) { return String(i + 1); })), ["Batsman A"].concat(a), ["Batsman B"].concat(b)]);
      }
    },
    /* month 1: 4 kg, 2: 3 kg, 3: 2 kg */
    {
      re: /month\s*(\d+):\s*([\d.]+)\s*kg((?:\s*,\s*\d+:\s*[\d.]+\s*kg)+)/,
      build: function (m) {
        var mo = [m[1]], ma = [m[2]];
        m[3].replace(/(\d+):\s*([\d.]+)\s*kg/g, function (_, a, b) { mo.push(a); ma.push(b); });
        return rowsTable([["Month"].concat(mo), ["Mass gained (kg)"].concat(ma)]);
      }
    },
    /* Mass (kg): min 1100, Q1 1200, median 1500, Q3 1700, max 2000. Fuel efficiency (km/l): 24, 20, 14, 12, 10. */
    {
      re: /([A-Z][A-Za-z ]*\([^)]*\)):\s*min\s+([\d.]+),\s*Q1\s+([\d.]+),\s*median\s+([\d.]+),\s*Q3\s+([\d.]+),\s*max\s+([\d.]+)\.\s*([A-Z][A-Za-z ]*\([^)]*\)):\s*([\d.]+),\s*([\d.]+),\s*([\d.]+),\s*([\d.]+),\s*([\d.]+)\./,
      build: function (m) {
        return colsTable(["Variable", "Min", "Q1", "Median", "Q3", "Max"], [
          [m[1], m[2], m[3], m[4], m[5], m[6]],
          [m[7], m[8], m[9], m[10], m[11], m[12]]
        ]);
      }
    },
    /* AQI (20, 40, ...) against the number of sick days (5, 18, ...) */
    {
      re: /the\s+AQI\s*\(([\d,\s]+)\)\s*against the number of sick days\s*\(([\d,\s]+)\)/,
      build: function (m) {
        var a = list(m[1]), s = list(m[2]);
        if (a.length !== s.length) return null;
        return { html: rowsTable([["AQI"].concat(a), ["Sick days"].concat(s)]), intro: "the AQI and the number of sick days given below" };
      }
    },
    /* Blood pressure (classes 100–110, …, 150–160, midpoints 105, …, 155). Patients in OT: ... Patients in OPD: ... */
    {
      re: /\(classes\s*(\d+)[–-](\d+),\s*…,\s*(\d+)[–-](\d+),\s*midpoints\s*(\d+),\s*…,\s*(\d+)\)\.\s*Patients in OT:\s*([\d,\s]+)\.\s*Patients in OPD:\s*([\d,\s]+)\./,
      build: function (m) {
        var lo = Number(m[1]), size = Number(m[2]) - lo, n = (Number(m[3]) - lo) / size + 1;
        var ot = list(m[7]), opd = list(m[8]);
        if (ot.length !== n || opd.length !== n) return null;
        var cls = [], mid = [];
        for (var i = 0; i < n; i++) { cls.push((lo + i * size) + "–" + (lo + (i + 1) * size)); mid.push(String(lo + i * size + size / 2)); }
        return { html: rowsTable([["Class (mmHg)"].concat(cls), ["Midpoint"].concat(mid), ["Patients in OT"].concat(ot), ["Patients in OPD"].concat(opd)]), close: "" };
      }
    },
    /* landing 10 times on red, 12 on blue, ... and 10 on white */
    {
      re: /landing\s+(\d+)\s+times on\s+(\w+),\s*(\d+)\s+on\s+(\w+),\s*(\d+)\s+on\s+(\w+),\s*(\d+)\s+on\s+(\w+),\s*and\s+(\d+)\s+on\s+(\w+)/,
      build: function (m) {
        var cols = [[m[2], m[1]], [m[4], m[3]], [m[6], m[5]], [m[8], m[7]], [m[10], m[9]]];
        return { html: rowsTable([["Colour"].concat(cols.map(function (c) { return c[0]; })), ["Times landed"].concat(cols.map(function (c) { return c[1]; }))]), intro: "landing as shown" };
      }
    },
    /* Mathematics 70 (weight 4), Physics 95 (weight 3), ... */
    {
      re: /[A-Z][A-Za-z]+\s+\d+\s*\(weight\s+\d+\)(?:\s*,\s*[A-Z][A-Za-z]+\s+\d+\s*\(weight\s+\d+\))+/,
      build: function (m) {
        var n = [], mk = [], w = [];
        m[0].replace(/([A-Z][A-Za-z]+)\s+(\d+)\s*\(weight\s+(\d+)\)/g, function (_, a, b, c) { n.push(a); mk.push(b); w.push(c); });
        return rowsTable([["Subject"].concat(n), ["Marks"].concat(mk), ["Weight"].concat(w)]);
      }
    },
    /* marks 80, 70, 60 with weights corresponding to Math (wt 3), Physics (wt 2), Chemistry (wt 1) */
    {
      re: /marks\s+([\d,\s]+?)\s+with weights corresponding to\s+((?:[A-Za-z][A-Za-z0-9 ]*?\s*\(wt\s+\d+\)(?:\s*,\s*)?)+)/,
      build: function (m) {
        var marks = list(m[1]), names = [], wts = [];
        m[2].replace(/([A-Za-z][A-Za-z0-9 ]*?)\s*\(wt\s+(\d+)\)/g, function (_, a, b) { names.push(a.trim()); wts.push(b); });
        if (marks.length !== names.length) return null;
        return { html: rowsTable([["Subject / Test"].concat(names), ["Marks"].concat(marks), ["Weight"].concat(wts)]), intro: "marks as shown" };
      }
    }
  ];

  /* Interval-with-frequency runs:  20–24 (5), 25–29 (16), 30–34 (12) ... */
  var ITEM = "(" + IV + ")\\s*\\((\\d+)(?:\\s+[A-Za-z]+)?\\)";
  var RUN = new RegExp(ITEM + "(?:\\s*,\\s*" + ITEM + "){2,}", "g");
  var ITEM_G = new RegExp(ITEM, "g");

  function intervalRun(text) {
    var out = [], m;
    RUN.lastIndex = 0;
    while ((m = RUN.exec(text)) !== null) {
      var cls = [], fr = [], it;
      ITEM_G.lastIndex = 0;
      while ((it = ITEM_G.exec(m[0])) !== null) { cls.push(it[1].replace(/\s+/g, "")); fr.push(it[2]); }
      out.push({ start: m.index, end: m.index + m[0].length, html: rowsTable([["Class interval"].concat(cls), ["Frequency (f)"].concat(fr)]) });
    }
    return out;
  }

  function findAll(text) {
    var found = intervalRun(text);
    RULES.forEach(function (rule) {
      var re = new RegExp(rule.re.source, rule.re.flags.replace("g", "") + "g");
      var m;
      while ((m = re.exec(text)) !== null) {
        var res = rule.build(m);
        if (!res) continue;
        if (typeof res === "string") res = { html: res };
        found.push({ start: m.index, end: m.index + m[0].length, html: res.html, intro: res.intro, close: res.close });
      }
    });
    found.sort(function (a, b) { return a.start - b.start || b.end - a.end; });
    var kept = [], lastEnd = -1;
    found.forEach(function (f) { if (f.start >= lastEnd) { kept.push(f); lastEnd = f.end; } });
    return kept;
  }

  function capFirst(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
  function block(s) { return s ? '<div style="margin:2px 0;">' + esc(s) + "</div>" : ""; }

  window.renderQText = function (text) {
    if (text === undefined || text === null) return "";
    text = String(text);
    var hits;
    try { hits = findAll(text); } catch (e) { hits = []; }
    if (!hits.length) return esc(text);

    var html = "", pos = 0;
    hits.forEach(function (h, i) {
      var before = text.slice(pos, h.start);
      // tidy what sits in front of the table: leftovers of an earlier table, lone label words, "For the"
      if (i > 0) before = before.replace(/^[\s.,;—–:)-]+/, "");
      before = before.replace(/\s*(?:Marks|Ages?|Class|Height|Mass|Wages?|Scores?)\s*$/, "");
      before = before.replace(/(?:^|\s)For the\s*$/, "");
      before = before.replace(/[\s—–:-]+$/, "");
      if (before && h.intro) before = before + " " + h.intro;
      else if (!before && h.intro) before = capFirst(h.intro);
      if (before) before = before.replace(/[.]$/, "") + ":";
      html += block(before) + h.html;
      pos = h.end;
    });
    var rest = text.slice(pos).replace(/^[\s.,;—–:)-]+/, "");
    if (/^and answer\.?$/i.test(rest)) rest = "Then answer the questions below.";
    html += block(capFirst(rest));
    return html;
  };
})();
