/*
  CLASS 12 — MATH — SHORT & LONG QUESTIONS — CHAPTERS 3 TO 4
  ------------------------------------------------------------
  Chapter 3: Integration
  Chapter 4: Differential Equations

  Source: curated "Important Questions" sheets (FBISE pattern, NBF
  textbook) for each chapter, converted to the parts-selectable schema
  (same shape as class11-math-ch*.js and class12-math-ch1-2.js).

  Every indefinite-integral answer was checked by differentiating it
  symbolically (matches the integrand); every definite integral was
  checked by numerically evaluating the integral and comparing to the
  stated closed form; several differential-equation solutions were
  checked by implicit differentiation against the original equation.
  One error was found and fixed: Ex 3.7 Q9's displayed integrand had a
  stray factor of 1/2 on x (the stored answer "1" already matched the
  textbook's actual integrand, x - cos(pi x), so only the question text
  needed correcting).

  mcq stays empty -- MCQs for chapter 3 live in class12-math-mcq-ch1-2-3.js,
  and for chapter 4 in class12-math-mcq-ch4-5.js.
  MATH FORMATTING: inline math wrapped in \\( \\) for KaTeX.
*/
var CLASS12_MATH_CH3_4 = {
  chapters: [
    {
      id: 3,
      name: "Integration",
      mcq: [],
      short: [
        {
          exercise: "Examples 1–3 (basic integration)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (4x^{7}-2x^{3}+9x+3)\\,dx\\).", answer: "\\(\\frac{x^{8}}{2} - \\frac{x^{4}}{2} + \\frac{9 x^{2}}{2} + 3 x+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{y^{3}-2y^{6}}{y^{5}}\\,dy\\).", answer: "\\(- y^{2} - \\frac{1}{y}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{ax+\\frac12b}{ax^{2}+bx+c}\\,dx\\).", answer: "\\(\\dfrac12\\ln\\left|ax^{2}+bx+c\\right|+c_1\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int e^{3x}\\,dx\\).", answer: "\\(\\frac{e^{3 x}}{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{e^{\\sin^{-1}x}}{\\sqrt{1-x^{2}}}\\,dx\\).", answer: "\\(e^{\\sin^{-1}{\\left(x \\right)}}+c\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.1 (Q1–Q18 — evaluate the integral)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (x^{2}-3x+9)\\,dx\\).", answer: "\\(\\frac{x^{3}}{3} - \\frac{3 x^{2}}{2} + 9 x+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (y^{2}+8y+\\sqrt2)\\,dy\\).", answer: "\\(\\frac{y^{3}}{3} + 4 y^{2} + \\sqrt{2} y+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\left(\\sqrt y+\\dfrac1{y^{2}}\\right)\\,dy\\).", answer: "\\(\\frac{2 y^{\\frac{3}{2}}}{3} - \\frac{1}{y}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (4+x^{2})^{2}\\,dx\\).", answer: "\\(\\frac{x^{5}}{5} + \\frac{8 x^{3}}{3} + 16 x+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (1+x)(1-x^{2})\\,dx\\).", answer: "\\(- \\frac{x^{4}}{4} - \\frac{x^{3}}{3} + \\frac{x^{2}}{2} + x+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\left(\\sqrt x+\\dfrac{1}{2\\sqrt x}\\right)\\,dx\\).", answer: "\\(\\frac{2 x^{\\frac{3}{2}}}{3} + \\sqrt{x}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (e^{4x}-e^{-1}+1)\\,dx\\).", answer: "\\(- \\frac{x}{e} + x + \\frac{e^{4 x}}{4}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\left(\\dfrac{e^{2}}{2}x+\\dfrac1x\\right)\\,dx\\).", answer: "\\(\\frac{x^{2} e^{2}}{4} + \\ln{\\left(\\left|{x}\\right| \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x\\,e^{x^{2}}\\,dx\\).", answer: "\\(\\frac{e^{x^{2}}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int 5^{x}\\,dx\\).", answer: "\\(\\frac{5^{x}}{\\ln{\\left(5 \\right)}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{7}{7^{y}}\\,dy\\).", answer: "\\(- \\frac{7^{1 - y}}{\\ln{\\left(7 \\right)}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\left(x^{3}+\\dfrac1{2x}-\\dfrac1{x^{3}}\\right)\\,dx\\).", answer: "\\(\\frac{x^{4}}{4} + \\frac{\\ln{\\left(\\left|{x}\\right| \\right)}}{2} + \\frac{1}{2 x^{2}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{2x+1}{x^{2}+3}\\,dx\\).", answer: "\\(\\ln(x^{2}+3)+\\dfrac{1}{\\sqrt3}\\tan^{-1}\\dfrac{x}{\\sqrt3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{e^{\\tan^{-1}z}}{1+z^{2}}\\,dz\\).", answer: "\\(e^{\\tan^{-1}{\\left(z \\right)}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\left(x^{3/2}+e^{3x}+x^{0}\\right)\\,dx\\).", answer: "\\(\\frac{2 x^{\\frac{5}{2}}}{5} + x + \\frac{e^{3 x}}{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (3x^{2}+2x)(x^{3}+x^{2}+9)^{5}\\,dx\\).", answer: "\\(\\frac{\\left(x^{3} + x^{2} + 9\\right)^{6}}{6}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\left(5e^{5x}-x^{-3}+3^{2x}\\right)\\,dx\\).", answer: "\\(\\frac{3^{2 x}}{2 \\ln{\\left(3 \\right)}} + e^{5 x} + \\frac{1}{2 x^{2}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\left(z^{-1/4}+\\sqrt{3z}+\\dfrac4z-\\dfrac1{e^{z}}\\right)\\,dz\\).", answer: "\\(\\frac{4 z^{\\frac{3}{4}}}{3} + \\frac{2 \\sqrt{3} z^{\\frac{3}{2}}}{3} + 4 \\ln{\\left(\\left|{z}\\right| \\right)} + e^{- z}+c\\)" } ] }
          ]
        },
        {
          exercise: "Examples 4–7 (trigonometric integrals)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\sin2x\\,dx\\).", answer: "\\(- \\frac{\\cos{\\left(2 x \\right)}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\cos\\dfrac{3x}{5}\\,dx\\).", answer: "\\(\\frac{5 \\sin{\\left(\\frac{3 x}{5} \\right)}}{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\sec^{2}mx\\,dx\\).", answer: "\\(\\dfrac{\\tan mx}{m}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int 5\\csc^{2}\\dfrac{7x}{5}\\,dx\\).", answer: "\\(- \\frac{25 \\cot{\\left(\\frac{7 x}{5} \\right)}}{7}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int 9\\sec3x\\tan3x\\,dx\\).", answer: "\\(3 \\sec{\\left(3 x \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Prove that \\(\\int\\sec x\\,dx=\\ln|\\sec x+\\tan x|+c\\).", answer: "Multiply and divide by \\(\\sec x+\\tan x\\): \\(\\int\\dfrac{\\sec^{2}x+\\sec x\\tan x}{\\sec x+\\tan x}dx\\). The numerator is the derivative of the denominator, so the integral is \\(\\ln|\\sec x+\\tan x|+c\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Prove that \\(\\int\\csc x\\,dx=\\ln|\\csc x-\\cot x|+c\\).", answer: "Multiply and divide by \\(\\csc x-\\cot x\\): \\(\\int\\dfrac{\\csc^{2}x-\\csc x\\cot x}{\\csc x-\\cot x}dx\\). The numerator is the derivative of the denominator, so the integral is \\(\\ln|\\csc x-\\cot x|+c\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Prove that \\(\\int\\tan x\\,dx=-\\ln(\\cos x)+c=\\ln(\\sec x)+c\\).", answer: "\\(\\int\\dfrac{\\sin x}{\\cos x}dx=-\\int\\dfrac{-\\sin x}{\\cos x}dx=-\\ln|\\cos x|+c=\\ln|\\sec x|+c\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\sin^{2}x\\,dx\\).", answer: "\\(\\frac{x}{2} - \\frac{\\sin{\\left(2 x \\right)}}{4}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Integrate \\(\\int (8\\sec9x-\\tan3x)\\,dx\\).", answer: "\\(\\frac{8 \\ln{\\left(\\left|{\\tan{\\left(9 x \\right)} + \\sec{\\left(9 x \\right)}}\\right| \\right)}}{9} + \\frac{\\ln{\\left(\\left|{\\cos{\\left(3 x \\right)}}\\right| \\right)}}{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Integrate \\(\\int \\cos^{2}7x\\,dx\\).", answer: "\\(\\frac{x}{2} + \\frac{\\sin{\\left(14 x \\right)}}{28}+c\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.2 (Q1–Q18 — trigonometric integrals)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (\\sin\\pi x-3\\sin3x)\\,dx\\).", answer: "\\(\\cos{\\left(3 x \\right)} - \\frac{\\cos{\\left(\\pi x \\right)}}{\\pi}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int -\\sec^{2}\\!\\left(\\dfrac32y\\right)\\,dy\\).", answer: "\\(- \\frac{2 \\tan{\\left(\\frac{3 y}{2} \\right)}}{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int [1-8\\csc^{2}(2x)]\\,dx\\).", answer: "\\(x + 4 \\cot{\\left(2 x \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac12(\\csc^{2}x-\\csc x\\cot x)\\,dx\\).", answer: "\\(- \\frac{\\cot{\\left(x \\right)}}{2} + \\frac{\\csc{\\left(x \\right)}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\cos^{2}\\dfrac z7\\,dz\\).", answer: "\\(\\frac{z}{2} + \\frac{7 \\sin{\\left(\\frac{2 z}{7} \\right)}}{4}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (1+\\tan^{2}\\theta)\\,d\\theta\\).", answer: "\\(\\tan{\\left(\\theta \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{1+\\cos4t}{2}\\,dt\\).", answer: "\\(\\frac{t}{2} + \\frac{\\sin{\\left(4 t \\right)}}{8}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\sec^{2}(5x-1)\\,dx\\).", answer: "\\(\\frac{\\tan{\\left(5 x - 1 \\right)}}{5}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (\\tan5x+\\cos7x)\\,dx\\).", answer: "\\(\\frac{\\ln{\\left(\\left|{\\sec{\\left(5 x \\right)}}\\right| \\right)}}{5} + \\frac{\\sin{\\left(7 x \\right)}}{7}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (\\cot9y-3)\\,dy\\).", answer: "\\(- 3 y + \\frac{\\ln{\\left(\\left|{\\sin{\\left(9 y \\right)}}\\right| \\right)}}{9}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (\\tan^{2}2\\theta+\\cot^{2}2\\theta)\\,d\\theta\\).", answer: "\\(- 2 \\theta + \\frac{\\tan{\\left(2 \\theta \\right)}}{2} - \\frac{\\cot{\\left(2 \\theta \\right)}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\sin^{2}\\!\\left(\\dfrac{11}{2}y\\right)\\,dy\\).", answer: "\\(\\frac{y}{2} - \\frac{\\sin{\\left(11 y \\right)}}{22}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\csc11x\\tan11x\\,dx\\).", answer: "\\(\\frac{\\ln{\\left(\\left|{\\tan{\\left(11 x \\right)} + \\sec{\\left(11 x \\right)}}\\right| \\right)}}{11}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\cos\\theta(\\tan\\theta+\\sec\\theta)\\,d\\theta\\).", answer: "\\(\\theta - \\cos{\\left(\\theta \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\csc^{2}\\!\\left(\\dfrac{x-1}{3}\\right)\\,dx\\).", answer: "\\(- 3 \\cot{\\left(\\frac{x}{3} - \\frac{1}{3} \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (\\cos x)^{1/5}\\sin x\\,dx\\).", answer: "\\(- \\frac{5 \\cos^{\\frac{6}{5}}{\\left(x \\right)}}{6}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int e^{y}\\sin e^{y}\\,dy\\).", answer: "\\(- \\cos{\\left(e^{y} \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int 9\\tan(x+7)\\,dx\\).", answer: "\\(9 \\ln{\\left(\\left|{\\sec{\\left(x + 7 \\right)}}\\right| \\right)}+c\\)" } ] }
          ]
        },
        {
          exercise: "Examples 8–12 (integration by substitution)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int 3x^{2}\\cos(x^{3})\\,dx\\).", answer: "\\(\\sin{\\left(x^{3} \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Integrate \\(\\int \\dfrac{e^{\\tan^{-1}x}}{1+x^{2}}\\,dx\\).", answer: "\\(e^{\\tan^{-1}{\\left(x \\right)}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{1}{\\sqrt{5-4x-x^{2}}}\\,dx\\).", answer: "\\(\\sin^{-1}{\\left(\\frac{x}{3} + \\frac{2}{3} \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{1}{x^{2}+4x+5}\\,dx\\).", answer: "\\(\\tan^{-1}{\\left(x + 2 \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x(x^{2}-a^{2})^{3/2}\\,dx\\).", answer: "\\(\\dfrac15(x^{2}-a^{2})^{5/2}+c\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.3 (Q1–Q12 — use a suitable substitution)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{1}{x^{2}+9}\\,dx\\).", answer: "\\(\\frac{\\tan^{-1}{\\left(\\frac{x}{3} \\right)}}{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{1}{\\sqrt{5-x^{2}}}\\,dx\\).", answer: "\\(\\sin^{-1}\\dfrac{x}{\\sqrt5}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int (2x+7)(x^{2}+7x+3)^{4/5}\\,dx\\).", answer: "\\(\\frac{5 \\left(x^{2} + 7 x + 3\\right)^{\\frac{9}{5}}}{9}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{x^{2}}{x^{3}+1}\\,dx\\).", answer: "\\(\\frac{\\ln{\\left(\\left|{x^{3} + 1}\\right| \\right)}}{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{1}{y^{2}+8y+20}\\,dy\\).", answer: "\\(\\frac{\\tan^{-1}{\\left(\\frac{y}{2} + 2 \\right)}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{1}{\\sqrt{20-x^{2}-4x}}\\,dx\\).", answer: "\\(\\sin^{-1}\\dfrac{x+2}{2\\sqrt6}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{x}{(4x^{2}+1)^{3}}\\,dx\\).", answer: "\\(- \\frac{1}{16 \\left(4 x^{2} + 1\\right)^{2}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int x^{4}\\sqrt{3x^{5}-5}\\,dx\\).", answer: "\\(\\frac{2 \\left(3 x^{5} - 5\\right)^{\\frac{3}{2}}}{45}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{2ax+b}{ax^{2}+bx+c}\\,dx\\).", answer: "\\(\\ln\\left|ax^{2}+bx+c\\right|+c_1\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{1}{(1-3x)^{2}}\\,dx\\).", answer: "\\(\\dfrac{1}{3(1-3x)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{z^{3}}{1+z^{4}}\\,dz\\).", answer: "\\(\\frac{\\ln{\\left(z^{4} + 1 \\right)}}{4}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a suitable substitution to evaluate \\(\\int \\dfrac{\\cot^{-1}x}{1+x^{2}}\\,dx\\).", answer: "\\(-\\dfrac{(\\cot^{-1}x)^{2}}{2}+c\\)" } ] }
          ]
        },
        {
          exercise: "Examples 13–14 and Ex 3.4 (integration by parts — Q1, 4, 5, 8, 10, 11, 12, 13, 18)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x\\,e^{x}\\,dx\\).", answer: "\\(\\left(x - 1\\right) e^{x}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x^{2}\\ln x\\,dx\\).", answer: "\\(\\frac{x^{3} \\ln{\\left(x \\right)}}{3} - \\frac{x^{3}}{9}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x\\tan^{-1}x\\,dx\\).", answer: "\\(- \\frac{x}{2} + \\frac{\\left(x^{2} + 1\\right) \\tan^{-1}{\\left(x \\right)}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Using integration by parts, evaluate \\(\\int \\ln x\\,dx\\).", answer: "\\(x \\ln{\\left(x \\right)} - x+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Using integration by parts, evaluate \\(\\int x^{3}\\ln x\\,dx\\).", answer: "\\(\\frac{x^{4} \\ln{\\left(x \\right)}}{4} - \\frac{x^{4}}{16}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Using integration by parts, evaluate \\(\\int y\\sin2y\\,dy\\).", answer: "\\(- \\frac{y \\cos{\\left(2 y \\right)}}{2} + \\frac{\\sin{\\left(2 y \\right)}}{4}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Using integration by parts, evaluate \\(\\int \\ln(2x+3)\\,dx\\).", answer: "\\(- x + \\frac{\\left(2 x + 3\\right) \\ln{\\left(2 x + 3 \\right)}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Using integration by parts, evaluate \\(\\int x\\cos x\\,dx\\).", answer: "\\(x \\sin{\\left(x \\right)} + \\cos{\\left(x \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Using integration by parts, evaluate \\(\\int \\cos^{-1}x\\,dx\\).", answer: "\\(x \\cos^{-1}{\\left(x \\right)} - \\sqrt{1 - x^{2}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Using integration by parts, evaluate \\(\\int \\tan^{-1}x\\,dx\\).", answer: "\\(x \\tan^{-1}{\\left(x \\right)} - \\frac{\\ln{\\left(x^{2} + 1 \\right)}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Using integration by parts, evaluate \\(\\int x\\sec^{2}x\\,dx\\).", answer: "\\(x \\tan{\\left(x \\right)} + \\ln{\\left(\\left|{\\cos{\\left(x \\right)}}\\right| \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Using integration by parts, evaluate \\(\\int \\dfrac{\\ln x}{\\sqrt x}\\,dx\\).", answer: "\\(2 \\sqrt{x} \\ln{\\left(x \\right)} - 4 \\sqrt{x}+c\\)" } ] }
          ]
        },
        {
          exercise: "Examples 20–22 (the definite integral)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Sketch the region whose area is represented by \\(\\int_{1}^{5}3\\,dx\\) and evaluate it using a formula from geometry.", answer: "\\(12\\) (area of a rectangle \\(4\\times3\\))." } ] },
            { stem: null, parts: [ { label: null, text: "Sketch the region whose area is represented by \\(\\int_{-2}^{2}(x+3)\\,dx\\) and evaluate it using a formula from geometry.", answer: "\\(12\\) (area of a trapezoid: \\(\\tfrac12(1+5)\\times4\\))." } ] },
            { stem: null, parts: [ { label: null, text: "Sketch the region whose area is represented by \\(\\int_{0}^{1}\\sqrt{1-x^{2}}\\,dx\\) and evaluate it using a formula from geometry.", answer: "\\(\\dfrac{\\pi}{4}\\) (area of a quarter circle of radius \\(1\\))." } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{0}^{1} (x-1)\\,dx\\).", answer: "\\(- \\frac{1}{2}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{0}^{2} (x-1)\\,dx\\).", answer: "\\(0\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find \\(\\int_{-1}^{4}[2f(x)+5g(x)]\\,dx\\) if \\(\\int_{-1}^{4}f(x)\\,dx=2\\) and \\(\\int_{-1}^{4}g(x)\\,dx=4\\).", answer: "\\(2(2)+5(4)=24\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find \\(\\int_{-1}^{3}4f(x)\\,dx\\) if \\(\\int_{-1}^{2}f(x)\\,dx=3\\) and \\(\\int_{2}^{3}f(x)\\,dx=1\\).", answer: "\\(4(3+1)=16\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.6 (Q1 — sketch the region and use geometry)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Sketch the region whose area is represented by \\(\\int_{0}^{4}x\\,dx\\) and evaluate it using a formula from geometry.", answer: "\\(8\\) (area of a triangle)." } ] },
            { stem: null, parts: [ { label: null, text: "Sketch the region whose area is represented by \\(\\int_{-3}^{0}x\\,dx\\) and evaluate it using a formula from geometry.", answer: "\\(-\\dfrac92\\) (the triangle lies below the \\(x\\)-axis)." } ] },
            { stem: null, parts: [ { label: null, text: "Sketch the region whose area is represented by \\(\\int_{0}^{2}(x-1)\\,dx\\) and evaluate it using a formula from geometry.", answer: "\\(0\\) (two equal triangles, one above and one below the \\(x\\)-axis)." } ] },
            { stem: null, parts: [ { label: null, text: "Sketch the region whose area is represented by \\(\\int_{0}^{2}(x+1)\\,dx\\) and evaluate it using a formula from geometry.", answer: "\\(4\\) (area of a trapezoid)." } ] },
            { stem: null, parts: [ { label: null, text: "Sketch the region whose area is represented by \\(\\int_{-3}^{3}2\\,dx\\) and evaluate it using a formula from geometry.", answer: "\\(12\\) (area of a rectangle \\(6\\times2\\))." } ] }
          ]
        },
        {
          exercise: "Ex 3.6 (Q2 — piecewise function)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Let \\(f(x)=\\begin{cases}x,&x\\le1\\\\3,&x>1\\end{cases}\\). Evaluate \\(\\int_{0}^{1}f(x)\\,dx\\).", answer: "\\(\\dfrac12\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Let \\(f(x)=\\begin{cases}x,&x\\le1\\\\3,&x>1\\end{cases}\\). Evaluate \\(\\int_{-1}^{1}f(x)\\,dx\\).", answer: "\\(0\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Let \\(f(x)=\\begin{cases}x,&x\\le1\\\\3,&x>1\\end{cases}\\). Evaluate \\(\\int_{1}^{4}f(x)\\,dx\\).", answer: "\\(3(4-1)=9\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Let \\(f(x)=\\begin{cases}x,&x\\le1\\\\3,&x>1\\end{cases}\\). Evaluate \\(\\int_{-1}^{2}f(x)\\,dx\\).", answer: "\\(\\int_{-1}^{1}x\\,dx+\\int_{1}^{2}3\\,dx=0+3=3\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.6 (Q4–Q7 — properties and geometry)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find \\(\\int_{1}^{5}[3f(x)-2g(x)]\\,dx\\) if \\(\\int_{1}^{5}f(x)\\,dx=4\\) and \\(\\int_{1}^{5}g(x)\\,dx=5\\).", answer: "\\(3(4)-2(5)=2\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find \\(\\int_{1}^{4}f(x)\\,dx\\) if \\(\\int_{1}^{2}f(x)\\,dx=1\\) and \\(\\int_{2}^{4}f(x)\\,dx=2\\).", answer: "\\(1+2=3\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find \\(\\int_{3}^{-2}f(x)\\,dx\\) if \\(\\int_{-2}^{1}f(x)\\,dx=1\\) and \\(\\int_{1}^{3}f(x)\\,dx=-5\\).", answer: "\\(-\\int_{-2}^{3}f(x)\\,dx=-(1-5)=4\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a formula from geometry to evaluate \\(\\int_{-1}^{4}(3-x)\\,dx\\).", answer: "\\(\\dfrac{15}{2}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Use a formula from geometry to evaluate \\(\\int_{0}^{1}\\left[2+\\sqrt{1-x^{2}}\\right]dx\\).", answer: "\\(2+\\dfrac{\\pi}{4}\\) (rectangle plus quarter circle)." } ] },
            { stem: null, parts: [ { label: null, text: "Use a formula from geometry to evaluate \\(\\int_{-2}^{2}\\sqrt{4-x^{2}}\\,dx\\).", answer: "\\(2\\pi\\) (area of a semicircle of radius \\(2\\))." } ] }
          ]
        },
        {
          exercise: "Examples 23–27 (fundamental theorem of calculus)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{1}^{3} x\\,dx\\).", answer: "\\(4\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{-2}^{2} (3x^{2}-x+1)\\,dx\\).", answer: "\\(20\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{0}^{2} \\sqrt{2x^{2}+1}\\,x\\,dx\\).", answer: "\\(\\dfrac{13}{3}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{3}} \\dfrac{1}{1-\\cos x}\\,dx\\).", answer: "\\(\\cot\\dfrac{\\pi}{8}-\\cot\\dfrac{\\pi}{6}=\\sqrt2+1-\\sqrt3\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{1}^{e} x\\ln x\\,dx\\).", answer: "\\(\\dfrac{e^{2}+1}{4}\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.7 (Q1–Q14 — definite integrals)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{-1}^{2} (2x+3)\\,dx\\).", answer: "\\(12\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{-4}^{12} \\sqrt{y+4}\\,dy\\).", answer: "\\(\\dfrac{128}{3}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{0}^{\\frac{1}{2}} (2x+1)^{-1/3}\\,dx\\).", answer: "\\(\\dfrac34\\left(2^{2/3}-1\\right)\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{0}^{3} (6x^{2}-4x+5)\\,dx\\).", answer: "\\(51\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{-2}^{1} (12x^{5}-36)\\,dx\\).", answer: "\\(-234\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{\\frac{\\pi}{3}}^{\\frac{\\pi}{4}} \\cos\\theta\\,d\\theta\\).", answer: "\\(\\dfrac{\\sqrt2-\\sqrt3}{2}\\) (the limits are reversed, as printed in the source)." } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{2}^{4} \\dfrac{x^{2}+8}{x^{2}}\\,dx\\).", answer: "\\(4\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{- \\frac{1}{2}}^{\\frac{3}{2}} \\left(x-\\cos\\pi x\\right)\\,dx\\).", answer: "\\(1\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{1}^{4} \\dfrac{\\cos\\sqrt x}{2\\sqrt x}\\,dx\\).", answer: "\\(\\sin2-\\sin1\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}} \\sin x\\cos x\\,dx\\).", answer: "\\(\\frac{1}{4}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}} \\dfrac{1+\\cos\\theta}{(\\theta+\\sin\\theta)^{2}}\\,d\\theta\\).", answer: "\\(\\dfrac{6}{\\pi+3}-\\dfrac{2}{\\pi+2}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{- \\frac{\\pi}{4}}^{\\frac{\\pi}{4}} (\\sec x+\\tan x)^{2}\\,dx\\).", answer: "\\(4-\\dfrac{\\pi}{2}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{\\frac{\\pi}{2}}^{\\pi} \\cos^{2}x\\,dx\\).", answer: "\\(\\frac{\\pi}{4}\\)" } ] }
          ]
        },
        {
          exercise: "Review Exercise Unit 3 (Q2 — evaluate)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{4x+2}{x^{2}+x+1}\\,dx\\).", answer: "\\(2 \\ln{\\left(x^{2} + x + 1 \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x(x^{2}+1)^{4}\\,dx\\).", answer: "\\(\\frac{\\left(x^{2} + 1\\right)^{5}}{10}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\cos^{2}3x\\,dx\\).", answer: "\\(\\frac{x}{2} + \\frac{\\sin{\\left(6 x \\right)}}{12}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{0}^{\\frac{\\pi}{4}} (\\sin2x-5\\cos4x)\\,dx\\).", answer: "\\(\\frac{1}{2}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{1}^{4} \\dfrac{\\cos\\sqrt x}{2\\sqrt x}\\,dx\\).", answer: "\\(\\sin2-\\sin1\\)" } ] }
          ]
        }
      ],
      long: [
        {
          exercise: "Ex 3.4 & Examples 15–16 (integration by parts — harder)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int (\\ln x)^{2}\\,dx\\).", answer: "\\(x(\\ln x)^{2}-2x\\ln x+2x+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\sin(\\ln x)\\,dx\\).", answer: "\\(\\frac{x \\left(\\sin{\\left(\\ln{\\left(x \\right)} \\right)} - \\cos{\\left(\\ln{\\left(x \\right)} \\right)}\\right)}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int e^{x}\\cos x\\,dx\\).", answer: "\\(\\frac{\\left(\\sin{\\left(x \\right)} + \\cos{\\left(x \\right)}\\right) e^{x}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x\\sec^{-1}x\\,dx\\).", answer: "\\(\\frac{x^{2} \\sec^{-1}{\\left(x \\right)}}{2} - \\frac{\\sqrt{x^{2} - 1}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x^{2}e^{x}\\,dx\\).", answer: "\\(\\left(x^{2} - 2 x + 2\\right) e^{x}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x^{2}\\sin^{-1}x\\,dx\\).", answer: "\\(\\frac{x^{3} \\sin^{-1}{\\left(x \\right)}}{3} - \\frac{\\left(1 - x^{2}\\right)^{\\frac{3}{2}}}{9} + \\frac{\\sqrt{1 - x^{2}}}{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\ln\\!\\left[x+\\sqrt{1+x^{2}}\\right]\\,dx\\).", answer: "\\(x \\ln{\\left(x + \\sqrt{x^{2} + 1} \\right)} - \\sqrt{x^{2} + 1}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x^{3}e^{x^{2}}\\,dx\\).", answer: "\\(\\frac{\\left(x^{2} - 1\\right) e^{x^{2}}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x^{2}\\sin x\\,dx\\).", answer: "\\(- x^{2} \\cos{\\left(x \\right)} + 2 x \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Apply integration by parts to evaluate \\(\\int \\sqrt{a^{2}-x^{2}}\\,dx\\).", answer: "\\(\\dfrac{x}{2}\\sqrt{a^{2}-x^{2}}+\\dfrac{a^{2}}{2}\\sin^{-1}\\dfrac{x}{a}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Apply integration by parts to evaluate \\(\\int \\sqrt{a^{2}+x^{2}}\\,dx\\).", answer: "\\(\\dfrac{x}{2}\\sqrt{a^{2}+x^{2}}+\\dfrac{a^{2}}{2}\\ln\\left(x+\\sqrt{a^{2}+x^{2}}\\right)+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Apply integration by parts to evaluate \\(\\int e^{ax}\\sin bx\\,dx\\).", answer: "\\(\\dfrac{e^{ax}\\,(a\\sin bx-b\\cos bx)}{a^{2}+b^{2}}+c\\)" } ] }
          ]
        },
        {
          exercise: "Examples 17–19 (partial fractions)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{x^{3}-2x}{x^{2}+3x+2}\\,dx\\).", answer: "\\(\\frac{x^{2}}{2} - 3 x + \\ln{\\left(\\left|{x + 1}\\right| \\right)} + 4 \\ln{\\left(\\left|{x + 2}\\right| \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{x^{2}+2x+4}{(x+1)^{3}}\\,dx\\).", answer: "\\(\\ln{\\left(\\left|{x + 1}\\right| \\right)} - \\frac{3}{2 \\left(x + 1\\right)^{2}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{3x^{2}+5x+3}{(x+2)(x^{2}+1)}\\,dx\\).", answer: "\\(\\ln{\\left(x^{2} + 1 \\right)} + \\ln{\\left(\\left|{x + 2}\\right| \\right)} + \\tan^{-1}{\\left(x \\right)}+c\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.5 (Q1–Q12 — partial fractions)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{3x+7}{(x+2)(x+3)}\\,dx\\).", answer: "\\(\\ln{\\left(\\left|{x + 2}\\right| \\right)} + 2 \\ln{\\left(\\left|{x + 3}\\right| \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{4x+9}{x^{2}+x-12}\\,dx\\).", answer: "\\(3 \\ln{\\left(\\left|{x - 3}\\right| \\right)} + \\ln{\\left(\\left|{x + 4}\\right| \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{21-8x}{x^{2}+x-6}\\,dx\\).", answer: "\\(\\ln{\\left(\\left|{x - 2}\\right| \\right)} - 9 \\ln{\\left(\\left|{x + 3}\\right| \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{3x+7}{(x+2)^{2}}\\,dx\\).", answer: "\\(3 \\ln{\\left(\\left|{x + 2}\\right| \\right)} - \\frac{1}{x + 2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{5x^{2}-5x+2}{(x+1)(x-1)^{2}}\\,dx\\).", answer: "\\(2 \\ln{\\left(\\left|{x - 1}\\right| \\right)} + 3 \\ln{\\left(\\left|{x + 1}\\right| \\right)} - \\frac{1}{x - 1}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{9x^{2}+3x+29}{(x+1)(x^{2}+4)}\\,dx\\).", answer: "\\(\\ln{\\left(x^{2} + 4 \\right)} + 7 \\ln{\\left(\\left|{x + 1}\\right| \\right)} + \\frac{\\tan^{-1}{\\left(\\frac{x}{2} \\right)}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{7x^{2}+7x+4}{(2x+1)(x^{2}+x+1)}\\,dx\\).", answer: "\\(\\ln{\\left(x^{2} + x + 1 \\right)} + \\frac{3 \\ln{\\left(\\left|{2 x + 1}\\right| \\right)}}{2}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{x^{3}+4x^{2}+9x+14}{x^{2}+4x+3}\\,dx\\).", answer: "\\(\\frac{x^{2}}{2} + 4 \\ln{\\left(\\left|{x + 1}\\right| \\right)} + 2 \\ln{\\left(\\left|{x + 3}\\right| \\right)}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{1}{x^{2}-9}\\,dx\\).", answer: "\\(\\frac{\\ln{\\left(\\left|{x - 3}\\right| \\right)}}{6} - \\frac{\\ln{\\left(\\left|{x + 3}\\right| \\right)}}{6}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{1}{x^{3}+2x^{2}+x}\\,dx\\).", answer: "\\(\\ln{\\left(\\left|{x}\\right| \\right)} - \\ln{\\left(\\left|{x + 1}\\right| \\right)} + \\frac{1}{x + 1}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{e^{x}}{(e^{x}+1)^{2}(e^{x}-2)}\\,dx\\).", answer: "\\(- \\frac{\\ln{\\left(e^{x} + 1 \\right)}}{9} + \\frac{\\ln{\\left(\\left|{e^{x} - 2}\\right| \\right)}}{9} + \\frac{1}{3 e^{x} + 3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate using partial fractions \\(\\int \\dfrac{x}{(x+1)^{2}(x^{2}+1)}\\,dx\\).", answer: "\\(\\frac{\\tan^{-1}{\\left(x \\right)}}{2} + \\frac{1}{2 x + 2}+c\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.7 (Q15–Q20 — definite integrals)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{1}^{3} \\ln x\\,dx\\).", answer: "\\(-2 + 3 \\ln{\\left(3 \\right)}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{2}^{4} \\left(e^{x/2}-e^{x/4}\\right)\\,dx\\).", answer: "\\(2e^{2}-6e+4\\sqrt{e}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{0}^{\\frac{\\pi}{4}} \\dfrac{1}{1-\\sin x}\\,dx\\).", answer: "\\(\\sqrt2\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{0}^{\\frac{\\pi}{4}} \\tan^{-1}y\\,dy\\).", answer: "\\(\\dfrac{\\pi}{4}\\tan^{-1}\\dfrac{\\pi}{4}-\\dfrac12\\ln\\left(1+\\dfrac{\\pi^{2}}{16}\\right)\\) (limits as printed in the source)." } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{0}^{\\frac{\\pi}{2}} \\dfrac{\\sin x}{(2+\\cos x)(5+\\cos x)}\\,dx\\).", answer: "\\(\\dfrac13\\ln\\dfrac54\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int_{2}^{5} \\dfrac{1}{x(x+1)}\\,dx\\).", answer: "\\(\\ln\\dfrac54\\)" } ] }
          ]
        },
        {
          exercise: "Examples 28–34 (area, volume and applications)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the area of the region bounded by the line \\(2y+x=8\\), the \\(x\\)-axis and the lines \\(x=2\\) and \\(x=4\\).", answer: "\\(A=\\int_{2}^{4}\\dfrac{8-x}{2}dx=5\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area of the region bounded by the graphs of \\(f(x)=(x-1)^{2}\\) and \\(g(x)=3-x\\).", answer: "They meet at \\(x=-1\\) and \\(x=2\\); \\(A=\\int_{-1}^{2}\\left[(3-x)-(x-1)^{2}\\right]dx=\\dfrac92\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the volume of the solid obtained by rotating the graph of \\(y=x^{2}\\) between \\(x=1\\) and \\(x=2\\) about the \\(x\\)-axis.", answer: "\\(V=\\pi\\int_{1}^{2}x^{4}dx=\\dfrac{31\\pi}{5}\\) cubic units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the volume of the solid generated when the region enclosed by \\(y=\\sqrt x\\), \\(y=2\\) and the \\(y\\)-axis is revolved about the \\(y\\)-axis.", answer: "With \\(x=y^{2}\\): \\(V=\\pi\\int_{0}^{2}y^{4}dy=\\dfrac{32\\pi}{5}\\) cubic units." } ] },
            { stem: null, parts: [ { label: null, text: "The demand and supply of a commodity are \\(D(x)=1000-20x\\) and \\(S(x)=x^{2}+10x\\) (\\(x\\) = quantity). Find the consumer and producer surplus.", answer: "Equilibrium: \\(x^{2}+30x-1000=0\\Rightarrow x=20\\), price \\(=600\\). Consumer surplus \\(=\\int_{0}^{20}(1000-20x-600)dx=4000\\). Producer surplus \\(=\\int_{0}^{20}(600-x^{2}-10x)dx=\\dfrac{22000}{3}\\approx7333.33\\)." } ] },
            { stem: null, parts: [ { label: null, text: "The position of an object on a coordinate line is \\(S(t)=t^{2}-6t\\) (cm, seconds). Find the distance travelled in \\([3,9]\\).", answer: "\\(v=2t-6\\ge0\\) on \\([3,9]\\), so distance \\(=\\int_{3}^{9}|2t-6|\\,dt=S(9)-S(3)=27-(-9)=36\\) cm." } ] },
            { stem: null, parts: [ { label: null, text: "A force of \\(130\\) N is required to stretch a spring \\(50\\) cm. Find the work done in stretching it \\(20\\) cm beyond its natural length.", answer: "\\(k=\\dfrac{130}{0.5}=260\\) N/m; \\(W=\\int_{0}^{0.2}260x\\,dx=5.2\\) J." } ] }
          ]
        },
        {
          exercise: "Ex 3.8 (Q1–Q10 — area and volume)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the area of the region bounded by \\(y=x^{2}\\), the \\(x\\)-axis and the lines \\(x=1\\), \\(x=3\\).", answer: "\\(\\int_{1}^{3}x^{2}dx=\\dfrac{26}{3}\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area under \\(y=\\sqrt{6x+4}\\) (above the \\(x\\)-axis) from \\(x=0\\) to \\(x=2\\).", answer: "\\(\\int_{0}^{2}\\sqrt{6x+4}\\,dx=\\dfrac{56}{9}\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area of the region bounded by \\(y^{2}=4x\\) and the line \\(x=3\\).", answer: "\\(A=2\\int_{0}^{3}2\\sqrt x\\,dx=8\\sqrt3\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "For \\(y=\\dfrac12(0.2x^{2}+x)\\), find the area of the region from \\(x=1\\) to \\(x=4\\).", answer: "\\(\\int_{1}^{4}\\dfrac12(0.2x^{2}+x)dx=\\dfrac{117}{20}=5.85\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "For \\(y=\\dfrac12(0.2x^{2}+x)\\), find the area of the region from \\(x=-4\\) to \\(x=-1\\).", answer: "The curve lies below the \\(x\\)-axis here: \\(\\int_{-4}^{-1}=-\\dfrac{33}{20}\\), so the area is \\(\\dfrac{33}{20}=1.65\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area bounded by \\(y=1+\\cos x\\) on \\([0,3\\pi]\\).", answer: "\\(\\int_{0}^{3\\pi}(1+\\cos x)dx=3\\pi\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area bounded by \\(y=-1+\\sin x\\) on \\(\\left[-\\dfrac{3\\pi}{2},\\dfrac{3\\pi}{2}\\right]\\).", answer: "The graph is below the \\(x\\)-axis: area \\(=\\int_{-3\\pi/2}^{3\\pi/2}(1-\\sin x)\\,dx=3\\pi\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area of the region bounded by \\(y=x\\), \\(y=-2x\\) and \\(x=3\\).", answer: "\\(\\int_{0}^{3}[x-(-2x)]dx=\\dfrac{27}{2}\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area of the region bounded above by \\(y=x+6\\), below by \\(y=x^{2}\\) and on the sides by \\(x=0\\) and \\(x=2\\).", answer: "\\(\\int_{0}^{2}(x+6-x^{2})dx=\\dfrac{34}{3}\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area bounded by \\(y=x^{3}+1\\), the \\(x\\)-axis and the line \\(x=1\\).", answer: "The curve meets the \\(x\\)-axis at \\(x=-1\\): \\(\\int_{-1}^{1}(x^{3}+1)dx=2\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area of the region enclosed by \\(x=y^{2}\\) and \\(y=x-2\\), integrating with respect to \\(y\\).", answer: "Intersections \\(y=-1,\\,2\\): \\(\\int_{-1}^{2}(y+2-y^{2})dy=\\dfrac92\\) square units." } ] },
            { stem: null, parts: [ { label: null, text: "Find the volume of the solid obtained by revolving the region under \\(y=\\sqrt x\\) over \\([1,4]\\) about the \\(x\\)-axis.", answer: "\\(V=\\pi\\int_{1}^{4}x\\,dx=\\dfrac{15\\pi}{2}\\) cubic units." } ] }
          ]
        },
        {
          exercise: "Ex 3.8 (Q12 — distance travelled)",
          questions: [
            { stem: null, parts: [ { label: null, text: "An object moves with \\(S(t)=t^{2}-2t\\) (cm). Find the distance travelled in \\([0,5]\\).", answer: "\\(v=2t-2\\) changes sign at \\(t=1\\): \\(|S(1)-S(0)|+|S(5)-S(1)|=1+16=17\\) cm." } ] },
            { stem: null, parts: [ { label: null, text: "An object moves with \\(S(t)=t^{3}-3t^{2}-9t\\) (cm). Find the distance travelled in \\([0,4]\\).", answer: "\\(v=3(t-3)(t+1)\\) changes sign at \\(t=3\\): \\(|S(3)-S(0)|+|S(4)-S(3)|=27+7=34\\) cm." } ] },
            { stem: null, parts: [ { label: null, text: "An object moves with \\(S(t)=6\\sin\\pi t\\) (cm). Find the distance travelled in \\([1,3]\\).", answer: "\\(v=0\\) at \\(t=\\tfrac32,\\tfrac52\\): \\(6+12+6=24\\) cm." } ] }
          ]
        },
        {
          exercise: "Ex 3.8 (Q13–Q14 — work done by a spring)",
          questions: [
            { stem: null, parts: [ { label: null, text: "It takes a force of \\(50\\) N to stretch a spring \\(0.5\\) m. Find the work done in stretching it \\(0.6\\) m beyond its natural length.", answer: "\\(k=\\dfrac{50}{0.5}=100\\) N/m; \\(W=\\int_{0}^{0.6}100x\\,dx=18\\) J." } ] },
            { stem: null, parts: [ { label: null, text: "A force \\(F=\\dfrac32x\\) lb is needed to stretch a \\(10\\) inch spring an additional \\(x\\) inches. Find the work done in stretching it \\(16\\) inches.", answer: "\\(W=\\int_{0}^{16}\\dfrac32x\\,dx=192\\) inch-lb (\\(=16\\) ft-lb)." } ] }
          ]
        },
        {
          exercise: "Ex 3.8 (Q15 — consumer and producer surplus)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the consumer and producer surpluses when \\(S(x)=24\\) and \\(D(x)=100-2x\\).", answer: "Equilibrium: \\(x=38\\), price \\(=24\\). CS \\(=\\int_{0}^{38}(100-2x-24)dx=1444\\); PS \\(=0\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Find the consumer and producer surpluses when \\(S(x)=x^{2}-4\\) and \\(D(x)=-x+8\\).", answer: "Equilibrium: \\(x=3\\), price \\(=5\\). CS \\(=\\int_{0}^{3}(3-x)dx=\\dfrac92\\); PS \\(=\\int_{0}^{3}(9-x^{2})dx=18\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Find the consumer and producer surpluses when \\(S(x)=2x^{2}+3x\\) and \\(D(x)=36-x^{2}\\).", answer: "Equilibrium: \\(x=3\\), price \\(=27\\). CS \\(=\\int_{0}^{3}(9-x^{2})dx=18\\); PS \\(=\\int_{0}^{3}(27-2x^{2}-3x)dx=\\dfrac{99}{2}=49.5\\)." } ] }
          ]
        },
        {
          exercise: "Ex 3.8 (Q16–Q18 — revenue and area)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the total revenue obtained in \\(4\\) years if the rate of increase in dollars per year is \\(f(t)=200(t-5)^{2}\\).", answer: "\\(\\int_{0}^{4}200(t-5)^{2}dt=\\dfrac{24800}{3}\\approx8266.67\\) dollars." } ] },
            { stem: null, parts: [ { label: null, text: "Find the total revenue obtained in \\(8\\) years if the rate of increase in dollars per year is \\(f(t)=\\dfrac{600}{\\sqrt{1+3t}}\\).", answer: "\\(\\int_{0}^{8}\\dfrac{600}{\\sqrt{1+3t}}dt=400\\left[\\sqrt{1+3t}\\right]_{0}^{8}=400(5-1)=1600\\) dollars." } ] },
            { stem: null, parts: [ { label: null, text: "Find the area bounded by \\(f(x)=x^{3}-2x^{2}+1\\) and the \\(x\\)-axis in the first quadrant, bounded by the line \\(x=1.5\\).", answer: "\\(f\\ge0\\) on \\([0,1]\\) and \\(f\\le0\\) on \\([1,1.5]\\): \\(A=\\int_{0}^{1}f\\,dx+\\left|\\int_{1}^{1.5}f\\,dx\\right|=\\dfrac{7}{12}+\\dfrac{13}{192}=\\dfrac{125}{192}\\approx0.651\\) square units." } ] }
          ]
        },
        {
          exercise: "Review Exercise Unit 3 (Q2 — iv to vii)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\dfrac{x^{2}-29x+5}{(x-4)^{2}(x^{2}+3)}\\,dx\\).", answer: "\\(\\ln|x-4|+\\dfrac{5}{x-4}-\\dfrac12\\ln(x^{2}+3)+\\dfrac{2}{\\sqrt3}\\tan^{-1}\\dfrac{x}{\\sqrt3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int \\sin^{-1}x\\,dx\\).", answer: "\\(x \\sin^{-1}{\\left(x \\right)} + \\sqrt{1 - x^{2}}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int 2x\\sin3x\\,dx\\).", answer: "\\(- \\frac{2 x \\cos{\\left(3 x \\right)}}{3} + \\frac{2 \\sin{\\left(3 x \\right)}}{9}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate \\(\\int x^{2}e^{x}\\,dx\\).", answer: "\\(\\left(x^{2} - 2 x + 2\\right) e^{x}+c\\)" } ] }
          ]
        },
        {
          exercise: "Review Exercise Unit 3 (Q3–Q5)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Use the substitution \\(u=2x+1\\) to evaluate \\(\\int_{0}^{1}\\dfrac{x^{2}}{\\sqrt{2x+1}}dx\\).", answer: "With \\(x=\\dfrac{u-1}{2}\\), \\(dx=\\dfrac{du}{2}\\): \\(\\dfrac18\\int_{1}^{3}\\left(u^{3/2}-2u^{1/2}+u^{-1/2}\\right)du=\\dfrac18\\left[\\dfrac25u^{5/2}-\\dfrac43u^{3/2}+2u^{1/2}\\right]_{1}^{3}=\\dfrac18\\left(\\dfrac{8\\sqrt3}{5}-\\dfrac{16}{15}\\right)=\\dfrac{3\\sqrt3-2}{15}\\approx0.213\\)." } ] },
            { stem: null, parts: [ { label: null, text: "A model rocket is launched upward from ground level with initial speed \\(60\\) m/s (take \\(g=9.8\\ \\text{m/s}^2\\)). (a) How long does it take to reach its highest point? (b) How high does it go?", answer: "\\(v=60-9.8t\\). (a) \\(v=0\\Rightarrow t=\\dfrac{60}{9.8}\\approx6.12\\) s. (b) \\(h=60t-4.9t^{2}\\) at \\(t=6.12\\): \\(h\\approx183.7\\) m." } ] },
            { stem: null, parts: [ { label: null, text: "A parachute moves with velocity \\(V(t)=\\cos\\pi t\\) m/s along a coordinate line and has coordinate \\(S=4\\) m at \\(t=0\\). Find its position.", answer: "\\(S(t)=\\int\\cos\\pi t\\,dt=\\dfrac{\\sin\\pi t}{\\pi}+c\\); \\(S(0)=4\\Rightarrow c=4\\), so \\(S(t)=\\dfrac{\\sin\\pi t}{\\pi}+4\\) m." } ] }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Differential Equations",
      mcq: [],
      short: [
        {
          exercise: "Examples 1–2 (order, degree, linear / non-linear)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Determine the order and degree of \\(\\dfrac{dy}{dx}=-\\dfrac{x}{y}\\).", answer: "Order \\(1\\), degree \\(1\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Determine the order and degree of \\(\\dfrac{d^{2}y}{dx^{2}}-3\\dfrac{dy}{dx}+x=0\\).", answer: "Order \\(2\\), degree \\(1\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Determine the order and degree of \\(\\left(\\dfrac{d^{3}y}{dx^{3}}\\right)^{2}+x\\dfrac{d^{2}y}{dx^{2}}-\\dfrac{dy}{dx}+y=1\\).", answer: "Order \\(3\\), degree \\(2\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Identify whether \\(\\dfrac{dy}{dx}=a\\) is linear or non-linear.", answer: "Linear." } ] },
            { stem: null, parts: [ { label: null, text: "Identify whether \\(\\dfrac{d^{2}y}{dx^{2}}-3\\dfrac{dy}{dx}+y=1\\) is linear or non-linear.", answer: "Linear." } ] },
            { stem: null, parts: [ { label: null, text: "Identify whether \\(\\dfrac{d^{3}y}{dx^{3}}+y\\dfrac{d^{2}y}{dx^{2}}-2=0\\) is linear or non-linear.", answer: "Non-linear (the product \\(y\\,\\dfrac{d^{2}y}{dx^{2}}\\))." } ] },
            { stem: null, parts: [ { label: null, text: "Identify whether \\(\\dfrac{dy}{dx}=\\dfrac{x}{y}\\) is linear or non-linear.", answer: "Non-linear (it is \\(y\\,\\dfrac{dy}{dx}=x\\), a product of \\(y\\) and \\(\\dfrac{dy}{dx}\\))." } ] },
            { stem: null, parts: [ { label: null, text: "Identify whether \\(\\dfrac{d^{2}y}{dx^{2}}+12xy=0\\) is linear or non-linear.", answer: "Linear." } ] },
            { stem: null, parts: [ { label: null, text: "Identify whether \\(\\left(\\dfrac{d^{3}y}{dx^{3}}\\right)^{2}+x\\dfrac{d^{2}y}{dx^{2}}-\\dfrac{dy}{dx}+2x=5\\) is linear or non-linear.", answer: "Non-linear (\\(\\dfrac{d^{3}y}{dx^{3}}\\) is squared)." } ] }
          ]
        },
        {
          exercise: "Ex 4.1 (Q1 — order and degree)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the order and degree of \\((1-x)y''-4xy'+5y=\\cos x\\).", answer: "Order \\(2\\), degree \\(1\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Find the order and degree of \\(yy'+2y=1+x^{2}\\).", answer: "Order \\(1\\), degree \\(1\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Find the order and degree of \\((y'')^{3}-3y'+2y=x\\).", answer: "Order \\(2\\), degree \\(3\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Find the order and degree of \\((y')^{2}-yy''+2=0\\).", answer: "Order \\(2\\), degree \\(1\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Find the order and degree of \\(y\\dfrac{d^{2}y}{dx^{2}}+\\left(\\dfrac{dy}{dx}\\right)^{3}=0\\).", answer: "Order \\(2\\), degree \\(1\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Find the order and degree of \\(\\dfrac{dy}{dx}=\\sqrt{1+\\left(\\dfrac{d^{2}y}{dx^{2}}\\right)^{2}}\\).", answer: "Squaring: \\(\\left(\\dfrac{dy}{dx}\\right)^{2}=1+\\left(\\dfrac{d^{2}y}{dx^{2}}\\right)^{2}\\). Order \\(2\\), degree \\(2\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Find the order and degree of \\(x^{3}\\dfrac{d^{4}y}{dx^{4}}-x^{2}\\dfrac{d^{2}y}{dx^{2}}+4\\left(\\dfrac{dy}{dx}\\right)^{5}+4xy-3y=0\\).", answer: "Order \\(4\\), degree \\(1\\)." } ] }
          ]
        },
        {
          exercise: "Ex 4.1 (Q2 — eliminate the arbitrary constants)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Eliminate the arbitrary constants from \\(y=ae^{x}+be^{-x}+c\\).", answer: "\\(y'=ae^{x}-be^{-x}\\), \\(y''=ae^{x}+be^{-x}\\), \\(y'''=ae^{x}-be^{-x}=y'\\). Hence \\(y'''-y'=0\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Eliminate the arbitrary constant from \\(y=\\cos(x+b)\\).", answer: "\\(y'=-\\sin(x+b)\\), so \\(\\left(\\dfrac{dy}{dx}\\right)^{2}+y^{2}=1\\) (equivalently \\(y''+y=0\\))." } ] },
            { stem: null, parts: [ { label: null, text: "Eliminate the arbitrary constants from \\(y=mx+c\\).", answer: "\\(y'=m\\), \\(y''=0\\). Hence \\(\\dfrac{d^{2}y}{dx^{2}}=0\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Eliminate the arbitrary constants from \\(y=bx^{2}+2ax\\).", answer: "\\(y'=2bx+2a\\), \\(y''=2b\\). Eliminating \\(a,b\\): \\(x^{2}y''-2xy'+2y=0\\)." } ] }
          ]
        },
        {
          exercise: "Ex 4.1 (Q3 — verify the solution)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=e^{-x/2}\\) is a solution of \\(2y'+y=0\\).", answer: "\\(y'=-\\dfrac12e^{-x/2}\\), so \\(2y'+y=-e^{-x/2}+e^{-x/2}=0\\). Verified." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=e^{3x}+10e^{2x}\\) is a solution of \\(\\dfrac{dy}{dx}-2y=e^{3x}\\).", answer: "\\(y'=3e^{3x}+20e^{2x}\\); \\(y'-2y=3e^{3x}+20e^{2x}-2e^{3x}-20e^{2x}=e^{3x}\\). Verified." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=5\\tan5x\\) is a solution of \\(y'=25+y^{2}\\).", answer: "\\(y'=25\\sec^{2}5x=25(1+\\tan^{2}5x)=25+y^{2}\\). Verified." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=\\dfrac12\\sin x-\\dfrac12\\cos x+10e^{-x}\\) is a solution of \\(y'+y=\\sin x\\).", answer: "\\(y'=\\dfrac12\\cos x+\\dfrac12\\sin x-10e^{-x}\\); \\(y'+y=\\sin x\\). Verified." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=-\\dfrac{1}{x^{2}}+6\\) is a solution of \\(x^{3}\\,dy-2\\,dx=0\\).", answer: "\\(\\dfrac{dy}{dx}=\\dfrac{2}{x^{3}}\\), so \\(x^{3}dy=2\\,dx\\). Verified." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=x\\ln x,\\ x>0\\), is a solution of \\(y'-\\dfrac1xy=1\\).", answer: "\\(y'=\\ln x+1\\); \\(y'-\\dfrac{y}{x}=\\ln x+1-\\ln x=1\\). Verified." } ] }
          ]
        },
        {
          exercise: "Ex 4.1 (Q4–Q6)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the order and degree, if defined, of \\(dy-\\sin x\\,dx=0\\).", answer: "Written as \\(\\dfrac{dy}{dx}=\\sin x\\): order \\(1\\), degree \\(1\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=a\\cos x+b\\sin x\\), \\(a,b\\in\\mathbb{R}\\), is a solution of \\(\\dfrac{d^{2}y}{dx^{2}}+y=0\\).", answer: "\\(y'=-a\\sin x+b\\cos x\\), \\(y''=-a\\cos x-b\\sin x=-y\\). Hence \\(y''+y=0\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Show that \\(y_1=x^{2}\\) and \\(y_2=x^{3}\\) are both solutions of \\(x^{2}y''-4xy'+6y=0\\). (i) Are \\(c_1y_1\\) and \\(c_2y_2\\) also solutions? (ii) Is \\(y_1+y_2\\) a solution?", answer: "\\(y_1\\): \\(2x^{2}-8x^{2}+6x^{2}=0\\); \\(y_2\\): \\(6x^{3}-12x^{3}+6x^{3}=0\\). (i) Yes, any constant multiple is also a solution. (ii) Yes, \\(y_1+y_2\\) is also a solution (the equation is linear and homogeneous)." } ] }
          ]
        },
        {
          exercise: "Examples 8–12 (variable separable)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{x^{2}}{y}\\).", answer: "\\(3y^{2}=2x^{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\((1+x)\\,dy-y\\,dx=0\\).", answer: "\\(y=c(1+x)\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{1}{x\\tan y}\\).", answer: "\\(x\\cos y=c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve the initial value problem \\(\\dfrac{dy}{dx}=-\\dfrac{x}{y},\\ y(1)=3\\).", answer: "\\(x^{2}+y^{2}=c\\); \\(y(1)=3\\Rightarrow c=10\\), so \\(x^{2}+y^{2}=10\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=2x\\) such that \\(y(2)=4\\).", answer: "\\(y=x^{2}+c\\); \\(y(2)=4\\Rightarrow c=0\\), so \\(y=x^{2}\\)." } ] }
          ]
        },
        {
          exercise: "Ex 4.2 (Q1–Q8 — separate the variables)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=-\\dfrac{1}{e^{3x}}\\).", answer: "\\(y=\\dfrac{e^{-3x}}{3}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(x\\dfrac{dy}{dx}=4y\\).", answer: "\\(y=cx^{4}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{y^{3}}{x^{2}}\\).", answer: "\\(\\dfrac{1}{2y^{2}}=\\dfrac1x+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=e^{2x+3y}\\).", answer: "\\(3e^{2x}+2e^{-3y}=c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{x^{2}y^{2}}{1+x}\\).", answer: "\\(-\\dfrac1y=\\dfrac{x^{2}}{2}-x+\\ln|1+x|+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(2y(x+1)\\,dy=x\\,dx\\).", answer: "\\(y^{2}=x-\\ln|x+1|+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}+y^{2}\\sin x=0\\).", answer: "\\(\\dfrac1y=c-\\cos x\\), i.e. \\(y=\\dfrac{1}{c-\\cos x}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\((\\sin x+\\cos x)\\,dx=\\cot y\\cos x\\,dy\\).", answer: "\\(\\cot y\\,dy=(\\tan x+1)\\,dx\\Rightarrow\\ln|\\sin y|=-\\ln|\\cos x|+x+c\\), i.e. \\(\\sin y\\cos x=ce^{x}\\)." } ] }
          ]
        },
        {
          exercise: "Ex 4.2 (Q9–Q15 — initial value problems)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\cos x,\\ y(0)=1\\).", answer: "\\(y=\\sin x+1\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(2\\dfrac{dy}{dx}=4xe^{-x},\\ y(0)=2\\).", answer: "\\(y=-2(x+1)e^{-x}+c\\); \\(y(0)=2\\Rightarrow c=4\\), so \\(y=4-2(x+1)e^{-x}\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}+\\left(\\dfrac{1+x}{x}\\right)y=0,\\ y(1)=1\\).", answer: "\\(y=\\dfrac{ce^{-x}}{x}\\); \\(y(1)=1\\Rightarrow c=e\\), so \\(y=\\dfrac{e^{1-x}}{x}\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}+y\\tan2x=0,\\ y(0)=2\\).", answer: "\\(y^{2}=c\\cos2x\\); \\(y(0)=2\\Rightarrow c=4\\), so \\(y=2\\sqrt{\\cos2x}\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=y^{2}+4,\\ y(0)=-2\\).", answer: "\\(\\dfrac12\\tan^{-1}\\dfrac y2=x+c\\); \\(y(0)=-2\\Rightarrow c=-\\dfrac{\\pi}{8}\\), so \\(y=2\\tan\\left(2x-\\dfrac{\\pi}{4}\\right)\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\((1-x)\\,dy+y^{-1}dx=0,\\ y(0)=2\\).", answer: "\\(\\dfrac{y^{2}}{2}=\\ln|1-x|+c\\); \\(y(0)=2\\Rightarrow c=2\\), so \\(y^{2}=2\\ln|1-x|+4\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(2(y-1)\\,dy=(3x^{2}+4x+2)\\,dx,\\ y(0)=-1\\).", answer: "\\((y-1)^{2}=x^{3}+2x^{2}+2x+c\\); \\(y(0)=-1\\Rightarrow c=4\\), so \\((y-1)^{2}=x^{3}+2x^{2}+2x+4\\)." } ] }
          ]
        },
        {
          exercise: "Example 13 and Ex 4.3 (Q1–Q3 — homogeneous functions)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Is \\(f(x,y)=\\sqrt{x^{3}+y^{3}}\\) homogeneous? If so, find its degree.", answer: "\\(f(tx,ty)=t^{3/2}f(x,y)\\): homogeneous of degree \\(\\dfrac32\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Is \\(f(x,y)=x^{2}+y^{2}+2\\) homogeneous? If so, find its degree.", answer: "Not homogeneous (the constant term has a different degree)." } ] },
            { stem: null, parts: [ { label: null, text: "Is \\(f(x,y)=x^{2}y+4\\) homogeneous? If so, find its degree.", answer: "Not homogeneous." } ] },
            { stem: null, parts: [ { label: null, text: "Is \\(f(x,y)=6xy^{3}-x^{2}y^{2}\\) homogeneous? If so, find its degree.", answer: "Homogeneous of degree \\(4\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Is \\(f(x,y)=x^{2}-y\\) homogeneous? If so, find its degree.", answer: "Not homogeneous (terms of degree \\(2\\) and \\(1\\))." } ] },
            { stem: null, parts: [ { label: null, text: "Is \\(f(x,y)=\\dfrac{2y^{3}}{x^{2}y}-7\\) homogeneous? If so, find its degree.", answer: "\\(f(tx,ty)=f(x,y)\\): homogeneous of degree \\(0\\)." } ] }
          ]
        },
        {
          exercise: "Review Exercise Unit 4 (Q2–Q4)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the order and degree of \\(x\\left(\\dfrac{dy}{dx}\\right)^{2}+2\\sqrt{x}\\,y\\dfrac{dy}{dx}+y=0\\).", answer: "Order \\(1\\), degree \\(2\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Find the order and degree of \\(\\dfrac{dy}{dx}=\\sqrt{1+\\left(\\dfrac{d^{2}y}{dx^{2}}\\right)^{4}}\\).", answer: "Squaring gives \\(\\left(\\dfrac{dy}{dx}\\right)^{2}=1+\\left(\\dfrac{d^{2}y}{dx^{2}}\\right)^{4}\\). Order \\(2\\), degree \\(4\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=e^{-x/2}\\) is a solution of \\(2\\dfrac{dy}{dx}+y=0\\).", answer: "\\(2\\left(-\\dfrac12e^{-x/2}\\right)+e^{-x/2}=0\\). Verified." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=\\dfrac65-\\dfrac65e^{-20x}\\) is a solution of \\(\\dfrac{dy}{dx}+20y=24\\).", answer: "\\(y'=24e^{-20x}\\); \\(y'+20y=24e^{-20x}+24-24e^{-20x}=24\\). Verified." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=5\\tan5x\\) is a solution of \\(\\dfrac{dy}{dx}=25+y^{2}\\).", answer: "\\(y'=25\\sec^{2}5x=25+25\\tan^{2}5x=25+y^{2}\\). Verified." } ] },
            { stem: null, parts: [ { label: null, text: "Verify that \\(y=\\dfrac{1}{x^{2}}\\) is a solution of \\(x^{2}\\,dy+2xy\\,dx=0\\).", answer: "\\(dy=-\\dfrac{2}{x^{3}}dx\\); \\(x^{2}dy+2xy\\,dx=-\\dfrac2x\\,dx+\\dfrac2x\\,dx=0\\). Verified." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=x\\ln x\\).", answer: "\\(y=\\dfrac{x^{2}}{2}\\ln x-\\dfrac{x^{2}}{4}+c\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\((y+1)\\dfrac{dy}{dx}+x\\sin x=0\\).", answer: "\\((y+1)\\,dy=-x\\sin x\\,dx\\Rightarrow(y+1)^{2}=2x\\cos x-2\\sin x+c\\)." } ] }
          ]
        }
      ],
      long: [
        {
          exercise: "Examples 14–15 (homogeneous differential equations)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{x^{2}+y^{2}}{2xy}\\).", answer: "Put \\(y=vx\\): \\(x\\dfrac{dv}{dx}=\\dfrac{1-v^{2}}{2v}\\Rightarrow\\dfrac{2v\\,dv}{1-v^{2}}=\\dfrac{dx}{x}\\Rightarrow x(1-v^{2})=c\\). Hence \\(x^{2}-y^{2}=cx\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve the initial value problem \\(x\\dfrac{dy}{dx}=y+xe^{y/x},\\ y(1)=1\\).", answer: "Put \\(y=vx\\): \\(e^{-v}dv=\\dfrac{dx}{x}\\Rightarrow e^{-y/x}+\\ln x=c\\). \\(y(1)=1\\Rightarrow c=e^{-1}\\), so \\(e^{-y/x}=e^{-1}-\\ln x\\), i.e. \\(y=-x\\ln\\left(e^{-1}-\\ln x\\right)\\)." } ] }
          ]
        },
        {
          exercise: "Ex 4.3 (Q5–Q11 — homogeneous differential equations)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Solve \\(y\\,dx-(y-x)\\,dy=0\\).", answer: "\\(\\dfrac{dy}{dx}=\\dfrac{y}{y-x}\\). Writing \\(x=wy\\) gives \\(y\\,\\dfrac{dw}{dy}=1-2w\\), and so \\(y^{2}-2xy=c\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{y-x}{x+y}\\).", answer: "Put \\(y=vx\\): \\(\\dfrac{1+v}{1+v^{2}}dv=-\\dfrac{dx}{x}\\Rightarrow\\tan^{-1}v+\\dfrac12\\ln(1+v^{2})+\\ln|x|=c\\). Hence \\(\\tan^{-1}\\dfrac yx+\\dfrac12\\ln(x^{2}+y^{2})=c\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{y^{2}+yx}{x^{2}}\\).", answer: "Put \\(y=vx\\): \\(x\\dfrac{dv}{dx}=v^{2}\\Rightarrow-\\dfrac1v=\\ln|x|+c\\). Hence \\(\\dfrac xy+\\ln|x|=c\\), i.e. \\(y=\\dfrac{-x}{\\ln|x|+c}\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{y}{x+\\sqrt{xy}}\\).", answer: "Put \\(y=vx\\): \\(\\dfrac{1+\\sqrt v}{v^{3/2}}dv=-\\dfrac{dx}{x}\\Rightarrow-2v^{-1/2}+\\ln v=-\\ln x+c\\). Hence \\(\\ln|y|-2\\sqrt{\\dfrac xy}=c\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{3x^{3}+y^{3}}{xy^{2}}\\).", answer: "Put \\(y=vx\\): \\(v^{2}dv=\\dfrac{3\\,dx}{x}\\Rightarrow\\dfrac{v^{3}}{3}=3\\ln|x|+c\\). Hence \\(y^{3}=9x^{3}\\ln|x|+cx^{3}\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{x+3y}{3x+y}\\).", answer: "Put \\(y=vx\\): \\(\\dfrac{3+v}{1-v^{2}}dv=\\dfrac{dx}{x}\\Rightarrow-2\\ln|1-v|+\\ln|1+v|=\\ln|x|+c\\). Hence \\(x+y=c(x-y)^{2}\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\left[y+x\\cot\\dfrac yx\\right]dx-x\\,dy=0\\).", answer: "Put \\(y=vx\\): \\(\\tan v\\,dv=\\dfrac{dx}{x}\\Rightarrow-\\ln|\\cos v|=\\ln|x|+c\\). Hence \\(x\\cos\\dfrac yx=c\\)." } ] }
          ]
        },
        {
          exercise: "Ex 4.3 (Q12–Q15 — homogeneous initial value problems)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Solve \\(xy^{2}\\dfrac{dy}{dx}=y^{3}-x^{3},\\ y(1)=2\\).", answer: "Put \\(y=vx\\): \\(v^{2}dv=-\\dfrac{dx}{x}\\Rightarrow y^{3}=-3x^{3}\\ln|x|+cx^{3}\\). \\(y(1)=2\\Rightarrow c=8\\), so \\(y^{3}=x^{3}(8-3\\ln|x|)\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\((x^{2}+2y^{2})\\,dx=xy\\,dy,\\ y(1)=1\\).", answer: "Put \\(y=vx\\): \\(\\dfrac{v\\,dv}{1+v^{2}}=\\dfrac{dx}{x}\\Rightarrow x^{2}+y^{2}=cx^{4}\\). \\(y(1)=1\\Rightarrow c=2\\), so \\(x^{2}+y^{2}=2x^{4}\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(2x^{2}\\dfrac{dy}{dx}=3xy+y^{2},\\ y(1)=-2\\).", answer: "Put \\(y=vx\\): \\(\\dfrac{2\\,dv}{v(1+v)}=\\dfrac{dx}{x}\\Rightarrow\\left(\\dfrac{y}{x+y}\\right)^{2}=cx\\). \\(y(1)=-2\\Rightarrow c=4\\), so \\(y^{2}=4x(x+y)^{2}\\)." } ] },
            { stem: null, parts: [ { label: null, text: "Solve \\(\\left(x+ye^{y/x}\\right)dx-xe^{y/x}dy=0,\\ y(1)=0\\).", answer: "Put \\(y=vx\\): \\(e^{v}dv=\\dfrac{dx}{x}\\Rightarrow e^{y/x}=\\ln|x|+c\\). \\(y(1)=0\\Rightarrow c=1\\), so \\(e^{y/x}=\\ln|x|+1\\)." } ] }
          ]
        },
        {
          exercise: "Example 17 and Ex 4.4 (applications of differential equations)",
          questions: [
            { stem: null, parts: [ { label: null, text: "According to Newton's law of cooling, a body at \\(90^\\circ\\)C cools in air at \\(30^\\circ\\)C. After \\(5\\) min its temperature is \\(70^\\circ\\)C. Find the temperature of the body as a function of time.", answer: "\\(\\dfrac{dT}{dt}=k(T-30)\\Rightarrow T=30+Ce^{kt}\\); \\(T(0)=90\\Rightarrow C=60\\). \\(T(5)=70\\Rightarrow e^{5k}=\\dfrac23\\). So \\(T(t)=30+60\\left(\\dfrac23\\right)^{t/5}\\)." } ] },
            { stem: null, parts: [ { label: null, text: "The population of a city grows at a rate proportional to the population (\\(\\dfrac{dP}{dt}\\propto P\\)). It is \\(20\\) million now and expected to be \\(25\\) million after \\(4\\) years. What will it be after \\(12\\) years?", answer: "\\(P=20e^{kt}\\); \\(e^{4k}=\\dfrac54\\). \\(P(12)=20\\left(\\dfrac54\\right)^{3}=\\dfrac{625}{16}=39.0625\\) million." } ] },
            { stem: null, parts: [ { label: null, text: "A pizza at \\(150^\\circ\\)C is removed from an oven. After \\(4\\) minutes its temperature is \\(90^\\circ\\)C. How long will it take to cool to \\(40^\\circ\\)C if the room temperature is \\(20^\\circ\\)C?", answer: "\\(T=20+130e^{kt}\\); \\(T(4)=90\\Rightarrow e^{4k}=\\dfrac{7}{13}\\). \\(T=40\\Rightarrow e^{kt}=\\dfrac{2}{13}\\Rightarrow t=\\dfrac{4\\ln(2/13)}{\\ln(7/13)}\\approx12.1\\) minutes." } ] },
            { stem: null, parts: [ { label: null, text: "In a culture the rate of growth of bacteria is proportional to the population present. If the population becomes four times in two days, what will it be after ten days if the initial population was \\(20\\)?", answer: "\\(P=20e^{kt}\\); \\(e^{2k}=4\\Rightarrow e^{k}=2\\). \\(P(10)=20\\cdot2^{10}=20480\\)." } ] },
            { stem: null, parts: [ { label: null, text: "A radioactive substance disintegrates at a rate proportional to the amount present. If the amount is \\(50\\) g and the half-life is \\(1000\\) years, find the amount after \\(800\\) years.", answer: "\\(A=50e^{kt}\\); \\(e^{1000k}=\\dfrac12\\). \\(A(800)=50\\left(\\dfrac12\\right)^{0.8}\\approx28.7\\) g." } ] },
            { stem: null, parts: [ { label: null, text: "A thermometer showing room temperature \\(80^\\circ\\)F is placed on a block of ice at \\(30^\\circ\\)F. After one minute it shows \\(40^\\circ\\)F. How long will it take to show \\(70^\\circ\\)F?", answer: "\\(T=30+50e^{kt}\\); \\(T(1)=40\\Rightarrow e^{k}=\\dfrac15\\). \\(T=70\\Rightarrow e^{kt}=\\dfrac45\\Rightarrow t=\\dfrac{\\ln(4/5)}{\\ln(1/5)}\\approx0.139\\) min \\(\\approx8.3\\) s." } ] },
            { stem: null, parts: [ { label: null, text: "A ball is thrown upward with velocity \\(40\\) m/s. Develop a differential equation for the motion and find the velocity after \\(1\\) second and the maximum height attained (neglect air resistance, \\(g=9.8\\ \\text{m/s}^2\\)).", answer: "\\(\\dfrac{dv}{dt}=-g\\Rightarrow v=40-9.8t\\). \\(v(1)=30.2\\) m/s. At the top \\(v=0\\), \\(t=\\dfrac{40}{9.8}\\); \\(h=\\int_{0}^{t}(40-9.8t)\\,dt=\\dfrac{40^{2}}{2(9.8)}\\approx81.6\\) m." } ] }
          ]
        },
        {
          exercise: "Review Exercise Unit 4 (Q4 — homogeneous initial value problem)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{x^{2}+y^{2}}{xy},\\ y(1)=2\\).", answer: "Put \\(y=vx\\): \\(v\\,dv=\\dfrac{dx}{x}\\Rightarrow\\dfrac{y^{2}}{x^{2}}=2\\ln|x|+c\\). \\(y(1)=2\\Rightarrow c=4\\), so \\(y^{2}=x^{2}(2\\ln|x|+4)\\)." } ] }
          ]
        }
      ]
    }
  ]
};
