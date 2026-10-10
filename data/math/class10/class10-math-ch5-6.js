/*
  CLASS 10 — MATH — SHORT QUESTIONS — CHAPTERS 5 TO 6
  -----------------------------------------------------
  Chapter 5: Algebraic Fractions
  Chapter 6: Functions and Graphs

  Source: Class 10 Mathematics (National Book Foundation) exercise and
  review-exercise questions (worked examples excluded). MCQ parts of the
  review exercises are NOT repeated here (class10-math-mcq-ch5-6.js).

  Repetitive exercises carry representative parts. Graph-sketching
  questions carry a written description of the graph (shape, intercepts,
  key points) as the answer. The two figure-based questions of Ex 6.1 Q2 and
  Ex 6.3 Q1 carry an SVG diagram rebuilt from the source.
  Answers were worked out and cross-checked with a computer-algebra system;
  the source material itself contains no answers.
  Ex 5 Review Q8(ii): the printed denominator x^2-6x+9 is read as y^2-6y+9.

  The chapter objects also carry an empty "long" array so long questions
  can be added later without touching the app (chapters merge by id).

  DATA FORMAT (parts-selectable schema):
    short / long: [ { exercise, questions: [ { stem|null, parts: [ {label|null, text, answer, diagram?} ] } ] } ]
  MATH FORMATTING: inline math wrapped in \\( \\) for KaTeX.
*/
var CLASS10_MATH_CH5_6 = {
  "chapters": [
    {
      "id": 5,
      "name": "Algebraic Fractions",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 5.1",
          "questions": [
            {
              "stem": "Reduce the following expressions to their lowest form.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{15ax^{3}y^{2}}{25a^{2}xy^{6}}\\)",
                  "answer": "\\(\\dfrac{3 x^{2}}{5 a y^{4}}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{38k^{2}p^{3}m^{4}}{57k^{3}pm^{2}}\\)",
                  "answer": "\\(\\dfrac{2 m^{2} p^{2}}{3 k}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\dfrac{mn^{4}pq}{m^{2}n^{3}p^{4}}\\)",
                  "answer": "\\(\\dfrac{n q}{m p^{3}}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{3abc}{15a^{2}b^{2}c}\\)",
                  "answer": "\\(\\dfrac{1}{5 a b}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\dfrac{x-3}{3-x}\\)",
                  "answer": "\\(-1\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\dfrac{x^{2}-81}{x+9}\\)",
                  "answer": "\\(x - 9\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(\\dfrac{(r+3)(r+4)}{r^{2}-16}\\)",
                  "answer": "\\(\\dfrac{r + 3}{r - 4}\\)"
                }
              ]
            },
            {
              "stem": "Evaluate the following expressions for the given values of the variables.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(3(r^{2}-s^{2})\\ \\text{if }r=2,\\ s=-1\\)",
                  "answer": "\\(3(4-1)=9\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\tfrac12mv^{2}\\ \\text{at }m=18.75,\\ v=5.6\\)",
                  "answer": "\\(\\tfrac12(18.75)(31.36)=294\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\sqrt{2gs}\\ \\text{when }g=32.2,\\ s=144.9\\)",
                  "answer": "\\(\\sqrt{2(32.2)(144.9)}=\\sqrt{9331.56}=96.6\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(3x-y+\\dfrac1z\\ \\text{if }x=-\\dfrac12,\\ y=3,\\ z=-\\dfrac13\\)",
                  "answer": "\\(-\\dfrac32-3-3=-\\dfrac{15}{2}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(0.1d^{2}+0.01d+1\\ \\text{if }d=-0.2\\)",
                  "answer": "\\(0.004-0.002+1=1.002\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\dfrac47b^{3}-3\\tfrac12b^{2}+b-3\\ \\text{if }b=\\dfrac12\\)",
                  "answer": "\\(\\dfrac{1}{14}-\\dfrac{7}{8}+\\dfrac12-3=- \\dfrac{185}{56}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If the \\(n\\)th triangular number is \\(T(n)=\\dfrac{n(n+1)}{2}\\), find the 100th triangular number.",
                  "answer": "\\(T(100)=\\dfrac{100\\times101}{2}=5050\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(P(x)=x^{2}+2x-15\\), \\(D(x)=x-3\\) and \\(Q(x)=x+5\\), show that \\(\\dfrac{P(2)}{Q(2)}=D(2)\\).",
                  "answer": "\\(P(2)=4+4-15=-7,\\ Q(2)=7,\\ \\dfrac{P(2)}{Q(2)}=-1;\\quad D(2)=2-3=-1.\\ \\text{Hence }\\dfrac{P(2)}{Q(2)}=D(2).\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(g(x)=\\dfrac{1}{2x^{3}}+\\dfrac{x}{2}+2\\), find \\(g\\!\\left(-\\dfrac13\\right)\\).",
                  "answer": "\\(g\\left(-\\dfrac13\\right)=-\\dfrac{27}{2}-\\dfrac16+2=- \\dfrac{35}{3}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The volume of a basketball (sphere) is approximately \\(38808\\ \\text{cm}^{3}\\). The radius is given by \\(r=\\sqrt[3]{\\dfrac{3v}{4\\pi}}\\). Determine the radius of the ball (take \\(\\pi=\\tfrac{22}{7}\\)).",
                  "answer": "\\(r=\\sqrt[3]{\\dfrac{3(38808)\\cdot7}{4\\cdot22}}=\\sqrt[3]{9261}=21\\text{ cm}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 5.2",
          "questions": [
            {
              "stem": "Add the following expressions.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{x}{2},\\ \\dfrac{x}{5}\\)",
                  "answer": "\\(\\dfrac{7 x}{10}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{x-2}{2},\\ \\dfrac{x+10}{9}\\)",
                  "answer": "\\(\\dfrac{11 x + 2}{18}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\dfrac{4+x}{4},\\ \\dfrac{x-1}{7},\\ \\dfrac{5x}{2}\\)",
                  "answer": "\\(\\dfrac{3 \\left(27 x + 8\\right)}{28}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{3x}{x+5},\\ \\dfrac{10}{5x+25}\\)",
                  "answer": "\\(\\dfrac{3 x + 2}{x + 5}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\dfrac{24x}{6x-18},\\ \\dfrac{3(1+x)}{x-3}\\)",
                  "answer": "\\(\\dfrac{7 x + 3}{x - 3}\\)"
                }
              ]
            },
            {
              "stem": "Subtract.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{23-x}{5}\\ \\text{from }7\\)",
                  "answer": "\\(\\dfrac{x + 12}{5}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{6(x-8)}{7}\\ \\text{from }\\dfrac{5(x-7)}{3}\\)",
                  "answer": "\\(\\dfrac{17 x - 101}{21}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(2x^{2}-2x+1\\ \\text{from }\\dfrac{x+1}{x}\\)",
                  "answer": "\\(- \\dfrac{2 x^{3} - 2 x^{2} - 1}{x}\\)"
                }
              ]
            },
            {
              "stem": "Divide the first expression by the second.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{4}-10x^{2}+9\\ ,\\ x^{2}-2x-3\\)",
                  "answer": "\\(\\left(x - 1\\right) \\left(x + 3\\right)\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(x^{3}-3x^{2}y+3xy^{2}-y^{3}\\ ,\\ x-y\\)",
                  "answer": "\\(\\left(x - y\\right)^{2}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\dfrac{4x^{2}-16}{5x}\\ ,\\ \\dfrac{2x+4}{15}\\)",
                  "answer": "\\(\\dfrac{6 \\left(x - 2\\right)}{x}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{x^{2}+5x}{x-3}\\ ,\\ \\dfrac{x^{2}-25}{x-3}\\)",
                  "answer": "\\(\\dfrac{x}{x - 5}\\)"
                }
              ]
            },
            {
              "stem": "Simplify the following.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{x}{2}+\\dfrac{x}{3}-\\dfrac{x}{4}+\\dfrac{x}{5}\\)",
                  "answer": "\\(\\dfrac{47 x}{60}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac12\\left(4-\\dfrac{x}{3}\\right)-\\dfrac56+\\dfrac13\\left(11-\\dfrac{x}{2}\\right)\\)",
                  "answer": "\\(- \\dfrac{2 x - 29}{6}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\dfrac{2}{x+1}+\\dfrac{x}{x-1}-\\dfrac{x+2}{x-1}\\)",
                  "answer": "\\(- \\dfrac{4}{\\left(x - 1\\right) \\left(x + 1\\right)}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{x^{2}-25}{5}-\\dfrac{x}{4}\\div\\dfrac{3x}{20}\\)",
                  "answer": "\\(\\dfrac{3 x^{2} - 100}{15}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(3x\\div\\dfrac{3x^{2}-27}{x+3}+\\dfrac{1}{x-3}\\)",
                  "answer": "\\(\\dfrac{x + 1}{x - 3}\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\dfrac{5x+5}{3(2x-1)}+\\dfrac{6-2x}{2(1-2x)}\\)",
                  "answer": "\\(\\dfrac{4}{3}\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(\\dfrac{2a}{2a-3}-\\dfrac{5}{6a+9}-\\dfrac{4(3a+2)}{3(4a^{2}-9)}\\)",
                  "answer": "\\(\\dfrac{12 a^{2} - 4 a + 7}{3 \\left(2 a - 3\\right) \\left(2 a + 3\\right)}\\)"
                },
                {
                  "label": "(viii)",
                  "text": "\\(\\dfrac{5}{5+x-18x^{2}}-\\dfrac{2}{2+5x+2x^{2}}\\)",
                  "answer": "\\(- \\dfrac{23 x}{\\left(x + 2\\right) \\left(2 x + 1\\right) \\left(9 x - 5\\right)}\\)"
                },
                {
                  "label": "(ix)",
                  "text": "\\(\\dfrac{1-p^{2}}{1+q}\\times\\dfrac{1-q^{2}}{p+p^{2}}\\times\\left(1+\\dfrac{p}{1-p}\\right)\\)",
                  "answer": "\\(- \\dfrac{q - 1}{p}\\)"
                },
                {
                  "label": "(x)",
                  "text": "\\(\\left(1-\\dfrac{x}{1+\\frac{x}{1-x}}\\right)\\div(1+x^{3})\\)",
                  "answer": "\\(\\dfrac{1}{x + 1}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 5.3",
          "questions": [
            {
              "stem": "Solve and check your solutions.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{6x}{x-11}+1=\\dfrac{3}{x-11}\\)",
                  "answer": "\\(x=2\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{2y}{y+3}=\\dfrac{-4}{y-7}\\)",
                  "answer": "\\(y=2, y=3\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\dfrac{x+7}{x+4}-1=\\dfrac{x+10}{2x+8}\\)",
                  "answer": "\\(\\text{no solution}\\ \\ (x=-4\\text{ rejected: it makes a denominator }0)\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{3y}{y+1}=\\dfrac{12}{y^{2}-1}+\\dfrac{y+4}{y+1}\\)",
                  "answer": "\\(y=4\\ \\ (y=-1\\text{ rejected: it makes a denominator }0)\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(x+\\dfrac5x=-6\\)",
                  "answer": "\\(x=-5, x=-1\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\dfrac{y+2}{y^{2}+6y-7}=\\dfrac{8}{y^{2}+3y-4}\\)",
                  "answer": "\\(y=-6, y=8\\ \\ (y=1\\text{ rejected: it makes a denominator }0)\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(\\dfrac{5}{y+1}+\\dfrac{3y+5}{y^{2}+4y+3}=\\dfrac{2}{y+3}\\)",
                  "answer": "\\(\\text{no solution}\\ \\ (y=-3, -1\\text{ rejected: it makes a denominator }0)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Kaleem can mow a lawn in 4 hours and Moiz can mow the same lawn in 5 hours. How long would it take both of them working together to mow the lawn?",
                  "answer": "\\(\\dfrac{1}{4}+\\dfrac15=\\dfrac{1}{t}\\Rightarrow\\dfrac{9}{20}=\\dfrac1t\\Rightarrow t=\\dfrac{20}{9}=2\\tfrac29\\text{ hours}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "You have an 8-pint mixture of paint made up of equal amounts of yellow and blue paint. To create a certain shade of green you need a mixture that is 80% yellow. How many pints of yellow paint do you need to add?",
                  "answer": "\\(\\dfrac{4+x}{8+x}=0.8\\Rightarrow4+x=6.4+0.8x\\Rightarrow0.2x=2.4\\Rightarrow x=12\\text{ pints}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Waqar takes 9 hours longer to build a wall than Wasi. Working together they can build the wall in 20 hours. How long would each take working alone?",
                  "answer": "\\(\\dfrac1t+\\dfrac{1}{t+9}=\\dfrac{1}{20}\\Rightarrow t^{2}-31t-180=0\\Rightarrow t=36\\ (\\text{rejecting }-5).\\ \\text{Wasi: 36 hours, Waqar: 45 hours}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Misc Ex 5 (Review Exercise 5 — non-MCQ)",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the circumference of a circle whose radius is \\(12.5\\) cm. (Take \\(\\pi=\\tfrac{22}{7}\\))",
                  "answer": "\\(C=2\\pi r=2\\times\\dfrac{22}{7}\\times12.5=\\dfrac{550}{7}\\approx78.57\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": "The surface area of a sphere of radius \\(r\\) is \\(S=4\\times\\dfrac{22}{7}r^{2}\\). Find:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "The surface area of a sphere whose radius is 1.4 inches.",
                  "answer": "\\(S=4\\times\\dfrac{22}{7}\\times(1.4)^{2}=24.64\\text{ in}^{2}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "The radius of a sphere whose surface area is \\(38\\tfrac12\\) square feet.",
                  "answer": "\\(38.5=\\dfrac{88}{7}r^{2}\\Rightarrow r^{2}=3.0625\\Rightarrow r=1.75\\text{ ft}\\)"
                }
              ]
            },
            {
              "stem": "By substitution, find which of the following sets of numbers represent the sides of a right-angled triangle (\\(c^{2}=a^{2}+b^{2}\\)).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(7,\\ 24,\\ 25\\)",
                  "answer": "\\(49+576=625=25^{2}\\): Yes."
                },
                {
                  "label": "(ii)",
                  "text": "\\(1.6,\\ 6.3,\\ 6.5\\)",
                  "answer": "\\(2.56+39.69=42.25=6.5^{2}\\): Yes."
                },
                {
                  "label": "(iii)",
                  "text": "\\(12,\\ 35,\\ 36\\)",
                  "answer": "\\(144+1225=1369\\neq1296=36^{2}\\): No."
                },
                {
                  "label": "(iv)",
                  "text": "\\(3,\\ 4,\\ 5\\)",
                  "answer": "\\(9+16=25=5^{2}\\): Yes."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(a=3,\\ b=4\\) and \\(c=1\\), find the value of \\(\\sqrt{2ab+4ac}+\\sqrt{9b}+\\dfrac{2abc}{3}\\).",
                  "answer": "\\(\\sqrt{24+12}+\\sqrt{36}+\\dfrac{24}{3}=6+6+8=20\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Subtract the sum of \\(2x^{3}-3x+4\\) and \\(-3x^{2}+2x-7\\) from \\(4x^{3}-3x^{2}+x-6-\\{2x^{3}-(x-6)\\}\\).",
                  "answer": "\\(3 x - 9\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Divide the product of \\(x-2\\), \\(x+3\\) and \\(2x-7\\) by the sum of \\(3(x^{2}-2x-2)\\) and \\(5x-x^{2}-15\\).",
                  "answer": "\\(\\text{Denominator}=2 x^{2} - x - 21=\\left(x + 3\\right) \\left(2 x - 7\\right);\\quad \\dfrac{(x-2)(x+3)(2x-7)}{\\left(x + 3\\right) \\left(2 x - 7\\right)}=x - 2\\)"
                }
              ]
            },
            {
              "stem": "Simplify the following.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{x}{x+2}-\\dfrac{5x+3}{x-2}+\\dfrac12\\)",
                  "answer": "\\(- \\dfrac{7 x^{2} + 30 x + 16}{2 \\left(x - 2\\right) \\left(x + 2\\right)}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{x}{x^{2}-y^{2}}\\times\\dfrac{x^{2}+2xy+y^{2}}{x+y}\\div\\dfrac{3x}{x-y}\\)",
                  "answer": "\\(\\dfrac{1}{3}\\)"
                }
              ]
            },
            {
              "stem": "Solve.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{12}{x^{2}-16}-\\dfrac{24}{x-4}=3\\)",
                  "answer": "\\(12-24(x+4)=3(x^{2}-16)\\Rightarrow x^{2}+8x+12=0\\Rightarrow x=-2,\\ -6\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{y}{2y-6}-\\dfrac{3}{y^{2}-6y+9}=\\dfrac{y-2}{3y-9}\\)",
                  "answer": "\\(\\text{Multiply by }6(y-3)^{2}:\\ 3y(y-3)-18=2(y-2)(y-3)\\Rightarrow y^{2}+y-30=0\\Rightarrow y=5,\\ -6\\) (the printed denominator \\(x^{2}-6x+9\\) is taken as \\(y^{2}-6y+9=(y-3)^{2}\\))."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "When checking a possible solution of a rational equation, is it necessary to check that the solution does not make any denominator equal to 0? Why or why not?",
                  "answer": "Yes. Multiplying through by the common denominator can produce extraneous roots. A value that makes any denominator 0 makes the original expression undefined, so it cannot be a solution even if it satisfies the cleared-fraction equation; it must be rejected."
                }
              ]
            }
          ]
        }
      ],
      "long": []
    },
    {
      "id": 6,
      "name": "Functions and Graphs",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 6.1",
          "questions": [
            {
              "stem": "If \\(A=\\{2,4,6,8\\}\\) and \\(B=\\{1,3,5\\}\\), which of the following relations are functions from \\(A\\) to \\(B\\)?",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(R_{1}=\\{(2,3),(6,5),(8,3),(4,1)\\}\\)",
                  "answer": "Function: every element of \\(A\\) has exactly one image."
                },
                {
                  "label": "(ii)",
                  "text": "\\(R_{2}=\\{(2,3),(6,1),(8,3),(6,5)\\}\\)",
                  "answer": "Not a function: 6 has two images (1 and 5), and 4 has no image."
                },
                {
                  "label": "(iii)",
                  "text": "\\(R_{3}=\\{(2,3),(6,5),(8,3)\\}\\)",
                  "answer": "Not a function: 4 has no image."
                },
                {
                  "label": "(iv)",
                  "text": "\\(R_{4}=\\{(2,3),(6,3),(8,3),(4,1)\\}\\)",
                  "answer": "Function: every element of \\(A\\) has exactly one image (a many-to-one function)."
                }
              ]
            },
            {
              "stem": "Identify the functions from the arrow diagrams shown. Also write their type.",
              "parts": [
                {
                  "label": null,
                  "text": "Diagrams \\(f:A\\to B\\), \\(g:P\\to Q\\), \\(h:X\\to Y\\) (see figure).",
                  "answer": "\\(f\\) is not a function: element 2 of \\(A\\) is joined to two elements (1 and 3). \\(g\\) is a function (0→7, 2→5, 4→7): it is onto (both 5 and 7 are images) but not one-to-one (0 and 4 have the same image 7). \\(h\\) is a function (0→b, 2→c, 4→b): it is an into function (a has no pre-image) and not one-to-one.",
                  "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 160\" width=\"560\" height=\"160\"> <text x=\"60\" y=\"15\" font-size=\"13\" text-anchor=\"middle\">f</text> <text x=\"30\" y=\"35\" font-size=\"12\">A</text><text x=\"90\" y=\"35\" font-size=\"12\">B</text> <circle cx=\"30\" cy=\"70\" r=\"3\"/><text x=\"15\" y=\"74\" font-size=\"11\">2</text> <circle cx=\"30\" cy=\"95\" r=\"3\"/><text x=\"15\" y=\"99\" font-size=\"11\">3</text> <circle cx=\"30\" cy=\"120\" r=\"3\"/><text x=\"15\" y=\"124\" font-size=\"11\">5</text> <circle cx=\"90\" cy=\"70\" r=\"3\"/><text x=\"97\" y=\"74\" font-size=\"11\">1</text> <circle cx=\"90\" cy=\"95\" r=\"3\"/><text x=\"97\" y=\"99\" font-size=\"11\">3</text> <circle cx=\"90\" cy=\"120\" r=\"3\"/><text x=\"97\" y=\"124\" font-size=\"11\">5</text> <line x1=\"30\" y1=\"70\" x2=\"90\" y2=\"95\" stroke=\"#1c2b4a\"/> <line x1=\"30\" y1=\"70\" x2=\"90\" y2=\"70\" stroke=\"#1c2b4a\"/> <line x1=\"30\" y1=\"95\" x2=\"90\" y2=\"120\" stroke=\"#1c2b4a\"/> <line x1=\"30\" y1=\"120\" x2=\"90\" y2=\"70\" stroke=\"#1c2b4a\"/> <text x=\"270\" y=\"15\" font-size=\"13\" text-anchor=\"middle\">g</text> <text x=\"240\" y=\"35\" font-size=\"12\">P</text><text x=\"300\" y=\"35\" font-size=\"12\">Q</text> <circle cx=\"240\" cy=\"70\" r=\"3\"/><text x=\"222\" y=\"74\" font-size=\"11\">0</text> <circle cx=\"240\" cy=\"95\" r=\"3\"/><text x=\"222\" y=\"99\" font-size=\"11\">2</text> <circle cx=\"240\" cy=\"120\" r=\"3\"/><text x=\"222\" y=\"124\" font-size=\"11\">4</text> <circle cx=\"300\" cy=\"80\" r=\"3\"/><text x=\"307\" y=\"84\" font-size=\"11\">5</text> <circle cx=\"300\" cy=\"110\" r=\"3\"/><text x=\"307\" y=\"114\" font-size=\"11\">7</text> <line x1=\"240\" y1=\"70\" x2=\"300\" y2=\"110\" stroke=\"#1c2b4a\"/> <line x1=\"240\" y1=\"95\" x2=\"300\" y2=\"80\" stroke=\"#1c2b4a\"/> <line x1=\"240\" y1=\"120\" x2=\"300\" y2=\"110\" stroke=\"#1c2b4a\"/> <text x=\"480\" y=\"15\" font-size=\"13\" text-anchor=\"middle\">h</text> <text x=\"450\" y=\"35\" font-size=\"12\">X</text><text x=\"510\" y=\"35\" font-size=\"12\">Y</text> <circle cx=\"450\" cy=\"70\" r=\"3\"/><text x=\"432\" y=\"74\" font-size=\"11\">0</text> <circle cx=\"450\" cy=\"95\" r=\"3\"/><text x=\"432\" y=\"99\" font-size=\"11\">2</text> <circle cx=\"450\" cy=\"120\" r=\"3\"/><text x=\"432\" y=\"124\" font-size=\"11\">4</text> <circle cx=\"510\" cy=\"65\" r=\"3\"/><text x=\"517\" y=\"69\" font-size=\"11\">a</text> <circle cx=\"510\" cy=\"92\" r=\"3\"/><text x=\"517\" y=\"96\" font-size=\"11\">b</text> <circle cx=\"510\" cy=\"119\" r=\"3\"/><text x=\"517\" y=\"123\" font-size=\"11\">c</text> <line x1=\"450\" y1=\"70\" x2=\"510\" y2=\"92\" stroke=\"#1c2b4a\"/> <line x1=\"450\" y1=\"95\" x2=\"510\" y2=\"119\" stroke=\"#1c2b4a\"/> <line x1=\"450\" y1=\"120\" x2=\"510\" y2=\"92\" stroke=\"#1c2b4a\"/> </svg>"
                }
              ]
            },
            {
              "stem": "If \\(f(x)=x^{2}-\\dfrac12x+3\\), evaluate the following.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(f(2)\\)",
                  "answer": "\\(4-1+3=6\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(f(-1)\\)",
                  "answer": "\\(1+\\dfrac12+3=\\dfrac92\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(f\\!\\left(\\dfrac23\\right)\\)",
                  "answer": "\\(\\dfrac49-\\dfrac13+3=\\dfrac{28}{9}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(f(t+1)\\)",
                  "answer": "\\((t+1)^{2}-\\dfrac{t+1}{2}+3=t^{2}+\\dfrac32t+\\dfrac72\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(X\\) = set of prime factors of 6 and \\(Y\\) = set of the first three non-negative integers, check whether the function \\(f:X\\to Y=\\{(x,y)\\mid x-y=1\\}\\) is injective or bijective.",
                  "answer": "\\(X=\\{2,3\\},\\ Y=\\{0,1,2\\},\\ f=\\{(2,1),(3,2)\\}.\\) Different elements have different images, so \\(f\\) is injective. The element 0 of \\(Y\\) has no pre-image, so \\(f\\) is not onto and therefore not bijective."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A function \\(f\\) is defined by \\(f(x)=t-ax\\). Find the values of \\(a\\) and \\(t\\) if 0 and 2 are the images of 1 and \\(-1\\) respectively.",
                  "answer": "\\(f(1)=t-a=0,\\ f(-1)=t+a=2\\Rightarrow t=1,\\ a=1\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A function \\(f\\) is defined by \\(f(x)=mx+c\\). Is \\(f\\) bijective? Justify your answer.",
                  "answer": "If \\(m\\neq0\\), \\(f:\\mathbb{R}\\to\\mathbb{R}\\) is one-to-one (different \\(x\\) give different \\(mx+c\\)) and onto (every \\(y\\) has the pre-image \\(x=\\tfrac{y-c}{m}\\)), so it is bijective. If \\(m=0\\), \\(f(x)=c\\) is constant, so it is neither one-to-one nor onto."
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 6.2",
          "questions": [
            {
              "stem": "If \\(f(x)=4(x-1)\\) and \\(g(x)=x^{2}-2x+1\\), find:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((f+g)(x)\\)",
                  "answer": "\\(x^{2} + 2 x - 3=\\left(x - 1\\right) \\left(x + 3\\right)\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\((f-g)(x)\\)",
                  "answer": "\\(- x^{2} + 6 x - 5=- \\left(x - 5\\right) \\left(x - 1\\right)\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\((f\\times g)(x)\\)",
                  "answer": "\\(4(x-1)^{3}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\((f\\div g)(x)\\)",
                  "answer": "\\(\\dfrac{4}{x-1},\\ x\\neq1\\)"
                }
              ]
            },
            {
              "stem": "If \\(f(x)=4x\\) and \\(g(x)=x+1\\), find:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((fog)(x)\\)",
                  "answer": "\\(4(x+1)=4x+4\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\((gof)(x)\\)",
                  "answer": "\\(4x+1\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\((fof)(x)\\)",
                  "answer": "\\(16x\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\((gog)(x)\\)",
                  "answer": "\\(x+2\\)"
                }
              ]
            },
            {
              "stem": "Find \\((fog)(x)\\) and \\((gof)(x)\\), if:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(f(x)=3-2x,\\ g(x)=x+1\\)",
                  "answer": "\\((fog)(x)=1 - 2 x,\\quad (gof)(x)=- 2 \\left(x - 2\\right)\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(f(x)=\\dfrac2x,\\ g(x)=\\dfrac{2x}{x-1}\\)",
                  "answer": "\\((fog)(x)=\\dfrac{x - 1}{x},\\quad (gof)(x)=- \\dfrac{4}{x - 2}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(f(x)=3x,\\ g(x)=\\dfrac{2}{\\sqrt{x-1}}\\)",
                  "answer": "\\((fog)(x)=\\dfrac{6}{\\sqrt{x-1}},\\quad (gof)(x)=\\dfrac{2}{\\sqrt{3x-1}}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(f(x)=x^{2}-1,\\ g(x)=\\sqrt{x-1}\\)",
                  "answer": "\\((fog)(x)=x - 2,\\quad (gof)(x)=\\sqrt{x^{2} - 2}\\)"
                }
              ]
            },
            {
              "stem": "If \\(f(x)=x^{2}\\) and \\(g(x)=2x+1\\), find the value of \\(x\\) if:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((fog)(x)=(gof)(x)\\)",
                  "answer": "\\((2x+1)^{2}=2x^{2}+1\\Rightarrow2x^{2}+4x=0\\Rightarrow x=0,\\ -2\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(f(x)=g(x)\\)",
                  "answer": "\\(x^{2}=2x+1\\Rightarrow x^{2}-2x-1=0\\Rightarrow x=1\\pm\\sqrt{2}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\((gof)(x)=9\\)",
                  "answer": "\\(2x^{2}+1=9\\Rightarrow x^{2}=4\\Rightarrow x=\\pm2\\)"
                }
              ]
            },
            {
              "stem": "Find the inverse of the following functions.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(f(x)=2x-1\\)",
                  "answer": "\\(f^{-1}(x)=\\dfrac{x+1}{2}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(g(x)=\\dfrac{2}{x-3},\\ x\\neq3\\)",
                  "answer": "\\(g^{-1}(x)=3+\\dfrac2x,\\ x\\neq0\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(f(x)=\\sqrt{x+5},\\ x\\ge-5\\)",
                  "answer": "\\(f^{-1}(x)=x^{2}-5,\\ x\\ge0\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(g(x)=(x-3)^{2},\\ x\\ge3\\)",
                  "answer": "\\(g^{-1}(x)=3+\\sqrt{x},\\ x\\ge0\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(f(x)=\\dfrac{3}{x-5}\\) and \\(g(x)=x+\\dfrac32\\), find \\(f^{-1}(1)\\) and \\(g^{-1}\\!\\left(\\dfrac12\\right)\\).",
                  "answer": "\\(f^{-1}(x)=5+\\dfrac3x\\Rightarrow f^{-1}(1)=8;\\qquad g^{-1}(x)=x-\\dfrac32\\Rightarrow g^{-1}\\!\\left(\\dfrac12\\right)=-1\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 6.3",
          "questions": [
            {
              "stem": "Identify the graphs of linear and non-linear functions from the following. Also indicate which graphs are graphs of functions by applying the vertical line test.",
              "parts": [
                {
                  "label": null,
                  "text": "Graphs (i) upward parabola, (ii) ellipse, (iii) S-curve (cubic), (iv) straight line, (v) sideways parabola, (vi) V-shape (see figure).",
                  "answer": "Linear: only (iv). Non-linear: (i), (ii), (iii), (v), (vi). Vertical line test: (i), (iii), (iv) and (vi) are graphs of functions (every vertical line meets the graph at most once); (ii) the ellipse and (v) the sideways parabola are not (some vertical lines meet them twice).",
                  "diagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 335 185\" width=\"335\" height=\"185\"><svg x=\"5\" y=\"5\" width=\"100\" height=\"70\" viewBox=\"0 0 100 70\"><line x1=\"5\" y1=\"35\" x2=\"95\" y2=\"35\" stroke=\"#888\"/><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"65\" stroke=\"#888\"/><path d=\"M15,15 Q50,75 85,15\" fill=\"none\" stroke=\"#1c2b4a\" stroke-width=\"2\"/></svg><text x=\"55\" y=\"87\" font-size=\"11\" text-anchor=\"middle\">(i)</text><svg x=\"115\" y=\"5\" width=\"100\" height=\"70\" viewBox=\"0 0 100 70\"><line x1=\"5\" y1=\"35\" x2=\"95\" y2=\"35\" stroke=\"#888\"/><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"65\" stroke=\"#888\"/><ellipse cx=\"50\" cy=\"35\" rx=\"35\" ry=\"22\" fill=\"none\" stroke=\"#1c2b4a\" stroke-width=\"2\"/></svg><text x=\"165\" y=\"87\" font-size=\"11\" text-anchor=\"middle\">(ii)</text><svg x=\"225\" y=\"5\" width=\"100\" height=\"70\" viewBox=\"0 0 100 70\"><line x1=\"5\" y1=\"35\" x2=\"95\" y2=\"35\" stroke=\"#888\"/><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"65\" stroke=\"#888\"/><path d=\"M15,55 C40,55 45,15 85,15\" fill=\"none\" stroke=\"#1c2b4a\" stroke-width=\"2\"/></svg><text x=\"275\" y=\"87\" font-size=\"11\" text-anchor=\"middle\">(iii)</text><svg x=\"5\" y=\"95\" width=\"100\" height=\"70\" viewBox=\"0 0 100 70\"><line x1=\"5\" y1=\"35\" x2=\"95\" y2=\"35\" stroke=\"#888\"/><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"65\" stroke=\"#888\"/><line x1=\"15\" y1=\"60\" x2=\"85\" y2=\"10\" stroke=\"#1c2b4a\" stroke-width=\"2\"/></svg><text x=\"55\" y=\"177\" font-size=\"11\" text-anchor=\"middle\">(iv)</text><svg x=\"115\" y=\"95\" width=\"100\" height=\"70\" viewBox=\"0 0 100 70\"><line x1=\"5\" y1=\"35\" x2=\"95\" y2=\"35\" stroke=\"#888\"/><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"65\" stroke=\"#888\"/><path d=\"M20,10 Q80,35 20,60\" fill=\"none\" stroke=\"#1c2b4a\" stroke-width=\"2\"/></svg><text x=\"165\" y=\"177\" font-size=\"11\" text-anchor=\"middle\">(v)</text><svg x=\"225\" y=\"95\" width=\"100\" height=\"70\" viewBox=\"0 0 100 70\"><line x1=\"5\" y1=\"35\" x2=\"95\" y2=\"35\" stroke=\"#888\"/><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"65\" stroke=\"#888\"/><path d=\"M15,15 L50,60 L85,15\" fill=\"none\" stroke=\"#1c2b4a\" stroke-width=\"2\"/></svg><text x=\"275\" y=\"177\" font-size=\"11\" text-anchor=\"middle\">(vi)</text></svg>"
                }
              ]
            },
            {
              "stem": "Sketch the graph of the following functions and identify the graphs which are linear.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(y=3x+2\\)",
                  "answer": "Straight line (linear): through \\((0,2)\\) and \\((-\\tfrac23,0)\\), slope 3."
                },
                {
                  "label": "(ii)",
                  "text": "\\(y=x\\)",
                  "answer": "Straight line (linear): through the origin and \\((1,1)\\), slope 1."
                },
                {
                  "label": "(iii)",
                  "text": "\\(y=x^{2}\\)",
                  "answer": "Not linear: parabola opening upward with vertex at the origin, through \\((\\pm1,1)\\) and \\((\\pm2,4)\\)."
                }
              ]
            },
            {
              "stem": "Sketch the graph of the following functions.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(y=3^{x}\\)",
                  "answer": "Exponential curve: through \\((0,1)\\), \\((1,3)\\), \\((-1,\\tfrac13)\\); rises steeply for \\(x>0\\) and approaches the \\(x\\)-axis as \\(x\\to-\\infty\\) (never touches it)."
                },
                {
                  "label": "(ii)",
                  "text": "\\(y=|x|\\)",
                  "answer": "V-shape with vertex at the origin; the two arms follow \\(y=x\\) (for \\(x\\ge0\\)) and \\(y=-x\\) (for \\(x<0\\)); through \\((\\pm1,1)\\), \\((\\pm2,2)\\)."
                },
                {
                  "label": "(iii)",
                  "text": "\\(y=x^{3}\\)",
                  "answer": "S-shaped curve through the origin, \\((1,1)\\), \\((2,8)\\), \\((-1,-1)\\), \\((-2,-8)\\); increasing everywhere."
                },
                {
                  "label": "(iv)",
                  "text": "\\(y=\\sqrt{x+2}\\)",
                  "answer": "Half-parabola lying on its side, starting at \\((-2,0)\\) and rising to the right through \\((-1,1)\\), \\((2,2)\\), \\((7,3)\\); domain \\(x\\ge-2\\)."
                },
                {
                  "label": "(v)",
                  "text": "\\(y=\\dfrac{1}{x-1}\\)",
                  "answer": "Hyperbola with vertical asymptote \\(x=1\\) and horizontal asymptote \\(y=0\\); through \\((2,1)\\), \\((3,\\tfrac12)\\), \\((0,-1)\\), \\((-1,-\\tfrac12)\\)."
                }
              ]
            },
            {
              "stem": "Check whether the parabola drawn for the following functions opens upwards or downwards. Also find the \\(x\\)-intercept, \\(y\\)-intercept and sketch the graph.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(f(x)=(x-1)^{2}\\)",
                  "answer": "Opens upward (coefficient of \\(x^{2}\\) is positive). Vertex \\((1,0)\\); \\(x\\)-intercept 1 (touches the axis); \\(y\\)-intercept \\(f(0)=1\\)."
                },
                {
                  "label": "(ii)",
                  "text": "\\(f(x)=-x^{2}+2\\)",
                  "answer": "Opens downward. Vertex \\((0,2)\\); \\(x\\)-intercepts \\(\\pm\\sqrt{2}\\); \\(y\\)-intercept 2."
                },
                {
                  "label": "(iii)",
                  "text": "\\(f(x)=3-(x+2)^{2}\\)",
                  "answer": "Opens downward. Vertex \\((-2,3)\\); \\(x\\)-intercepts \\(-2\\pm\\sqrt{3}\\) (\\(\\approx-0.27,\\,-3.73\\)); \\(y\\)-intercept \\(3-4=-1\\)."
                },
                {
                  "label": "(iv)",
                  "text": "\\(f(x)=-x^{2}+2x+3\\)",
                  "answer": "Opens downward. \\(=-(x-3)(x+1)\\): \\(x\\)-intercepts \\(-1\\) and 3; vertex \\((1,4)\\); \\(y\\)-intercept 3."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the values of \\(h\\) and \\(k\\) if \\(y=hx^{2}+2x+k\\) cuts the \\(x\\)-axis at \\((-3,0)\\) and the \\(y\\)-axis at \\((0,2)\\).",
                  "answer": "\\((0,2):\\ k=2.\\quad(-3,0):\\ 9h-6+2=0\\Rightarrow h=\\dfrac49\\)"
                }
              ]
            },
            {
              "stem": "Solve the following equations graphically.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(f(x)=x+2,\\ g(x)=x^{2}-3x+2\\)",
                  "answer": "\\(x+2=x^{2}-3x+2\\Rightarrow x^{2}-4x=0.\\ \\text{The graphs meet at }(0,2)\\text{ and }(4,6);\\ x=0,\\ 4\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(f(x)=2x+5,\\ g(x)=2x^{2}+1\\)",
                  "answer": "\\(2x+5=2x^{2}+1\\Rightarrow x^{2}-x-2=0.\\ \\text{The graphs meet at }(-1,3)\\text{ and }(2,9);\\ x=-1,\\ 2\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If the demand function of a product is \\(D(x)=100-5x\\) and the supply function is \\(S(x)=x-200\\), draw the graphs of both on the same axes (same scale) and find the value of \\(x\\) for which supply equals demand.",
                  "answer": "\\(100-5x=x-200\\Rightarrow6x=300\\Rightarrow x=50.\\) The two lines intersect at \\(x=50\\) (where \\(D=S=-150\\) for these functions)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The population of a town is modelled by \\(P(t)=50{,}000(1.05)^{t}\\), where \\(t\\) is in years. Draw the graph of this function and find the population growth over 5 years.",
                  "answer": "\\(P(0)=50000,\\ P(5)=50000(1.05)^{5}\\approx63814.\\) Growth over 5 years \\(\\approx 13814\\) people."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Draw the gradient of the curve \\(y=\\dfrac12x^{2}\\) by drawing the tangent line at \\(x=2\\).",
                  "answer": "\\(\\text{Point }(2,2);\\ \\dfrac{dy}{dx}=x=2.\\) Gradient (slope of the tangent) \\(=2\\); tangent line: \\(y-2=2(x-2)\\), i.e. \\(y=2x-2\\)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A logistics company charges a base fee of 50 dollars plus 0.5 dollars per mile. If a shipment travels 250 miles, what is the total cost?",
                  "answer": "\\(C=50+0.5(250)=175\\text{ dollars}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Misc Ex 6 (Review Exercise 6 — non-MCQ)",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the inverse of \\(f(x)=\\dfrac{3x}{2x-1}\\). At what value of the variable will \\(f^{-1}(x)\\) be undefined? Also find \\(f^{-1}(-1)\\).",
                  "answer": "\\(y=\\dfrac{3x}{2x-1}\\Rightarrow x(2y-3)=y\\Rightarrow f^{-1}(x)=\\dfrac{x}{2x-3}.\\) It is undefined at \\(x=\\tfrac32\\). \\(f^{-1}(-1)=\\dfrac{-1}{-2-3}=\\dfrac15\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Sketch the graph of the quadratic function \\(y=-x^{2}-4x\\). Will it open upward or downward?",
                  "answer": "It opens downward (coefficient of \\(x^{2}\\) is \\(-1\\)). \\(y=-x(x+4)\\): \\(x\\)-intercepts 0 and \\(-4\\); \\(y\\)-intercept 0; vertex \\((-2,4)\\) (the maximum point)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the equation in the form \\(y=ax^{2}+bx+c\\) which cuts the \\(x\\)-axis at \\((-1,0)\\) and \\((1,0)\\) and the \\(y\\)-axis at \\((0,10)\\).",
                  "answer": "\\(y=a(x-1)(x+1)=a(x^{2}-1);\\ \\ x=0,\\ y=10\\Rightarrow-a=10\\Rightarrow a=-10.\\ \\ \\text{So }y=-10x^{2}+10\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "For the function \\(f(x)=x^{2}-x-6\\), find the value of \\(x\\) if \\(f(x)=f(3)\\).",
                  "answer": "\\(f(3)=9-3-6=0.\\ \\ x^{2}-x-6=0\\Rightarrow(x-3)(x+2)=0\\Rightarrow x=3\\ \\text{or}\\ x=-2\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the inverse function to convert Celsius to Fahrenheit if \\(C=\\dfrac59(F-32)\\), and use it to convert \\(25^\\circ\\)C graphically.",
                  "answer": "\\(F=\\dfrac95C+32.\\) The graph of \\(F\\) against \\(C\\) is a straight line through \\((0,32)\\) and \\((100,212)\\); at \\(C=25\\) it reads \\(F=77\\). So \\(25^\\circ\\)C \\(=77^\\circ\\)F."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the point(s) of intersection of the graphs of \\(f(x)=x-2\\) and \\(g(x)=x^{2}-4x+2\\).",
                  "answer": "\\(x-2=x^{2}-4x+2\\Rightarrow x^{2}-5x+4=0\\Rightarrow x=1,\\ 4.\\ \\text{Points: }(1,-1)\\text{ and }(4,2)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "When medication is taken by a patient, it is slowly used by the body. After \\(n\\) hours, the amount of medicine remaining is \\(f(n)=120\\times(0.9)^{n}\\) mg. Draw the graph of \\(f(n)\\) against \\(n\\) and use it to find when there is 20 mg left in the body.",
                  "answer": "\\(120(0.9)^{n}=20\\Rightarrow(0.9)^{n}=\\dfrac16\\Rightarrow n=\\dfrac{\\ln6}{-\\ln0.9}\\approx17.\\) The graph reaches 20 mg at about 17 hours (graph: \\(f(0)=120\\), \\(f(5)\\approx70.9\\), \\(f(10)\\approx41.8\\), \\(f(15)\\approx24.7\\), \\(f(20)\\approx14.6\\))."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A sound wave's amplitude is \\(A(t)=|2\\cos(t)|\\), where \\(t\\) is in seconds. If \\(t=5\\) seconds, what is the amplitude?",
                  "answer": "\\(A(5)=|2\\cos5|=2(0.2837)\\approx0.567\\) (with 5 taken in radians)."
                }
              ]
            }
          ]
        }
      ],
      "long": []
    }
  ]
};
