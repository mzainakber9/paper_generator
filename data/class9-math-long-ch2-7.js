/*
  CLASS 9 — MATH — LONG QUESTIONS — CHAPTERS 2 TO 7
  ----------------------------------------------------
  These chapters merge (by id) with the short-question chapters already
  defined in class9-math-ch1-4.js and class9-math-ch5-8.js — only the
  "long" arrays here are populated; mcq/short stay empty in this file
  since they live in the other files.

  Long questions selected as multi-step / higher-difficulty content,
  distinct from the short-question pool for the same chapters.
*/
var CLASS9_MATH_LONG_CH2_7 = {
  chapters: [
    {
      id: 2,
      name: "Logarithms",
      mcq: [],
      short: [],
      long: [
        {
          exercise: "Ex 2.5 (evaluate using laws of logarithms)",
          questions: [
            {
              text: "Evaluate, using laws of logarithms: \\(\\dfrac{\\sqrt[3]{8.59}\\times(55.6)^{2}}{2.51\\times\\sqrt{2.12}}\\)",
              answer: "\\(\\approx1732.21\\) (take common log of both sides, expand using product/quotient/power laws, then take antilog)"
            },
            {
              text: "If \\(\\log_b2=0.3010\\), \\(\\log_b3=0.4771\\), \\(\\log_b5=0.6990\\), evaluate \\(\\log_b\\dfrac{\\sqrt[3]{450}}{\\sqrt{27}}\\) using laws of logarithms.",
              answer: "\\(\\approx0.1688\\)"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Sets and Relations",
      mcq: [],
      short: [],
      long: [
        {
          exercise: "Ex 3.1 (verify laws using Venn diagram)",
          questions: [
            {
              text: "If \\(U=\\{1,2,3,\\ldots,15\\}\\), \\(A=\\{2,4,6,8,10\\}\\), \\(B=\\{1,2,3,4,5,6,7\\}\\) and \\(C=\\{2,3,5,7,11\\}\\), verify the associative property of union, \\((A\\cup B)\\cup C=A\\cup(B\\cup C)\\), using a Venn diagram.",
              answer: "Both \\((A\\cup B)\\cup C\\) and \\(A\\cup(B\\cup C)\\) equal \\(\\{1,2,3,4,5,6,7,8,10,11\\}\\) — verified."
            }
          ]
        },
        {
          exercise: "Ex 3.4 (binary relations, domain & range)",
          questions: [
            {
              text: "If \\(S=\\{1,2,4,8\\}\\) and \\(T=\\{3^0,3^1,3^2\\}\\), write the following binary relations in tabular form and find the domain and range of each: (i) \\(R_1=\\{(x,y)\\,/\\,x\\in S, y\\in T, x=y\\}\\) (ii) \\(R_2=\\{(x,y)\\,/\\,x\\in S, y\\in T, y<x\\}\\)",
              answer: "\\(T=\\{1,3,9\\}\\). (i) \\(R_1=\\{(1,1)\\}\\); Dom \\(=\\{1\\}\\), Range \\(=\\{1\\}\\). (ii) \\(R_2=\\{(2,1),(4,1),(4,3),(8,1),(8,3)\\}\\); Dom \\(=\\{2,4,8\\}\\), Range \\(=\\{1,3\\}\\)"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Factorization and Algebraic Manipulation",
      mcq: [],
      short: [],
      long: [
        {
          exercise: "Ex 4.7 (square root — perfect square condition)",
          questions: [
            {
              text: "For what values of \\(m\\) and \\(n\\) is \\(9x^{4}-24x^{3}-14x^{2}+mx+n\\) a complete square? (Use the division method.)",
              answer: "\\(m=40\\), \\(n=25\\)"
            }
          ]
        },
        {
          exercise: "Ex 4.2 (cube identities)",
          questions: [
            {
              text: "Factorize completely: \\(125x^{3}-75x^{2}y+15xy^{2}-y^{3}\\)",
              answer: "\\((5x-y)^{3}\\)"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Trigonometry and Bearing",
      mcq: [],
      short: [],
      long: [
        {
          exercise: "Ex 6.5 (elevation, two observation points)",
          questions: [
            {
              text: "From a point A on the ground, at a distance of 200 m from a tower, the angle of elevation of the top of the tower is \\(\\alpha\\). There is another point B, 80 m nearer to the tower. The angle of elevation of the top of the tower from B is \\(\\beta\\). If \\(\\tan\\alpha=\\dfrac25\\), find the height of the tower and the value of \\(\\beta\\).",
              answer: "Height \\(=80\\text{ m}\\); \\(\\beta=\\tan^{-1}\\!\\left(\\dfrac23\\right)\\approx33.69^{\\circ}\\)"
            }
          ]
        },
        {
          exercise: "Ex 6.6 (bearing — multiple points)",
          questions: [
            {
              text: "The positions of three ships A, B and C are such that the bearing of B from A is \\(045^{\\circ}\\), and ship C is due east of A. If the bearing of C from B is \\(180^{\\circ}\\) and \\(AB=10\\text{ km}\\), find the bearing of A from C and the distance AC.",
              answer: "\\(AC\\approx7.07\\text{ km}\\); bearing of A from C is \\(270^{\\circ}\\) (A is due west of C)."
            }
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Coordinate Geometry",
      mcq: [],
      short: [],
      long: [
        {
          exercise: "Ex 7.2 (midpoint applications)",
          questions: [
            {
              text: "Check, by using the midpoint formula, whether the diagonals of the trapezium PQRS with vertices \\(P(1,0)\\), \\(Q(6,0)\\), \\(R(7,4)\\), \\(S(-1,4)\\) bisect each other or not.",
              answer: "Midpoint of PR \\(=(4,2)\\); midpoint of QS \\(=(2.5,2)\\) — not equal, so the diagonals do NOT bisect each other (as expected for a trapezium that isn't a parallelogram)."
            },
            {
              text: "Label the missing coordinates of the vertices of square OLMN, given \\(O=(0,0)\\) and \\(L=(3,0)\\).",
              answer: "\\(M=(3,3)\\), \\(N=(0,3)\\)"
            }
          ]
        }
      ]
    }
  ]
};
