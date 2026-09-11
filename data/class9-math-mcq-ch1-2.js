/*
  CLASS 9 — MATH — MCQs — CHAPTERS 1 & 2
  -----------------------------------------
  Merges (by id) with class9-math-ch1-4.js. Only mcq / mcqStimulus are
  populated here.

  mcq:          [ [ text, [opt1,opt2,opt3,opt4], correctIndex ], ... ]
  mcqStimulus:  [ { stimulus: "shared scenario text/table",
                     questions: [ [text,[opts],correctIndex], ... ] } ]

  Flat list (no exercise grouping) per instruction. Summative-only,
  matching the same SLO filtering already applied to short/long questions
  for these chapters.
*/
var CLASS9_MATH_MCQ_CH1_2 = {
  chapters: [
    {
      id: 1,
      name: "Real Numbers",
      mcq: [
        ["By using the product rule for radicals, \\(\\sqrt[3]{6}\\cdot\\sqrt[3]{6}\\) equals:", ["\\(\\sqrt[3]{12}\\)", "\\(\\sqrt[3]{36}\\)", "6", "36"], 1],
        ["\\((216)^{\\frac23}\\) equals:", ["6", "36", "216", "1296"], 1],
        ["\\(\\left(\\dfrac{1}{32}\\right)^{\\frac15}\\) equals:", ["\\(\\dfrac12\\)", "2", "\\(\\dfrac{1}{16}\\)", "5"], 0],
        ["\\(\\left(\\sqrt[3]{5}\\right)^{2}\\) is equivalent to:", ["\\(5^{\\frac23}\\)", "\\(5^{\\frac13}\\)", "\\(5^{\\frac32}\\)", "25"], 0],
        ["Simplify: \\(\\dfrac{16^{\\frac15}\\cdot16^{\\frac14}}{16^{-\\frac{3}{10}}}\\)", ["4", "8", "16", "2"], 1],
        ["\\(\\left(\\dfrac{2187\\,a^{5}b^{17}}{a^{12}b^{3}}\\right)^{\\frac17}\\) equals:", ["\\(3ab^{2}\\)", "\\(3a^{2}b\\)", "\\(3ab\\)", "\\(21ab^{2}\\)"], 0],
        ["On his bank statement, Qasim had Rs.\\,1,75,000. He wrote cheques of Rs.\\,45,790 and Rs.\\,1,12,921. His current balance is:", ["Rs.\\,16,289", "Rs.\\,3,33,711", "Rs.\\,28,110", "Rs.\\,62,131"], 0],
        ["A shoe factory has assets of Rs.\\,20,00,000, of which \\(\\dfrac35\\) is capital. The debt amount is:", ["Rs.\\,12,00,000", "Rs.\\,8,00,000", "Rs.\\,4,00,000", "Rs.\\,16,00,000"], 1],
        ["Momina walks at 3.5 km/h for 12 hours. The distance she covers is:", ["32 km", "15.5 km", "42 km", "4.2 km"], 2],
        ["\\(\\dfrac{\\sqrt[3]{5000}}{\\sqrt[3]{5}}\\) equals:", ["10", "100", "1000", "\\(\\sqrt[3]{1000}\\)"], 0],
        ["\\((1000)^{\\frac13}\\) equals:", ["10", "100", "3.33", "\\(\\dfrac{1000}{3}\\)"], 0],
        ["\\(\\left(\\dfrac{1}{39}\\right)^{-\\frac12}\\) equals:", ["\\(\\sqrt{39}\\)", "\\(\\dfrac{1}{\\sqrt{39}}\\)", "39", "\\(\\dfrac{1}{39}\\)"], 0]
      ],
      mcqStimulus: [
        {
          stimulus: "A company's warehouse sold three products this week:\nProduct | Units Sold | Price per unit (Rs.)\nX | 240 | 85\nY | 180 | 120\nZ | 95 | 200",
          questions: [
            ["Total revenue from product X is:", ["Rs.\\,19,000", "Rs.\\,20,400", "Rs.\\,21,600", "Rs.\\,18,500"], 1],
            ["Which product generated the highest revenue?", ["X", "Y", "Z", "All equal"], 1],
            ["The total revenue from all three products is:", ["Rs.\\,58,000", "Rs.\\,61,000", "Rs.\\,63,500", "Rs.\\,60,000"], 1],
            ["The average price per unit across the three products is:", ["Rs.\\,120", "Rs.\\,135", "Rs.\\,140", "Rs.\\,128"], 1]
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Logarithms",
      mcq: [
        ["\\(0.00053407\\) written in scientific notation is:", ["\\(5.3407\\times10^{-4}\\)", "\\(5.3407\\times10^{4}\\)", "\\(53.407\\times10^{-5}\\)", "\\(0.53407\\times10^{-3}\\)"], 0],
        ["\\(6.53\\times10^{-6}\\) written in standard notation is:", ["653,000", "0.00000653", "0.0000653", "6,530,000"], 1],
        ["The base of a natural logarithm is:", ["10", "\\(e\\approx2.71828\\)", "2", "1"], 1],
        ["\\(\\log 10\\) equals:", ["0", "1", "10", "undefined"], 1],
        ["\\(\\ln e\\) equals:", ["0", "1", "\\(e\\)", "undefined"], 1],
        ["\\(\\log 9t\\) expanded is:", ["\\(\\log9+\\log t\\)", "\\(\\log9-\\log t\\)", "\\(\\log9\\times\\log t\\)", "\\(9\\log t\\)"], 0],
        ["\\(3\\log x-5\\log y\\) combined into a single logarithm is:", ["\\(\\log\\dfrac{x^{3}}{y^{5}}\\)", "\\(\\log(x^{3}-y^{5})\\)", "\\(\\log\\dfrac{3x}{5y}\\)", "\\(\\log(x^{3}y^{5})\\)"], 0],
        ["\\(\\log_{9}\\sqrt[3]{9}\\) equals:", ["\\(\\dfrac13\\)", "3", "9", "\\(\\dfrac19\\)"], 0],
        ["\\(\\log_{\\sqrt7}343\\) equals:", ["3", "6", "7", "\\(\\dfrac16\\)"], 1],
        ["An earthquake measuring 8.2 on the Richter scale, compared to one measuring 7.6, is approximately how many times stronger?", ["0.6 times", "4 times", "6 times", "8 times"], 1],
        ["The number of digits in \\(5^{50}\\) (given \\(\\log5=0.6990\\)) is:", ["34", "35", "50", "30"], 1],
        ["If \\(\\log_b2=0.3010\\) and \\(\\log_b5=0.6990\\), then \\(\\log_b10\\) equals:", ["1", "0.699", "0.301", "2.09"], 0]
      ],
      mcqStimulus: [
        {
          stimulus: "The table shows the population of four countries (2023):\nCountry | Population\nA | \\(3\\times10^{8}\\)\nB | \\(1.5\\times10^{9}\\)\nC | \\(6\\times10^{7}\\)\nD | \\(9\\times10^{6}\\)",
          questions: [
            ["Which country has the largest population?", ["A", "B", "C", "D"], 1],
            ["The population of country A in standard form is:", ["30,000,000", "300,000,000", "3,000,000,000", "300,000"], 1],
            ["Population of B is approximately how many times greater than population of C?", ["5 times", "15 times", "25 times", "2.5 times"], 2],
            ["The sum of populations of C and D, in scientific notation, is:", ["\\(6.9\\times10^{7}\\)", "\\(1.5\\times10^{8}\\)", "\\(6.9\\times10^{6}\\)", "\\(9.6\\times10^{7}\\)"], 0]
          ]
        }
      ]
    }
  ]
};
