/*
  CLASS 10 — MATH — SHORT QUESTIONS — CHAPTERS 1 TO 2
  -----------------------------------------------------
  Chapter 1: Complex Numbers
  Chapter 2: Quadratic Equations

  Source: Class 10 Mathematics (National Book Foundation) exercise and
  review-exercise questions (worked examples excluded). MCQ parts of the
  review exercises are NOT repeated here (they live in
  class10-math-mcq-ch1-2.js). Graphing / representation-on-plane questions
  are not included (no diagram data yet).

  Repetitive exercises carry 4-6 representative parts rather than every
  part. Answers were worked out and cross-checked with a computer-algebra
  system; the source material itself contains no answers.

  The chapter objects also carry an empty "long" array so long questions
  can be added later without touching the app (chapters merge by id).

  DATA FORMAT (parts-selectable schema):
    short / long: [ { exercise, questions: [ { stem|null, parts: [ {label|null, text, answer, diagram?} ] } ] } ]
  MATH FORMATTING: inline math wrapped in \\( \\) for KaTeX.
*/
var CLASS10_MATH_CH1_2 = {
  "chapters": [
    {
      "id": 1,
      "name": "Complex Numbers",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 1.1",
          "questions": [
            {
              "stem": "Simplify and express in terms of \\(iy\\).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\sqrt{-3}\\)",
                  "answer": "\\(i\\sqrt{3}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(6\\sqrt{-4}\\)",
                  "answer": "\\(12i\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\sqrt{-\\dfrac{4}{9}}\\)",
                  "answer": "\\(\\dfrac{2}{3}i\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(-\\sqrt{-20}\\)",
                  "answer": "\\(-2i\\sqrt{5}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(4-\\sqrt{-60}\\)",
                  "answer": "\\(4-2i\\sqrt{15}\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\sqrt{-8}\\times\\sqrt{-2}\\)",
                  "answer": "\\(-4\\)"
                }
              ]
            },
            {
              "stem": "Simplify:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((7-6i)-(5-6i)\\)",
                  "answer": "\\(2\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\((2+4i)(1+2i)\\)",
                  "answer": "\\(-6 + 8i\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\((1-4i)(2-3i)\\)",
                  "answer": "\\(-10 - 11i\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\((3+2i)^{2}\\)",
                  "answer": "\\(5 + 12i\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\((3-6i)(3+6i)\\)",
                  "answer": "\\(45\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\((1+\\sqrt{2}\\,i)(1-\\sqrt{3}\\,i)\\)",
                  "answer": "\\((1 + \\sqrt{6}) + (- \\sqrt{3} + \\sqrt{2})i\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\((\\sqrt{2}+i)(\\sqrt{2}-i)\\)",
                  "answer": "\\(3\\)"
                }
              ]
            },
            {
              "stem": "Simplify:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(i^{9}\\)",
                  "answer": "\\(i\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(i^{28}\\)",
                  "answer": "\\(1\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\((-i)^{21}\\)",
                  "answer": "\\(-i\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\((3i)^{3}\\)",
                  "answer": "\\(-27i\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\((-2i)^{4}\\)",
                  "answer": "\\(16\\)"
                }
              ]
            },
            {
              "stem": "Simplify in the form of \\(a+bi\\).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(9+i^{6}\\)",
                  "answer": "\\(8\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(i^{4}-13i\\)",
                  "answer": "\\(1 - 13i\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(i^{5}+i^{7}\\)",
                  "answer": "\\(0\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(i^{74}-i^{100}\\)",
                  "answer": "\\(-2\\)"
                }
              ]
            },
            {
              "stem": "Divide and simplify in the form of \\(a+bi\\).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{3}{4-i}\\)",
                  "answer": "\\(\\dfrac{12}{17} + \\dfrac{3}{17}i\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{3i}{6+5i}\\)",
                  "answer": "\\(\\dfrac{15}{61} + \\dfrac{18}{61}i\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\dfrac{3-i\\sqrt{5}}{3+i\\sqrt{5}}\\)",
                  "answer": "\\(\\dfrac{2}{7} - \\dfrac{3 \\sqrt{5}}{7}i\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{4+5i}{4-5i}\\)",
                  "answer": "\\(- \\dfrac{9}{41} + \\dfrac{40}{41}i\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\dfrac{5+i}{1+2i}\\)",
                  "answer": "\\(\\dfrac{7}{5} - \\dfrac{9}{5}i\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\dfrac{a+ib}{a-ib}\\)",
                  "answer": "\\(\\dfrac{a^{2} - b^{2}}{a^{2} + b^{2}} + \\dfrac{2 a b}{a^{2} + b^{2}}i\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(\\dfrac{1+i}{(1-i)^{2}}\\)",
                  "answer": "\\(- \\dfrac{1}{2} + \\dfrac{1}{2}i\\)"
                },
                {
                  "label": "(viii)",
                  "text": "\\(\\dfrac{(2+2i)^{2}}{(1+i)^{2}}\\)",
                  "answer": "\\(4\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 1.2",
          "questions": [
            {
              "stem": "Find the additive inverse of each complex number.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(-4+5i\\)",
                  "answer": "\\(4-5i\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(-3-3i\\)",
                  "answer": "\\(3+3i\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(5-5i\\)",
                  "answer": "\\(-5+5i\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(4i\\)",
                  "answer": "\\(-4i\\)"
                }
              ]
            },
            {
              "stem": "Show that each pair of complex numbers are multiplicative inverse of each other.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(2+3i,\\ \\dfrac{2-3i}{13}\\)",
                  "answer": "\\((2+3i)\\cdot\\dfrac{2-3i}{13}=\\dfrac{4+9}{13}=1\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(5-4i,\\ \\dfrac{5+4i}{41}\\)",
                  "answer": "\\((5-4i)\\cdot\\dfrac{5+4i}{41}=\\dfrac{25+16}{41}=1\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(6+8i,\\ \\dfrac{3-4i}{50}\\)",
                  "answer": "\\((6+8i)\\cdot\\dfrac{3-4i}{50}=\\dfrac{18+32}{50}=1\\)"
                }
              ]
            },
            {
              "stem": "Find the multiplicative inverse of each complex number.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(1+i\\)",
                  "answer": "\\(\\dfrac{1}{2} - \\dfrac{1}{2}i\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(7-3i\\)",
                  "answer": "\\(\\dfrac{7}{58} + \\dfrac{3}{58}i\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(10-12i\\)",
                  "answer": "\\(\\dfrac{5}{122} + \\dfrac{3}{61}i\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{2}{5-i}\\)",
                  "answer": "\\(\\dfrac{5}{2} - \\dfrac{1}{2}i\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\dfrac{-i}{2-3i}\\)",
                  "answer": "\\(3 + 2i\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(a-bi\\)",
                  "answer": "\\(\\dfrac{a+bi}{a^{2}+b^{2}}\\)"
                }
              ]
            },
            {
              "stem": "Find the product of each complex number and its conjugate.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(1-i\\)",
                  "answer": "\\((1-i)(1 + i)=2\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(7i\\)",
                  "answer": "\\((7i)(-7i)=49\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(6-2i\\)",
                  "answer": "\\((6-2i)(6 + 2i)=40\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(-4-11i\\)",
                  "answer": "\\((-4-11i)(-4 + 11i)=137\\)"
                }
              ]
            },
            {
              "stem": "If \\(z_1=1-2i\\) and \\(z_2=2+i\\), show that:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\overline{z_1z_2}=\\bar z_1\\,\\bar z_2\\)",
                  "answer": "\\(z_1z_2=4-3i\\Rightarrow\\overline{z_1z_2}=4+3i;\\quad \\bar z_1\\bar z_2=(1+2i)(2-i)=4+3i.\\ \\text{Hence equal.}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\overline{\\left(\\dfrac{z_1}{z_2}\\right)}=\\dfrac{\\bar z_1}{\\bar z_2}\\)",
                  "answer": "\\(\\dfrac{z_1}{z_2}=-i\\Rightarrow\\overline{\\left(\\dfrac{z_1}{z_2}\\right)}=i;\\quad \\dfrac{1+2i}{2-i}=i.\\ \\text{Hence equal.}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(|z_1|=|-z_1|=|\\bar z_1|=|-\\bar z_1|\\)",
                  "answer": "\\(|1-2i|=|-1+2i|=|1+2i|=|-1-2i|=\\sqrt{5}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(z_2\\,\\bar z_2=|z_2|^{2}\\)",
                  "answer": "\\((2+i)(2-i)=5;\\quad |z_2|^{2}=(\\sqrt{5})^{2}=5.\\ \\text{Hence equal.}\\)"
                }
              ]
            },
            {
              "stem": "If \\(z_1=1-2i\\) and \\(z_2=2+i\\), find:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(|z_1+z_2|\\)",
                  "answer": "\\(|3-i|=\\sqrt{10}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(|z_1z_2|\\)",
                  "answer": "\\(|4-3i|=5\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\left|\\dfrac{z_1}{z_2}\\right|\\)",
                  "answer": "\\(|-i|=1\\)"
                }
              ]
            },
            {
              "stem": "Separate into real and imaginary parts of each complex number.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((\\sqrt{2}-\\sqrt{3}\\,i)^{2}\\)",
                  "answer": "\\(\\text{Real part}=-1,\\ \\text{Imaginary part}=- 2 \\sqrt{6}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{(2+3i)^{2}}{1-3i}\\)",
                  "answer": "\\(\\text{Real part}=- \\dfrac{41}{10},\\ \\text{Imaginary part}=- \\dfrac{3}{10}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\left[\\dfrac12+\\dfrac{\\sqrt{3}}{2}i\\right]^{2}\\)",
                  "answer": "\\(\\text{Real part}=- \\dfrac{1}{2},\\ \\text{Imaginary part}=\\dfrac{\\sqrt{3}}{2}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{1-i}{i^{2}}\\)",
                  "answer": "\\(\\text{Real part}=-1,\\ \\text{Imaginary part}=1\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\dfrac{(1+i)^{2}}{1-2i}\\)",
                  "answer": "\\(\\text{Real part}=- \\dfrac{4}{5},\\ \\text{Imaginary part}=\\dfrac{2}{5}\\)"
                }
              ]
            },
            {
              "stem": "Taking any complex number \\(z=x+iy\\), show that:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(z\\bar z\\text{ is a real number.}\\)",
                  "answer": "\\((x+iy)(x-iy)=x^{2}+y^{2}\\text{, which is real.}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(z^{2}+(\\bar z)^{2}\\text{ is a real number.}\\)",
                  "answer": "\\((x+iy)^{2}+(x-iy)^{2}=2(x^{2}-y^{2})\\text{, which is real.}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\((z-\\bar z)^{2}\\text{ is a real number.}\\)",
                  "answer": "\\((2iy)^{2}=-4y^{2}\\text{, which is real.}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(z^{2}-(\\bar z)^{2}\\text{ is an imaginary number.}\\)",
                  "answer": "\\((x+iy)^{2}-(x-iy)^{2}=4ixy\\text{, which is imaginary.}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 1.3",
          "questions": [
            {
              "stem": "Solve:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{2}+7=0\\)",
                  "answer": "\\(x=\\pm i\\sqrt{7}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(x^{2}+9=0\\)",
                  "answer": "\\(x=\\pm 3i\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(x^{2}+100=0\\)",
                  "answer": "\\(x=\\pm 10i\\)"
                }
              ]
            },
            {
              "stem": "Determine whether the given complex number is a solution of the equation.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(1+2i,\\ \\ x^{2}-2x+5=0\\)",
                  "answer": "\\((1+2i)^{2}-2(1+2i)+5=-3+4i-2-4i+5=0.\\ \\text{Yes, it is a solution.}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(1-2i,\\ \\ x^{2}-2x+5=0\\)",
                  "answer": "\\((1-2i)^{2}-2(1-2i)+5=-3-4i-2+4i+5=0.\\ \\text{Yes, it is a solution.}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(1-i,\\ \\ x^{2}+2x+2=0\\)",
                  "answer": "\\((1-i)^{2}+2(1-i)+2=-2i+2-2i+2=4-4i\\neq0.\\ \\text{No, it is not a solution.}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(i,\\ \\ x^{2}+1=0\\)",
                  "answer": "\\(i^{2}+1=0.\\ \\text{Yes, it is a solution.}\\)"
                }
              ]
            },
            {
              "stem": "Factorize the expressions:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{2}+16\\)",
                  "answer": "\\((x+4i)(x-4i)\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(a^{2}+b^{2}\\)",
                  "answer": "\\((a+ib)(a-ib)\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(x^{2}+25y^{2}\\)",
                  "answer": "\\((x+5iy)(x-5iy)\\)"
                }
              ]
            },
            {
              "stem": "Solve the following system of linear equations.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(z-4w=3i;\\quad 2z+3w=11-5i\\)",
                  "answer": "\\(z=4-i,\\ \\ w=1-i\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(3z+(2+i)w=11-i;\\quad (2-i)z-w=-1+i\\)",
                  "answer": "\\(z=1,\\ \\ w=3-2i\\)"
                }
              ]
            },
            {
              "stem": "In an electrical circuit, the current \\(I\\), the impedance \\(Z\\) and the voltage \\(E\\) are related by \\(E=IZ\\) (where \\(j=\\sqrt{-1}\\)).",
              "parts": [
                {
                  "label": "(a)(i)",
                  "text": "\\(\\text{Find }I\\text{ if }E=(70+220j)\\text{ V},\\ Z=(16+8j)\\text{ }\\Omega\\)",
                  "answer": "\\(I=\\dfrac{E}{Z}=9 + \\dfrac{37}{4}j\\)"
                },
                {
                  "label": "(a)(ii)",
                  "text": "\\(\\text{Find }I\\text{ if }E=(85+110j)\\text{ V},\\ Z=(3-4j)\\text{ }\\Omega\\)",
                  "answer": "\\(I=\\dfrac{E}{Z}=- \\dfrac{37}{5} + \\dfrac{134}{5}j\\)"
                },
                {
                  "label": "(b)(i)",
                  "text": "\\(\\text{Find }Z\\text{ if }E=(-50+100j)\\text{ V},\\ I=(-6-2j)\\text{ A}\\)",
                  "answer": "\\(Z=\\dfrac{E}{I}=\\dfrac{5}{2} - \\dfrac{35}{2}j\\)"
                },
                {
                  "label": "(b)(ii)",
                  "text": "\\(\\text{Find }Z\\text{ if }E=(100+10j)\\text{ V},\\ I=(-8+3j)\\text{ A}\\)",
                  "answer": "\\(Z=\\dfrac{E}{I}=- \\dfrac{770}{73} - \\dfrac{380}{73}j\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Evaluate \\(\\dfrac{1}{z-z^{2}}\\) when \\(z=\\dfrac{1-i}{10}\\).",
                  "answer": "\\(z^{2}=-\\dfrac{i}{50},\\ z-z^{2}=\\dfrac{5-4i}{50}\\ \\Rightarrow\\ \\dfrac{1}{z-z^{2}}=\\dfrac{250}{41} + \\dfrac{200}{41}i\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Misc Ex 1 (Review Exercise 1 — non-MCQ)",
          "questions": [
            {
              "stem": "Simplify:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((-2+4i)-(8-5i)\\)",
                  "answer": "\\(-10 + 9i\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\((-3+4i)+(-7i+4)\\)",
                  "answer": "\\(1 - 3i\\)"
                }
              ]
            },
            {
              "stem": "Find the product:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((x+iy)(2+3i)\\)",
                  "answer": "\\((2x-3y)+(3x+2y)i\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\((-3+6i)(-6+3i)\\)",
                  "answer": "\\(-45i\\)"
                }
              ]
            },
            {
              "stem": "Write in the form of \\(a+bi\\), then find its conjugate:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(3\\sqrt{2}-\\sqrt{-7}\\)",
                  "answer": "\\(3\\sqrt{2}-i\\sqrt{7};\\ \\text{conjugate}=3\\sqrt{2}+i\\sqrt{7}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\sqrt{-2}\\)",
                  "answer": "\\(0+i\\sqrt{2};\\ \\text{conjugate}=-i\\sqrt{2}\\)"
                }
              ]
            },
            {
              "stem": "Find \\(z\\bar z\\):",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(z=-\\dfrac12+i\\)",
                  "answer": "\\(\\dfrac{1}{4}+1=\\dfrac{5}{4}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(z=14-7i\\)",
                  "answer": "\\(196+49=245\\)"
                }
              ]
            },
            {
              "stem": "Simplify:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{-3-i}{-3+i}\\)",
                  "answer": "\\(\\dfrac{4}{5} + \\dfrac{3}{5}i\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{1+3i}{i\\sqrt{5}}\\)",
                  "answer": "\\(\\dfrac{3 \\sqrt{5}}{5} - \\dfrac{\\sqrt{5}}{5}i\\)"
                }
              ]
            },
            {
              "stem": "Factorize:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(2x^{2}+18\\)",
                  "answer": "\\(2(x+3i)(x-3i)\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(-x^{2}-25y^{4}\\)",
                  "answer": "\\(-(x+5iy^{2})(x-5iy^{2})\\)"
                }
              ]
            },
            {
              "stem": "Solve:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(3x^{2}+15=0\\)",
                  "answer": "\\(x=\\pm i\\sqrt{5}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(6y^{2}+36=0\\)",
                  "answer": "\\(y=\\pm i\\sqrt{6}\\)"
                }
              ]
            }
          ]
        }
      ],
      "long": []
    },
    {
      "id": 2,
      "name": "Quadratic Equations",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 2.1",
          "questions": [
            {
              "stem": "Write the following quadratic equation in standard form:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((x+2)(x-3)=5\\)",
                  "answer": "\\(x^{2}-x-11=0\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\((x-5)^{2}-(2x+4)^{2}=7\\)",
                  "answer": "\\(3 x^{2} + 26 x - 2=0\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(x=x(x-1)\\)",
                  "answer": "\\(x^{2}-2x=0\\)"
                }
              ]
            },
            {
              "stem": "Solve the following equations by factoring method.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{2}-2x+1=0\\)",
                  "answer": "\\(\\left(x - 1\\right)^{2}=0\\ \\Rightarrow\\ x=1\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(x^{2}-7x-8=0\\)",
                  "answer": "\\(\\left(x - 8\\right) \\left(x + 1\\right)=0\\ \\Rightarrow\\ x=-1, 8\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(x^{2}-4x+4=(2x-7)^{2}\\)",
                  "answer": "\\(- 3 \\left(x - 5\\right) \\left(x - 3\\right)=0\\ \\Rightarrow\\ x=3, 5\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\left(2x+\\dfrac{7}{4}\\right)^{2}=\\dfrac{48x^{2}+529}{16}\\)",
                  "answer": "\\(\\left(x - 3\\right) \\left(x + 10\\right)=0\\ \\Rightarrow\\ x=-10, 3\\)"
                }
              ]
            },
            {
              "stem": "Solve the following equations by completing the square method:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{2}+4x-32=0\\)",
                  "answer": "\\(\\{-8, 4\\}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(x^{2}+6x-9=0\\)",
                  "answer": "\\(\\{- 3 \\sqrt{2} - 3, -3 + 3 \\sqrt{2}\\}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(3x^{2}+12x+8=0\\)",
                  "answer": "\\(\\{-2 - \\dfrac{2 \\sqrt{3}}{3}, -2 + \\dfrac{2 \\sqrt{3}}{3}\\}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(x^{2}+x+1=0\\)",
                  "answer": "\\(\\{- \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i, - \\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(4x^{2}-8x-5=0\\)",
                  "answer": "\\(\\{- \\dfrac{1}{2}, \\dfrac{5}{2}\\}\\)"
                }
              ]
            },
            {
              "stem": "Solve the following equations by quadratic formula:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(2x^{2}+5x+1=0\\)",
                  "answer": "\\(\\{- \\dfrac{5}{4} - \\dfrac{\\sqrt{17}}{4}, - \\dfrac{5}{4} + \\dfrac{\\sqrt{17}}{4}\\}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(x^{2}-23x-24=0\\)",
                  "answer": "\\(\\{-1, 24\\}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\((x+1)^{2}=(2x-1)^{2}\\)",
                  "answer": "\\(\\{0, 2\\}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{x+1}{2}-\\dfrac{x(x+2)}{3}=0\\)",
                  "answer": "\\(\\{- \\dfrac{3}{2}, 1\\}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\((x-2)(x-6)=(2x+1)(x+1)\\)",
                  "answer": "\\(\\{- \\dfrac{\\sqrt{165}}{2} - \\dfrac{11}{2}, - \\dfrac{11}{2} + \\dfrac{\\sqrt{165}}{2}\\}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Explain each term: (i) Solution, (ii) Root, (iii) Zero of a function, (iv) \\(x\\)-intercept.",
                  "answer": "(i) A solution of an equation is a value of the variable that makes the equation true. (ii) A root is another name for a solution of the equation. (iii) A zero of a function \\(f\\) is a value \\(x\\) for which \\(f(x)=0\\). (iv) The \\(x\\)-intercept is the \\(x\\)-coordinate of a point where the graph meets the \\(x\\)-axis; for a function it is a zero of the function."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Can a quadratic equation have more than two solutions? Why or why not?",
                  "answer": "No. A quadratic equation is of degree 2, and a polynomial equation of degree \\(n\\) has at most \\(n\\) roots, so a quadratic has at most two solutions (two distinct real, one repeated real, or two complex conjugate roots)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Plans for a rectangular ice-skating rink that is 30 m by 60 m have to be revised to double the area by adding strips of the same width to a side and an end of the area to form a rectangle. Find the width of the strips. What are the dimensions of the playground now?",
                  "answer": "\\((30+x)(60+x)=3600\\Rightarrow x^{2}+90x-1800=0\\Rightarrow x=-45+15\\sqrt{17}\\approx16.85\\text{ m};\\ \\text{new dimensions}\\approx46.85\\text{ m}\\times76.85\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If a car has an initial speed of 20 m/s and a constant acceleration of 2 m/s\\(^2\\), determine the time it takes to travel 145 m. (Use \\(S=v_it+\\tfrac12at^2\\))",
                  "answer": "\\(145=20t+t^{2}\\Rightarrow t^{2}+20t-145=0\\Rightarrow t=-10+7\\sqrt{5}\\approx5.65\\text{ s}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 2.2",
          "questions": [
            {
              "stem": "Reduce the following equations to quadratic form using suitable substitution.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(ax^{4}+bx^{2}+c=0\\)",
                  "answer": "\\(\\text{Let }y=x^{2}:\\ ay^{2}+by+c=0\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(9x^{6}-3x^{3}+7=0\\)",
                  "answer": "\\(\\text{Let }y=x^{3}:\\ 9y^{2}-3y+7=0\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\((x+1)^{2}+\\dfrac{3}{(x+1)^{2}}=4\\)",
                  "answer": "\\(\\text{Let }y=(x+1)^{2}:\\ y^{2}-4y+3=0\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(8\\times4^{x}-7\\times2^{x}-1=0\\)",
                  "answer": "\\(\\text{Let }y=2^{x}:\\ 8y^{2}-7y-1=0\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\((x-1)(x-2)(x+3)(x-6)=6\\)",
                  "answer": "\\(\\text{Group }(x-1)(x-2)=x^{2}-3x+2,\\ (x+3)(x-6)=x^{2}-3x-18.\\ \\text{Let }y=x^{2}-3x:\\ (y+2)(y-18)=6\\Rightarrow y^{2}-16y-42=0\\)"
                }
              ]
            },
            {
              "stem": "Solve the following equations by reducing them to quadratic form.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{4}-20x^{2}+64=0\\)",
                  "answer": "\\(\\{-4, -2, 2, 4\\}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(x^{4}+16x^{2}-225=0\\)",
                  "answer": "\\(\\{-3, 3, -5i, 5i\\}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(3x^{2}+\\dfrac{4}{x^{2}}=7\\)",
                  "answer": "\\(\\{- \\dfrac{2 \\sqrt{3}}{3}, -1, 1, \\dfrac{2 \\sqrt{3}}{3}\\}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(5(x+1)+\\dfrac{3}{x+1}=8\\)",
                  "answer": "\\(\\{- \\dfrac{2}{5}, 0\\}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(2^{2x}-34\\times2^{x}+64=0\\)",
                  "answer": "\\(\\text{Let }y=2^{x}:\\ y^{2}-34y+64=0\\Rightarrow y=2,\\,32\\Rightarrow x=1,\\,5\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(3^{2x}-12\\times3^{x}+27=0\\)",
                  "answer": "\\(\\text{Let }y=3^{x}:\\ y^{2}-12y+27=0\\Rightarrow y=3,\\,9\\Rightarrow x=1,\\,2\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(x(x-1)(x+2)(x+3)=40\\)",
                  "answer": "\\(\\text{Let }y=x^{2}+2x:\\ y(y-3)=40\\Rightarrow y^{2}-3y-40=0\\Rightarrow y=8,\\,-5.\\ x^{2}+2x=8\\Rightarrow x=2,\\,-4;\\ x^{2}+2x=-5\\Rightarrow x=-1\\pm2i\\)"
                }
              ]
            },
            {
              "stem": "Solve the following equations by factoring without using substitution.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(2x^{4}-3x^{2}+1=0\\)",
                  "answer": "\\((2x^{2}-1)(x^{2}-1)=0\\Rightarrow x=\\pm\\dfrac{1}{\\sqrt{2}},\\ \\pm1\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(x^{2}+\\dfrac{1}{x^{2}}=2\\)",
                  "answer": "\\(x^{4}-2x^{2}+1=0\\Rightarrow(x^{2}-1)^{2}=0\\Rightarrow x=\\pm1\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(4\\times2^{2x}-4\\times2^{x}+1=0\\)",
                  "answer": "\\((2\\cdot2^{x}-1)^{2}=0\\Rightarrow2^{x}=\\dfrac12\\Rightarrow x=-1\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Write two examples of equations that are not quadratic, but can be written in quadratic form.",
                  "answer": "\\(x^{4}-5x^{2}+4=0\\ (\\text{put }y=x^{2})\\quad\\text{and}\\quad 2^{2x}-3\\cdot2^{x}+2=0\\ (\\text{put }y=2^{x}).\\) (Other valid examples are accepted.)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "How would you solve the equation \\((y-4)^{2}-7(y-4)=-6\\)? Write an explanation and then solve the equation.",
                  "answer": "\\(\\text{Substitute }u=y-4:\\ u^{2}-7u+6=0\\Rightarrow(u-1)(u-6)=0\\Rightarrow u=1,6.\\ \\text{So }y=5\\text{ or }y=10.\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Solve \\(y^{3}=125\\).",
                  "answer": "\\(y^{3}-125=0\\Rightarrow(y-5)(y^{2}+5y+25)=0\\Rightarrow y=5,\\ y=\\dfrac{-5\\pm5\\sqrt{3}\\,i}{2}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 2.3",
          "questions": [
            {
              "stem": "Find the discriminant of the following quadratic equations.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{2}+6x-27=0\\)",
                  "answer": "\\(b^{2}-4ac=144\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(x^{2}-x-12=0\\)",
                  "answer": "\\(b^{2}-4ac=49\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(8x^{2}+2x+1=0\\)",
                  "answer": "\\(b^{2}-4ac=-28\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(12x^{2}-11x-15=0\\)",
                  "answer": "\\(b^{2}-4ac=841\\)"
                }
              ]
            },
            {
              "stem": "Discuss the nature of roots of the following quadratic equations.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{2}-2x-15=0\\)",
                  "answer": "\\(D=64\\) — roots are real, rational and unequal."
                },
                {
                  "label": "(ii)",
                  "text": "\\(x^{2}+3x-4=0\\)",
                  "answer": "\\(D=25\\) — roots are real, rational and unequal."
                },
                {
                  "label": "(iii)",
                  "text": "\\(12x^{2}+x-20=0\\)",
                  "answer": "\\(D=961\\) — roots are real, rational and unequal."
                },
                {
                  "label": "(iv)",
                  "text": "\\(x^{2}+2x+8=0\\)",
                  "answer": "\\(D=-28\\) — roots are imaginary (complex conjugate) and unequal."
                },
                {
                  "label": "(v)",
                  "text": "\\(x^{2}+3x-9=0\\)",
                  "answer": "\\(D=45\\) — roots are real, irrational and unequal."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "For what value of \\(k\\) is \\(9x^{2}-kx+16=0\\) a perfect square?",
                  "answer": "\\(\\text{Perfect square}\\Rightarrow D=0:\\ k^{2}-4(9)(16)=0\\Rightarrow k^{2}=576\\Rightarrow k=\\pm24\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If the roots of \\(x^{2}+kx+9=0\\) are equal, find \\(k\\).",
                  "answer": "\\(D=0:\\ k^{2}-36=0\\Rightarrow k=\\pm6\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Show that the roots of \\(2x^{2}+(mx-1)^{2}=3\\) are equal if \\(3m^{2}+4=0\\).",
                  "answer": "\\(\\text{Equation: }(m^{2}+2)x^{2}-2mx-2=0.\\ D=4m^{2}+8(m^{2}+2)=12m^{2}+16=4(3m^{2}+4).\\ \\text{So }D=0\\text{ (roots equal) if }3m^{2}+4=0.\\)"
                }
              ]
            },
            {
              "stem": "Find the value of \\(m\\) when the roots of the following quadratic equations are equal.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{2}-6x+m=0\\)",
                  "answer": "\\(D=36-4m=0\\Rightarrow m=9\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(m^{2}x^{2}+(2m+1)x+1=0\\)",
                  "answer": "\\(D=(2m+1)^{2}-4m^{2}=4m+1=0\\Rightarrow m=-\\dfrac14\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\((m+3)x^{2}+(m+1)x+m+1=0\\)",
                  "answer": "\\(D=(m+1)^{2}-4(m+3)(m+1)=(m+1)(-3m-11)=0\\Rightarrow m=-1\\text{ or }m=-\\dfrac{11}{3}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Show that the roots of \\((a^{2}+b^{2})x^{2}+2(ac+bd)x+c^{2}+d^{2}=0\\) are imaginary. Moreover, show that it has repeated roots if \\(ad=bc\\).",
                  "answer": "\\(D=4(ac+bd)^{2}-4(a^{2}+b^{2})(c^{2}+d^{2})=-4(ad-bc)^{2}.\\ \\text{This is negative when }ad\\neq bc\\text{ (imaginary roots) and }0\\text{ when }ad=bc\\text{ (repeated roots).}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Show that the roots of \\((ax+c)^{2}=4bx\\) will be equal if \\(b=ac\\).",
                  "answer": "\\(a^{2}x^{2}+(2ac-4b)x+c^{2}=0.\\ D=(2ac-4b)^{2}-4a^{2}c^{2}=16b^{2}-16abc=16b(b-ac).\\ \\text{So }D=0\\text{ if }b=ac.\\)"
                }
              ]
            },
            {
              "stem": "Show that the roots of the following equations are real.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(bx^{2}+ax+a-b=0\\)",
                  "answer": "\\(D=a^{2}-4b(a-b)=a^{2}-4ab+4b^{2}=(a-2b)^{2}\\ge0\\text{, so the roots are real.}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\((a+b)x^{2}-ax-b=0\\)",
                  "answer": "\\(D=a^{2}+4b(a+b)=a^{2}+4ab+4b^{2}=(a+2b)^{2}\\ge0\\text{, so the roots are real.}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 2.4",
          "questions": [
            {
              "stem": "Find the sum and product of the roots of the quadratic equation.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x^{2}-5x+2=0\\)",
                  "answer": "\\(\\text{Sum}=-\\dfrac{b}{a}=5,\\quad \\text{Product}=\\dfrac{c}{a}=2\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(-4x^{2}-6x-2=0\\)",
                  "answer": "\\(\\text{Sum}=-\\dfrac{b}{a}=- \\dfrac{3}{2},\\quad \\text{Product}=\\dfrac{c}{a}=\\dfrac{1}{2}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(5x^{2}-2x+2=0\\)",
                  "answer": "\\(\\text{Sum}=-\\dfrac{b}{a}=\\dfrac{2}{5},\\quad \\text{Product}=\\dfrac{c}{a}=\\dfrac{2}{5}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(16y^{2}-17y-12=0\\)",
                  "answer": "\\(\\text{Sum}=-\\dfrac{b}{a}=\\dfrac{17}{16},\\quad \\text{Product}=\\dfrac{c}{a}=- \\dfrac{3}{4}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(0.3x^{2}-7.7x+1.8=0\\)",
                  "answer": "\\(\\text{Sum}=-\\dfrac{b}{a}=\\dfrac{77}{3},\\quad \\text{Product}=\\dfrac{c}{a}=6\\)"
                }
              ]
            },
            {
              "stem": "Form a quadratic equation with roots:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(1,\\ -\\dfrac{8}{3}\\)",
                  "answer": "\\(3 x^{2} + 5 x - 8=0\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\sqrt{3},\\ 2\\sqrt{3}\\)",
                  "answer": "\\(x^{2}-3\\sqrt{3}\\,x+6=0\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(2+\\sqrt{3},\\ 2-\\sqrt{3}\\)",
                  "answer": "\\(x^{2}-4x+1=0\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(5i,\\ -5i\\)",
                  "answer": "\\(x^{2}+25=0\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(7+2i,\\ 7-2i\\)",
                  "answer": "\\(x^{2}-14x+53=0\\)"
                }
              ]
            },
            {
              "stem": "If \\(S_1,S_2\\) are the roots of \\(3x^{2}-2x+4=0\\), find the value of:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac{1}{S_1^{2}}+\\dfrac{1}{S_2^{2}}\\)",
                  "answer": "\\(- \\dfrac{5}{4}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(S_1^{2}+S_2^{2}\\)",
                  "answer": "\\(- \\dfrac{20}{9}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\dfrac{1}{S_1}+\\dfrac{1}{S_2}\\)",
                  "answer": "\\(\\dfrac{1}{2}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{S_1}{S_2}+\\dfrac{S_2}{S_1}\\)",
                  "answer": "\\(- \\dfrac{5}{3}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(S_1^{3}S_2+S_1S_2^{3}\\)",
                  "answer": "\\(- \\dfrac{80}{27}\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\((S_1-3)(S_2-3)\\)",
                  "answer": "\\(\\dfrac{25}{3}\\)"
                }
              ]
            },
            {
              "stem": "If \\(S_1,S_2\\) are the roots of \\(7x^{2}+10x+7=0\\), form the equations whose roots are:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(S_1^{2},\\ S_2^{2}\\)",
                  "answer": "\\(49 x^{2} - 2 x + 49=0\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac{1}{S_1},\\ \\dfrac{1}{S_2}\\)",
                  "answer": "\\(7 x^{2} + 10 x + 7=0\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(2S_1+1,\\ 2S_2+1\\)",
                  "answer": "\\(7 x^{2} + 6 x + 15=0\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\dfrac{S_1}{S_2},\\ \\dfrac{S_2}{S_1}\\)",
                  "answer": "\\(49 x^{2} - 2 x + 49=0\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(S_1+S_2,\\ \\dfrac{1}{S_1}+\\dfrac{1}{S_2}\\)",
                  "answer": "\\(49 x^{2} + 140 x + 100=0\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(S_1^{2}+1,\\ S_2^{2}+1\\)",
                  "answer": "\\(49 x^{2} - 100 x + 100=0\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(S_1,S_2\\) are the roots of \\(x^{2}+6x+3=0\\), form the equation whose roots are \\((S_1+S_2)^{2},\\ (S_1-S_2)^{2}\\).",
                  "answer": "\\(x^{2} - 60 x + 864=0\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(S_1,S_2\\) are the roots of \\(2x^{2}+6x-3=0\\), form the equation whose roots are \\(S_1-\\dfrac{3}{S_2^{2}},\\ S_2-\\dfrac{3}{S_1^{2}}\\).",
                  "answer": "\\(2 x^{2} + 38 x - 7=0\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find \\(k\\) if \\(S_1\\) and \\(S_1-5\\) are the roots of \\(x^{2}-3kx+5=0\\).",
                  "answer": "\\(\\text{Sum: }2S_1-5=3k\\Rightarrow S_1=\\dfrac{3k+5}{2};\\ \\text{Product: }S_1(S_1-5)=5.\\ \\text{So }\\dfrac{(3k+5)(3k-5)}{4}=5\\Rightarrow9k^{2}=45\\Rightarrow k=\\pm\\sqrt{5}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find \\(k\\) such that 3 is a root of \\(x^{2}+kx-21=0\\).",
                  "answer": "\\(9+3k-21=0\\Rightarrow k=4\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 2.5",
          "questions": [
            {
              "stem": "Solve the following simultaneous equations:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(2x+y=1;\\quad x^{2}+y^{2}=10\\)",
                  "answer": "\\((-1,\\ 3),\\ (\\dfrac{9}{5},\\ - \\dfrac{13}{5})\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(3x-2y=1;\\quad x^{2}+xy-y^{2}=1\\)",
                  "answer": "\\((-5,\\ -8),\\ (1,\\ 1)\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(3x+y+3=0;\\quad(x+1)^{2}-4(x+1)-6=y\\)",
                  "answer": "\\((-3,\\ 6),\\ (2,\\ -9)\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\((x+3)^{2}-(y-2)^{2}=10;\\quad x+y=4\\)",
                  "answer": "\\((\\dfrac{1}{2},\\ \\dfrac{7}{2})\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(4x^{2}+4y^{2}=65;\\quad 6x-2y=5\\)",
                  "answer": "\\((- \\dfrac{1}{2},\\ -4),\\ (2,\\ \\dfrac{7}{2})\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(x^{2}+y=0;\\quad x+y=-2\\)",
                  "answer": "\\((-1,\\ -1),\\ (2,\\ -4)\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(x^{2}+3y^{2}=14;\\quad3x^{2}+y^{2}=6\\)",
                  "answer": "\\((- \\dfrac{\\sqrt{2}}{2},\\ - \\dfrac{3 \\sqrt{2}}{2}),\\ (- \\dfrac{\\sqrt{2}}{2},\\ \\dfrac{3 \\sqrt{2}}{2}),\\ (\\dfrac{\\sqrt{2}}{2},\\ - \\dfrac{3 \\sqrt{2}}{2}),\\ (\\dfrac{\\sqrt{2}}{2},\\ \\dfrac{3 \\sqrt{2}}{2})\\)"
                },
                {
                  "label": "(viii)",
                  "text": "\\(2x^{2}-5y^{2}=8;\\quad x^{2}+2y^{2}=13\\)",
                  "answer": "\\((-3,\\ - \\sqrt{2}),\\ (-3,\\ \\sqrt{2}),\\ (3,\\ - \\sqrt{2}),\\ (3,\\ \\sqrt{2})\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 2.6 (word problems)",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The product of two consecutive positive even numbers is 120. Find the numbers.",
                  "answer": "\\(n(n+2)=120\\Rightarrow n^{2}+2n-120=0\\Rightarrow n=10.\\ \\text{Numbers: }10,\\ 12\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The difference of cubes of two consecutive positive numbers is 91. Find them.",
                  "answer": "\\((n+1)^{3}-n^{3}=91\\Rightarrow n^{2}+n-30=0\\Rightarrow n=5.\\ \\text{Numbers: }5,\\ 6\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sum of the Cartesian coordinates of a point is 9 and the sum of their squares is 45. Find the coordinates of the point.",
                  "answer": "\\(x+y=9,\\ x^{2}+y^{2}=45\\Rightarrow xy=18\\Rightarrow t^{2}-9t+18=0\\Rightarrow t=3,6.\\ \\text{Point: }(3,6)\\text{ or }(6,3)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sum of two numbers is 11 and the product is 30. Find the numbers.",
                  "answer": "\\(t^{2}-11t+30=0\\Rightarrow t=5,6.\\ \\text{Numbers: }5,\\ 6\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sum of the squares of two consecutive positive odd integers is 34. Find the integers.",
                  "answer": "\\(n^{2}+(n+2)^{2}=34\\Rightarrow n^{2}+2n-15=0\\Rightarrow n=3.\\ \\text{Integers: }3,\\ 5\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sum of ages of a father and his son is 50 years. Ten years ago, the father was 9 times as old as his son. Find the present ages of the father and son.",
                  "answer": "\\(f+s=50,\\ f-10=9(s-10)\\Rightarrow10s=130\\Rightarrow s=13,\\ f=37.\\ \\text{Father: }37\\text{ years, son: }13\\text{ years}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A two-digit number is decreased by 45 when the digits are reversed. If the sum of the digits is 11, find the number.",
                  "answer": "\\(a+b=11,\\ (10a+b)-(10b+a)=45\\Rightarrow a-b=5\\Rightarrow a=8,\\ b=3.\\ \\text{Number}=83\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sum of two numbers is 20. Find the numbers if the sum of the first number and the square of the other is 40.",
                  "answer": "\\(x+y=20,\\ x+y^{2}=40\\Rightarrow y^{2}-y-20=0\\Rightarrow y=5\\text{ or }-4.\\ \\text{Numbers: }15,\\ 5\\ \\text{ or }\\ 24,\\ -4\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The reciprocal of the sum of reciprocals of two numbers is \\(\\dfrac{12}{5}\\). Find the numbers if their sum is 10.",
                  "answer": "\\(\\dfrac{ab}{a+b}=\\dfrac{12}{5},\\ a+b=10\\Rightarrow ab=24\\Rightarrow t^{2}-10t+24=0.\\ \\text{Numbers: }4,\\ 6\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A group of 1025 students form two square patterns during morning assembly. One square pattern has sides 5 students longer than the other. Find the number of students in each pattern.",
                  "answer": "\\(a^{2}+(a+5)^{2}=1025\\Rightarrow a^{2}+5a-500=0\\Rightarrow a=20.\\ \\text{Patterns: }20^{2}=400\\text{ and }25^{2}=625\\text{ students}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sum of squares of two positive consecutive numbers is 145. The difference of their squares is 17. Find the numbers.",
                  "answer": "\\(n^{2}+(n+1)^{2}=145\\Rightarrow n^{2}+n-72=0\\Rightarrow n=8.\\ \\text{Numbers: }8,\\ 9\\ (\\text{check: }81-64=17)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A ball is thrown upwards; its height (in metres) after \\(t\\) seconds is modelled by \\(h(t)=-5t^{2}+20t+2\\). Find the time when the ball hits the ground.",
                  "answer": "\\(-5t^{2}+20t+2=0\\Rightarrow t=\\dfrac{20\\pm\\sqrt{440}}{10}=2\\pm\\dfrac{\\sqrt{110}}{5}.\\ \\text{Taking the positive root: }t\\approx4.10\\text{ s}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The stopping distance \\(d(x)\\) (in metres) of a car travelling at \\(x\\) km/h is modelled by \\(d(x)=0.05x^{2}+0.4x\\). If the stopping distance is 30 metres, find the speed of the car.",
                  "answer": "\\(0.05x^{2}+0.4x=30\\Rightarrow x^{2}+8x-600=0\\Rightarrow x=-4+2\\sqrt{154}\\approx20.8\\text{ km/h}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A valuable stamp is 4 cm wide and 5 cm long. The stamp is to be mounted on a sheet of paper that is \\(5\\tfrac12\\) times the area of the stamp. Determine the dimensions of the paper that will ensure a uniform border around the stamp.",
                  "answer": "\\((4+2w)(5+2w)=110\\Rightarrow2w^{2}+9w-45=0\\Rightarrow w=3.\\ \\text{Paper: }10\\text{ cm}\\times11\\text{ cm}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Misc Ex 2 (Review Exercise 2 — non-MCQ)",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find all roots of \\(8x^{6}-7x^{3}-1=0\\).",
                  "answer": "\\(\\text{Let }y=x^{3}:\\ 8y^{2}-7y-1=0\\Rightarrow y=1,\\ -\\dfrac18.\\ \\ x^{3}=1\\Rightarrow x=1,\\ \\dfrac{-1\\pm\\sqrt{3}\\,i}{2};\\ \\ x^{3}=-\\dfrac18\\Rightarrow x=-\\dfrac12,\\ \\dfrac{1\\pm\\sqrt{3}\\,i}{4}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "For what values of \\(m\\) are the roots of \\((m-1)x^{2}+2mx+m+3=0\\) equal? Also solve the equation.",
                  "answer": "\\(D=4m^{2}-4(m-1)(m+3)=12-8m=0\\Rightarrow m=\\dfrac32.\\ \\text{Equation: }\\dfrac12x^{2}+3x+\\dfrac92=0\\Rightarrow(x+3)^{2}=0\\Rightarrow x=-3\\ (\\text{twice})\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(S_1,S_2\\) are the roots of \\(ax^{2}+bx+c=0\\), find the value of \\((S_1-3)(S_2-3)\\).",
                  "answer": "\\(S_1S_2-3(S_1+S_2)+9=\\dfrac{c}{a}+\\dfrac{3b}{a}+9=\\dfrac{c+3b+9a}{a}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If the roots of \\(25x^{2}-5ax-b=0\\) are equal, find the values of \\(a\\) and \\(b\\) if \\(a^{2}+b=6\\).",
                  "answer": "\\(D=25a^{2}+100b=0\\Rightarrow a^{2}+4b=0.\\ \\text{With }a^{2}+b=6:\\ 3b=-6\\Rightarrow b=-2,\\ a^{2}=8\\Rightarrow a=\\pm2\\sqrt{2}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A rectangular chocolate box has volume \\(x^{3}+2x^{2}-5x-6\\). Find the length and width of the box if its height is \\(x-2\\).",
                  "answer": "\\(\\dfrac{x^{3}+2x^{2}-5x-6}{x-2}=x^{2}+4x+3=(x+1)(x+3).\\ \\text{Length}=x+3,\\ \\text{width}=x+1\\)"
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
