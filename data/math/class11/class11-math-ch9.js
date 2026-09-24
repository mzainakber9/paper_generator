/*
  CLASS 11 — MATH — SHORT & LONG QUESTIONS — CHAPTER 9
  ------------------------------------------------------
  Chapter 9: Trigonometric Functions

  Parts-selectable schema — see class11-math-ch1-2.js for the format note.
  mcq stays empty — MCQs live in class11-math-mcq-ch9.js.
  Short/Long split follows the source sheet's own Part A / Part B / Part C
  organisation (Part B, including the worked graph-sketching examples,
  is kept as "long" to match the source).
*/
var CLASS11_MATH_CH9 = {
  chapters: [
    {
      id: 9,
      name: "Trigonometric Functions",
      mcq: [],
      short: [
        {
          exercise: "Ex 9.1 (Q1 — max/min of \\(a+b\\sin\\theta\\) type functions)",
          questions: [
            {
              stem: "Find the maximum and minimum values:",
              parts: [
                { label: "(ii)", text: "\\(y=\\dfrac23-\\dfrac12\\sin\\theta\\)", answer: "Max \\(=\\dfrac76\\), Min \\(=\\dfrac16\\)" },
                { label: "(iii)", text: "\\(y=\\dfrac15-2\\sin(3\\theta-7)\\)", answer: "Max \\(=\\dfrac{11}{5}\\), Min \\(=-\\dfrac95\\)" },
                { label: "(iv)", text: "\\(y=7+\\dfrac35\\cos(2\\theta-1)\\)", answer: "Max \\(=\\dfrac{38}{5}\\), Min \\(=\\dfrac{32}{5}\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 9.1 (Q2 — max/min of reciprocal trig functions)",
          questions: [
            {
              stem: "Find the max/min:",
              parts: [
                { label: "(i)", text: "\\(y=\\dfrac{1}{4+3\\sin\\theta}\\)", answer: "Max \\(=1\\), Min \\(=\\dfrac17\\)" },
                { label: "(iii)", text: "\\(y=\\dfrac{1}{\\frac13-4\\sin(2\\theta-5)}\\)", answer: "Denominator changes sign (\\(M=13/3,m=-11/3\\)) \\(\\Rightarrow\\) no finite max/min; range \\(=(-\\infty,-3/11]\\cup[3/13,\\infty)\\)" },
                { label: "(iv)", text: "\\(y=\\dfrac{1}{3+\\frac25\\sin(5\\theta-7)}\\)", answer: "Max \\(=\\dfrac{5}{13}\\), Min \\(=\\dfrac{5}{17}\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 9.1 (Q3 — domain and range)",
          questions: [
            {
              stem: "Find the domain and range:",
              parts: [
                { label: "(iii)", text: "\\(y=\\sin(2x/3)\\)", answer: "Domain \\(=\\mathbb{R}\\), Range \\(=[-1,1]\\)" },
                { label: "(iv)", text: "\\(y=7\\cot(\\pi x/2)\\)", answer: "Domain \\(=\\mathbb{R}-\\{2n:n\\in\\mathbb{Z}\\}\\), Range \\(=\\mathbb{R}\\)" },
                { label: "(v)", text: "\\(y=4\\tan(\\pi x)\\)", answer: "Domain \\(=\\mathbb{R}-\\{(2n+1)/2:n\\in\\mathbb{Z}\\}\\), Range \\(=\\mathbb{R}\\)" },
                { label: "(vi)", text: "\\(y=\\csc(4x)\\)", answer: "Domain \\(=\\mathbb{R}-\\{n\\pi/4:n\\in\\mathbb{Z}\\}\\), Range \\(=(-\\infty,-1]\\cup[1,\\infty)\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 9.1 (Q4 — odd or even function)",
          questions: [
            {
              stem: "Check whether odd or even:",
              parts: [
                { label: "(i)", text: "\\(y=\\sin x+x\\cos x\\)", answer: "Odd function" },
                { label: "(ii)", text: "\\(y=x^{3}\\sin x\\cos x\\)", answer: "Even function" },
                { label: "(iv)", text: "\\(y=x^{3}\\cot x\\sec x\\)", answer: "Even function" },
                { label: "(v)", text: "\\(y=\\dfrac{\\sin2x}{x+\\tan x}\\)", answer: "Odd function" },
                { label: "(vii)", text: "\\(y=\\dfrac{\\sec x}{x+\\tan x}\\)", answer: "Odd function" },
                { label: "(viii)", text: "\\(y=-x^{7}\\sin x\\cot x\\)", answer: "Odd function" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 9.1 (Q5 — period, amplitude, range)",
          questions: [
            {
              stem: "Find the key features:",
              parts: [
                { label: "(iii)", text: "\\(y=2\\tan2x\\)", answer: "Period \\(=\\pi/2\\); unbounded (no amplitude); asymptotes at \\(x=(2n+1)\\pi/4\\)" },
                { label: "(v)", text: "\\(y=2\\sin3x\\)", answer: "Period \\(=2\\pi/3\\); Amplitude \\(=2\\)" },
                { label: "(viii)", text: "\\(y=\\sin^{2}x\\)", answer: "Period \\(=\\pi\\); Range \\(=[0,1]\\)" },
                { label: "(ix)", text: "\\(y=\\tan^{2}x\\)", answer: "Period \\(=\\pi\\); Range \\(=[0,\\infty)\\)" },
                { label: "(x)", text: "\\(y=\\sin(x/2)\\)", answer: "Period \\(=4\\pi\\); Amplitude \\(=1\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 9.1 (Q6 — find the period)",
          questions: [
            {
              stem: "Find the period:",
              parts: [
                { label: "(i)", text: "\\(y=6\\sec(2x-3)\\)", answer: "Period \\(=\\pi\\)" },
                { label: "(iii)", text: "\\(y=\\cot4x+\\sin(5x/2)\\)", answer: "Period \\(=4\\pi\\)" },
                { label: "(iv)", text: "\\(y=7\\sin(3x+3)\\)", answer: "Period \\(=2\\pi/3\\)" },
                { label: "(vi)", text: "\\(y=2\\tan3x+7\\cos x\\)", answer: "Period \\(=2\\pi\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Extra Practice (author-set)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the max/min of \\(y=5-3\\cos(4\\theta+2)\\).", answer: "Max \\(=8\\), Min \\(=2\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the domain and range of \\(y=2\\sec(3x)\\).", answer: "Domain \\(=\\mathbb{R}-\\{(2n+1)\\pi/6:n\\in\\mathbb{Z}\\}\\), Range \\(=(-\\infty,-2]\\cup[2,\\infty)\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Check odd/even: \\(y=x^{2}\\sin x\\)", answer: "Odd function" } ] },
            { stem: null, parts: [ { label: null, text: "Find the period of \\(y=3\\cot(x/2)+5\\sin(x/3)\\).", answer: "Period \\(=6\\pi\\)" } ] }
          ]
        }
      ],
      long: [
        {
          exercise: "Ex 9.1 (Q7–Q9 — graphical comparison and solutions)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Compare \\(y=\\sin x\\) and \\(y=\\sin2x\\) over \\([0,2\\pi]\\); find points of intersection.", answer: "\\(\\sin x=\\sin2x\\Rightarrow\\sin x(1-2\\cos x)=0\\Rightarrow x=0,\\pi/3,\\pi,5\\pi/3,2\\pi\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Compare \\(y=\\cos x\\) and \\(y=\\cos2x\\) over \\([0,2\\pi]\\); find points of intersection.", answer: "\\(\\cos x=\\cos2x\\Rightarrow2\\cos^{2}x-\\cos x-1=0\\Rightarrow x=0,2\\pi/3,4\\pi/3,2\\pi\\)" } ] },
            {
              stem: "Solve graphically:",
              parts: [
                { label: "(i)", text: "\\(\\sin x=\\cos x\\)", answer: "\\(x=\\pi/4,5\\pi/4\\) (in \\([0,2\\pi]\\))" },
                { label: "(ii)", text: "\\(\\cos x=x\\)", answer: "\\(x\\approx0.739\\) (unique real root)" },
                { label: "(iii)", text: "\\(\\sin x=x\\)", answer: "\\(x=0\\) (only real solution)" },
                { label: "(iv)", text: "\\(\\tan x=x\\)", answer: "\\(x=0\\); also infinitely many roots near \\(x\\approx\\pm4.493,\\pm7.725,\\ldots\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Worked Examples — sketching trigonometric graphs (key features)",
          questions: [
            { stem: null, parts: [ { label: null, text: "State the key features of \\(y=\\sin x\\) over \\([0,2\\pi]\\).", answer: "Period \\(=2\\pi\\), Amplitude \\(=1\\), odd function, zeros at \\(0,\\pi,2\\pi\\), max at \\(\\pi/2\\), min at \\(3\\pi/2\\)" } ] },
            { stem: null, parts: [ { label: null, text: "State the key features of \\(y=\\cos x\\) over \\([0,2\\pi]\\).", answer: "Period \\(=2\\pi\\), Amplitude \\(=1\\), even function, zeros at \\(\\pi/2,3\\pi/2\\), max at \\(0,2\\pi\\), min at \\(\\pi\\)" } ] },
            { stem: null, parts: [ { label: null, text: "State the key features of \\(y=\\tan x\\) over \\((-\\pi,\\pi)\\).", answer: "Period \\(=\\pi\\), odd function, asymptotes at \\(x=\\pm\\pi/2\\), no amplitude" } ] },
            { stem: null, parts: [ { label: null, text: "State the key features of \\(y=3\\sin2x\\).", answer: "Period \\(=\\pi\\), Amplitude \\(=3\\), odd function" } ] },
            { stem: null, parts: [ { label: null, text: "State the key features of \\(y=3\\cos2x\\).", answer: "Period \\(=\\pi\\), Amplitude \\(=3\\), even function" } ] },
            { stem: null, parts: [ { label: null, text: "State the key features of \\(y=\\csc x\\).", answer: "Period \\(=2\\pi\\), odd function, asymptotes at \\(x=n\\pi\\), Range \\(=(-\\infty,-1]\\cup[1,\\infty)\\)" } ] },
            { stem: null, parts: [ { label: null, text: "State the key features of \\(y=\\sec x\\).", answer: "Period \\(=2\\pi\\), even function, asymptotes at \\(x=(2n+1)\\pi/2\\), Range \\(=(-\\infty,-1]\\cup[1,\\infty)\\)" } ] },
            { stem: null, parts: [ { label: null, text: "State the key features of \\(y=\\cot x\\).", answer: "Period \\(=\\pi\\), odd function, asymptotes at \\(x=n\\pi\\), Range \\(=\\mathbb{R}\\)" } ] }
          ]
        },
        {
          exercise: "Application — Ferris Wheel (Sec 9.6 worked example)",
          questions: [
            { stem: null, parts: [ { label: null, text: "A Ferris wheel, diameter 30 m, centre 17 m above ground, 1 revolution per 60 s. Find \\(h(t)\\) using a cosine function and the height at \\(t=45\\) s.", answer: "\\(h(t)=-15\\cos(\\pi t/30)+17\\); \\(h(45)=17\\) m" } ] }
          ]
        },
        {
          exercise: "Review Exercise (Q1 — multiple choice)",
          questions: [
            { stem: null, parts: [ { label: null, text: "\\(\\cos\\theta=-\\sqrt3/2\\), terminal arm in QIII \\(\\Rightarrow\\sin\\theta=\\) ?", answer: "\\(-1/2\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(\\tan(-15\\pi)=\\) ?", answer: "\\(0\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(2\\sin\\theta+\\dfrac12\\csc\\theta\\) at \\(\\theta=45^\\circ\\), value \\(=\\) ?", answer: "\\(\\sqrt2\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(\\sin(270^\\circ+\\theta)=x\\), terminal side of \\(\\theta\\) in QIV \\(\\Rightarrow x=\\) ?", answer: "\\(-\\cos\\theta\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(\\dfrac{\\sin\\alpha+\\sin2\\alpha}{1+\\cos\\alpha+\\cos2\\alpha}=\\) ?", answer: "\\(\\tan\\alpha\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Express \\(2\\sin3x\\sin7x\\) as a sum/difference.", answer: "\\(\\cos4x-\\cos10x\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Express \\(\\sin5x+\\sin7x\\) as a product.", answer: "\\(2\\sin6x\\cos x\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(\\tan x\\cdot\\tan(\\pi/3-x)\\cdot\\tan(\\pi/3+x)=\\) ?", answer: "\\(\\tan3x\\)" } ] },
            { stem: null, parts: [ { label: null, text: "If \\(\\tan A=1/7,\\ \\tan B=1/3\\), then \\(\\cos2A=\\) ?", answer: "\\(\\sin4B\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(f(x)=\\dfrac{\\sin3x}{x^{2}+\\tan x}\\) is:", answer: "Odd function" } ] },
            { stem: null, parts: [ { label: null, text: "Period of \\(\\cos(x/5)\\)", answer: "\\(10\\pi\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(2\\cos5x\\cdot\\sin3x=\\) ?", answer: "\\(\\sin8x-\\sin2x\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Which trig functions are even AND have period \\(2\\pi\\)?", answer: "\\(\\sec x\\) and \\(\\cos x\\)" } ] },
            { stem: null, parts: [ { label: null, text: "If \\(f\\) is periodic with period \\(\\pi\\), \\(f(\\theta)\\) could be:", answer: "\\(3\\cos2x\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Period of \\(f(x)=\\sin8x\\)", answer: "\\(\\pi/4\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Range of \\(f(\\theta)=a\\sin^{2}\\theta+b\\ (a>0)\\) is \\([3,5]\\Rightarrow3a+2b=\\) ?", answer: "\\(11\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Minimum value of \\(f(\\theta)=17\\sin4\\theta\\)", answer: "\\(-17\\)" } ] },
            { stem: null, parts: [ { label: null, text: "For \\(y=3\\sin x\\) with marked points \\((\\pi/2,a)\\) and \\((3\\pi/2,b)\\), find \\(|a|+|b|\\).", answer: "\\(6\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Maximum value of \\(7\\cos x+24\\sin x\\)", answer: "\\(25\\)" } ] }
          ]
        },
        {
          exercise: "Review Exercise (long questions)",
          questions: [
            { stem: null, parts: [ { label: null, text: "If \\(\\cos\\theta-\\sin\\theta=\\sqrt2\\sin\\theta\\), show that \\(\\cos\\theta+\\sin\\theta=\\sqrt2\\cos\\theta\\).", answer: "Proved using \\(\\cos\\theta=(\\sqrt2+1)\\sin\\theta\\) and substitution" } ] },
            { stem: null, parts: [ { label: null, text: "Prove: \\(\\dfrac{\\tan(\\alpha+\\beta)-\\tan\\beta}{1+\\tan(\\alpha+\\beta)\\tan\\beta}=\\tan\\alpha\\)", answer: "Proved using the tan-subtraction formula, \\(\\tan[(\\alpha+\\beta)-\\beta]=\\tan\\alpha\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Prove: \\(\\dfrac{1+\\sin2\\theta-\\cos2\\theta}{1+\\sin2\\theta+\\cos2\\theta}=\\tan\\theta\\)", answer: "Proved using \\(\\sin2\\theta=2\\sin\\theta\\cos\\theta,\\ \\cos2\\theta=1-2\\sin^{2}\\theta\\) & \\(2\\cos^{2}\\theta-1\\)" } ] },
            { stem: null, parts: [ { label: null, text: "A Ferris wheel: diameter 40 m, platform 4 m above ground, period 16 min. Find the period, amplitude, vertical shift, \\(h(t)\\), and height after 5 min.", answer: "Period \\(=16\\) min, Amplitude \\(=20\\), vertical shift \\(=24\\); \\(h(t)=-20\\cos(\\pi t/8)+24\\); \\(h(5)\\approx26.65\\) m" } ] },
            { stem: null, parts: [ { label: null, text: "\\(h(t)=10\\sin(3(t-30))+12\\). Find max/min heights, height at \\(t=30\\) s, time for one revolution.", answer: "Max \\(=22\\) m, Min \\(=2\\) m, \\(h(30)=12\\) m, Period \\(=2\\pi/3\\) s" } ] },
            {
              stem: "Find the domain, range, period:",
              parts: [
                { label: "(vii)", text: "\\(y=3\\sin(\\pi x)\\)", answer: "Domain \\(=\\mathbb{R}\\), Range \\(=[-3,3]\\), Period \\(=2\\)" },
                { label: "(xi)", text: "\\(y=9\\cos(3x-2)\\)", answer: "Domain \\(=\\mathbb{R}\\), Range \\(=[-9,9]\\), Period \\(=2\\pi/3\\)" },
                { label: "(xiii)", text: "\\(y=7+5\\sin(2x-\\pi/6)\\)", answer: "Domain \\(=\\mathbb{R}\\), Range \\(=[2,12]\\), Period \\(=\\pi\\)" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
