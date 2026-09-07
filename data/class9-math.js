/*
  CLASS 9 — MATH
  --------------
  Real content, sourced from the National Book Foundation Grade 9 textbook,
  filtered to Summative-only SLOs per the FBISE Assessment Framework
  (Formative SLOs are excluded even if they appear in the book).

  DATA FORMAT
  -----------
  mcq:   [ [ questionText, [opt1,opt2,opt3,opt4], correctIndex ], ... ]
          (unchanged — flat list, no exercise grouping)

  short / long: grouped by exercise so the exercise tag is shown once,
  not per question:
    [
      { exercise: "Ex 1.2", questions: [ {text, answer}, {text, answer}, ... ] },
      { exercise: "Ex 1.3", questions: [ {text, answer}, ... ] }
    ]

  MATH FORMATTING: wrap inline math in \\( \\) so KaTeX renders it,
  e.g. "Simplify \\(2^{\\frac12}\\)". Plain text and math can mix freely.
*/
var CLASS9_MATH = {
  chapters: [
    {
      id: 1,
      name: "Real Numbers",
      mcq: [],
      short: [
        {
          exercise: "Ex 1.2",
          questions: [
            {
              text: "Using the laws of exponents, simplify: \\(\\left(\\dfrac{2187\\,a^{5}\\,b^{17}}{a^{12}\\,b^{3}}\\right)^{\\frac{1}{7}}\\)",
              answer: "\\(3ab^{2}\\)"
            },
            {
              text: "Simplify using laws of exponents: \\(7^{-\\frac13}\\left(7^{\\frac53}-7^{\\frac43}\\right)\\)",
              answer: "\\(7^{\\frac43}-7\\)"
            },
            {
              text: "By using the product and quotient rule for radicals, write as a single radical and simplify: \\(\\sqrt[3]{6}\\cdot\\sqrt[3]{6}\\)",
              answer: "\\(\\sqrt[3]{36}\\)"
            },
            {
              text: "Write as an equivalent radical expression and simplify: \\((216)^{\\frac{2}{3}}\\)",
              answer: "36"
            }
          ]
        },
        {
          exercise: "Ex 1.3",
          questions: [
            {
              text: "On his last bank statement, Qasim had a balance of Rs.\\,1,75,000 in his checking account. He wrote one cheque for Rs.\\,45,790 and another for Rs.\\,1,12,921. What is his current balance?",
              answer: "Rs.\\,16,289"
            },
            {
              text: "Momina walks at \\(3.5\\ \\text{km/h}\\). She took a 12-hour walk. How far did she walk?",
              answer: "42 km"
            },
            {
              text: "A group of friends made a 4-yard long rectangular banner. They paid Rs.\\,3.75 per yard for the fabric and Rs.\\,9 for the trim to go around the banner, a 10-yard perimeter. What was the width of the banner?",
              answer: "1 yard"
            }
          ]
        }
      ],
      long: []
    }
  ]
};
