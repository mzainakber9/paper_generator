/*
  CLASS 9 — MATH — CHAPTERS 1 TO 4
  ---------------------------------
  Real content, sourced from the National Book Foundation Grade 9 textbook,
  filtered to Summative-only SLOs per the FBISE Assessment Framework
  (Formative SLOs are excluded even if they appear in the book).

  Chapters in this file: 1 Real Numbers, 2 Logarithms (3 Sets and Relations,
  4 Factorization to be added).

  DATA FORMAT
  -----------
  mcq:   [ [ questionText, [opt1,opt2,opt3,opt4], correctIndex ], ... ]
          (flat list, no exercise grouping)

  short / long: grouped by exercise/section so the tag is shown once,
  not per question:
    [
      { exercise: "Ex 1.2", questions: [ {text, answer}, {text, answer}, ... ] },
      { exercise: "Ex 1.3", questions: [ {text, answer}, ... ] }
    ]
  A "Sec X.X" tag (instead of "Ex X.X") marks questions built from a
  concept section rather than a numbered textbook exercise.

  MATH FORMATTING: wrap inline math in \\( \\) so KaTeX renders it,
  e.g. "Simplify \\(2^{\\frac12}\\)". Plain text and math can mix freely.
*/
var CLASS9_MATH_CH1_4 = {
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
    },
    {
      id: 2,
      name: "Logarithms",
      mcq: [],
      short: [
        {
          exercise: "Ex 2.1",
          questions: [
            {
              text: "Write in scientific notation: \\(0.00053407\\)",
              answer: "\\(5.3407\\times10^{-4}\\)"
            },
            {
              text: "Write in scientific notation: \\(53400000\\)",
              answer: "\\(5.34\\times10^{7}\\)"
            },
            {
              text: "Write in standard notation: \\(6.53\\times10^{-6}\\)",
              answer: "0.00000653"
            },
            {
              text: "The speed of light is approximately \\(3\\times10^{5}\\ \\text{km/s}\\), and the distance between Earth and the Sun is approximately \\(1.5\\times10^{8}\\ \\text{km}\\). If the Sun suddenly burned out, how long would it take for people on Earth to know about it?",
              answer: "500 seconds (8 min 20 sec)"
            }
          ]
        },
        {
          exercise: "Sec 2.3",
          questions: [
            {
              text: "Differentiate between common logarithm and natural logarithm, stating the base and notation of each.",
              answer: "Common log has base 10, written \\(\\log x\\); natural log has base \\(e\\approx2.71828\\), written \\(\\ln x\\)."
            },
            {
              text: "Write \\(\\log_{e} 25\\) using natural logarithm notation.",
              answer: "\\(\\ln 25\\)"
            },
            {
              text: "State the value of \\(\\ln e\\) and \\(\\log 10\\).",
              answer: "\\(\\ln e = 1\\) and \\(\\log 10 = 1\\)"
            }
          ]
        },
        {
          exercise: "Ex 2.5",
          questions: [
            {
              text: "Use laws of logarithms to expand: \\(\\log 9t\\)",
              answer: "\\(\\log 9 + \\log t\\)"
            },
            {
              text: "Use laws of logarithms to combine into a single logarithm: \\(3\\log x - 5\\log y\\)",
              answer: "\\(\\log\\dfrac{x^{3}}{y^{5}}\\)"
            },
            {
              text: "Use laws of logarithms to evaluate: \\(\\log_{9}\\sqrt[3]{9}\\)",
              answer: "\\(\\dfrac13\\)"
            },
            {
              text: "If \\(\\log_b 2 = 0.3010\\), \\(\\log_b 3 = 0.4771\\) and \\(\\log_b 5 = 0.6990\\), evaluate \\(\\log_b\\dfrac{6}{5}\\) using laws of logarithms.",
              answer: "0.2791"
            }
          ]
        },
        {
          exercise: "Applications (Sec 2.5)",
          questions: [
            {
              text: "An earthquake that occurred in Pakistan in 2005 measured 7.6 on the Richter scale. In 1978, an earthquake in China measured 8.2. Using \\(M=\\log\\left(\\dfrac{I}{I_0}\\right)\\), find how many times stronger China's earthquake was than Pakistan's.",
              answer: "About 4 times stronger."
            },
            {
              text: "Find the number of digits in \\(5^{50}\\). (Given \\(\\log 5 = 0.6990\\))",
              answer: "35 digits"
            }
          ]
        },
        {
          exercise: "Ex 2.6",
          questions: [
            {
              text: "Find the number of digits in \\(3^{30}\\). (Given \\(\\log 3 = 0.4771\\))",
              answer: "15 digits"
            },
            {
              text: "The Kansu, China earthquake of 1920 was measured about 8.5 on the Richter scale, and the Tokyo, Japan earthquake of 1923 was measured 7.8 on that scale. How many times stronger was the 1920 earthquake than the 1923 earthquake?",
              answer: "About 5 times stronger."
            }
          ]
        }
      ],
      long: []
    }
  ]
};
