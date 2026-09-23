/*
  CLASS 11 — MATH — SHORT & LONG QUESTIONS — CHAPTERS 1 TO 2
  ------------------------------------------------------------
  Chapter 1: Complex Numbers
  Chapter 2: Matrices and Determinants

  Source: curated "Important Questions" sheets (FBISE pattern) for each
  chapter. Short/Long grouped by exercise, matching the sheets' own
  Short Questions / Long Questions split. mcq stays empty here — MCQs
  for these chapters already live in class11-math-mcq-ch1-2.js.

  DATA FORMAT (same as class9 files):
    short / long: [ { exercise: "Ex X.Y (note)", questions: [ {text, answer}, ... ] }, ... ]

  MATH FORMATTING: inline math wrapped in \\( \\) for KaTeX.
*/
var CLASS11_MATH_CH1_2 = {
  chapters: [
    {
      id: 1,
      name: "Complex Numbers",
      mcq: [],
      short: [
        {
          exercise: "Ex 1.3 (Q1 — factorize into linear factors)",
          questions: [
            { text: "Factorize into linear factors: \\(z^{2}+169\\)", answer: "\\((z+13i)(z-13i)\\)" },
            { text: "Factorize into linear factors: \\(2z^{3}+3z^{2}-10z-15\\)", answer: "\\((2z+3)(z-\\sqrt5)(z+\\sqrt5)\\)" },
            { text: "Factorize into linear factors: \\(z^{3}-7z+6\\)", answer: "\\((z-1)(z-2)(z+3)\\)" },
            { text: "Factorize into linear factors: \\(z^{2}-7z-8\\)", answer: "\\((z-8)(z+1)\\)" },
            { text: "Factorize into linear factors: \\(4z^{2}-7z-11\\)", answer: "\\((4z-11)(z+1)\\)" }
          ]
        },
        {
          exercise: "Ex 1.3 (Q2 — solve by completing the square)",
          questions: [
            { text: "Solve by completing the square: \\(-\\dfrac12 z^{2}-5z+2=0\\)", answer: "\\(z=-5\\pm\\sqrt{29}\\)" },
            { text: "Solve by completing the square: \\(4z^{2}+5z=14\\)", answer: "\\(z=\\dfrac{-5\\pm\\sqrt{249}}{8}\\)" }
          ]
        },
        {
          exercise: "Ex 1.3 (Q3 — solve the quadratic equation)",
          questions: [
            { text: "Solve: \\(\\dfrac13 z^{2}+2z-16=0\\)", answer: "\\(z=-3\\pm\\sqrt{57}\\)" },
            { text: "Solve: \\(z^{2}-9z+11=0\\)", answer: "\\(z=\\dfrac{9\\pm\\sqrt{37}}{2}\\)" }
          ]
        },
        {
          exercise: "Ex 1.4 (Q4 — write in polar form)",
          questions: [
            { text: "Write in polar form: \\(3-i\\sqrt3\\)", answer: "\\(2\\sqrt3\\left[\\cos\\left(-\\dfrac{\\pi}{6}\\right)+i\\sin\\left(-\\dfrac{\\pi}{6}\\right)\\right]\\)" },
            { text: "Write in polar form: \\(\\dfrac{i-1}{\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}}\\)", answer: "\\(\\sqrt2\\left[\\cos\\dfrac{5\\pi}{12}+i\\sin\\dfrac{5\\pi}{12}\\right]\\)" }
          ]
        },
        {
          exercise: "Ex 1.4 (Q5 — write in rectangular form)",
          questions: [
            { text: "Write in rectangular form: \\(\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)\\)", answer: "\\(i\\)" },
            { text: "Write in rectangular form: \\(\\left(\\cos\\frac{\\pi}{6}-i\\sin\\frac{\\pi}{6}\\right)^{2}\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)\\)", answer: "\\(-\\dfrac{i}{2}\\)" }
          ]
        },
        {
          exercise: "Ex 1.4 (Q6 — if a product of complex numbers equals \\(a+ib\\))",
          questions: [
            {
              text: "If \\((x_1+iy_1)(x_2+iy_2)\\cdots(x_n+iy_n)=a+ib\\), show that (i) \\((x_1^{2}+y_1^{2})(x_2^{2}+y_2^{2})\\cdots(x_n^{2}+y_n^{2})=a^{2}+b^{2}\\), and (ii) \\(\\sum_{r=1}^{n}\\tan^{-1}\\left(\\dfrac{y_r}{x_r}\\right)=\\tan^{-1}\\left(\\dfrac{b}{a}\\right)+2k\\pi,\\ k\\in\\mathbb{Z}\\)",
              answer: "Both true: (i) follows by equating moduli of both sides; (ii) follows by equating arguments (mod \\(2\\pi\\))."
            }
          ]
        },
        {
          exercise: "Ex 1.4 (Q7 — write in algebraic form)",
          questions: [
            { text: "Write in algebraic form: \\(4\\left(\\cos\\dfrac{5\\pi}{6}+i\\sin\\dfrac{5\\pi}{6}\\right)\\)", answer: "\\(-2\\sqrt3+2i\\)" },
            { text: "Write in algebraic form: \\(2\\left(\\cos\\dfrac{\\pi}{6}+i\\sin\\dfrac{\\pi}{6}\\right)\\)", answer: "\\(\\sqrt3+i\\)" },
            { text: "Write in algebraic form: \\(5e^{i\\pi/3}\\)", answer: "\\(\\dfrac52+\\dfrac{5\\sqrt3}{2}i\\)" }
          ]
        },
        {
          exercise: "Ex 1.4 (Q8 — convert to Cartesian form)",
          questions: [
            { text: "Convert to Cartesian form: \\(z\\bar z=4|e^{i\\theta}|\\)", answer: "\\(x^{2}+y^{2}=4\\)" },
            { text: "Convert to Cartesian form: \\(\\arg\\left(\\dfrac{1-iz}{1-z}\\right)=\\dfrac{\\pi}{4},\\ z\\ne i\\)", answer: "\\(x^{2}+y^{2}=1\\)" },
            { text: "Convert to Cartesian form: \\(\\dfrac12\\arg(z-i)=\\dfrac{\\pi}{3}-\\dfrac12\\arg(z+i)\\)", answer: "\\(2xy+\\sqrt3\\,(x^{2}-y^{2}+1)=0\\)" }
          ]
        },
        {
          exercise: "Ex 1.4 (Q9 — application: particle position)",
          questions: [
            { text: "Calculate the position of a particle from the mean position when the amplitude is \\(0.004\\) mm and the angle is \\(\\dfrac{\\pi}{6}\\).", answer: "\\(x=\\dfrac{\\sqrt3}{500}+\\dfrac{1}{500}i\\) mm" }
          ]
        },
        {
          exercise: "Ex 1.4 (Q10 — application: impedance)",
          questions: [
            { text: "Find the impedance \\(Z\\) for \\(E=(100+10i)\\) volts and \\(I=(-8+3i)\\) amps.", answer: "\\(Z=-\\dfrac{770}{73}-\\dfrac{380}{73}i\\ \\Omega\\)" }
          ]
        },
        {
          exercise: "Review Exercise (Q11 — choose/fill the correct option)",
          questions: [
            { text: "(a) Every real number is also a ___ number. (b) The magnitude of \\(z\\) is the distance of \\(z\\) from ___.", answer: "(a) complex; (b) \\((0,0)\\)" },
            { text: "(c) If \\(z=3+4i\\), then \\(z^{-1}=\\) ___. (d) \\((\\sqrt{-25})(\\sqrt{-4})=\\) ___.", answer: "(c) \\(\\left(\\dfrac{3}{25},\\dfrac{-4}{25}\\right)\\); (d) \\(-10\\)" },
            { text: "(e) The least positive \\(n\\) if \\(\\left(\\dfrac{1+i}{1-i}\\right)^{n}=1\\) is ___.", answer: "\\(n=4\\)" }
          ]
        },
        {
          exercise: "Review Exercise (Q12–Q14)",
          questions: [
            { text: "Evaluate: \\(i^{2}+i^{4}+i^{6}+\\cdots+i^{100}\\)", answer: "\\(0\\)" },
            { text: "Factorize: \\(3x^{2}+108\\)", answer: "\\(3(x+6i)(x-6i)\\)" },
            { text: "Solve by completing the square: \\(2z^{2}-11z+16=0\\)", answer: "\\(z=\\dfrac{11\\pm i\\sqrt7}{4}\\)" }
          ]
        }
      ],
      long: [
        {
          exercise: "Ex 1.3, Q.4 (solve simultaneous linear equations with complex coefficients)",
          questions: [
            {
              text: "Solve: \\((1-i)z+(1+i)\\omega=3\\); \\(2z-(2+5i)\\omega=2+3i\\)",
              answer: "\\(z=\\dfrac{145}{106}+\\dfrac{155}{106}i,\\ \\omega=\\dfrac{2}{53}-\\dfrac{7}{53}i\\)"
            },
            {
              text: "Solve: \\(2iz+(3-2i)\\omega=1+i\\); \\((1-2i)z+(3+2i)\\omega=5+6i\\)",
              answer: "\\(z=\\dfrac{36}{205}+\\dfrac{373}{205}i,\\ \\omega=\\dfrac{199}{205}+\\dfrac{177}{205}i\\)"
            },
            {
              text: "Solve: \\(\\dfrac{3}{i}z-(6+2i)\\omega=5\\); \\(\\dfrac{i}{2}z+\\left(\\dfrac34-\\dfrac{i}{2}\\right)\\omega=\\dfrac12+2i\\)",
              answer: "\\(z=\\dfrac{16}{109}-\\dfrac{453}{109}i,\\ \\omega=-\\dfrac{288}{109}+\\dfrac{88}{109}i\\)"
            },
            {
              text: "Solve: \\(\\dfrac{1}{1-i}z+(1+i)\\omega=3\\); \\(\\dfrac{2}{i}z-(2-3i)\\omega=2+6i\\)",
              answer: "\\(z=\\dfrac{23}{53}+\\dfrac{1}{53}i,\\ \\omega=\\dfrac{68}{53}-\\dfrac{80}{53}i\\)"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Matrices and Determinants",
      mcq: [],
      short: [
        {
          exercise: "Ex 2.3 (Q1 — evaluate the determinant)",
          questions: [
            { text: "Evaluate: \\(\\begin{vmatrix}\\cos\\theta & -\\sin\\theta & 0\\\\ \\sin\\theta & \\cos\\theta & 0\\\\ 0 & 0 & 1\\end{vmatrix}\\)", answer: "\\(1\\)" },
            { text: "Evaluate: \\(\\begin{vmatrix}2+i & 1 & i\\\\ 0 & 2 & 1\\\\ -3i & 1 & 6\\end{vmatrix}\\)", answer: "\\(16+8i\\)" }
          ]
        },
        {
          exercise: "Ex 2.3 (Q2 — evaluate using the cofactor method)",
          questions: [
            { text: "Evaluate using cofactors: \\(\\begin{vmatrix}2i & 6 & 1\\\\ 1 & -i & 2\\\\ 0 & 1 & 3i\\end{vmatrix}\\)", answer: "\\(1-16i\\)" },
            { text: "Evaluate using cofactors: \\(\\begin{vmatrix}1-i & 2 & 1+i\\\\ 3 & 1 & 4\\\\ 0 & 2 & 3\\end{vmatrix}\\)", answer: "\\(-17+11i\\)" }
          ]
        },
        {
          exercise: "Ex 2.3 (Q3 — singular / non-singular)",
          questions: [
            { text: "Determine whether singular or non-singular: \\(\\begin{bmatrix}3 & 1 & 2\\\\ 2 & 3 & 1\\\\ -4 & 1 & -3\\end{bmatrix}\\)", answer: "\\(|A|=0\\), singular" },
            { text: "Determine whether singular or non-singular: \\(\\begin{bmatrix}3i & 1 & 2\\\\ -4 & 1 & i\\\\ 2 & 0 & 1\\end{bmatrix}\\)", answer: "\\(|A|=5i\\ne0\\), non-singular" }
          ]
        },
        {
          exercise: "Ex 2.3 (Q4 — find \\(\\lambda\\) so the matrix is singular)",
          questions: [
            { text: "Find \\(\\lambda\\) so that \\(\\begin{bmatrix}\\lambda & 2 & 0\\\\ 2 & 1 & 3\\\\ \\lambda & 2 & 1\\end{bmatrix}\\) is singular.", answer: "\\(\\lambda=4\\)" },
            { text: "Find \\(\\lambda\\) so that \\(\\begin{bmatrix}2+i & 1 & 6\\\\ 2 & \\lambda & 1\\\\ 3 & 0 & 2\\end{bmatrix}\\) is singular.", answer: "\\(\\lambda=-\\dfrac{7+i}{100}\\)" }
          ]
        },
        {
          exercise: "Ex 2.3 (Q5(iii) — multiplicative inverse by the adjoint method)",
          questions: [
            {
              text: "Find the multiplicative inverse by the adjoint method: \\(A=\\begin{bmatrix}i & 0 & 1\\\\ 2i & -1 & -i\\\\ 1 & 0 & 4i\\end{bmatrix}\\)",
              answer: "\\(A^{-1}=\\begin{bmatrix}-\\dfrac{4i}{5} & 0 & \\dfrac15\\\\ \\dfrac{8-i}{5} & -1 & \\dfrac{-1+2i}{5}\\\\ \\dfrac15 & 0 & -\\dfrac{i}{5}\\end{bmatrix}\\)"
            }
          ]
        },
        {
          exercise: "Ex 2.3 (Q6 — verify \\((AB)^{-1}=B^{-1}A^{-1}\\))",
          questions: [
            {
              text: "Verify \\((AB)^{-1}=B^{-1}A^{-1}\\) for \\(A=\\begin{bmatrix}2 & -i & 6\\\\ 1 & 2 & i\\\\ -i & 1 & 6\\end{bmatrix}\\), \\(B=\\begin{bmatrix}3 & 1 & 2\\\\ 1 & 0 & 1\\\\ 0 & 1 & 1\\end{bmatrix}\\)",
              answer: "Verified — both sides equal."
            },
            {
              text: "Verify \\((AB)^{-1}=B^{-1}A^{-1}\\) for \\(A=\\begin{bmatrix}1 & 2 & 5\\\\ 1 & -1 & -1\\\\ 2 & 3 & -1\\end{bmatrix}\\), \\(B=\\begin{bmatrix}2 & 3 & 4\\\\ 1 & 0 & 2\\\\ 0 & 1 & 3\\end{bmatrix}\\)",
              answer: "Verified — both sides equal \\(\\begin{bmatrix}-1/9 & -1/9 & 2/9\\\\ 2/27 & 13/27 & -1/9\\\\ 1/27 & -4/27 & 0\\end{bmatrix}\\)"
            }
          ]
        },
        {
          exercise: "Ex 2.4 (Q7 — without expansion, show the determinant is zero)",
          questions: [
            { text: "Without expansion show: \\(\\begin{vmatrix}1/a & bc & b+c\\\\ 1/b & ac & a+c\\\\ 1/c & ab & a+b\\end{vmatrix}=0\\)", answer: "Verified — rows/columns are linearly dependent." },
            { text: "Without expansion show: \\(\\begin{vmatrix}0 & -a & -b\\\\ a & 0 & -c\\\\ b & c & 0\\end{vmatrix}=0\\)", answer: "Verified — a skew-symmetric \\(3\\times3\\) determinant is always \\(0\\)." },
            { text: "Without expansion show: \\(\\begin{vmatrix}\\sin^{2}\\alpha & 1 & \\cos^{2}\\alpha\\\\ \\tan^{2}\\alpha & \\sec^{2}\\alpha & 1\\\\ -\\csc^{2}\\alpha & -\\cot^{2}\\alpha & 1\\end{vmatrix}=0\\)", answer: "Verified — rows/columns are linearly dependent." },
            { text: "Without expansion show: \\(\\begin{vmatrix}(a-b)^{3} & a^{3}-b^{3} & ab(a-b)\\\\ (c-d)^{3} & c^{3}-d^{3} & cd(c-d)\\\\ (e-f)^{3} & e^{3}-f^{3} & ef(e-f)\\end{vmatrix}=0\\)", answer: "Verified — rows/columns are linearly dependent." },
            { text: "Without expansion show: \\(\\begin{vmatrix}(a-b)^{2} & (a+b)^{2} & ab\\\\ (c-d)^{2} & (c+d)^{2} & cd\\\\ (e-f)^{2} & (e+f)^{2} & ef\\end{vmatrix}=0\\)", answer: "Verified — rows/columns are linearly dependent." }
          ]
        },
        {
          exercise: "Ex 2.4 (Q8 — using properties of determinants, prove)",
          questions: [
            { text: "Prove: \\(\\begin{vmatrix}na_1+b_1 & na_2+b_2 & na_3+b_3\\\\ nb_1+c_1 & nb_2+c_2 & nb_3+c_3\\\\ nc_1+a_1 & nc_2+a_2 & nc_3+a_3\\end{vmatrix}=(n^{3}+1)\\begin{vmatrix}a_1 & a_2 & a_3\\\\ b_1 & b_2 & b_3\\\\ c_1 & c_2 & c_3\\end{vmatrix}\\)", answer: "Verified using row/column operations." },
            { text: "Prove: \\(\\begin{vmatrix}2ab & 1+a^{2}-b^{2} & 2b\\\\ 2a & -2b & 1-a^{2}-b^{2}\\\\ 1-a^{2}+b^{2} & 2ab & -2a\\end{vmatrix}=(1+a^{2}+b^{2})^{3}\\)", answer: "Verified using row/column operations." },
            { text: "Prove: \\(\\begin{vmatrix}b+c & a & a\\\\ b & c+a & b\\\\ c & c & a+b\\end{vmatrix}=4abc\\)", answer: "Verified using row/column operations." },
            { text: "Prove: \\(\\begin{vmatrix}(b+c)^{2} & ab & ca\\\\ ab & (a+c)^{2} & bc\\\\ ac & bc & (a+b)^{2}\\end{vmatrix}=2abc(a+b+c)^{3}\\)", answer: "Verified using row/column operations." }
          ]
        },
        {
          exercise: "Ex 2.5 (Q9 — reduce to echelon form, then reduced echelon form)",
          questions: [
            { text: "Reduce to echelon then reduced echelon form: \\(\\begin{bmatrix}2 & -4 & 3\\\\ 4 & 1 & 8\\\\ 7 & 3 & 0\\end{bmatrix}\\)", answer: "Reduced echelon form \\(=I_3\\) (Rank \\(=3\\))" },
            { text: "Reduce to echelon then reduced echelon form: \\(\\begin{bmatrix}0 & 2 & 4\\\\ 0 & 3 & 6\\\\ 0 & 1 & 2\\end{bmatrix}\\)", answer: "Reduced echelon form \\(=\\begin{bmatrix}0&1&2\\\\0&0&0\\\\0&0&0\\end{bmatrix}\\) (Rank \\(=1\\))" }
          ]
        },
        {
          exercise: "Ex 2.5 (Q10 — find the rank)",
          questions: [
            { text: "Find the rank of \\(\\begin{bmatrix}-1 & -2 & 3\\\\ -1 & 2 & -1\\\\ -5 & 2 & 3\\end{bmatrix}\\)", answer: "Rank \\(=2\\)" },
            { text: "Find the rank of \\(\\begin{bmatrix}3 & 2 & 4\\\\ 2 & 1 & 6\\\\ 4 & -1 & 0\\end{bmatrix}\\)", answer: "Rank \\(=3\\)" }
          ]
        },
        {
          exercise: "Ex 2.5 (Q11 — find the inverse using row operations)",
          questions: [
            { text: "Using row operations, find the inverse of \\(\\begin{bmatrix}-5 & 2 & 3\\\\ -1 & -2 & 3\\\\ 1 & -2 & 3\\end{bmatrix}\\)", answer: "\\(A^{-1}=\\begin{bmatrix}0 & -1/2 & 1/2\\\\ 1/4 & -3/4 & 1/2\\\\ 1/6 & -1/3 & 1/2\\end{bmatrix}\\)" },
            { text: "Using row operations, find the inverse of \\(\\begin{bmatrix}0 & 1 & 3\\\\ 3 & 2 & 4\\\\ 6 & -1 & 2\\end{bmatrix}\\)", answer: "\\(A^{-1}=\\begin{bmatrix}-8/27 & 5/27 & 2/27\\\\ -2/3 & 2/3 & -1/3\\\\ 5/9 & -2/9 & 1/9\\end{bmatrix}\\)" }
          ]
        },
        {
          exercise: "Ex 2.6 (Q12 — encode and decode using matrices)",
          questions: [
            { text: "Encode/decode PAKISTAN using the \\(2\\times2\\) key \\(E=\\begin{bmatrix}1&2\\\\1&3\\end{bmatrix}\\).", answer: "Encoded \\(\\to17,35,20,49,39,98,15,44\\); decodes back to P,A,K,I,S,T,A,N." },
            { text: "Encode/decode ISLAMABAD using the \\(3\\times3\\) key \\(A=\\begin{bmatrix}1&-1&1\\\\2&-1&0\\\\1&0&0\\end{bmatrix}\\).", answer: "Encoded \\(\\to59,-28,9,28,-14,1,8,-3,2\\); decodes back to I,S,L,A,M,A,B,A,D." }
          ]
        }
      ],
      long: [
        {
          exercise: "Ex 2.3, Q.6 (find \\(A^{-1}\\) and verify \\(AA^{-1}=A^{-1}A=I_3\\))",
          questions: [
            {
              text: "If \\(A=\\begin{bmatrix}2 & 1 & -3\\\\ 0 & 1 & 0\\\\ 2 & 1 & 6\\end{bmatrix}\\), find \\(A^{-1}\\) and hence show \\(AA^{-1}=A^{-1}A=I_3\\).",
              answer: "\\(A^{-1}=\\begin{bmatrix}1/3 & -1/2 & 1/6\\\\ 0 & 1 & 0\\\\ -1/9 & 0 & 1/9\\end{bmatrix}\\); verified \\(AA^{-1}=A^{-1}A=I_3\\)."
            }
          ]
        },
        {
          exercise: "Ex 2.5, Q.3(ii) (find the inverse using row operations)",
          questions: [
            {
              text: "Using row operations, find the inverse of \\(A=\\begin{bmatrix}1 & 2 & 5\\\\ -3 & 0 & 1\\\\ 4 & 2 & 5\\end{bmatrix}\\).",
              answer: "\\(A^{-1}=\\begin{bmatrix}-1/3 & 0 & 1/3\\\\ 19/6 & -5/2 & -8/3\\\\ -1 & 1 & 1\\end{bmatrix}\\)"
            }
          ]
        },
        {
          exercise: "Ex 2.6, Q.1 (solve the homogeneous system for a non-trivial solution, if it exists)",
          questions: [
            {
              text: "\\(2x_1-3x_2+4x_3=0,\\ x_1-2x_2+3x_3=0,\\ 4x_1+x_2-6x_3=0\\)",
              answer: "\\(|A|=0\\); non-trivial solution \\(x_1=t,\\ x_2=2t,\\ x_3=t,\\ t\\in\\mathbb{R}\\)"
            },
            {
              text: "\\(5x_1+6x_2-7x_3=0,\\ 2x_1-x_2+x_3=0,\\ x_1+2x_2+2x_3=0\\)",
              answer: "\\(|A|=-73\\ne0\\); only the trivial solution \\(x_1=x_2=x_3=0\\)"
            }
          ]
        },
        {
          exercise: "Ex 2.6, Q.2(ii) (find \\(\\lambda\\) for a non-trivial solution, then solve)",
          questions: [
            {
              text: "Find \\(\\lambda\\) for which \\(x_1-4x_2+3x_3=0,\\ 2x_1+\\lambda x_2+x_3=0,\\ x_1-2x_2+\\lambda x_3=0\\) may have a non-trivial solution; also solve for that \\(\\lambda\\).",
              answer: "\\(\\lambda=-7\\) or \\(\\lambda=2\\). For \\(\\lambda=-7\\): \\((x_1,x_2,x_3)=(17t,5t,t)\\). For \\(\\lambda=2\\): \\((x_1,x_2,x_3)=(-2t,t,2t)\\)."
            }
          ]
        },
        {
          exercise: "Ex 2.6, Q.3 (solve by Gauss elimination method)",
          questions: [
            { text: "\\(2x+3y+4z=2,\\ 2x+y+z=5,\\ 3x-2y+z=-3\\)", answer: "\\(x=\\dfrac{46}{19},\\ y=\\dfrac{66}{19},\\ z=-\\dfrac{63}{19}\\)" },
            { text: "\\(5x-2y+z=2,\\ 2x+2y+6z=1,\\ 3x-4y-5z=3\\)", answer: "\\(\\text{Rank}\\,A=2\\ne\\text{Rank}\\,A_b=3\\) — the system is inconsistent (no solution)" },
            { text: "\\(2x+z=2,\\ 2y-z=3,\\ x+3y=5\\)", answer: "\\(x=\\dfrac54,\\ y=\\dfrac54,\\ z=-\\dfrac12\\)" },
            { text: "\\(x+2y+5z=4,\\ 3x-2y+2z=3,\\ 5x-8y-4z=1\\)", answer: "\\(x=-7,\\ y=-7,\\ z=5\\)" }
          ]
        },
        {
          exercise: "Ex 2.6, Q.5 (solve by Cramer's Rule)",
          questions: [
            { text: "\\(x_1+x_2+2x_3=8,\\ -x_1-2x_2+3x_3=1,\\ 3x_1-7x_2+4x_3=10\\)", answer: "\\(x_1=3,\\ x_2=1,\\ x_3=2\\)" },
            { text: "\\(2x_1+2x_2+x_3=0,\\ -2x_1+5x_2+2x_3=1,\\ 8x_1+x_2+4x_3=-1\\)", answer: "\\(x_1=-\\dfrac17,\\ x_2=\\dfrac17,\\ x_3=0\\)" },
            { text: "\\(-2x_2+3x_3=1,\\ 3x_1+6x_2-3x_3=-2,\\ 6x_1+6x_2+3x_3=5\\)", answer: "\\(|A|=0\\), \\(\\text{Rank}\\,A=2\\ne\\text{Rank}\\,A_b=3\\) — inconsistent (no solution)" },
            { text: "\\(2x_1+x_2+3x_3=1,\\ x_1-2x_2+x_3=2,\\ 3x_1-4x_2-x_3=4\\)", answer: "\\(x_1=\\dfrac{6}{11},\\ x_2=-\\dfrac{7}{11},\\ x_3=\\dfrac{2}{11}\\)" }
          ]
        },
        {
          exercise: "Ex 2.6, Q.6 (solve by the Matrix Inversion Method)",
          questions: [
            { text: "\\(-x+3y-5z=0,\\ 2x+4y-6z=1,\\ x-2y+3z=3\\)", answer: "\\(x=\\dfrac74,\\ y=-\\dfrac{23}{2},\\ z=-\\dfrac{29}{4}\\)" },
            {
              text: "\\(\\dfrac{2}{x}+\\dfrac{3}{y}+\\dfrac{10}{z}=4,\\ \\dfrac{4}{x}-\\dfrac{6}{y}+\\dfrac{5}{z}=1,\\ \\dfrac{6}{x}+\\dfrac{9}{y}-\\dfrac{20}{z}=2\\)",
              answer: "Let \\(u=1/x,v=1/y,w=1/z\\): \\(u=\\dfrac12,\\ v=\\dfrac13,\\ w=\\dfrac15\\ \\Rightarrow\\ x=2,\\ y=3,\\ z=5\\)"
            }
          ]
        },
        {
          exercise: "Ex 2.6, Q.7 (find \\(A^{-1}\\) and hence solve the system)",
          questions: [
            {
              text: "If \\(A=\\begin{bmatrix}3&2&1\\\\4&-1&2\\\\7&3&-3\\end{bmatrix}\\), find \\(A^{-1}\\) and hence solve \\(3x+4y+7z=14,\\ 2x-y+3z=4,\\ x+2y-3z=0\\).",
              answer: "\\(A^{-1}=\\begin{bmatrix}-3/62 & 9/62 & 5/62\\\\ 13/31 & -8/31 & -1/31\\\\ 19/62 & 5/62 & -11/62\\end{bmatrix}\\); solution \\(x=1,\\ y=1,\\ z=1\\)"
            }
          ]
        },
        {
          exercise: "Ex 2.6, Q.8 (classify the system by \\(\\lambda\\))",
          questions: [
            {
              text: "Determine \\(\\lambda\\) for which \\(x+2y-3z=4,\\ 3x-y+5z=2,\\ 4x+y+(\\lambda^{2}-14)z=\\lambda+2\\) has no solution, a unique solution, or infinitely many solutions.",
              answer: "\\(|A|=-7(\\lambda-4)(\\lambda+4)\\). Unique solution if \\(\\lambda\\ne\\pm4\\); no solution if \\(\\lambda=-4\\); infinitely many if \\(\\lambda=4\\)."
            }
          ]
        },
        {
          exercise: "Ex 2.6, Q.9 (inconsistency condition)",
          questions: [
            {
              text: "Show that \\(2x-y+3z=\\alpha,\\ 3x+y-5z=\\beta,\\ -5x-5y+21z=\\gamma\\) is inconsistent if \\(\\gamma\\ne2\\alpha-3\\beta\\).",
              answer: "\\(2(\\text{eq.1})-3(\\text{eq.2})\\) gives \\(-5x-5y+21z=2\\alpha-3\\beta\\). Consistent only if \\(\\gamma=2\\alpha-3\\beta\\); otherwise inconsistent."
            }
          ]
        }
      ]
    }
  ]
};
