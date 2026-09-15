/*
  CLASS 12 -- MATH -- MCQs -- CHAPTERS 4 & 5 (100 each)
  ------------------------------------------------------
  Chapter 4: Differential Equations.
  Chapter 5: Kinematics of Motion in a Straight Line.
  Source: a 200-question MCQ bank (100 per unit, with answer key)
  provided as a PDF, itself drawn from the Review Exercise plus
  definitions/formulas/worked examples of each unit. Every
  computational question -- order/degree classification, separable
  and homogeneous DE solutions, decay/cooling constants, kinematics
  equations, derivatives/integrals of position-velocity-acceleration,
  vector-valued function derivatives and magnitudes -- was
  independently recomputed (not just copied from the source key)
  before being transcribed here. All 200 answers matched the source
  key; no errors were found in this bank (unlike some other banks in
  this series), so nothing needed correcting this time -- every value
  below is still an independently-verified result, not a copy-paste.
  The source PDF's options were already listed in a single A,B,C,D
  column, so no re-ordering was needed. Each chapter also gets 3
  original scenario (stimulus) sets not in the source, built from the
  same definitions/formulas with fresh numbers. Every question
  validated to have exactly 4 distinct options before shipping.

  MATH FORMATTING: wrap inline math in \( \) so KaTeX renders it.
*/
var CLASS12_MATH_MCQ_CH4_5 = {
  chapters: [
    {
      id: 4,
      name: "Differential Equations",
      mcq: [
    ["The order of a differential equation is defined as:", ["The power of the highest order derivative", "The order of the highest order derivative present in the equation", "The number of arbitrary constants in the solution", "The degree of the dependent variable"], 1],
    ["The degree of a differential equation (when it is a polynomial equation in derivatives) is defined as:", ["The order of the lowest derivative present", "The power of the highest order derivative present, after clearing radicals and fractions", "The total number of terms in the equation", "The value of the independent variable"], 1],
    ["Order and degree of a differential equation (when defined) are always:", ["Negative integers", "Positive integers", "Rational numbers only", "Any real numbers"], 1],
    ["Find the order of the differential equation \\(\\dfrac{dy}{dx}-2x=1\\).", ["0", "1", "2", "3"], 1],
    ["Find the order of the differential equation \\(x\\dfrac{d^2y}{dx^2}+\\dfrac{dy}{dx}-5=0\\).", ["1", "2", "3", "4"], 1],
    ["Find the degree of the differential equation \\(\\dfrac{dy}{dx}-3=0\\).", ["0", "1", "2", "3"], 1],
    ["Find the degree of the differential equation \\((y'')^2+6y'=9\\).", ["1", "2", "3", "4"], 1],
    ["Find the order and degree of \\((y'')^3-xy'+y=0\\).", ["order 2, degree 3", "order 3, degree 2", "order 2, degree 2", "order 3, degree 3"], 0],
    ["Determine the order and degree of \\(x\\left(\\dfrac{d^3y}{dx^3}\\right)^2+x\\dfrac{d^2y}{dx^2}-\\dfrac{dy}{dx}+y=1\\).", ["order 3, degree 1", "order 2, degree 3", "order 3, degree 2", "order 2, degree 2"], 2],
    ["Determine the order and degree of \\(\\left(\\dfrac{d^2y}{dx^2}\\right)^2+x\\left(\\dfrac{dy}{dx}\\right)+y=x+1\\).", ["order 1, degree 2", "order 2, degree 2", "order 2, degree 1", "order 1, degree 1"], 1],
    ["Find the order and degree of \\(\\dfrac{d^2y}{dx^2}-3\\dfrac{dy}{dx}+x=0\\).", ["order 2, degree 1", "order 1, degree 2", "order 2, degree 2", "order 1, degree 1"], 0],
    ["For the equation \\(y'-\\log(y')+3=0\\), the degree is:", ["1", "2", "3", "not defined"], 3],
    ["Eliminating the two arbitrary constants \\(A\\) and \\(B\\) from \\(y=A\\sin(2x-B)\\) produces a differential equation of order:", ["0", "1", "2", "3"], 2],
    ["An equation containing partial derivatives of the dependent variable with respect to more than one independent variable is called:", ["an ODE", "a PDE", "a linear DE", "a homogeneous DE"], 1],
    ["An \\(n^{\\text{th}}\\) order linear differential equation has the general form:", ["\\(a_n(x)\\dfrac{d^ny}{dx^n}+\\cdots+a_1(x)\\dfrac{dy}{dx}+a_0(x)y=f(x)\\)", "\\(y^{(n)}=f(x,y)\\), with no restriction on coefficients", "\\(\\dfrac{dy}{dx^n}=f(x)\\)", "\\(y=f(x)+c\\)"], 0],
    ["A differential equation is called linear if the dependent variable and all its derivatives:", ["occur to the second power", "occur to the power one and are not multiplied together", "occur only inside trigonometric functions", "appear only in denominators"], 1],
    ["Which of the following is a nonlinear differential equation?", ["\\(\\dfrac{dy}{dx}=x+y\\)", "\\(\\dfrac{d^2y}{dx^2}+3\\dfrac{dy}{dx}+y=1\\)", "\\(\\left(\\dfrac{d^3y}{dx^3}\\right)^2+x\\dfrac{d^2y}{dx^2}-\\dfrac{dy}{dx}+2x=5\\)", "\\(\\dfrac{dy}{dx}=x\\)"], 2],
    ["The differential equation \\(y^2(x-3)\\dfrac{dy}{dx}=2xy^2\\) can be reduced to a linear equation by dividing both sides by:", ["\\(x\\)", "\\(y\\)", "\\(y^2\\)", "\\(x^2\\)"], 2],
    ["Which pair correctly classifies \\(\\dfrac{d^2y}{dx^2}+12xy=0\\)?", ["Linear, order 2", "Nonlinear, order 2", "Linear, order 1", "Nonlinear, order 1"], 0],
    ["Which of the following differential equations is linear?", ["\\(\\dfrac{d^2y}{dx^2}-5\\dfrac{dy}{dx}+11=y\\)", "\\(xy''+y(y')^2=0\\)", "\\(\\dfrac{dy}{dx^2}+y=x\\)", "\\(y''\\cdot y'=x\\)"], 0],
    ["A function that satisfies a differential equation identically over an interval is called its:", ["root", "solution", "domain", "degree"], 1],
    ["The general solution of a differential equation of order \\(n\\) contains:", ["exactly one arbitrary constant", "\\(n\\) arbitrary constants", "\\(n+1\\) arbitrary constants", "no arbitrary constant"], 1],
    ["A solution obtained by assigning particular values to the arbitrary constants of the general solution is called:", ["a singular solution", "a particular solution", "a trivial solution", "an implicit solution"], 1],
    ["A solution of the form \\(y=f(x)\\) is called:", ["an implicit solution", "an explicit solution", "only a general solution", "a singular solution"], 1],
    ["A solution expressed in the form \\(f(x,y)=0\\) is called:", ["an explicit solution", "an implicit solution", "only a particular solution", "a trivial solution"], 1],
    ["The solution \\(x^2+y^2=c\\) of \\(y\\dfrac{dy}{dx}+x=0\\) represents a family of:", ["parabolas", "straight lines", "circles centred at the origin", "ellipses"], 2],
    ["Which function is a solution of \\(2\\dfrac{dy}{dx}+y=0\\)?", ["\\(e^{x/2}\\)", "\\(e^{-x/2}\\)", "\\(e^{2x}\\)", "\\(e^{-2x}\\)"], 1],
    ["Which value of \\(c\\) makes \\(y=10\\) a constant solution of \\(\\dfrac{dy}{dx}+cy=50\\)?", ["10", "6", "5", "4"], 2],
    ["A first-order initial value problem (IVP) requires:", ["two conditions", "one condition to determine the arbitrary constant", "no condition", "three conditions"], 1],
    ["In solving an IVP \\(\\dfrac{dy}{dx}=f(x,y)\\), \\(y(x_0)=y_0\\), the constant of integration is found by:", ["differentiating the general solution twice", "substituting the initial condition into the general solution", "always setting \\(c=0\\)", "integrating the given condition"], 1],
    ["If \\(f(x,y)=\\dfrac{x^3-y^3}{x-y}\\), then \\(f(x,y)\\) is a homogeneous function of degree:", ["1", "2", "3", "4"], 1],
    ["A function \\(f(x,y)\\) is homogeneous of degree \\(n\\) if:", ["\\(f(x,y)=nf(x,y)\\)", "\\(f(tx,ty)=t^nf(x,y)\\)", "\\(f(tx,ty)=t+n\\)", "\\(f(x,y)=x^n+y^n\\) always"], 1],
    ["The relation \\(x^2+y^2-4=0\\) is an implicit solution of which differential equation?", ["\\(\\dfrac{dy}{dx}=\\dfrac{x}{y}\\)", "\\(\\dfrac{dy}{dx}=-\\dfrac{x}{y}\\)", "\\(\\dfrac{dy}{dx}=\\dfrac{y}{x}\\)", "\\(\\dfrac{dy}{dx}=-\\dfrac{y}{x}\\)"], 1],
    ["For the implicit solution \\(x^2+y^2-4=0\\), the explicit branch \\(y=\\sqrt{4-x^2}\\) is valid on the interval:", ["\\((-\\infty,\\infty)\\)", "\\((-2,2)\\)", "\\([0,4]\\)", "\\((0,2)\\)"], 1],
    ["Eliminating the constants \\(A,B\\) from \\(y=A\\sin(2x-B)\\) gives the differential equation:", ["\\(\\dfrac{d^2y}{dx^2}+4y=0\\)", "\\(\\dfrac{d^2y}{dx^2}-4y=0\\)", "\\(\\dfrac{d^2y}{dx^2}+2y=0\\)", "\\(\\dfrac{d^2y}{dx^2}+y=0\\)"], 0],
    ["The differential equation obtained above physically represents:", ["motion with constant velocity", "acceleration varying as the distance from a fixed point (simple harmonic motion)", "zero acceleration", "constant displacement"], 1],
    ["Which of the following is an ordinary differential equation (ODE)?", ["\\(\\dfrac{\\partial z}{\\partial x}+\\dfrac{\\partial z}{\\partial y}=0\\)", "\\(\\dfrac{d^2y}{dx^2}-5\\dfrac{dy}{dx}+11=y\\)", "\\(\\dfrac{\\partial^2u}{\\partial x^2}=\\dfrac{\\partial^2u}{\\partial t^2}\\)", "none of these"], 1],
    ["A differential equation that is not an ODE is classified as:", ["linear", "a PDE", "homogeneous", "separable"], 1],
    ["If \\(y=8\\) is a constant solution of \\(\\dfrac{dy}{dx}+cy=32\\), then \\(c\\) equals:", ["8", "6", "5", "4"], 3],
    ["A first order differential equation is called separable if it can be written in the form:", ["\\(\\dfrac{dy}{dx}=g(x)h(y)\\)", "\\(\\dfrac{dy}{dx}=x+y\\) only", "\\(y''+y=0\\)", "\\(f(tx,ty)=t^nf(x,y)\\)"], 0],
    ["To solve a separable equation \\(\\dfrac{dy}{dx}=\\dfrac{f(x)}{g(y)}\\), the first step is to:", ["integrate directly without separating", "separate the variables so all \\(y\\)-terms are on one side and \\(x\\)-terms on the other", "differentiate again", "substitute \\(y=vx\\)"], 1],
    ["Solve \\(\\dfrac{dy}{dx}=\\dfrac{x^2}{y}\\).", ["\\(3y^2-2x^3=c\\)", "\\(2y^2-3x^3=c\\)", "\\(y^2+x^3=c\\)", "\\(3y^2+2x^3=c\\)"], 0],
    ["Solve \\((1+x)\\,dy-y\\,dx=0\\).", ["\\(y=c(x+1)\\)", "\\(y=c(x-1)\\)", "\\(y=\\dfrac{c}{x+1}\\)", "\\(y=cx\\)"], 0],
    ["Solve \\(\\dfrac{dy}{dx}=\\dfrac1{x\\tan y}\\).", ["\\(x\\cos y=C\\)", "\\(x\\sin y=C\\)", "\\(y\\cos x=C\\)", "\\(x\\tan y=C\\)"], 0],
    ["Solve \\(\\dfrac{dy}{dx}=1+e^{2x}\\).", ["\\(y=x+\\dfrac12e^{2x}+c\\)", "\\(y=x+2e^{2x}+c\\)", "\\(y=\\dfrac12x^2+e^{2x}+c\\)", "\\(y=x-\\dfrac12e^{2x}+c\\)"], 0],
    ["Solve \\(y\\,dx+x\\,dy=0\\).", ["\\(xy=c\\)", "\\(y=cx\\)", "\\(y=\\dfrac{x}{c}\\)", "\\(x+y=c\\)"], 0],
    ["Solve \\(\\dfrac{dy}{dx}=\\dfrac{y}{x}\\).", ["\\(y=cx\\)", "\\(xy=c\\)", "\\(y=x+c\\)", "\\(y=cx^2\\)"], 0],
    ["Solve \\(\\sec^2x\\tan y\\,dx+\\sec^2y\\tan x\\,dy=0\\).", ["\\(\\tan x\\tan y=c\\)", "\\(\\tan x=c\\tan y\\)", "\\(\\tan x+\\tan y=c\\)", "\\(\\sec x\\sec y=c\\)"], 0],
    ["The general solution of \\(y^2\\,dy=x^2\\,dx\\) is:", ["\\(y^3-x^3=c\\)", "\\(y^3+x^3=c\\)", "\\(y^2-x^2=c\\)", "\\(3y^3=2x^3+c\\)"], 0],
    ["Solve \\(\\cos x\\sin y\\,dx+\\sin x\\cos y\\,dy=0\\).", ["\\(\\sin x\\sin y=c\\)", "\\(\\cos x\\cos y=c\\)", "\\(\\tan x\\tan y=c\\)", "\\(\\sin x\\cos y=c\\)"], 0],
    ["Solve the IVP \\(y^2\\,dy-x^2\\,dx=0\\), \\(y(0)=1\\).", ["\\(y^3=x^3+1\\)", "\\(y^3=x^3-1\\)", "\\(y^3=1-x^3\\)", "\\(y=x+1\\)"], 0],
    ["Solve \\(\\dfrac{dy}{dx}=e^{x-y}\\).", ["\\(e^y-e^x=c\\)", "\\(e^y+e^x=c\\)", "\\(e^{-y}-e^{-x}=c\\)", "\\(e^xe^y=c\\)"], 0],
    ["Solve \\(\\dfrac{dy}{dx}=\\dfrac{y-1}{x+1}\\).", ["\\(y-1=c(x+1)\\)", "\\(y+1=c(x+1)\\)", "\\(y-1=c(x-1)\\)", "\\((y-1)(x+1)=c\\)"], 0],
    ["Solve the IVP \\(\\dfrac{dy}{dx}=\\dfrac{y}{x}\\), \\(y(1)=2\\).", ["\\(y=2x\\)", "\\(y=x+1\\)", "\\(y=x^2\\)", "\\(y=2x^2\\)"], 0],
    ["Which of the following differential equations is NOT separable?", ["\\(\\dfrac{dy}{dx}=x^2y^2\\)", "\\(\\dfrac{dy}{dx}=\\dfrac{x}{y}\\)", "\\(\\dfrac{dy}{dx}=x+y\\)", "\\(\\dfrac{dy}{dx}=e^x\\cos y\\)"], 2],
    ["In solving a separable differential equation, after integrating both sides the constant of integration is usually written:", ["as two separate constants, one on each side", "as a single constant on one side", "it is omitted", "always as \\(c=0\\)"], 1],
    ["Solve the IVP \\(x\\,dy=y\\,dx\\), \\(y(1)=5\\).", ["\\(y=5x\\)", "\\(y=x+4\\)", "\\(y=5x^2\\)", "\\(xy=5\\)"], 0],
    ["The general solution of \\(\\dfrac{dy}{dx}=\\dfrac{-x}{y}\\) is:", ["\\(x^2+y^2=c\\)", "\\(x^2-y^2=c\\)", "\\(y^2-x^2=c\\)", "\\(xy=c\\)"], 0],
    ["The family of curves \\(x^2+y^2=c\\) represents:", ["a family of parabolas with vertex at the origin", "a family of concentric circles centred at the origin", "a family of straight lines through the origin", "a family of hyperbolas"], 1],
    ["A first order differential equation \\(\\dfrac{dy}{dx}=f(x,y)\\) is called homogeneous if \\(f(x,y)\\) can be expressed purely as a function of:", ["\\(x\\) only", "\\(y\\) only", "\\(\\dfrac{y}{x}\\)", "\\(x+y\\) only"], 2],
    ["To solve a homogeneous differential equation, the standard substitution used is:", ["\\(y=vx\\) (i.e. \\(v=y/x\\))", "\\(y=v+x\\)", "\\(x=vy^2\\)", "\\(v=x+y\\)"], 0],
    ["After substituting \\(y=vx\\) in a homogeneous differential equation, \\(\\dfrac{dy}{dx}\\) becomes:", ["\\(v\\)", "\\(v+x\\dfrac{dv}{dx}\\)", "\\(x\\dfrac{dv}{dx}\\)", "\\(\\dfrac{v}{x}\\)"], 1],
    ["Check whether \\(f(x,y)=6xy^3-x^2y^2\\) is homogeneous, and if so find its degree.", ["degree 3", "degree 4", "degree 2", "not homogeneous"], 1],
    ["Check whether \\(f(x,y)=x^2-y\\) is homogeneous.", ["homogeneous, degree 2", "homogeneous, degree 1", "not homogeneous", "homogeneous, degree 0"], 2],
    ["Check whether \\(f(x,y)=\\dfrac{2y^3}{x^2y}-7\\) is homogeneous, and find its degree.", ["degree 0", "degree 1", "degree 2", "not homogeneous"], 0],
    ["Solve the homogeneous equation \\((x-y)\\,dx+x\\,dy=0\\).", ["\\(y=x(c-\\ln|x|)\\)", "\\(y=x(c+\\ln|x|)\\)", "\\(y=c\\ln|x|\\)", "\\(y=cx^2\\)"], 0],
    ["Solve \\(\\dfrac{dy}{dx}=\\dfrac{x^2+y^2}{2xy}\\).", ["\\(x^2-y^2=Cx\\)", "\\(x^2+y^2=Cx\\)", "\\(x^2-y^2=C\\)", "\\(y^2-x^2=Cx\\)"], 0],
    ["Solving the IVP \\(x\\dfrac{dy}{dx}=y+xe^{y/x}\\), \\(y(1)=1\\), leads to the implicit solution:", ["\\(e^{-1}-e^{-y/x}=\\ln x\\)", "\\(e^{-1}+e^{-y/x}=\\ln x\\)", "\\(e^{y/x}=\\ln x+e\\)", "\\(e^{-y/x}=\\ln x\\)"], 0],
    ["Which of the following is a homogeneous function of degree 2?", ["\\(x^2+xy\\)", "\\(x^3+y\\)", "\\(x+y\\)", "\\(\\dfrac{x}{y}\\)"], 0],
    ["If \\(f(tx,ty)=t^0f(x,y)\\) for all \\(t\\), then \\(f(x,y)\\) is homogeneous of degree:", ["0", "1", "undefined", "2"], 0],
    ["The differential equation \\(\\dfrac{dy}{dx}=\\dfrac{y-x}{x+y}\\) is:", ["separable", "homogeneous", "linear in \\(y\\) only", "not solvable"], 1],
    ["In the substitution \\(y=vx\\), the new variable \\(v\\) is a function of:", ["\\(y\\) only", "\\(x\\) only", "both \\(x\\) and \\(y\\) independently", "a constant"], 1],
    ["To solve \\(\\dfrac{dy}{dx}=\\dfrac{y^2+xy}{x^2}\\), the appropriate substitution is:", ["\\(y=vx\\)", "\\(x=vy\\)", "\\(y=v+x\\)", "\\(v=xy\\)"], 0],
    ["A homogeneous differential equation of the form \\(M(x,y)\\,dx+N(x,y)\\,dy=0\\) requires that \\(M\\) and \\(N\\) be homogeneous functions of:", ["different degrees", "the same degree", "degree zero only", "degree one only"], 1],
    ["Newton's law of cooling states that the rate of change of temperature of a body is proportional to:", ["the time elapsed", "the temperature difference between the body and its surroundings", "the mass of the body", "the specific heat of the body"], 1],
    ["The differential equation form of Newton's law of cooling is:", ["\\(\\dfrac{dT}{dt}=k(T-T_0)\\)", "\\(\\dfrac{dT}{dt}=kT_0\\)", "\\(\\dfrac{dT}{dt}=kt\\)", "\\(\\dfrac{dT}{dt}=k(T+T_0)\\)"], 0],
    ["If population growth is modelled by \\(\\dfrac{dP}{dt}\\propto P\\), then the general solution has the form:", ["\\(P=P_0e^{kt}\\)", "\\(P=P_0+kt\\)", "\\(P=kt^2\\)", "\\(P=P_0-kt\\)"], 0],
    ["Radioactive substances disintegrate at a rate proportional to:", ["time", "the amount of substance present", "the surrounding temperature", "the square of the amount present"], 1],
    ["The differential equation for radioactive decay is:", ["\\(\\dfrac{dN}{dt}=-kN\\)", "\\(\\dfrac{dN}{dt}=kN\\)", "\\(\\dfrac{dN}{dt}=k\\)", "\\(\\dfrac{dN}{dt}=-kt\\)"], 0],
    ["For an object falling freely near Earth's surface (ignoring air resistance), Newton's second law gives:", ["\\(m\\dfrac{dv}{dt}=mg\\)", "\\(m\\dfrac{dv}{dt}=-mg\\)", "\\(\\dfrac{dv}{dt}=0\\)", "\\(m\\dfrac{dv}{dt}=g^2\\)"], 0],
    ["If the half-life of a radioactive substance is \\(T_{1/2}\\), the decay constant \\(k\\) satisfies:", ["\\(k=\\dfrac{\\ln2}{T_{1/2}}\\)", "\\(k=\\ln2\\times T_{1/2}\\)", "\\(k=\\dfrac2{T_{1/2}}\\)", "\\(k=T_{1/2}\\)"], 0],
    ["Thomas Malthus's population model assumes the growth rate is proportional to:", ["the area of the region", "the total population present at that time", "time only", "a fixed birth-rate constant only"], 1],
    ["In the pizza-cooling problem \\(T=T_0+ce^{kt}\\), how many given conditions are needed to determine both \\(c\\) and \\(k\\)?", ["one", "two", "three", "none"], 1],
    ["For the falling object \\(m\\dfrac{dv}{dt}=mg\\), cancelling \\(m\\) from both sides gives:", ["\\(\\dfrac{dv}{dt}=g\\)", "\\(\\dfrac{dv}{dt}=mg\\)", "\\(\\dfrac{dv}{dt}=\\dfrac{g}{m}\\)", "\\(v=g\\)"], 0],
    ["Integrating \\(\\dfrac{dv}{dt}=g\\) with \\(v(0)=0\\) gives:", ["\\(v=gt\\)", "\\(v=gt+1\\)", "\\(v=\\dfrac{g}{t}\\)", "\\(v=g\\)"], 0],
    ["Integrating \\(v=gt\\) again with \\(S(0)=0\\) gives the displacement:", ["\\(S=gt\\)", "\\(S=\\dfrac12gt^2\\)", "\\(S=gt^2\\)", "\\(S=\\dfrac13gt^3\\)"], 1],
    ["In the equation \\(T-T_{\\text{out}}=ce^{kt}\\) describing a thermometer taken outdoors, \\(T_{\\text{out}}\\) represents:", ["the initial reading of the thermometer", "the surrounding (outdoor) temperature", "the rate constant", "the time of observation"], 1],
    ["In a bacteria culture, if the population becomes 4 times in 2 days, the growth constant \\(k\\) satisfies:", ["\\(e^{2k}=4\\)", "\\(e^{2k}=2\\)", "\\(e^{4k}=2\\)", "\\(2k=4\\)"], 0],
    ["Which of the following real-life situations is best modelled by \\(\\dfrac{dP}{dt}=kP\\)?", ["Uniform motion at constant speed", "Population growth or radioactive decay", "A body permanently at rest", "A displacement-time graph with zero slope"], 1],
    ["A good mathematical model (such as a differential equation) should have which two properties?", ["It should be complicated and represent the situation loosely", "It should be simple enough to solve, and represent the real situation well enough that its solution is meaningful", "It must always have a unique numerical solution", "It must avoid using derivatives"], 1],
    ["The order of the differential equation \\(x\\dfrac{d^3y}{dx^3}-2\\left(\\dfrac{dy}{dx}\\right)^4+y=0\\) is:", ["1", "2", "3", "4"], 2],
    ["The degree of the differential equation \\(\\dfrac{d^2y}{dx^2}+9y^3=\\sin x\\) is:", ["0", "1", "2", "3"], 1],
    ["\\(y=8\\) is a solution of the differential equation:", ["\\(\\dfrac{dy}{dx}+8y=32\\)", "\\(\\dfrac{dy}{dx}+6y=32\\)", "\\(\\dfrac{dy}{dx}+5y=32\\)", "\\(\\dfrac{dy}{dx}+4y=32\\)"], 3],
    ["\\(f(x,y)=\\dfrac{x^3-y^3}{x-y}\\) is a homogeneous function of degree:", ["1", "2", "3", "4"], 1],
    ["The solution of the differential equation \\(dy=dx\\) is:", ["\\(y=x+c\\)", "\\(y=x^2+c\\)", "\\(y^2=x^2+c\\)", "\\(y^2=x+c\\)"], 0],
    ["The number of arbitrary constants present in the general solution of a differential equation of first order is:", ["1", "2", "3", "0"], 0],
    ["The differential equation \\(\\dfrac{dy}{dx}=e^{x+y}\\) has solution:", ["\\(e^{-x-y}=c\\)", "\\(e^{-x}+e^y=c\\)", "\\(e^x+e^y=c\\)", "\\(e^x+e^{-y}=c\\)"], 3],
    ["The general solution of \\(y^2\\,dy-x^2\\,dx=0\\) is:", ["\\(x^2-y^2=c\\)", "\\(x^3+y^3=c\\)", "\\(x^3-y^3=c\\)", "\\(x^2+y^2=c\\)"], 2],
    ["The solution of \\(\\cos x\\sin y\\,dx+\\sin x\\cos y\\,dy=0\\) is:", ["\\(\\sin x\\cos y=c\\)", "\\(\\cos x\\cos y=c\\)", "\\(\\cos x\\sin y=c\\)", "\\(\\sin x\\sin y=c\\)"], 3],
    ["Which of the following cannot be the order of a differential equation?", ["\\(-1\\)", "1", "10", "100"], 0]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Differential Equation</th><th>Note</th></tr><tr><td>\\(x^2\\dfrac{d^2y}{dx^2}+\\left(\\dfrac{dy}{dx}\\right)^3-y=0\\)</td><td>Polynomial in derivatives</td></tr></table>",
          questions: [
            ["The order of this equation is:", ["1", "2", "3", "4"], 1],
            ["The degree of this equation is:", ["1", "2", "3", "not defined"], 0],
            ["Is this differential equation linear or nonlinear?", ["Linear, because all derivatives appear to power 1", "Nonlinear, because of the cubed first-derivative term", "Linear, because it equals zero", "Nonlinear, because \\(y\\) is squared"], 1],
            ["If this equation were rewritten as \\(x^2\\dfrac{d^2y}{dx^2}=y-\\left(\\dfrac{dy}{dx}\\right)^3\\), would the order or degree change?", ["Neither changes; rearranging does not affect order or degree", "The order becomes 3", "The degree becomes 3", "The degree becomes not defined"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Proposed solution</th><th>Differential equation</th></tr><tr><td>\\(y=Ce^{-3x}\\)</td><td>\\(\\dfrac{dy}{dx}+3y=0\\)</td></tr></table>",
          questions: [
            ["Differentiating \\(y=Ce^{-3x}\\) gives \\(\\dfrac{dy}{dx}=\\):", ["\\(-3Ce^{-3x}\\)", "\\(3Ce^{-3x}\\)", "\\(Ce^{-3x}\\)", "\\(-3C\\)"], 0],
            ["Substituting into \\(\\dfrac{dy}{dx}+3y\\) gives:", ["\\(0\\)", "\\(6Ce^{-3x}\\)", "\\(-6Ce^{-3x}\\)", "\\(3C\\)"], 0],
            ["So \\(y=Ce^{-3x}\\) is:", ["A general solution of the equation, for any constant \\(C\\)", "Only a particular solution", "Not a solution at all", "A singular solution only"], 0],
            ["If an initial condition \\(y(0)=5\\) is imposed, the particular solution is:", ["\\(y=5e^{-3x}\\)", "\\(y=e^{-3x}+5\\)", "\\(y=5e^{3x}\\)", "\\(y=3e^{-5x}\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Room temperature \\(T_0\\)</td><td>\\(20^\\circ\\text{C}\\)</td></tr><tr><td>Model</td><td>\\(T=T_0+ce^{kt}\\)</td></tr><tr><td>At \\(t=0\\)</td><td>\\(T=100^\\circ\\text{C}\\)</td></tr></table>",
          questions: [
            ["Using \\(T(0)=100\\), the constant \\(c\\) equals:", ["80", "100", "20", "120"], 0],
            ["As \\(t\\to\\infty\\) (assuming \\(k<0\\)), \\(T\\) approaches:", ["\\(20^\\circ\\text{C}\\)", "\\(100^\\circ\\text{C}\\)", "\\(0^\\circ\\text{C}\\)", "\\(80^\\circ\\text{C}\\)"], 0],
            ["This behaviour illustrates:", ["Newton's law of cooling, where the body's temperature approaches the surrounding temperature", "Radioactive decay to zero", "Population growth without bound", "Simple harmonic motion"], 0],
            ["If \\(k\\) were positive instead of negative, the model would predict:", ["Temperature increasing without bound, which is physically unrealistic for cooling", "The same cooling behaviour", "Temperature staying constant at \\(100^\\circ C\\)", "Temperature reaching \\(20^\\circ C\\) instantly"], 0]
          ]
        }
      ],
      short: [],
      long: []
    },
    {
      id: 5,
      name: "Kinematics of Motion in a Straight Line",
      mcq: [
    ["A quantity that has magnitude only is called a:", ["vector", "scalar", "tensor", "matrix"], 1],
    ["A quantity that has both magnitude and direction is called a:", ["scalar", "vector", "constant", "coefficient"], 1],
    ["Which of the following is a scalar quantity?", ["displacement", "velocity", "distance", "acceleration"], 2],
    ["Which of the following is a vector quantity?", ["distance", "speed", "time", "displacement"], 3],
    ["Distance is a scalar quantity because it:", ["depends on direction", "describes only how much path is covered, regardless of direction", "is always negative", "always equals the displacement"], 1],
    ["A body travels 3 km due north and then 4 km due east. The total distance covered is:", ["3 km", "4 km", "7 km", "5 km"], 2],
    ["For the same body as in the previous question, the magnitude of the displacement is:", ["7 km", "5 km", "3 km", "4 km"], 1],
    ["Speed is defined as:", ["the rate of change of displacement", "the rate of change of distance with time, regardless of direction", "the rate of change of velocity", "the total change in position"], 1],
    ["Velocity is defined as:", ["the rate of change of distance", "the rate of change of displacement with respect to time", "the rate of change of acceleration", "the total path length covered"], 1],
    ["Which of the following pairs consists of two vector quantities?", ["mass, time", "velocity, acceleration", "distance, speed", "time, speed"], 1],
    ["\"A car moves at 50 km/h due west\" describes the car's:", ["speed only", "velocity", "distance", "displacement only"], 1],
    ["If an object moves along a curved path from point \\(A\\) to point \\(B\\), its displacement is represented by:", ["the length of the curved path", "the straight line segment \\(\\overrightarrow{AB}\\)", "twice the curved path", "always zero"], 1],
    ["Which of the following statements is always true?", ["distance \\(<\\) magnitude of displacement", "distance \\(\\ge\\) magnitude of displacement", "distance = displacement always", "displacement is always positive"], 1],
    ["Weight is an example of a:", ["scalar quantity", "vector quantity", "neither scalar nor vector", "dimensionless quantity"], 1],
    ["Acceleration is defined as the rate of change of:", ["distance with respect to time", "displacement with respect to time", "velocity with respect to time", "speed with respect to distance"], 2],
    ["On a displacement-time graph, the independent variable (time) is plotted along the:", ["\\(y\\)-axis", "\\(x\\)-axis", "both axes", "neither axis"], 1],
    ["On a displacement-time graph, the slope of the line represents the object's:", ["acceleration", "velocity", "distance", "time"], 1],
    ["For uniform motion, the displacement-time graph is:", ["a parabola", "a straight line with non-zero slope", "a horizontal line", "always through the origin"], 1],
    ["A positive slope on a displacement-time graph indicates that the object is:", ["moving in the positive direction", "at rest", "moving in the negative direction", "accelerating uniformly"], 0],
    ["A negative slope on a displacement-time graph indicates that the object is:", ["speeding up", "moving in the negative direction (returning towards the origin)", "at rest", "undergoing undefined motion"], 1],
    ["A horizontal line on a displacement-time graph indicates that the object is:", ["moving with constant velocity", "at rest (displacement is not changing)", "accelerating uniformly", "moving with increasing speed"], 1],
    ["If a displacement-time graph is curved and becoming steeper with time, the object's velocity is:", ["constant", "decreasing", "increasing", "zero"], 2],
    ["On a displacement-time graph, which axis carries the dependent quantity?", ["the \\(x\\)-axis (time)", "the \\(y\\)-axis (displacement)", "neither", "both equally"], 1],
    ["On a distance-time graph, two straight segments \\(AB\\) and \\(CD\\) both have positive slope, but \\(AB\\) is steeper than \\(CD\\). This means:", ["the speed during \\(AB\\) is greater than during \\(CD\\)", "the speed during \\(AB\\) is less than during \\(CD\\)", "the speeds are equal", "no conclusion can be drawn"], 0],
    ["The average velocity over a time interval, read from a displacement-time graph, is calculated as:", ["the slope of the tangent at a single point", "\\(\\dfrac{\\text{change in displacement}}{\\text{change in time}}\\) over that interval", "the area under the graph", "the \\(y\\)-intercept"], 1],
    ["A moving object has displacement 0 m, 2 m, 4 m, 4 m, 4 m at times 0, 2, 4, 6, 8 seconds respectively. The average velocity between \\(t=4\\) s and \\(t=8\\) s is:", ["0 m/s", "1 m/s", "2 m/s", "4 m/s"], 0],
    ["Using the data of the previous question, the average velocity for the first 4 seconds is:", ["0.5 m/s", "1 m/s", "2 m/s", "4 m/s"], 1],
    ["The instantaneous velocity at a point on a displacement-time graph is given by:", ["the average slope of the whole graph", "the slope of the tangent to the curve at that point", "the \\(y\\)-intercept", "the area under the curve up to that point"], 1],
    ["On a velocity-time graph, the slope of the line represents:", ["displacement", "distance", "acceleration", "time"], 2],
    ["The area between a velocity-time graph and the time axis, over an interval, represents:", ["acceleration", "the displacement of the particle in that interval", "the average speed only", "jerk"], 1],
    ["If a velocity-time graph is a horizontal line, the acceleration is:", ["increasing", "zero", "negative", "undefined"], 1],
    ["A velocity-time graph with a positive, non-zero, constant slope represents:", ["uniform velocity", "uniform (positive) acceleration", "uniform deceleration", "zero acceleration"], 1],
    ["A velocity-time graph sloping downward (negative slope) represents:", ["increasing positive acceleration", "negative acceleration (retardation)", "constant velocity", "zero velocity throughout"], 1],
    ["For two points on a velocity-time graph, with velocities \\(v_1\\) at time \\(t_1\\) and \\(v_2\\) at time \\(t_2\\), the acceleration equals:", ["\\(\\dfrac{v_2-v_1}{t_2-t_1}\\)", "\\(\\dfrac{v_2+v_1}{t_2+t_1}\\)", "\\(v_2t_2-v_1t_1\\)", "\\(\\dfrac{t_2-t_1}{v_2-v_1}\\)"], 0],
    ["A particle's velocity is recorded as \\(v=2\\) m/s at \\(t=0\\) and \\(v=8\\) m/s at \\(t=2\\) s. Its acceleration over this interval is:", ["2 m/s²", "3 m/s²", "4 m/s²", "6 m/s²"], 1],
    ["An athlete accelerates uniformly from rest to 9 m/s in 4 s. His acceleration is:", ["2 m/s²", "2.25 m/s²", "2.5 m/s²", "3 m/s²"], 1],
    ["The velocity of 9 m/s in the previous question is then maintained for a further 8 s. The total displacement of the athlete over the 12 s is:", ["72 m", "90 m", "108 m", "36 m"], 1],
    ["A cyclist accelerates uniformly from rest to 8 m/s in 20 s. His acceleration is:", ["0.2 m/s²", "0.4 m/s²", "0.8 m/s²", "1.6 m/s²"], 1],
    ["The cyclist above then travels at a constant 8 m/s for 40 s. The displacement covered in this phase is:", ["160 m", "240 m", "320 m", "400 m"], 2],
    ["The cyclist then decelerates uniformly from 8 m/s to rest in 15 s. His deceleration is approximately:", ["0.4 m/s²", "0.53 m/s²", "0.6 m/s²", "8 m/s²"], 1],
    ["On a velocity-time graph, if the graph lies below the time axis, the displacement in that interval is:", ["positive", "negative (in the opposite direction)", "always zero", "undefined"], 1],
    ["A particle moves with the velocity given in the table below.<br><table><tr><th>\\(t\\) (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><th>\\(v\\) (m/s)</th><td>2</td><td>5</td><td>8</td><td>8</td><td>8</td><td>4</td><td>0</td></tr></table>The acceleration between \\(t=0\\) s and \\(t=2\\) s is:", ["2 m/s²", "3 m/s²", "4 m/s²", "6 m/s²"], 1],
    ["Using the same table as the previous question (\\(t=0\\) to \\(6\\) s, \\(v=2,5,8,8,8,4,0\\) m/s), the retardation (deceleration) of the particle between \\(t=4\\) s and \\(t=6\\) s is:", ["2 m/s²", "3 m/s²", "4 m/s²", "8 m/s²"], 2],
    ["A boy is standing beside a railway track. A train travelling at 22 m/s takes 5 s to pass him. The length of the train is:", ["27 m", "110 m", "90 m", "22 m"], 1],
    ["Which of the following statements about a velocity-time graph is FALSE?", ["its slope gives the acceleration", "the area under it gives the displacement", "a horizontal line means constant velocity", "a horizontal line always means zero velocity"], 3],
    ["If a velocity-time graph shows a constant negative slope throughout the motion, the motion is:", ["uniformly accelerated in the positive direction", "uniformly decelerated (uniform negative acceleration)", "a body permanently at rest", "oscillatory motion"], 1],
    ["If \\(S(t)\\) is the displacement of a particle at time \\(t\\), its velocity is given by:", ["\\(v=\\displaystyle\\int S\\,dt\\)", "\\(v=\\dfrac{dS}{dt}\\)", "\\(v=S\\cdot t\\)", "\\(v=\\dfrac{d^2S}{dt^2}\\)"], 1],
    ["Acceleration is related to displacement \\(S(t)\\) by:", ["\\(a=\\dfrac{dS}{dt}\\)", "\\(a=\\dfrac{d^2S}{dt^2}\\)", "\\(a=\\displaystyle\\int S\\,dt\\)", "\\(a=S^2\\)"], 1],
    ["If \\(S(t)=t^2+2\\cos t\\), then the velocity \\(v(t)\\) is:", ["\\(2t-2\\sin t\\)", "\\(2t+2\\sin t\\)", "\\(t^2-2\\sin t\\)", "\\(2t-2\\cos t\\)"], 0],
    ["If \\(v(t)=2t+2\\cos t\\), the acceleration \\(a(t)\\) is:", ["\\(2-2\\sin t\\)", "\\(2+2\\sin t\\)", "\\(2\\sin t\\)", "\\(2t-2\\sin t\\)"], 0],
    ["If the position function is \\(S(t)=\\sqrt t+\\ln(t+1)\\), the velocity function \\(v(t)\\) is:", ["\\(\\dfrac1{2\\sqrt t}+\\dfrac1{t+1}\\)", "\\(\\dfrac1{2\\sqrt t}-\\dfrac1{t+1}\\)", "\\(\\sqrt t+\\dfrac1{t+1}\\)", "\\(\\dfrac1{2\\sqrt t}+t+1\\)"], 0],
    ["If \\(v(t)=3t^2+4\\) and \\(S(0)=0\\), then the displacement function \\(S(t)\\) is:", ["\\(t^3+4t\\)", "\\(t^3+4t+1\\)", "\\(\\dfrac32t^3+4t\\)", "\\(t^2+4t\\)"], 0],
    ["If the acceleration \\(a(t)=6t\\) and \\(v(0)=0\\), then the velocity function \\(v(t)\\) is:", ["\\(3t^2\\)", "\\(6t^2\\)", "\\(3t\\)", "\\(t^3\\)"], 0],
    ["If \\(a(t)=24t+\\cos t\\) and \\(v(0)=0\\), then \\(v(t)\\) is:", ["\\(12t^2+\\sin t\\)", "\\(12t^2-\\sin t\\)", "\\(24t^2+\\sin t\\)", "\\(12t^2+\\cos t\\)"], 0],
    ["Continuing the previous question, if \\(S\\left(\\dfrac{\\pi}2\\right)=\\dfrac{\\pi^3}2\\), then \\(S(t)\\) is:", ["\\(4t^3-\\cos t\\)", "\\(4t^3+\\cos t\\)", "\\(4t^3-\\cos t+1\\)", "\\(12t^3-\\cos t\\)"], 0],
    ["For \\(S(t)=\\sqrt t+\\ln(t+1)\\), the velocity at \\(t=1\\) is:", ["1 m/s", "0.5 m/s", "1.5 m/s", "2 m/s"], 0],
    ["For the same function as above, the velocity at \\(t=4\\) is:", ["\\(\\dfrac9{20}\\) m/s", "\\(\\dfrac14\\) m/s", "\\(\\dfrac15\\) m/s", "\\(\\dfrac12\\) m/s"], 0],
    ["If displacement \\(S(t)=4t^3-\\cos t\\), then the acceleration \\(a(t)\\) is:", ["\\(24t+\\cos t\\)", "\\(24t-\\cos t\\)", "\\(12t+\\sin t\\)", "\\(24t^2+\\cos t\\)"], 0],
    ["A particle has zero velocity at \\(t=0\\) and a constant acceleration \\(g\\). Its velocity function is:", ["\\(v=gt\\)", "\\(v=g\\)", "\\(v=\\dfrac12gt^2\\)", "\\(v=gt^2\\)"], 0],
    ["For motion with constant acceleration \\(a\\), initial velocity \\(u\\), and time \\(t\\), the final velocity \\(v\\) is given by:", ["\\(v=u+at\\)", "\\(v=u-at\\)", "\\(v=at\\)", "\\(v=u+\\dfrac12at^2\\)"], 0],
    ["The displacement \\(S\\) of a particle moving with constant acceleration is given by:", ["\\(S=ut+\\dfrac12at^2\\)", "\\(S=ut-at\\)", "\\(S=vt\\)", "\\(S=\\dfrac12vt^2\\)"], 0],
    ["The equation relating \\(v,u,a\\), and \\(S\\) (without time) is:", ["\\(v^2=u^2+2aS\\)", "\\(v=u^2+2aS\\)", "\\(v^2=u+2aS\\)", "\\(v^2=u^2+aS\\)"], 0],
    ["A stone is projected vertically upward with velocity 10 m/s. Taking \\(g=9.8\\) m/s² downward, the velocity function is:", ["\\(v=-gt+10\\)", "\\(v=gt+10\\)", "\\(v=-gt-10\\)", "\\(v=10t-g\\)"], 0],
    ["Using the previous question, the displacement (height) function of the stone is:", ["\\(S=-\\dfrac12gt^2+10t\\)", "\\(S=\\dfrac12gt^2+10t\\)", "\\(S=-gt^2+10t\\)", "\\(S=10t^2-\\dfrac12g\\)"], 0],
    ["For the stone above, the time taken to reach maximum height (where \\(v=0\\)) is approximately:", ["1.02 s", "2.04 s", "0.51 s", "10 s"], 0],
    ["The maximum height attained by the stone above is approximately:", ["5.10 m", "10.2 m", "9.8 m", "1.02 m"], 0],
    ["A ball is thrown downward from a tower of height 20 m (with \\(g=9.8\\) m/s²). Using \\(S=\\dfrac12gt^2\\), the time taken to reach the ground is approximately:", ["2.02 s", "1.43 s", "4.08 s", "0.51 s"], 0],
    ["Using the previous question, the velocity with which the ball hits the ground is approximately:", ["19.8 m/s", "9.8 m/s", "20 m/s", "4.9 m/s"], 0],
    ["A particle \\(P\\) moves along the \\(x\\)-axis with acceleration \\(a=(4t-8)\\) m/s² and initial velocity \\(v(0)=6\\) m/s. Its velocity function is:", ["\\(2t^2-8t+6\\)", "\\(2t^2-8t\\)", "\\(4t^2-8t+6\\)", "\\(2t^2+8t+6\\)"], 0],
    ["Using the previous question, the times at which \\(P\\) is instantaneously at rest are:", ["\\(t=1,3\\)", "\\(t=2,3\\)", "\\(t=1,4\\)", "\\(t=0,4\\)"], 0],
    ["A car starts from rest with acceleration \\(a=4-\\dfrac12t\\) for \\(0\\le t\\le8\\). Its velocity function is:", ["\\(4t-\\dfrac{t^2}4\\)", "\\(4t-\\dfrac{t^2}2\\)", "\\(4t+\\dfrac{t^2}4\\)", "\\(2t^2-\\dfrac{t^2}4\\)"], 0],
    ["Using the previous question, the car attains its maximum speed (when \\(a=0\\)) at:", ["\\(t=8\\) s", "\\(t=4\\) s", "\\(t=2\\) s", "\\(t=16\\) s"], 0],
    ["A particle moves with constant acceleration \\(a\\), initial velocity \\(v_i\\), and after time \\(t\\) attains velocity \\(v_f\\) while covering displacement \\(S\\). The correct relation is:", ["\\(2aS=v_f^2-v_i^2\\)", "\\(2aS=v_f-v_i\\)", "\\(aS=v_f^2-v_i^2\\)", "\\(2aS=v_f^2+v_i^2\\)"], 0],
    ["A car travels 180 km in 3 hours. Its average speed for the journey is:", ["40 km/h", "50 km/h", "60 km/h", "90 km/h"], 2],
    ["A cyclist travels 4.0 km along a main road in 10.0 minutes, then 1.0 km along a side street in 5.0 minutes. The correct average speed (in km/min) for the whole journey is:", ["\\(\\dfrac{5.0}{15.0}=0.33\\) km/min", "\\(\\dfrac{15.0}{5.0}=3.0\\) km/min", "\\(4.0+1.0=5.0\\) km/min", "\\(4.0\\times1.0=4.0\\) km/min"], 0],
    ["For a projectile under gravity alone (no air resistance), the acceleration vector is:", ["directed horizontally", "directed vertically downward, and constant in magnitude", "zero throughout the motion", "increasing with height"], 1],
    ["A vector valued function \\(\\mathbf r(t)\\) is a function whose domain is a subset of the real numbers and whose range is:", ["a set of real numbers", "a set of vectors", "a set of scalars", "a matrix"], 1],
    ["The general three-dimensional vector valued function is written as:", ["\\(\\mathbf r(t)=x(t)+y(t)+z(t)\\)", "\\(\\mathbf r(t)=x(t)\\hat i+y(t)\\hat j+z(t)\\hat k\\)", "\\(\\mathbf r(t)=x\\hat i\\cdot y\\hat j\\cdot z\\hat k\\)", "\\(\\mathbf r(t)=x(t)y(t)z(t)\\)"], 1],
    ["The domain of a vector-valued function \\(\\mathbf r(t)=x(t)\\hat i+y(t)\\hat j+z(t)\\hat k\\) is:", ["the union of the domains of \\(x(t),y(t),z(t)\\)", "the intersection of the domains of \\(x(t),y(t),z(t)\\)", "always all real numbers", "always empty"], 1],
    ["Find the domain of \\(\\mathbf r(t)=\\ln|t-1|\\,\\hat i+e^t\\,\\hat j+\\sqrt t\\,\\hat k\\).", ["\\([0,1)\\cup(1,\\infty)\\)", "\\((-\\infty,1)\\cup(1,\\infty)\\)", "\\([0,\\infty)\\)", "\\((0,1)\\)"], 0],
    ["A function that maps a vector to a single real number is called a:", ["vector valued function", "scalar valued function", "matrix function", "domain function"], 1],
    ["The magnitude of the vector valued function \\(\\mathbf r(t)=3\\hat i+t\\hat j+(\\sin t)\\hat k\\) is:", ["\\(\\sqrt{9+t^2+\\sin^2t}\\)", "\\(9+t^2+\\sin^2t\\)", "\\(3+t+\\sin t\\)", "\\(\\sqrt{3+t+\\sin t}\\)"], 0],
    ["The derivative of the vector valued function \\(\\mathbf f(t)=f_1(t)\\hat i+f_2(t)\\hat j+f_3(t)\\hat k\\) is obtained by:", ["differentiating only \\(f_1(t)\\)", "differentiating each component function separately", "multiplying all components together and differentiating", "integrating each component"], 1],
    ["Find the derivative of \\(\\mathbf f(t)=3t^2\\hat i+8t\\hat j-\\dfrac1{t^3}\\hat k\\).", ["\\(6t\\hat i+8\\hat j+\\dfrac3{t^4}\\hat k\\)", "\\(6t\\hat i+8\\hat j-\\dfrac3{t^4}\\hat k\\)", "\\(3t\\hat i+8\\hat j+\\dfrac3{t^4}\\hat k\\)", "\\(6t^2\\hat i+8t\\hat j+\\dfrac3{t^4}\\hat k\\)"], 0],
    ["If \\(\\mathbf r(t)\\) represents the position of a particle, its first derivative \\(\\mathbf r'(t)\\) represents:", ["acceleration", "velocity", "displacement", "speed only"], 1],
    ["The second derivative \\(\\mathbf r''(t)\\) of a position vector function represents:", ["velocity", "acceleration", "jerk only", "displacement"], 1],
    ["Find the velocity of \\(\\mathbf f(t)=2t^2\\hat i+3t^4\\hat j-t^3\\hat k\\) at \\(t=1\\).", ["\\(4\\hat i+12\\hat j-3\\hat k\\)", "\\(4\\hat i+12\\hat j+3\\hat k\\)", "\\(2\\hat i+12\\hat j-3\\hat k\\)", "\\(4\\hat i+4\\hat j-3\\hat k\\)"], 0],
    ["Using the previous question, the acceleration of the function at \\(t=1\\) is:", ["\\(4\\hat i+36\\hat j-6\\hat k\\)", "\\(4\\hat i+12\\hat j-6\\hat k\\)", "\\(4\\hat i+36\\hat j+6\\hat k\\)", "\\(8\\hat i+36\\hat j-6\\hat k\\)"], 0],
    ["If \\(\\mathbf r(t)=(\\cos t)\\hat i+(\\sin t)\\hat j+3t\\hat k\\) represents the position of a particle, the motion projected onto the \\(x\\)-\\(y\\) plane is:", ["linear", "circular", "exponential", "the particle is at rest"], 1],
    ["Which of the following is TRUE regarding vector-valued functions used in kinematics?", ["they can only describe motion along a straight line", "they can be used to calculate the velocity, acceleration, arc length and curvature of a trajectory", "they cannot be differentiated", "their range is always a scalar"], 1],
    ["Which of the following quantities is a vector?", ["charge", "mass", "momentum", "time"], 2],
    ["Which of the following is a scalar quantity?", ["displacement", "weight", "force", "work"], 3],
    ["Which of the following can be used to determine the magnitude of velocity?", ["area under an acceleration-time graph", "area under a velocity-time graph", "gradient of an acceleration-time graph", "gradient of a velocity-time graph"], 0],
    ["The winner of a 400 metre race must have the greatest:", ["acceleration", "average speed", "instantaneous speed", "maximum speed"], 1],
    ["A car travels 100 km. The journey takes two hours. The highest speed of the car is 80 km/h, and the lowest speed 40 km/h. What is the average speed for the journey?", ["40 km/h", "50 km/h", "60 km/h", "120 km/h"], 1],
    ["A car travels 6.0 km along a main road in 6.0 minutes. It then travels 2 km along a minor road in 6.0 minutes. Which calculation of average speed for the whole journey is correct?", ["\\(\\dfrac{8.0}{12.0}=0.67\\) km/min", "\\(\\dfrac{12.0}{8.0}=1.5\\) km/min", "\\(8.0+12.0=20\\) km/min", "\\(8.0\\times12.0=96\\) km/min"], 0],
    ["Which person is experiencing an acceleration?", ["a driver of a car that is braking to stop at a traffic light", "a passenger in a train that is stationary at a railway station", "a shopper in a large store ascending an escalator at a uniform speed", "a skydiver falling at a constant speed towards the Earth"], 0],
    ["A child is standing on the platform of a station. A train travelling at 30 m/s takes 3.0 s to pass the child. What is the length of the train?", ["10 m", "27 m", "30 m", "90 m"], 3],
    ["A heavy object is released near the surface of the earth and falls freely (air resistance is ignored). Which statement about the acceleration of the object due to gravity is correct?", ["the acceleration depends on the mass of the object", "the acceleration depends on the volume of the object", "the acceleration is constant", "the acceleration is initially zero and increases as the object falls"], 2],
    ["If \\(\\mathbf r(t)=(t+1)\\hat i+(t^2-1)\\hat j+5t\\hat k\\) is the position of a particle, the value of \\(\\mathbf r(2)\\) is:", ["\\(3\\hat i+3\\hat j+10\\hat k\\)", "\\(3\\hat i+4\\hat j+10\\hat k\\)", "\\(2\\hat i+3\\hat j+10\\hat k\\)", "\\(3\\hat i+3\\hat j+5\\hat k\\)"], 0]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Phase</th><th>Description</th></tr><tr><td>1</td><td>Accelerates uniformly from rest to 20 m/s in 5 s</td></tr><tr><td>2</td><td>Travels at constant 20 m/s for 10 s</td></tr><tr><td>3</td><td>Decelerates uniformly to rest in 4 s</td></tr></table>",
          questions: [
            ["The acceleration during Phase 1 is:", ["4 m/s²", "5 m/s²", "2 m/s²", "20 m/s²"], 0],
            ["The displacement covered during Phase 1 is:", ["50 m", "100 m", "20 m", "40 m"], 0],
            ["The displacement covered during Phase 2 is:", ["200 m", "100 m", "20 m", "300 m"], 0],
            ["The deceleration during Phase 3, and the total displacement over all three phases, are respectively:", ["5 m/s² and 290 m", "4 m/s² and 250 m", "5 m/s² and 250 m", "4 m/s² and 290 m"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Initial upward velocity \\(u\\)</td><td>20 m/s</td></tr><tr><td>\\(g\\)</td><td>9.8 m/s² (downward)</td></tr></table>A ball is thrown vertically upward with the given initial velocity.",
          questions: [
            ["The velocity function (taking upward as positive) is:", ["\\(v=20-9.8t\\)", "\\(v=20+9.8t\\)", "\\(v=9.8t-20\\)", "\\(v=-9.8t\\)"], 0],
            ["The time taken to reach maximum height is approximately:", ["2.04 s", "1.02 s", "4.08 s", "0.51 s"], 0],
            ["The maximum height reached is approximately:", ["20.4 m", "10.2 m", "40.8 m", "9.8 m"], 0],
            ["By symmetry of projectile motion, the total time for the ball to return to its starting point is approximately:", ["4.08 s", "2.04 s", "8.16 s", "1.02 s"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Position vector</th><th>Value</th></tr><tr><td>\\(\\mathbf r(t)\\)</td><td>\\(t^2\\hat i+(2t+1)\\hat j-4t\\hat k\\)</td></tr></table>",
          questions: [
            ["The velocity vector \\(\\mathbf r'(t)\\) is:", ["\\(2t\\hat i+2\\hat j-4\\hat k\\)", "\\(2t\\hat i+2\\hat j+4\\hat k\\)", "\\(t\\hat i+2\\hat j-4\\hat k\\)", "\\(2t^2\\hat i+2\\hat j-4\\hat k\\)"], 0],
            ["The acceleration vector \\(\\mathbf r''(t)\\) is:", ["\\(2\\hat i\\)", "\\(2\\hat i+2\\hat j\\)", "\\(0\\)", "\\(2t\\hat i\\)"], 0],
            ["The velocity at \\(t=3\\) is:", ["\\(6\\hat i+2\\hat j-4\\hat k\\)", "\\(9\\hat i+2\\hat j-4\\hat k\\)", "\\(6\\hat i+6\\hat j-4\\hat k\\)", "\\(6\\hat i+2\\hat j-12\\hat k\\)"], 0],
            ["The magnitude of the acceleration vector is:", ["2", "4", "\\(2\\sqrt2\\)", "0"], 0]
          ]
        }
      ],
      short: [],
      long: []
    }
  ]
};
