/*
  CLASS 10 — MATH — SHORT QUESTIONS — CHAPTERS 3 TO 4
  -----------------------------------------------------
  Chapter 3: Matrices and Determinants
  Chapter 4: Linear and Quadratic Inequalities

  Source: Class 10 Mathematics (National Book Foundation) exercise and
  review-exercise questions (worked examples excluded). MCQ parts of the
  review exercises are NOT repeated here (they live in
  class10-math-mcq-ch3-4.js).

  Repetitive exercises carry representative parts rather than every part.
  Graphing questions are included with a written description of the graph
  (boundary line, dashed/solid, side to shade) as the answer, since there is
  no diagram data for answers. Only the two area-figure questions of
  Ex 4.1 (Q9, Q10) carry an SVG diagram.
  Answers were worked out and cross-checked with a computer-algebra system;
  the source material itself contains no answers.

  The chapter objects also carry an empty "long" array so long questions
  can be added later without touching the app (chapters merge by id).

  DATA FORMAT (parts-selectable schema):
    short / long: [ { exercise, questions: [ { stem|null, parts: [ {label|null, text, answer, diagram?} ] } ] } ]
  MATH FORMATTING: inline math wrapped in \\( \\) for KaTeX.
*/
var CLASS10_MATH_CH3_4 = {
  "chapters": [
    {
      "id": 3,
      "name": "Matrices and Determinants",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 3.1",
          "questions": [
            {
              "stem": "Write the number of rows, columns and order of the given matrices.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\begin{bmatrix}1+2 & 4+5\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Rows}=1,\\ \\text{columns}=2,\\ \\text{order}=1\\times2\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\begin{bmatrix}a+s & 0\\\\ 0 & d+s\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Rows}=2,\\ \\text{columns}=2,\\ \\text{order}=2\\times2\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\begin{bmatrix}5\\\\7\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Rows}=2,\\ \\text{columns}=1,\\ \\text{order}=2\\times1\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\begin{bmatrix}4+2\\times1+5\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Rows}=1,\\ \\text{columns}=1,\\ \\text{order}=1\\times1\\)"
                }
              ]
            },
            {
              "stem": "Check whether the following pairs of matrices are equal or not.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\begin{bmatrix}1 & 0\\\\ 0 & 1\\end{bmatrix},\\ \\begin{bmatrix}\\sqrt{25}-\\sqrt{25} & \\dfrac{\\sqrt{25}}{5}\\\\ \\dfrac{\\sqrt{16}}{4} & \\sqrt{16-16}\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Second matrix}=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}\\neq\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}.\\ \\text{Not equal.}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\begin{bmatrix}1&2&3\\end{bmatrix},\\ \\begin{bmatrix}1+2+3\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Orders are }1\\times3\\text{ and }1\\times1.\\ \\text{Not equal.}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\begin{bmatrix}\\frac12\\end{bmatrix},\\ \\begin{bmatrix}\\frac12\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Same order and same entries. Equal.}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\begin{bmatrix}1+0 & 0+0\\\\ 0\\times0 & 1-0\\end{bmatrix},\\ \\begin{bmatrix}\\frac{5\\times5}{25} & \\frac{3\\times0}{7}\\\\ 2-17+15 & 17\\times\\frac{1}{17}\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Both}=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}.\\ \\text{Equal.}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Hyder, Hassan and Ahmed scored 7, 11 and 10 points respectively in a mathematical quiz. Display the data in a row matrix \\(R\\) and a column matrix \\(C\\).",
                  "answer": "\\(R=\\begin{bmatrix}7&11&10\\end{bmatrix},\\qquad C=\\begin{bmatrix}7\\\\11\\\\10\\end{bmatrix}\\)"
                }
              ]
            },
            {
              "stem": "Write the most appropriate type of the following matrices.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\begin{bmatrix}5&0\\\\0&5\\end{bmatrix}\\)",
                  "answer": "Scalar matrix (also a diagonal matrix)."
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\begin{bmatrix}0&0\\\\0&3+0\\end{bmatrix}\\)",
                  "answer": "Diagonal matrix."
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\begin{bmatrix}\\dfrac{15\\times3}{9\\times5}\\end{bmatrix}\\)",
                  "answer": "\\(=[1]\\): a square matrix of order 1 (identity matrix of order 1)."
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\begin{bmatrix}\\dfrac{\\sqrt{625}}{25} & 17+15-32\\\\ 18-19+1 & \\dfrac{3}{\\sqrt9}\\end{bmatrix}\\)",
                  "answer": "\\(=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\): Identity (unit) matrix of order 2."
                },
                {
                  "label": "(v)",
                  "text": "\\(\\begin{bmatrix}6+2&0\\\\-3+3&8\\end{bmatrix}\\)",
                  "answer": "\\(=\\begin{bmatrix}8&0\\\\0&8\\end{bmatrix}\\): Scalar matrix (also a diagonal matrix)."
                }
              ]
            },
            {
              "stem": "Check for symmetric and skew symmetric matrices from the following.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\begin{bmatrix}5&2&3\\\\2&9&6\\\\3&6&3\\end{bmatrix}\\)",
                  "answer": "\\(A^{t}=A\\): Symmetric."
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\begin{bmatrix}0&9\\\\-9&0\\end{bmatrix}\\)",
                  "answer": "\\(A^{t}=-A\\): Skew symmetric."
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\begin{bmatrix}0&-2&-4\\\\2&0&-2\\\\4&2&0\\end{bmatrix}\\)",
                  "answer": "\\(A^{t}=-A\\): Skew symmetric."
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\begin{bmatrix}0&-5\\\\-5&0\\end{bmatrix}\\)",
                  "answer": "\\(A^{t}=A\\): Symmetric (not skew symmetric, since \\(A^{t}\\neq-A\\))."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Write a symmetric and a skew symmetric matrix of order 3.",
                  "answer": "\\(\\text{Symmetric: }\\begin{bmatrix}1&2&3\\\\2&4&5\\\\3&5&6\\end{bmatrix};\\qquad\\text{Skew symmetric: }\\begin{bmatrix}0&2&-3\\\\-2&0&4\\\\3&-4&0\\end{bmatrix}\\) (other valid examples accepted)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 3.2",
          "questions": [
            {
              "stem": "Find \\(x,y,z\\) from the following, if possible. Mention the reason if not possible.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\begin{bmatrix}x&9\\end{bmatrix}=\\begin{bmatrix}2&y\\end{bmatrix}\\)",
                  "answer": "\\(x=2,\\ y=9\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\begin{bmatrix}6&3\\\\4&x\\end{bmatrix}=\\begin{bmatrix}7&3\\\\4&0\\end{bmatrix}\\)",
                  "answer": "Not possible: the corresponding entries 6 and 7 are different, so the matrices cannot be equal."
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\begin{bmatrix}5x\\\\2y\\end{bmatrix}=\\begin{bmatrix}-10&20\\end{bmatrix}\\)",
                  "answer": "Not possible: the orders are different (2×1 and 1×2)."
                },
                {
                  "label": "(iv)",
                  "text": "\\(-\\begin{bmatrix}2x&3y\\\\4z&10\\end{bmatrix}=\\begin{bmatrix}8&6\\\\32&-10\\end{bmatrix}\\)",
                  "answer": "\\(-2x=8,\\ -3y=6,\\ -4z=32\\Rightarrow x=-4,\\ y=-2,\\ z=-8\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\begin{bmatrix}x&-2y\\\\6&x+y\\end{bmatrix}=\\begin{bmatrix}3&-6\\\\6&z\\end{bmatrix}\\)",
                  "answer": "\\(x=3,\\ -2y=-6\\Rightarrow y=3,\\ z=x+y=6\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\begin{bmatrix}x+y\\\\x-y\\end{bmatrix}=\\begin{bmatrix}11\\\\1\\end{bmatrix}\\)",
                  "answer": "\\(x+y=11,\\ x-y=1\\Rightarrow x=6,\\ y=5\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(\\begin{bmatrix}5&10\\\\15&x\\end{bmatrix}+\\begin{bmatrix}5&y\\\\15&5\\end{bmatrix}=\\begin{bmatrix}z&15\\\\30&7\\end{bmatrix}\\)",
                  "answer": "\\(z=10,\\ 10+y=15\\Rightarrow y=5,\\ x+5=7\\Rightarrow x=2\\)"
                },
                {
                  "label": "(viii)",
                  "text": "\\(5\\begin{bmatrix}x\\\\3y\\end{bmatrix}-\\begin{bmatrix}36\\\\26\\end{bmatrix}=2\\begin{bmatrix}-2x\\\\y\\end{bmatrix}\\)",
                  "answer": "\\(5x-36=-4x\\Rightarrow x=4;\\ 15y-26=2y\\Rightarrow y=2\\)"
                },
                {
                  "label": "(ix)",
                  "text": "\\(\\begin{bmatrix}x&y&z\\\\-2&-4&5\\end{bmatrix}+2\\begin{bmatrix}5&3&2\\\\1&6&3\\end{bmatrix}=\\begin{bmatrix}0&0&0\\\\0&8&11\\end{bmatrix}\\)",
                  "answer": "\\(x+10=0,\\ y+6=0,\\ z+4=0\\Rightarrow x=-10,\\ y=-6,\\ z=-4\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the additive inverses of the following. \\(R=\\begin{bmatrix}5 & 0 & 3 \\\\ 7 & -9 & -1 \\\\ -8 & 5 & 6\\end{bmatrix},\\ S=\\begin{bmatrix}-5 & 2 \\\\ 3 & -6 \\\\ -9 & 4\\end{bmatrix},\\ T=\\begin{bmatrix}5 & -6 & 1\\end{bmatrix}\\)",
                  "answer": "\\(-R=\\begin{bmatrix}-5 & 0 & -3 \\\\ -7 & 9 & 1 \\\\ 8 & -5 & -6\\end{bmatrix},\\ -S=\\begin{bmatrix}5 & -2 \\\\ -3 & 6 \\\\ 9 & -4\\end{bmatrix},\\ -T=\\begin{bmatrix}-5 & 6 & -1\\end{bmatrix}\\)"
                }
              ]
            },
            {
              "stem": "If \\(A=\\begin{bmatrix}5 & 3 \\\\ -2 & 6\\end{bmatrix}\\), \\(B=\\begin{bmatrix}10 & 8 \\\\ -8 & 6\\end{bmatrix}\\), \\(C=\\begin{bmatrix}15 & 6 \\\\ 0 & -12\\end{bmatrix}\\), then find:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(2A+\\frac12B-\\frac13C\\)",
                  "answer": "\\(\\begin{bmatrix}10 & 8 \\\\ -8 & 19\\end{bmatrix}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(A-\\frac12B\\)",
                  "answer": "\\(\\begin{bmatrix}0 & -1 \\\\ 2 & 3\\end{bmatrix}\\)"
                }
              ]
            },
            {
              "stem": "If \\(A=\\begin{bmatrix}1 & 2 \\\\ 3 & -3\\end{bmatrix}\\), \\(B=\\begin{bmatrix}1 & -2 \\\\ 3 & 3\\end{bmatrix}\\), \\(C=\\begin{bmatrix}2 & 0 \\\\ 6 & 0\\end{bmatrix}\\), \\(D=\\begin{bmatrix}2 \\\\ 6\\end{bmatrix}\\), \\(E=\\begin{bmatrix}2 & 2 \\\\ 6 & 6\\end{bmatrix}\\), check whether:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(A+B=C\\)",
                  "answer": "\\(A+B=\\begin{bmatrix}2 & 0 \\\\ 6 & 0\\end{bmatrix}=C.\\ \\text{Yes.}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(C+D=E\\)",
                  "answer": "No. \\(C\\) is 2×2 and \\(D\\) is 2×1, so \\(C+D\\) is not defined."
                },
                {
                  "label": "(iii)",
                  "text": "\\(D+D=E\\)",
                  "answer": "\\(D+D=\\begin{bmatrix}4 \\\\ 12\\end{bmatrix}\\text{ has order }2\\times1\\text{ while }E\\text{ is }2\\times2.\\ \\text{No.}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(E-D=C\\)",
                  "answer": "No. \\(E\\) and \\(D\\) have different orders, so \\(E-D\\) is not defined."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(A=\\begin{bmatrix}5 & 3 \\\\ -2 & 6\\end{bmatrix}\\) and \\(B=\\begin{bmatrix}10 & 8 \\\\ -8 & 6\\end{bmatrix}\\), verify the commutative property of matrix addition.",
                  "answer": "\\(A+B=\\begin{bmatrix}15 & 11 \\\\ -10 & 12\\end{bmatrix},\\quad B+A=\\begin{bmatrix}15 & 11 \\\\ -10 & 12\\end{bmatrix}\\Rightarrow A+B=B+A\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(A=\\begin{bmatrix}5 & 3 \\\\ -2 & 6\\end{bmatrix}\\), \\(B=\\begin{bmatrix}10 & 8 \\\\ -8 & 6\\end{bmatrix}\\) and \\(C=\\begin{bmatrix}15 & 6 \\\\ 0 & -12\\end{bmatrix}\\), verify the associative property of matrix addition.",
                  "answer": "\\((A+B)+C=\\begin{bmatrix}30 & 17 \\\\ -10 & 0\\end{bmatrix},\\quad A+(B+C)=\\begin{bmatrix}30 & 17 \\\\ -10 & 0\\end{bmatrix}\\Rightarrow(A+B)+C=A+(B+C)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(A=\\begin{bmatrix}1 & 2 \\\\ 3 & -3\\end{bmatrix}\\) and \\(B=\\begin{bmatrix}1 & -2 \\\\ 3 & 3\\end{bmatrix}\\), verify that \\(A^{t}+B^{t}=(A+B)^{t}\\).",
                  "answer": "\\(A^{t}+B^{t}=\\begin{bmatrix}2 & 6 \\\\ 0 & 0\\end{bmatrix},\\quad (A+B)^{t}=\\begin{bmatrix}2 & 6 \\\\ 0 & 0\\end{bmatrix}\\Rightarrow A^{t}+B^{t}=(A+B)^{t}\\)"
                }
              ]
            },
            {
              "stem": "Find the matrix \\(Z\\) from these equations.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(4\\begin{bmatrix}5\\\\10\\end{bmatrix}-5Z=\\sqrt5\\begin{bmatrix}\\sqrt{45}\\\\ \\sqrt5\\end{bmatrix}\\)",
                  "answer": "\\(5Z=\\begin{bmatrix}20\\\\40\\end{bmatrix}-\\begin{bmatrix}15\\\\5\\end{bmatrix}=\\begin{bmatrix}5\\\\35\\end{bmatrix}\\Rightarrow Z=\\begin{bmatrix}1\\\\7\\end{bmatrix}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(Z+\\begin{bmatrix}5\\\\-7\\end{bmatrix}=3Z-\\begin{bmatrix}5\\\\3\\end{bmatrix}\\)",
                  "answer": "\\(2Z=\\begin{bmatrix}10\\\\-4\\end{bmatrix}\\Rightarrow Z=\\begin{bmatrix}5\\\\-2\\end{bmatrix}\\)"
                }
              ]
            },
            {
              "stem": "(a) Mention the order of the indicated products where possible. (b) Perform the indicated products where possible.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}\\times\\begin{bmatrix}5 & 3\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Not possible (columns of first}=2\\neq\\text{rows of second}=1)\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\begin{bmatrix}5 & 3\\end{bmatrix}\\times\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Order: }1\\times2;\\ \\text{product}=\\begin{bmatrix}5 & 3\\end{bmatrix}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\begin{bmatrix}1 & 1 \\\\ 0 & 0\\end{bmatrix}\\times\\begin{bmatrix}5 \\\\ 3\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Order: }2\\times1;\\ \\text{product}=\\begin{bmatrix}8 \\\\ 0\\end{bmatrix}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\begin{bmatrix}5 \\\\ 3\\end{bmatrix}\\times\\begin{bmatrix}0 & 0 \\\\ 1 & 0\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Not possible (columns of first}=1\\neq\\text{rows of second}=2)\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\begin{bmatrix}5\\end{bmatrix}\\times\\begin{bmatrix}1 & 0 \\\\ 1 & 0\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Not possible (columns of first}=1\\neq\\text{rows of second}=2)\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\begin{bmatrix}5 & 10\\end{bmatrix}\\times\\begin{bmatrix}-2 \\\\ 3\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Order: }1\\times1;\\ \\text{product}=\\begin{bmatrix}20\\end{bmatrix}\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(\\begin{bmatrix}2 \\\\ 3\\end{bmatrix}\\times\\begin{bmatrix}5 & 10\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Order: }2\\times2;\\ \\text{product}=\\begin{bmatrix}10 & 20 \\\\ 15 & 30\\end{bmatrix}\\)"
                },
                {
                  "label": "(viii)",
                  "text": "\\(\\begin{bmatrix}5 & 3 \\\\ 2 & 6\\end{bmatrix}\\times\\begin{bmatrix}5 \\\\ -2\\end{bmatrix}\\)",
                  "answer": "\\(\\text{Order: }2\\times1;\\ \\text{product}=\\begin{bmatrix}19 \\\\ -2\\end{bmatrix}\\)"
                }
              ]
            },
            {
              "stem": "If \\(A=\\begin{bmatrix}1 & 0 \\\\ 2 & 3\\end{bmatrix}\\), \\(B=\\begin{bmatrix}2 & 1 \\\\ 0 & -3\\end{bmatrix}\\) and \\(C=\\begin{bmatrix}3 & 0 \\\\ -2 & 1\\end{bmatrix}\\), then:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\text{Find }AB\\text{ and }BA\\text{. Is }AB=BA\\text{?}\\)",
                  "answer": "\\(AB=\\begin{bmatrix}2 & 1 \\\\ 4 & -7\\end{bmatrix},\\ BA=\\begin{bmatrix}4 & 3 \\\\ -6 & -9\\end{bmatrix}.\\ \\text{Since }AB\\neq BA\\text{, they are not equal.}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\text{Find }AC\\text{ and }CA\\text{. Is }AC=CA\\text{?}\\)",
                  "answer": "\\(AC=\\begin{bmatrix}3 & 0 \\\\ 0 & 3\\end{bmatrix},\\ CA=\\begin{bmatrix}3 & 0 \\\\ 0 & 3\\end{bmatrix}.\\ \\text{Since }AC=CA\\text{, they are equal.}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\text{Verify }A(B+C)=AB+AC\\)",
                  "answer": "\\(B+C=\\begin{bmatrix}5 & 1 \\\\ -2 & -2\\end{bmatrix},\\ A(B+C)=\\begin{bmatrix}5 & 1 \\\\ 4 & -4\\end{bmatrix};\\ AB+AC=\\begin{bmatrix}2 & 1 \\\\ 4 & -7\\end{bmatrix}+\\begin{bmatrix}3 & 0 \\\\ 0 & 3\\end{bmatrix}=\\begin{bmatrix}5 & 1 \\\\ 4 & -4\\end{bmatrix}.\\ \\text{Hence verified.}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\text{Verify }(A-B)C=AC-BC\\)",
                  "answer": "\\(A-B=\\begin{bmatrix}-1 & -1 \\\\ 2 & 6\\end{bmatrix},\\ (A-B)C=\\begin{bmatrix}-1 & -1 \\\\ -6 & 6\\end{bmatrix};\\ AC-BC=\\begin{bmatrix}3 & 0 \\\\ 0 & 3\\end{bmatrix}-\\begin{bmatrix}4 & 1 \\\\ 6 & -3\\end{bmatrix}=\\begin{bmatrix}-1 & -1 \\\\ -6 & 6\\end{bmatrix}.\\ \\text{Hence verified.}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\text{Verify the associative property of matrix multiplication, }(AB)C=A(BC)\\)",
                  "answer": "\\((AB)C=\\begin{bmatrix}4 & 1 \\\\ 26 & -7\\end{bmatrix},\\ A(BC)=\\begin{bmatrix}4 & 1 \\\\ 26 & -7\\end{bmatrix}.\\ \\text{Hence verified.}\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\text{Check whether }(A+B)(A-B)=A^{2}-B^{2}\\)",
                  "answer": "\\(A^{2}=\\begin{bmatrix}1 & 0 \\\\ 8 & 9\\end{bmatrix},\\ B^{2}=\\begin{bmatrix}4 & -1 \\\\ 0 & 9\\end{bmatrix},\\ A^{2}-B^{2}=\\begin{bmatrix}-3 & 1 \\\\ 8 & 0\\end{bmatrix};\\ (A+B)(A-B)=\\begin{bmatrix}-1 & 3 \\\\ -2 & -2\\end{bmatrix}.\\ \\text{Not equal.}\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(\\text{Verify }(AB)^{t}=B^{t}A^{t}\\text{ and }(A^{t})^{t}=A\\)",
                  "answer": "\\((AB)^{t}=\\begin{bmatrix}2 & 4 \\\\ 1 & -7\\end{bmatrix},\\ B^{t}A^{t}=\\begin{bmatrix}2 & 4 \\\\ 1 & -7\\end{bmatrix};\\ (A^{t})^{t}=\\begin{bmatrix}1 & 0 \\\\ 2 & 3\\end{bmatrix}=A.\\ \\text{Hence verified.}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 3.3",
          "questions": [
            {
              "stem": "Singular and nonsingular matrices.",
              "parts": [
                {
                  "label": "(a)",
                  "text": "Mention singular and nonsingular matrices from the following: \\(A=\\begin{bmatrix}6 & 4 \\\\ 2 & 3\\end{bmatrix},\\ B=\\begin{bmatrix}-5 & 7 \\\\ -9 & 4\\end{bmatrix},\\ C=\\begin{bmatrix}9 & 18 \\\\ 2 & 4\\end{bmatrix}\\) \\(D=\\begin{bmatrix}a&b+\\frac1a\\\\a&b\\end{bmatrix},\\ E=\\begin{bmatrix}a&b+c\\\\a&d+c\\end{bmatrix}\\) (where \\(a\\neq0\\) but \\(b=d\\))",
                  "answer": "\\(|A|=10,\\ |B|=43,\\ |C|=0,\\ |D|=ab-a\\left(b+\\tfrac1a\\right)=-1,\\ |E|=a(d-b)=0\\) So \\(A,B,D\\) are nonsingular; \\(C,E\\) are singular."
                },
                {
                  "label": "(b)",
                  "text": "If \\(|P|=9\\) and \\(P=\\begin{bmatrix}3 & 3 \\\\ 1 & 4k\\end{bmatrix}\\), find \\(k\\).",
                  "answer": "\\(|P|=12k-3=9\\Rightarrow k=1\\)"
                },
                {
                  "label": "(c)",
                  "text": "If \\(|T|=3\\) and \\(\\text{adj }T=\\begin{bmatrix}5 & x \\\\ 3 & 2\\end{bmatrix}\\), find \\(x\\).",
                  "answer": "\\(|\\text{adj }T|=|T|=3\\Rightarrow10-3x=3\\Rightarrow x=\\dfrac73\\)"
                }
              ]
            },
            {
              "stem": "Multiplicative inverse.",
              "parts": [
                {
                  "label": "(a)(i)",
                  "text": "Find the multiplicative inverse of \\(R=\\begin{bmatrix}4 & -1 \\\\ -6 & 2\\end{bmatrix}\\), if possible.",
                  "answer": "\\(|R|=8-6=2\\neq0\\Rightarrow R^{-1}=\\dfrac{1}{2}\\begin{bmatrix}2 & 1 \\\\ 6 & 4\\end{bmatrix}=\\begin{bmatrix}1 & \\dfrac{1}{2} \\\\ 3 & 2\\end{bmatrix}\\)"
                },
                {
                  "label": "(a)(ii)",
                  "text": "Find the multiplicative inverse of \\(S=\\begin{bmatrix}5\\\\3\\end{bmatrix}\\), if possible.",
                  "answer": "Not possible: \\(S\\) is not a square matrix, so it has no inverse."
                },
                {
                  "label": "(a)(iii)",
                  "text": "Find the multiplicative inverse of \\(T=\\begin{bmatrix}25 & 2 \\\\ 50 & 4\\end{bmatrix}\\), if possible.",
                  "answer": "\\(|T|=100-100=0\\): \\(T\\) is singular, so its inverse does not exist."
                },
                {
                  "label": "(a)(iv)",
                  "text": "Find the multiplicative inverse of \\(U=\\begin{bmatrix}x&x+1\\\\y&y+1\\end{bmatrix}\\) if \\(x=y\\), if possible.",
                  "answer": "\\(|U|=x(y+1)-y(x+1)=x-y=0\\): \\(U\\) is singular, so its inverse does not exist."
                },
                {
                  "label": "(b)",
                  "text": "If \\(R=\\begin{bmatrix}4 & 1 \\\\ -6 & 2\\end{bmatrix}\\), verify that \\(RR^{-1}=R^{-1}R=I\\).",
                  "answer": "\\(|R|=14,\\ R^{-1}=\\dfrac{1}{14}\\begin{bmatrix}2 & -1 \\\\ 6 & 4\\end{bmatrix};\\ RR^{-1}=R^{-1}R=\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}=I\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(Y=\\begin{bmatrix}1 & 2 \\\\ 2 & 3\\end{bmatrix}\\) and \\(Z=\\begin{bmatrix}2 & 3 \\\\ 1 & 2\\end{bmatrix}\\), verify that \\((YZ)^{-1}=Z^{-1}Y^{-1}\\).",
                  "answer": "\\(YZ=\\begin{bmatrix}4 & 7 \\\\ 7 & 12\\end{bmatrix},\\ |YZ|=-1,\\ (YZ)^{-1}=\\begin{bmatrix}-12 & 7 \\\\ 7 & -4\\end{bmatrix}.\\ \\ Z^{-1}=\\begin{bmatrix}2 & -3 \\\\ -1 & 2\\end{bmatrix},\\ Y^{-1}=\\begin{bmatrix}-3 & 2 \\\\ 2 & -1\\end{bmatrix},\\ Z^{-1}Y^{-1}=\\begin{bmatrix}-12 & 7 \\\\ 7 & -4\\end{bmatrix}.\\ \\text{Hence verified.}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "What is the relation among \\(|A|\\), \\(|A^{-1}|\\) and \\(|\\text{adj }A|\\) if \\(A=\\begin{bmatrix}5 & 7 \\\\ 2 & 3\\end{bmatrix}\\)?",
                  "answer": "\\(|A|=15-14=1,\\ A^{-1}=\\begin{bmatrix}3 & -7 \\\\ -2 & 5\\end{bmatrix}\\Rightarrow|A^{-1}|=1,\\ \\text{adj }A=\\begin{bmatrix}3 & -7 \\\\ -2 & 5\\end{bmatrix}\\Rightarrow|\\text{adj }A|=1.\\ \\text{So }|A|=|A^{-1}|=|\\text{adj }A|=1\\ \\ (\\text{in general }|A^{-1}|=\\tfrac{1}{|A|},\\ |\\text{adj }A|=|A|).\\)"
                }
              ]
            },
            {
              "stem": "Write these matrix equations into a system of linear equations, if possible.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\begin{bmatrix}4&2\\\\3&1\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}6\\\\4\\end{bmatrix}\\)",
                  "answer": "\\(4x+2y=6,\\quad 3x+y=4\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\begin{bmatrix}5&0\\\\0&4\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}10\\\\20\\end{bmatrix}\\)",
                  "answer": "\\(5x=10,\\quad 4y=20\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\begin{bmatrix}0\\\\3\\end{bmatrix}\\times\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}12\\\\24\\end{bmatrix}\\)",
                  "answer": "Not possible: the product of a 2×1 matrix and a 2×1 matrix is not defined."
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\begin{bmatrix}x&y\\end{bmatrix}\\begin{bmatrix}5\\\\3\\end{bmatrix}=\\begin{bmatrix}2\\end{bmatrix}\\)",
                  "answer": "\\(5x+3y=2\\)"
                }
              ]
            },
            {
              "stem": "Systems of linear equations in matrix form.",
              "parts": [
                {
                  "label": "(a)(i)",
                  "text": "Write in matrix form: \\(x+y=2,\\ \\ x-y=4\\)",
                  "answer": "\\(\\begin{bmatrix}1&1\\\\1&-1\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}2\\\\4\\end{bmatrix}\\)"
                },
                {
                  "label": "(a)(ii)",
                  "text": "Write in matrix form: \\(2x+y=90,\\ \\ 5y-x=10\\)",
                  "answer": "\\(\\begin{bmatrix}2&1\\\\-1&5\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}90\\\\10\\end{bmatrix}\\)"
                },
                {
                  "label": "(a)(iii)",
                  "text": "Write in matrix form: \\(y=3,\\ \\ x=4\\)",
                  "answer": "\\(\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}3\\\\4\\end{bmatrix}\\)"
                },
                {
                  "label": "(b)",
                  "text": "If the matrix of coefficients of \\(5x-4y=30,\\ 10x-ky=60\\) is singular, find \\(k\\).",
                  "answer": "\\(\\begin{vmatrix}5&-4\\\\10&-k\\end{vmatrix}=-5k+40=0\\Rightarrow k=8\\)"
                }
              ]
            },
            {
              "stem": "Use the Matrix Inversion Method to solve the following systems of linear equations, if possible.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(4x+3y=-6,\\ \\ x+2y=1\\)",
                  "answer": "\\(A=\\begin{bmatrix}4 & 3 \\\\ 1 & 2\\end{bmatrix},\\ |A|=5,\\ A^{-1}=\\begin{bmatrix}\\dfrac{2}{5} & - \\dfrac{3}{5} \\\\ - \\dfrac{1}{5} & \\dfrac{4}{5}\\end{bmatrix}\\Rightarrow\\begin{bmatrix}x\\\\y\\end{bmatrix}=A^{-1}B\\Rightarrow x=-3,\\ y=2\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(-x+2y=1.5,\\ \\ 5x+4y=3\\)",
                  "answer": "\\(A=\\begin{bmatrix}-1 & 2 \\\\ 5 & 4\\end{bmatrix},\\ |A|=-14,\\ A^{-1}=\\begin{bmatrix}- \\dfrac{2}{7} & \\dfrac{1}{7} \\\\ \\dfrac{5}{14} & \\dfrac{1}{14}\\end{bmatrix}\\Rightarrow\\begin{bmatrix}x\\\\y\\end{bmatrix}=A^{-1}B\\Rightarrow x=0,\\ y=\\dfrac{3}{4}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(2y=10-16x,\\ \\ 24x=15-3y\\)",
                  "answer": "Not possible: \\(|A|=0\\), so the coefficient matrix is singular and has no inverse (the system has no unique solution)."
                },
                {
                  "label": "(iv)",
                  "text": "\\(9-x=7y,\\ \\ 14y+2x=18\\)",
                  "answer": "Not possible: \\(|A|=0\\), so the coefficient matrix is singular and has no inverse (the system has no unique solution)."
                }
              ]
            },
            {
              "stem": "Use Cramer's rule to solve the following systems of linear equations, if possible.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(2x+3y=5,\\ \\ 5x+10y=10\\)",
                  "answer": "\\(\\Delta=5,\\ \\Delta_x=20,\\ \\Delta_y=-5\\Rightarrow x=4,\\ y=-1\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(x=\\dfrac23-2y,\\ \\ 4y=3-3x\\)",
                  "answer": "\\(\\Delta=-2,\\ \\Delta_x=- \\dfrac{10}{3},\\ \\Delta_y=1\\Rightarrow x=\\dfrac{5}{3},\\ y=- \\dfrac{1}{2}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\dfrac{6}{10}x+\\dfrac{8}{10}y=20,\\ \\ \\dfrac{8}{10}x-\\dfrac{6}{10}y=10\\)",
                  "answer": "\\(\\Delta=-1,\\ \\Delta_x=-20,\\ \\Delta_y=-10\\Rightarrow x=20,\\ y=10\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(16x-10+2y=0,\\ \\ 15-3y-24x=0\\)",
                  "answer": "Not possible: \\(\\Delta=0\\), so Cramer's rule cannot give a unique solution."
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 3.4 (word problems)",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "From the two acute angles of a right triangle, one angle is \\(10^\\circ\\) less than the other. Find both the acute angles by using Cramer's rule.",
                  "answer": "\\(x+y=90,\\ x-y=-10:\\ \\Delta=-2,\\ \\Delta_x=-80,\\ \\Delta_y=-100\\Rightarrow x=40^\\circ,\\ y=50^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "In a quiz, Abdullah correctly replied 15 out of 20 questions from literature and science, getting Rs. 125. If every correct literature reply is credited Rs. 5 and every correct science reply Rs. 10, find the number of correct replies of literature and science separately.",
                  "answer": "\\(l+s=15,\\ 5l+10s=125\\Rightarrow s=10,\\ l=5.\\ \\text{Literature: }5,\\ \\text{science: }10\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Asad bought 3 notebooks and 2 books paying Rs. 600, and Iman bought 4 notebooks and 1 book paying Rs. 550. Find the cost of each notebook and book (use Cramer's rule).",
                  "answer": "\\(3n+2b=600,\\ 4n+b=550:\\ \\Delta=-5,\\ \\Delta_n=-500,\\ \\Delta_b=-750\\Rightarrow n=100,\\ b=150.\\ \\text{Notebook: Rs. }100,\\ \\text{book: Rs. }150\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sum of ages of two sisters Sundas and Zenab is 22 years. Sundas is 1 year older than twice the age of Zenab. Find the ages of both sisters by using the matrix inversion method.",
                  "answer": "\\(S+Z=22,\\ S-2Z=1\\Rightarrow\\begin{bmatrix}1&1\\\\1&-2\\end{bmatrix}\\begin{bmatrix}S\\\\Z\\end{bmatrix}=\\begin{bmatrix}22\\\\1\\end{bmatrix}\\Rightarrow S=15,\\ Z=7\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Two trucks have capacities of 10 tons and 12 tons. They made a total of 20 round trips to haul 226 tons of sand to the community park. How many round trips did each truck make?",
                  "answer": "\\(x+y=20,\\ 10x+12y=226\\Rightarrow x=7,\\ y=13.\\ \\text{The 10-ton truck made 7 trips, the 12-ton truck made 13 trips}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "To make 20 kg of aluminium alloy with 70% aluminium, a metallurgist wants to use two metals with 55% and 80% aluminium content. How much of each metal should he use?",
                  "answer": "\\(x+y=20,\\ 0.55x+0.80y=14\\Rightarrow x=8,\\ y=12.\\ \\text{He needs 8 kg of the 55\\% metal and 12 kg of the 80\\% metal}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Soybean meal contains 16% protein and corn meal contains 9% protein. How many pounds of each should be mixed together to get a 350-lb mixture that is 12% protein?",
                  "answer": "\\(x+y=350,\\ 0.16x+0.09y=42\\Rightarrow x=150,\\ y=200.\\ \\text{150 lb soybean meal and 200 lb corn meal}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The perimeter of a lot is 190 m. The width is one fourth of the length. Find the dimensions.",
                  "answer": "\\(2(l+w)=190,\\ w=\\tfrac14l\\Rightarrow\\tfrac52l=95\\Rightarrow l=76\\text{ m},\\ w=19\\text{ m}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Misc Ex 3 (Review Exercise 3 — non-MCQ)",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(P=\\begin{bmatrix}5 & -1 \\\\ 2 & -4\\end{bmatrix}\\), show that \\(PP^{-1}=P^{-1}P=I\\).",
                  "answer": "\\(|P|=-20+2=-18,\\ P^{-1}=-\\dfrac{1}{18}\\begin{bmatrix}-4 & 1 \\\\ -2 & 5\\end{bmatrix}=\\begin{bmatrix}\\dfrac{2}{9} & - \\dfrac{1}{18} \\\\ \\dfrac{1}{9} & - \\dfrac{5}{18}\\end{bmatrix};\\ PP^{-1}=P^{-1}P=\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}=I\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Solve \\(5x-4=y;\\ 2y+8=10x\\) by the Matrix Inversion Method, if possible.",
                  "answer": "\\(5x-y=4,\\ -10x+2y=-8:\\ |A|=\\begin{vmatrix}5&-1\\\\-10&2\\end{vmatrix}=10-10=0.\\) The matrix is singular, so the inverse does not exist and the method fails (the two equations are equivalent: infinitely many solutions)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Use Cramer's rule for the solution of \\(5x+2y=19\\) and \\(10x+4y=38\\), if possible.",
                  "answer": "\\(\\Delta=\\begin{vmatrix}5&2\\\\10&4\\end{vmatrix}=20-20=0,\\ \\Delta_x=0,\\ \\Delta_y=0.\\) Since \\(\\Delta=0\\), Cramer's rule cannot give a unique solution (the second equation is twice the first: infinitely many solutions)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The daily sums of labour and material costs of Haani's and Massab's Home Industries are Rs. 20,000 and Rs. 40,000 respectively. The labour rate and material rate are the same for both. Haani's Home Industry has 6 workers who make 80 items and Massab's has 12 workers who make 160 items. Find the labour and the material cost.",
                  "answer": "\\(6l+80m=20000,\\ 12l+160m=40000:\\ \\begin{vmatrix}6&80\\\\12&160\\end{vmatrix}=960-960=0.\\) The second equation is twice the first, so the system is singular: the given data do not determine unique labour and material rates."
                }
              ]
            }
          ]
        }
      ],
      "long": []
    },
    {
      "id": 4,
      "name": "Linear and Quadratic Inequalities",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 4.1",
          "questions": [
            {
              "stem": "Solve the inequality and graph the solution.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(5x-12\\le3x-4\\)",
                  "answer": "\\(2x\\le8\\Rightarrow x\\le4\\) Graph: closed (filled) circle at 4, shade to the left."
                },
                {
                  "label": "(ii)",
                  "text": "\\(1-8x\\le-4(2x-1)\\)",
                  "answer": "\\(1-8x\\le-8x+4\\Rightarrow1\\le4\\), which is always true. Solution: all real numbers; the whole number line is shaded."
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\dfrac{-2}{3}x-2<\\dfrac13x+8\\)",
                  "answer": "\\(-x<10\\Rightarrow x>-10\\) Graph: open circle at \\(-10\\), shade to the right."
                },
                {
                  "label": "(iv)",
                  "text": "\\(8-\\dfrac45x>-14+2x\\)",
                  "answer": "\\(22>\\dfrac{14}{5}x\\Rightarrow x<\\dfrac{55}{7}\\) Graph: open circle at \\(\\tfrac{55}{7}\\approx7.86\\), shade to the left."
                },
                {
                  "label": "(v)",
                  "text": "\\(-0.6(x-5)\\le15\\)",
                  "answer": "\\(x-5\\ge-25\\Rightarrow x\\ge-20\\) Graph: closed circle at \\(-20\\), shade to the right."
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\dfrac{-1}{4}(x-12)>-2\\)",
                  "answer": "\\(x-12<8\\Rightarrow x<20\\) Graph: open circle at 20, shade to the left."
                }
              ]
            },
            {
              "stem": "Translate the phrase into an inequality. Then solve the inequality and graph the solution.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "Four more than the product of 3 and \\(x\\) is less than 40.",
                  "answer": "\\(3x+4<40\\Rightarrow x<12\\) Graph: open circle at 12, shade to the left."
                },
                {
                  "label": "(ii)",
                  "text": "Twice the sum of \\(x\\) and 8 is less than or equal to \\(-2\\).",
                  "answer": "\\(2(x+8)\\le-2\\Rightarrow x\\le-9\\) Graph: closed circle at \\(-9\\), shade to the left."
                }
              ]
            },
            {
              "stem": "Write and solve an inequality to find the possible values of \\(x\\).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "Area \\(>81\\) square feet.",
                  "answer": "\\(9(x+2)>81\\Rightarrow x+2>9\\Rightarrow x>7\\)",
                  "diagram": "<svg viewBox=\"0 0 220 110\" width=\"240\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"150\" height=\"60\" fill=\"none\" stroke=\"#1c2b4a\" stroke-width=\"2\"/><text x=\"185\" y=\"55\" font-size=\"14\">9 ft</text><text x=\"80\" y=\"100\" font-size=\"14\">(x + 2) ft</text></svg>"
                },
                {
                  "label": "(ii)",
                  "text": "Area \\(\\le44\\) square centimetres.",
                  "answer": "\\(\\tfrac12(8)(x+1)\\le44\\Rightarrow x+1\\le11\\Rightarrow x\\le10\\)",
                  "diagram": "<svg viewBox=\"0 0 220 130\" width=\"220\" height=\"130\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,110 30,20 150,110\" fill=\"none\" stroke=\"#1c2b4a\" stroke-width=\"2\"/><text x=\"5\" y=\"70\" font-size=\"14\">8 cm</text><text x=\"65\" y=\"128\" font-size=\"14\">(x + 1) cm</text></svg>"
                }
              ]
            },
            {
              "stem": "Solve each inequality.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((x+1)(x-3)>0\\)",
                  "answer": "\\(x<-1\\ \\text{ or }\\ x>3\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\((x-9)(x+1)<0\\)",
                  "answer": "\\(-1<x<9\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(x^{2}-x-90>0\\)",
                  "answer": "\\((x-10)(x+9)>0\\Rightarrow x<-9\\ \\text{ or }\\ x>10\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(x^{2}+4x-21<0\\)",
                  "answer": "\\((x+7)(x-3)<0\\Rightarrow-7<x<3\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(x^{2}+8x+16\\ge0\\)",
                  "answer": "\\((x+4)^{2}\\ge0\\), true for every real \\(x\\): solution is all real numbers."
                },
                {
                  "label": "(vi)",
                  "text": "\\(9x^{2}-6x+1\\le0\\)",
                  "answer": "\\((3x-1)^{2}\\le0\\Rightarrow x=\\dfrac13\\) (only one solution)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Mr. Khalid wants to make a rectangular garden with a perimeter of 68 ft. He would like the area of the garden to be at least 240 square feet. What would the width of the garden be?",
                  "answer": "\\(l+w=34,\\ w(34-w)\\ge240\\Rightarrow w^{2}-34w+240\\le0\\Rightarrow(w-10)(w-24)\\le0\\Rightarrow10\\le w\\le24\\) feet (if the width is taken as the shorter side, \\(10\\le w\\le17\\))."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Are \\(-2,-1,0,1,2\\) solutions of the inequality \\(2x^{2}+3x+1\\le0\\)?",
                  "answer": "\\(2x^{2}+3x+1=(2x+1)(x+1)\\le0\\Rightarrow-1\\le x\\le-\\dfrac12\\) Only \\(x=-1\\) (from the given values) is a solution; \\(-2,0,1,2\\) are not."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The stopping distance \\(d(x)\\) (in metres) of a car travelling at \\(x\\) km/h is modelled by \\(d(x)=0.05x^{2}+0.2x\\). If the maximum stopping distance allowed in a school zone is 35 metres, find the speed range that ensures the stopping distance does not exceed this limit.",
                  "answer": "\\(0.05x^{2}+0.2x\\le35\\Rightarrow x^{2}+4x-700\\le0\\Rightarrow-2-8\\sqrt{11}\\le x\\le-2+8\\sqrt{11}.\\) Since speed is positive: \\(0<x\\le-2+8\\sqrt{11}\\approx24.5\\) km/h."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A rectangular garden is to be enclosed with a fence. The total length of the fence is at most 60 metres and the width \\(x\\) of the garden is twice its length. Find the possible dimensions of the garden.",
                  "answer": "\\(\\text{Length }l,\\ \\text{width }x=2l:\\ 2(l+2l)\\le60\\Rightarrow6l\\le60\\Rightarrow l\\le10.\\) So \\(0<l\\le10\\) m and width \\(=2l\\), i.e. \\(0<x\\le20\\) m."
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 4.2",
          "questions": [
            {
              "stem": "Tell whether the ordered pair is a solution of the inequality.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((0,0);\\ \\ x+y<-4\\)",
                  "answer": "\\(0<-4\\) is false. Not a solution."
                },
                {
                  "label": "(ii)",
                  "text": "\\((-2,-3);\\ \\ y-x>-2\\)",
                  "answer": "\\(-3-(-2)=-1>-2\\) is true. It is a solution."
                },
                {
                  "label": "(iii)",
                  "text": "\\((5,2);\\ \\ 2x+3y\\ge14\\)",
                  "answer": "\\(10+6=16\\ge14\\) is true. It is a solution."
                },
                {
                  "label": "(iv)",
                  "text": "\\((-1,5);\\ \\ 4x-7y>28\\)",
                  "answer": "\\(-4-35=-39>28\\) is false. Not a solution."
                },
                {
                  "label": "(v)",
                  "text": "\\((-9,-7);\\ \\ y\\le8\\)",
                  "answer": "\\(-7\\le8\\) is true. It is a solution."
                },
                {
                  "label": "(vi)",
                  "text": "\\((-4,0);\\ \\ x\\ge-3\\)",
                  "answer": "\\(-4\\ge-3\\) is false. Not a solution."
                }
              ]
            },
            {
              "stem": "Graph the inequality.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(x-y<-3\\)",
                  "answer": "Boundary: dashed line \\(x-y=-3\\) through \\((-3,0)\\) and \\((0,3)\\). Test point \\((0,0)\\): \\(0<-3\\) is false, so shade the side that does NOT contain the origin (above the line)."
                },
                {
                  "label": "(ii)",
                  "text": "\\(-3y-2x<12\\)",
                  "answer": "Boundary: dashed line \\(2x+3y=-12\\) through \\((-6,0)\\) and \\((0,-4)\\). Test point \\((0,0)\\): \\(0<12\\) is true, so shade the side containing the origin."
                },
                {
                  "label": "(iii)",
                  "text": "\\(x-y\\ge2\\)",
                  "answer": "Boundary: solid line \\(x-y=2\\) through \\((2,0)\\) and \\((0,-2)\\). Test point \\((0,0)\\): \\(0\\ge2\\) is false, so shade the side away from the origin (below the line)."
                },
                {
                  "label": "(iv)",
                  "text": "\\(2x+y\\ge8\\)",
                  "answer": "Boundary: solid line \\(2x+y=8\\) through \\((4,0)\\) and \\((0,8)\\). Test point \\((0,0)\\): \\(0\\ge8\\) is false, so shade the side away from the origin (above the line)."
                },
                {
                  "label": "(v)",
                  "text": "\\(y<-5\\)",
                  "answer": "Boundary: dashed horizontal line \\(y=-5\\). Shade the region below the line."
                },
                {
                  "label": "(vi)",
                  "text": "\\(x\\ge4\\)",
                  "answer": "Boundary: solid vertical line \\(x=4\\). Shade the region to the right of the line."
                },
                {
                  "label": "(vii)",
                  "text": "\\(\\dfrac12(x+2)+3y<8\\)",
                  "answer": "\\(x+2+6y<16\\Rightarrow x+6y<14\\). Boundary: dashed line through \\((14,0)\\) and \\((0,\\tfrac73)\\). Test point \\((0,0)\\): \\(0<14\\) is true, so shade the side containing the origin."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Can we use \\((0,0)\\) as a test point when graphing \\(x+y>0\\)? Explain with reason.",
                  "answer": "No. The boundary line \\(x+y=0\\) passes through \\((0,0)\\), so the origin lies ON the line and cannot show which side to shade. Choose a point not on the line, e.g. \\((1,0)\\): \\(1>0\\) is true, so shade the side containing \\((1,0)\\) (above the line)."
                }
              ]
            },
            {
              "stem": "Write the verbal sentence as an inequality. Then graph the inequality.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "Three less than \\(x\\) is greater than or equal to \\(y\\).",
                  "answer": "\\(x-3\\ge y\\) Graph: solid line \\(y=x-3\\); test \\((0,0)\\): \\(-3\\ge0\\) false, so shade below the line (away from the origin)."
                },
                {
                  "label": "(ii)",
                  "text": "The product of \\(-2\\) and \\(y\\) is less than or equal to the sum of \\(x\\) and 6.",
                  "answer": "\\(-2y\\le x+6\\) Graph: solid line \\(x+2y=-6\\) through \\((-6,0)\\) and \\((0,-3)\\); test \\((0,0)\\): \\(0\\le6\\) true, so shade the side containing the origin."
                },
                {
                  "label": "(iii)",
                  "text": "The sum of \\(x\\) and the product of 4 and \\(y\\) is less than \\(-2\\).",
                  "answer": "\\(x+4y<-2\\) Graph: dashed line \\(x+4y=-2\\) through \\((-2,0)\\) and \\((0,-\\tfrac12)\\); test \\((0,0)\\): \\(0<-2\\) false, so shade away from the origin."
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 4.3",
          "questions": [
            {
              "stem": "Solve the absolute valued equations.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(8|x-3|=88\\)",
                  "answer": "\\(|x-3|=11\\Rightarrow x-3=\\pm11\\Rightarrow x=14\\ \\text{or}\\ x=-8\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(|2x+9|=30\\)",
                  "answer": "\\(2x+9=\\pm30\\Rightarrow x=\\dfrac{21}{2}\\ \\text{or}\\ x=-\\dfrac{39}{2}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(|x-3|=-26\\)",
                  "answer": "No solution, since an absolute value cannot be negative."
                },
                {
                  "label": "(iv)",
                  "text": "\\(3|x+6|=9x-6\\)",
                  "answer": "\\(|x+6|=3x-2\\ (\\text{needs }x\\ge\\tfrac23).\\ x+6=3x-2\\Rightarrow x=4\\ \\checkmark;\\ x+6=-(3x-2)\\Rightarrow x=-1\\ (\\text{rejected, as }3x-2<0).\\ \\text{So }x=4\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(|x-3|=2x\\)",
                  "answer": "\\(\\text{Need }x\\ge0.\\ x-3=2x\\Rightarrow x=-3\\ (\\text{rejected});\\ x-3=-2x\\Rightarrow x=1\\ \\checkmark.\\ \\text{So }x=1\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\left|\\dfrac{4-5x}{6}\\right|=7\\)",
                  "answer": "\\(4-5x=\\pm42\\Rightarrow x=-\\dfrac{38}{5}\\ \\text{or}\\ x=\\dfrac{46}{5}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Explain why the equation \\(|3x-6|+7=4\\) has no solution.",
                  "answer": "\\(|3x-6|+7=4\\Rightarrow|3x-6|=-3\\), but an absolute value is never negative, so the equation has no solution."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Before the start of a professional basketball game, a basketball must be inflated to an air pressure of 8 pounds per square inch (psi) with an absolute error (deviation) of 0.5 psi. Find the minimum and maximum air pressure acceptable for the basketball.",
                  "answer": "\\(|p-8|\\le0.5\\Rightarrow7.5\\le p\\le8.5\\) Minimum 7.5 psi, maximum 8.5 psi."
                }
              ]
            },
            {
              "stem": "Solve the inequality and graph the solution.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(|9x-1|\\le10\\)",
                  "answer": "\\(-10\\le9x-1\\le10\\Rightarrow-1\\le x\\le\\dfrac{11}{9}\\) Graph: closed circles at \\(-1\\) and \\(\\tfrac{11}{9}\\), shade between."
                },
                {
                  "label": "(ii)",
                  "text": "\\(|2x-7|<1\\)",
                  "answer": "\\(-1<2x-7<1\\Rightarrow3<x<4\\) Graph: open circles at 3 and 4, shade between."
                },
                {
                  "label": "(iii)",
                  "text": "\\(5\\left|\\dfrac12x+3\\right|>5\\)",
                  "answer": "\\(\\left|\\dfrac12x+3\\right|>1\\Rightarrow x>-4\\ \\text{or}\\ x<-8\\) Graph: open circles at \\(-8\\) and \\(-4\\), shade outward."
                },
                {
                  "label": "(iv)",
                  "text": "\\(3|14-x|>6\\)",
                  "answer": "\\(|14-x|>2\\Rightarrow x<12\\ \\text{or}\\ x>16\\) Graph: open circles at 12 and 16, shade outward."
                },
                {
                  "label": "(v)",
                  "text": "\\(\\left|\\dfrac{3x-2}{5}\\right|\\le2\\)",
                  "answer": "\\(-10\\le3x-2\\le10\\Rightarrow-\\dfrac83\\le x\\le4\\) Graph: closed circles at \\(-\\tfrac83\\) and 4, shade between."
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\left|\\dfrac{2-5x}{4}\\right|\\ge\\dfrac23\\)",
                  "answer": "\\(|2-5x|\\ge\\dfrac83\\Rightarrow x\\le-\\dfrac{2}{15}\\ \\text{or}\\ x\\ge\\dfrac{14}{15}\\) Graph: closed circles at \\(-\\tfrac{2}{15}\\) and \\(\\tfrac{14}{15}\\), shade outward."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "An essay contest requires that essay entries consist of 500 words with an absolute deviation of at most 30 words. What are the possible numbers of words the essay can have?",
                  "answer": "\\(|w-500|\\le30\\Rightarrow470\\le w\\le530\\) words."
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 4.4",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Describe the steps you would take to graph the system of inequalities \\(x-y<6\\) (Inequality I) and \\(y\\ge3\\) (Inequality II).",
                  "answer": "1) Graph the boundary of I: the dashed line \\(x-y=6\\) (through \\((6,0)\\) and \\((0,-6)\\)); test \\((0,0)\\): \\(0<6\\) is true, so shade the side containing the origin (above the line). 2) Graph the boundary of II: the solid horizontal line \\(y=3\\); \\(y\\ge3\\), so shade above it. 3) The solution of the system is the region where the two shadings overlap."
                }
              ]
            },
            {
              "stem": "Tell whether each ordered pair is a solution of the system of inequalities.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\((3,1),(0,0),(-3,1),(4,1);\\ \\ x+y<1,\\ x-y<2\\)",
                  "answer": "\\((3,1):\\ 4<1\\ \\text{false};\\ (0,0):\\ 0<1,\\ 0<2\\ \\text{true};\\ (-3,1):\\ -2<1,\\ -4<2\\ \\text{true};\\ (4,1):\\ 5<1\\ \\text{false}\\) Solutions: \\((0,0)\\) and \\((-3,1)\\)."
                },
                {
                  "label": "(ii)",
                  "text": "\\((1,-1),(4,1),(2,0),(3,2);\\ \\ 2x-y\\le5,\\ x+2y>2\\)",
                  "answer": "\\((1,-1):\\ 1-2=-1>2\\ \\text{false};\\ (4,1):\\ 7\\le5\\ \\text{false};\\ (2,0):\\ 2>2\\ \\text{false};\\ (3,2):\\ 4\\le5,\\ 7>2\\ \\text{true}\\) Solution: \\((3,2)\\) only."
                }
              ]
            },
            {
              "stem": "Graph the system of inequalities.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(-x+y<0;\\ \\ x+y>3\\)",
                  "answer": "Both boundaries are dashed: \\(y=x\\) (shade below it) and \\(y=3-x\\) (shade above it). The lines meet at \\((\\tfrac32,\\tfrac32)\\); the solution is the region to the right of that point between the two lines."
                },
                {
                  "label": "(ii)",
                  "text": "\\(y-2x\\ge3;\\ \\ y-2x\\le3\\)",
                  "answer": "Both inequalities have the same boundary \\(y=2x+3\\). Together they mean \\(y-2x=3\\), so the solution set is just the line \\(y=2x+3\\) (through \\((0,3)\\) and \\((-\\tfrac32,0)\\))."
                },
                {
                  "label": "(iii)",
                  "text": "\\(y\\le-2;\\ \\ x\\ge2\\)",
                  "answer": "Solid lines \\(y=-2\\) (shade below) and \\(x=2\\) (shade right). The solution is the region to the lower right of the corner point \\((2,-2)\\), including the boundary."
                },
                {
                  "label": "(iv)",
                  "text": "\\(y\\ge2x-1;\\ \\ y<-x+4\\)",
                  "answer": "Solid line \\(y=2x-1\\) (shade above) and dashed line \\(y=-x+4\\) (shade below). They meet at \\((\\tfrac53,\\tfrac73)\\); the solution is the wedge to the left of that point between the lines."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Does the system of inequalities \\(x-y>5\\) and \\(x-y<1\\) have any solution?",
                  "answer": "No solution. The first requires \\(x-y>5\\) and the second \\(x-y<1\\); no value of \\(x-y\\) can be both greater than 5 and less than 1. Graphically the boundaries \\(x-y=5\\) and \\(x-y=1\\) are parallel and the shaded regions do not overlap."
                }
              ]
            }
          ]
        },
        {
          "exercise": "Misc Ex 4 (Review Exercise 4 — non-MCQ)",
          "questions": [
            {
              "stem": "Solve the inequalities, if possible, graph the solution.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac23x-4\\ge1\\)",
                  "answer": "\\(\\dfrac23x\\ge5\\Rightarrow x\\ge\\dfrac{15}{2}\\) Graph: closed circle at 7.5, shade right."
                },
                {
                  "label": "(ii)",
                  "text": "\\(1-3x\\le-14+2x\\)",
                  "answer": "\\(15\\le5x\\Rightarrow x\\ge3\\) Graph: closed circle at 3, shade right."
                },
                {
                  "label": "(iii)",
                  "text": "\\(7(x-1)>-8+7x\\)",
                  "answer": "\\(-7>-8\\), which is always true. Solution: all real numbers."
                },
                {
                  "label": "(iv)",
                  "text": "\\(-3(2x-1)\\ge1-8x\\)",
                  "answer": "\\(-6x+3\\ge1-8x\\Rightarrow2x\\ge-2\\Rightarrow x\\ge-1\\) Graph: closed circle at \\(-1\\), shade right."
                }
              ]
            },
            {
              "stem": "Graph on a plane.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(y>2x\\)",
                  "answer": "Dashed line \\(y=2x\\) through the origin and \\((1,2)\\). Origin is on the line, so use test point \\((0,1)\\): \\(1>0\\) true; shade above the line (left side)."
                },
                {
                  "label": "(ii)",
                  "text": "\\(y<3x\\)",
                  "answer": "Dashed line \\(y=3x\\) through the origin and \\((1,3)\\). Test point \\((1,0)\\): \\(0<3\\) true; shade below the line (right side)."
                },
                {
                  "label": "(iii)",
                  "text": "\\(y\\ge-5\\)",
                  "answer": "Solid horizontal line \\(y=-5\\); shade the region above it."
                },
                {
                  "label": "(iv)",
                  "text": "\\(x\\le6\\)",
                  "answer": "Solid vertical line \\(x=6\\); shade the region to the left of it."
                }
              ]
            },
            {
              "stem": "Write a system of inequalities for the shaded region described.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "The shaded region is a rectangle with vertices \\((2,1),(2,4),(6,4)\\) and \\((6,1)\\).",
                  "answer": "\\(2\\le x\\le6,\\quad 1\\le y\\le4\\)"
                },
                {
                  "label": "(ii)",
                  "text": "The shaded region is a triangle with vertices at \\((3,0),(3,2)\\) and \\((0,-2)\\).",
                  "answer": "\\(x\\le3,\\quad 2x-3y\\le6,\\quad 4x-3y\\ge6\\) (sides: \\(x=3\\); line through \\((0,-2),(3,0)\\): \\(2x-3y=6\\); line through \\((0,-2),(3,2)\\): \\(4x-3y=6\\))."
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
