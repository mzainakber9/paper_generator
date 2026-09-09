/*
  CLASS 9 — MATH — CHAPTERS 1 TO 4
  ---------------------------------
  Real content, sourced from the National Book Foundation Grade 9 textbook,
  filtered to Summative-only SLOs per the FBISE Assessment Framework
  (Formative SLOs are excluded even if they appear in the book).

  Thoroughness standard: for exercises that repeat the same skill many
  times, 4-5 representative sub-parts are included (not all, not just
  one). For non-repetitive content (distinct real-life scenarios), most
  or all are included. End-of-chapter review/miscellaneous exercises are
  checked too, not just the main numbered exercises.

  Chapters in this file: 1 Real Numbers, 2 Logarithms (3 Sets and
  Relations, 4 Factorization still to be added).

  DATA FORMAT
  -----------
  mcq:   [ [ questionText, [opt1,opt2,opt3,opt4], correctIndex ], ... ]

  short / long: grouped by exercise/section so the tag is shown once:
    [ { exercise: "Ex 1.2", questions: [ {text, answer}, ... ] }, ... ]
  A "Sec X.X" tag marks questions built from a concept section rather
  than a numbered textbook exercise.

  MATH FORMATTING: wrap inline math in \\( \\) so KaTeX renders it.
*/
var CLASS9_MATH_CH1_4 = {
  chapters: [
    {
      id: 1,
      name: "Real Numbers",
      mcq: [],
      short: [
        {
          exercise: "Ex 1.2 (Q1 — single radical)",
          questions: [
            { text: "By using the product rule for radicals, write as a single radical and simplify: \\(\\sqrt[3]{6}\\cdot\\sqrt[3]{6}\\)", answer: "\\(\\sqrt[3]{36}\\)" },
            { text: "By using the product rule for radicals, write as a single radical and simplify: \\(\\sqrt[4]{4}\\cdot\\sqrt[4]{8}\\)", answer: "\\(2\\sqrt[4]{2}\\)" },
            { text: "By using the product rule for radicals, write as a single radical and simplify: \\(\\sqrt[4]{x}\\cdot\\sqrt[4]{x^{3}}\\)", answer: "\\(x\\)" },
            { text: "By using the quotient rule for radicals, write as a single radical and simplify: \\(\\dfrac{\\sqrt[4]{x^{7}}}{\\sqrt[4]{x^{5}}}\\)", answer: "\\(\\sqrt{x}\\)" },
            { text: "By using the quotient rule for radicals, write as a single radical and simplify: \\(\\dfrac{\\sqrt[3]{5000}}{\\sqrt[3]{5}}\\)", answer: "10" }
          ]
        },
        {
          exercise: "Ex 1.2 (Q2 — exponential to radical form)",
          questions: [
            { text: "Write as an equivalent radical expression and simplify if possible: \\((216)^{\\frac{2}{3}}\\)", answer: "36" },
            { text: "Write as an equivalent radical expression and simplify if possible: \\(\\left(\\dfrac{1}{32}\\right)^{\\frac{1}{5}}\\)", answer: "\\(\\dfrac12\\)" },
            { text: "Write as an equivalent radical expression and simplify if possible: \\((216)^{-\\frac{2}{3}}\\)", answer: "\\(\\dfrac{1}{36}\\)" },
            { text: "Write as an equivalent radical expression and simplify if possible: \\((1000)^{\\frac{1}{3}}\\)", answer: "10" },
            { text: "Write as an equivalent radical expression and simplify if possible: \\(\\left(\\dfrac{1}{39}\\right)^{-\\frac{1}{2}}\\)", answer: "\\(\\sqrt{39}\\)" }
          ]
        },
        {
          exercise: "Ex 1.2 (Q3 — radical to exponential form)",
          questions: [
            { text: "Write as an equivalent exponential expression and simplify: \\(\\left(\\sqrt[3]{5}\\right)^{2}\\)", answer: "\\(5^{\\frac23}\\)" },
            { text: "Write as an equivalent exponential expression and simplify: \\(\\left(\\sqrt[4]{10}\\right)^{8}\\)", answer: "100" },
            { text: "Write as an equivalent exponential expression and simplify: \\(\\left(\\sqrt[3]{6}\\right)^{6}\\)", answer: "36" },
            { text: "Write as an equivalent exponential expression and simplify: \\(-\\left(\\sqrt[3]{5}\\right)^{2}\\)", answer: "\\(-5^{\\frac23}\\)" },
            { text: "Write as an equivalent exponential expression and simplify: \\(-\\left(\\sqrt[4]{10}\\right)^{8}\\)", answer: "\\(-100\\)" }
          ]
        },
        {
          exercise: "Ex 1.2 (Q4 — simplify using laws of exponents)",
          questions: [
            { text: "Use the properties of exponents to simplify (write with positive exponents): \\(\\dfrac{16^{\\frac15}\\cdot16^{\\frac14}}{16^{-\\frac{3}{10}}}\\)", answer: "8" },
            { text: "Use the properties of exponents to simplify: \\(7^{-\\frac13}\\left(7^{\\frac53}-7^{\\frac43}\\right)\\)", answer: "\\(7^{\\frac43}-7\\)" },
            { text: "Use the properties of exponents to simplify (write with positive exponents): \\(\\dfrac{3^{-\\frac12}\\cdot3^{\\frac12}}{3^{\\frac12}}\\)", answer: "\\(\\dfrac{1}{\\sqrt3}\\)" },
            { text: "Using the laws of exponents, simplify: \\(\\left(\\dfrac{2187\\,a^{5}\\,b^{17}}{a^{12}\\,b^{3}}\\right)^{\\frac{1}{7}}\\)", answer: "\\(3ab^{2}\\)" }
          ]
        },
        {
          exercise: "Ex 1.2 (Q5 — proof)",
          questions: [
            { text: "Use suitable laws of exponents to show that \\(\\left(\\dfrac{x^{p}}{x^{q}}\\right)^{p+q}\\cdot\\left(\\dfrac{y^{q}}{y^{r}}\\right)^{q+r}\\cdot\\left(\\dfrac{z^{r}}{z^{p}}\\right)^{r+p}\\times x^{q^{2}}\\times y^{r^{2}}\\times z^{p^{2}} = x^{p^{2}}\\times y^{q^{2}}\\times z^{r^{2}}\\)", answer: "Verified by expanding each bracket with the power and quotient laws — both sides reduce to \\(x^{p^{2}}y^{q^{2}}z^{r^{2}}\\)." }
          ]
        },
        {
          exercise: "Ex 1.3",
          questions: [
            { text: "On his last bank statement, Qasim had a balance of Rs.\\,1,75,000 in his checking account. He wrote one cheque for Rs.\\,45,790 and another for Rs.\\,1,12,921. What is his current balance?", answer: "Rs.\\,16,289" },
            { text: "Last week Wajid drove 283.4 km on 16.2 litres of petrol. He says that he averaged about 1.75 km/litre. Is his answer reasonable? Explain.", answer: "No — actual average is \\(283.4\\div16.2\\approx17.49\\) km/litre, about 10 times his claimed figure." },
            { text: "Salma bought 3.2 yards of fabric for a total price of Rs.\\,139.2. How much did the fabric cost per yard?", answer: "Rs.\\,43.5 per yard" },
            { text: "Momina walks at \\(3.5\\ \\text{km/h}\\). She took a 12-hour walk. How far did she walk?", answer: "42 km" },
            { text: "The hiking club went on a 7-day trip. Each day they hiked between 5.5 and 7.5 miles. Is it reasonable to assume the club hiked: (a) less than 35 miles, (b) between 35 and 55 miles, (c) equally 55 miles, or (d) more than 55 miles, over the whole trip?", answer: "(b) Between 35 and 55 miles (since \\(7\\times5.5=38.5\\) and \\(7\\times7.5=52.5\\))." },
            { text: "For a class party, the students' council purchased 42 balloons at Rs.\\,1.85 each. What is the total amount the council paid for the balloons?", answer: "Rs.\\,77.70" },
            { text: "A group of friends made a 4-yard long rectangular banner. They paid Rs.\\,3.75 per yard for the fabric and Rs.\\,9 for the trim to go around the banner, a 10-yard perimeter. What was the width of the banner?", answer: "1 yard" },
            { text: "A shoe factory has assets of Rs.\\,2{,}000{,}000, of which \\(\\dfrac35\\) is capital and the rest is debt. Find the amount of capital and debt.", answer: "Capital = Rs.\\,1{,}200{,}000; Debt = Rs.\\,800{,}000" },
            { text: "The world's lowest temperature in the past 100 years was recorded as \\(-89.2^{\\circ}\\text{C}\\) at Vostok, Antarctica, on July 21, 1983. Convert this temperature into Fahrenheit and Kelvin scales. \\(\\left(F=\\dfrac95C+32,\\ \\ K=C+273\\right)\\)", answer: "\\(F\\approx-128.56^{\\circ}\\text{F}\\); \\(K=183.8\\ \\text{K}\\)" },
            { text: "A company was penalized by the government for low quality production. The company has 3 shareholders — Farah, Maryam and Tehreem — investing in the ratio \\(1:2:3\\), and the total penalty is Rs.\\,4,56,868.97. Find the amount of penalty paid by each of the 3 shareholders.", answer: "Farah: Rs.\\,76,144.83; Maryam: Rs.\\,1,52,289.66; Tehreem: Rs.\\,2,28,434.49" },
            { text: "A cooking oil company stocks four types of oil in 1-litre, 5-litre and 10-litre packings, with 5000, 2500 and 1000 units respectively in inventory for each type. Once 40% of an item's stock has been removed, it must be replenished. The daily removal of 1-litre Cooking Oil-II packing is 20%, and for 10-litre Cooking Oil-IV packing the daily removal is 5%. Find: (a) the number of 1-litre Cooking Oil-II packs removed daily, (b) after how many days 1-litre Cooking Oil-II packs must be replenished, (c) the number of 10-litre Cooking Oil-IV packs removed daily, (d) after how many days 10-litre Cooking Oil-IV packs must be replenished.", answer: "(a) 1000 packs/day (b) After 2 days (c) 50 packs/day (d) After 8 days" }
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
            { text: "Write in scientific notation: \\(0.00053407\\)", answer: "\\(5.3407\\times10^{-4}\\)" },
            { text: "Write in scientific notation: \\(53400000\\)", answer: "\\(5.34\\times10^{7}\\)" },
            { text: "Write in scientific notation: \\(0.000000000012\\)", answer: "\\(1.2\\times10^{-11}\\)" },
            { text: "Write in standard notation: \\(6.53\\times10^{-6}\\)", answer: "0.00000653" },
            { text: "Write in standard notation: \\(3.1415\\times10^{9}\\)", answer: "3,141,500,000" },
            { text: "The speed of light is approximately \\(3\\times10^{5}\\ \\text{km/s}\\), and the distance between Earth and the Sun is approximately \\(1.5\\times10^{8}\\ \\text{km}\\). If the Sun suddenly burned out, how long would it take for people on Earth to know about it?", answer: "500 seconds (8 min 20 sec)" },
            { text: "If it takes 5 seconds to recite 'Kalma Pak' once, how many hours will it take to recite it one million times? Convert the hours into days, writing the answer in standard form (round off, discarding the decimal part).", answer: "\\(\\approx1388\\) hours \\(\\approx 57\\) days" },
            { text: "The distance between Earth and Sun is \\(9.32256\\times10^{7}\\) miles. If the speed of light is approximately \\(186{,}000\\) miles per second, how long does it take light to reach Earth? (Give the answer in minutes.)", answer: "\\(\\approx 8.35\\) minutes (\\(\\approx501\\) seconds)" }
          ]
        },
        {
          exercise: "Sec 2.3",
          questions: [
            { text: "Differentiate between common logarithm and natural logarithm, stating the base and notation of each.", answer: "Common log has base 10, written \\(\\log x\\); natural log has base \\(e\\approx2.71828\\), written \\(\\ln x\\)." },
            { text: "Write \\(\\log_{e} 25\\) using natural logarithm notation.", answer: "\\(\\ln 25\\)" },
            { text: "State the value of \\(\\ln e\\) and \\(\\log 10\\).", answer: "\\(\\ln e = 1\\) and \\(\\log 10 = 1\\)" }
          ]
        },
        {
          exercise: "Ex 2.5 (expand)",
          questions: [
            { text: "Use laws of logarithms to expand: \\(\\log 9t\\)", answer: "\\(\\log 9 + \\log t\\)" },
            { text: "Use laws of logarithms to expand: \\(\\log\\dfrac{59}{s}\\)", answer: "\\(\\log 59 - \\log s\\)" },
            { text: "Use laws of logarithms to expand: \\(\\log\\dfrac{5pq^{2}}{xy^{3}}\\)", answer: "\\(\\log5+\\log p+2\\log q-\\log x-3\\log y\\)" },
            { text: "Use laws of logarithms to expand: \\(\\log\\sqrt{\\dfrac{53.3}{46.4}}\\)", answer: "\\(\\dfrac12\\left(\\log 53.3-\\log 46.4\\right)\\)" }
          ]
        },
        {
          exercise: "Ex 2.5 (combine / evaluate)",
          questions: [
            { text: "Use laws of logarithms to combine into a single logarithm: \\(3\\log x - 5\\log y\\)", answer: "\\(\\log\\dfrac{x^{3}}{y^{5}}\\)" },
            { text: "Use laws of logarithms to combine into a single logarithm: \\(\\dfrac12\\log t + \\dfrac13\\log r - \\dfrac15\\log s\\)", answer: "\\(\\log\\left(\\dfrac{\\sqrt{t}\\cdot\\sqrt[3]{r}}{\\sqrt[5]{s}}\\right)\\)" },
            { text: "Use laws of logarithms to evaluate: \\(\\log_{9}\\sqrt[3]{9}\\)", answer: "\\(\\dfrac13\\)" },
            { text: "Use laws of logarithms to evaluate: \\(\\log_{\\sqrt7}343\\)", answer: "6" },
            { text: "If \\(\\log_b 2 = 0.3010\\), \\(\\log_b 3 = 0.4771\\) and \\(\\log_b 5 = 0.6990\\), evaluate \\(\\log_b\\dfrac{6}{5}\\) using laws of logarithms.", answer: "0.2791" },
            { text: "If \\(\\log_b 2 = 0.3010\\), \\(\\log_b 3 = 0.4771\\) and \\(\\log_b 5 = 0.6990\\), evaluate \\(\\log_b\\dfrac{100}{9}\\) using laws of logarithms.", answer: "1.0458" }
          ]
        },
        {
          exercise: "Applications (Sec 2.5 / Ex 2.6)",
          questions: [
            { text: "An earthquake that occurred in Pakistan in 2005 measured 7.6 on the Richter scale. In 1978, an earthquake in China measured 8.2. Using \\(M=\\log\\left(\\dfrac{I}{I_0}\\right)\\), find how many times stronger China's earthquake was than Pakistan's.", answer: "About 4 times stronger." },
            { text: "The Kansu, China earthquake of 1920 was measured about 8.5 on the Richter scale, and the Tokyo, Japan earthquake of 1923 was measured 7.8 on that scale. How many times stronger was the 1920 earthquake than the 1923 earthquake?", answer: "About 5 times stronger." },
            { text: "Find the number of digits in \\(5^{50}\\). (Given \\(\\log 5 = 0.6990\\))", answer: "35 digits" },
            { text: "Find the number of digits in \\(3^{30}\\). (Given \\(\\log 3 = 0.4771\\))", answer: "15 digits" },
            { text: "Evaluate, applying laws of logarithms: \\(\\dfrac{\\sqrt[3]{27.98}}{\\sqrt[4]{28.73}}\\)", answer: "\\(\\approx1.31\\)" }
          ]
        }
      ],
      long: []
    },
    {
      id: 3,
      name: "Sets and Relations",
      mcq: [],
      short: [
        {
          exercise: "Ex 3.1 (Venn diagrams, laws)",
          questions: [
            { text: "If \\(X=\\{a,b,c,d,e\\}\\), \\(Y=\\{a,c,e\\}\\), \\(Z=\\{g,h,i,j\\}\\), find using Venn diagrams: (i) \\((X\\cup Y)\\cup Z\\) (ii) \\(X\\cap(Y\\cap Z)\\) (iii) \\((X\\cap Y)\\cup Z\\)", answer: "(i) \\(\\{a,b,c,d,e,g,h,i,j\\}\\) (ii) \\(\\{\\ \\}\\) (iii) \\(\\{a,c,e,g,h,i,j\\}\\)" },
            { text: "Prove by using Venn diagram: \\((P\\cup Q)\\cup R = P\\cup(Q\\cup R)\\), when \\(P=\\{0,1,2,3\\}\\), \\(Q=\\{2,3,4,5,6\\}\\), \\(R=\\{5,6,7,8,9\\}\\).", answer: "Both sides equal \\(\\{0,1,2,3,4,5,6,7,8,9\\}\\) — verified." }
          ]
        },
        {
          exercise: "Ex 3.2 (real-life applications)",
          questions: [
            { text: "Let A and B be two finite sets such that \\(n(A)=24\\), \\(n(B)=18\\) and \\(n(A\\cup B)=31\\). Find \\(n(A\\cap B)\\).", answer: "11" },
            { text: "If \\(n(A-B)=23\\), \\(n(A\\cup B)=44\\) and \\(n(A\\cap B)=2\\), find \\(n(B-A)\\) and \\(n(B)\\).", answer: "\\(n(B-A)=19\\), \\(n(B)=21\\)" },
            { text: "In a group of 30 Mathematics students, 20 like Algebra and 15 like both Geometry and Algebra. Show the data by Venn diagram, and find how many students like Geometry (assuming every student likes at least one of the two).", answer: "25 students" },
            { text: "In a street with 50 houses, 25 houses have lawns, 32 houses have car porches, and 15 have both a lawn and a car porch. Show the data by Venn diagram, and find how many houses have neither a lawn nor a porch.", answer: "8 houses" },
            { text: "In a survey of 940 children, 400 were found studying at primary level, 240 at elementary level, and 175 at secondary level. Create a Venn diagram to illustrate this. How many children were found out of school?", answer: "125 children" },
            { text: "ABC Dairy polled its customers on their favourite flavour: chocolate, vanilla, or mango. 100 customers said mango, 90 said vanilla, 40 said chocolate. 20 customers liked both mango and vanilla, and 14 liked both chocolate and vanilla. How many customers liked: (i) only mango? (ii) only vanilla? (iii) only chocolate?", answer: "(i) 80 (ii) 56 (iii) 26" },
            { text: "In a survey of 200 university students: 42 have laptops, 80 have cell phones, 100 have iPods. 23 have both a laptop and a cell phone, 10 have both a laptop and an iPod, 14 have both a cell phone and an iPod, and 8 have all three items. Find: (a) how many students have only a cell phone (b) how many have none of the three items (c) how many have both iPod and laptop but not cell phone.", answer: "(a) 51 (b) 17 (c) 2" },
            { text: "In a girls' college, every student plays either badminton or table tennis or both. If 350 students play badminton, 280 play table tennis, and 150 play both, find how many students are there in the college.", answer: "480 students" },
            { text: "Among 50 students, 8 are learning both English and Chinese. A total of 26 students are learning English. If every student is learning at least one language, how many students are learning Chinese?", answer: "32 students" },
            { text: "Out of 70 people, 48 like tea and 40 like coffee, and each person likes at least one of the two drinks. How many like both tea and coffee?", answer: "18 people" },
            { text: "There are 46 students in the science group and 50 students in the arts group (no student belongs to both). Find the number of students who are either in the science or arts group.", answer: "96 students" }
          ]
        },
        {
          exercise: "Ex 3.3 (Cartesian product & binary relations)",
          questions: [
            { text: "Let \\(X=\\{x\\,/\\,x\\in W, x\\le2\\}\\) and \\(Y=\\{-1,-2,-3\\}\\). Exhibit \\(X\\times Y\\) and \\(Y\\times X\\) by arrow diagram.", answer: "\\(X\\times Y=\\{(0,-1),(0,-2),(0,-3),(1,-1),(1,-2),(1,-3),(2,-1),(2,-2),(2,-3)\\}\\); \\(Y\\times X\\) is the same pairs reversed." },
            { text: "If \\(A=\\{5,10,15,20,25\\}\\), find the number of binary relations in A.", answer: "\\(n(A)=5\\), so number of binary relations \\(=2^{25}\\)" }
          ]
        },
        {
          exercise: "Ex 3.4 (domain, range, inverse relations)",
          questions: [
            { text: "Let \\(H=\\{5,6,7,8,9\\}\\) and \\(G=\\{5,7,9,11\\}\\). Write the following relations from H to G in tabular form: (i) 'is equal to' (ii) 'is one greater than'", answer: "(i) \\(\\{(5,5),(7,7),(9,9)\\}\\) (ii) \\(\\{(6,5),(8,7)\\}\\)" },
            { text: "Let \\(C=\\{2,4,6\\}\\), \\(D=\\{4,6,8,9,12\\}\\) and \\(R=\\{(x,y)\\,/\\,x\\in C, y\\in D, x\\text{ is a factor of }y\\}\\). (i) Write R in tabular form (ii) Find domain and range of R (iii) Find \\(R^{-1}\\)", answer: "R = \\(\\{(2,4),(2,6),(2,8),(2,12),(4,4),(4,8),(4,12),(6,6),(6,12)\\}\\); Dom R = \\(\\{2,4,6\\}\\), Range R = \\(\\{4,6,8,12\\}\\); \\(R^{-1}\\) reverses each pair." },
            { text: "Let \\(A=\\{0,1,3\\}\\) and \\(B=\\{1,2,3,5,7\\}\\). Write \\(R=\\{(x,y)\\,/\\,x\\in A, y\\in B, y=2x+1\\}\\) in tabular form. Also find \\(R^{-1}\\).", answer: "R = \\(\\{(0,1),(1,3),(3,7)\\}\\); \\(R^{-1}=\\{(1,0),(3,1),(7,3)\\}\\)" }
          ]
        },
        {
          exercise: "Misc 3",
          questions: [
            { text: "If \\(R=\\{a,f,h,s\\}\\) and \\(S=\\{b,e,j,n\\}\\), find the number of binary relations in \\(R\\times S\\).", answer: "\\(n(R\\times S)=16\\), so number of binary relations \\(=2^{16}=65536\\)" }
          ]
        }
      ],
      long: []
    },
    {
      id: 4,
      name: "Factorization and Algebraic Manipulation",
      mcq: [],
      short: [
        {
          exercise: "Ex 4.1 (quadratic/biquadratic factoring)",
          questions: [
            { text: "Factorize: \\(x^{4}+4m^{4}\\)", answer: "\\((x^{2}+2m^{2}-2xm)(x^{2}+2m^{2}+2xm)\\)" },
            { text: "Factorize: \\(x^{8}+x^{4}+1\\)", answer: "\\((x^{4}+x^{2}+1)(x^{4}-x^{2}+1)\\)" },
            { text: "Factorize: \\(x^{2}-9x+8\\)", answer: "\\((x-1)(x-8)\\)" },
            { text: "Factorize: \\(x^{2}-21x+90\\)", answer: "\\((x-6)(x-15)\\)" },
            { text: "Factorize: \\(3x^{2}+11x+6\\)", answer: "\\((3x+2)(x+3)\\)" },
            { text: "Factorize: \\(2x^{2}-5xy-3y^{2}\\)", answer: "\\((2x+y)(x-3y)\\)" },
            { text: "Factorize: \\(6-7x-5x^{2}\\)", answer: "\\((3-5x)(x+2)\\)" }
          ]
        },
        {
          exercise: "Ex 4.2 (cubes & Type-III patterns)",
          questions: [
            { text: "Factorize: \\(x^{3}-125\\)", answer: "\\((x-5)(x^{2}+5x+25)\\)" },
            { text: "Factorize: \\(8x^{3}+1\\)", answer: "\\((2x+1)(4x^{2}-2x+1)\\)" },
            { text: "Factorize: \\((2x^{2}-3x+6)(2x^{2}-3x)-55\\)", answer: "\\((2x^{2}-3x+11)(2x^{2}-3x-5)\\)" },
            { text: "The expression \\(a^{6}+729\\) can be written in two ways: (a) sum of two squares (b) sum of two cubes. Which one will be used for factoring it, and why? Also factorize the expression.", answer: "Sum of two cubes is used (sum of squares has no general factoring formula). \\(a^{6}+729=(a^{2})^{3}+9^{3}=(a^{2}+9)(a^{4}-9a^{2}+81)\\)" },
            { text: "Express \\(8+12t+6t^{2}+t^{3}\\) as the product of three factors. Is each factor a binomial or a trinomial?", answer: "\\((t+2)^{3}=(t+2)(t+2)(t+2)\\) — each factor is a binomial." }
          ]
        },
        {
          exercise: "Ex 4.3 (HCF by factorization)",
          questions: [
            { text: "Find the HCF of \\((x+y)^{2}\\) and \\(x^{2}-y^{2}\\) by factorization.", answer: "\\((x+y)\\)" },
            { text: "Find the HCF of \\(x^{2}-49\\) and \\(x^{2}-4x-21\\) by factorization.", answer: "\\((x-7)\\)" }
          ]
        },
        {
          exercise: "Ex 4.4 (LCM & HCF-LCM relation)",
          questions: [
            { text: "Find the LCM of \\(x^{2}-x-6\\), \\(x^{2}+x-2\\) and \\(x^{2}-4x+3\\).", answer: "\\((x-3)(x+2)(x-1)\\)" },
            { text: "Find the HCF and LCM of \\(a^{2}-b^{2}\\) and \\(a^{2}-2ab+b^{2}\\), and verify that (HCF)×(LCM) equals the product of the two expressions.", answer: "HCF \\(=(a-b)\\); LCM \\(=(a+b)(a-b)^{2}\\); product check: \\((a-b)\\times(a+b)(a-b)^{2}=(a^{2}-b^{2})(a^{2}-2ab+b^{2})\\) — verified." }
          ]
        },
        {
          exercise: "Ex 4.6 (algebraic fractions)",
          questions: [
            { text: "Find the indicated product: \\(\\dfrac{x^{2}-1}{x^{2}+4x+4}\\times\\dfrac{x+2}{x^{2}+2x-3}\\)", answer: "\\(\\dfrac{x+1}{(x+2)(x+3)}\\)" },
            { text: "Simplify: \\(\\dfrac{6x^{2}y^{2}}{x^{2}-y^{2}}\\div\\dfrac{3xy}{x+y}\\)", answer: "\\(\\dfrac{2xy}{x-y}\\)" }
          ]
        },
        {
          exercise: "Ex 4.7 (square root)",
          questions: [
            { text: "Find the square root of \\(9x^{2}-42xy+49y^{2}\\) by division method.", answer: "\\(\\pm(3x-7y)\\)" },
            { text: "Find the square root of \\(16y^{2}-56y+49\\) by factorization.", answer: "\\(\\pm(4y-7)\\)" },
            { text: "Find the square root of \\(x^{4}+10x^{3}+31x^{2}+30x+9\\) by division method.", answer: "\\(\\pm(x^{2}+5x+3)\\)" },
            { text: "To convert \\(x^{4}+4x^{3}+10x^{2}+10x+5\\) into a perfect square: (i) what should be added to it? (ii) what should be subtracted from it? (iii) what should be the value of \\(x\\) (for the remainder to vanish on its own)?", answer: "(i) Add \\(2x+4\\) (ii) Subtract \\(-2x-4\\), i.e. add \\(2x+4\\) back after removing the remainder (iii) \\(x=-2\\)" }
          ]
        }
      ],
      long: []
    }
  ]
};
