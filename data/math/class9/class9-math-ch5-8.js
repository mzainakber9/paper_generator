/*
  CLASS 9 — MATH — CHAPTERS 5 TO 8
  ---------------------------------
  Real content, sourced from the National Book Foundation Grade 9 textbook,
  filtered to Summative-only SLOs per the FBISE Assessment Framework.

  Chapters in this file: 5 Linear Equations and Inequalities,
  6 Trigonometry and Bearing, 7 Coordinate Geometry, 8 Geometry of
  Straight Lines.

  Same data format as class9-math-ch1-4.js (see that file for details):
  short/long grouped by exercise: [{exercise, questions:[{text,answer}]}]
  Math wrapped in \\( \\) for KaTeX.
*/
var CLASS9_MATH_CH5_8 = {
  chapters: [
    {
      id: 5,
      name: "Linear Equations and Inequalities",
      mcq: [],
      short: [
        {
          exercise: "Ex 5.1 (linear equations)",
          questions: [
            { text: "Solve: \\(\\dfrac{5x}{4}+\\dfrac12=0\\)", answer: "\\(x=-\\dfrac25\\)" },
            { text: "Solve: \\(\\dfrac{x-2}{2}+\\dfrac{x+10}{9}=5\\)", answer: "\\(x=8\\)" },
            { text: "Solve: \\(4-0.3(1-x)=7\\)", answer: "\\(x=11\\)" },
            { text: "Solve: \\(0.5x=6.3-0.2x\\)", answer: "\\(x=9\\)" },
            { text: "Solve: \\(1.3x-0.2=0.3x-1.5\\)", answer: "\\(x=-1.3\\)" }
          ]
        },
        {
          exercise: "Ex 5.2 (radical equations)",
          questions: [
            { text: "Reduce to a linear equation and solve: \\(\\sqrt{2x}=4\\)", answer: "\\(x=8\\)" },
            { text: "Reduce to a linear equation and solve: \\(\\sqrt{2x+1}=9\\)", answer: "\\(x=40\\)" },
            { text: "Reduce to a linear equation and solve (check for extraneous solution): \\(\\sqrt{3x-5}=-10\\)", answer: "No real solution — solution set \\(=\\phi\\) (a radical cannot equal a negative number)." },
            { text: "Reduce to a linear equation and solve: \\(5-\\sqrt{2x-1}=0\\)", answer: "\\(x=13\\)" }
          ]
        },
        {
          exercise: "Ex 5.3 (absolute value equations)",
          questions: [
            { text: "Solve: \\(|x+2|=6\\)", answer: "\\(x=4\\) or \\(x=-8\\)" },
            { text: "Solve: \\(|2x-1|=5\\)", answer: "\\(x=3\\) or \\(x=-2\\)" },
            { text: "Solve: \\(|5x-3|=|x+7|\\)", answer: "\\(x=2.5\\) or \\(x=-\\dfrac23\\)" },
            { text: "Solve: \\(\\dfrac{|4x|}{3}=12\\)", answer: "\\(x=9\\) or \\(x=-9\\)" }
          ]
        },
        {
          exercise: "Ex 5.4 (inequalities)",
          questions: [
            { text: "Solve: \\(6x-5\\le35-2x,\\ x\\in R\\)", answer: "\\(x\\le5\\)" },
            { text: "Solve: \\(10-(7-y)\\ge3y-9,\\ y\\in R\\)", answer: "\\(y\\le6\\)" },
            { text: "Solve the compound inequality: \\(2x+3\\le9\\) and \\(x-5>-6\\)", answer: "\\(-1<x\\le3\\)" },
            { text: "The sum of five times a number \\(x\\) and 10 is less than \\(-35\\) or greater than \\(-5\\). What real numbers does \\(x\\) represent?", answer: "\\(x<-9\\) or \\(x>-3\\)" },
            { text: "Two times a number decreased by 5 is greater than or equal to the number increased by 8. Find the possible values for the number.", answer: "\\(x\\ge13\\)" }
          ]
        }
      ],
      long: []
    },
    {
      id: 6,
      name: "Trigonometry and Bearing",
      mcq: [],
      short: [
        {
          exercise: "Sec 6.1 (angle conversion)",
          questions: [
            { text: "Convert \\(45^{\\circ}\\) into radian measure (write the answer in terms of \\(\\pi\\)).", answer: "\\(\\dfrac{\\pi}{4}\\)" },
            { text: "Write \\(\\dfrac{\\pi}{12}\\) radians in \\(D^{\\circ}M'S''\\).", answer: "\\(15^{\\circ}\\)" }
          ]
        },
        {
          exercise: "Ex 6.3 (trig ratios of standard angles)",
          questions: [
            { text: "Evaluate: \\(\\sin60^{\\circ}-\\cos30^{\\circ}\\)", answer: "0" },
            { text: "If the terminal ray of \\(\\theta\\) is in the first quadrant and \\(\\cos\\theta=\\dfrac12\\), find the remaining trigonometric ratios of \\(\\theta\\).", answer: "\\(\\sin\\theta=\\dfrac{\\sqrt3}{2}\\), \\(\\tan\\theta=\\sqrt3\\), \\(\\csc\\theta=\\dfrac{2}{\\sqrt3}\\), \\(\\sec\\theta=2\\), \\(\\cot\\theta=\\dfrac{1}{\\sqrt3}\\)" }
          ]
        },
        {
          exercise: "Ex 6.4 (identities & solving triangles)",
          questions: [
            { text: "Prove: \\((1-\\sin^{2}\\theta)\\sec^{2}\\theta=1\\)", answer: "LHS \\(=\\cos^{2}\\theta\\cdot\\sec^{2}\\theta=\\cos^{2}\\theta\\cdot\\dfrac{1}{\\cos^{2}\\theta}=1=\\) RHS" },
            { text: "Prove: \\(\\dfrac{1}{\\sec\\theta-\\tan\\theta}=\\sec\\theta+\\tan\\theta\\)", answer: "Multiply LHS numerator and denominator by \\((\\sec\\theta+\\tan\\theta)\\); using \\(\\sec^2\\theta-\\tan^2\\theta=1\\), LHS reduces to \\(\\sec\\theta+\\tan\\theta\\)." },
            { text: "Solve the right-angled triangle \\(\\triangle ABC\\) where \\(\\angle C=90^{\\circ}\\), \\(\\angle A=30^{\\circ}\\), \\(a=6\\text{ cm}\\). Find \\(\\angle B\\), \\(b\\) and \\(c\\).", answer: "\\(\\angle B=60^{\\circ}\\), \\(c=12\\text{ cm}\\), \\(b=6\\sqrt3\\text{ cm}\\)" }
          ]
        },
        {
          exercise: "Ex 6.5 (elevation & depression)",
          questions: [
            { text: "From a point at a distance of 20 m from a tree, the angle of elevation of the top of the tree is \\(30^{\\circ}\\). Find the height of the tree.", answer: "\\(\\dfrac{20}{\\sqrt3}\\approx11.55\\text{ m}\\)" },
            { text: "The length of the shadow of a 10 m high pole is \\(10\\sqrt3\\) m. Find the angle of elevation of the sun.", answer: "\\(30^{\\circ}\\)" },
            { text: "The height of a slide in a children's park is 5 m. A girl standing at the top of the slide observes that the angle of depression of its bottom is \\(30^{\\circ}\\). Find the length of the slide.", answer: "10 m" },
            { text: "From the top of a tower of height 120 m, angles of depression of two boats on the same side of the tower at water level are \\(60^{\\circ}\\) and \\(45^{\\circ}\\). Find the distance between the boats.", answer: "\\(\\approx50.72\\text{ m}\\)" },
            { text: "A ladder 10 m long, leaning against a vertical wall, makes an angle of \\(60^{\\circ}\\) with the wall. Find the height of the ladder along the wall.", answer: "5 m" },
            { text: "An aeroplane at an altitude of 900 m finds that two ships are sailing towards it in the same direction. The angles of depression of the ships as observed from the plane are \\(30^{\\circ}\\) and \\(60^{\\circ}\\). Find the distance between the ships.", answer: "\\(\\approx1039.23\\text{ m}\\)" }
          ]
        },
        {
          exercise: "Ex 6.6 (bearing)",
          questions: [
            { text: "Two boats A and B are 5 km apart, and the bearing of boat B from boat A is \\(250^{\\circ}\\). Find the bearing of boat A from boat B.", answer: "\\(070^{\\circ}\\)" },
            { text: "Bilal travelled 12 km on his bike to reach school at a bearing of \\(060^{\\circ}\\) from his home. Then he went to the football ground from school at a bearing of \\(150^{\\circ}\\). If the football ground is 5 km from school, find the distance he has to cover to reach home directly from the football ground.", answer: "13 km" },
            { text: "A car leaves the garage at a bearing of \\(040^{\\circ}\\) and travels in a straight line for 13 km. How many kilometres north and how many kilometres east has the car travelled from the garage?", answer: "\\(\\approx9.96\\) km north, \\(\\approx8.36\\) km east" },
            { text: "A ship sails from port A to port B at a bearing of \\(040^{\\circ}\\) for 35 km. Then it sails at a bearing of \\(130^{\\circ}\\) for 50 km from port B to port C. Find: (a) the distance between port A and port C, (b) the bearing of C from A.", answer: "(a) \\(\\approx61.03\\text{ km}\\) (b) \\(095^{\\circ}\\)" }
          ]
        }
      ],
      long: []
    },
    {
      id: 7,
      name: "Coordinate Geometry",
      mcq: [],
      short: [
        {
          exercise: "Ex 7.1 (distance formula)",
          questions: [
            { text: "Find the distance between \\((-2,1)\\) and \\((1,5)\\).", answer: "5" },
            { text: "Check by distance formula whether the points \\((0,1)\\), \\((2,3)\\) and \\((3,4)\\) are collinear or not.", answer: "Collinear — \\(d(0,1\\to2,3)+d(2,3\\to3,4)=d(0,1\\to3,4)=3\\sqrt2\\)" },
            { text: "Check whether the points \\((-1,-1)\\), \\((-1,5)\\) and \\((4,2)\\) are the vertices of an isosceles triangle. Also find the perimeter.", answer: "Isosceles (sides \\(6,\\sqrt{34},\\sqrt{34}\\)); perimeter \\(=6+2\\sqrt{34}\\approx17.66\\)" }
          ]
        },
        {
          exercise: "Ex 7.2 (midpoint)",
          questions: [
            { text: "Find the midpoint of the line segment joining \\((2,5)\\) and \\((6,9)\\).", answer: "\\((4,7)\\)" },
            { text: "If \\((1,4)\\) is the midpoint of the line segment joining \\((6,b)\\) and \\((a,2)\\), find \\(a\\) and \\(b\\).", answer: "\\(a=-4\\), \\(b=6\\)" },
            { text: "If the vertices of a rhombus are \\(A(-3,-1)\\), \\(B(0,0)\\), \\(C(1,3)\\) and \\(D(-2,2)\\), show that its diagonals bisect each other. Also find the length of each diagonal.", answer: "Both diagonals have midpoint \\((-1,1)\\); \\(AC=4\\sqrt2\\), \\(BD=2\\sqrt2\\)" }
          ]
        }
      ],
      long: []
    },
    {
      id: 8,
      name: "Geometry of Straight Lines",
      mcq: [],
      short: [
        {
          exercise: "Ex 8.1 (gradient)",
          questions: [
            { text: "If \\(A(-2,6)\\) and \\(B(7,-3)\\), find the slope of a line: (i) parallel to AB (ii) perpendicular to AB.", answer: "Slope of AB \\(=-1\\); (i) parallel slope \\(=-1\\) (ii) perpendicular slope \\(=1\\)" },
            { text: "Find \\(x\\) if the slope of the line through \\(A(3,x)\\) and \\(B(5,8)\\) is 4.", answer: "\\(x=0\\)" },
            { text: "Find \\(k\\) if the lines through \\(A(k,2)\\), \\(B(3,5)\\) and \\(C(5,-1)\\), \\(D(8,7)\\) are parallel.", answer: "\\(k=\\dfrac{15}{8}\\)" },
            { text: "Using slopes, prove that the points \\(X(0,-3)\\), \\(Y(4,7)\\) and \\(Z(6,12)\\) are collinear.", answer: "Slope XY \\(=\\) slope YZ \\(=\\dfrac52\\), and Y is common — collinear." },
            { text: "Prove by using slopes that \\(A(3,-1)\\), \\(B(-5,-5)\\) and \\(C(1,3)\\) are vertices of a right-angled triangle.", answer: "Slope AB \\(=\\dfrac12\\), slope AC \\(=-2\\); product \\(=-1\\), so \\(AB\\perp AC\\) — right angle at A." },
            { text: "Three vertices of a rhombus are \\(A(2,-1)\\), \\(B(3,4)\\) and \\(C(-2,3)\\). Find the fourth vertex.", answer: "\\(D(-3,-2)\\)" }
          ]
        },
        {
          exercise: "Ex 8.2 (equation of a line)",
          questions: [
            { text: "Find the equation of the line with slope \\(2\\) and \\(y\\)-intercept \\(-3\\).", answer: "\\(y=2x-3\\)" },
            { text: "Find the equation of the line through \\((3,7)\\) and parallel to the line \\(4x-3y+1=0\\).", answer: "\\(4x-3y+9=0\\)" },
            { text: "Find the equation of the line through \\((-2,-1)\\) and perpendicular to the line \\(x-2y=0\\).", answer: "\\(2x+y+5=0\\)" },
            { text: "Find the equation of the perpendicular bisector of the line segment joining \\((0,6)\\) and \\((2,-2)\\).", answer: "\\(x-4y+7=0\\)" }
          ]
        },
        {
          exercise: "Ex 8.3 (angle between lines, intersection, triangle angles)",
          questions: [
            { text: "Find the measure of the angle from \\(l_1\\) to \\(l_2\\) if the slope of \\(l_1=-1\\) and slope of \\(l_2=2\\).", answer: "\\(\\theta=\\tan^{-1}(-3)\\approx108.43^{\\circ}\\)" },
            { text: "Find the interior angles of the triangle whose vertices are \\(A(-2,0)\\), \\(B(3,0)\\) and \\(C(6,5)\\).", answer: "\\(\\angle A\\approx32^{\\circ}\\), \\(\\angle B\\approx121^{\\circ}\\), \\(\\angle C\\approx27^{\\circ}\\)" },
            { text: "Find the point of intersection of the lines \\(x+2y=3\\) and \\(3x-y=2\\).", answer: "\\((1,1)\\)" },
            { text: "Find the point of intersection of the lines \\(2x+y+1=0\\) and \\(x-y-4=0\\).", answer: "\\((1,-3)\\)" }
          ]
        }
      ],
      long: []
    }
  ]
};
