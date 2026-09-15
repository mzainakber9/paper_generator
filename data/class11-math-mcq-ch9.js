/*
  CLASS 11 -- MATH -- MCQs -- CHAPTER 9 (100)
  ---------------------------------------------
  Chapter 9: Trigonometric Functions (domain/range, periodicity,
  max/min of a+b*trig(theta), even/odd functions, graphs, real-world
  models). Source: same 300-question PDF bank as Chapters 7-8. Every
  computational question -- periods, max/min values, domain/range,
  Ferris-wheel/AC modeling constants -- was independently recomputed
  before transcription. TWO genuine errors were found and corrected
  in this chapter's source answer key (both parity/even-odd
  classification mistakes): Q78 (f(x) = x^3 sin x cos x) and Q93
  (f(x) = -x^2 sin x cot x) are both actually EVEN functions by
  direct substitution of f(-x), not "Odd" as the source key stated;
  both are fixed here with an inline note. Options re-ordered where
  the PDF's two-column layout listed them as A,C / B,D. Includes 3
  original scenario (stimulus) sets not in the source. Every
  question validated to have exactly 4 distinct options.

  MATH FORMATTING: wrap inline math in \( \) so KaTeX renders it.
*/
var CLASS11_MATH_MCQ_CH9 = {
  chapters: [
    {
      id: 9,
      name: "Trigonometric Functions",
      mcq: [
    ["The domain of \\(y=\\sin x\\) is:", ["\\(\\mathbb{R}\\) or \\((-\\infty,\\infty)\\)", "\\([-1,1]\\)", "\\(\\mathbb{R}-\\{0\\}\\)", "\\((0,\\infty)\\)"], 0],
    ["The range of \\(y=\\sin x\\) is:", ["\\(\\mathbb{R}\\)", "\\([-1,1]\\)", "\\((-1,1)\\)", "\\([0,1]\\)"], 1],
    ["The range of \\(y=\\cos x\\) is:", ["\\([-1,1]\\)", "\\([0,1]\\)", "\\((-1,1)\\)", "\\(\\mathbb{R}\\)"], 0],
    ["The domain of \\(y=\\tan x\\) excludes points of the form:", ["\\(2n\\pi,\\ n\\in\\mathbb{Z}\\)", "\\(\\tfrac{n\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)"], 2],
    ["The domain of \\(y=\\cot x\\) excludes points of the form:", ["\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\(\\tfrac{n\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)", "\\(2n\\pi,\\ n\\in\\mathbb{Z}\\)"], 2],
    ["The range of \\(y=\\tan x\\) is:", ["\\(\\mathbb{R}-\\{0\\}\\)", "\\([-1,1]\\)", "\\((-1,1)\\)", "\\(\\mathbb{R}\\)"], 3],
    ["The range of \\(y=\\sec x\\) is:", ["\\([-1,1]\\)", "\\(\\mathbb{R}-(-1,1)\\)", "\\(\\mathbb{R}\\)", "\\((-1,1)\\)"], 1],
    ["The range of \\(y=\\csc x\\) is:", ["\\([-1,1]\\)", "\\((-1,1)\\)", "\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-(-1,1)\\)"], 3],
    ["For any real \\(\\theta\\), which inequality is always true?", ["\\(|\\sin\\theta|\\ge1\\)", "\\(|\\tan\\theta|\\le1\\)", "\\(|\\sec\\theta|\\le1\\)", "\\(|\\sin\\theta|\\le1\\)"], 3],
    ["For any real \\(\\theta\\) where defined, which inequality is always true?", ["\\(\\sec\\theta=0\\) is possible", "\\(|\\sec\\theta|\\ge1\\)", "\\(|\\sec\\theta|<1\\)", "\\(|\\sec\\theta|\\le1\\)"], 1],
    ["\\(\\tan\\theta\\) and \\(\\cot\\theta\\) can take:", ["Any real number value", "Only positive values", "Only values in \\([-1,1]\\)", "Only integer values"], 0],
    ["\\(\\sec\\theta\\) and \\(\\csc\\theta\\) cannot take any value in the interval:", ["\\((1,\\infty)\\)", "\\((-1,1)\\)", "\\((-\\infty,-1)\\)", "\\([-1,1]\\)"], 1],
    ["The domain of \\(y=\\sec x\\) excludes:", ["\\(2n\\pi,\\ n\\in\\mathbb{Z}\\)", "\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)", "All real numbers"], 1],
    ["The domain of \\(y=\\csc x\\) excludes:", ["\\(2n\\pi,\\ n\\in\\mathbb{Z}\\)", "All real numbers", "\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)"], 3],
    ["The domain of \\(y=4\\sin3x\\) is:", ["\\([-4,4]\\)", "\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{0\\}\\)", "\\([-1,1]\\)"], 1],
    ["The range of \\(y=4\\sin3x\\) is:", ["\\(\\mathbb{R}\\)", "\\([-4,4]\\)", "\\([-1,1]\\)", "\\([-3,3]\\)"], 1],
    ["The range of \\(y=7\\cos4x\\) is:", ["\\([-4,4]\\)", "\\(\\mathbb{R}\\)", "\\([-7,7]\\)", "\\([-1,1]\\)"], 2],
    ["The range of \\(y=\\sin\\dfrac{2x}3\\) is:", ["\\(\\mathbb{R}\\)", "\\([0,1]\\)", "\\(\\left[-\\tfrac23,\\tfrac23\\right]\\)", "\\([-1,1]\\)"], 3],
    ["For \\(y=\\dfrac1{2\\cos x-1}\\), the range is:", ["\\(\\mathbb{R}\\)", "\\(\\left(-\\infty,-\\tfrac13\\right]\\cup[1,\\infty)\\)", "\\([-1,1]\\)", "\\(\\left[-\\tfrac13,1\\right]\\)"], 1],
    ["For \\(y=\\dfrac1{2-\\sin3x}\\), the range is:", ["\\([-1,1]\\)", "\\([1,3]\\)", "\\(\\left(-\\infty,\\tfrac13\\right)\\)", "\\(\\left[\\tfrac13,1\\right]\\)"], 3],
    ["The period of \\(f(x)=\\cos(3x)\\) is:", ["\\(\\dfrac{2\\pi}3\\)", "\\(\\dfrac{4\\pi}3\\)", "\\(3\\pi\\)", "\\(\\dfrac{\\pi}3\\)"], 0],
    ["The period of \\(f(x)=\\cot\\left(\\dfrac27x\\right)\\) is:", ["\\(\\dfrac{7\\pi}2\\)", "\\(\\dfrac{7\\pi}4\\)", "\\(7\\pi\\)", "\\(\\dfrac{2\\pi}7\\)"], 0],
    ["The period of \\(f(x)=\\tan\\left(\\dfrac23x\\right)\\) is:", ["\\(\\dfrac{3\\pi}4\\)", "\\(\\dfrac{2\\pi}3\\)", "\\(\\dfrac{3\\pi}2\\)", "\\(3\\pi\\)"], 2],
    ["The period of \\(f(x)=\\sin\\left(\\dfrac32x\\right)\\) is:", ["\\(\\dfrac{3\\pi}2\\)", "\\(\\dfrac{8\\pi}3\\)", "\\(\\dfrac{2\\pi}3\\)", "\\(\\dfrac{4\\pi}3\\)"], 3],
    ["The period of \\(f(x)=\\cot\\left(\\dfrac52x\\right)\\) is:", ["\\(\\dfrac{4\\pi}5\\)", "\\(\\dfrac{2\\pi}5\\)", "\\(\\dfrac{\\pi}5\\)", "\\(\\dfrac{5\\pi}2\\)"], 1],
    ["The period of \\(f(x)=\\csc\\left(\\dfrac35x\\right)\\) is:", ["\\(\\dfrac{20\\pi}3\\)", "\\(\\dfrac{3\\pi}5\\)", "\\(\\dfrac{10\\pi}3\\)", "\\(\\dfrac{5\\pi}3\\)"], 2],
    ["The period of \\(f(x)=\\cot(3x)\\) is:", ["\\(\\dfrac{\\pi}3\\)", "\\(3\\pi\\)", "\\(\\dfrac{\\pi}6\\)", "\\(\\dfrac{2\\pi}3\\)"], 0],
    ["The period of \\(f(x)=\\cot(x)\\) is:", ["\\(2\\pi\\)", "\\(\\dfrac{\\pi}2\\)", "\\(\\dfrac{7\\pi}3\\)", "\\(\\pi\\)"], 3],
    ["The period of \\(f(x)=\\cos\\left(\\dfrac53x\\right)\\) is:", ["\\(\\dfrac{3\\pi}5\\)", "\\(\\dfrac{5\\pi}3\\)", "\\(\\dfrac{12\\pi}5\\)", "\\(\\dfrac{6\\pi}5\\)"], 3],
    ["The period of \\(f(x)=\\tan(5x)\\) is:", ["\\(5\\pi\\)", "\\(\\dfrac{2\\pi}5\\)", "\\(\\dfrac{\\pi}{10}\\)", "\\(\\dfrac{\\pi}5\\)"], 3],
    ["The period of \\(f(x)=\\sec(3x)\\) is:", ["\\(\\dfrac{2\\pi}3\\)", "\\(\\dfrac{\\pi}3\\)", "\\(3\\pi\\)", "\\(\\dfrac{4\\pi}3\\)"], 0],
    ["The period of \\(f(x)=\\cos\\left(\\dfrac75x\\right)\\) is:", ["\\(\\dfrac{20\\pi}7\\)", "\\(\\dfrac{10\\pi}7\\)", "\\(\\dfrac{5\\pi}7\\)", "\\(\\dfrac{7\\pi}5\\)"], 1],
    ["The period of \\(f(x)=\\csc(x)\\) is:", ["\\(3\\pi\\)", "\\(2\\pi\\)", "\\(4\\pi\\)", "\\(\\pi\\)"], 1],
    ["The period of \\(f(x)=\\csc\\left(\\dfrac32x\\right)\\) is:", ["\\(\\dfrac{4\\pi}3\\)", "\\(\\dfrac{2\\pi}3\\)", "\\(\\dfrac{8\\pi}3\\)", "\\(\\dfrac{3\\pi}2\\)"], 0],
    ["The period of \\(y=\\sin x\\) is:", ["\\(\\pi\\)", "\\(2\\pi\\)", "\\(\\dfrac{\\pi}2\\)", "\\(4\\pi\\)"], 1],
    ["The period of \\(y=\\cos x\\) is:", ["\\(\\pi\\)", "\\(\\dfrac{\\pi}2\\)", "\\(2\\pi\\)", "\\(4\\pi\\)"], 2],
    ["The period of \\(y=\\tan x\\) is:", ["\\(\\dfrac{\\pi}2\\)", "\\(2\\pi\\)", "\\(\\dfrac{3\\pi}2\\)", "\\(\\pi\\)"], 3],
    ["The period of \\(y=\\cot x\\) is:", ["\\(\\pi\\)", "\\(\\dfrac{3\\pi}2\\)", "\\(\\dfrac{\\pi}2\\)", "\\(2\\pi\\)"], 0],
    ["If \\(p\\) is the period of \\(f(x)\\), then \\(f(ax+b)\\), \\(a>0\\), has period:", ["\\(\\dfrac{p}{|a|}\\)", "\\(\\dfrac{p}{a^2}\\)", "\\(p|a|\\)", "\\(p+a\\)"], 0],
    ["If \\(p\\) is the period of \\(f(x)\\), then \\(af(x)+b\\), \\(a>0\\), has period:", ["\\(\\dfrac{p}a\\)", "\\(p\\)", "\\(p+b\\)", "\\(ap\\)"], 1],
    ["The period of \\(f(x)=\\cot3x+\\sin\\dfrac{2x}3\\) is:", ["\\(\\pi\\)", "\\(\\dfrac{2\\pi}3\\)", "\\(6\\pi\\)", "\\(3\\pi\\)"], 3],
    ["The period of \\(f(x)=\\sin x+\\cos2x\\) is:", ["\\(\\pi\\)", "\\(2\\pi\\)", "\\(4\\pi\\)", "\\(\\dfrac{\\pi}2\\)"], 1],
    ["The period of \\(f(x)=\\tan x+\\sin\\dfrac{x}2\\) is:", ["\\(\\pi\\)", "\\(\\dfrac{\\pi}2\\)", "\\(4\\pi\\)", "\\(2\\pi\\)"], 2],
    ["The maximum and minimum values of \\(y=-9-7\\cos\\theta\\) are:", ["Max = 7, Min = \\(-7\\)", "Max = \\(-2\\), Min = \\(-16\\)", "Max = \\(-1\\), Min = \\(-17\\)", "Max = \\(-2\\), Min = \\(-9\\)"], 1],
    ["The maximum and minimum values of \\(y=-8-8\\sin\\theta\\) are:", ["Max = 0, Min = \\(-8\\)", "Max = 0, Min = \\(-16\\)", "Max = 1, Min = \\(-17\\)", "Max = 8, Min = \\(-8\\)"], 1],
    ["The maximum and minimum values of \\(y=-7+3\\sin\\theta\\) are:", ["Max = 3, Min = \\(-3\\)", "Max = \\(-4\\), Min = \\(-10\\)", "Max = \\(-3\\), Min = \\(-11\\)", "Max = \\(-4\\), Min = \\(-7\\)"], 1],
    ["The maximum and minimum values of \\(y=9-8\\sin\\theta\\) are:", ["Max = 17, Min = 1", "Max = 8, Min = \\(-8\\)", "Max = 18, Min = 0", "Max = 17, Min = 9"], 0],
    ["The maximum and minimum values of \\(y=-8-9\\sin\\theta\\) are:", ["Max = 9, Min = \\(-9\\)", "Max = 2, Min = \\(-18\\)", "Max = 1, Min = \\(-17\\)", "Max = 1, Min = \\(-8\\)"], 2],
    ["The maximum and minimum values of \\(y=1-5\\sin\\theta\\) are:", ["Max = 6, Min = 1", "Max = 5, Min = \\(-5\\)", "Max = 7, Min = \\(-5\\)", "Max = 6, Min = \\(-4\\)"], 3],
    ["The maximum and minimum values of \\(y=-8-5\\cos\\theta\\) are:", ["Max = \\(-3\\), Min = \\(-8\\)", "Max = \\(-2\\), Min = \\(-14\\)", "Max = \\(-3\\), Min = \\(-13\\)", "Max = 5, Min = \\(-5\\)"], 2],
    ["The maximum and minimum values of \\(y=-7+5\\sin\\theta\\) are:", ["Max = \\(-1\\), Min = \\(-13\\)", "Max = \\(-2\\), Min = \\(-12\\)", "Max = 5, Min = \\(-5\\)", "Max = \\(-2\\), Min = \\(-7\\)"], 1],
    ["The maximum and minimum values of \\(y=3+4\\sin\\theta\\) are:", ["Max = 8, Min = \\(-2\\)", "Max = 4, Min = \\(-4\\)", "Max = 7, Min = 3", "Max = 7, Min = \\(-1\\)"], 3],
    ["The maximum and minimum values of \\(y=-6-\\cos\\theta\\) are:", ["Max = \\(-5\\), Min = \\(-7\\)", "Max = \\(-5\\), Min = \\(-6\\)", "Max = \\(-4\\), Min = \\(-8\\)", "Max = 1, Min = \\(-1\\)"], 0],
    ["The maximum and minimum values of \\(y=5+6\\sin\\theta\\) are:", ["Max = 6, Min = \\(-6\\)", "Max = 11, Min = 5", "Max = 12, Min = \\(-2\\)", "Max = 11, Min = \\(-1\\)"], 3],
    ["The maximum and minimum values of \\(y=6-9\\sin\\theta\\) are:", ["Max = 15, Min = 6", "Max = 9, Min = \\(-9\\)", "Max = 16, Min = \\(-4\\)", "Max = 15, Min = \\(-3\\)"], 3],
    ["The maximum and minimum values of \\(y=-1-9\\cos\\theta\\) are:", ["Max = 9, Min = \\(-11\\)", "Max = 8, Min = \\(-1\\)", "Max = 8, Min = \\(-10\\)", "Max = 9, Min = \\(-9\\)"], 2],
    ["The maximum and minimum values of \\(y=7-4\\cos\\theta\\) are:", ["Max = 4, Min = \\(-4\\)", "Max = 11, Min = 3", "Max = 12, Min = 2", "Max = 11, Min = 7"], 1],
    ["The maximum and minimum values of \\(y=1+4\\cos\\theta\\) are:", ["Max = 5, Min = \\(-3\\)", "Max = 5, Min = 1", "Max = 4, Min = \\(-4\\)", "Max = 6, Min = \\(-4\\)"], 0],
    ["The maximum and minimum values of \\(y=-3-3\\cos\\theta\\) are:", ["Max = 0, Min = \\(-6\\)", "Max = 0, Min = \\(-3\\)", "Max = 3, Min = \\(-3\\)", "Max = 1, Min = \\(-7\\)"], 0],
    ["The maximum and minimum values of \\(y=-3-5\\sin\\theta\\) are:", ["Max = 5, Min = \\(-5\\)", "Max = 2, Min = \\(-8\\)", "Max = 3, Min = \\(-9\\)", "Max = 2, Min = \\(-3\\)"], 1],
    ["The maximum and minimum values of \\(y=-7-\\sin\\theta\\) are:", ["Max = \\(-6\\), Min = \\(-7\\)", "Max = 1, Min = \\(-1\\)", "Max = \\(-5\\), Min = \\(-9\\)", "Max = \\(-6\\), Min = \\(-8\\)"], 3],
    ["The maximum and minimum values of \\(y=-1-3\\cos\\theta\\) are:", ["Max = 2, Min = \\(-4\\)", "Max = 3, Min = \\(-5\\)", "Max = 3, Min = \\(-3\\)", "Max = 2, Min = \\(-1\\)"], 0],
    ["The maximum and minimum values of \\(y=1+6\\cos\\theta\\) are:", ["Max = 6, Min = \\(-6\\)", "Max = 8, Min = \\(-6\\)", "Max = 7, Min = 1", "Max = 7, Min = \\(-5\\)"], 3],
    ["The function \\(f(x)=\\sin x\\) is a/an:", ["Both even and odd", "Even function", "Neither even nor odd", "Odd function"], 3],
    ["The function \\(f(x)=\\cos x\\) is a/an:", ["Both even and odd", "Even function", "Odd function", "Neither even nor odd"], 1],
    ["The function \\(f(x)=\\tan x\\) is a/an:", ["Odd function", "Neither even nor odd", "Both even and odd", "Even function"], 0],
    ["The function \\(f(x)=\\sec x\\) is a/an:", ["Neither even nor odd", "Both even and odd", "Even function", "Odd function"], 2],
    ["The function \\(f(x)=\\csc x\\) is a/an:", ["Both even and odd", "Neither even nor odd", "Odd function", "Even function"], 2],
    ["The function \\(f(x)=\\cot x\\) is a/an:", ["Neither even nor odd", "Both even and odd", "Even function", "Odd function"], 3],
    ["The function \\(f(x)=x^3\\sin x\\) is a/an:", ["Odd function", "Both even and odd", "Even function", "Neither even nor odd"], 2],
    ["The function \\(f(x)=x^3\\sin x\\cos x\\) is a/an: (Note: worked from \\(f(-x)=(-x)^3\\sin(-x)\\cos(-x)=f(x)\\); the source key listed \\\\(\\\\text{`Odd function'}\\\\), which is a parity error -- the correct classification is Even.)", ["Odd function", "Neither even nor odd", "Both even and odd", "Even function"], 3],
    ["The function \\(f(x)=3\\sin x+4\\cos x\\) is a/an:", ["Both even and odd", "Neither even nor odd", "Odd function", "Even function"], 1],
    ["The function \\(f(x)=\\dfrac{\\tan x-\\sin x}{x}\\) is a/an:", ["Odd function", "Even function", "Neither even nor odd", "Both even and odd"], 1],
    ["A function \\(f\\) is odd if and only if:", ["\\(f(x)=0\\)", "\\(f(-x)=1/f(x)\\)", "\\(f(-x)=-f(x)\\)", "\\(f(-x)=f(x)\\)"], 2],
    ["A function \\(f\\) is even if and only if:", ["\\(f(-x)=-f(x)\\)", "\\(f(-x)=f(x)\\)", "\\(f(-x)=1/f(x)\\)", "\\(f(x)=0\\)"], 1],
    ["The graph of an odd function is symmetric with respect to:", ["The \\(y\\)-axis", "The origin", "The \\(x\\)-axis", "The line \\(y=x\\)"], 1],
    ["The graph of an even function is symmetric with respect to:", ["The line \\(y=x\\)", "The \\(x\\)-axis", "The origin", "The \\(y\\)-axis"], 3],
    ["The function \\(f(x)=-x^2\\sin x\\cot x\\) is a/an: (Note: worked from \\(f(-x)=f(x)\\); the source key listed \\\\(\\\\text{`Odd function'}\\\\), which is a parity error -- the correct classification is Even.)", ["Odd function", "Neither even nor odd", "Both even and odd", "Even function"], 3],
    ["The amplitude of the graph of \\(y=\\sin x\\) is:", ["0", "1", "\\(\\pi\\)", "2"], 1],
    ["The amplitude of the graph of \\(y=3\\sin2x\\) is:", ["3", "2", "6", "1"], 0],
    ["The nature (odd/even) of the graph of \\(y=\\tan x\\) is:", ["Neither", "Odd function", "Even function", "Both"], 1],
    ["The graph of \\(y=\\cos x\\) crosses the \\(x\\)-axis first (for \\(x>0\\)) at:", ["\\(x=\\pi\\)", "\\(x=2\\pi\\)", "\\(x=\\dfrac{\\pi}4\\)", "\\(x=\\dfrac{\\pi}2\\)"], 3],
    ["The graph of \\(y=\\sin x\\) crosses the \\(x\\)-axis first (for \\(x>0\\)) at:", ["\\(x=2\\pi\\)", "\\(x=\\dfrac{3\\pi}2\\)", "\\(x=\\pi\\)", "\\(x=\\dfrac{\\pi}2\\)"], 2],
    ["The graph of \\(y=\\tan x\\) has vertical asymptotes at:", ["\\(x=0\\) only", "\\(x=2n\\pi\\)", "\\(x=n\\pi\\)", "\\(x=(2n+1)\\tfrac{\\pi}2\\)"], 3],
    ["The graph of \\(y=\\cot x\\) has vertical asymptotes at:", ["\\(x=(2n+1)\\tfrac{\\pi}2\\)", "\\(x=n\\pi\\)", "No asymptotes", "\\(x=2n\\pi\\)"], 1],
    ["On the interval \\([0,2\\pi]\\), the graph of \\(y=\\sin x\\) attains its maximum value at:", ["\\(x=\\pi\\)", "\\(x=\\dfrac{\\pi}2\\)", "\\(x=0\\)", "\\(x=\\dfrac{3\\pi}2\\)"], 1],
    ["On the interval \\([0,2\\pi]\\), the graph of \\(y=\\cos x\\) attains its minimum value at:", ["\\(x=2\\pi\\)", "\\(x=\\dfrac{3\\pi}2\\)", "\\(x=\\dfrac{\\pi}2\\)", "\\(x=\\pi\\)"], 3],
    ["A single cycle of a periodic function's graph, drawn over an interval equal to its period, can be used to obtain the complete graph by:", ["Repeating it over every subsequent interval of that length", "Reflecting it about the \\(y\\)-axis only", "Reflecting it once about the origin", "It cannot be extended further"], 0],
    ["A function whose value repeats after a specific, fixed interval is called a:", ["Even function", "Odd function", "Linear function", "Periodic function"], 3],
    ["If \\(f(x+p)=f(x)\\) for the smallest positive \\(p\\), then \\(p\\) is called the function's:", ["Amplitude", "Phase", "Period", "Domain"], 2],
    ["The values of trigonometric functions for \\(\\theta\\) and \\(2n\\pi\\pm\\theta\\ (n\\in\\mathbb{Z})\\) being the same is called:", ["Symmetry", "Periodicity", "Boundedness", "Continuity"], 1],
    ["If \\(p\\) is the period of a periodic function \\(f(x)\\), then \\(\\dfrac1{f(x)}\\) (where defined) has period:", ["\\(2p\\)", "\\(\\dfrac{p}2\\)", "\\(p\\)", "\\(\\dfrac1p\\)"], 2],
    ["Since \\(\\sin\\theta=\\dfrac1{\\csc\\theta}\\), the period of \\(y=\\csc\\theta\\) is:", ["\\(\\pi\\)", "\\(2\\pi\\), same as \\(\\sin\\theta\\)", "\\(4\\pi\\)", "\\(\\dfrac{\\pi}2\\)"], 1],
    ["A Ferris wheel of diameter 60 ft makes one revolution every 100 seconds. The angular quantity \\(B\\) in \\(h(t)=A\\cos(Bt)+C\\) equals:", ["\\(\\dfrac{2\\pi}{100}=\\dfrac{\\pi}{50}\\)", "\\(2\\pi\\times100\\)", "\\(\\dfrac{\\pi}{100}\\)", "\\(\\dfrac{100}{2\\pi}\\)"], 0],
    ["A Ferris wheel has diameter 30 m with center 17 m above the ground. The amplitude \\(A\\) of its height function is:", ["15 m", "2 m", "17 m", "30 m"], 0],
    ["For the Ferris wheel of diameter 30 m, center 17 m above ground, the vertical shift \\(C\\) in \\(h(t)=A\\cos(Bt)+C\\) is:", ["17", "15", "0", "30"], 0],
    ["A wave completing 1 revolution every 60 seconds has angular frequency \\(B=\\)", ["\\(60\\pi\\)", "\\(\\dfrac{\\pi}{30}\\)", "\\(\\dfrac{2\\pi}{30}\\)", "\\(\\dfrac{\\pi}{60}\\)"], 1],
    ["Alternating current with frequency 56 Hz has period:", ["\\(\\dfrac1{56}\\) s", "56 s", "\\(\\dfrac1{56\\pi}\\) s", "\\(56\\pi\\) s"], 0],
    ["For the AC voltage model \\(V(t)=a\\sin(k(t-d))+c\\), the constant \\(k\\) is related to the period \\(T\\) by:", ["\\(k=2\\pi T\\)", "\\(k=\\dfrac{2\\pi}T\\)", "\\(k=\\dfrac{\\pi}T\\)", "\\(k=\\dfrac{T}{2\\pi}\\)"], 1],
    ["A flagpole top sways 8 cm to either side of rest, completing 260 cycles per minute. The amplitude of the modeling sinusoid is:", ["4 cm", "16 cm", "260 cm", "8 cm"], 3]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Function</th><th>Form</th></tr><tr><td>\\(y\\)</td><td>\\(5+3\\sin\\left(2x-\\tfrac{\\pi}4\\right)\\)</td></tr></table>",
          questions: [
            ["The amplitude of this function is:", ["3", "5", "2", "\\(\\tfrac{\\pi}4\\)"], 0],
            ["The period of this function is:", ["\\(\\pi\\)", "\\(2\\pi\\)", "\\(\\tfrac{\\pi}2\\)", "\\(4\\pi\\)"], 0],
            ["The maximum value of \\(y\\) is:", ["8", "5", "3", "2"], 0],
            ["The minimum value of \\(y\\) is:", ["2", "5", "\\(-3\\)", "8"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Ferris wheel</th><th>Value</th></tr><tr><td>Diameter</td><td>40 m</td></tr><tr><td>Center height</td><td>22 m</td></tr><tr><td>Period</td><td>120 s</td></tr></table>",
          questions: [
            ["Modeling height as \\(h(t)=A\\cos(Bt)+C\\), the amplitude \\(A\\) is:", ["20 m", "40 m", "22 m", "2 m"], 0],
            ["The vertical shift \\(C\\) is:", ["22", "20", "40", "0"], 0],
            ["The value of \\(B\\) is:", ["\\(\\dfrac{2\\pi}{120}=\\dfrac{\\pi}{60}\\)", "\\(\\dfrac{\\pi}{120}\\)", "\\(2\\pi\\times120\\)", "\\(\\dfrac{120}{2\\pi}\\)"], 0],
            ["The maximum height reached by a rider is:", ["42 m", "40 m", "44 m", "20 m"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Function</th><th>Parity check</th></tr><tr><td>\\(f(x)\\)</td><td>\\(x^2\\cos x\\)</td></tr></table>",
          questions: [
            ["\\(f(-x)\\) equals:", ["\\(x^2\\cos x\\)", "\\(-x^2\\cos x\\)", "\\(x^2\\sin x\\)", "\\(-x^2\\sin x\\)"], 0],
            ["Since \\(f(-x)=f(x)\\), the function \\(f(x)=x^2\\cos x\\) is:", ["Even", "Odd", "Neither even nor odd", "Both even and odd"], 0],
            ["This follows because \\(x^2\\) is even and \\(\\cos x\\) is:", ["Even", "Odd", "Neither", "Periodic only, no parity"], 0],
            ["By the same reasoning, \\(g(x)=x^2\\sin x\\) (even \\(\\times\\) odd) would be:", ["Odd", "Even", "Neither even nor odd", "Both even and odd"], 0]
          ]
        }
      ],
      short: [],
      long: []
    }
  ]
};
