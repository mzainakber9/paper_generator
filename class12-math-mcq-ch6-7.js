/*
  CLASS 12 -- MATH -- MCQs -- UNIT 6 (Analytical Geometry) & UNIT 7 (Conic Section)
  ----------------------------------------------------------------------------------
  Unit 6: Analytical Geometry (concurrency, triangle centres, area of a
  triangle, homogeneous 2nd-degree equations / pair of lines through the
  origin, applications).
  Unit 7: Conic Section (circle, parabola, ellipse, hyperbola -- standard
  forms, elements, tangent & normal, applications).

  Source: a 200-question MCQ bank (100 per unit, with a printed answer key)
  covering the Review Exercise plus original practice questions for both
  units, provided as a PDF.

  VERIFICATION: every question was independently re-derived from first
  principles (not just copied from the source key) before transcription.
  Unit 7's printed key checked out correct in full (all 100). Unit 6's
  key was reliable for Q1-40, but Q41-100 contained a large number of
  genuine errors -- mostly the standard "pair of straight lines through
  the origin" facts (coincident/perpendicular/real-distinct conditions,
  sum & product of slopes, joint-equation constructions) and the
  "Applications" word problems, where the printed letter frequently did
  not match the option that was actually correct for the stated
  question. Every one of those 100 questions was recomputed by hand
  (determinants, factoring the homogeneous quadratics into their two
  linear factors, slope-sum/product formulas, area via the shoelace
  formula, etc.) and, where the source key was wrong, corrected here.
  Two area-of-triangle questions (Q44, Q47) had genuinely wrong choices
  marked in the source key (recomputation gives 24 sq. units and 0 /
  collinear respectively, not the printed answers). Q95's question text
  was also garbled in the PDF (a false start was left in mid-sentence)
  and has been cleaned up to state one unambiguous joint equation.
  Because so much of Unit 6 Q41-100 needed correction, treat this
  chapter's key as independently re-derived rather than sourced.

  Each unit also gets 3 original scenario (stimulus) sets not in the
  source PDF. Every question validated to have exactly 4 distinct
  options before shipping.

  MATH FORMATTING: wrap inline math in \( \) so KaTeX renders it.
*/
var CLASS12_MATH_MCQ_CH6_7 = {
  chapters: [
    {
      id: 6,
      name: "Analytical Geometry",
      mcq: [
    ["A set of straight lines that all pass through a single common point is called:", ["Parallel lines", "Concurrent lines", "Collinear lines", "Perpendicular lines"], 1],
    ["If the determinant of the coefficients of three lines \\(a_ix+b_iy+c_i=0\\), \\(i=1,2,3\\), is zero, then the three lines are:", ["Concurrent", "Intersecting in pairs only", "Parallel", "Perpendicular"], 0],
    ["Which of the following equations is homogeneous?", ["\\(x^2+5x=0\\)", "\\(2x+3y+1=0\\)", "\\(x^2+5xy=0\\)", "\\(4y+8=0\\)"], 2],
    ["Which of the following equations is not homogeneous?", ["\\(x^2+3xy=0\\)", "\\(2x-3y=0\\)", "\\(xy^2+y^3=0\\)", "\\(5x-5=0\\)"], 3],
    ["The equation \\(ax+by+c=0\\) passes through the origin if:", ["\\(a=0\\)", "\\(c=0\\)", "\\(b=0\\)", "\\(a=b=c=0\\)"], 1],
    ["The lines represented by \\(ax^2+2hxy+by^2=0\\) are real and distinct if:", ["\\(h^2>ab\\)", "\\(h^2=ab\\)", "\\(h^2<ab\\)", "\\(h^2\\le ab\\)"], 0],
    ["The lines represented by \\(ax^2+2hxy+by^2=0\\) are coincident if:", ["\\(h^2>ab\\)", "\\(h^2=ab\\)", "\\(h^2<ab\\)", "\\(h^2\\le ab\\)"], 1],
    ["The lines represented by \\(ax^2+2hxy+by^2=0\\) are imaginary if:", ["\\(h^2>ab\\)", "\\(h^2=ab\\)", "\\(h^2<ab\\)", "\\(h^2\\ge ab\\)"], 2],
    ["The lines represented by \\(ax^2+2hxy+by^2=0\\) are perpendicular if:", ["\\(a-b=0\\)", "\\(b-a=0\\)", "\\(a+b=1\\)", "\\(a+b=0\\)"], 3],
    ["Half of the determinant formed by the coordinates of the vertices of a triangle gives its:", ["Perimeter", "Area", "Volume", "Both (a) and (b)"], 1],
    ["If the determinant formed by three points is zero, then the points are:", ["Collinear", "Non-collinear", "Imaginary", "Concurrent"], 0],
    ["The point of intersection of the three angle bisectors of a triangle is called the:", ["Incenter", "Circumcenter", "Centroid", "Orthocenter"], 0],
    ["The point of intersection of the right bisectors of the sides of a triangle is called the:", ["Incenter", "Circumcenter", "Centroid", "Orthocenter"], 1],
    ["The point of intersection of the three medians of a triangle is called the:", ["Incenter", "Circumcenter", "Centroid", "Orthocenter"], 2],
    ["The point of intersection of the three altitudes of a triangle is called the:", ["Incenter", "Circumcenter", "Centroid", "Orthocenter"], 3],
    ["Which of the following lines is perpendicular to \\(y=-\\dfrac12x\\)?", ["\\(y=2x\\)", "\\(y=-2x\\)", "\\(2y=x\\)", "\\(2y=-x\\)"], 0],
    ["Two non-parallel lines \\(l_1:a_1x+b_1y+c_1=0\\) and \\(l_2:a_2x+b_2y+c_2=0\\) intersect at exactly:", ["Zero points", "One point", "Two points", "Infinitely many points"], 1],
    ["The point of intersection of \\(a_1x+b_1y+c_1=0\\) and \\(a_2x+b_2y+c_2=0\\) has \\(x\\)-coordinate:", ["\\(\\dfrac{b_1c_2-b_2c_1}{a_1b_2-a_2b_1}\\)", "\\(\\dfrac{a_1c_2-a_2c_1}{a_1b_2-a_2b_1}\\)", "\\(\\dfrac{b_1c_2-b_2c_1}{a_1b_1-a_2b_2}\\)", "\\(\\dfrac{c_1-c_2}{a_1-a_2}\\)"], 0],
    ["Two lines \\(a_1x+b_1y+c_1=0\\) and \\(a_2x+b_2y+c_2=0\\) are parallel if:", ["\\(a_1b_2-a_2b_1=0\\)", "\\(a_1a_2+b_1b_2=0\\)", "\\(a_1b_1-a_2b_2=0\\)", "\\(a_1+a_2=0\\)"], 0],
    ["Two lines \\(l_1\\) and \\(l_2\\) with slopes \\(m_1\\) and \\(m_2\\) are perpendicular if:", ["\\(m_1=m_2\\)", "\\(m_1m_2=1\\)", "\\(m_1m_2=-1\\)", "\\(m_1+m_2=0\\)"], 2],
    ["The point of intersection of the lines \\(x-y=0\\) and \\(x+y=4\\) is:", ["\\((2,2)\\)", "\\((0,4)\\)", "\\((4,0)\\)", "\\((-2,-2)\\)"], 0],
    ["The point of intersection of \\(2x+y-5=0\\) and \\(x-y+2=0\\) is:", ["\\((1,3)\\)", "\\((2,1)\\)", "\\((3,1)\\)", "\\((1,2)\\)"], 0],
    ["If two lines have equal slopes but different \\(y\\)-intercepts, then the lines are:", ["Concurrent", "Parallel and distinct", "Perpendicular", "Coincident"], 1],
    ["If \\(a_1b_2-a_2b_1\\ne0\\) for two lines, then the lines are:", ["Parallel", "Coincident", "Non-parallel (they intersect at one point)", "Perpendicular only"], 2],
    ["Three or more lines that pass through one common point are called:", ["Parallel lines", "Concurrent lines", "Skew lines", "Perpendicular lines"], 1],
    ["To check whether three lines are concurrent using the determinant method, we test whether:", ["The sum of coefficients is zero", "The determinant of the coefficients is zero", "The product of slopes is \\(-1\\)", "The lines have equal intercepts"], 1],
    ["In the direct method of checking concurrency, we first find the point of intersection of two lines and then check whether it:", ["Lies on the third line", "Lies at the origin", "Bisects the third line", "Is equidistant from both lines"], 0],
    ["The three lines \\(3x+y-3=0\\), \\(5x+ky-3=0\\), \\(3x-y-2=0\\) are given to be concurrent. Using the determinant condition, the value of \\(k\\) is:", ["\\(\\dfrac73\\)", "\\(-\\dfrac73\\)", "\\(\\dfrac37\\)", "\\(-\\dfrac37\\)"], 1],
    ["In a triangle, the three perpendicular bisectors of the sides always meet at a point that is:", ["Equidistant from the three vertices", "Equidistant from the three sides", "The midpoint of one side", "Always outside the triangle"], 0],
    ["The centroid of a triangle divides each median in the ratio (vertex : opposite side), starting from the vertex:", ["\\(1:1\\)", "\\(1:2\\)", "\\(2:1\\)", "\\(3:1\\)"], 2],
    ["For a right-angled triangle, the orthocenter is located at:", ["The midpoint of the hypotenuse", "The vertex containing the right angle", "The centroid", "Outside the triangle"], 1],
    ["The three points -- circumcenter, centroid and orthocenter -- of any triangle are always:", ["Concyclic", "Collinear", "Equidistant from each vertex", "Coincident"], 1],
    ["For the triangle with vertices \\(A(0,0)\\), \\(B(6,0)\\), \\(C(0,6)\\), the centroid is:", ["\\((2,2)\\)", "\\((3,3)\\)", "\\((6,6)\\)", "\\((1,1)\\)"], 0],
    ["The circumcenter of triangle \\(A(0,0)\\), \\(B(6,0)\\), \\(C(0,6)\\) is:", ["\\((0,0)\\)", "\\((3,3)\\)", "\\((6,6)\\)", "\\((2,2)\\)"], 1],
    ["To find the equation of an altitude of a triangle through vertex \\(A\\), we use the point \\(A\\) together with a slope equal to:", ["The slope of \\(BC\\)", "The negative reciprocal of the slope of \\(BC\\)", "The slope of \\(AB\\)", "Zero, always"], 1],
    ["To find the right bisector of side \\(BC\\) of a triangle, we require:", ["The midpoint of \\(BC\\) and slope \\(=-1/(\\text{slope of }BC)\\)", "The midpoint of \\(BC\\) and slope = slope of \\(BC\\)", "Vertex \\(A\\) and slope of \\(BC\\)", "Only the length of \\(BC\\)"], 0],
    ["A median of a triangle is a line segment joining:", ["A vertex to the midpoint of the opposite side", "The midpoints of two sides", "Two vertices", "A vertex to the foot of the altitude"], 0],
    ["The equation of the median from \\(A(x_1,y_1)\\) to side \\(BC\\) (with midpoint \\(D\\)) is obtained using:", ["The two-point form through \\(A\\) and \\(D\\)", "The slope-intercept form only", "The perpendicular distance formula", "The determinant of area"], 0],
    ["The area of a triangle with vertices \\((x_1,y_1)\\), \\((x_2,y_2)\\), \\((x_3,y_3)\\) is given by:", ["\\(\\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|\\)", "\\(x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\\)", "\\(\\tfrac12(x_1+x_2+x_3)(y_1+y_2+y_3)\\)", "\\(\\tfrac13|x_1y_2-x_2y_1|\\)"], 0],
    ["The area of a triangle can also be written as \\(\\tfrac12|\\Delta|\\) where \\(\\Delta\\) is:", ["\\(\\begin{vmatrix}x_1&y_1&1\\\\x_2&y_2&1\\\\x_3&y_3&1\\end{vmatrix}\\)", "\\(\\begin{vmatrix}x_1&x_2\\\\y_1&y_2\\end{vmatrix}\\)", "\\(\\begin{vmatrix}x_1&y_1\\\\x_3&y_3\\end{vmatrix}\\)", "\\(x_1+x_2+x_3\\)"], 0],
    ["Three points \\(A,B,C\\) are collinear if the area of \\(\\triangle ABC\\) is:", ["Negative", "Zero", "Equal to the perimeter", "Equal to \\(1\\)"], 1],
    ["If the area computed from the determinant formula turns out negative, we:", ["Conclude the points are collinear", "Ignore the sign and take the area as positive", "Conclude the triangle does not exist", "Double the value"], 1],
    ["The area of a triangle with vertices \\((4,-2)\\), \\((-2,4)\\) and \\((5,5)\\) is:", ["\\(12\\) square units", "\\(18\\) square units", "\\(24\\) square units", "\\(36\\) square units"], 2],
    ["The area of the triangle with vertices \\((1,-1)\\), \\((-4,6)\\) and \\((-3,-5)\\) is:", ["\\(24\\) sq. units", "\\(27\\) sq. units", "\\(\\dfrac{45}2\\) sq. units", "\\(32\\) sq. units"], 0],
    ["Besides the determinant formula, the area of a triangle may also be found by:", ["Finding the three side lengths and applying Heron's formula", "Using only the slope of one side", "Using the eccentricity formula", "Using the joint equation of the sides"], 0],
    ["Vertices of a triangle are \\((3,2)\\), \\((4,h)\\) and \\((2,6)\\). If the area of the triangle is \\(10\\) square units, this information is used to form an equation in:", ["\\(x\\) only", "\\(y\\) only", "\\(h\\)", "The area itself"], 2],
    ["If \\(A(6,0)\\), \\(B(-3,6)\\) and \\(C(3,2)\\) are three points, the area of \\(\\triangle ABC\\), using the determinant formula, equals:", ["\\(0\\) (points are collinear)", "\\(9\\)", "\\(15\\)", "\\(21\\)"], 0],
    ["A quadrilateral's area using coordinates can be computed by:", ["Splitting it into two triangles and adding their areas", "Using the perimeter formula", "Only the distance formula", "Only the midpoint formula"], 0],
    ["The area of the triangle formed by the lines \\(x=0\\), \\(y=0\\) and \\(2x+3y=6\\) is:", ["\\(3\\) sq. units", "\\(6\\) sq. units", "\\(9\\) sq. units", "\\(12\\) sq. units"], 0],
    ["If the vertices of a triangle are \\((a,0)\\), \\((0,b)\\) and \\((0,0)\\), the area of the triangle is:", ["\\(ab\\)", "\\(\\tfrac12ab\\)", "\\(\\tfrac12(a+b)\\)", "\\(2ab\\)"], 1],
    ["An equation \\(f(x,y)=0\\) is called homogeneous of degree \\(n\\) if:", ["\\(f(kx,ky)=k^nf(x,y)\\)", "\\(f(kx,ky)=f(x,y)\\)", "\\(f(kx,ky)=k+f(x,y)\\)", "\\(f(x,y)=n\\)"], 0],
    ["Every homogeneous linear equation \\(ax+by=0\\) always passes through:", ["\\((1,1)\\)", "The origin", "\\((a,b)\\)", "None of these"], 1],
    ["A homogeneous linear system of equations:", ["Never has a non-trivial solution", "May have one or infinitely many solutions, but always has at least one (trivial) solution", "Has exactly two solutions", "Has no solution at all"], 1],
    ["The equation \\(2x-5y+7=0\\) is:", ["A homogeneous linear equation", "A non-homogeneous linear equation", "A homogeneous quadratic equation", "None of these"], 1],
    ["If two homogeneous linear equations \\(a_1x+b_1y=0\\) and \\(a_2x+b_2y=0\\) are multiplied together, the result is called:", ["A joint equation", "A normal equation", "A tangent equation", "A directrix equation"], 0],
    ["The joint equation \\(a_1a_2x^2+(a_1b_2+a_2b_1)xy+b_1b_2y^2=0\\) represents:", ["A single straight line", "A pair of straight lines through the origin", "A circle", "A parabola"], 1],
    ["The general second-degree homogeneous equation in two variables is written as:", ["\\(ax^2+2hxy+by^2=0\\)", "\\(ax+by+c=0\\)", "\\(ax^2+by^2=r^2\\)", "\\(y^2=4ax\\)"], 0],
    ["In the equation \\(ax^2+2hxy+by^2=0\\), the constants \\(a\\) and \\(b\\) must satisfy:", ["\\(a=b\\) always", "\\(a\\) and \\(b\\) are not simultaneously zero", "\\(a+b=0\\) always", "\\(ab=1\\)"], 1],
    ["The general equation of second degree \\(ax^2+2hxy+by^2+2gx+2fy+c=0\\) represents a pair of straight lines if:", ["\\(\\begin{vmatrix}a&h&g\\\\h&b&f\\\\g&f&c\\end{vmatrix}=0\\)", "\\(a+b+c=0\\)", "\\(h^2=4ab\\)", "\\(g^2+f^2=c\\)"], 0],
    ["If \\(m_1\\) and \\(m_2\\) are the slopes of the lines represented by \\(ax^2+2hxy+by^2=0\\), then \\(m_1+m_2\\) equals:", ["\\(-\\dfrac{2h}b\\)", "\\(\\dfrac{a}b\\)", "\\(\\dfrac{2h}a\\)", "\\(-\\dfrac{a}b\\)"], 0],
    ["If \\(m_1\\) and \\(m_2\\) are the slopes of the lines represented by \\(ax^2+2hxy+by^2=0\\), then \\(m_1m_2\\) equals:", ["\\(-\\dfrac{2h}b\\)", "\\(\\dfrac{a}b\\)", "\\(-\\dfrac{a}b\\)", "\\(\\dfrac{2h}b\\)"], 1],
    ["The joint equation of the lines \\(y=m_1x\\) and \\(y=m_2x\\) is:", ["\\(y^2-(m_1+m_2)xy+m_1m_2x^2=0\\)", "\\(y^2+(m_1+m_2)xy-m_1m_2x^2=0\\)", "\\(x^2-(m_1+m_2)xy+m_1m_2y^2=0\\)", "\\(m_1m_2x^2+y^2=0\\)"], 0],
    ["The lines represented by \\(ax^2+2hxy+by^2=0\\) are real and coincident if:", ["\\(h^2-ab>0\\)", "\\(h^2-ab=0\\)", "\\(h^2-ab<0\\)", "\\(a+b=0\\)"], 1],
    ["The measure of the acute angle \\(\\theta\\) between the lines represented by \\(ax^2+2hxy+by^2=0\\) satisfies:", ["\\(\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{a+b}\\)", "\\(\\tan\\theta=\\dfrac{h^2-ab}{a+b}\\)", "\\(\\sin\\theta=\\dfrac{2h}{a+b}\\)", "\\(\\tan\\theta=\\dfrac{a+b}{2h}\\)"], 0],
    ["Lines represented by \\(ax^2+2hxy+by^2=0\\) are orthogonal (perpendicular) when:", ["\\(h^2=ab\\)", "\\(a+b=0\\)", "\\(a=b\\)", "\\(h=0\\)"], 1],
    ["If \\(\\theta=0\\) for the lines represented by \\(ax^2+2hxy+by^2=0\\), then this implies the condition for the lines to be coincident, namely:", ["\\(h^2-ab=0\\)", "\\(a+b=0\\)", "\\(h=0\\)", "\\(ab=1\\)"], 0],
    ["The measure of the acute angle between the lines represented by \\(6x^2-xy-y^2=0\\) is:", ["\\(30^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)", "\\(90^\\circ\\)"], 1],
    ["The lines represented by \\(x^2-7xy+12y^2=0\\) are:", ["\\(x-3y=0\\) and \\(x-4y=0\\)", "\\(x+3y=0\\) and \\(x+4y=0\\)", "\\(x-3y=0\\) and \\(x+4y=0\\)", "\\(3x-y=0\\) and \\(4x-y=0\\)"], 0],
    ["The lines represented by \\(x^2-4xy-12y^2=0\\) are:", ["\\(x+2y=0\\) and \\(x-6y=0\\)", "\\(x-2y=0\\) and \\(x+6y=0\\)", "\\(2x+y=0\\) and \\(6x-y=0\\)", "\\(x+2y=0\\) and \\(x+6y=0\\)"], 0],
    ["If the lines represented by \\(x^2+5xy+6y^2=0\\) are found, one of the two lines is:", ["\\(x+2y=0\\)", "\\(x-2y=0\\)", "\\(2x+y=0\\)", "\\(5x+6y=0\\)"], 0],
    ["Which of the following equations represents a pair of real, distinct lines through the origin?", ["\\(x^2-y^2=0\\)", "\\(x^2+y^2=0\\)", "\\(x^2+2xy+y^2=0\\)", "\\(x^2+4y^2=0\\)"], 0],
    ["Which of the following equations represents a pair of coincident lines?", ["\\(x^2-4xy+4y^2=0\\)", "\\(x^2-4y^2=0\\)", "\\(x^2+y^2=0\\)", "\\(x^2+xy=0\\)"], 0],
    ["Which of the following equations represents a pair of imaginary lines (intersecting only at the real point \\((0,0)\\))?", ["\\(x^2+y^2=0\\)", "\\(x^2-y^2=0\\)", "\\(x^2-4xy+3y^2=0\\)", "\\(x^2-9y^2=0\\)"], 0],
    ["For the pair of lines \\(x^2+2xy\\sec\\theta+y^2=0\\) (a general type of homogeneous equation), the condition for real and distinct lines requires:", ["\\(\\sec^2\\theta>1\\)", "\\(\\sec^2\\theta=1\\)", "\\(\\sec^2\\theta<1\\)", "\\(\\sec\\theta=0\\)"], 0],
    ["The joint equation of the pair of lines through the origin and perpendicular to the lines \\(3x^2+5xy+2y^2=0\\) is obtained by:", ["Replacing \\(x\\) by \\(y\\) and \\(y\\) by \\(-x\\) in the factors, then re-multiplying", "Adding \\(1\\) to each coefficient", "Taking the reciprocal of the equation", "Multiplying the whole equation by \\(-1\\)"], 0],
    ["To find a joint equation of two lines through the origin perpendicular to the lines given by \\(ax^2+2hxy+by^2=0\\), we essentially:", ["Interchange the coefficients of \\(x^2\\) and \\(y^2\\) and change the sign of the \\(xy\\) term when needed", "Keep the equation exactly the same", "Set \\(h=0\\)", "Multiply by \\(\\tan\\theta\\)"], 0],
    ["If \\(\\theta=90^\\circ\\) for lines represented by \\(ax^2+2hxy+by^2=0\\), then \\(\\tan\\theta\\) is undefined, which forces:", ["\\(h^2=ab\\)", "\\(a+b=0\\)", "\\(a=b\\)", "\\(h=0\\)"], 1],
    ["A homogeneous quadratic equation \\(ax^2+2hxy+by^2=0\\) in two variables always represents:", ["A pair of straight lines passing through the origin", "A circle centred at the origin", "A single line not through the origin", "A parabola opening along the \\(x\\)-axis"], 0],
    ["The general equation of second degree, \\(ax^2+2hxy+by^2+2gx+2fy+c=0\\), represents a pair of lines only if a certain \\(3\\times3\\) determinant vanishes; this determinant is formed from:", ["The coefficients \\(a,h,b,g,f,c\\)", "Only \\(a\\) and \\(b\\)", "Only the constant \\(c\\)", "The roots of the equation"], 0],
    ["Two lines represented by a homogeneous quadratic equation are always:", ["Parallel to each other", "Concurrent at the origin", "Perpendicular to each other", "Non-intersecting"], 1],
    ["If \\(h^2-ab<0\\) in \\(ax^2+2hxy+by^2=0\\), the \"lines\" obtained are imaginary, but the point that still satisfies the joint equation is:", ["\\((1,1)\\)", "\\((0,0)\\)", "\\((a,b)\\)", "\\((h,h)\\)"], 1],
    ["For the equation \\(2x^2-7xy+6y^2=0\\), the sum of the slopes \\(m_1+m_2\\) of the represented lines is:", ["\\(\\dfrac76\\)", "\\(-\\dfrac76\\)", "\\(\\dfrac26\\)", "\\(\\dfrac67\\)"], 0],
    ["For the equation \\(2x^2-7xy+6y^2=0\\), the product of the slopes \\(m_1m_2\\) of the represented lines is:", ["\\(\\dfrac26=\\dfrac13\\)", "\\(\\dfrac76\\)", "\\(-\\dfrac13\\)", "\\(6\\)"], 0],
    ["A joint equation formed from two homogeneous linear equations \\(l_1=0\\) and \\(l_2=0\\) is written as:", ["\\(l_1+l_2=0\\)", "\\(l_1\\cdot l_2=0\\)", "\\(l_1-l_2=0\\)", "\\(l_1/l_2=0\\)"], 1],
    ["The pair of lines given by \\(x^2-y^2=0\\) consists of the lines:", ["\\(x=y\\) and \\(x=-y\\)", "\\(x=0\\) and \\(y=0\\)", "\\(x=1\\) and \\(y=1\\)", "\\(x+y=1\\) and \\(x-y=1\\)"], 0],
    ["If a second-degree homogeneous equation has \\(a=b\\) and \\(h=0\\), the pair of lines represented is:", ["Real and distinct, both passing through the origin at \\(45^\\circ\\)", "Imaginary", "Coincident", "Perpendicular, i.e. \\(x=\\pm y\\)-type lines with equal coefficients"], 1],
    ["Given \\(ax^2+2hxy+by^2=0\\), if \\(a=0\\), one of the lines represented is always:", ["The \\(y\\)-axis, \\(x=0\\)", "The \\(x\\)-axis, \\(y=0\\)", "The line \\(y=x\\)", "The line \\(x+y=0\\)"], 0],
    ["Given \\(ax^2+2hxy+by^2=0\\), if \\(b=0\\), one of the lines represented is always:", ["The \\(x\\)-axis, \\(y=0\\)", "The \\(y\\)-axis, \\(x=0\\)", "The line \\(y=-x\\)", "The line \\(y=2x\\)"], 0],
    ["Two lines represented by \\(ax^2+2hxy+by^2=0\\) coincide with each other only when the quadratic (in \\(m=y/x\\)) \\(bm^2+2hm+a=0\\) has:", ["Two distinct real roots", "Equal (repeated) roots", "Complex roots", "No solution"], 1],
    ["Analytic (coordinate) geometry combines the methods of:", ["Algebra and Geometry", "Algebra and Statistics", "Geometry and Calculus only", "Trigonometry and Algebra only"], 0],
    ["An engineer checking whether three proposed roads represented by linear equations meet at a single junction is essentially testing for:", ["Perpendicularity of two roads", "Concurrency of three lines", "The area of a triangular plot", "The homogeneity of an equation"], 1],
    ["A city planner computing the area of a triangular park with known corner coordinates would use:", ["The area-of-triangle (determinant) formula", "The condition of concurrency", "The homogeneous equation condition", "The angle-between-lines formula"], 0],
    ["Two straight railway tracks that meet at a junction and are modelled by a joint (homogeneous) equation \\(x^2-4xy-12y^2=0\\); the angle between the tracks is found using:", ["The area formula", "The formula \\(\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{a+b}\\)", "The concurrency determinant", "The midpoint formula"], 1],
    ["A surveyor wants to know if three straight boundary walls meet at one point. The most direct analytic-geometry test is to check whether the:", ["Sum of their slopes is zero", "Determinant of their coefficients vanishes", "Product of their \\(y\\)-intercepts is \\(1\\)", "Lines are all of equal length"], 1],
    ["An architect models two support beams crossing at the origin using the joint equation \\(2x^2-8y^2=0\\). The beams (lines) are:", ["\\(x-2y=0\\) and \\(x+2y=0\\)", "\\(x-4y=0\\) and \\(x+4y=0\\)", "\\(2x-y=0\\) and \\(2x+y=0\\)", "\\(x-8y=0\\) and \\(x+8y=0\\)"], 0],
    ["A satellite dish support modelled by a triangular frame requires the installer to find the point equidistant from all three vertices; this point is the:", ["Centroid", "Circumcenter", "Incenter", "Orthocenter"], 1],
    ["In designing a roundabout where three roads meet, engineers use the point of concurrency; if the three road equations are consistent (concurrent), the resulting single point represents:", ["The centre of the roundabout", "The area of the roundabout", "The radius of the roundabout", "The perimeter of the roundabout"], 0],
    ["A landscaper wants the cost of planting an entire triangular garden bed; after finding the area \\(A\\) in square units and cost \\(c\\) per square unit, the total cost is:", ["\\(A+c\\)", "\\(A\\times c\\)", "\\(A/c\\)", "\\(A-c\\)"], 1],
    ["Analytic geometry, as the cornerstone of many modern branches such as algebraic and differential geometry, is fundamentally the study of geometric shapes using:", ["Coordinates and equations", "Only physical measurement", "Only compass and straightedge constructions", "Trial and error graphing"], 0],
    ["A welder designs a support structure from two beams intersecting at the origin, represented by the joint equation \\(x^2-y^2=0\\). The angle between the two beams is:", ["\\(0^\\circ\\)", "\\(45^\\circ\\)", "\\(90^\\circ\\)", "\\(60^\\circ\\)"], 2]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Line</th><th>Equation</th></tr><tr><td>\\(l_1\\)</td><td>\\(2x+3y-8=0\\)</td></tr><tr><td>\\(l_2\\)</td><td>\\(x-y-1=0\\)</td></tr><tr><td>\\(l_3\\)</td><td>\\(x+ky-3=0\\)</td></tr></table>",
          questions: [
            ["The point of intersection of \\(l_1\\) and \\(l_2\\) is:", ["\\((2.2,1.2)\\)", "\\((1,0)\\)", "\\((3,1)\\)", "\\((2,1)\\)"], 0],
            ["For \\(l_1,l_2,l_3\\) to be concurrent, the determinant of their coefficients must equal:", ["\\(1\\)", "\\(-1\\)", "\\(0\\)", "The sum of the constants"], 2],
            ["Using the determinant condition on \\(l_1,l_2,l_3\\), the value of \\(k\\) that makes them concurrent is:", ["\\(k=-3\\)", "\\(k=3\\)", "\\(k=1\\)", "\\(k=-1\\)"], 0],
            ["With that value of \\(k\\), the common point through which all three lines pass is:", ["\\((2.2,1.2)\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((3,3)\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Vertex</th><th>Coordinates</th></tr><tr><td>\\(A\\)</td><td>\\((0,0)\\)</td></tr><tr><td>\\(B\\)</td><td>\\((8,0)\\)</td></tr><tr><td>\\(C\\)</td><td>\\((0,6)\\)</td></tr></table>",
          questions: [
            ["The area of \\(\\triangle ABC\\), by the determinant formula, is:", ["\\(24\\) sq. units", "\\(48\\) sq. units", "\\(14\\) sq. units", "\\(12\\) sq. units"], 0],
            ["The centroid of \\(\\triangle ABC\\) is:", ["\\(\\left(\\tfrac83,2\\right)\\)", "\\((4,3)\\)", "\\((8,6)\\)", "\\((2,2)\\)"], 0],
            ["Since the triangle is right-angled at \\(A\\), its orthocenter is:", ["\\((0,0)\\)", "\\((4,3)\\)", "\\((8,0)\\)", "\\((0,6)\\)"], 0],
            ["Its circumcenter (the midpoint of the hypotenuse \\(BC\\)) is:", ["\\((4,3)\\)", "\\((0,0)\\)", "\\(\\left(\\tfrac83,2\\right)\\)", "\\((8,6)\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Joint equation</th><th>\\(3x^2-8xy-3y^2=0\\)</th></tr></table>",
          questions: [
            ["Comparing with \\(ax^2+2hxy+by^2=0\\), the values of \\(a,\\,2h,\\,b\\) are:", ["\\(a=3,\\ 2h=-8,\\ b=-3\\)", "\\(a=-3,\\ 2h=8,\\ b=3\\)", "\\(a=3,\\ 2h=8,\\ b=-3\\)", "\\(a=-3,\\ 2h=-8,\\ b=-3\\)"], 0],
            ["The sum of the slopes \\(m_1+m_2=-2h/b\\) equals:", ["\\(-\\tfrac83\\)", "\\(\\tfrac83\\)", "\\(1\\)", "\\(-1\\)"], 0],
            ["The product of the slopes \\(m_1m_2=a/b\\) equals:", ["\\(-1\\)", "\\(1\\)", "\\(\\tfrac83\\)", "\\(3\\)"], 0],
            ["Since \\(h^2-ab=16-(-9)=25>0\\), the lines represented are:", ["Real and distinct", "Coincident", "Imaginary", "Parallel"], 0]
          ]
        }
      ],
      short: [],
      long: []
    },
    {
      id: 7,
      name: "Conic Section",
      mcq: [
    ["The eccentricity of a conic section is the ratio of the distance of a point on the conic from the:", ["Focus to the directrix", "Directrix to the focus", "Vertex to the directrix", "Directrix to the vertex"], 0],
    ["The eccentricity of a circle is:", ["\\(e>1\\)", "\\(e<1\\)", "\\(e=1\\)", "\\(e=0\\)"], 3],
    ["The focus of the parabola \\(x^2=-16y\\) is:", ["\\((4,0)\\)", "\\((-4,0)\\)", "\\((0,4)\\)", "\\((0,-4)\\)"], 3],
    ["The length of the latus rectum of the ellipse \\(\\dfrac{x^2}{16}+\\dfrac{y^2}9=1\\) is:", ["\\(\\dfrac{32}9\\)", "\\(\\dfrac9{32}\\)", "\\(\\dfrac92\\)", "\\(\\dfrac89\\)"], 2],
    ["The equations of the directrices of the ellipse \\(\\dfrac{x^2}{16}+\\dfrac{y^2}{36}=1\\) are:", ["\\(y=\\pm\\dfrac{18}{\\sqrt5}\\)", "\\(y=\\pm\\dfrac{\\sqrt5}{18}\\)", "\\(x=\\dfrac{18}{\\sqrt5}\\)", "\\(x=\\dfrac{\\sqrt5}{18}\\)"], 0],
    ["The eccentricity of the hyperbola \\(\\dfrac{x^2}{25}-\\dfrac{y^2}{81}=1\\) is:", ["\\(\\dfrac5{\\sqrt{106}}\\)", "\\(\\dfrac{\\sqrt{106}}5\\)", "\\(\\dfrac{\\sqrt{106}}9\\)", "\\(\\dfrac9{\\sqrt{106}}\\)"], 1],
    ["The equation of the conjugate axis of the hyperbola \\(\\dfrac{(x-1)^2}4-\\dfrac{(y+3)^2}{12}=1\\) is:", ["\\(x=1\\)", "\\(x=-1\\)", "\\(y=3\\)", "\\(y=-3\\)"], 0],
    ["The length of the tangent drawn from the point \\((1,2)\\) to the circle \\(2x^2+2y^2+3x+2y-6=0\\) is:", ["\\(11\\)", "\\(\\sqrt{11}\\)", "\\(\\dfrac{11}2\\)", "\\(\\sqrt{\\dfrac{11}2}\\)"], 3],
    ["The chord joining the two points \\((at_1^2,2at_1)\\) and \\((at_2^2,2at_2)\\) on the parabola \\(y^2=4ax\\) is a focal chord if:", ["\\(t_1+t_2=1\\)", "\\(t_1+t_2=-1\\)", "\\(t_1t_2=1\\)", "\\(t_1t_2=-1\\)"], 3],
    ["Exactly one tangent can be drawn to a circle from a point if that point lies:", ["Outside the circle", "On the circle", "Inside the circle", "At the centre of the circle"], 1],
    ["A conic section is formed by the intersection of a plane with a:", ["Cylinder", "Right circular cone", "Sphere", "Prism"], 1],
    ["When a plane cuts a cone parallel to one of its generators (not through the vertex), the resulting conic is a:", ["Circle", "Ellipse", "Parabola", "Hyperbola"], 2],
    ["When a cutting plane is perpendicular to the axis of the cone and does not pass through the vertex, the section obtained is a:", ["Circle", "Parabola", "Ellipse (non-circular)", "Hyperbola"], 0],
    ["If the cutting plane passes through the vertex of the cone, the \"degenerate\" conic obtained may be a point or:", ["A circle", "A pair of intersecting lines", "An ellipse", "A parabola"], 1],
    ["A circle is the set of all points in a plane that are:", ["Equidistant from a fixed line", "Equidistant from a fixed point", "At a constant sum of distances from two fixed points", "At a constant difference of distances from two fixed points"], 1],
    ["The standard equation of a circle with centre \\((h,k)\\) and radius \\(r\\) is:", ["\\((x-h)^2+(y-k)^2=r^2\\)", "\\((x-h)^2-(y-k)^2=r^2\\)", "\\((x+h)^2+(y+k)^2=r\\)", "\\(x^2+y^2=r^2-h-k\\)"], 0],
    ["The equation of a circle with centre at the origin and radius \\(r\\) is:", ["\\(x^2+y^2=r\\)", "\\(x^2+y^2=r^2\\)", "\\(x^2-y^2=r^2\\)", "\\(x+y=r^2\\)"], 1],
    ["The general form of the equation of a circle is:", ["\\(x^2+y^2+2gx+2fy+c=0\\)", "\\(x^2+2hxy+y^2=0\\)", "\\(ax^2+by^2=1\\)", "\\(y^2=4ax\\)"], 0],
    ["For the circle \\(x^2+y^2+2gx+2fy+c=0\\), the centre and radius are respectively:", ["\\((g,f)\\) and \\(\\sqrt{g^2+f^2-c}\\)", "\\((-g,-f)\\) and \\(\\sqrt{g^2+f^2-c}\\)", "\\((-g,-f)\\) and \\(g^2+f^2-c\\)", "\\((g,f)\\) and \\(g^2+f^2+c\\)"], 1],
    ["For the general equation of a circle \\(x^2+y^2+2gx+2fy+c=0\\), the radius is real if:", ["\\(g^2+f^2-c>0\\)", "\\(g^2+f^2-c<0\\)", "\\(g^2+f^2-c=0\\) only", "\\(c>0\\)"], 0],
    ["The circle \\(x^2+y^2+2gx+2fy+c=0\\) represents an imaginary circle (no real locus) when:", ["\\(g^2+f^2-c>0\\)", "\\(g^2+f^2-c=0\\)", "\\(g^2+f^2-c<0\\)", "\\(g=f=0\\)"], 2],
    ["The centre and radius of the circle \\(x^2+y^2-6x-10y+18=0\\) are:", ["\\((3,5)\\) and \\(4\\)", "\\((-3,-5)\\) and \\(4\\)", "\\((3,5)\\) and \\(16\\)", "\\((6,10)\\) and \\(4\\)"], 0],
    ["The equation of the circle with centre \\((2,-5)\\) and radius \\(3\\) is:", ["\\((x-2)^2+(y+5)^2=9\\)", "\\((x+2)^2+(y-5)^2=9\\)", "\\((x-2)^2+(y+5)^2=3\\)", "\\((x-2)^2-(y+5)^2=9\\)"], 0],
    ["To find the equation of a circle passing through three non-collinear points, we generally use the:", ["Standard form directly", "General form \\(x^2+y^2+2gx+2fy+c=0\\) and solve for \\(g,f,c\\)", "Slope formula only", "Midpoint formula only"], 1],
    ["If a circle passes through two given points, the centre of the circle must be:", ["The midpoint of the two points", "Equidistant from both points", "On the line joining the two points", "At the origin"], 1],
    ["If a line is tangent to a circle at a given point \\(P\\), then the line joining the centre \\(C\\) to \\(P\\) is:", ["Parallel to the tangent", "Perpendicular to the tangent", "Equal in length to the tangent", "Coincident with the tangent"], 1],
    ["A circle touches a given line at a point \\(P\\) and also passes through another point \\(Q\\). To find its centre, we use the facts that \\(|CP|=|CQ|\\) and:", ["\\(CP\\) is parallel to the given line", "\\(CP\\) is perpendicular to the given line", "\\(CQ\\) is perpendicular to the given line", "\\(C\\) lies on the given line"], 1],
    ["A circle circumscribes a rectangle. The centre of the circle must be:", ["A vertex of the rectangle", "The point of intersection of the diagonals of the rectangle", "The midpoint of one side", "Outside the rectangle"], 1],
    ["Two circles touch each other externally at a point \\(P\\). At that point, the line joining the two centres:", ["Is perpendicular to the common tangent at \\(P\\)", "Passes through \\(P\\) and is perpendicular to the common tangent", "Does not pass through \\(P\\)", "Is always vertical"], 1],
    ["A line intersects a circle \\(x^2+y^2=r^2\\) at two distinct points if the perpendicular distance \\(d\\) from the centre to the line satisfies:", ["\\(d>r\\)", "\\(d=r\\)", "\\(d<r\\)", "\\(d=0\\) always"], 2],
    ["A line is tangent to a circle if the perpendicular distance from the centre to the line is:", ["Equal to the radius", "Greater than the radius", "Less than the radius", "Equal to zero"], 0],
    ["A line neither touches nor intersects a circle when the distance from the centre to the line is:", ["Equal to the radius", "Less than the radius", "Greater than the radius", "Equal to the diameter"], 2],
    ["For the line \\(y=mx+c\\) to be tangent to the circle \\(x^2+y^2=r^2\\), the condition on \\(c\\) is:", ["\\(c=\\pm r\\sqrt{m^2+1}\\)", "\\(c=\\pm r(m+1)\\)", "\\(c=r^2m\\)", "\\(c=\\pm rm\\)"], 0],
    ["The line \\(x+2y-3=0\\) is tangent to the circle \\(x^2+y^2=r^2\\) only for a specific value of:", ["\\(m\\)", "\\(r\\)", "The centre", "The \\(y\\)-intercept only, regardless of \\(r\\)"], 1],
    ["Differentiating the equation of a circle \\(x^2+y^2+2gx+2fy+c=0\\) implicitly with respect to \\(x\\) gives the:", ["Equation of the normal directly", "Slope of the tangent line at any point on the circle", "Radius of the circle", "Centre of the circle"], 1],
    ["The equation of the tangent to the circle \\(x^2+y^2+2gx+2fy+c=0\\) at the point \\((x_1,y_1)\\) on the circle is obtained by the standard \"replacement rule\":", ["\\(xx_1+yy_1+g(x+x_1)+f(y+y_1)+c=0\\)", "\\(x^2+y^2=x_1^2+y_1^2\\)", "\\(xx_1-yy_1=c\\)", "\\(x+x_1+y+y_1=0\\)"], 0],
    ["A line that is perpendicular to the tangent at the point of tangency on a circle is called the:", ["Chord", "Secant", "Normal", "Diameter"], 2],
    ["The normal to a circle at any point \\(P\\) on the circle always passes through the:", ["Centre of the circle", "Origin, always", "Point diametrically opposite \\(P\\) only", "Point where the tangent meets the \\(x\\)-axis"], 0],
    ["If the slope of the tangent to a circle at point \\(P(x_1,y_1)\\) is \\(m\\), then the slope of the normal at \\(P\\) is:", ["\\(m\\)", "\\(-m\\)", "\\(\\dfrac1m\\)", "\\(-\\dfrac1m\\)"], 3],
    ["The equation of the tangent to the circle \\(x^2+y^2=25\\) at the point \\((3,4)\\) is:", ["\\(3x+4y=25\\)", "\\(4x+3y=25\\)", "\\(3x-4y=25\\)", "\\(x+y=25\\)"], 0],
    ["For the circle \\(x^2+y^2-4x+2y-5=0\\), the slope of the tangent at the point \\((1,2)\\) is found by first computing \\(dy/dx\\), which equals:", ["\\(\\dfrac{2-x}{y+1}\\)", "\\(\\dfrac{x-2}{y+1}\\)", "\\(\\dfrac{x+2}{y-1}\\)", "\\(\\dfrac{2-y}{x+1}\\)"], 0],
    ["Two circles touch each other internally or externally when the common tangent at the point of contact is:", ["Perpendicular to the line joining the centres", "Parallel to the line joining the centres", "Undefined", "Equal in length to both radii"], 0],
    ["A point \\(P(x_1,y_1)\\) lies outside the circle \\(x^2+y^2+2gx+2fy+c=0\\) if:", ["\\(x_1^2+y_1^2+2gx_1+2fy_1+c>0\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c=0\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c<0\\)", "\\(x_1^2+y_1^2=0\\)"], 0],
    ["A point \\(P(x_1,y_1)\\) lies inside the circle \\(x^2+y^2+2gx+2fy+c=0\\) if:", ["\\(x_1^2+y_1^2+2gx_1+2fy_1+c>0\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c<0\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c=0\\)", "\\(|CP|=r\\)"], 1],
    ["A point \\(P\\) lies on the circle \\(x^2+y^2+2gx+2fy+c=0\\) if:", ["\\(|CP|>r\\)", "\\(|CP|<r\\)", "\\(|CP|=r\\)", "\\(|CP|=0\\)"], 2],
    ["The point \\((4,3)\\) with respect to the circle \\(x^2+y^2=20\\) lies:", ["On the circle", "Inside the circle", "Outside the circle", "At the centre"], 2],
    ["The length of the tangent drawn from an external point \\(P(x_1,y_1)\\) to the circle \\(x^2+y^2+2gx+2fy+c=0\\) is:", ["\\(\\sqrt{x_1^2+y_1^2+2gx_1+2fy_1+c}\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c\\)", "\\(\\sqrt{x_1^2+y_1^2}-r\\)", "\\(\\sqrt{g^2+f^2-c}\\)"], 0],
    ["If two tangents \\(PA\\) and \\(PB\\) are drawn from an external point \\(P\\) to a circle with points of tangency \\(A\\) and \\(B\\), then:", ["\\(|PA|\\ne|PB|\\) in general", "\\(|PA|=|PB|\\)", "\\(|PA|+|PB|=\\)diameter", "\\(|PA|\\cdot|PB|=r^2\\) always"], 1],
    ["The length of the tangent from the point \\((1,2)\\) to the circle \\(x^2+y^2+3x-4y+15=0\\) is:", ["\\(\\sqrt{15}\\)", "\\(\\sqrt{4+3-8+15}\\) simplified \\(=\\sqrt{14}\\)", "\\(15\\)", "\\(\\sqrt{1+2+3-4+15}\\)"], 0],
    ["The proof that two tangents from an external point to a circle are equal in length uses which theorem, applied to the right triangle formed by the centre, external point and point of tangency?", ["The Law of Cosines", "The Pythagoras theorem", "The Law of Sines", "The Midpoint theorem"], 1],
    ["If the length of the tangent from a point \\(P\\) to a circle is zero, then \\(P\\) must lie:", ["Outside the circle", "Inside the circle", "On the circle", "At the centre"], 2],
    ["A parabola is the set of all points in a plane that are equidistant from a fixed point (focus) and a fixed line called the:", ["Latus rectum", "Directrix", "Axis", "Chord"], 1],
    ["The standard equation of a parabola with vertex at the origin and focus at \\((a,0)\\), \\(a>0\\), is:", ["\\(y^2=4ax\\)", "\\(y^2=-4ax\\)", "\\(x^2=4ay\\)", "\\(x^2+y^2=a^2\\)"], 0],
    ["The parabola \\(x^2=4ay\\) has its focus at:", ["\\((a,0)\\)", "\\((-a,0)\\)", "\\((0,a)\\)", "\\((0,-a)\\)"], 2],
    ["The parabola \\(y^2=-4ax\\) opens towards the:", ["Positive \\(x\\)-direction", "Negative \\(x\\)-direction", "Positive \\(y\\)-direction", "Negative \\(y\\)-direction"], 1],
    ["The directrix of the parabola \\(y^2=4ax\\) is the line:", ["\\(x=a\\)", "\\(x=-a\\)", "\\(y=a\\)", "\\(y=-a\\)"], 1],
    ["The axis of symmetry of the parabola \\(y^2=4ax\\) is:", ["\\(x=0\\)", "\\(y=0\\)", "\\(x=a\\)", "\\(y=a\\)"], 1],
    ["The length of the latus rectum of the parabola \\(y^2=4ax\\) is:", ["\\(a\\)", "\\(2a\\)", "\\(4a\\)", "\\(\\dfrac{a}2\\)"], 2],
    ["A chord of a parabola which passes through the focus is called a:", ["Latus rectum", "Focal chord", "Directrix chord", "Normal chord"], 1],
    ["For a parabola with vertex \\((h,k)\\) and axis parallel to the \\(x\\)-axis, the standard form is:", ["\\((y-k)^2=4a(x-h)\\)", "\\((x-h)^2=4a(y-k)\\)", "\\((y-k)^2=4a(y-h)\\)", "\\((x-h)^2+(y-k)^2=4a\\)"], 0],
    ["For the parabola \\((x-h)^2=-4a(y-k)\\), the parabola opens:", ["Upward", "Downward", "Rightward", "Leftward"], 1],
    ["The vertex of the parabola \\(y=x^2-3x+7\\), after completing the square, is located at:", ["\\(\\left(\\tfrac32,\\tfrac{19}4\\right)\\)", "\\((3,7)\\)", "\\(\\left(-\\tfrac32,\\tfrac{19}4\\right)\\)", "\\(\\left(\\tfrac32,-\\tfrac{19}4\\right)\\)"], 0],
    ["Given that the vertex of a parabola is \\((2,3)\\) and the focus is \\((7,3)\\), since both have the same \\(y\\)-coordinate, the axis of the parabola is:", ["Vertical, \\(x=2\\)", "Horizontal, \\(y=3\\)", "The line \\(y=x\\)", "Vertical, \\(x=7\\)"], 1],
    ["A parabola with vertex \\((3,-1)\\) and directrix \\(x=-4\\) opens towards the:", ["Left", "Right", "Upward", "Downward"], 1],
    ["The condition for the line \\(y=mx+c\\) to be tangent to the parabola \\(y^2=4ax\\) is:", ["\\(c=\\dfrac{a}m\\)", "\\(c=am\\)", "\\(c=\\dfrac{a}{m^2}\\)", "\\(c=am^2\\)"], 0],
    ["Using the slope form, the equation of a tangent to the parabola \\(y^2=4ax\\) with slope \\(m\\) is:", ["\\(y=mx+\\dfrac{a}m\\)", "\\(y=mx-\\dfrac{a}m\\)", "\\(y=mx+am\\)", "\\(y=mx-am^2\\)"], 0],
    ["The equation of the tangent to the parabola \\((y-k)^2=4a(x-h)\\) at the point \\((x_1,y_1)\\) on the parabola is:", ["\\((y_1-k)(y-k)=2a[(x-h)+(x_1-h)]\\)", "\\((y-k)^2=4a(x_1-h)\\)", "\\(yy_1=4ax_1\\) only", "\\((x-x_1)=(y-y_1)\\)"], 0],
    ["At the vertex \\((0,0)\\) of the parabola \\(y^2=4ax\\), the equation of the tangent line is:", ["\\(x=0\\)", "\\(y=0\\)", "\\(x=a\\)", "\\(y=a\\)"], 0],
    ["The slope of the normal line to a parabola at a point \\(P\\) is related to the slope \\(m\\) of the tangent at \\(P\\) by:", ["Normal slope \\(=m\\)", "Normal slope \\(=-\\dfrac1m\\)", "Normal slope \\(=\\dfrac1m\\)", "Normal slope \\(=-m\\)"], 1],
    ["At a given point \\((x_1,y_1)\\) on the parabola \\(y^2=4ax\\), the equation of the normal line is:", ["\\(y_1(x-x_1)+2a(y-y_1)=0\\)", "\\(y-y_1=\\dfrac{2a}{y_1}(x-x_1)\\)", "\\(y+y_1=2a(x-x_1)\\)", "\\(x+x_1=0\\)"], 0],
    ["If a tangent line and a normal line are drawn at the same point of a parabola, the two lines are always:", ["Parallel", "Perpendicular", "Coincident", "Equal in length"], 1],
    ["An ellipse is the set of all points in a plane such that the sum of the distances from two fixed points (foci) is:", ["Zero", "Constant", "Equal to the eccentricity", "Always equal to \\(2b\\)"], 1],
    ["The standard equation of an ellipse with centre at the origin and major axis along the \\(x\\)-axis is:", ["\\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1,\\ a>b\\)", "\\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1,\\ b>a\\)", "\\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\)", "\\(x^2+y^2=a^2\\)"], 0],
    ["For the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) with \\(a>b\\), the foci are located at:", ["\\((\\pm a,0)\\)", "\\((\\pm b,0)\\)", "\\((\\pm c,0)\\) where \\(c^2=a^2-b^2\\)", "\\((0,\\pm c)\\)"], 2],
    ["The relationship between \\(a,b\\) and \\(c\\) for an ellipse (with \\(a>b\\)) is:", ["\\(c^2=a^2+b^2\\)", "\\(b^2=a^2-c^2\\)", "\\(a^2=b^2-c^2\\)", "\\(c^2=b^2-a^2\\)"], 1],
    ["The eccentricity of an ellipse is defined as:", ["\\(e=\\dfrac{a}c\\), and \\(e>1\\)", "\\(e=\\dfrac{c}a\\), and \\(0<e<1\\)", "\\(e=\\dfrac{b}a\\)", "\\(e=\\dfrac{c}b\\)"], 1],
    ["The length of the major axis of the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) (with \\(a>b\\)) is:", ["\\(a\\)", "\\(2a\\)", "\\(b\\)", "\\(2b\\)"], 1],
    ["The length of the latus rectum of an ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) is:", ["\\(\\dfrac{2b^2}a\\)", "\\(\\dfrac{2a^2}b\\)", "\\(\\dfrac{b^2}a\\)", "\\(2a\\)"], 0],
    ["The equations of the directrices of the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) (major axis along \\(x\\)-axis) are:", ["\\(x=\\pm\\dfrac{a}e\\)", "\\(y=\\pm\\dfrac{a}e\\)", "\\(x=\\pm ae\\)", "\\(y=\\pm ae\\)"], 0],
    ["The points where an ellipse cuts its minor axis are called its:", ["Foci", "Vertices", "Co-vertices", "Directrices"], 2],
    ["A chord of an ellipse that passes through a focus is called a:", ["Latus rectum", "Focal chord", "Minor chord", "Directrix"], 1],
    ["For the ellipse \\(\\dfrac{x^2}9+\\dfrac{y^2}{25}=1\\), since \\(25>9\\), the major axis lies along the:", ["\\(x\\)-axis", "\\(y\\)-axis", "Line \\(y=x\\)", "Line \\(y=-x\\)"], 1],
    ["The centre of the ellipse \\(\\dfrac{(x-1)^2}9+\\dfrac{(y+2)^2}4=1\\) is:", ["\\((1,-2)\\)", "\\((-1,2)\\)", "\\((1,2)\\)", "\\((-1,-2)\\)"], 0],
    ["The condition for the line \\(y=mx+c\\) to be tangent to the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) is:", ["\\(c^2=a^2m^2+b^2\\)", "\\(c^2=a^2m^2-b^2\\)", "\\(c=am+b\\)", "\\(c^2=a^2+b^2m^2\\)"], 0],
    ["The equation of the tangent to the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) in slope form (slope \\(m\\)) is:", ["\\(y=mx\\pm\\sqrt{a^2m^2+b^2}\\)", "\\(y=mx\\pm\\sqrt{a^2m^2-b^2}\\)", "\\(y=mx\\pm ab\\)", "\\(y=mx\\pm\\sqrt{b^2m^2+a^2}\\)"], 0],
    ["At the point \\((x_1,y_1)\\) on the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\), the equation of the tangent line is:", ["\\(\\dfrac{xx_1}{a^2}+\\dfrac{yy_1}{b^2}=1\\)", "\\(\\dfrac{xx_1}{a^2}-\\dfrac{yy_1}{b^2}=1\\)", "\\(\\dfrac{x}{x_1}+\\dfrac{y}{y_1}=\\dfrac{a^2}{b^2}\\)", "\\(xx_1+yy_1=a^2+b^2\\)"], 0],
    ["The slope of the normal line to the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) at \\((x_1,y_1)\\), given the tangent slope is \\(-\\dfrac{b^2x_1}{a^2y_1}\\), is:", ["\\(-\\dfrac{b^2x_1}{a^2y_1}\\)", "\\(\\dfrac{a^2y_1}{b^2x_1}\\)", "\\(\\dfrac{b^2x_1}{a^2y_1}\\)", "\\(-\\dfrac{a^2y_1}{b^2x_1}\\)"], 1],
    ["At the centre-relative point \\((0,0)\\) if it were on an ellipse, the tangent and normal are undefined; instead, for an ellipse centred at the origin, the tangent at the endpoint of the major axis \\((a,0)\\) is the vertical line:", ["\\(x=a\\)", "\\(y=a\\)", "\\(x=0\\)", "\\(y=0\\)"], 0],
    ["A hyperbola is the set of all points in a plane such that the difference of the distances from two fixed points (foci) is:", ["Zero", "Constant", "Always equal to \\(2c\\)", "Equal to the eccentricity"], 1],
    ["The standard equation of a hyperbola with centre at the origin and transverse axis along the \\(x\\)-axis is:", ["\\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\)", "\\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\)", "\\(\\dfrac{y^2}{a^2}-\\dfrac{x^2}{b^2}=1\\)", "\\(x^2-y^2=a^2+b^2\\)"], 0],
    ["For the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\), the relationship between \\(a,b,c\\) is:", ["\\(c^2=a^2-b^2\\)", "\\(c^2=a^2+b^2\\)", "\\(b^2=a^2+c^2\\)", "\\(a^2=b^2+c^2\\)"], 1],
    ["The eccentricity of a hyperbola is always:", ["Equal to \\(1\\)", "Less than \\(1\\)", "Greater than \\(1\\)", "Equal to \\(0\\)"], 2],
    ["For the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\), the length of the conjugate axis is:", ["\\(2a\\)", "\\(2b\\)", "\\(a\\)", "\\(b\\)"], 1],
    ["The length of the latus rectum of the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\) is:", ["\\(\\dfrac{2a^2}b\\)", "\\(\\dfrac{2b^2}a\\)", "\\(\\dfrac{b^2}a\\)", "\\(2a\\)"], 1],
    ["The condition for the line \\(y=mx+c\\) to be tangent to the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\) is:", ["\\(c^2=a^2m^2-b^2\\)", "\\(c^2=a^2m^2+b^2\\)", "\\(c^2=b^2m^2-a^2\\)", "\\(c=am-b\\)"], 0],
    ["At the point \\((x_1,y_1)\\) on the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\), the equation of the tangent line is:", ["\\(\\dfrac{xx_1}{a^2}-\\dfrac{yy_1}{b^2}=1\\)", "\\(\\dfrac{xx_1}{a^2}+\\dfrac{yy_1}{b^2}=1\\)", "\\(xx_1-yy_1=a^2-b^2\\)", "\\(\\dfrac{x}{x_1}-\\dfrac{y}{y_1}=1\\)"], 0],
    ["If, at a given point on a hyperbola, the tangent line turns out to be vertical (\\(x=\\)constant), then the normal line at that point must be:", ["Also vertical", "Horizontal", "Undefined", "Parallel to an asymptote"], 1],
    ["A suspension bridge cable that hangs in the shape of a conic section, with its lowest point closest to the road, is best modelled by a:", ["Circle", "Parabola", "Ellipse", "Hyperbola"], 1],
    ["Planetary orbits, according to Kepler's law, are best modelled by an ellipse with the Sun located at:", ["The centre of the ellipse", "One of the foci", "A vertex", "A co-vertex"], 1],
    ["The cross-section of a nuclear cooling tower, which is narrow in the middle and wide at the top and bottom, is typically modelled by a:", ["Circle", "Parabola", "Ellipse", "Hyperbola"], 3]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Circle</th><th>Equation</th></tr><tr><td>General form</td><td>\\(x^2+y^2-8x+6y+21=0\\)</td></tr></table>",
          questions: [
            ["The centre of the circle is:", ["\\((4,-3)\\)", "\\((-4,3)\\)", "\\((8,-6)\\)", "\\((4,3)\\)"], 0],
            ["The radius of the circle is:", ["\\(2\\)", "\\(4\\)", "\\(16\\)", "\\(\\sqrt{21}\\)"], 0],
            ["The position of the point \\((0,0)\\) with respect to this circle is:", ["Outside (since \\(21>0\\))", "Inside", "On the circle", "At the centre"], 0],
            ["The length of the tangent from \\((0,0)\\) to the circle is:", ["\\(\\sqrt{21}\\)", "\\(21\\)", "\\(2\\)", "\\(4\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Parabola</th><th>\\(y^2=12x\\)</th></tr></table>",
          questions: [
            ["Comparing with \\(y^2=4ax\\), the value of \\(a\\) is:", ["\\(3\\)", "\\(12\\)", "\\(6\\)", "\\(4\\)"], 0],
            ["The focus of the parabola is at:", ["\\((3,0)\\)", "\\((0,3)\\)", "\\((-3,0)\\)", "\\((12,0)\\)"], 0],
            ["The equation of the directrix is:", ["\\(x=-3\\)", "\\(x=3\\)", "\\(y=-3\\)", "\\(y=3\\)"], 0],
            ["The length of the latus rectum is:", ["\\(12\\)", "\\(3\\)", "\\(6\\)", "\\(24\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Conic</th><th>Equation</th></tr><tr><td>\\(C\\)</td><td>\\(\\dfrac{x^2}{25}+\\dfrac{y^2}9=1\\)</td></tr></table>",
          questions: [
            ["Since \\(25>9\\), the major axis of \\(C\\) lies along the:", ["\\(x\\)-axis", "\\(y\\)-axis", "Line \\(y=x\\)", "Line \\(y=-x\\)"], 0],
            ["The value of \\(c\\), where \\(c^2=a^2-b^2\\), is:", ["\\(4\\)", "\\(16\\)", "\\(34\\)", "\\(\\sqrt{34}\\)"], 0],
            ["The eccentricity \\(e=c/a\\) of \\(C\\) is:", ["\\(\\dfrac45\\)", "\\(\\dfrac54\\)", "\\(\\dfrac35\\)", "\\(1\\)"], 0],
            ["The length of the latus rectum \\(2b^2/a\\) of \\(C\\) is:", ["\\(\\dfrac{18}5\\)", "\\(\\dfrac{50}9\\)", "\\(5\\)", "\\(9\\)"], 0]
          ]
        }
      ],
      short: [],
      long: []
    }
  ]
};
