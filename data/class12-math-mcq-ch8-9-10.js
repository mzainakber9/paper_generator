/*
  CLASS 12 -- MATH -- MCQs -- CHAPTERS 8, 9 & 10 (100 each)
  -----------------------------------------------------------
  Chapter 8: Inverse Trigonometric Functions and Their Graphs.
  Chapter 9: Solution of Trigonometric Equations.
  Chapter 10: Numerical Methods.
  Source: a 300-question MCQ bank (Part A sourced from textbook
  review/practice exercises with an answer key, Part B newly written
  from definitions/facts/formulas), provided as a PDF. Every answer --
  inverse-trig identities and special values, general/particular
  trigonometric solutions, double-angle and sum-to-product formulas,
  auxiliary-angle (R sin/cos) form, bisection/Regula-Falsi/Newton-
  Raphson formulas and worked numerical iterations, trapezoidal and
  Simpson's rule computations and error bounds -- was independently
  re-derived (not just copied from the source key) before transcription.

  Several genuine errors were found in the source's Unit 10 Part B
  answer key and corrected here (verified against independent
  recomputation of each answer):
    - Q30 (FALSE-statement question): source key marked option B;
      the actually-false statement is option C ("numerical methods
      always give an exact, error-free answer").
    - Q31 (Newton-Raphson's alternate name): source key marked A
      ("method of chords"); correct is "method of tangent".
    - Q33 (bisection new-iterate formula): source key marked B (the
      Newton-Raphson formula); correct is x2=(x0+x1)/2.
    - Q10 (Regula Falsi convergence order): recomputed as "between
      1 and 2" (superlinear), matching the option offered for it.
    - Q13 (Newton-Raphson worked example): the source's f(x)=x^3-4,
      x0=1.4 does not converge to any of the 4 given options under
      correct NR computation (confirmed via independent recompute,
      not a transcription slip) -- replaced with a well-posed
      classic example, f(x)=x^2-2, x0=1.5, keeping the same topic
      and answer-option format.
  All other 295 answers (Units 8 & 9 in full, and Unit 10's
  well-formed questions) checked out correct against independent
  recomputation; Unit 8/9 Part A also cross-checked against the
  source's own given answer key, which matched throughout.

  Each chapter also gets 3 original scenario (stimulus) sets not in
  the source (9 total), built and verified from the same material.
  Option order for every question (both the 300 main MCQs and the
  36 stimulus questions) was randomly shuffled so correct answers
  are not predictably in one position; every question validated to
  have exactly 4 distinct options before shipping.

  MATH FORMATTING: wrap inline math in \\( \\) so KaTeX renders it.
*/
var CLASS12_MATH_MCQ_CH8_9_10 = {
  chapters: [
    {
      id: 8,
      name: "Inverse Trigonometric Functions and Their Graphs",
      mcq: [
    ["If \\(\\sin^{-1}\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{2} - x\\), then the value of \\(x\\) is:", ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{6}\\)"], 0],
    ["What is the principal value of \\(\\sec\\left[\\cos^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right)\\right]\\)?", ["\\(\\frac{2}{\\sqrt{3}}\\)", "2", "\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)"], 0],
    ["The value of \\(\\csc\\left[\\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right)\\right]\\) is:", ["-1", "\\(\\frac{1}{2}\\)", "2", "\\(-\\frac{1}{2}\\)"], 2],
    ["The value of \\(\\cos\\left(\\frac{\\pi}{6} + \\cos^{-1}\\left(-\\frac{1}{2}\\right)\\right)\\) is:", ["\\(-\\frac{1}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(-\\frac{\\sqrt{3}}{2}\\)"], 3],
    ["For what value of \\(x \\in (0, 2\\pi)\\), \\(\\sin x = -\\frac{1}{2}\\)?", ["\\(\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\)", "\\(\\frac{5\\pi}{6}, \\frac{11\\pi}{6}\\)", "\\(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\)", "\\(\\frac{7\\pi}{6}, \\frac{\\pi}{6}\\)"], 0],
    ["The value of \\(\\sin^{-1}\\left(\\frac{5}{13}\\right)\\) is:", ["\\(\\cos^{-1}\\left(\\frac{5}{12}\\right)\\)", "\\(\\csc^{-1}\\left(\\frac{13}{15}\\right)\\)", "\\(\\tan^{-1}\\left(\\frac{5}{12}\\right)\\)", "\\(\\cos\\left(\\frac{5}{13}\\right)\\)"], 2],
    ["If \\(\\sin^{-1}\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{2} - x\\), then what is the value of \\(x\\)?", ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{2}\\)"], 0],
    ["What results \\(\\sec^{-1}(\\infty) - \\sec^{-1}(2)\\)?", ["\\(\\frac{\\pi}{3}\\)", "\\(\\infty\\)", "\\(\\frac{\\pi}{6}\\)", "2"], 2],
    ["What results \\(\\sec^{-1}(1) + \\sec^{-1}(\\sqrt{2})\\)?", ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{4}\\)"], 3],
    ["What results \\(\\sec^{-1}(1) + \\sec^{-1}(1)\\)?", ["2", "1", "0", "\\(\\sqrt{2}\\)"], 2],
    ["Arcsin (or \\(\\sin^{-1}\\)) is the inverse of which function?", ["Secant", "Sine", "Cosine", "Tangent"], 1],
    ["Arccos (or \\(\\cos^{-1}\\)) is the inverse of which function?", ["Cosecant", "Cotangent", "Cosine", "Sine"], 2],
    ["\\(\\tan^{-1} x\\) is also written as:", ["Arctan x", "Arcsec x", "Arccsc x", "Arccot x"], 0],
    ["Arcsec (or \\(\\sec^{-1}\\)) is the inverse of which function?", ["Cosecant", "Cotangent", "Secant", "Sine"], 2],
    ["Arccsc (or \\(\\csc^{-1}\\)) is the inverse of which function?", ["Cosine", "Cosecant", "Tangent", "Secant"], 1],
    ["Arccot (or \\(\\cot^{-1}\\)) is the inverse of which function?", ["Sine", "Tangent", "Secant", "Cotangent"], 3],
    ["The domain of \\(y = \\sin^{-1} x\\) is:", ["\\([0, 1]\\)", "\\(|x| \\ge 1\\)", "\\((-\\infty, \\infty)\\)", "\\([-1, 1]\\)"], 3],
    ["The range (principal values) of \\(y = \\sin^{-1} x\\) is:", ["\\([0, \\pi]\\)", "\\((0, \\pi)\\)", "\\((-\\infty, \\infty)\\)", "\\(\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)"], 3],
    ["The domain of \\(y = \\cos^{-1} x\\) is:", ["\\([-1, 1]\\)", "\\((-\\infty, \\infty)\\)", "\\([0, \\pi]\\)", "\\(|x| \\ge 1\\)"], 0],
    ["The range (principal values) of \\(y = \\cos^{-1} x\\) is:", ["\\((0, 2\\pi)\\)", "\\(\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)", "\\([0, \\pi]\\)", "\\((-\\pi, \\pi)\\)"], 2],
    ["The domain of \\(y = \\tan^{-1} x\\) is:", ["\\(|x| \\ge 1\\)", "\\([-1, 1]\\)", "\\((-\\infty, \\infty)\\)", "\\([0, \\pi]\\)"], 2],
    ["The range (principal values) of \\(y = \\tan^{-1} x\\) is:", ["\\([0, \\pi]\\)", "\\([-1, 1]\\)", "\\((0, \\pi)\\)", "\\(\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)\\)"], 3],
    ["The range (principal values) of \\(y = \\cot^{-1} x\\) is:", ["\\((-\\pi, 0)\\)", "\\([0, \\pi]\\)", "\\(\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)\\)", "\\((0, \\pi)\\)"], 3],
    ["The domain of \\(y = \\sec^{-1} x\\) is:", ["\\((-\\infty, \\infty)\\)", "\\(x > 0\\)", "\\([-1, 1]\\)", "\\(|x| \\ge 1\\)"], 3],
    ["The range of \\(y = \\sec^{-1} x\\) excludes which value?", ["\\(\\pi\\)", "0", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"], 2],
    ["The domain of \\(y = \\csc^{-1} x\\) is:", ["\\(|x| \\ge 1\\)", "\\([-1, 1]\\)", "\\(x \\ge 0\\)", "\\((-\\infty, \\infty)\\)"], 0],
    ["\\(\\sin^{-1}(1) = ?\\)", ["\\(\\pi\\)", "0", "\\(\\frac{\\pi}{2}\\)", "\\(-\\frac{\\pi}{2}\\)"], 2],
    ["\\(\\sin^{-1}(-1) = ?\\)", ["0", "\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "\\(-\\frac{\\pi}{2}\\)"], 3],
    ["\\(\\sin^{-1}(0) = ?\\)", ["\\(\\frac{\\pi}{2}\\)", "-1", "0", "\\(\\pi\\)"], 2],
    ["\\(\\cos^{-1}(1) = ?\\)", ["\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "-1", "0"], 3],
    ["\\(\\cos^{-1}(0) = ?\\)", ["\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "0"], 1],
    ["\\(\\cos^{-1}(-1) = ?\\)", ["0", "\\(\\pi\\)", "\\(-\\pi\\)", "\\(\\frac{\\pi}{2}\\)"], 1],
    ["\\(\\tan^{-1}(0) = ?\\)", ["0", "\\(\\frac{\\pi}{2}\\)", "1", "\\(\\pi\\)"], 0],
    ["\\(\\tan^{-1}(1) = ?\\)", ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"], 3],
    ["\\(\\tan^{-1}(-1) = ?\\)", ["\\(-\\frac{\\pi}{4}\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(-\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"], 0],
    ["\\(\\sin^{-1}\\left(\\frac{\\sqrt{2}}{2}\\right) = ?\\)", ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)"], 1],
    ["\\(\\cos^{-1}\\left(\\frac{1}{2}\\right) = ?\\)", ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)"], 2],
    ["\\(\\cos^{-1}\\left(-\\frac{1}{2}\\right) = ?\\)", ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(-\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{3}\\)"], 1],
    ["\\(\\tan^{-1}(\\sqrt{3}) = ?\\)", ["\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{6}\\)"], 1],
    ["\\(\\cot^{-1}(1) = ?\\)", ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{3}\\)"], 2],
    ["\\(\\cot^{-1}(0) = ?\\)", ["\\(\\pi\\)", "\\(\\frac{\\pi}{4}\\)", "0", "\\(\\frac{\\pi}{2}\\)"], 3],
    ["\\(\\sec^{-1}(2) = ?\\)", ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)"], 3],
    ["\\(\\sec^{-1}(-2) = ?\\)", ["\\(-\\frac{\\pi}{3}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\pi\\)"], 1],
    ["\\(\\csc^{-1}(2) = ?\\)", ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{6}\\)"], 3],
    ["\\(\\csc^{-1}(-1) = ?\\)", ["\\(-\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "0", "\\(\\frac{\\pi}{2}\\)"], 0],
    ["\\(\\sin^{-1}\\left(-\\frac{1}{2}\\right) = ?\\)", ["\\(-\\frac{\\pi}{6}\\)", "\\(-\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{5\\pi}{6}\\)"], 0],
    ["The graph of \\(y = \\sin^{-1} x\\) passes through:", ["\\((0, \\pi)\\)", "\\((1, \\pi)\\)", "\\((-1, \\pi/2)\\)", "\\((0, 0)\\)"], 3],
    ["Which of the following is a decreasing function on its domain?", ["\\(y = \\cos^{-1} x\\)", "\\(y = \\sin^{-1} x\\)", "\\(y = \\tan^{-1} x\\)", "None of these"], 0],
    ["The horizontal asymptotes of \\(y = \\tan^{-1} x\\) are:", ["None", "\\(x = \\pm\\frac{\\pi}{2}\\)", "\\(y = 0, y = \\pi\\)", "\\(y = \\pm\\frac{\\pi}{2}\\)"], 3],
    ["The graph of \\(y = \\cot^{-1} x\\) has horizontal asymptotes:", ["\\(y = \\pm\\frac{\\pi}{2}\\)", "\\(x = 0, x = \\pi\\)", "\\(y = 0, y = \\pi\\)", "None"], 2],
    ["Trigonometric functions must have a restricted domain before inverting because, on their natural domain, they are:", ["Always positive", "Continuous", "Undefined", "Periodic and not one-to-one"], 3],
    ["\\(y = \\sin^{-1} x\\) is symmetric about the origin because it is a(n):", ["Even function", "Constant function", "Periodic function", "Odd function"], 3],
    ["Which inverse trig function is not an odd function?", ["\\(\\cos^{-1} x\\)", "\\(\\tan^{-1} x\\)", "\\(\\sin^{-1} x\\)", "\\(\\csc^{-1} x\\)"], 0],
    ["As \\(x \\to \\infty\\), \\(\\tan^{-1} x \\to\\)", ["0", "\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\infty\\)"], 2],
    ["\\(\\sin^{-1} x + \\cos^{-1} x = ?\\)", ["0", "\\(2\\pi\\)", "\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)"], 3],
    ["\\(\\tan^{-1} x + \\cot^{-1} x = ?\\)", ["\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "0", "\\(\\frac{\\pi}{4}\\)"], 1],
    ["\\(\\sec^{-1} x + \\csc^{-1} x = ?\\)", ["0", "\\(2\\pi\\)", "\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)"], 3],
    ["\\(\\sin^{-1}(-x) = ?\\)", ["\\(\\pi - \\sin^{-1} x\\)", "\\(\\sin^{-1} x\\)", "\\(-\\sin^{-1} x\\)", "\\(\\pi + \\sin^{-1} x\\)"], 2],
    ["\\(\\cos^{-1}(-x) = ?\\)", ["\\(\\pi + \\cos^{-1} x\\)", "\\(\\cos^{-1} x\\)", "\\(\\pi - \\cos^{-1} x\\)", "\\(-\\cos^{-1} x\\)"], 2],
    ["\\(\\tan^{-1}(-x) = ?\\)", ["\\(-\\tan^{-1} x\\)", "\\(\\tan^{-1} x\\)", "\\(\\frac{\\pi}{2} - \\tan^{-1} x\\)", "\\(\\pi - \\tan^{-1} x\\)"], 0],
    ["\\(\\tan^{-1}(1) + \\tan^{-1}(2) + \\tan^{-1}(3) = ?\\)", ["\\(\\frac{3\\pi}{2}\\)", "\\(2\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)"], 3],
    ["\\(\\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{3}\\right) = ?\\)", ["\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{4}\\)"], 3],
    ["\\(\\sin^{-1}\\left(\\frac{3}{5}\\right) + \\sin^{-1}\\left(\\frac{4}{5}\\right) = ?\\)", ["\\(\\pi\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"], 2],
    ["\\(2\\tan^{-1}\\left(\\frac{1}{2}\\right) = ?\\)", ["\\(\\tan^{-1}\\left(\\frac{4}{3}\\right)\\)", "\\(\\tan^{-1}(1)\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\tan^{-1}\\left(\\frac{3}{4}\\right)\\)"], 0],
    ["\\(\\tan^{-1}(1) - \\tan^{-1}\\left(\\frac{1}{3}\\right) = ?\\)", ["\\(\\tan^{-1}(2)\\)", "0", "\\(\\frac{\\pi}{4}\\)", "\\(\\tan^{-1}\\left(\\frac{1}{2}\\right)\\)"], 3],
    ["Using \\(\\tan^{-1} A + \\tan^{-1} B = \\tan^{-1}\\left(\\frac{A+B}{1-AB}\\right)\\), this formula requires:", ["\\(AB < 1\\)", "\\(AB > 1\\)", "\\(A = B\\)", "\\(AB = 1\\)"], 0],
    ["\\(\\sin\\left(\\cos^{-1}\\left(\\frac{3}{5}\\right)\\right) = ?\\)", ["\\(\\frac{3}{4}\\)", "\\(\\frac{4}{5}\\)", "\\(\\frac{5}{4}\\)", "\\(\\frac{3}{5}\\)"], 1],
    ["\\(\\cos\\left(\\sin^{-1}\\left(\\frac{5}{13}\\right)\\right) = ?\\)", ["\\(\\frac{12}{13}\\)", "\\(\\frac{5}{12}\\)", "\\(\\frac{5}{13}\\)", "\\(\\frac{13}{12}\\)"], 0],
    ["\\(\\tan\\left(\\sin^{-1}\\left(\\frac{1}{2}\\right)\\right) = ?\\)", ["\\(\\frac{1}{\\sqrt{3}}\\)", "\\(\\sqrt{3}\\)", "1", "\\(\\frac{1}{2}\\)"], 0],
    ["\\(\\sin\\left(\\tan^{-1}\\left(\\frac{3}{4}\\right)\\right) = ?\\)", ["\\(\\frac{4}{5}\\)", "\\(\\frac{3}{5}\\)", "\\(\\frac{4}{3}\\)", "\\(\\frac{3}{4}\\)"], 1],
    ["\\(\\cos\\left(\\tan^{-1}(1)\\right) = ?\\)", ["1", "0", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{\\sqrt{2}}\\)"], 3],
    ["\\(\\sec\\left(\\sin^{-1}\\left(\\frac{3}{5}\\right)\\right) = ?\\)", ["\\(\\frac{5}{3}\\)", "\\(\\frac{5}{4}\\)", "\\(\\frac{3}{5}\\)", "\\(\\frac{4}{5}\\)"], 1],
    ["\\(\\tan\\left(\\cos^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right)\\right) = ?\\)", ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\sqrt{3}\\)", "1", "\\(\\frac{1}{\\sqrt{3}}\\)"], 3],
    ["\\(\\cot\\left(\\sin^{-1}(1)\\right) = ?\\)", ["1", "-1", "0", "\\(\\infty\\)"], 2],
    ["\\(\\csc\\left(\\cos^{-1}(0)\\right) = ?\\)", ["-1", "\\(\\infty\\)", "1", "0"], 2],
    ["\\(\\sin\\left(2\\sin^{-1}\\left(\\frac{1}{2}\\right)\\right) = ?\\)", ["1", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "0"], 1],
    ["If \\(\\sin^{-1} x = \\frac{\\pi}{6}\\), then \\(x = ?\\)", ["\\(\\frac{\\sqrt{3}}{2}\\)", "1", "\\(\\frac{1}{\\sqrt{2}}\\)", "\\(\\frac{1}{2}\\)"], 3],
    ["If \\(\\cos^{-1} x = \\frac{\\pi}{3}\\), then \\(x = ?\\)", ["1", "\\(\\frac{1}{2}\\)", "\\(\\sqrt{3}\\)", "0"], 1],
    ["If \\(\\tan^{-1} x = \\frac{\\pi}{4}\\), then \\(x = ?\\)", ["\\(\\sqrt{3}\\)", "\\(\\frac{1}{\\sqrt{3}}\\)", "0", "1"], 3],
    ["If \\(\\sin^{-1}(2x) = \\frac{\\pi}{2}\\), then \\(x = ?\\)", ["0", "2", "\\(\\frac{1}{2}\\)", "1"], 2],
    ["If \\(\\cos^{-1}\\left(\\frac{x}{2}\\right) = \\frac{\\pi}{3}\\), then \\(x = ?\\)", ["2", "1", "\\(\\frac{1}{2}\\)", "\\(\\sqrt{3}\\)"], 1],
    ["If \\(2\\sin^{-1} x = \\frac{\\pi}{3}\\), then \\(x = ?\\)", ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{\\sqrt{2}}\\)", "\\(\\frac{1}{2}\\)", "1"], 2],
    ["The identity \\(\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}\\) holds for all \\(x\\) in:", ["\\([0, 1]\\)", "\\(x \\ge 1\\)", "\\([-1, 1]\\)", "\\((-\\infty, \\infty)\\)"], 2],
    ["If \\(\\tan^{-1} x + \\tan^{-1}(1) = \\frac{\\pi}{2}\\), then \\(x = ?\\)", ["-1", "0", "2", "1"], 3],
    ["If \\(\\sin^{-1} x = -\\sin^{-1}\\left(\\frac{1}{2}\\right)\\), then \\(x = ?\\)", ["-1", "\\(\\frac{1}{2}\\)", "\\(-\\frac{1}{2}\\)", "0"], 2],
    ["If \\(\\cos^{-1}(-x) = \\frac{2\\pi}{3}\\), then \\(x = ?\\)", ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(-\\frac{1}{2}\\)", "\\(\\frac{1}{2}\\)", "1"], 2],
    ["Which statement is correct (Misconception Alert)?", ["\\(\\sin^{-1} x = \\frac{1}{\\sin x}\\)", "\\(\\sin^{-1} x = \\csc x\\) always", "\\(\\sin^{-1} x\\) denotes the inverse function, not \\(\\frac{1}{\\sin x}\\)", "\\(\\sin^{-1} x = (\\sin x)^{-1}\\)"], 2],
    ["The graph of \\(y = \\sin^{-1} x\\) is obtained by reflecting the restricted sine graph about the line:", ["\\(x = 0\\)", "\\(y = 0\\)", "\\(y = -x\\)", "\\(y = x\\)"], 3],
    ["For \\(x \\in [-1, 1]\\), \\(\\sin(\\sin^{-1} x) = ?\\)", ["\\(x\\)", "\\(-x\\)", "1", "\\(\\frac{\\pi}{2}\\)"], 0],
    ["\\(\\sin^{-1}(\\sin x) = x\\) holds only when \\(x\\) lies in:", ["\\((-\\infty, \\infty)\\)", "\\([0, \\pi]\\)", "\\(\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)", "\\([0, 2\\pi]\\)"], 2],
    ["For each \\(x \\in [-1, 1]\\), how many values does the principal branch of \\(\\sin^{-1} x\\) give?", ["Infinitely many", "Exactly one", "Exactly two", "Zero"], 1],
    ["\\(\\tan^{-1} x\\) is classified as which type of function?", ["Periodic only", "Neither even nor odd", "Even", "Odd"], 3],
    ["\\(\\cos^{-1} x\\) is classified as which type of function?", ["Even", "Neither even nor odd", "Odd", "Both even and odd"], 1],
    ["Which inverse function has principal range \\((0, \\pi)\\)?", ["\\(\\csc^{-1} x\\)", "\\(\\tan^{-1} x\\)", "\\(\\sin^{-1} x\\)", "\\(\\cot^{-1} x\\)"], 3],
    ["\\(\\sec^{-1}(1) = ?\\)", ["\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "0", "-1"], 2],
    ["\\(\\csc^{-1}(1) = ?\\)", ["\\(\\pi\\)", "0", "\\(-\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{2}\\)"], 3],
    ["\\(\\cot^{-1}(-1) = ?\\)", ["\\(-\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{\\pi}{4}\\)"], 2],
    ["\\(\\sin^{-1}\\left(\\frac{1}{\\sqrt{2}}\\right) = ?\\)", ["\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{3}\\)"], 2],
    ["\\(\\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right) = ?\\)", ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{5\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(-\\frac{\\pi}{6}\\)"], 1],
    ["\\(\\tan^{-1}(-\\sqrt{3}) = ?\\)", ["\\(-\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(-\\frac{\\pi}{3}\\)"], 3]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Function</th><th>Domain</th><th>Range</th></tr><tr><td>\\(y=\\sin^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\(\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\)</td></tr><tr><td>\\(y=\\cos^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\([0,\\pi]\\)</td></tr><tr><td>\\(y=\\tan^{-1}x\\)</td><td>\\((-\\infty,\\infty)\\)</td><td>\\(\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)\\)</td></tr></table>",
          questions: [
            ["Using the table, which function has range \\([0,\\pi]\\)?", ["\\(\\tan^{-1}x\\)", "\\(\\cos^{-1}x\\)", "\\(\\cot^{-1}x\\)", "\\(\\sin^{-1}x\\)"], 1],
            ["A surveyor measures \\(\\theta = \\cos^{-1}(0.5)\\) using the table's \\(\\cos^{-1}\\) row. What is \\(\\theta\\)?", ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)"], 0],
            ["According to the table, which function's domain is all real numbers?", ["None of these", "\\(\\sin^{-1}x\\)", "\\(\\tan^{-1}x\\)", "\\(\\cos^{-1}x\\)"], 2],
            ["For \\(y=\\sin^{-1}x\\), an input of \\(x=1\\) (the edge of the domain in the table) gives \\(y=\\):", ["\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "0", "undefined"], 1]
          ]
        },
        {
          stimulus: "A ramp designer needs the angle of elevation \\(\\theta\\) for different ramp rise/run ratios, using \\(\\theta=\\tan^{-1}\\left(\\dfrac{\\text{rise}}{\\text{run}}\\right)\\).<table><tr><th>Ramp</th><th>Rise</th><th>Run</th><th>Ratio</th></tr><tr><td>A</td><td>1</td><td>1</td><td>1</td></tr><tr><td>B</td><td>1</td><td>\\(\\sqrt{3}\\)</td><td>\\(\\frac{1}{\\sqrt{3}}\\)</td></tr><tr><td>C</td><td>\\(\\sqrt{3}\\)</td><td>1</td><td>\\(\\sqrt{3}\\)</td></tr></table>",
          questions: [
            ["What is the angle \\(\\theta\\) for Ramp A?", ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{3}\\)"], 2],
            ["What is the angle \\(\\theta\\) for Ramp B?", ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)"], 3],
            ["What is the angle \\(\\theta\\) for Ramp C?", ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)"], 3],
            ["Ranking the three ramps from smallest to largest angle of elevation gives the order:", ["C, B, A", "B, A, C", "A, B, C", "B, C, A"], 1]
          ]
        },
        {
          stimulus: "An engineer models the angular position of a rotating arm using \\(f(t) = \\sin^{-1}(\\sin t)\\) for \\(t \\in [0, 2\\pi]\\), and a second signal \\(g(t) = \\tan^{-1}(\\tan t)\\) valid away from the asymptotes.",
          questions: [
            ["\\(f(t) = \\sin^{-1}(\\sin t) = t\\) holds only for \\(t\\) restricted to which interval?", ["\\(\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\)", "\\([0,\\pi]\\)", "\\([0,2\\pi]\\)", "\\((-\\infty,\\infty)\\)"], 0],
            ["The function \\(g(t) = \\tan^{-1}(\\tan t)\\) is undefined (has asymptotes) at:", ["\\(t=\\frac{\\pi}{2},\\frac{3\\pi}{2}\\)", "Nowhere; it is defined everywhere", "\\(t=0,\\pi,2\\pi\\)", "\\(t=\\frac{\\pi}{4},\\frac{3\\pi}{4}\\)"], 0],
            ["For \\(t = \\frac{3\\pi}{4}\\) (outside the principal range of \\(f\\)), \\(f(t) = \\sin^{-1}\\left(\\sin\\frac{3\\pi}{4}\\right)\\) equals:", ["\\(\\frac{3\\pi}{4}\\)", "\\(-\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"], 3],
            ["This illustrates the general principle that \\(\\sin^{-1}(\\sin t) = t\\) fails outside the principal range because \\(\\sin^{-1}\\) always returns a value in its:", ["Period", "Domain", "Asymptote set", "Range"], 3]
          ]
        }
      ],
      short: [],
      long: []
    },
    {
      id: 9,
      name: "Solution of Trigonometric Equations",
      mcq: [
    ["If \\(\\tan(-\\theta) = -\\tan(\\theta)\\), then which property is used?", ["Shift property", "Periodic property", "Even property", "Odd property"], 3],
    ["What is the general solution of \\(\\tan(\\theta) = 1\\)?", ["\\(\\theta = \\frac{\\pi}{4} + n\\pi\\)", "\\(\\theta = \\frac{\\pi}{2} + n\\pi\\)", "\\(\\theta = \\frac{3\\pi}{4} + n\\pi\\)", "\\(\\theta = \\frac{\\pi}{4} + 2n\\pi\\)"], 0],
    ["If \\(\\sin(\\theta + \\pi) = -\\sin(\\theta)\\), then what identity is used?", ["Phase shift identity", "Periodic identity", "Co-function identity", "Even identity"], 1],
    ["Which identity is correctly based on the translation property?", ["\\(\\sin(\\theta+\\pi)=\\sin\\theta\\)", "\\(\\cos(\\theta+\\pi)=-\\cos\\theta\\)", "\\(\\tan(\\theta+\\pi)=-\\tan\\theta\\)", "\\(\\cos(\\theta+\\pi)=\\cos\\theta\\)"], 1],
    ["Which represents a solution of \\(2\\cos x + \\sqrt{2} = 0\\), \\(x \\in [0, 2\\pi]\\)?", ["\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)"], 3],
    ["What results on solving \\(\\cos 2\\theta = 0\\), \\(\\theta \\in [0, 2\\pi]\\)?", ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\{0, \\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)"], 1],
    ["The particular solution of \\(\\tan 2\\theta = \\sqrt{3}\\), \\(\\theta \\in [0, 2\\pi]\\) is:", ["\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)"], 1],
    ["On solving trigonometric equation \\(\\sin 2x = \\sqrt{3}\\cos x\\), \\(x \\in [0, 2\\pi]\\) we get:", ["\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)"], 0],
    ["What is the expected solution of \\(2\\sec x - 4 = 0\\), \\(x \\in [0, 2\\pi]\\)?", ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}, 2\\pi\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\{0, \\pi\\}\\)"], 0],
    ["What results on solving the trigonometric equation \\((\\tan x)(\\cot x) = 2\\), \\(x \\in [0, 2\\pi]\\)?", ["\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\{\\}\\) (no solution)"], 3],
    ["If \\(\\sin(2x) = \\sqrt{3}\\cos x\\), \\(x \\in [0, 2\\pi]\\), then the value of \\(x\\) is:", ["\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\{0, \\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)"], 0],
    ["If \\(\\tan\\theta = 2\\), \\(\\theta \\in [0, 2\\pi]\\) is:", ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\{\\tan^{-1}2, \\pi+\\tan^{-1}2\\}\\)"], 3],
    ["What is the number of solutions for \\(\\sec x = 2\\) in \\([0, 2\\pi]\\)?", ["0", "3", "2", "1"], 2],
    ["On solving a trigonometric equation \\(\\sin x = -\\sqrt{3}\\cos x\\), \\(x \\in [0, 2\\pi]\\) we get:", ["\\(\\left\\{\\frac{2\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{5\\pi}{6}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)"], 0],
    ["What is the expected solution of \\(2\\csc x - 4 = 0\\), \\(x \\in [0, 2\\pi]\\)?", ["\\(\\left\\{\\frac{5\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\{0, \\pi, 2\\pi\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)"], 3],
    ["What results on solving a trigonometric equation \\(\\cos 2x + 1 = 0\\), \\(x \\in [0, 2\\pi]\\)?", ["\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\{0, \\pi, 2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)"], 1],
    ["On solving \\(\\cot 2\\theta = 1\\), \\(\\theta \\in [0, 2\\pi]\\), we get:", ["\\(\\{0, \\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)"], 3],
    ["What results on solving \\(\\sin x = \\sqrt{3}\\cos x\\), \\(x \\in [0, 2\\pi]\\)?", ["\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)"], 2],
    ["For \\(\\sec 2\\theta - 2 = 0\\), \\(\\theta \\in [0, 2\\pi]\\), the number of solutions is:", ["0", "1", "4", "2"], 2],
    ["On solving trigonometric equation \\(\\sqrt{3}\\tan x - 1 = 0\\), \\(x \\in [0, 2\\pi]\\), we get:", ["\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)"], 3],
    ["What is the expected solution of \\(2\\cos x - \\sqrt{3} = 0\\), \\(x \\in [0, 2\\pi]\\)?", ["\\(\\left\\{\\frac{\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{5\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)"], 0],
    ["Choose the correct answer: if \\(\\sin(2x) = \\frac{\\sqrt{3}}{2}\\) with \\(x \\in [0, 2\\pi]\\), then the value of \\(x\\) is:", ["\\(\\frac{\\pi}{6}, \\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\)", "\\(\\frac{\\pi}{6}, \\frac{5\\pi}{12}\\)", "\\(\\frac{\\pi}{6}, \\frac{2\\pi}{3}\\)"], 0],
    ["For what value of \\(x\\), does the trigonometric equation \\(\\sin x = \\cos x\\) remain true?", ["\\(\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\)", "\\(\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\)"], 0],
    ["The solution of the trigonometric equation \\(2\\sin x + \\sqrt{3} = 0\\) in the 4th quadrant is:", ["\\(-\\frac{\\pi}{6}\\)", "\\(-\\frac{5\\pi}{6}\\)", "\\(-\\frac{\\pi}{3}\\)", "\\(\\frac{11\\pi}{6}\\)"], 3],
    ["If \\(\\cos^2 x = \\frac{1}{2}\\) with \\(x \\in [0, \\pi]\\), then the value of \\(x\\) is:", ["\\(\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\)", "\\(\\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\)", "\\(\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\)", "\\(\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\)"], 3],
    ["What is the solution of \\(\\sec x = 2\\), if \\(x \\in [0, \\pi]\\)?", ["\\(\\frac{\\pi}{3}\\)", "\\(-\\frac{\\pi}{3}\\)", "\\(-\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{6}\\)"], 0],
    ["What is the solution of \\(\\sin x + \\cos x = 0\\), if \\(x \\in [0, \\pi]\\)?", ["\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{2\\pi}{3}\\)"], 0],
    ["What is one solution of a trigonometric equation \\(\\cos x + \\sin x = \\sqrt{2}\\), if \\(x \\in [0, 2\\pi]\\)?", ["\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{2\\pi}{4}\\)", "\\(-\\frac{\\pi}{4}\\)"], 1],
    ["What is the general solution of a trigonometric equation \\(1 + \\cos x = 0\\)?", ["\\(\\pi + 2n\\pi\\)", "\\(\\pi + n\\pi\\)", "\\(\\frac{\\pi}{2} + n\\pi\\)", "\\(2n\\pi\\)"], 0],
    ["For what value \\(x \\in (0, 2\\pi)\\), \\(\\sin x = -\\frac{1}{2}\\)?", ["\\(\\frac{7\\pi}{6}, \\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\)", "\\(\\frac{5\\pi}{6}, \\frac{11\\pi}{6}\\)", "\\(\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\)"], 3],
    ["If \\(4\\cos x - 3\\sin x = 1\\) then the number of \\(x\\) values between 0 and \\(2\\pi\\) are:", ["8", "4", "2", "6"], 2],
    ["What is the value \\(c\\), if \\(\\sin^2\\left(\\frac{\\pi}{6}\\right) + \\sin^2\\left(\\frac{\\pi}{3}\\right) + \\tan^2\\left(\\frac{\\pi}{4}\\right) = c\\)?", ["\\(\\frac{2}{3}\\)", "2", "3", "\\(\\frac{3}{2}\\)"], 1],
    ["The general solution of \\(\\sin\\theta = 0\\) is:", ["\\(\\theta = \\frac{\\pi}{2} + n\\pi\\)", "\\(\\theta = (2n+1)\\frac{\\pi}{2}\\)", "\\(\\theta = n\\pi\\)", "\\(\\theta = 2n\\pi\\)"], 2],
    ["The general solution of \\(\\cos\\theta = 0\\) is:", ["\\(\\theta = \\frac{\\pi}{2} + n\\pi\\)", "\\(\\theta = 2n\\pi\\)", "\\(\\theta = n\\pi\\)", "\\(\\theta = n\\pi + (-1)^n\\frac{\\pi}{2}\\)"], 0],
    ["The general solution of \\(\\tan\\theta = 0\\) is:", ["\\(\\theta = n\\pi\\)", "\\(\\theta = 2n\\pi\\)", "\\(\\theta = \\frac{n\\pi}{2}\\)", "\\(\\theta = \\frac{\\pi}{2} + n\\pi\\)"], 0],
    ["The period of \\(\\sin x\\) and \\(\\cos x\\) is:", ["\\(2\\pi\\)", "\\(\\pi\\)", "\\(4\\pi\\)", "\\(\\frac{\\pi}{2}\\)"], 0],
    ["The period of \\(\\tan x\\) and \\(\\cot x\\) is:", ["\\(3\\pi\\)", "\\(\\pi\\)", "\\(2\\pi\\)", "\\(\\frac{\\pi}{2}\\)"], 1],
    ["The period of \\(\\sec x\\) and \\(\\csc x\\) is:", ["\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(4\\pi\\)", "\\(2\\pi\\)"], 3],
    ["The general solution of \\(\\sin\\theta = \\sin\\alpha\\) is:", ["\\(\\theta = n\\pi - \\alpha\\)", "\\(\\theta = 2n\\pi \\pm \\alpha\\)", "\\(\\theta = n\\pi + (-1)^n\\alpha\\)", "\\(\\theta = n\\pi + \\alpha\\)"], 2],
    ["The general solution of \\(\\cos\\theta = \\cos\\alpha\\) is:", ["\\(\\theta = n\\pi + (-1)^n\\alpha\\)", "\\(\\theta = 2n\\pi + \\frac{\\alpha}{2}\\)", "\\(\\theta = n\\pi + \\alpha\\)", "\\(\\theta = 2n\\pi \\pm \\alpha\\)"], 3],
    ["The general solution of \\(\\tan\\theta = \\tan\\alpha\\) is:", ["\\(\\theta = n\\pi + (-1)^n\\alpha\\)", "\\(\\theta = 2n\\pi \\pm \\alpha\\)", "\\(\\theta = n\\pi + \\alpha\\)", "\\(\\theta = 2n\\pi + \\alpha\\)"], 2],
    ["To solve \\(\\sin x = k\\) or \\(\\cos x = k\\) for real \\(x\\), the constant \\(k\\) must satisfy:", ["\\(k > 1\\)", "\\(k \\ne 0\\)", "\\(k < -1\\)", "\\(|k| \\le 1\\)"], 3],
    ["The general solution of \\(\\cos x = 1\\) is:", ["\\(x = n\\pi\\)", "\\(x = \\frac{\\pi}{2} + 2n\\pi\\)", "\\(x = 2n\\pi\\)", "\\(x = (2n+1)\\pi\\)"], 2],
    ["The general solution of \\(\\sin x = 1\\) is:", ["\\(x = \\frac{\\pi}{2} + 2n\\pi\\)", "\\(x = 2n\\pi\\)", "\\(x = n\\pi\\)", "\\(x = (2n+1)\\pi\\)"], 0],
    ["The general solution of \\(\\cos x = -1\\) is:", ["\\(x = n\\pi\\)", "\\(x = (2n+1)\\pi\\)", "\\(x = 2n\\pi\\)", "\\(x = \\frac{\\pi}{2} + n\\pi\\)"], 1],
    ["The general solution of \\(\\sin x = -1\\) is:", ["\\(x = (2n+1)\\pi\\)", "\\(x = n\\pi\\)", "\\(x = 2n\\pi - \\frac{\\pi}{2}\\)", "\\(x = 2n\\pi + \\frac{\\pi}{2}\\)"], 2],
    ["Solve \\(\\sin x = \\frac{1}{2}\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)"], 2],
    ["Solve \\(\\cos x = \\frac{1}{2}\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)"], 1],
    ["Solve \\(\\tan x = 1\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)"], 0],
    ["Solve \\(\\sin x = -\\frac{1}{\\sqrt{2}}\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)"], 0],
    ["Solve \\(\\cos x = -\\frac{1}{2}\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)"], 2],
    ["Solve \\(\\tan x = -1\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)"], 3],
    ["Solve \\(2\\cos x - 1 = 0\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)"], 2],
    ["Solve \\(2\\sin x + 1 = 0\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{5\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)"], 2],
    ["Solve \\(\\sec x = \\sqrt{2}\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)"], 1],
    ["Solve \\(\\csc x = 2\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)"], 1],
    ["Solve \\(\\cot x = 1\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)"], 2],
    ["Solving \\(2\\sin^2 x - \\sin x - 1 = 0\\) by factoring \\((2\\sin x+1)(\\sin x-1)=0\\) gives:", ["\\(\\sin x=\\frac{1}{2}\\) or \\(\\sin x=1\\)", "\\(\\sin x=-\\frac{1}{2}\\) or \\(\\sin x=-1\\)", "\\(\\sin x=\\frac{1}{2}\\) or \\(\\sin x=-1\\)", "\\(\\sin x=-\\frac{1}{2}\\) or \\(\\sin x=1\\)"], 3],
    ["Solving \\(2\\cos^2 x + 3\\cos x + 1 = 0\\) by factoring \\((2\\cos x+1)(\\cos x+1)=0\\) gives:", ["\\(\\cos x=-\\frac{1}{2}\\) or \\(\\cos x=1\\)", "\\(\\cos x=\\frac{1}{2}\\) or \\(\\cos x=1\\)", "\\(\\cos x=\\frac{1}{2}\\) or \\(\\cos x=-1\\)", "\\(\\cos x=-\\frac{1}{2}\\) or \\(\\cos x=-1\\)"], 3],
    ["Solving \\(\\tan^2 x - 3\\tan x + 2 = 0\\) by factoring \\((\\tan x-1)(\\tan x-2)=0\\) gives:", ["\\(\\tan x=-1\\) or \\(\\tan x=-2\\)", "\\(\\tan x=1\\) or \\(\\tan x=2\\)", "\\(\\tan x=1\\) or \\(\\tan x=-2\\)", "\\(\\tan x=0\\) or \\(\\tan x=2\\)"], 1],
    ["Solving \\(\\sin^2 x = \\cos^2 x\\) gives \\(\\tan^2 x = 1\\), so \\(\\tan x = ?\\)", ["\\(\\pm\\frac{1}{\\sqrt{2}}\\)", "0", "\\(\\pm 1\\)", "\\(\\pm\\sqrt{2}\\)"], 2],
    ["The equation \\(2\\cos^2 x - 1 = 0\\) is equivalent to which double-angle equation?", ["\\(\\tan 2x = 0\\)", "\\(\\sin 2x = 0\\)", "\\(\\cos 2x = 0\\)", "\\(\\cos 2x = 1\\)"], 2],
    ["Solving \\(\\sin^2 x + \\sin x = 0\\) by factoring \\(\\sin x(\\sin x+1)=0\\) gives:", ["\\(\\sin x=1\\) or \\(\\sin x=-1\\)", "\\(\\sin x=0\\) or \\(\\sin x=1\\)", "\\(\\sin x=0\\) or \\(\\sin x=-1\\)", "\\(\\sin x=-1\\) only"], 2],
    ["Solving \\(\\cos^2 x - \\cos x = 0\\) gives:", ["\\(\\cos x=0\\) only", "\\(\\cos x=0\\) or \\(\\cos x=-1\\)", "\\(\\cos x=1\\) or \\(\\cos x=-1\\)", "\\(\\cos x=0\\) or \\(\\cos x=1\\)"], 3],
    ["Solving \\(3\\tan^2 x - 1 = 0\\) gives \\(\\tan x = ?\\)", ["\\(\\pm 1\\)", "\\(\\pm\\frac{1}{\\sqrt{3}}\\)", "\\(\\pm 3\\)", "\\(\\pm\\sqrt{3}\\)"], 1],
    ["Solving \\(\\sec^2 x - 2 = 0\\) gives \\(\\sec x = ?\\)", ["\\(\\pm 2\\)", "\\(\\pm\\sqrt{2}\\)", "\\(\\pm 1\\)", "\\(\\pm\\frac{1}{\\sqrt{2}}\\)"], 1],
    ["Solving \\(\\csc^2 x - 4 = 0\\) gives \\(\\csc x = ?\\)", ["\\(\\pm 2\\)", "\\(\\pm 1\\)", "\\(\\pm\\frac{1}{2}\\)", "\\(\\pm 4\\)"], 0],
    ["The double-angle formula \\(\\sin 2x = ?\\)", ["\\(\\cos^2 x - \\sin^2 x\\)", "\\(2\\cos^2 x - 1\\)", "\\(1 - 2\\sin^2 x\\)", "\\(2\\sin x\\cos x\\)"], 3],
    ["Which is a correct form of \\(\\cos 2x\\)?", ["\\(2\\tan x\\)", "\\(2\\sin x\\cos x\\)", "\\(\\sin^2 x - \\cos^2 x\\)", "\\(1 - 2\\sin^2 x\\)"], 3],
    ["Another correct form of \\(\\cos 2x\\) is:", ["\\(1 + 2\\cos^2 x\\)", "\\(2\\cos^2 x - 1\\)", "\\(\\cos^2 x + \\sin^2 x\\)", "\\(2\\sin^2 x - 1\\)"], 1],
    ["\\(\\cos 2x\\) can also be written as:", ["\\(\\cos^2 x - \\sin^2 x\\)", "\\(\\sin^2 x - \\cos^2 x\\)", "\\(\\tan^2 x - 1\\)", "\\(2\\sin x\\cos x\\)"], 0],
    ["Solving \\(\\sin 2x = \\sin x\\) for \\(x \\in [0, 2\\pi]\\) (factor as \\(\\sin x(2\\cos x-1)=0\\)) gives the solution set:", ["\\(\\left\\{0, \\frac{2\\pi}{3}, \\pi\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}, 2\\pi\\right\\}\\)", "\\(\\{0, \\pi, 2\\pi\\}\\)"], 2],
    ["Solving \\(\\cos 2x = \\cos x\\) for \\(x \\in [0, 2\\pi]\\) (factor as \\((2\\cos x+1)(\\cos x-1)=0\\)) gives the solution set:", ["\\(\\left\\{0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, 2\\pi\\right\\}\\)", "\\(\\{0, \\pi, 2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)"], 0],
    ["Solving \\(\\sin 2x + \\cos x = 0\\) for \\(x \\in [0, 2\\pi]\\) (factor as \\(\\cos x(2\\sin x+1)=0\\)) gives the solution set:", ["\\(\\{0, \\pi, 2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)"], 2],
    ["The double-angle formula for tangent, \\(\\tan 2x = ?\\)", ["\\(\\frac{2\\tan x}{1-\\tan^2 x}\\)", "\\(\\frac{2\\tan x}{1+\\tan^2 x}\\)", "\\(\\frac{1-\\tan^2 x}{2\\tan x}\\)", "\\(\\tan^2 x - 1\\)"], 0],
    ["Factoring \\(2\\sin\\theta\\cos\\theta + \\sin\\theta = 0\\) gives \\(\\sin\\theta(2\\cos\\theta+1)=0\\); this comes from simplifying:", ["\\(\\cos 2\\theta + \\sin\\theta = 0\\)", "\\(\\sin 2\\theta + \\sin\\theta = 0\\)", "\\(\\sin 2\\theta - \\sin\\theta = 0\\)", "\\(\\cos 2\\theta - \\sin\\theta = 0\\)"], 1],
    ["If \\(a\\sin\\theta + b\\cos\\theta\\) is written as \\(R\\sin(\\theta+\\phi)\\), then \\(R = ?\\)", ["\\(\\sqrt{a^2+b^2}\\)", "\\(a+b\\)", "\\(\\sqrt{a^2-b^2}\\)", "\\(a^2+b^2\\)"], 0],
    ["For \\(3\\sin\\theta + 4\\cos\\theta = R\\sin(\\theta+\\phi)\\), the value of \\(R\\) is:", ["5", "4", "3", "7"], 0],
    ["In the form \\(R\\sin(\\theta+\\phi) = a\\sin\\theta + b\\cos\\theta\\), \\(\\tan\\phi = ?\\)", ["\\(a-b\\)", "\\(\\frac{b}{a}\\)", "\\(\\frac{a}{b}\\)", "\\(ab\\)"], 1],
    ["\\(\\sin\\theta + \\cos\\theta\\) can be written as:", ["\\(\\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\)", "\\(\\sqrt{2}\\sin\\theta\\)", "\\(\\sqrt{2}\\cos\\left(\\theta+\\frac{\\pi}{4}\\right)\\)", "\\(2\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\)"], 0],
    ["\\(\\cos\\theta - \\sin\\theta\\) can be written as:", ["\\(\\sqrt{2}\\cos\\theta\\)", "\\(2\\cos\\theta\\)", "\\(\\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\)", "\\(\\sqrt{2}\\cos\\left(\\theta+\\frac{\\pi}{4}\\right)\\)"], 3],
    ["The maximum possible value of \\(a\\sin\\theta + b\\cos\\theta\\) is:", ["\\(\\sqrt{a^2+b^2}\\)", "\\(ab\\)", "\\(a+b\\)", "\\(a^2+b^2\\)"], 0],
    ["The minimum possible value of \\(a\\sin\\theta + b\\cos\\theta\\) is:", ["\\(-(a+b)\\)", "\\(-ab\\)", "\\(-\\sqrt{a^2+b^2}\\)", "0"], 2],
    ["To solve \\(\\sin\\theta + \\cos\\theta = 1\\) by the auxiliary-angle method, the value of \\(R\\) used is:", ["\\(\\sqrt{2}\\)", "1", "2", "\\(\\frac{1}{2}\\)"], 0],
    ["The sum-to-product formula for \\(\\sin C + \\sin D\\) is:", ["\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)"], 3],
    ["The sum-to-product formula for \\(\\sin C - \\sin D\\) is:", ["\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)"], 3],
    ["The sum-to-product formula for \\(\\cos C + \\cos D\\) is:", ["\\(-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)"], 1],
    ["The sum-to-product formula for \\(\\cos C - \\cos D\\) is:", ["\\(2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)"], 1],
    ["\\(\\sin 3\\theta + \\sin\\theta\\) simplifies (via sum-to-product) to:", ["\\(2\\sin 2\\theta\\sin\\theta\\)", "\\(2\\sin 2\\theta\\cos\\theta\\)", "\\(2\\cos 2\\theta\\cos\\theta\\)", "\\(2\\cos 2\\theta\\sin\\theta\\)"], 1],
    ["\\(\\cos 3\\theta - \\cos\\theta\\) simplifies (via sum-to-product) to:", ["\\(-2\\sin 2\\theta\\sin\\theta\\)", "\\(2\\cos 2\\theta\\cos\\theta\\)", "\\(-2\\cos 2\\theta\\cos\\theta\\)", "\\(2\\sin 2\\theta\\sin\\theta\\)"], 0],
    ["\\(\\sin 5\\theta + \\sin 3\\theta\\) simplifies to:", ["\\(2\\sin 4\\theta\\cos\\theta\\)", "\\(2\\cos 4\\theta\\sin\\theta\\)", "\\(2\\sin 4\\theta\\sin\\theta\\)", "\\(2\\cos 4\\theta\\cos\\theta\\)"], 0],
    ["In the graphical method, solutions of \\(f(x) = g(x)\\) correspond to:", ["Points where \\(f\\) is undefined", "Zeros of \\(f\\) only", "Maximum points of \\(f\\)", "Points where the two graphs intersect"], 3],
    ["Graphically, \\(\\sin\\theta = \\frac{\\theta}{2}\\) has how many solutions in \\(\\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)?", ["Exactly 1 (at \\(\\theta = 0\\))", "0", "2", "Infinitely many"], 0],
    ["The graph of \\(y = \\tan\\theta\\) has vertical lines it never crosses, called:", ["Nodes", "Asymptotes", "Intercepts", "Tangent lines"], 1],
    ["An advantage of the graphical method for solving trigonometric equations is that it:", ["Always gives exact decimal-free answers", "Helps visualize multiple and infinite solutions", "Works only for linear equations", "Avoids the need for a table of values"], 1],
    ["A limitation of the graphical method is that it is:", ["Only applicable to \\(\\sin x\\)", "Less precise than algebraic methods without computational tools", "Never useful for periodic functions", "More accurate than algebraic methods"], 1],
    ["The general solution of \\(\\tan 3x = 1\\) is:", ["\\(x = \\frac{\\pi}{4} + n\\pi\\)", "\\(x = \\frac{\\pi}{12} + \\frac{n\\pi}{3}\\)", "\\(x = \\frac{\\pi}{12} + n\\pi\\)", "\\(x = \\frac{\\pi}{3} + n\\pi\\)"], 1],
    ["The general solution of \\(\\sin 4x = 0\\) is:", ["\\(x = 4n\\pi\\)", "\\(x = \\frac{n\\pi}{2}\\)", "\\(x = n\\pi\\)", "\\(x = \\frac{n\\pi}{4}\\)"], 3],
    ["Solve \\(\\cos 2x = \\frac{1}{2}\\) for \\(x \\in [0, 2\\pi]\\):", ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)"], 2],
    ["The period of \\(\\sin(nx)\\), where \\(n\\) is a positive integer, is:", ["\\(\\frac{\\pi}{n}\\)", "\\(\\frac{2\\pi}{n}\\)", "\\(2n\\pi\\)", "\\(n\\pi\\)"], 1]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Equation</th><th>Interval</th></tr><tr><td>\\(2\\sin x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(2\\cos x - \\sqrt{3} = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(\\tan x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr></table>",
          questions: [
            ["Solving the first equation in the table, \\(2\\sin x - 1 = 0\\), gives the solution set:", ["\\(\\left\\{\\frac{\\pi}{6},\\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6},\\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6},\\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3},\\frac{2\\pi}{3}\\right\\}\\)"], 0],
            ["Solving the second equation, \\(2\\cos x - \\sqrt{3}=0\\), gives the solution set:", ["\\(\\left\\{\\frac{\\pi}{6},\\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3},\\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6},\\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3},\\frac{4\\pi}{3}\\right\\}\\)"], 0],
            ["Solving the third equation, \\(\\tan x - 1 = 0\\), gives the solution set:", ["\\(\\left\\{\\frac{3\\pi}{4},\\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4},\\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4},\\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4},\\frac{3\\pi}{4}\\right\\}\\)"], 2],
            ["Which of the three equations in the table has exactly two solutions that are exactly \\(\\pi\\) radians apart?", ["All three equations", "\\(2\\sin x - 1 = 0\\) only", "\\(\\tan x - 1 = 0\\) only", "\\(2\\cos x - \\sqrt{3}=0\\) only"], 2]
          ]
        },
        {
          stimulus: "A pendulum's horizontal displacement is modeled by \\(d(\\theta) = \\sin\\theta + \\cos\\theta\\) for \\(\\theta \\in [0, 2\\pi]\\), which can be rewritten as \\(d(\\theta) = \\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\).",
          questions: [
            ["What is the maximum possible displacement \\(d(\\theta)\\) reaches?", ["\\(\\sqrt{2}\\)", "2", "1", "\\(2\\sqrt{2}\\)"], 0],
            ["At what value of \\(\\theta \\in [0,2\\pi]\\) does the pendulum reach its maximum displacement?", ["\\(\\pi\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{3\\pi}{4}\\)"], 1],
            ["Solving \\(d(\\theta) = 1\\), i.e. \\(\\sin\\theta+\\cos\\theta = 1\\), for \\(\\theta \\in [0,2\\pi]\\) gives the solution set:", ["\\(\\left\\{\\frac{\\pi}{4},\\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{0,\\frac{\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2},\\pi\\right\\}\\)", "\\(\\{0,\\pi\\}\\)"], 1],
            ["What is the minimum possible displacement \\(d(\\theta)\\) reaches over \\([0,2\\pi]\\)?", ["\\(-1\\)", "\\(-2\\)", "\\(-\\sqrt{2}\\)", "0"], 2]
          ]
        },
        {
          stimulus: "A student factors three trigonometric equations for \\(x \\in [0, 2\\pi]\\):<table><tr><th>Equation</th><th>Factored form</th></tr><tr><td>\\(\\sin 2x = \\sin x\\)</td><td>\\(\\sin x(2\\cos x - 1) = 0\\)</td></tr><tr><td>\\(2\\sin^2 x - \\sin x - 1 = 0\\)</td><td>\\((2\\sin x+1)(\\sin x - 1)=0\\)</td></tr><tr><td>\\(\\cos 2x + 1 = 0\\)</td><td>\\(2\\cos^2 x = 0\\)</td></tr></table>",
          questions: [
            ["Using the factored form given for \\(\\sin 2x = \\sin x\\), the solution set is:", ["\\(\\left\\{0,\\frac{\\pi}{3},\\pi,\\frac{5\\pi}{3},2\\pi\\right\\}\\)", "\\(\\{0,\\pi,2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3},\\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{0,\\frac{2\\pi}{3},\\pi\\right\\}\\)"], 0],
            ["Using the factored form for \\(2\\sin^2x-\\sin x-1=0\\), the solution set is:", ["\\(\\left\\{\\frac{\\pi}{3},\\frac{2\\pi}{3},\\frac{\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6},\\frac{5\\pi}{6},\\frac{\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6},\\frac{11\\pi}{6},\\frac{\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6},\\frac{5\\pi}{6},\\pi\\right\\}\\)"], 2],
            ["Using the factored form \\(2\\cos^2x=0\\) for \\(\\cos2x+1=0\\), the solution set is:", ["\\(\\left\\{\\frac{\\pi}{4},\\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2},\\frac{3\\pi}{2}\\right\\}\\)", "\\(\\{0,\\pi,2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3},\\frac{2\\pi}{3}\\right\\}\\)"], 1],
            ["Which of the three equations in the table has the fewest distinct solutions in \\([0,2\\pi]\\)?", ["\\(\\cos2x+1=0\\)", "All three have the same number", "\\(2\\sin^2x-\\sin x-1=0\\)", "\\(\\sin 2x=\\sin x\\)"], 0]
          ]
        }
      ],
      short: [],
      long: []
    },
    {
      id: 10,
      name: "Numerical Methods",
      mcq: [
    ["Which condition guarantees the bisection method can be applied to \\([a, b]\\)?", ["\\(f\\) continuous on \\([a,b]\\) and \\(f(a)f(b) < 0\\)", "\\(f\\) differentiable on \\([a,b]\\)", "\\(f\\) monotonic on \\([a,b]\\)", "\\(f(a)=0\\) or \\(f(b)=0\\)"], 0],
    ["Starting interval \\([0, 1]\\). What is the minimum number of bisection iterations needed to guarantee an approximate root with absolute error \\(\\le 10^{-4}\\)?", ["12", "13", "14", "11"], 1],
    ["Let \\(f(x) = x^3 - 2\\) on \\([1, 2]\\). Perform two bisection iterations. Which interval contains the root after those two iterations?", ["\\([1.25, 1.5]\\)", "\\([1, 1.25]\\)", "\\([1.5, 2]\\)", "\\([1, 1.375]\\)"], 0],
    ["For interval \\([3, 7]\\), what upper bound on \\(|x_n - r|\\) is guaranteed after 5 iterations (where \\(x_n\\) is the midpoint at iteration 5)?", ["0.25", "0.125", "0.0625", "0.03125"], 2],
    ["What is the convergence order of the bisection method and its contraction factor?", ["Super linear (factor \\(<\\frac{1}{2}\\))", "Linear with factor \\(\\frac{1}{2}\\)", "Sublinear (factor \\(>1\\))", "Quadratic (factor ~0)"], 1],
    ["Formula for the first approximation \\(x_2\\) in Regula Falsi is:", ["1.2", "1.5", "\\(\\dfrac{a+b}{2}\\)", "\\(\\dfrac{af(b) - bf(a)}{f(b) - f(a)}\\)"], 3],
    ["For \\(f(x) = x^3 - 4\\), \\([1, 2]\\), the first Regula Falsi approximation \\(x_1 = ?\\)", ["1.33", "1.43", "1.50", "1.25"], 1],
    ["Stopping rule for Regula Falsi: \\(|f(x_n)| < 10^{-3}\\) or \\(|b-a| <\\) ? (given tolerance \\(= 10^{-3}\\))", ["\\(10^{-4}\\)", "\\(10^{-2}\\)", "\\(10^{-5}\\)", "\\(10^{-3}\\)"], 3],
    ["For \\(f(x) = x^2 - 3\\), \\([1, 2]\\), the second Regula Falsi approximation \\(x_2 \\approx ?\\)", ["1.75", "1.73", "1.60", "1.70"], 1],
    ["The convergence order of Regula Falsi is:", ["0.5", "Between 1 and 2", "1", "2"], 1],
    ["Newton–Raphson iteration formula is:", ["\\(\\dfrac{a+b}{2}\\)", "\\(x + \\dfrac{f(x)}{f'(x)}\\)", "\\(x - \\dfrac{f(x)}{f'(x)}\\)", "\\(x - \\dfrac{f'(x)}{f(x)}\\)"], 2],
    ["\\(f(x) = x^2 - 3\\), \\(x_0 = 1.5\\). The value of \\(x_1\\) by Newton–Raphson is:", ["1.72", "1.73", "1.70", "1.75"], 3],
    ["\\(f(x) = x^2 - 2\\), \\(x_0 = 1.5\\). The value of \\(x_1\\) by Newton–Raphson is:", ["1.44", "1.42", "1.45", "1.43"], 1],
    ["The convergence order of Newton–Raphson is:", ["1", "2", "\\(>2\\)", "0.5"], 1],
    ["The main drawback of Newton–Raphson is that it:", ["Is very slow", "Needs the derivative \\(f'(x)\\)", "Always diverges", "Has no formula"], 1],
    ["For \\([a, b] = [0, 2]\\) with \\(n = 4\\) subintervals, the step size \\(h = \\dfrac{b-a}{n}\\) equals:", ["0.25", "1", "2", "0.5"], 3],
    ["Approximate \\(\\displaystyle\\int_0^2 x^2\\,dx\\) with the composite trapezoidal rule using \\(n=4\\). The result is \\(\\approx\\):", ["2.70", "2.75", "2.67", "2.80"], 1],
    ["For \\(f(x) = \\sin x\\) on \\([0, \\pi]\\), using the trapezoidal error bound \\(|E| \\le \\dfrac{(b-a)^3}{12n^2}\\max|f''|\\) with \\(\\max|f''| = 1\\). The minimum integer \\(n\\) to guarantee \\(|E| \\le 10^{-4}\\) is:", ["160", "162", "159", "161"], 3],
    ["Approximate \\(\\displaystyle\\int_0^1 e^x\\,dx\\) with composite trapezoidal rule, \\(n=2\\). The value is \\(\\approx\\):", ["1.7539", "1.7600", "1.7000", "1.7183"], 0],
    ["The asymptotic error of the trapezoidal rule is \\(O(h^2)\\). If \\(h\\) is halved, the error is reduced by a factor of approximately:", ["16", "2", "8", "4"], 3],
    ["Approximate \\(\\displaystyle\\int_0^2 x^2\\,dx\\) with composite Simpson's rule, \\(n=4\\). The result is \\(\\approx\\):", ["2.6700", "2.6667", "2.6600", "2.7500"], 1],
    ["For Simpson's rule on \\([0, 1]\\) with \\(n=6\\), the step \\(h = \\dfrac{b-a}{n}\\) equals:", ["0.1250", "0.2000", "0.2500", "0.1667"], 3],
    ["Using the composite Simpson error bound \\(|E| \\le \\dfrac{(b-a)h^4}{180}\\max|f^{(4)}|\\) for \\(f(x)=\\sin x\\) on \\([0,\\pi]\\) (\\(\\max|f^{(4)}|=1\\)), the smallest even \\(n\\) that guarantees \\(|E| \\le 10^{-6}\\) is:", ["39", "37", "36", "38"], 3],
    ["Numerical methods are primarily used when a problem's analytical (exact) solution is:", ["Never needed", "Guaranteed unique", "Nonexistent or impractical to obtain", "Always available"], 2],
    ["For \\(f(x) = x^2 + 5x + 6\\), the roots of \\(f(x) = 0\\) are:", ["−2, −3", "2, 3", "−2, 3", "2, −3"], 0],
    ["Polynomial equations of degree \\(\\le 4\\) can generally be solved:", ["Only graphically", "Analytically (e.g. quadratic formula)", "Never", "Only numerically"], 1],
    ["For polynomial equations of degree \\(> 4\\), in general:", ["A general analytical solution exists", "No general analytical solution exists; numerical methods are required", "Only Newton's method fails", "Bisection cannot be used"], 1],
    ["Which of the following is an example of a transcendental equation?", ["\\(x^3 - 8 = 0\\)", "\\(x^2 - 4 = 0\\)", "\\(3x + 5 = 0\\)", "\\(e^x + \\sin x + 4 = 0\\)"], 3],
    ["The Fundamental Theorem of Roots requires \\(f\\) to be continuous on \\([a,b]\\) and:", ["\\(f'(a) = 0\\)", "\\(f(a)\\cdot f(b) < 0\\)", "\\(f(a)\\cdot f(b) > 0\\)", "\\(f(a) = f(b)\\)"], 1],
    ["Which statement about numerical methods is FALSE?", ["They give approximate solutions", "They always give an exact, error-free answer", "They are ideal for computer implementation", "They are used when analytical methods fail"], 1],
    ["Newton–Raphson's method is also referred to as the:", ["Method of bisection", "Method of tangent", "Method of chords", "Method of false position"], 1],
    ["The bisection method is also known as the:", ["Quadrature method", "Secant method", "Interval Halving (Binary Search) Method", "Newton's method"], 2],
    ["In the bisection method, the new iterate is computed as:", ["\\(x_2 = x_1 - x_0\\)", "\\(x_2 = \\dfrac{x_0+x_1}{2}\\)", "\\(x_2 = \\dfrac{x_0f(x_1)-x_1f(x_0)}{f(x_1)-f(x_0)}\\)", "\\(x_2 = x_0 - \\dfrac{f(x_0)}{f'(x_0)}\\)"], 1],
    ["In bisection, if \\(f(x_0)\\cdot f(x_2) < 0\\), the root lies in the next interval:", ["\\([x_2, x_1]\\)", "\\([x_0, x_2]\\)", "\\([x_0, x_1]\\)", "Outside \\([x_0, x_1]\\)"], 1],
    ["In bisection, if \\(f(x_1)\\cdot f(x_2) < 0\\), the root lies in the next interval:", ["\\([x_2, x_1]\\)", "\\([x_0, x_2]\\)", "None of these", "\\([x_0, x_1]\\)"], 0],
    ["The convergence behaviour of the bisection method is best described as:", ["Instant (one step)", "Slow but guaranteed", "Fails to converge", "Fast but unreliable"], 1],
    ["One key advantage of the bisection method is that it:", ["Requires no sign change", "Never requires an initial interval", "Always converges in 2 steps", "Is guaranteed to converge if the function changes sign over the interval"], 3],
    ["A key limitation of the bisection method is that:", ["Convergence can be slow, especially for high precision", "It only works for linear functions", "It requires computing \\(f'(x)\\)", "It cannot be programmed"], 0],
    ["To guarantee an error less than \\(\\varepsilon\\) starting from an interval of width \\(L\\), the number of bisection iterations \\(n\\) must satisfy:", ["\\(n \\ge \\varepsilon/L\\)", "\\(n \\ge \\log_2(L/\\varepsilon)\\)", "\\(n \\ge L/\\varepsilon\\)", "\\(n = L - \\varepsilon\\)"], 1],
    ["The bisection method is classified as a:", ["Graphical method only", "Bracketing (closed) method", "Direct method", "Open method"], 1],
    ["With each bisection iteration, the width of the interval containing the root:", ["Becomes zero", "Is halved", "Doubles", "Stays the same"], 1],
    ["The bisection method requires how many initial approximations to start?", ["Two, with opposite signs of \\(f\\)", "One", "None", "Three"], 0],
    ["If \\(f(x_0)\\) and \\(f(x_1)\\) have the same sign, the bisection method:", ["Converges faster", "Gives an exact root immediately", "Cannot guarantee a root lies in \\([x_0,x_1]\\)", "Can still be applied directly"], 2],
    ["The Regula Falsi method is also known as the:", ["Method of False Position", "Bisection method", "Trapezoidal method", "Method of tangents"], 0],
    ["Regula Falsi finds the next approximation as the intersection of the x-axis with the:", ["Normal line", "Tangent line at \\(x_0\\)", "Chord joining \\(f(x_0)\\) and \\(f(x_1)\\)", "Perpendicular bisector"], 2],
    ["A key drawback of the Regula Falsi method is:", ["Stagnation of one end point, slowing convergence", "It never converges", "It requires \\(f'(x)\\)", "It cannot use two initial guesses"], 0],
    ["Compared with the bisection method, Regula Falsi generally converges:", ["Only for linear functions", "More rapidly", "More slowly", "At exactly the same rate always"], 1],
    ["In the Regula Falsi formula \\(x_{n+1} = \\dfrac{x_{n-1}f(x_n) - x_nf(x_{n-1})}{f(x_n)-f(x_{n-1})}\\), this is valid provided:", ["\\(f(x_n)\\cdot f(x_{n-1}) < 0\\)", "\\(x_n = x_{n-1}\\)", "\\(f(x_n) = f(x_{n-1})\\)", "\\(f(x_n)\\cdot f(x_{n-1}) > 0\\)"], 0],
    ["The condition needed to start the Regula Falsi method is:", ["\\(f(x_0) = f(x_1)\\)", "\\(f(x_0)\\cdot f(x_1) > 0\\)", "\\(x_0 = x_1\\)", "\\(f(x_0)\\cdot f(x_1) < 0\\)"], 3],
    ["In Regula Falsi, due to stagnation, the approximations \\(x_1, x_2, x_3, \\ldots\\) tend to converge to the root:", ["From one side only", "From both sides alternately", "Never", "Immediately in one step"], 0],
    ["Regula Falsi is not applicable/may fail when the function has:", ["A continuous derivative", "A linear form", "Multiple roots close together in the interval", "A single simple root"], 2],
    ["Regula Falsi is also referred to as a form of:", ["Quadratic interpolation", "Linear interpolation (false position)", "Power series method", "Cubic spline method"], 1],
    ["Both the bisection method and the Regula Falsi method require:", ["The function to be a polynomial", "Two initial approximations with \\(f(x_0)\\cdot f(x_1) < 0\\)", "Only one initial approximation", "Knowledge of \\(f'(x)\\)"], 1],
    ["The Newton–Raphson formula is derived using:", ["L'Hopital's rule", "The mean value theorem only", "Taylor's theorem", "Simpson's rule"], 2],
    ["In Newton–Raphson, the iteration requires computing:", ["Both \\(f(x)\\) and \\(f'(x)\\)", "\\(f''(x)\\) only", "The interval endpoints only", "\\(f(x)\\) only"], 0],
    ["Newton–Raphson's method fails or behaves poorly when:", ["\\(f'(x)\\) is zero or close to zero near the root", "The function is a polynomial", "\\(f'(x)\\) is large near the root", "\\(f(x_0)=0\\) exactly"], 0],
    ["If the initial guess \\(x_0\\) in Newton–Raphson is chosen close to the actual root, convergence is:", ["Slower", "Impossible", "Not affected", "Quick"], 3],
    ["Geometrically, each Newton–Raphson iterate is obtained from the x-intercept of the:", ["Tangent line to the curve at \\(x_n\\)", "Normal line", "Secant line", "Horizontal asymptote"], 0],
    ["The order of convergence of Newton–Raphson's method (for a simple root) is:", ["Quadratic (order 2)", "Zero", "Cubic (order 3)", "Linear (order 1)"], 0],
    ["If a root has multiplicity greater than one, the order of convergence of Newton–Raphson typically reduces to:", ["Linear", "Cubic", "Infinite", "Quadratic"], 0],
    ["Newton–Raphson's iteration formula to compute \\(\\sqrt{N}\\) using \\(f(x) = x^2 - N\\) is:", ["\\(x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)\\)", "\\(x_{n+1} = \\dfrac{N}{x_n}\\)", "\\(x_{n+1} = \\dfrac{x_n+N}{2}\\)", "\\(x_{n+1} = x_n^2 - N\\)"], 0],
    ["One major advantage of Newton–Raphson over bisection is:", ["It converges much more rapidly near the root", "It requires no initial guess", "It always converges regardless of \\(x_0\\)", "It never requires a derivative"], 0],
    ["One major disadvantage of Newton–Raphson is:", ["It cannot be used for transcendental equations", "It converges too slowly to be useful", "It never converges", "It requires the derivative \\(f'(x)\\) and is sensitive to the initial guess"], 3],
    ["When \\(f'(x_0)\\) is very large (steep slope) at the guess, Newton–Raphson typically:", ["Finds the root even faster since the correction term is small", "Requires more iterations", "Diverges immediately", "Fails to define \\(x_1\\)"], 0],
    ["If Newton–Raphson's iterates begin oscillating between two values without converging, this most likely indicates:", ["An unsuitable initial guess or a nearby inflection/turning point", "The root has been found exactly", "The bisection method should never be used", "The function is linear"], 0],
    ["The trapezoidal rule approximates the area under a curve by dividing the region into:", ["Trapezoids", "Circular sectors", "Rectangles", "Triangles only"], 0],
    ["The trapezoidal rule belongs to the broader family of:", ["Runge–Kutta formulas", "Taylor series methods", "Lagrange interpolation only", "Newton–Cotes formulas"], 3],
    ["For a single trapezoidal segment of width \\(h\\), the area is given by:", ["\\(\\dfrac{h}{2}(y_0-y_1)\\)", "\\(\\dfrac{h}{3}(y_0+y_1)\\)", "\\(h(y_0+y_1)\\)", "\\(\\dfrac{h}{2}(y_0+y_1)\\)"], 3],
    ["The composite trapezoidal rule formula is:", ["\\(\\dfrac{h}{3}[(y_0+y_n)+4(y_1+\\cdots)+2(y_2+\\cdots)]\\)", "\\(\\dfrac{h}{2}[y_0-y_n]\\)", "\\(\\dfrac{h}{2}[(y_0+y_n)+2(y_1+\\cdots+y_{n-1})]\\)", "\\(h[y_0+y_n]\\)"], 2],
    ["The trapezoidal rule gives an exact result (zero error) when \\(f(x)\\) is:", ["Cubic", "Quadratic", "Any transcendental function", "Linear (degree \\(\\le 1\\))"], 3],
    ["The error order of the trapezoidal rule is:", ["\\(O(h^2)\\)", "\\(O(h^3)\\)", "\\(O(h^4)\\)", "\\(O(h)\\)"], 0],
    ["For the composite trapezoidal rule, the number of subintervals \\(n\\):", ["Must be odd", "Must be a multiple of 4", "Can be any positive integer", "Must be even"], 2],
    ["To increase the accuracy of the trapezoidal rule approximation, one should:", ["Decrease \\(h\\) (use more subintervals)", "Increase \\(h\\) (use fewer subintervals)", "Keep \\(n = 1\\)", "Use a larger interval \\([a,b]\\)"], 0],
    ["The trapezoidal rule is also known as the:", ["Bisection rule", "Simpson's rule", "Newton–Raphson rule", "Multiple-segment (composite) trapezoidal rule"], 3],
    ["As the number of subintervals \\(n \\to \\infty\\), the trapezoidal approximation of a definite integral:", ["Converges to the exact value of the integral", "Becomes undefined", "Diverges", "Stays constant"], 0],
    ["The trapezoidal rule error term involves:", ["\\(f'''(\\xi)\\)", "\\(f^{(4)}(\\xi)\\)", "\\(f''(\\xi)\\)", "\\(f'(\\xi)\\)"], 2],
    ["In the composite trapezoidal formula, each interior ordinate \\(y_1, \\ldots, y_{n-1}\\) is given a weight of:", ["1", "2", "3", "4"], 1],
    ["Simpson's \\(\\frac{1}{3}\\) rule approximates the integrand on each pair of subintervals by fitting a:", ["Straight line", "Quadratic (second-degree) polynomial", "Exponential curve", "Cubic polynomial"], 1],
    ["For Simpson's \\(\\frac{1}{3}\\) rule to be applied, the number of subintervals \\(n\\) must be:", ["A perfect square", "Prime", "Even", "Odd"], 2],
    ["The composite Simpson's \\(\\frac{1}{3}\\) rule formula is:", ["\\(\\dfrac{h}{3}(y_0-y_n)\\)", "\\(h[y_0+y_n]\\)", "\\(\\dfrac{h}{3}[(y_0+y_n)+4(y_1+y_3+\\cdots)+2(y_2+y_4+\\cdots)]\\)", "\\(\\dfrac{h}{2}[(y_0+y_n)+2(y_1+\\cdots)]\\)"], 2],
    ["Simpson's \\(\\frac{1}{3}\\) rule gives exact results for polynomials of degree up to:", ["5", "1", "3", "2"], 2],
    ["The error order of Simpson's \\(\\frac{1}{3}\\) rule is:", ["\\(O(h^4)\\)", "\\(O(h^2)\\)", "\\(O(h^3)\\)", "\\(O(h)\\)"], 0],
    ["Compared with the trapezoidal rule, Simpson's \\(\\frac{1}{3}\\) rule is generally:", ["Less accurate", "More accurate for smooth functions", "Exactly the same accuracy", "Only usable for straight lines"], 1],
    ["In the composite Simpson's rule, the odd-indexed ordinates \\((y_1, y_3, y_5, \\ldots)\\) are given a weight of:", ["1", "2", "4", "3"], 2],
    ["In the composite Simpson's rule, the even-indexed interior ordinates \\((y_2, y_4, \\ldots)\\) are given a weight of:", ["3", "1", "4", "2"], 3],
    ["If \\(n\\) is odd, can the composite Simpson's \\(\\frac{1}{3}\\) rule be applied directly?", ["Only for trigonometric functions", "No, \\(n\\) must be even", "Yes, always", "Only if \\(n=1\\)"], 1],
    ["The general process of computing \\(\\displaystyle\\int_a^b y\\,dx\\) from tabulated values is called:", ["Interpolation only", "Differentiation", "Extrapolation", "Quadrature"], 3],
    ["In Simpson's \\(\\frac{1}{3}\\) rule, the multiplying factor outside the bracket is:", ["\\(\\dfrac{h}{3}\\)", "\\(h\\)", "\\(\\dfrac{2h}{3}\\)", "\\(\\dfrac{h}{2}\\)"], 0],
    ["Simpson's \\(\\frac{1}{3}\\) rule fits an interpolating polynomial of degree:", ["3", "4", "2", "1"], 2],
    ["Which numerical root-finding methods require two initial guesses with \\(f(x_0)\\cdot f(x_1) < 0\\)?", ["Newton–Raphson only", "Trapezoidal rule", "Bisection and Regula Falsi", "Simpson's rule"], 2],
    ["Which numerical root-finding method requires only a single initial guess?", ["Bisection", "Regula Falsi", "Both bisection and Regula Falsi", "Newton–Raphson"], 3],
    ["Which methods do NOT require computing a derivative?", ["Bisection and Regula Falsi", "Newton–Raphson only", "Only Newton–Raphson and Bisection", "None of these methods"], 0],
    ["Near a simple root, which method generally converges fastest?", ["Bisection", "Regula Falsi", "All converge at equal speed", "Newton–Raphson (quadratic convergence)"], 3],
    ["All iterative root-finding methods (bisection, Regula Falsi, Newton–Raphson) share the common feature of being:", ["Direct (one-step) methods", "Applicable only to linear equations", "Successive approximation methods", "Exact methods"], 2],
    ["Advancing computer technology benefits numerical methods mainly by providing:", ["Slower processors", "Faster hardware and improved algorithms (e.g. GPUs, parallel computing)", "Manual calculation tools", "Fewer floating point operations"], 1],
    ["Numerical methods are valuable because they bridge the gap between:", ["Bisection and Newton's method only", "Algebra and geometry", "Two unrelated numerical values", "Theoretical mathematics and practical (real-world) applications"], 3],
    ["Handling complex systems such as partial differential equations and finite element analysis mainly requires:", ["Only the quadratic formula", "Numerical methods", "Only graphical methods", "Simple algebraic formulas"], 1],
    ["In Newton–Raphson's method, if \\(f'(x_0) = 0\\) exactly, the next iterate \\(x_1\\):", ["Is undefined (division by zero)", "Equals the exact root", "Equals 0", "Is always equal to \\(x_0\\)"], 0],
    ["The main reason iterative numerical methods are “self-correcting” is that:", ["They require no starting guess at all", "Each new approximation uses the error from all previous steps combined", "Each iteration uses the current approximation to generate a (hopefully) better one", "They are only used once"], 2],
    ["Which pair of methods are both classified as bracketing methods (root always trapped between two values)?", ["Bisection and Regula Falsi", "Newton–Raphson and Bisection", "Newton–Raphson and Secant", "Trapezoidal and Simpson's"], 0]
      ],
      mcqStimulus: [
        {
          stimulus: "Bisection is applied to \\(f(x)=x^2-5\\) on \\([2,3]\\) (root \\(=\\sqrt{5}\\approx2.236\\)).<table><tr><th>Iteration</th><th>Interval</th><th>Midpoint</th></tr><tr><td>1</td><td>\\([2,3]\\)</td><td>2.5</td></tr><tr><td>2</td><td>\\([2,2.5]\\)</td><td>2.25</td></tr><tr><td>3</td><td>\\([2,2.25]\\)</td><td>2.125</td></tr></table>",
          questions: [
            ["\\(f(2.5) = (2.5)^2-5 = 1.25\\), which is positive. Since \\(f(2)<0\\), the root for iteration 2 lies in:", ["\\([2.5,3]\\)", "\\([2.5,2.75]\\)", "\\([2,2.5]\\)", "\\([2,3]\\)"], 2],
            ["Using the table, \\(f(2.25) = (2.25)^2-5 = -0.0625\\), which is negative. So the root for iteration 3 lies in:", ["\\([2,2.25]\\)", "\\([2.25,2.5]\\)", "\\([2.25,3]\\)", "\\([2,2.5]\\)"], 0],
            ["After iteration 3 (midpoint 2.125), the interval width is:", ["0.25", "0.0625", "0.5", "0.125"], 3],
            ["Based on the pattern in the table, after how many total iterations does the interval width first drop below 0.01 (starting width 1)?", ["8", "5", "6", "7"], 3]
          ]
        },
        {
          stimulus: "Newton–Raphson is used to approximate \\(\\sqrt{7}\\) using \\(f(x)=x^2-7\\), \\(x_{n+1}=\\frac{1}{2}\\left(x_n+\\frac{7}{x_n}\\right)\\), starting at \\(x_0=3\\).<table><tr><th>n</th><th>\\(x_n\\)</th></tr><tr><td>0</td><td>3</td></tr><tr><td>1</td><td>2.6667</td></tr></table>",
          questions: [
            ["Using the table's \\(x_0=3\\), the value \\(x_1 = \\frac{1}{2}\\left(3+\\frac{7}{3}\\right)\\) is closest to:", ["2.75", "2.5", "2.8", "2.6667"], 3],
            ["Continuing from \\(x_1 \\approx 2.6667\\), the next iterate \\(x_2 = \\frac{1}{2}\\left(2.6667+\\frac{7}{2.6667}\\right)\\) is closest to:", ["2.60", "2.65", "2.6458", "2.70"], 2],
            ["Since \\(\\sqrt{7}\\approx2.6458\\), how many Newton–Raphson iterations (from \\(x_0=3\\)) are needed to match \\(\\sqrt{7}\\) to 4 decimal places, based on the table's rapid convergence?", ["2", "1", "5", "10"], 0],
            ["This rapid approach to the true root in very few steps demonstrates that Newton–Raphson's convergence order is:", ["Sublinear", "Linear", "Zero", "Quadratic"], 3]
          ]
        },
        {
          stimulus: "A table of values for \\(f(x)=\\dfrac{1}{1+x^2}\\) is used to approximate \\(\\displaystyle\\int_0^1 f(x)\\,dx\\) with \\(n=4\\), \\(h=0.25\\):<table><tr><th>x</th><th>0</th><th>0.25</th><th>0.5</th><th>0.75</th><th>1</th></tr><tr><th>y</th><th>1</th><th>0.9412</th><th>0.8</th><th>0.64</th><th>0.5</th></tr></table>",
          questions: [
            ["Using the composite trapezoidal rule with the table's values, the approximation is closest to:", ["0.785", "0.783", "0.750", "0.800"], 1],
            ["Using the composite Simpson's \\(\\frac{1}{3}\\) rule with the table's values, the approximation is closest to:", ["0.800", "0.7854", "0.760", "0.783"], 1],
            ["The exact value of \\(\\displaystyle\\int_0^1 \\frac{1}{1+x^2}\\,dx = \\tan^{-1}(1)-\\tan^{-1}(0) = \\frac{\\pi}{4} \\approx 0.7854\\). Which rule's approximation from the table is closer to this exact value?", ["Simpson's \\(\\frac{1}{3}\\)", "Neither is close", "Trapezoidal", "Both equally close"], 0],
            ["This table illustrates that for a smooth curved function, Simpson's rule is generally more accurate than the trapezoidal rule because it fits each pair of subintervals with a:", ["Straight line", "Constant value", "Quadratic curve", "Cubic curve"], 2]
          ]
        }
      ],
      short: [],
      long: []
    }
  ]
};
