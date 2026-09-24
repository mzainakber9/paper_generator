/*
  CLASS 11 — MATH — SHORT & LONG QUESTIONS — CHAPTERS 3 TO 4
  ------------------------------------------------------------
  Chapter 3: Vectors
  Chapter 4: Sequences and Series

  Parts-selectable schema — see class11-math-ch1-2.js for the format note.
  mcq stays empty — MCQs live in class11-math-mcq-ch3-4.js.
*/
var CLASS11_MATH_CH3_4 = {
  chapters: [
    {
      id: 3,
      name: "Vectors",
      mcq: [],
      short: [
        {
          exercise: "Ex 3.1 (Q2 — collinearity)",
          questions: [
            {
              stem: "Show that:",
              parts: [
                { label: "(i)", text: "The points \\(A(1,0)\\), \\(B(6,0)\\), \\(C(0,0)\\) are collinear.", answer: "All three lie on the x-axis (\\(y=0\\)), hence collinear." },
                { label: "(ii)", text: "If \\(\\vec a,\\vec b\\) are the position vectors of \\((2,-7)\\) and \\(\\left(\\dfrac{m}{2},11\\right)\\), find \\(m\\) for which \\(\\vec a,\\vec b\\) are collinear.", answer: "\\(m=-\\dfrac{44}{7}\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.1 (Q3 — vector components)",
          questions: [
            {
              stem: "If \\(\\vec u=\\langle-1,1\\rangle,\\ \\vec v=\\langle0,1\\rangle,\\ \\vec w=\\langle3,4\\rangle\\), then:",
              parts: [
                { label: "(ii)", text: "Find \\(\\vec u,\\vec v\\) given \\(\\vec u+\\vec v=\\langle2,-3\\rangle\\) and \\(3\\vec u+2\\vec v=\\langle-1,2\\rangle\\).", answer: "\\(\\vec u=\\langle-5,8\\rangle,\\ \\vec v=\\langle7,-11\\rangle\\)" },
                { label: "(iii)", text: "Find the initial point of \\(\\vec v=\\langle-3,1,2\\rangle\\) if its terminal point is \\((5,0,1)\\).", answer: "Initial point \\(=(8,-1,-1)\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.1 (Q4(iii) — collinear points via position vectors)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find \\(\\lambda\\) for which \\(P,Q,R\\) are collinear, given position vectors \\(\\hat\\imath+2\\hat\\jmath+3\\hat k\\), \\(-2\\hat\\imath+3\\hat\\jmath+5\\hat k\\), \\(\\lambda\\hat\\imath-\\hat k\\).", answer: "\\(\\lambda=7\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.1 (Q5 — unit vector; diagonals of a parallelogram)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "If \\(\\vec a=\\hat\\imath-2\\hat\\jmath+\\hat k,\\ \\vec b=\\hat\\imath-\\hat\\jmath-\\hat k,\\ \\vec c=2\\hat\\imath+\\hat k\\), find a unit vector in the direction of \\(2\\vec a-3\\vec b+\\vec c\\).", answer: "\\(\\hat n=\\dfrac{\\hat\\imath-\\hat\\jmath+6\\hat k}{\\sqrt{38}}\\)" },
                { label: "(ii)", text: "Use vectors to find the lengths of the diagonals of a parallelogram with adjacent sides \\(\\hat\\imath+\\hat\\jmath\\) and \\(\\hat\\imath-2\\hat\\jmath\\).", answer: "Diagonals \\(=\\sqrt5\\) and \\(3\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.1 (Q6(ii) — equilateral triangle)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Show that the points with position vectors \\(2\\hat\\imath+3\\hat\\jmath+\\sqrt3\\hat k\\), \\(\\sqrt{10}\\hat\\imath-\\hat\\jmath+\\sqrt5\\hat k\\), \\(-3\\hat\\imath+\\sqrt3\\hat\\jmath+2\\hat k\\) are vertices of an equilateral triangle.", answer: "\\(|AB|=|BC|=|CA|\\Rightarrow\\) equilateral (verified)." } ] }
          ]
        },
        {
          exercise: "Ex 3.1 (Q9 — dividing a segment internally/externally)",
          questions: [
            {
              stem: "Position vectors of \\(A,B\\) are \\(\\hat\\imath-2\\hat\\jmath+\\hat k\\) and \\(2\\hat\\imath+3\\hat\\jmath-\\hat k\\).",
              parts: [
                { label: "(i)", text: "Find the position vector of \\(P\\) dividing \\(AB\\) in ratio \\(2:3\\) internally.", answer: "\\(\\vec r=\\dfrac75\\hat\\imath+0\\hat\\jmath+\\dfrac15\\hat k\\)" },
                { label: "(ii)", text: "Find the position vector of \\(Q\\) dividing \\(AB\\) in ratio \\(3:2\\) externally.", answer: "\\(\\vec r=4\\hat\\imath+13\\hat\\jmath-5\\hat k\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.1 (Q10(ii) — vertices of a parallelogram)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find \\(x,y\\) if \\(A(1,2),B(4,y),C(x,6),D(3,5)\\) taken in order are the vertices of a parallelogram.", answer: "\\(x=6,\\ y=3\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.2 (Q3 — angle between vectors)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "If \\(\\vec a+\\vec b+\\vec c=\\vec0\\) with \\(|\\vec a|=2,|\\vec b|=3,|\\vec c|=4\\), find the angle between \\(\\vec a\\) and \\(\\vec b\\).", answer: "\\(\\theta=\\cos^{-1}\\!\\left(\\dfrac14\\right)\\)" },
                { label: "(ii)", text: "If \\(|\\vec a+\\vec b|=|\\vec a-\\vec b|\\), find the angle between \\(\\vec a\\) and \\(\\vec b\\).", answer: "\\(\\theta=90^\\circ\\) (i.e. \\(\\vec a\\perp\\vec b\\))" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.2 (Q4 — perpendicularity; angle between cube diagonals)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "If \\(\\vec a=\\hat\\imath-3\\hat\\jmath+4\\hat k,\\ \\vec b=7\\hat\\imath-9\\hat\\jmath+\\hat k,\\ \\vec c=3\\hat\\imath-2\\hat\\jmath+5\\hat k\\), find \\(\\lambda\\) so that \\(\\vec a-\\lambda\\vec b\\) is perpendicular to \\(\\vec c\\).", answer: "\\(\\lambda=\\dfrac{29}{44}\\)" },
                { label: "(ii)", text: "Show that the angle between any two diagonals of a cube is \\(\\cos^{-1}\\!\\left(\\dfrac13\\right)\\).", answer: "\\(\\cos\\theta=\\dfrac13\\Rightarrow\\theta=\\cos^{-1}\\!\\left(\\dfrac13\\right)\\) (proved)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.2 (Q5 — direction cosines; projections)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "If \\(\\vec a=2\\hat\\imath-3\\hat\\jmath+4\\hat k\\), find its direction cosines.", answer: "\\(\\cos\\alpha=\\dfrac{2}{\\sqrt{29}},\\ \\cos\\beta=\\dfrac{-3}{\\sqrt{29}},\\ \\cos\\gamma=\\dfrac{4}{\\sqrt{29}}\\)" },
                { label: "(ii)", text: "If \\(\\vec a=\\hat\\imath-2\\hat\\jmath+3\\hat k,\\ \\vec b=3\\hat\\imath-2\\hat\\jmath+\\hat k,\\ \\vec c=7\\hat\\imath-\\hat\\jmath+8\\hat k\\), find the projection of \\(\\vec a-\\vec b\\) along \\(\\vec c\\), and of \\(\\vec b\\) along \\(\\vec c-\\vec a\\).", answer: "Proj. of \\((\\vec a-\\vec b)\\) along \\(\\vec c\\) \\(=\\dfrac{2}{\\sqrt{114}}\\); proj. of \\(\\vec b\\) along \\((\\vec c-\\vec a)\\) \\(=\\dfrac{21}{\\sqrt{62}}\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.2 (Q7 — dot product sum; resolution of a vector)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "If \\(|\\vec a|=2,|\\vec b|=5,|\\vec c|=4\\) and \\(\\vec a+\\vec b+\\vec c=\\vec0\\), find \\(\\vec a\\cdot\\vec b+\\vec b\\cdot\\vec c+\\vec c\\cdot\\vec a\\).", answer: "\\(-\\dfrac{45}{2}\\)" },
                { label: "(ii)", text: "For any vector \\(\\vec r\\), prove \\(\\vec r=(\\vec r\\cdot\\hat\\imath)\\hat\\imath+(\\vec r\\cdot\\hat\\jmath)\\hat\\jmath+(\\vec r\\cdot\\hat k)\\hat k\\).", answer: "True — resolve \\(\\vec r=x\\hat\\imath+y\\hat\\jmath+z\\hat k\\) and dot with \\(\\hat\\imath,\\hat\\jmath,\\hat k\\) (proved)." }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.2 (Q11 — concurrency proofs)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "Prove that the altitudes of a triangle are concurrent.", answer: "Vector proof shows all three altitudes meet at one point (the orthocentre)." },
                { label: "(ii)", text: "Prove that the angle bisectors of a triangle are concurrent.", answer: "Vector proof shows all three bisectors meet at one point (the incentre)." }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.2 (Q12 — triangle identities by vector method)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "Prove that \\(\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\) using vectors.", answer: "Proved using the dot product of unit vectors \\(\\hat u=\\cos\\alpha\\hat\\imath+\\sin\\alpha\\hat\\jmath\\), \\(\\hat v=\\cos\\beta\\hat\\imath+\\sin\\beta\\hat\\jmath\\) rotated by \\(-\\beta\\)." },
                { label: "(ii)", text: "With usual notation for \\(\\triangle ABC\\), prove \\(c^{2}=a^{2}+b^{2}-2ab\\cos\\gamma\\) and \\(b=a\\cos\\gamma+c\\cos\\alpha\\).", answer: "Proved by taking \\(\\vec a+\\vec b+\\vec c=\\vec0\\) and dotting with itself / with \\(\\vec a\\) (Law of Cosines & projection formula)." }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.2 (Q14–Q16 — work done by a force)",
          questions: [
            { stem: null, parts: [ { label: null, text: "\\(\\vec F=3\\hat\\imath-5\\hat\\jmath+7\\hat k\\) N is applied and moves a body 14 m in the direction of \\(\\hat\\imath-3\\hat\\jmath+\\hat k\\). Find the work done.", answer: "Work \\(=\\dfrac{350}{\\sqrt{11}}\\approx105.5\\) J" } ] },
            { stem: null, parts: [ { label: null, text: "Forces \\(2\\hat\\imath+3\\hat\\jmath-\\hat k\\) and \\(3\\hat\\imath+7\\hat\\jmath+4\\hat k\\) move a particle from \\(P\\left(\\hat\\imath-3\\hat\\jmath+\\tfrac32\\hat k\\right)\\) to \\(Q\\left(2\\hat\\imath-\\hat\\jmath+\\tfrac52\\hat k\\right)\\). Find the work done.", answer: "Work \\(=28\\) units" } ] },
            { stem: null, parts: [ { label: null, text: "A box is dragged with a force of 30 N at \\(30^\\circ\\) to the floor, displaced 10 m. Find the work done.", answer: "Work \\(=150\\sqrt3\\) J \\(\\approx259.8\\) J" } ] }
          ]
        },
        {
          exercise: "Ex 3.3 (Q1(ii) — cross product example)",
          questions: [
            { stem: null, parts: [ { label: null, text: "For \\(\\vec a=7\\hat\\imath+3\\hat\\jmath+9\\hat k,\\ \\vec b=2\\hat\\imath-3\\hat\\jmath+\\hat k\\), find \\(\\vec a\\times\\vec b\\) and \\(\\vec b\\times\\vec a\\), and prove \\(\\vec a\\times\\vec b=-\\vec b\\times\\vec a\\).", answer: "\\(\\vec a\\times\\vec b=30\\hat\\imath+11\\hat\\jmath-27\\hat k\\); \\(\\vec b\\times\\vec a=-30\\hat\\imath-11\\hat\\jmath+27\\hat k\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.3 (Q3 — sine of the angle between two vectors)",
          questions: [
            {
              stem: "Find \\(\\sin\\theta\\) between the given vectors:",
              parts: [
                { label: "(i)", text: "\\(\\vec a=2\\hat\\imath-4\\hat\\jmath+3\\hat k,\\ \\vec b=\\hat\\imath-3\\hat\\jmath+4\\hat k\\)", answer: "\\(\\sin\\theta=\\dfrac{\\sqrt{78}}{\\sqrt{29}\\sqrt{26}}\\)" },
                { label: "(ii)", text: "\\(\\vec a=4\\hat\\imath-3\\hat\\jmath+2\\hat k,\\ \\vec b=3\\hat\\imath-7\\hat\\jmath+5\\hat k\\)", answer: "\\(\\sin\\theta=\\dfrac{\\sqrt{558}}{\\sqrt{29}\\sqrt{83}}\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.3 (Q5 — Lagrange's identity; a perpendicular vector)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "Prove the Lagrange identity \\(|\\vec a\\times\\vec b|^{2}=|\\vec a|^{2}|\\vec b|^{2}-(\\vec a\\cdot\\vec b)^{2}\\).", answer: "Proved by direct expansion of components." },
                { label: "(ii)", text: "For \\(\\vec a=\\hat\\imath-2\\hat\\jmath,\\ \\vec b=2\\hat\\imath+\\hat k,\\ \\vec c=3\\hat\\jmath+2\\hat k\\), find \\(\\vec d\\) perpendicular to both \\(\\vec a,\\vec b\\) with \\(\\vec c\\cdot\\vec d=1\\).", answer: "\\(\\vec d=-\\dfrac25\\hat\\imath-\\dfrac15\\hat\\jmath+\\dfrac45\\hat k\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.3 (Q6(i) — find \\(\\vec b\\) from a cross and a dot product)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find \\(\\vec b\\) such that \\(\\vec a\\times\\vec b=\\vec c\\) and \\(\\vec a\\cdot\\vec b=3\\); \\(\\vec a=\\hat\\imath-2\\hat\\jmath+3\\hat k,\\ \\vec c=\\hat\\imath+\\hat\\jmath-\\hat k\\).", answer: "\\(\\vec b=\\dfrac27\\hat\\imath-\\dfrac57\\hat\\jmath+\\dfrac37\\hat k\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.3 (Q8 — proofs using unit vectors)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "If \\(\\vec a,\\vec b,\\vec c\\) are unit vectors, \\(\\vec a\\perp\\vec b,\\vec a\\perp\\vec c\\), and the angle between \\(\\vec b,\\vec c\\) is \\(\\pi/3\\), prove \\(\\vec a=\\pm2(\\vec b\\times\\vec c)\\).", answer: "\\(|\\vec b\\times\\vec c|=\\sin(\\pi/3)=\\dfrac{\\sqrt3}{2}\\) and \\(\\vec a\\parallel(\\vec b\\times\\vec c)\\Rightarrow\\vec a=\\pm2(\\vec b\\times\\vec c)\\) (proved)." },
                { label: "(ii)", text: "Prove \\(|\\vec a\\times\\vec b|^{2}=\\begin{vmatrix}\\vec a\\cdot\\vec a & \\vec a\\cdot\\vec b\\\\ \\vec a\\cdot\\vec b & \\vec b\\cdot\\vec b\\end{vmatrix}\\).", answer: "Proved (Lagrange's identity in determinant form)." }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.3 (Q9 — magnitude of a cross/dot product)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "If \\(|\\vec a|=3,|\\vec b|=5,\\vec a\\cdot\\vec b=6\\), find \\(|\\vec a\\times\\vec b|\\).", answer: "\\(|\\vec a\\times\\vec b|=\\sqrt{225-36}=\\sqrt{189}=3\\sqrt{21}\\)" },
                { label: "(ii)", text: "If \\(|\\vec a|=2,|\\vec b|=5,|\\vec a\\times\\vec b|=8\\), find \\(\\vec a\\cdot\\vec b\\).", answer: "\\(\\vec a\\cdot\\vec b=\\pm6\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.3 (Q10 — area of parallelogram / triangle)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "Find the area of a parallelogram with adjacent sides \\(\\vec a=2\\hat\\imath-3\\hat\\jmath+\\hat k,\\ \\vec b=\\hat\\imath-2\\hat\\jmath+7\\hat k\\).", answer: "Area \\(=|\\vec a\\times\\vec b|=\\sqrt{531}\\) sq. units" },
                { label: "(ii)", text: "Find the area of the triangle with vertices \\((1,-1,1),(2,1,2),(3,0,-1)\\); also its interior angles.", answer: "Area \\(=\\dfrac{5\\sqrt2}{2}\\) sq. units; angles \\(=\\cos^{-1}\\!\\left(\\dfrac{2}{3\\sqrt6}\\right),\\cos^{-1}\\!\\left(\\dfrac{4}{\\sqrt{66}}\\right),\\cos^{-1}\\!\\left(\\dfrac{7}{3\\sqrt{11}}\\right)\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.3 (Q13 — collinearity)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Show that the points with position vectors \\(\\vec a-\\vec b+3\\vec c,\\ 2\\vec a+3\\vec b-4\\vec c,\\ -7\\vec b+10\\vec c\\) are collinear.", answer: "\\(\\overrightarrow{P_1P_3}=k\\overrightarrow{P_1P_2}\\) for a scalar \\(k\\Rightarrow\\) collinear." } ] }
          ]
        },
        {
          exercise: "Ex 3.3 (Q14 — moment of force)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "Find the moment of force \\(2\\hat\\imath+3\\hat\\jmath+7\\hat k\\) about \\((1,2,3)\\) when applied at \\((-1,2,0)\\).", answer: "\\(\\vec M=9\\hat\\imath+8\\hat\\jmath-6\\hat k\\)" },
                { label: "(ii)", text: "Forces \\(2\\hat\\imath-\\hat\\jmath+3\\hat k\\) and \\(3\\hat\\imath+4\\hat\\jmath-2\\hat k\\) act at \\((1,-2,4)\\). Find the moment about the origin.", answer: "\\(\\vec M=-14\\hat\\imath+19\\hat\\jmath+13\\hat k\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.3 (Q15 — force from a given moment)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "What force produces a moment of magnitude \\(\\sqrt{57}\\) N·m along \\(6\\hat\\imath-21\\hat\\jmath-6\\hat k\\), applied at \\((2,1,-3)\\) about \\((-1,-1,1)\\)?", answer: "\\(\\vec F=\\dfrac{32}{29}\\hat\\imath+\\dfrac{2}{29}\\hat\\jmath+\\dfrac{25}{29}\\hat k\\) (minimum force, \\(\\perp\\) to \\(\\vec r\\))" },
                { label: "(ii)", text: "Where should \\(2\\hat\\imath+2\\hat\\jmath-3\\hat k\\) be applied to produce moment \\(\\vec M=3\\hat\\imath-2\\hat\\jmath+\\hat k\\) about \\((-1,2,-3)\\)?", answer: "Point \\(\\approx\\left(-\\dfrac{21}{17},\\dfrac{23}{17},-\\dfrac{61}{17}\\right)\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.3 (Q16 — moment produced by a force)",
          questions: [
            { stem: null, parts: [ { label: null, text: "A toy car at \\((2,3,5)\\) rotates about the origin under force \\(3\\hat\\imath+2\\hat\\jmath+7\\hat k\\). Find the moment produced.", answer: "\\(\\vec M=11\\hat\\imath+\\hat\\jmath-5\\hat k\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.3 (Q17 — seesaw moments)",
          questions: [
            { stem: null, parts: [ { label: null, text: "A seesaw fixed at \\((0,2,3)\\) has forces \\(\\vec F_1[3,4,5]\\) at \\((4,5,3)\\) and \\(\\vec F_2[9,2,7]\\) at \\((-4,-1,3)\\). Find each moment about the fixed point, and the net moment.", answer: "\\(\\vec M_1=15\\hat\\imath-20\\hat\\jmath+7\\hat k\\), \\(\\vec M_2=-21\\hat\\imath+28\\hat\\jmath+19\\hat k\\), \\(\\vec M_{net}=-6\\hat\\imath+8\\hat\\jmath+26\\hat k\\)" } ] }
          ]
        },
        {
          exercise: "Ex 3.4 (Q3 — coplanarity)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "Show that \\(\\vec a=-4\\hat\\imath-6\\hat\\jmath-2\\hat k,\\ \\vec b=-\\hat\\imath+4\\hat\\jmath+3\\hat k,\\ \\vec c=-\\hat\\imath+2\\hat\\jmath-3\\hat k\\) are coplanar.", answer: "\\(\\vec a\\cdot(\\vec b\\times\\vec c)=0\\Rightarrow\\) coplanar." },
                { label: "(ii)", text: "Find \\(\\lambda\\) so that \\(\\vec a=\\hat\\imath-2\\hat\\jmath+3\\hat k,\\ \\vec b=-2\\hat\\imath+3\\hat\\jmath-4\\hat k,\\ \\vec c=-\\hat\\imath+\\lambda\\hat\\jmath+2\\hat k\\) are coplanar.", answer: "\\(\\lambda=-\\dfrac12\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.4 (Q4 — coplanar points and a coplanarity identity)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "Find \\(\\lambda\\) if \\(A(-1,4,-3),B(3,\\lambda,-5),C(-3,8,-5),D(-3,2,1)\\) are coplanar.", answer: "\\(\\lambda=2\\)" },
                { label: "(ii)", text: "If \\(\\vec a=\\alpha\\hat\\imath+\\hat\\jmath+\\hat k,\\ \\vec b=\\hat\\imath+\\beta\\hat\\jmath+\\hat k,\\ \\vec c=\\hat\\imath+\\hat\\jmath+\\gamma\\hat k\\) are coplanar, prove \\(\\dfrac{1}{1-\\alpha}+\\dfrac{1}{1-\\beta}+\\dfrac{1}{1-\\gamma}=1\\).", answer: "Proved using \\(\\vec a\\cdot(\\vec b\\times\\vec c)=0\\) and simplification." }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.4 (Q5 — coplanarity consequences)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "If \\(\\vec a,\\vec b,\\vec c\\) are coplanar, show \\(\\vec a+\\vec b,\\ \\vec b+\\vec c,\\ \\vec c+\\vec a\\) are also coplanar.", answer: "\\([\\vec a+\\vec b\\ \\ \\vec b+\\vec c\\ \\ \\vec c+\\vec a]=2[\\vec a\\ \\vec b\\ \\vec c]=0\\) (proved)." },
                { label: "(ii)", text: "If \\(\\vec c\\) is a unit vector \\(\\perp\\) to both \\(\\vec a,\\vec b\\), with angle \\(\\pi/6\\) between \\(\\vec a,\\vec b\\), prove \\([\\vec a\\ \\vec b\\ \\vec c]^{2}=\\dfrac14|\\vec a|^{2}|\\vec b|^{2}\\).", answer: "Proved using \\([\\vec a\\ \\vec b\\ \\vec c]=|\\vec a||\\vec b|\\sin(\\pi/6)\\)." }
              ]
            }
          ]
        },
        {
          exercise: "Worked Examples (quick revision)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find \\(P\\) if \\(\\overrightarrow{OP}\\) has magnitude 2 and is parallel to \\(2\\hat\\imath-3\\hat\\jmath+4\\hat k\\).", answer: "\\(P=\\left(\\dfrac{4}{\\sqrt{29}},\\dfrac{-6}{\\sqrt{29}},\\dfrac{8}{\\sqrt{29}}\\right)\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Two direction angles of \\(\\vec r\\) are \\(30^\\circ\\) and \\(60^\\circ\\). Find the third and the unit vector \\(\\hat r\\).", answer: "\\(\\gamma=90^\\circ\\); \\(\\hat r=\\dfrac{\\sqrt3}{2}\\hat\\imath+\\dfrac12\\hat\\jmath+0\\hat k\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the angle between \\(\\hat\\imath-2\\hat\\jmath+\\hat k\\) and \\(2\\hat\\imath-3\\hat\\jmath+\\hat k\\).", answer: "\\(\\theta=\\cos^{-1}\\!\\left(\\dfrac{9}{\\sqrt{84}}\\right)\\approx10.89^\\circ\\)" } ] },
            { stem: null, parts: [ { label: null, text: "If \\(\\vec a=\\hat\\imath-\\hat\\jmath+\\hat k,\\ \\vec b=-\\hat\\imath+\\hat\\jmath+3\\hat k\\), find the projection of \\(\\vec a\\) along \\(\\vec b\\) and of \\(\\vec b\\) along \\(\\vec a\\).", answer: "Proj. of \\(\\vec a\\) along \\(\\vec b\\) \\(=\\dfrac{1}{\\sqrt{11}}\\); proj. of \\(\\vec b\\) along \\(\\vec a\\) \\(=\\dfrac{1}{\\sqrt3}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the work done by \\(\\vec F=2\\hat\\imath+\\hat\\jmath-\\hat k\\) moving an object from \\(A(0,1,3)\\) to \\(B(-1,2,4)\\).", answer: "Work \\(=2\\) units" } ] },
            { stem: null, parts: [ { label: null, text: "If \\(\\vec a=2\\hat\\imath+5\\hat\\jmath-2\\hat k,\\ \\vec b=\\hat\\imath-\\hat\\jmath+3\\hat k\\) are adjacent sides of a parallelogram, find its area.", answer: "Area \\(=|\\vec a\\times\\vec b|=\\sqrt{282}\\) sq. units" } ] },
            { stem: null, parts: [ { label: null, text: "Find the area of a triangle with vertices \\((0,0),(2,9),(3,5)\\).", answer: "Area \\(=\\dfrac{17}{2}\\) sq. units" } ] },
            { stem: null, parts: [ { label: null, text: "If \\(\\vec a=2\\hat\\imath-\\hat\\jmath+\\hat k,\\ \\vec b=-\\hat\\imath+2\\hat\\jmath-\\hat k,\\ \\vec c=\\hat\\imath+\\hat\\jmath-3\\hat k\\), find the angle between \\(\\vec a+\\vec b\\) and \\(\\vec a+\\vec c\\).", answer: "\\(\\theta=\\sin^{-1}\\!\\sqrt{\\dfrac{17}{26}}\\approx53.96^\\circ\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the moment of \\(\\vec F=3\\hat\\imath-2\\hat\\jmath+5\\hat k\\) about \\((2,1,-1)\\) when applied at \\((3,0,2)\\).", answer: "\\(\\vec M=\\hat\\imath+4\\hat\\jmath+\\hat k\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the moment of \\(\\vec F=7\\hat\\imath+4\\hat\\jmath+2\\hat k\\) applied at \\((2,1,4)\\) about the hinge \\((0,0,1)\\).", answer: "\\(\\vec M=-10\\hat\\imath+17\\hat\\jmath+\\hat k\\)" } ] },
            { stem: null, parts: [ { label: null, text: "If \\(\\vec a=2\\hat\\imath-3\\hat\\jmath+\\hat k,\\ \\vec b=-3\\hat\\imath+2\\hat\\jmath+3\\hat k,\\ \\vec c=-\\hat\\imath+\\hat\\jmath-\\hat k\\), find \\(\\vec a\\cdot\\vec b\\times\\vec c\\).", answer: "\\(\\vec a\\cdot\\vec b\\times\\vec c=7\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the volume of a parallelepiped with \\(\\vec a=\\hat\\imath-2\\hat\\jmath+\\hat k,\\ \\vec b=3\\hat\\imath-3\\hat\\jmath+\\hat k,\\ \\vec c=-\\hat\\imath-\\hat\\jmath+2\\hat k\\).", answer: "Volume \\(=3\\) cubic units" } ] },
            { stem: null, parts: [ { label: null, text: "Find the volume of the tetrahedron \\(A(0,0,0),B(1,3,-1),C(2,2,1),D(1,6,5)\\).", answer: "Volume \\(=\\dfrac{11}{2}\\) cubic units" } ] },
            { stem: null, parts: [ { label: null, text: "Find \\(\\lambda\\) so that \\(\\vec a=\\hat\\imath-\\hat\\jmath+\\hat k,\\ \\vec b=2\\hat\\imath+\\hat\\jmath+\\hat k,\\ \\vec c=-\\hat\\imath+\\lambda\\hat\\jmath+2\\hat k\\) are coplanar.", answer: "\\(\\lambda=-26\\)" } ] },
            { stem: null, parts: [ { label: null, text: "A plane flies at 475 km/h heading \\(70^\\circ\\); an 80 km/h wind blows from true heading \\(120^\\circ\\). Find the resultant ground velocity and direction.", answer: "Ground speed \\(\\approx428\\) km/h; direction \\(\\theta\\approx28.23^\\circ\\)" } ] }
          ]
        },
        {
          exercise: "Review Exercise (short/long answer questions)",
          questions: [
            {
              stem: "Find \\(\\lambda\\) so that \\(\\vec a=3\\hat\\imath-2\\hat\\jmath+6\\hat k\\) and \\(\\vec b=\\hat\\imath-\\lambda\\hat\\jmath+3\\lambda\\hat k\\) are:",
              parts: [
                { label: "(i)", text: "Parallel.", answer: "\\(\\lambda=1\\)" },
                { label: "(ii)", text: "Perpendicular.", answer: "\\(\\lambda=-\\dfrac{9}{16}\\)" }
              ]
            },
            { stem: null, parts: [ { label: null, text: "If \\(\\vec a=-3\\hat\\imath+2\\hat\\jmath+4\\hat k,\\ \\vec b=\\hat\\imath-2\\hat\\jmath+4\\hat k\\), find the component of \\(\\vec a+\\vec b\\) along \\(\\vec a-\\vec b\\).", answer: "Component \\(=\\dfrac{(\\vec a+\\vec b)\\cdot(\\vec a-\\vec b)}{|\\vec a-\\vec b|}=\\dfrac{|\\vec a|^{2}-|\\vec b|^{2}}{|\\vec a-\\vec b|}\\) (evaluate using the given vectors)" } ] },
            { stem: null, parts: [ { label: null, text: "Find \\(|\\vec u|\\) if \\(\\vec v\\) is a unit vector and \\((\\vec u-\\vec v)\\cdot(\\vec u+\\vec v)=18\\).", answer: "\\(|\\vec u|^{2}=19\\Rightarrow|\\vec u|=\\sqrt{19}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "With usual notation for \\(\\triangle ABC\\), prove by vector method that \\(\\dfrac{a}{\\sin\\alpha}=\\dfrac{b}{\\sin\\beta}=\\dfrac{c}{\\sin\\gamma}\\).", answer: "Proved using \\(\\vec a\\times\\vec b=\\vec b\\times\\vec c=\\vec c\\times\\vec a\\) (Law of Sines)." } ] },
            { stem: null, parts: [ { label: null, text: "A plane has airspeed 200 km/h, direction \\(60^\\circ\\); wind blows from the west at 40 km/h. Find the ground speed and true course.", answer: "Ground speed \\(\\approx213\\) km/h; true course \\(\\approx65.4^\\circ\\)" } ] }
          ]
        }
      ],
      long: [
        {
          exercise: "Ex 3.1, Q.8 (magnitude / opposite-direction vectors)",
          questions: [
            {
              stem: "If \\(\\vec a=2\\hat\\imath-3\\hat\\jmath+\\hat k,\\ \\vec b=\\hat\\imath-3\\hat\\jmath+5\\hat k\\):",
              parts: [
                { label: "(i)", text: "Find a vector of magnitude 5 in the direction of \\(\\vec a-2\\vec b\\).", answer: "\\(\\dfrac{\\sqrt{10}}{2}\\hat\\jmath-\\dfrac{3\\sqrt{10}}{2}\\hat k\\)" },
                { label: "(ii)", text: "Find a vector of magnitude \\(\\dfrac37\\) opposite in direction to \\(3\\vec a+\\vec b\\).", answer: "\\(-\\dfrac{3}{7\\sqrt{257}}\\left(7\\hat\\imath-12\\hat\\jmath+8\\hat k\\right)\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.3, Q.4 (perpendicular vector; resolve into parallel & perpendicular parts)",
          questions: [
            {
              stem: null,
              parts: [
                { label: "(i)", text: "Find a vector of magnitude 5, perpendicular to both \\(\\vec a=3\\hat\\imath-2\\hat\\jmath+5\\hat k\\) and \\(\\vec b=8\\hat\\imath-2\\hat\\jmath+\\hat k\\).", answer: "\\(\\dfrac{5}{\\sqrt{1533}}\\left(8\\hat\\imath+37\\hat\\jmath+10\\hat k\\right)\\)" },
                { label: "(ii)", text: "Express \\(5\\hat\\imath+2\\hat\\jmath-3\\hat k\\) as the sum of a vector parallel to, and one perpendicular to, \\(2\\hat\\imath-\\hat\\jmath+3\\hat k\\).", answer: "Parallel part \\(=-\\dfrac17\\hat\\imath+\\dfrac{1}{14}\\hat\\jmath-\\dfrac{3}{14}\\hat k\\); perpendicular part \\(=\\dfrac{36}{7}\\hat\\imath+\\dfrac{27}{14}\\hat\\jmath-\\dfrac{39}{14}\\hat k\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.4, Q.1 (prove \\(\\vec a\\cdot\\vec b\\times\\vec c=\\vec b\\cdot\\vec c\\times\\vec a=\\vec c\\cdot\\vec a\\times\\vec b\\))",
          questions: [
            {
              stem: "Verify for the given vectors:",
              parts: [
                { label: "(i)", text: "\\(\\vec a=3\\hat\\imath-\\hat\\jmath+2\\hat k,\\ \\vec b=2\\hat\\imath+3\\hat\\jmath-\\hat k,\\ \\vec c=-\\hat\\imath+2\\hat\\jmath-3\\hat k\\)", answer: "Scalar triple product \\(=-14\\) (equal in all cyclic forms; proved)." },
                { label: "(ii)", text: "\\(\\vec a=-2\\hat\\imath+7\\hat\\jmath+\\hat k,\\ \\vec b=4\\hat\\imath+2\\hat\\jmath+\\hat k,\\ \\vec c=2\\hat\\jmath+\\hat k\\)", answer: "Scalar triple product \\(=-20\\) (equal in all cyclic forms; proved)." }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.4, Q.6 (volume of a parallelepiped)",
          questions: [
            {
              stem: "Find the volume for the given coterminal edges:",
              parts: [
                { label: "(i)", text: "\\(\\vec a=2\\hat\\imath+3\\hat\\jmath-4\\hat k,\\ \\vec b=\\hat\\imath+2\\hat\\jmath-3\\hat k,\\ \\vec c=3\\hat\\imath+\\hat\\jmath+\\hat k\\)", answer: "Volume \\(=0\\) cubic units (vectors are coplanar)." },
                { label: "(ii)", text: "\\(\\vec a=-3\\hat\\imath+6\\hat\\jmath+\\hat k,\\ \\vec b=\\hat\\imath+2\\hat\\jmath+3\\hat k,\\ \\vec c=-\\hat\\imath+2\\hat\\jmath+6\\hat k\\)", answer: "Volume \\(=68\\) cubic units" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 3.4, Q.7 (volume of a tetrahedron)",
          questions: [
            {
              stem: "Find the volume of the tetrahedron with the given vertices:",
              parts: [
                { label: "(i)", text: "\\(A(2,1,0),B(-1,2,6),C(2,0,3),D(1,-1,0)\\)", answer: "Volume \\(=\\dfrac16\\left|\\overrightarrow{AB}\\cdot\\overrightarrow{AC}\\times\\overrightarrow{AD}\\right|=\\dfrac92\\) cubic units" },
                { label: "(ii)", text: "\\(A(0,1,0),B(2,0,1),C(3,1,2),D(5,6,-1)\\)", answer: "Volume \\(=3\\) cubic units" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Sequences and Series",
      mcq: [],
      short: [
        {
          exercise: "Ex 4.1 (Q1, Q6–Q10 — first terms, \\(a_{10}\\), \\(a_{15}\\))",
          questions: [
            {
              stem: "For each sequence, find the first 4 terms, \\(a_{10}\\) and \\(a_{15}\\):",
              parts: [
                { label: "(Q1)", text: "\\(a_n=3n+1\\)", answer: "\\(4,7,10,13,\\ldots\\); \\(a_{10}=31\\); \\(a_{15}=46\\)" },
                { label: "(Q6)", text: "\\(a_n=\\dfrac{n^{2}-1}{n^{2}+1}\\)", answer: "\\(0,\\dfrac35,\\dfrac45,\\dfrac{15}{17},\\ldots\\); \\(a_{10}=\\dfrac{99}{101}\\); \\(a_{15}=\\dfrac{112}{113}\\)" },
                { label: "(Q7)", text: "\\(a_n=\\left(-\\dfrac12\\right)^{n-1}\\)", answer: "\\(1,-\\dfrac12,\\dfrac14,-\\dfrac18,\\ldots\\); \\(a_{10}=-\\dfrac{1}{512}\\); \\(a_{15}=\\dfrac{1}{16384}\\)" },
                { label: "(Q8)", text: "\\(a_n=(-1)^{2\\cdot n^{2}}\\)", answer: "Since \\((-1)^2=1\\): \\(1,4,9,16,\\ldots\\); \\(a_{10}=100\\); \\(a_{15}=225\\)" },
                { label: "(Q9)", text: "\\(a_n=(-1)^{n}(n+3)\\)", answer: "\\(-4,5,-6,7,\\ldots\\); \\(a_{10}=13\\); \\(a_{15}=-18\\)" },
                { label: "(Q10)", text: "\\(a_n=(-1)^{n+1}(3n-5)\\)", answer: "\\(-2,-1,4,-7,\\ldots\\); \\(a_{10}=-25\\); \\(a_{15}=40\\)" }
              ]
            }
          ]
        },
        {
          exercise: "Ex 4.1 (Q15–Q18, Q21–Q22 — specific terms / general term)",
          questions: [
            { stem: null, parts: [ { label: "(Q15)", text: "\\(a_n=\\dfrac{n}{4^{2}}(11n+31)\\); find \\(a_{22}\\).", answer: "\\(a_{22}=528528\\)" } ] },
            { stem: null, parts: [ { label: "(Q16)", text: "\\(a_n=\\left(1+\\dfrac1n\\right)^{2}\\); find \\(a_{20}\\).", answer: "\\(a_{20}=\\left(\\dfrac{21}{20}\\right)^{2}=\\dfrac{441}{400}\\)" } ] },
            { stem: null, parts: [ { label: "(Q17)", text: "\\(a_n=\\log 10^{n}\\); find \\(a_{43}\\).", answer: "\\(a_{43}=43\\)" } ] },
            { stem: null, parts: [ { label: "(Q18)", text: "\\(a_n=\\ln e^{n}\\); find \\(a_{67}\\).", answer: "\\(a_{67}=67\\)" } ] },
            { stem: null, parts: [ { label: "(Q21)", text: "Predict the general term: \\(\\sqrt2,\\sqrt4,\\sqrt6,\\sqrt8,\\sqrt{10},\\ldots\\)", answer: "\\(a_n=\\sqrt{2n}\\)" } ] },
            { stem: null, parts: [ { label: "(Q22)", text: "Predict the general term: \\(1.2,\\ 2.3,\\ 3.4,\\ 4.5,\\ldots\\)", answer: "\\(a_n=\\dfrac{11n+1}{10}\\)" } ] }
          ]
        },
        {
          exercise: "Ex 4.2 (Q1–Q3 — arithmetic sequence terms)",
          questions: [
            {
              stem: "Find the first four terms of the A.P. with:",
              parts: [
                { label: "(iv)", text: "\\(a_1=38,\\ d=-4\\)", answer: "\\(38,34,30,26\\)" },
                { label: "(v)", text: "\\(a_1=\\dfrac34,\\ d=\\dfrac14\\)", answer: "\\(\\dfrac34,1,\\dfrac54,\\dfrac32\\)" },
                { label: "(vi)", text: "\\(a_1=\\dfrac38,\\ d=\\dfrac58\\)", answer: "\\(\\dfrac38,1,\\dfrac{13}{8},\\dfrac94\\)" }
              ]
            },
            {
              stem: "Find the next three terms:",
              parts: [
                { label: "(iii)", text: "\\(\\dfrac12,\\dfrac32,\\dfrac52,\\ldots\\)", answer: "\\(\\dfrac72,\\dfrac92,\\dfrac{11}{2}\\)" },
                { label: "(iv)", text: "\\(-5.4,-3.4,-1.4,\\ldots\\)", answer: "\\(0.6,2.6,4.6\\)" }
              ]
            },
            { stem: null, parts: [ { label: null, text: "Find the 11th term of the A.P. \\(0.07,0.12,0.17,\\ldots\\)", answer: "\\(a_{11}=a_1+10d=0.07+10(0.05)=0.57\\)" } ] }
          ]
        },
        {
          exercise: "Ex 4.2 (Q5, Q7, Q9, Q11–Q17 — A.P. formulas & applications)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the A.P. with \\(a_{17}=-40,\\ a_{28}=-73\\); find \\(a_1,d\\) and write the first 5 terms.", answer: "\\(d=-3,\\ a_1=8\\); terms: \\(8,5,2,-1,-4\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Which term of \\(-6,-2,2,\\ldots\\) is \\(70\\)?", answer: "\\(n=20\\)" } ] },
            { stem: null, parts: [ { label: null, text: "If \\(\\dfrac1a,b,\\dfrac1c\\) are in A.P., show the common difference is \\(\\dfrac{a-c}{2ac}\\).", answer: "\\(b=\\dfrac{a+c}{2ac}\\Rightarrow d=b-\\dfrac1a=\\dfrac{a-c}{2ac}\\) (proved)" } ] },
            { stem: null, parts: [ { label: null, text: "Rs.1000 saved Aug 1, Rs.3000 Aug 2, Rs.5000 Aug 3, and so on. Total saved till Aug 20?", answer: "\\(S_{20}=400{,}000\\) Rs." } ] },
            { stem: null, parts: [ { label: null, text: "Gardener plants 35 in row 1, 31 in row 2, 27 in row 3, .... Plants in the 8th row?", answer: "\\(a_8=7\\) plants" } ] },
            {
              stem: "Find the A.M. between:",
              parts: [
                { label: "(iii)", text: "\\(7\\sqrt5\\) and \\(\\sqrt5\\)", answer: "A.M. \\(=4\\sqrt5\\)" },
                { label: "(iv)", text: "\\(2y+5\\) and \\(5y+3\\)", answer: "A.M. \\(=\\dfrac{7y+8}{2}\\)" }
              ]
            },
            { stem: null, parts: [ { label: null, text: "Find \\(x,y\\) if \\(2\\) and \\(13\\) are two arithmetic means between \\(x\\) and \\(y\\).", answer: "\\(x=-9,\\ y=24\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find three arithmetic means between \\(2\\) and \\(-18\\).", answer: "\\(-3,-8,-13\\)" } ] }
          ]
        },
        {
          exercise: "Ex 4.3 (arithmetic series sums)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the sum: \\(4+7+10+13+16+19+22+25\\)", answer: "\\(S_8=116\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(a_1=5,\\ a_n=100,\\ n=200\\). Find the sum.", answer: "\\(S_{200}=10500\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(a_1=50,\\ n=20,\\ d=-4\\). Find the sum.", answer: "\\(S_{20}=240\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(9+11+13+15+\\cdots\\) for \\(n=12\\).", answer: "\\(S_{12}=240\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the sum of the odd numbers from 1 to 99.", answer: "\\(S=2500\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the sum of all multiples of 4 between 14 and 523.", answer: "\\(S=34036\\) (127 terms, from 16 to 520)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(a_1=34,\\ n=9,\\ a_n=2\\). Find \\(S_n\\).", answer: "\\(S_9=162\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(a_1=91,\\ d=-4,\\ a_n=15\\). Find \\(S_n\\).", answer: "\\(n=20,\\ S_{20}=1060\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(d=-4,\\ n=9,\\ a_n=27\\). Find \\(S_n\\).", answer: "\\(a_1=59,\\ S_9=387\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the sum of \\(34+30+26+\\cdots+2\\).", answer: "\\(n=9,\\ S_9=162\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(10+4+(-2)+\\cdots+(-50)\\)", answer: "\\(n=11,\\ S_{11}=-220\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(n=14,\\ a_n=53,\\ S_n=378\\). Find the first three terms.", answer: "\\(a_1=1,\\ d=4\\); terms: \\(1,5,9\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Marching band: 14 in row 1, then 2 more each row, 25 rows. Find the last row and the total.", answer: "\\(a_{25}=62\\); \\(S_{25}=950\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Telephone poles: 50 in first layer, one fewer each layer, until 6 in last layer. Total poles?", answer: "\\(n=45,\\ S_{45}=1260\\)" } ] },
            { stem: null, parts: [ { label: null, text: "A family saves Rs.6000 in year 1, Rs.7000 in year 2, and so on, for 20 years. Total saved?", answer: "\\(S_{20}=310000\\) Rs." } ] }
          ]
        },
        {
          exercise: "Ex 4.4 (geometric sequences)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Is \\(5,20,100,500,\\ldots\\) geometric? If so, find \\(r\\).", answer: "Ratios are \\(4,5,5\\) — not constant \\(\\Rightarrow\\) NOT a G.P." } ] },
            { stem: null, parts: [ { label: null, text: "Is \\(7,14,21,28,\\ldots\\) geometric?", answer: "Ratios \\(2,1.5,1.33,\\ldots\\) — not constant \\(\\Rightarrow\\) NOT a G.P. (it is an A.P., \\(d=7\\))" } ] },
            {
              stem: "Find the first four terms of the G.P. with:",
              parts: [
                { label: "(i)", text: "\\(a_1=3,\\ r=-2\\)", answer: "\\(3,-6,12,-24\\)" },
                { label: "(ii)", text: "\\(a_1=12,\\ r=\\dfrac12\\)", answer: "\\(12,6,3,\\dfrac32\\)" }
              ]
            },
            {
              stem: "Find the next two terms:",
              parts: [
                { label: "(i)", text: "\\(729,243,81,\\ldots\\)", answer: "\\(27,9\\)" },
                { label: "(ii)", text: "\\(\\dfrac{1}{27},\\dfrac19,\\dfrac13,\\ldots\\)", answer: "\\(1,3\\)" },
                { label: "(iii)", text: "\\(\\dfrac14,-\\dfrac12,1,\\ldots\\)", answer: "\\(-2,4\\) (\\(r=-2\\))" }
              ]
            },
            {
              stem: "Find \\(a_n\\):",
              parts: [
                { label: "(i)", text: "\\(a_1=7,\\ r=2\\); find \\(a_4\\).", answer: "\\(a_4=56\\)" },
                { label: "(ii)", text: "\\(a_1=243,\\ r=-\\dfrac13\\); find \\(a_5\\).", answer: "\\(a_5=3\\)" },
                { label: "(iii)", text: "\\(a_1=16,\\ r=\\dfrac12\\); find \\(a_8\\).", answer: "\\(a_8=\\dfrac18\\)" }
              ]
            },
            {
              stem: "Find the missing geometric mean(s):",
              parts: [
                { label: "(i)", text: "\\(3,\\_,\\_,\\_,48\\)", answer: "\\(r=\\pm2\\): \\(6,12,24\\) (or \\(-6,12,-24\\))" },
                { label: "(ii)", text: "\\(8,\\_,\\_,\\_,\\_,\\dfrac14\\)", answer: "\\(r=\\dfrac12\\): \\(4,2,1,\\dfrac12\\)" },
                { label: "(iii)", text: "\\(3,\\_,75\\)", answer: "\\(r=\\pm5\\): mean \\(=15\\) or \\(-15\\)" },
                { label: "(iv)", text: "\\(7,\\_,\\_,\\_,112\\)", answer: "\\(r=2\\): \\(14,28,56\\) (or \\(r=-2\\): \\(-14,28,-56\\))" }
              ]
            },
            { stem: null, parts: [ { label: null, text: "A ping-pong ball dropped from 16 ft rebounds \\(\\dfrac14\\) of the fall distance each time. Height on the 6th rebound?", answer: "\\(a_6=\\dfrac{1}{256}\\) ft" } ] },
            { stem: null, parts: [ { label: null, text: "A city of 100,000 grows 3% per year. Population in year 15?", answer: "\\(a_{15}=100000(1.03)^{14}\\approx151{,}259\\)" } ] },
            { stem: null, parts: [ { label: null, text: "A ball dropped from 556 ft rebounds \\(\\dfrac34\\) of the fall distance. Total distance travelled by the 6th hit?", answer: "\\(\\approx3100.4\\) ft" } ] },
            { stem: null, parts: [ { label: null, text: "Phone tree: principal calls 2, each calls 2 more, for 6 rounds. Total staff including the principal?", answer: "\\(1+2+4+\\cdots+2^{6}=127\\) people" } ] },
            { stem: null, parts: [ { label: null, text: "A river rises 1 inch day 1, tripling each day, for 5 days. Total rise?", answer: "\\(S_5=1+3+9+27+81=121\\) inches" } ] }
          ]
        },
        {
          exercise: "Ex 4.5 (geometric series sums)",
          questions: [
            { stem: null, parts: [ { label: null, text: "\\(a_1=7,\\ r=2,\\ n=14\\). Find the sum.", answer: "\\(S_{14}=114681\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(a_1=16,\\ r=-\\dfrac12,\\ n=10\\). Find the sum.", answer: "\\(S_{10}=\\dfrac{341}{32}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(a_1=343,\\ a_4=-1,\\ r=-\\dfrac17\\). Find the sum of the first 4 terms.", answer: "\\(S_4=300\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(a_n=324,\\ r=3,\\ S_n=484\\). Find \\(a_1\\).", answer: "\\(a_1=4\\)" } ] },
            {
              stem: "Find fractional notation for the infinite geometric series:",
              parts: [
                { label: "(iv)", text: "\\(0.6666\\ldots\\)", answer: "\\(\\dfrac23\\)" },
                { label: "(v)", text: "\\(0.15151515\\ldots\\)", answer: "\\(\\dfrac{5}{33}\\)" }
              ]
            },
            { stem: null, parts: [ { label: null, text: "A ball dropped into a 30 ft tube rises \\(\\dfrac25\\) of each previous bounce. Total distance travelled before it stops?", answer: "\\(30+\\dfrac{2(30)(2/5)}{1-2/5}=70\\) ft" } ] },
            { stem: null, parts: [ { label: null, text: "A balloon rises 80 ft in minute 1; each next minute 90% as far. Maximum altitude?", answer: "\\(\\dfrac{80}{1-0.9}=800\\) ft" } ] }
          ]
        },
        {
          exercise: "Ex 4.6 (harmonic sequences)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Find the 7th term of the H.P. \\(\\dfrac19,\\dfrac{1}{12},\\dfrac{1}{15},\\ldots\\)", answer: "\\(a_7=\\dfrac{1}{27}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the 20th term of the H.P. \\(\\dfrac{1}{18},\\dfrac{1}{13},\\dfrac18,\\ldots\\)", answer: "\\(a_{20}=-\\dfrac{1}{77}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the \\(n\\)th term of the H.P. \\(\\dfrac12,\\dfrac{1}{2.5},\\dfrac13,\\dfrac{1}{3.5},\\ldots\\)", answer: "\\(a_n=\\dfrac{2}{n+3}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find the 14th term of the H.P. \\(\\dfrac14,\\dfrac17,\\dfrac{1}{10},\\dfrac{1}{13},\\ldots\\)", answer: "\\(a_{14}=\\dfrac{1}{43}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "\\(7,4,1,\\ldots\\) is an A.P.; find the 17th term of the corresponding H.P.", answer: "\\(a_{17}=-\\dfrac{1}{41}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Find four harmonic means between \\(\\dfrac13\\) and \\(\\dfrac{1}{11}\\).", answer: "\\(\\dfrac{5}{23},\\dfrac{5}{31},\\dfrac{5}{39},\\dfrac{5}{47}\\)" } ] }
          ]
        },
        {
          exercise: "Ex 4.8 (evaluate sigma sums)",
          questions: [
            { stem: null, parts: [ { label: null, text: "Evaluate: \\(\\displaystyle\\sum_{k=1}^{5}\\dfrac{1}{2k}\\)", answer: "\\(\\dfrac{137}{120}\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate: \\(\\displaystyle\\sum_{k=1}^{6}\\dfrac{1}{2k+1}\\)", answer: "\\(\\approx0.9551\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate: \\(\\displaystyle\\sum_{k=1}^{8}\\dfrac{k}{k+1}\\)", answer: "\\(=8-\\displaystyle\\sum_{k=2}^{9}\\dfrac1k=\\dfrac{15551}{2520}\\approx6.171\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate: \\(\\displaystyle\\sum_{k=1}^{7}(-1)^{k}4^{k+1}\\)", answer: "\\(-52432\\)" } ] },
            { stem: null, parts: [ { label: null, text: "Evaluate (telescoping): \\(\\displaystyle\\sum_{k=1}^{10}\\dfrac{1}{k(k+1)}\\)", answer: "\\(1-\\dfrac{1}{11}=\\dfrac{10}{11}\\)" } ] }
          ]
        },
        {
          exercise: "Ex 4.9 (applications)",
          questions: [
            { stem: null, parts: [ { label: null, text: "21 seats in row 1, one more each row, 30 rows, 1200 expected. Enough seats?", answer: "\\(S_{30}=1065<1200\\Rightarrow\\) No, 135 short." } ] },
            { stem: null, parts: [ { label: null, text: "Save Rs.1 day 1, double every day. Amount saved on day 20?", answer: "\\(a_{20}=2^{19}=524288\\) Rs." } ] },
            { stem: null, parts: [ { label: null, text: "Rs.20000 loan at 11% compounded annually, paid off after 4 years. Total paid?", answer: "\\(20000(1.11)^{4}\\approx\\) Rs. 30,361" } ] },
            { stem: null, parts: [ { label: null, text: "Land worth Rs.450000 grows 10%/year. Value after 8 years?", answer: "\\(450000(1.1)^{8}\\approx\\) Rs. 964,616" } ] },
            { stem: null, parts: [ { label: null, text: "Bacteria grow geometrically from 16000 to 1,215,000 in 5 days. Daily growth rate?", answer: "\\(r^{5}=75.9375\\Rightarrow r\\approx2.377\\) (\\(\\approx137.7\\%\\) increase/day)" } ] },
            { stem: null, parts: [ { label: null, text: "Car insurance: Rs.5000, Rs.6125, Rs.7250, ... for 10 years. Total paid?", answer: "\\(S_{10}=100625\\) Rs. (A.P., \\(d=1125\\))" } ] },
            { stem: null, parts: [ { label: null, text: "A Rs.1,000,000 loan repaid in 20 installments, each Rs.2000 less than the previous. First installment?", answer: "\\(a_1=69000\\) Rs." } ] },
            { stem: null, parts: [ { label: null, text: "First insurance installment Rs.8000, each 5% more, 24 installments. Total paid?", answer: "\\(S_{24}=8000\\cdot\\dfrac{(1.05)^{24}-1}{0.05}\\approx\\) Rs. 356,016" } ] }
          ]
        }
      ],
      long: [
        {
          exercise: "Sec 4.10 (Applications of Sequence and Series — worked example)",
          questions: [
            {
              stem: null,
              parts: [
                {
                  label: null,
                  text: "Khalid deposits Rs.100,000, then Rs.10,000 more each month than the month before. Car price is Rs.1,260,000. Find (i) the amount saved in 4 months, (ii) the time to reach Rs.1,260,000.",
                  answer: "(i) \\(a_1=100000,\\ d=10000\\Rightarrow S_4=\\dfrac42[2(100000)+3(10000)]=460000\\) Rs. (ii) Solving \\(S_n=1260000\\) gives \\(n^{2}+19n-252=0\\Rightarrow n=9\\); Khalid reaches the goal in the 9th month."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
