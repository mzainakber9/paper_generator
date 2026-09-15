/*
  CLASS 12 -- MATH -- MCQs -- CHAPTERS 1, 2 & 3 (100 each)
  -----------------------------------------------------------
  Chapter 1: Functions and Graphs.
  Chapter 2: Limit, Continuity and Derivative.
  Chapter 3: Integration.
  Source: a 300-question MCQ bank (with answer key) covering Grade 12
  Chapters 1-3, provided as a PDF. Every computational answer --
  inverse formulas, vertex/axis-of-symmetry, x-intercepts, domain
  restrictions, log identities, limit laws, differentiation rules
  (power/product/quotient/chain, trig/inverse-trig/exponential/log),
  implicit/parametric differentiation, differentials, second
  derivative test, optimization, standard integrals, substitution,
  integration by parts, partial fractions, FTC, area/volume by
  integration -- was independently re-derived (not just copied from
  the source key) before transcription.

  TWO genuine errors were found in the source and corrected here:
    - Chapter 2, Q10: source read "If f(t) = 2t^3 is absolute minimum
      at:" -- incomplete/malformed (2t^3 has no absolute minimum over
      all reals; confirmed broken on the rasterized source page, not
      a text-extraction artifact). Rewritten as a well-posed
      critical-point question, keeping the source's answer (t = 0).
    - Chapter 3, Q93/Q94: the consumer/producer surplus formulas used
      undefined, inconsistent bounds (p, b, c, a with no
      definitions), also confirmed broken on the source page.
      Rewritten with standard notation (equilibrium price p0,
      equilibrium quantity Q0), keeping the source's intended
      correct option.
  All other 298 answers checked out correct against independent
  recomputation.

  Each chapter also gets 3 original scenario (stimulus) sets not in
  the source (9 total), built and verified from the same material.
  Every question validated to have exactly 4 distinct options before
  shipping.

  MATH FORMATTING: wrap inline math in \\( \\) so KaTeX renders it.
*/
var CLASS12_MATH_MCQ_CH1_2_3 = {
  chapters: [
    {
      id: 1,
      name: "Functions and Graphs",
      mcq: [
    ["Which of the following is an example of an exponential growth function?", ["\\(f(x)=3x+4\\)", "\\(f(x)=3^x\\times5\\)", "\\(f(x)=x^3\\)", "\\(f(x)=x^2\\)"], 1],
    ["The exponential decay function is expressed by:", ["\\(f(x)=a\\cdot b^x;\\ 0<b<1\\)", "\\(f(x)=a\\cdot b^x;\\ b>1\\)", "\\(f(x)=a\\cdot b^x;\\ 0<a<1\\)", "\\(f(x)=a\\cdot b^x;\\ a>1\\)"], 0],
    ["The logarithmic function \\(f(x)=\\log_b x\\) is defined for:", ["all real numbers", "\\(x<0\\)", "\\(x>0\\)", "\\(x\\ge0\\)"], 2],
    ["What is the value of \\(\\log_5 125\\)?", ["25", "5", "4", "3"], 3],
    ["A function \\(f:A\\to B\\) is said to be onto if:", ["Every element of set \\(A\\) has a unique image in set \\(B\\).", "Every element in set \\(B\\) has a preimage in set \\(A\\).", "Some elements of set \\(B\\) have no preimage in set \\(A\\).", "\\(f\\) is both one-to-one and onto."], 1],
    ["The function \\(f(x)=x+1\\), where \\(f:\\{1,2,3\\}\\to\\{2,3,4\\}\\), is:", ["one-to-one but not onto", "onto but not one-to-one", "both one-to-one and onto", "neither one-to-one nor onto"], 2],
    ["The function \\(f:\\mathbb{R}\\to[0,\\infty)\\) defined by \\(f(x)=x^2+1\\), is:", ["onto but not one-to-one", "one-to-one but not onto", "neither one-to-one nor onto", "both one-to-one and onto"], 2],
    ["A function \\(f:A\\to B\\) has an inverse if and only if:", ["\\(f\\) is one-to-one", "\\(f\\) is onto", "\\(f\\) is both one-to-one and onto", "\\(f\\) is neither one-to-one nor onto"], 2],
    ["The inverse function of \\(f(x)=x^3\\), is:", ["\\(f^{-1}(x)=x^{-3}\\)", "\\(f^{-1}(x)=\\sqrt{x-3}\\)", "\\(f^{-1}(x)=x^3\\)", "\\(f^{-1}(x)=\\sqrt[3]{x}\\)"], 3],
    ["The function \\(f(x)=\\sin x\\), where \\(f:\\left[-\\tfrac{\\pi}2,\\tfrac{\\pi}2\\right]\\to[-1,1]\\), is:", ["one-to-one but not onto", "onto but not one-to-one", "both one-to-one and onto", "neither one-to-one nor onto"], 2],
    ["The inverse function of \\(f(x)=\\dfrac1x;\\ x\\ne0\\), is:", ["\\(f^{-1}(x)=1\\)", "\\(f^{-1}(x)=-x\\)", "\\(f^{-1}(x)=x\\)", "\\(f^{-1}(x)=\\dfrac1x\\)"], 3],
    ["Scaling refers to:", ["increasing the size of an object.", "decreasing the size of an object.", "maintaining the properties while resizing an object.", "changing the shape of an object."], 2],
    ["Which of the following statements is true for uniform scaling?", ["Both width and height change proportionally.", "Only the width changes.", "Only the height changes.", "Width and height remain unchanged."], 0],
    ["What is the effect on the graph of \\(f(x)\\) when it is replaced by \\(f(x+2)\\)?", ["It shifts 2 units to the right.", "It shifts 2 units to the left.", "It shifts 2 units up.", "It shifts 2 units down."], 1],
    ["The domain of \\(y=\\sin^{-1}(x)\\), is:", ["\\([0,\\infty)\\)", "\\((-\\infty,\\infty)\\)", "\\([-1,1]\\)", "\\([0,1]\\)"], 2],
    ["The domain of \\(f(x)=\\dfrac1{x-5}\\) is:", ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{5\\}\\)", "\\(\\mathbb{R}-\\{0\\}\\)", "\\([5,\\infty)\\)"], 1],
    ["The domain of \\(f(x)=\\sqrt{x-7}\\) is:", ["\\(\\mathbb{R}\\)", "\\((-\\infty,7]\\)", "\\([7,\\infty)\\)", "\\(\\mathbb{R}-\\{7\\}\\)"], 2],
    ["The range of \\(f(x)=x^2+3\\) is:", ["\\(\\mathbb{R}\\)", "\\([3,\\infty)\\)", "\\((3,\\infty)\\)", "\\((-\\infty,3]\\)"], 1],
    ["If \\(f(x)=3x-2\\) and \\(\\mathrm{Dom}\\,f=\\{1,2,3\\}\\), then \\(\\mathrm{Rang}\\,f\\) is:", ["\\(\\{1,4,7\\}\\)", "\\(\\{1,2,3\\}\\)", "\\(\\{3,6,9\\}\\)", "\\(\\{-1,0,1\\}\\)"], 0],
    ["For a function \\(f:A\\to B\\), the set \\(B\\) is called the:", ["domain", "range", "codomain", "pre-image"], 2],
    ["The domain of \\(f(x)=\\dfrac{x}{x^2-9}\\) is:", ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{3\\}\\)", "\\(\\mathbb{R}-\\{-3\\}\\)", "\\(\\mathbb{R}-\\{3,-3\\}\\)"], 3],
    ["If \\(f(x)=\\sqrt{9-x^2}\\), the domain of \\(f\\) is:", ["\\([-3,3]\\)", "\\((-3,3)\\)", "\\([0,3]\\)", "\\(\\mathbb{R}\\)"], 0],
    ["The range of a function is always a subset of the:", ["domain", "codomain", "pre-image set", "set of natural numbers"], 1],
    ["The domain of \\(f(x)=\\dfrac{x+4}{x^2-16}\\) is:", ["\\(\\mathbb{R}-\\{4\\}\\)", "\\(\\mathbb{R}-\\{-4\\}\\)", "\\(\\mathbb{R}-\\{4,-4\\}\\)", "\\(\\mathbb{R}\\)"], 2],
    ["The range of \\(f(x)=|x|+2\\) is:", ["\\(\\mathbb{R}\\)", "\\([0,\\infty)\\)", "\\([2,\\infty)\\)", "\\((2,\\infty)\\)"], 2],
    ["A function \\(f:A\\to B\\) is called an into function if:", ["\\(\\mathrm{Rang}(f)=B\\)", "\\(\\mathrm{Rang}(f)\\ne B\\)", "\\(f\\) is one-to-one", "domain = codomain"], 1],
    ["Which of the following functions is an onto function from \\(\\mathbb{R}\\) to \\(\\mathbb{R}\\)?", ["\\(f(x)=x^2\\)", "\\(f(x)=e^x\\)", "\\(f(x)=x^3\\)", "\\(f(x)=\\sin x\\)"], 2],
    ["The function \\(f(x)=x^2\\) defined on \\(f:\\mathbb{R}\\to\\mathbb{R}\\) is:", ["one-to-one", "onto", "into", "bijective"], 2],
    ["A function which is both into and one-one is called:", ["surjective", "injective", "bijective", "a constant function"], 1],
    ["A function which is both onto and one-one is called:", ["injective", "bijective", "into", "identity function"], 1],
    ["If \\(f=\\{(1,2),(2,3),(3,4)\\}\\) is defined from \\(A=\\{1,2,3\\}\\) to \\(B=\\{2,3,4\\}\\), then \\(f\\) is:", ["one-one and onto", "one-one but not onto", "onto but not one-one", "neither one-one nor onto"], 0],
    ["The constant function \\(f(x)=c\\) is always an example of:", ["a one-one function", "an onto function (for codomain \\(\\mathbb{R}\\))", "an into function (for codomain \\(\\mathbb{R}\\))", "a bijective function"], 2],
    ["Which of the following is an onto function \\(h:\\mathbb{R}\\to[0,\\infty)\\)?", ["\\(h(x)=e^x\\)", "\\(h(x)=x^2\\)", "\\(h(x)=x^3\\)", "\\(h(x)=\\sin x\\)"], 1],
    ["A function \\(f:A\\to B\\) is one-to-one if:", ["\\(f(x_1)=f(x_2)\\Rightarrow x_1=x_2\\)", "\\(f(x_1)=f(x_2)\\) always", "every element of \\(B\\) has a pre-image", "range = codomain"], 0],
    ["The function \\(f(x)=\\sin x\\) defined on \\(f:\\mathbb{R}\\to\\mathbb{R}\\) is:", ["one-one", "onto", "into", "bijective"], 2],
    ["If \\(f:A\\to B\\) is a bijective function, then:", ["\\(f^{-1}\\) does not exist", "\\(f^{-1}\\) exists and is a function from \\(B\\) to \\(A\\)", "\\(f\\) is not one-one", "\\(f\\) is not onto"], 1],
    ["Given \\(f=\\{(a,2),(b,1),(c,3)\\}\\) from \\(A=\\{a,b,c\\}\\) to \\(B=\\{1,2,3\\}\\), \\(f\\) is:", ["into", "onto but not one-one", "bijective", "neither one-one nor onto"], 2],
    ["If \\(f(x)=5x+2\\), then \\(f^{-1}(x)\\) is:", ["\\(\\dfrac{x-2}5\\)", "\\(\\dfrac{x+2}5\\)", "\\(5x-2\\)", "\\(\\dfrac{x-5}2\\)"], 0],
    ["The inverse of \\(f(x)=\\dfrac{x}{x-1};\\ x\\ne1\\), is:", ["\\(\\dfrac{x}{x+1}\\)", "\\(\\dfrac{x}{x-1}\\)", "\\(\\dfrac{x-1}x\\)", "\\(\\dfrac{x+1}x\\)"], 1],
    ["If \\(f\\) and \\(g\\) are inverse functions of each other, then \\(f(g(x))\\) equals:", ["0", "1", "\\(x\\)", "\\(g(x)\\)"], 2],
    ["The inverse of \\(f(x)=\\dfrac{x-3}2\\) is:", ["\\(2x+3\\)", "\\(2x-3\\)", "\\(\\dfrac{x+3}2\\)", "\\(\\dfrac{x-3}2\\)"], 0],
    ["If the point \\((3,5)\\) lies on the graph of \\(f(x)\\), then which point lies on the graph of \\(f^{-1}(x)\\)?", ["\\((3,5)\\)", "\\((5,3)\\)", "\\((-3,-5)\\)", "\\((-3,5)\\)"], 1],
    ["The graphs of \\(f(x)\\) and \\(f^{-1}(x)\\) are always symmetric about the line:", ["\\(x=0\\)", "\\(y=0\\)", "\\(y=x\\)", "\\(y=-x\\)"], 2],
    ["A function has an inverse if and only if it is:", ["onto only", "one-to-one only", "both one-to-one and onto", "neither one-to-one nor onto"], 2],
    ["The domain of \\(f^{-1}\\) is equal to the:", ["domain of \\(f\\)", "range of \\(f\\)", "codomain of \\(f\\)", "none of these"], 1],
    ["If \\(f(x)=2^x\\), then \\(f^{-1}(x)\\) is:", ["\\(\\log_2 x\\)", "\\(\\dfrac{x}2\\)", "\\(\\dfrac{2}x\\)", "\\(x^2\\)"], 0],
    ["The expression \\(f(f^{-1}(x))\\) always equals:", ["0", "1", "\\(x\\)", "\\(f(x)\\)"], 2],
    ["The graph of a linear function \\(y=ax+b\\ (a\\ne0)\\) is:", ["a parabola", "a straight line", "a hyperbola", "a circle"], 1],
    ["The domain and range of any linear function \\(f(x)=ax+b\\ (a\\ne0)\\) is:", ["\\([0,\\infty)\\)", "\\(\\mathbb{R}\\)", "\\((-\\infty,0]\\)", "\\([a,b]\\)"], 1],
    ["The graph of \\(y=x^2\\) is:", ["a straight line", "a V-shape", "a parabola opening upward", "a parabola opening downward"], 2],
    ["The domain of the square root function \\(f(x)=\\sqrt{x}\\) is:", ["\\(\\mathbb{R}\\)", "\\([0,\\infty)\\)", "\\((-\\infty,0]\\)", "\\(\\mathbb{R}-\\{0\\}\\)"], 1],
    ["The graph of \\(y=x^n\\) for an even positive integer \\(n\\) always passes through:", ["\\((0,0)\\) only", "\\((1,1)\\) only", "both \\((0,0)\\) and \\((1,1)\\)", "\\((-1,-1)\\)"], 2],
    ["Which of the following is a quadratic function?", ["\\(f(x)=2x+3\\)", "\\(f(x)=3x^2-5x+1\\)", "\\(f(x)=\\sqrt{x}\\)", "\\(f(x)=\\dfrac1x\\)"], 1],
    ["The graph of \\(y=x^{-1}\\) (for \\(x\\ne0\\)) is a hyperbola that lies in the:", ["1st and 2nd quadrants", "1st and 3rd quadrants", "2nd and 4th quadrants", "3rd and 4th quadrants"], 1],
    ["For the function \\(y=x^n\\ (n\\ne0)\\), all graphs pass through the point:", ["\\((0,1)\\)", "\\((1,0)\\)", "\\((1,1)\\)", "\\((-1,0)\\)"], 2],
    ["The graph of \\(y=x^3\\) is symmetric about the:", ["y-axis", "origin", "x-axis", "line \\(y=x\\)"], 1],
    ["Which of the following functions has a domain that depends on how the function is formed (i.e. is restricted)?", ["a linear function", "a quadratic function", "a square root function", "a constant function"], 2],
    ["For the quadratic function \\(y=ax^2+bx+c\\), the equation of the axis of symmetry is:", ["\\(x=\\dfrac{b}{2a}\\)", "\\(x=-\\dfrac{b}{2a}\\)", "\\(x=-\\dfrac{c}a\\)", "\\(x=\\dfrac{c}{2a}\\)"], 1],
    ["For \\(y=ax^2+bx+c\\), the parabola opens downward if:", ["\\(a>0\\)", "\\(a<0\\)", "\\(b>0\\)", "\\(c<0\\)"], 1],
    ["The y-intercept of the graph \\(y=ax^2+bx+c\\) is:", ["\\((0,a)\\)", "\\((0,b)\\)", "\\((0,c)\\)", "\\((a,0)\\)"], 2],
    ["The vertex of the parabola \\(y=x^2-6x+8\\) is:", ["\\((3,-1)\\)", "\\((-3,-1)\\)", "\\((3,1)\\)", "\\((6,8)\\)"], 0],
    ["If a parabola crosses the x-axis at \\(x=x_1\\) and \\(x=x_2\\), the x-coordinate of the vertex is:", ["\\(x_1+x_2\\)", "\\(\\dfrac{x_1+x_2}2\\)", "\\(x_1x_2\\)", "\\(\\dfrac{x_1-x_2}2\\)"], 1],
    ["The x-intercepts of \\(y=x^2-5x+6\\) are:", ["2 and 3", "\\(-2\\) and \\(-3\\)", "1 and 6", "\\(-1\\) and \\(-6\\)"], 0],
    ["A parabola with equation \\(y=a(x-p)(x-q),\\ a>0\\), crosses the x-axis at:", ["\\((a,0)\\) and \\((0,0)\\)", "\\((p,0)\\) and \\((q,0)\\)", "\\((0,p)\\) and \\((0,q)\\)", "only \\((0,0)\\)"], 1],
    ["If the graph of a quadratic function has vertex \\((2,-4)\\) and opens upward, then \\(f(2)\\) is:", ["4 (maximum value)", "\\(-4\\) (minimum value)", "0", "2"], 1],
    ["Which of the following parabolas opens upward and is narrower than \\(y=x^2\\)?", ["\\(y=0.5x^2\\)", "\\(y=3x^2\\)", "\\(y=-2x^2\\)", "\\(y=x^2+1\\)"], 1],
    ["The quadratic function \\(y=x^2-4x+4\\) has how many distinct x-intercepts?", ["0", "1 (a repeated root)", "2", "infinitely many"], 1],
    ["The domain of the modulus function \\(f(x)=|x|\\) is:", ["\\([0,\\infty)\\)", "\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{0\\}\\)", "\\((-\\infty,0]\\)"], 1],
    ["The range of \\(f(x)=|x|\\) is:", ["\\(\\mathbb{R}\\)", "\\([0,\\infty)\\)", "\\((-\\infty,0)\\)", "\\(\\mathbb{R}-\\{0\\}\\)"], 1],
    ["The graph of \\(y=|x|\\) has the shape of:", ["a parabola", "a V-shape with vertex at the origin", "a straight line", "a hyperbola"], 1],
    ["If \\(f(x)=3x+4\\) and \\(g(x)=-x+1\\), the x-coordinate of their point of intersection is:", ["\\(-\\dfrac34\\)", "\\(\\dfrac34\\)", "3", "\\(-3\\)"], 0],
    ["The y-intercept of the linear function \\(f(x)=\\dfrac{12-2x}3\\) is:", ["6", "4", "12", "2"], 1],
    ["If \\(f(x)\\) and \\(f^{-1}(x)\\) intersect, the point of intersection (when it exists uniquely) generally lies on the line:", ["\\(x=0\\)", "\\(y=x\\)", "\\(y=0\\)", "\\(y=-x\\)"], 1],
    ["Which of the following is a transcendental function?", ["\\(f(x)=x^2+3x\\)", "\\(f(x)=\\sqrt{x}\\)", "\\(f(x)=\\log_a x\\)", "\\(f(x)=\\dfrac1x\\)"], 2],
    ["A rational function is defined as a function of the form:", ["\\(f(x)=a_nx^n+\\cdots+a_0\\)", "\\(f(x)=\\dfrac{p(x)}{q(x)},\\ q(x)\\ne0\\)", "\\(f(x)=\\sqrt{x}\\)", "\\(f(x)=a^x\\)"], 1],
    ["According to the product rule of logarithms, \\(\\log_a(xy)\\) equals:", ["\\(\\log_a x\\cdot\\log_a y\\)", "\\(\\log_a x+\\log_a y\\)", "\\(\\log_a x-\\log_a y\\)", "\\((\\log_a x)(\\log_a y)\\)"], 1],
    ["According to the quotient rule of logarithms, \\(\\log_a\\left(\\dfrac{x}y\\right)\\) equals:", ["\\(\\log_a x+\\log_a y\\)", "\\(\\log_a x\\cdot\\log_a y\\)", "\\(\\log_a x-\\log_a y\\)", "\\(\\log_a y-\\log_a x\\)"], 2],
    ["The power rule of logarithms states that \\(\\log_a(x^n)\\) equals:", ["\\(n\\cdot\\log_a x\\)", "\\((\\log_a x)^n\\)", "\\(\\log_a x+n\\)", "\\(\\log_a(nx)\\)"], 0],
    ["The value of \\(\\log_2 8\\) is:", ["2", "3", "4", "8"], 1],
    ["The natural logarithm \\(\\ln x\\) has base:", ["10", "2", "\\(e\\)", "1"], 2],
    ["\\(\\log_a 1\\) is always equal to:", ["1", "\\(a\\)", "0", "undefined"], 2],
    ["The change of base formula states that \\(\\log_a x\\) equals:", ["\\(\\dfrac{\\log_b x}{\\log_b a}\\)", "\\(\\dfrac{\\log_b a}{\\log_b x}\\)", "\\(\\log_b x\\cdot\\log_b a\\)", "\\(\\log_b\\left(\\dfrac{x}a\\right)\\)"], 0],
    ["Power functions are of the general form \\(f(x)=kx^{\\alpha}\\) where:", ["\\(k\\) and \\(\\alpha\\) must both be integers", "\\(k\\) and \\(\\alpha\\) are any real numbers", "\\(\\alpha\\) must be negative", "\\(k\\) must be zero"], 1],
    ["In the exponential growth model \\(A(t)=A_0(1+r)^t\\), the symbol \\(r\\) represents the:", ["initial amount", "growth rate", "time", "final amount"], 1],
    ["If Rs. 10{,}000 is invested at 5% interest compounded annually, the amount after \\(t\\) years is given by:", ["\\(A(t)=10000(1.05)^t\\)", "\\(A(t)=10000(0.05)^t\\)", "\\(A(t)=10000+0.05t\\)", "\\(A(t)=10000\\cdot t^{1.05}\\)"], 0],
    ["In the exponential decay model \\(P(t)=P_0e^{-rt}\\ (r>0)\\), as \\(t\\) increases, \\(P(t)\\):", ["increases", "decreases", "remains constant", "becomes negative"], 1],
    ["The pH of a solution in terms of hydrogen ion concentration \\([H^+]\\) is given by:", ["\\(\\mathrm{pH}=\\log_{10}[H^+]\\)", "\\(\\mathrm{pH}=-\\log_{10}[H^+]\\)", "\\(\\mathrm{pH}=10^{[H^+]}\\)", "\\(\\mathrm{pH}=\\ln[H^+]\\)"], 1],
    ["The doubling time \\(t\\) for the exponential growth model \\(A(t)=A_0(1+r)^t\\) is found by solving:", ["\\((1+r)^t=0\\)", "\\((1+r)^t=2\\)", "\\((1+r)^t=1\\)", "\\((1+r)^t=\\dfrac12\\)"], 1],
    ["The domain of \\(y=\\tan\\theta\\) is:", ["\\(\\mathbb{R}\\)", "\\(\\theta\\ne(2n+1)\\dfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\(\\theta\\ne n\\pi,\\ n\\in\\mathbb{Z}\\)", "\\([-1,1]\\)"], 1],
    ["The range of \\(y=\\cos\\theta\\) is:", ["\\(\\mathbb{R}\\)", "\\([0,1]\\)", "\\([-1,1]\\)", "\\((-\\infty,\\infty)\\)"], 2],
    ["The domain of \\(y=\\cot\\theta\\) is:", ["\\(\\mathbb{R}\\)", "\\(\\theta\\ne n\\pi,\\ n\\in\\mathbb{Z}\\)", "\\(\\theta\\ne(2n+1)\\dfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\([-1,1]\\)"], 1],
    ["The range of \\(y=\\sec\\theta\\) is:", ["\\([-1,1]\\)", "\\(\\mathbb{R}\\)", "\\(y\\le-1\\) or \\(y\\ge1\\)", "\\([0,\\infty)\\)"], 2],
    ["The domain of \\(y=\\sin^{-1}x\\) is:", ["\\(\\mathbb{R}\\)", "\\([-1,1]\\)", "\\([0,\\pi]\\)", "\\(\\left(-\\tfrac{\\pi}2,\\tfrac{\\pi}2\\right)\\)"], 1],
    ["The range of the usual principal value of \\(y=\\cos^{-1}x\\) (in radians) is:", ["\\(\\left[-\\tfrac{\\pi}2,\\tfrac{\\pi}2\\right]\\)", "\\([0,\\pi]\\)", "\\((0,\\pi)\\)", "\\([-1,1]\\)"], 1],
    ["The range of the usual principal value of \\(y=\\tan^{-1}x\\) is:", ["\\([0,\\pi]\\)", "\\(\\left(-\\tfrac{\\pi}2,\\tfrac{\\pi}2\\right)\\)", "\\([-1,1]\\)", "\\(\\mathbb{R}\\)"], 1],
    ["The domain of \\(y=\\sec^{-1}x\\) is:", ["\\([-1,1]\\)", "\\(|x|\\ge1\\)", "\\(\\mathbb{R}\\)", "\\(x>0\\)"], 1],
    ["The horizontal line test is used to check whether a function is:", ["continuous", "one-to-one", "onto", "bijective only"], 1],
    ["If a horizontal line intersects the graph of a function at more than one point, the function is:", ["one-to-one", "not one-to-one", "onto", "into"], 1],
    ["The graph of \\(y=f(x)-3\\), compared to \\(y=f(x)\\), is shifted:", ["3 units up", "3 units down", "3 units left", "3 units right"], 1],
    ["The graph of \\(y=f(x-2)\\), compared to \\(y=f(x)\\), is shifted:", ["2 units left", "2 units right", "2 units up", "2 units down"], 1]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Function</th><th>Definition</th></tr><tr><td>\\(f(x)\\)</td><td>\\(\\dfrac{3x-1}{x-2}\\)</td></tr></table>",
          questions: [
            ["The domain of \\(f(x)\\) is:", ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{2\\}\\)", "\\(\\mathbb{R}-\\{3\\}\\)", "\\(\\mathbb{R}-\\{2,3\\}\\)"], 1],
            ["\\(f^{-1}(x)\\) equals:", ["\\(\\dfrac{2x-1}{x-3}\\)", "\\(\\dfrac{2x+1}{x-3}\\)", "\\(\\dfrac{x-1}{3x-2}\\)", "\\(\\dfrac{2x-1}{x+3}\\)"], 0],
            ["The range of \\(f(x)\\) is:", ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{3\\}\\)", "\\(\\mathbb{R}-\\{2\\}\\)", "\\([0,\\infty)\\)"], 1],
            ["The vertical asymptote of the graph of \\(f\\) corresponds to the excluded domain value \\(x=\\):", ["2", "3", "\\(-2\\)", "\\(-3\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Transformation</th><th>Rule</th></tr><tr><td>Base function</td><td>\\(f(x)=x^2\\)</td></tr><tr><td>New function</td><td>\\(g(x)=f(x-3)+5\\)</td></tr></table>",
          questions: [
            ["Compared to \\(f(x)\\), the graph of \\(g(x)\\) is shifted:", ["3 units right and 5 units up", "3 units left and 5 units down", "3 units right and 5 units down", "3 units left and 5 units up"], 0],
            ["The vertex of \\(g(x)\\) is at:", ["\\((3,5)\\)", "\\((-3,5)\\)", "\\((3,-5)\\)", "\\((-3,-5)\\)"], 0],
            ["The axis of symmetry of \\(g(x)\\) is:", ["\\(x=3\\)", "\\(x=-3\\)", "\\(x=5\\)", "\\(x=-5\\)"], 0],
            ["The minimum value of \\(g(x)\\) is:", ["5", "3", "\\(-5\\)", "0"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Population model</th><th>Value</th></tr><tr><td>\\(A(t)=500(1.2)^t\\)</td><td>\\(t\\) in hours</td></tr></table>",
          questions: [
            ["The initial population (at \\(t=0\\)) is:", ["500", "600", "1.2", "100"], 0],
            ["The growth rate per hour is:", ["12%", "20%", "1.2%", "2%"], 1],
            ["After 1 hour, the population is:", ["500", "520", "600", "610"], 2],
            ["This model represents:", ["exponential decay", "linear growth", "exponential growth", "quadratic growth"], 2]
          ]
        }
      ],
      short: [],
      long: []
    },
    {
      id: 2,
      name: "Limit, Continuity and Derivative",
      mcq: [
    ["If \\(\\lim\\limits_{x\\to a}f(x)=3\\) and \\(\\lim\\limits_{x\\to a}g(x)=0\\), then \\(\\lim\\limits_{x\\to a}\\dfrac{f(x)}{g(x)}\\):", ["3", "0", "Exists", "Doesn't exist"], 3],
    ["If \\(f(x)=\\begin{cases}2x-1, & x<0\\\\ 2x+1, & x>0\\end{cases}\\), then \\(\\lim\\limits_{x\\to0^-}f(x)\\) is:", ["1", "\\(-1\\)", "0", "2"], 1],
    ["If \\(f\\) and \\(g\\) are continuous at 2, then \\(\\dfrac{f}g\\) is continuous at:", ["0", "1", "2", "3"], 2],
    ["The function \\(f(x)=\\begin{cases}\\dfrac{\\sin x}x, & x\\ne0\\\\ 1, & x=0\\end{cases}\\), is continuous at:", ["0", "1", "\\(-1\\)", "0.1"], 0],
    ["If \\(f\\) is differentiable for every value of \\(x\\), then \\(f\\) is:", ["discontinuous", "continuous", "finite", "infinite"], 1],
    ["If \\(k\\) is a constant and \\(n\\) is a positive integer, then \\(\\dfrac{d}{dx}k^n\\) is:", ["\\(nk^{n-1}\\)", "\\(k^{n-1}\\)", "\\(\\ln n\\cdot k^n\\)", "0"], 3],
    ["If \\(f(2)=2\\), \\(g(x)=x^2\\), then \\(\\dfrac{d}{dx}\\left[\\dfrac{3g(x)}{f(2)}\\right]\\) is:", ["\\(2x\\)", "\\(3x\\)", "\\(\\dfrac32x\\)", "\\(\\dfrac32x^2\\)"], 1],
    ["If \\(y=f(x)\\) is a polynomial function of degree 2, then \\(\\dfrac{d^3}{dx^3}f(x)\\) is:", ["0", "1", "\\(-1\\)", "2"], 0],
    ["If \\(f\\) is differentiable for every value of \\(x\\), then \\(f\\) is continuous for:", ["some value of \\(x\\)", "\\([0,\\infty]\\)", "every value of \\(x\\)", "\\([0,-\\infty]\\)"], 2],
    ["The critical value of \\(f(t)=2t^3\\) (where \\(f'(t)=0\\)) occurs at \\(t=\\):", ["3", "0", "\\(-1\\)", "1"], 1],
    ["\\(\\lim\\limits_{x\\to a}c\\) (where \\(c\\) is a constant) equals:", ["0", "\\(c\\)", "\\(a\\)", "does not exist"], 1],
    ["\\(\\lim\\limits_{x\\to0}\\dfrac{\\sin x}x\\) equals:", ["0", "1", "undefined", "\\(\\infty\\)"], 1],
    ["\\(\\lim\\limits_{x\\to0}\\dfrac{1-\\cos x}x\\) equals:", ["0", "1", "\\(-1\\)", "undefined"], 0],
    ["If \\(\\lim\\limits_{x\\to a}f(x)=L_1\\) and \\(\\lim\\limits_{x\\to a}g(x)=L_2\\), then \\(\\lim\\limits_{x\\to a}[f(x)+g(x)]\\) equals:", ["\\(L_1-L_2\\)", "\\(L_1+L_2\\)", "\\(L_1L_2\\)", "\\(L_1/L_2\\)"], 1],
    ["\\(\\lim\\limits_{x\\to a}[f(x)]^n\\) equals:", ["\\(\\left[\\lim_{x\\to a}f(x)\\right]^n\\)", "\\(n\\left[\\lim_{x\\to a}f(x)\\right]\\)", "\\([f(a)]^{n-1}\\)", "undefined"], 0],
    ["\\(\\lim\\limits_{x\\to5}10x\\) equals:", ["10", "5", "50", "0"], 2],
    ["\\(\\lim\\limits_{x\\to2}(x^2-5x+6)\\) equals:", ["0", "1", "6", "\\(-6\\)"], 0],
    ["For \\(\\lim\\limits_{x\\to a}f(x)=L\\) to exist, it is necessary that:", ["\\(\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L\\)", "\\(f(a)\\) must be defined", "\\(f\\) must be a polynomial", "\\(a\\) must equal 0"], 0],
    ["\\(x\\to a^-\\) denotes that \\(x\\) approaches \\(a\\) from the:", ["right", "left", "top", "bottom"], 1],
    ["\\(\\lim\\limits_{x\\to1}\\dfrac{x^2-1}{x-1}\\) equals:", ["0", "1", "2", "does not exist"], 2],
    ["The existence of \\(\\lim\\limits_{x\\to a}f(x)\\) depends on:", ["whether \\(f(a)\\) is defined", "the values of \\(f\\) near \\(a\\), not necessarily at \\(a\\)", "whether \\(f\\) is a polynomial", "whether \\(a\\) is positive"], 1],
    ["A function \\(f\\) is continuous at a number \\(a\\) if all of the following hold, except:", ["\\(f(a)\\) is defined", "\\(\\lim_{x\\to a}f(x)\\) exists", "\\(\\lim_{x\\to a}f(x)=f(a)\\)", "\\(f\\) is a polynomial"], 3],
    ["A removable discontinuity occurs at \\(a\\) when:", ["\\(\\lim_{x\\to a}f(x)\\) does not exist", "\\(\\lim_{x\\to a}f(x)\\) exists but \\(f(a)\\) is undefined or \\(f(a)\\ne\\lim_{x\\to a}f(x)\\)", "\\(f(a)=0\\)", "\\(f\\) is a constant"], 1],
    ["The function \\(f(x)=\\dfrac{x^2-1}{x-1}\\) has a removable discontinuity at:", ["\\(x=0\\)", "\\(x=1\\)", "\\(x=-1\\)", "\\(x=2\\)"], 1],
    ["A function is continuous on an open interval \\((a,b)\\) if it is continuous at:", ["only \\(x=a\\) and \\(x=b\\)", "every number in the interval", "only the midpoint", "no number in the interval"], 1],
    ["If \\(f\\) and \\(g\\) are continuous at \\(a\\), then \\(f+g\\), \\(fg\\), and \\(\\dfrac{f}g\\) (with \\(g(a)\\ne0\\)) are:", ["discontinuous at \\(a\\)", "continuous at \\(a\\)", "undefined at \\(a\\)", "none of these"], 1],
    ["For \\(f(x)=\\begin{cases}x^2, & x<2\\\\ 5, & x=2\\\\ -x+6, & x>2\\end{cases}\\), \\(\\lim\\limits_{x\\to2}f(x)\\) equals:", ["5", "4", "6", "does not exist"], 1],
    ["For the function in the previous question, \\(f\\) is discontinuous at \\(x=2\\) because:", ["\\(\\lim_{x\\to2}f(x)\\) does not exist", "\\(f(2)\\) is undefined", "\\(\\lim_{x\\to2}f(x)\\ne f(2)\\)", "\\(f\\) is not defined near 2"], 2],
    ["A polynomial function is continuous:", ["nowhere", "only at \\(x=0\\)", "everywhere on \\(\\mathbb{R}\\)", "only on \\([0,1]\\)"], 2],
    ["The function \\(f(x)=\\dfrac1x\\) is discontinuous at:", ["\\(x=0\\)", "\\(x=1\\)", "\\(x=-1\\)", "nowhere"], 0],
    ["A function \\(f\\) continuous on a closed interval \\([a,b]\\) always has:", ["no extrema", "an absolute maximum and absolute minimum on \\([a,b]\\)", "only a minimum", "only a maximum"], 1],
    ["Which type of function can have a jump discontinuity?", ["a polynomial function", "a piecewise-defined function", "a constant function", "an identity function"], 1],
    ["The slope of the tangent line to \\(y=f(x)\\) at \\((a,f(a))\\) is given by \\(m_{tan}=\\):", ["\\(\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(a+\\Delta x)-f(a)}{\\Delta x}\\)", "\\(f(a)\\)", "\\(\\dfrac{f(a)}a\\)", "\\(a\\cdot f(a)\\)"], 0],
    ["The slope of a secant line through \\((a,f(a))\\) and \\((a+\\Delta x,f(a+\\Delta x))\\) is:", ["\\(\\dfrac{\\Delta x}{\\Delta y}\\)", "\\(\\dfrac{\\Delta y}{\\Delta x}\\)", "\\(\\Delta x\\cdot\\Delta y\\)", "\\(\\Delta x+\\Delta y\\)"], 1],
    ["A tangent line may fail to exist at \\(x=a\\) if the graph has:", ["a smooth curve at \\(a\\)", "a corner or a discontinuity at \\(a\\)", "a positive slope at \\(a\\)", "a negative slope at \\(a\\)"], 1],
    ["The average rate of change of \\(f\\) over \\([a,b]\\) is given by:", ["\\(\\dfrac{f(b)-f(a)}{b-a}\\)", "\\(f(b)-f(a)\\)", "\\(\\dfrac{f(a)+f(b)}2\\)", "\\(f(b)\\cdot f(a)\\)"], 0],
    ["The instantaneous rate of change of \\(f\\) at \\(a\\) is defined using:", ["a limit as \\(\\Delta x\\to\\infty\\)", "a limit as \\(\\Delta x\\to0\\)", "the average of two points only", "integration"], 1],
    ["For \\(s=f(t)\\) giving position, the instantaneous velocity at \\(t_1\\) is:", ["\\(\\lim\\limits_{\\Delta t\\to0}\\dfrac{f(t_1+\\Delta t)-f(t_1)}{\\Delta t}\\)", "\\(f(t_1)\\)", "\\(\\dfrac{f(t_1)}{t_1}\\)", "\\(t_1\\cdot f(t_1)\\)"], 0],
    ["If the height of a falling object is \\(s(t)=-4.9t^2+192\\), the instantaneous velocity at any time \\(t\\) is given by:", ["\\(s'(t)\\)", "\\(s(t)\\)", "\\(s(t)/t\\)", "\\(t\\cdot s(t)\\)"], 0],
    ["A negative velocity in rectilinear motion indicates that the object is moving:", ["in the positive direction", "in the negative direction", "at rest", "with zero acceleration"], 1],
    ["The derivative \\(f'(x)\\) is defined as:", ["\\(\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}\\)", "\\(f(x)+\\Delta x\\)", "\\(\\dfrac{f(x)}{\\Delta x}\\)", "\\(f(x)\\cdot\\Delta x\\)"], 0],
    ["By the power rule, \\(\\dfrac{d}{dx}(x^n)\\) equals:", ["\\(x^{n-1}\\)", "\\(nx^{n-1}\\)", "\\(nx^n\\)", "\\((n-1)x^n\\)"], 1],
    ["\\(\\dfrac{d}{dx}(c)\\), where \\(c\\) is a constant, equals:", ["\\(c\\)", "1", "0", "\\(cx\\)"], 2],
    ["\\(\\dfrac{d}{dx}[f(x)+g(x)]\\) equals:", ["\\(f'(x)+g'(x)\\)", "\\(f'(x)-g'(x)\\)", "\\(f'(x)g'(x)\\)", "\\(f(x)+g'(x)\\)"], 0],
    ["By the product rule, \\(\\dfrac{d}{dx}[f(x)g(x)]\\) equals:", ["\\(f'(x)g'(x)\\)", "\\(f(x)g'(x)+g(x)f'(x)\\)", "\\(f(x)g(x)\\)", "\\(f'(x)-g'(x)\\)"], 1],
    ["By the quotient rule, \\(\\dfrac{d}{dx}\\left[\\dfrac{f(x)}{g(x)}\\right]\\) equals:", ["\\(\\dfrac{f'(x)}{g'(x)}\\)", "\\(\\dfrac{g(x)f'(x)-f(x)g'(x)}{[g(x)]^2}\\)", "\\(\\dfrac{f(x)g'(x)-g(x)f'(x)}{[g(x)]^2}\\)", "\\(\\dfrac{f(x)+g(x)}{[g(x)]^2}\\)"], 1],
    ["\\(\\dfrac{d}{dx}(5x^3)\\) equals:", ["\\(5x^2\\)", "\\(15x^2\\)", "\\(3x^2\\)", "\\(15x^3\\)"], 1],
    ["\\(\\dfrac{d}{dx}\\left(\\dfrac1x\\right)\\) equals:", ["\\(\\dfrac1{x^2}\\)", "\\(-\\dfrac1{x^2}\\)", "\\(\\ln x\\)", "\\(-\\ln x\\)"], 1],
    ["\\(\\dfrac{d}{dx}\\sqrt{x}\\) equals:", ["\\(\\dfrac1{2\\sqrt{x}}\\)", "\\(2\\sqrt{x}\\)", "\\(\\dfrac1{\\sqrt{x}}\\)", "\\(\\sqrt{x}\\)"], 0],
    ["If \\(c\\) is constant and \\(f\\) is differentiable, \\(\\dfrac{d}{dx}[cf(x)]\\) equals:", ["\\(f'(x)\\)", "\\(cf'(x)\\)", "\\(cf(x)\\)", "\\(c+f'(x)\\)"], 1],
    ["\\(\\dfrac{d}{dx}(x^{4/3})\\) equals:", ["\\(\\dfrac43x^{1/3}\\)", "\\(\\dfrac34x^{1/3}\\)", "\\(\\dfrac34x^{4/3}\\)", "\\(4x^{1/3}\\)"], 0],
    ["\\(\\dfrac{d}{dx}(3x^2-7x+10)\\) equals:", ["\\(6x-7\\)", "\\(3x-7\\)", "\\(6x+10\\)", "\\(6x-7x\\)"], 0],
    ["\\(\\dfrac{d}{dx}(\\sin x)\\) equals:", ["\\(\\cos x\\)", "\\(-\\cos x\\)", "\\(-\\sin x\\)", "\\(\\sec^2x\\)"], 0],
    ["\\(\\dfrac{d}{dx}(\\cos x)\\) equals:", ["\\(\\sin x\\)", "\\(-\\sin x\\)", "\\(-\\cos x\\)", "\\(\\csc^2x\\)"], 1],
    ["\\(\\dfrac{d}{dx}(\\tan x)\\) equals:", ["\\(\\sec x\\tan x\\)", "\\(\\sec^2x\\)", "\\(-\\csc^2x\\)", "\\(\\csc x\\cot x\\)"], 1],
    ["\\(\\dfrac{d}{dx}(\\cot x)\\) equals:", ["\\(\\sec^2x\\)", "\\(-\\csc^2x\\)", "\\(\\csc x\\cot x\\)", "\\(-\\sec x\\tan x\\)"], 1],
    ["\\(\\dfrac{d}{dx}(\\sec x)\\) equals:", ["\\(\\sec x\\tan x\\)", "\\(-\\sec x\\tan x\\)", "\\(\\csc x\\cot x\\)", "\\(-\\csc x\\cot x\\)"], 0],
    ["\\(\\dfrac{d}{dx}(\\csc x)\\) equals:", ["\\(\\csc x\\cot x\\)", "\\(-\\csc x\\cot x\\)", "\\(\\sec x\\tan x\\)", "\\(-\\sec^2x\\)"], 1],
    ["\\(\\dfrac{d}{dx}(\\sin^{-1}x)\\) equals:", ["\\(\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(-\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{1+x^2}\\)"], 0],
    ["\\(\\dfrac{d}{dx}(\\cos^{-1}x)\\) equals:", ["\\(\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(-\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{1+x^2}\\)"], 1],
    ["\\(\\dfrac{d}{dx}(\\tan^{-1}x)\\) equals:", ["\\(\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{1+x^2}\\)", "\\(\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(\\dfrac1{x\\sqrt{x^2-1}}\\)"], 0],
    ["\\(\\dfrac{d}{dx}(\\cot^{-1}x)\\) equals:", ["\\(\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(\\dfrac1{\\sqrt{1-x^2}}\\)"], 1],
    ["\\(\\dfrac{d}{dx}(\\sec^{-1}x)\\) equals (for \\(|x|>1\\)):", ["\\(\\dfrac1{x\\sqrt{x^2-1}}\\)", "\\(-\\dfrac1{x\\sqrt{x^2-1}}\\)", "\\(\\dfrac1{1+x^2}\\)", "\\(\\dfrac1{\\sqrt{1-x^2}}\\)"], 0],
    ["\\(\\dfrac{d}{dx}[\\tan^{-1}(5x)]\\) equals:", ["\\(\\dfrac5{1+25x^2}\\)", "\\(\\dfrac1{1+25x^2}\\)", "\\(\\dfrac5{1+x^2}\\)", "\\(\\dfrac1{1+5x^2}\\)"], 0],
    ["By the chain rule, if \\(y=f(u)\\) and \\(u=g(x)\\), then \\(\\dfrac{dy}{dx}\\) equals:", ["\\(\\dfrac{dy}{du}+\\dfrac{du}{dx}\\)", "\\(\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}\\)", "\\(\\dfrac{dy}{du}\\div\\dfrac{du}{dx}\\)", "\\(\\dfrac{du}{dy}\\cdot\\dfrac{dy}{dx}\\)"], 1],
    ["\\(\\dfrac{d}{dx}[(3x^2+1)^5]\\) equals:", ["\\(5(3x^2+1)^4\\)", "\\(5(3x^2+1)^4(6x)\\)", "\\(5(6x)^4\\)", "\\((3x^2+1)^4(6x)\\)"], 1],
    ["\\(\\dfrac{d}{dx}(e^x)\\) equals:", ["\\(e^x\\)", "\\(xe^{x-1}\\)", "\\(e^{x-1}\\)", "\\(\\dfrac{e^x}x\\)"], 0],
    ["\\(\\dfrac{d}{dx}(\\ln x)\\) equals:", ["\\(x\\)", "\\(\\dfrac1x\\)", "\\(\\ln x\\)", "\\(e^x\\)"], 1],
    ["\\(\\dfrac{d}{dx}(a^x)\\), for \\(a>0,\\ a\\ne1\\), equals:", ["\\(a^x\\)", "\\(a^x\\ln a\\)", "\\(xa^{x-1}\\)", "\\(\\dfrac{a^x}{\\ln a}\\)"], 1],
    ["\\(\\dfrac{d}{dx}[e^{3x}]\\) equals:", ["\\(e^{3x}\\)", "\\(3e^{3x}\\)", "\\(3e^x\\)", "\\(e^x\\)"], 1],
    ["\\(\\dfrac{d}{dx}[\\ln(x^2+1)]\\) equals:", ["\\(\\dfrac1{x^2+1}\\)", "\\(\\dfrac{2x}{x^2+1}\\)", "\\(\\dfrac{2x}x\\)", "\\(2x\\ln(x^2+1)\\)"], 1],
    ["Differentiating an equation like \\(x^2+y^2=25\\) with respect to \\(x\\) directly (without solving for \\(y\\) first) is called:", ["explicit differentiation", "implicit differentiation", "partial differentiation", "logarithmic differentiation"], 1],
    ["For \\(xy=1\\), using implicit differentiation, \\(\\dfrac{dy}{dx}\\) equals:", ["\\(-\\dfrac{y}x\\)", "\\(\\dfrac{y}x\\)", "\\(-\\dfrac{x}y\\)", "\\(xy\\)"], 0],
    ["If \\(x=t^2\\) and \\(y=2t\\), then \\(\\dfrac{dy}{dx}\\) (using parametric differentiation) equals:", ["\\(\\dfrac{dy/dt}{dx/dt}\\)", "\\(\\dfrac{dx/dt}{dy/dt}\\)", "\\(\\dfrac{dy}{dt}\\cdot\\dfrac{dx}{dt}\\)", "\\(t\\)"], 0],
    ["If \\(x=\\tan t\\) and \\(y=t^2\\), then \\(\\dfrac{dx}{dt}\\) equals:", ["\\(\\sec^2t\\)", "\\(\\tan^2t\\)", "\\(2t\\)", "\\(\\csc^2t\\)"], 0],
    ["For a function whose power rule for functions is applied, \\(\\dfrac{d}{dx}[g(x)]^n\\) equals:", ["\\(n[g(x)]^{n-1}\\)", "\\(n[g(x)]^{n-1}g'(x)\\)", "\\([g(x)]^{n-1}g'(x)\\)", "\\(ng'(x)\\)"], 1],
    ["The differential \\(dy\\) is defined as:", ["\\(dy=f(x)\\Delta x\\)", "\\(dy=f'(x)\\,dx\\)", "\\(dy=f'(x)+dx\\)", "\\(dy=\\dfrac{f(x)}{dx}\\)"], 1],
    ["For small \\(\\Delta x\\), the relationship between \\(\\Delta y\\) and \\(dy\\) is:", ["\\(\\Delta y\\gg dy\\)", "\\(\\Delta y\\approx dy\\)", "\\(\\Delta y=-dy\\)", "\\(\\Delta y\\) and \\(dy\\) are unrelated"], 1],
    ["To approximate \\(f(x+\\Delta x)\\) using differentials, we use the formula:", ["\\(f(x+\\Delta x)\\approx f(x)+f'(x)\\Delta x\\)", "\\(f(x+\\Delta x)\\approx f(x)-f'(x)\\Delta x\\)", "\\(f(x+\\Delta x)\\approx f'(x)\\)", "\\(f(x+\\Delta x)\\approx f(x)\\cdot\\Delta x\\)"], 0],
    ["If the side of a cube has a possible error \\(\\Delta x\\), the approximate error in the volume \\(V=x^3\\) is given by:", ["\\(dV=x^2\\Delta x\\)", "\\(dV=3x^2\\Delta x\\)", "\\(dV=3x\\Delta x\\)", "\\(dV=x^3\\Delta x\\)"], 1],
    ["Using differentials, the increment \\(\\Delta x\\) is also denoted by:", ["\\(dx\\)", "\\(dy\\)", "\\(\\Delta y\\)", "\\(f'(x)\\)"], 0],
    ["For \\(y=x^2\\), if \\(x=4\\) and \\(dx=0.1\\), then \\(dy\\) equals:", ["0.4", "0.8", "8", "16.1"], 1],
    ["Using differentials, the approximate value of \\(\\sqrt{25.4}\\) is closest to:", ["5.00", "5.04", "5.4", "25.4"], 1],
    ["Related rates problems make use of the:", ["chain rule", "quotient rule alone", "power rule alone", "sum rule alone"], 0],
    ["The second derivative of \\(y=f(x)\\) is denoted by all of the following, except:", ["\\(f''(x)\\)", "\\(y''\\)", "\\(\\dfrac{d^2y}{dx^2}\\)", "\\([f'(x)]^2\\)"], 3],
    ["If \\(y=x^3-2x^2\\), then \\(y''\\) equals:", ["\\(3x^2-4x\\)", "\\(6x-4\\)", "\\(6x\\)", "6"], 1],
    ["A number \\(c\\) is called a critical value of \\(f\\) if:", ["\\(f(c)=0\\)", "\\(f'(c)=0\\) or \\(f'(c)\\) does not exist", "\\(f''(c)=0\\)", "\\(c=0\\)"], 1],
    ["By the second derivative test, if \\(f''(c)>0\\) at a critical point \\(c\\), then \\(f(c)\\) is a:", ["relative maximum", "relative minimum", "point of inflection", "discontinuity"], 1],
    ["By the second derivative test, if \\(f''(c)<0\\) at a critical point \\(c\\), then \\(f(c)\\) is a:", ["relative maximum", "relative minimum", "point of inflection", "undefined"], 0],
    ["A function \\(f\\) is concave upward on \\((a,b)\\) if, for all \\(x\\) in \\((a,b)\\):", ["\\(f'(x)>0\\)", "\\(f''(x)>0\\)", "\\(f''(x)<0\\)", "\\(f(x)>0\\)"], 1],
    ["A function \\(f\\) is concave downward on \\((a,b)\\) if, for all \\(x\\) in \\((a,b)\\):", ["\\(f''(x)>0\\)", "\\(f''(x)<0\\)", "\\(f'(x)<0\\)", "\\(f(x)<0\\)"], 1],
    ["A number \\(f(c)\\) is an absolute maximum of \\(f\\) if:", ["\\(f(x)\\le f(c)\\) for every \\(x\\) in the domain of \\(f\\)", "\\(f(x)\\ge f(c)\\) for every \\(x\\) in the domain of \\(f\\)", "\\(f'(c)=0\\) only", "\\(f(c)=0\\)"], 0],
    ["A continuous function on a closed interval \\([a,b]\\) is guaranteed to have:", ["no absolute extrema", "an absolute maximum and minimum on \\([a,b]\\)", "only a relative maximum", "only critical points"], 1],
    ["If \\(f(x)=x^4\\), the critical value(s) of \\(f\\) is/are:", ["\\(x=0\\) only", "\\(x=1\\) only", "\\(x=-1\\) and \\(x=1\\)", "no critical values"], 0],
    ["For \\(f(x)=-(2x-5)^2\\), the point \\(x=5/2\\) gives:", ["a relative minimum", "a relative maximum", "a point of inflection", "neither max nor min"], 1],
    ["In an optimization problem, the maximum or minimum value of a quantity on an interval is found by examining:", ["only the endpoints of the interval", "only the critical points", "critical points and endpoints of the interval", "neither critical points nor endpoints"], 2],
    ["In the price growth (inflation) model \\(P(t)=P_0e^{rt}\\), the derivative \\(\\dfrac{dP}{dt}\\) represents the:", ["initial price", "instantaneous rate of change of price with time", "final price", "average price"], 1],
    ["In straight-line depreciation, the value of an asset decreases:", ["exponentially", "at a constant rate over time", "logarithmically", "randomly"], 1],
    ["For a position function \\(s(t)\\), the acceleration \\(a(t)\\) is defined as:", ["\\(\\dfrac{ds}{dt}\\)", "\\(\\dfrac{dv}{dt}\\), where \\(v(t)=\\dfrac{ds}{dt}\\)", "\\(s(t)\\cdot t\\)", "\\(\\dfrac{s(t)}t\\)"], 1],
    ["If marginal cost is \\(C'(x)\\) and marginal revenue is \\(R'(x)\\), profit is maximized approximately when:", ["\\(C'(x)=0\\)", "\\(R'(x)=0\\)", "\\(C'(x)=R'(x)\\)", "\\(C(x)=0\\)"], 2]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Piecewise function</th></tr><tr><td>\\(f(x)=\\begin{cases}x^2+1, & x<1\\\\ 3, & x=1\\\\ 2x, & x>1\\end{cases}\\)</td></tr></table>",
          questions: [
            ["\\(\\lim\\limits_{x\\to1^-}f(x)\\) equals:", ["2", "3", "1", "0"], 0],
            ["\\(\\lim\\limits_{x\\to1^+}f(x)\\) equals:", ["2", "3", "1", "4"], 0],
            ["Is \\(f\\) continuous at \\(x=1\\)?", ["Yes", "No, because \\(f(1)\\ne\\lim_{x\\to1}f(x)\\)", "No, because the limit does not exist", "No, because \\(f(1)\\) is undefined"], 1],
            ["The type of discontinuity at \\(x=1\\) is:", ["jump discontinuity", "removable discontinuity", "infinite discontinuity", "no discontinuity"], 1]
          ]
        },
        {
          stimulus: "<table><tr><th>Motion</th><th>Function</th></tr><tr><td>Position \\(s(t)\\)</td><td>\\(t^3-6t^2+9t\\) (metres, \\(t\\) in seconds)</td></tr></table>",
          questions: [
            ["The velocity function \\(v(t)\\) is:", ["\\(3t^2-12t+9\\)", "\\(t^2-6t+9\\)", "\\(3t^2-6t\\)", "\\(6t-12\\)"], 0],
            ["The acceleration function \\(a(t)\\) is:", ["\\(3t^2-12t+9\\)", "\\(6t-12\\)", "\\(6t\\)", "12"], 1],
            ["The object is momentarily at rest when \\(v(t)=0\\), i.e. at:", ["\\(t=1\\) and \\(t=3\\)", "\\(t=0\\) and \\(t=4\\)", "\\(t=2\\) only", "\\(t=1\\) only"], 0],
            ["The acceleration at \\(t=2\\) is:", ["0", "12", "\\(-12\\)", "6"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Optimization</th><th>Setup</th></tr><tr><td>Fencing</td><td>200 m, rectangular field against a straight river (no fence needed along the river)</td></tr><tr><td>Width</td><td>\\(x\\) metres (perpendicular to river)</td></tr></table>",
          questions: [
            ["If \\(x\\) is the width, the length along the river is \\(200-2x\\), so the area function \\(A(x)\\) is:", ["\\(200x-2x^2\\)", "\\(200x+2x^2\\)", "\\(x^2-200x\\)", "\\(100x-x^2\\)"], 0],
            ["The critical point of \\(A(x)\\) occurs at \\(x=\\):", ["50", "100", "25", "200"], 0],
            ["By the second derivative test, this critical point gives a:", ["relative minimum", "relative maximum", "point of inflection", "no extremum"], 1],
            ["The maximum enclosed area is:", ["5000 m\\(^2\\)", "10000 m\\(^2\\)", "2500 m\\(^2\\)", "4000 m\\(^2\\)"], 0]
          ]
        }
      ],
      short: [],
      long: []
    },
    {
      id: 3,
      name: "Integration",
      mcq: [
    ["If \\(f\\) is integrable, then it is:", ["discontinuous", "unbounded", "continuous", "linear"], 2],
    ["If \\(f'(x)=3x^2+2x\\), then \\(f(x)\\) is:", ["\\(6x+2+c\\)", "\\(x^3+x^2+c\\)", "\\(3x^3+2x^2+c\\)", "\\(1.5x^3+x^2+c\\)"], 1],
    ["\\(\\displaystyle\\int\\dfrac{d}{dx}(x^2)\\,dx\\) is equal to:", ["\\(x^2+c\\)", "\\(2x+c\\)", "\\(\\dfrac{x^3}3+c\\)", "\\(x+c\\)"], 0],
    ["\\(\\displaystyle\\int\\sin2x\\,dx\\) is:", ["\\(\\dfrac{\\cos2x}2+c\\)", "\\(2\\cos2x+c\\)", "\\(-\\dfrac{\\sin2x}2+c\\)", "\\(-\\dfrac{\\cos2x}2+c\\)"], 3],
    ["\\(\\displaystyle\\int_3^7dx\\) is:", ["3", "4", "5", "6"], 1],
    ["\\(\\displaystyle\\int_{\\pi/6}^{\\pi}\\cos x\\,dx\\) is:", ["\\(-\\dfrac12\\)", "\\(\\dfrac12\\)", "\\(\\dfrac32\\)", "\\(-\\dfrac32\\)"], 0],
    ["\\(\\dfrac{d}{dx}\\displaystyle\\int_{-2}^{x}t^3\\,dt\\) is equal to:", ["\\(t^4\\)", "\\(t^3\\)", "\\(x^3\\)", "\\(x^3-16\\)"], 2],
    ["What is the relation between \\(\\displaystyle\\int_1^2x\\,dx\\) and \\(\\displaystyle\\int_1^2t\\,dt\\)?", ["\\(\\int_1^2x\\,dx<\\int_1^2t\\,dt\\)", "\\(\\int_1^2x\\,dx>\\int_1^2t\\,dt\\)", "\\(\\int_1^2x\\,dx\\ne\\int_1^2t\\,dt\\)", "\\(\\int_1^2x\\,dx=\\int_1^2t\\,dt\\)"], 3],
    ["Area under the graph of \\(f(x)=4\\) on \\([2,5]\\) is:", ["2", "4", "5", "12"], 3],
    ["\\(\\displaystyle\\int\\sqrt{x}\\,dx\\) is:", ["\\(x^{3/2}+c\\)", "\\(\\dfrac23x^{3/2}+c\\)", "\\(\\dfrac32x^{3/2}+c\\)", "\\(x^{1/2}+c\\)"], 1],
    ["A function \\(F(x)\\) is called an anti-derivative of \\(f(x)\\) if:", ["\\(F(x)=f(x)\\)", "\\(F'(x)=f(x)\\)", "\\(f'(x)=F(x)\\)", "\\(F(x)\\cdot f(x)=1\\)"], 1],
    ["If \\(F(x)\\) is an anti-derivative of \\(f(x)\\), then the general anti-derivative is:", ["\\(F(x)\\)", "\\(F(x)+c\\), for arbitrary constant \\(c\\)", "\\(F(x)\\cdot c\\)", "\\(\\dfrac{F(x)}c\\)"], 1],
    ["The symbol \\(\\int\\) is called the:", ["derivative sign", "integral sign", "limit sign", "summation sign"], 1],
    ["In \\(\\displaystyle\\int f(x)\\,dx\\), the term \\(f(x)\\) is called the:", ["integrand", "integral", "differential", "constant of integration"], 0],
    ["By the power rule of integration, \\(\\displaystyle\\int x^n\\,dx\\ (n\\ne-1)\\) equals:", ["\\(nx^{n-1}+c\\)", "\\(\\dfrac{x^{n+1}}{n+1}+c\\)", "\\(\\dfrac{x^{n-1}}{n-1}+c\\)", "\\(x^{n+1}+c\\)"], 1],
    ["\\(\\displaystyle\\int\\dfrac1x\\,dx\\) equals:", ["\\(\\ln|x|+c\\)", "\\(\\dfrac1{x^2}+c\\)", "\\(x\\ln x+c\\)", "\\(-\\dfrac1{x^2}+c\\)"], 0],
    ["\\(\\displaystyle\\int e^x\\,dx\\) equals:", ["\\(e^x+c\\)", "\\(xe^{x-1}+c\\)", "\\(\\dfrac{e^x}x+c\\)", "\\(e^{x+1}+c\\)"], 0],
    ["\\(\\displaystyle\\int a^x\\,dx\\ (a>0,\\ a\\ne1)\\) equals:", ["\\(a^x+c\\)", "\\(\\dfrac{a^x}{\\ln a}+c\\)", "\\(a^x\\ln a+c\\)", "\\(\\dfrac{a^{x+1}}{x+1}+c\\)"], 1],
    ["\\(\\displaystyle\\int cf(x)\\,dx\\) equals (where \\(c\\) is a constant):", ["\\(c\\displaystyle\\int f(x)\\,dx\\)", "\\(\\displaystyle\\int f(x)\\,dx\\)", "\\(c+\\displaystyle\\int f(x)\\,dx\\)", "\\(\\dfrac1c\\displaystyle\\int f(x)\\,dx\\)"], 0],
    ["\\(\\displaystyle\\int[f(x)+g(x)]\\,dx\\) equals:", ["\\(\\int f(x)\\,dx-\\int g(x)\\,dx\\)", "\\(\\int f(x)\\,dx\\cdot\\int g(x)\\,dx\\)", "\\(\\int f(x)\\,dx+\\int g(x)\\,dx\\)", "\\(\\int[f(x)g(x)]\\,dx\\)"], 2],
    ["\\(\\displaystyle\\int7\\,dx\\) equals:", ["0", "7", "\\(7x+c\\)", "\\(\\dfrac{7x^2}2+c\\)"], 2],
    ["\\(\\displaystyle\\int x^5\\,dx\\) equals:", ["\\(5x^4+c\\)", "\\(\\dfrac{x^6}6+c\\)", "\\(x^6+c\\)", "\\(\\dfrac{x^4}4+c\\)"], 1],
    ["\\(\\displaystyle\\int\\dfrac{f'(x)}{f(x)}\\,dx\\) equals:", ["\\([f(x)]^2+c\\)", "\\(\\ln|f(x)|+c\\)", "\\(f(x)+c\\)", "\\(\\dfrac1{f(x)}+c\\)"], 1],
    ["\\(\\displaystyle\\int e^{f(x)}f'(x)\\,dx\\) equals:", ["\\(e^{f(x)}+c\\)", "\\(f(x)e^{f(x)}+c\\)", "\\(e^{f(x)}f(x)+c\\)", "\\(\\ln[f(x)]+c\\)"], 0],
    ["\\(\\displaystyle\\int\\cos x\\,dx\\) equals:", ["\\(\\sin x+c\\)", "\\(-\\sin x+c\\)", "\\(-\\cos x+c\\)", "\\(\\tan x+c\\)"], 0],
    ["\\(\\displaystyle\\int\\sin x\\,dx\\) equals:", ["\\(\\cos x+c\\)", "\\(-\\cos x+c\\)", "\\(-\\sin x+c\\)", "\\(\\sec x+c\\)"], 1],
    ["\\(\\displaystyle\\int\\sec^2x\\,dx\\) equals:", ["\\(\\sec x\\tan x+c\\)", "\\(\\tan x+c\\)", "\\(-\\cot x+c\\)", "\\(\\sec x+c\\)"], 1],
    ["\\(\\displaystyle\\int\\csc^2x\\,dx\\) equals:", ["\\(-\\cot x+c\\)", "\\(\\cot x+c\\)", "\\(-\\csc x+c\\)", "\\(\\csc x\\cot x+c\\)"], 0],
    ["\\(\\displaystyle\\int\\sec x\\tan x\\,dx\\) equals:", ["\\(\\sec x+c\\)", "\\(\\tan x+c\\)", "\\(-\\sec x+c\\)", "\\(\\sec^2x+c\\)"], 0],
    ["\\(\\displaystyle\\int\\csc x\\cot x\\,dx\\) equals:", ["\\(\\csc x+c\\)", "\\(-\\csc x+c\\)", "\\(\\cot x+c\\)", "\\(-\\cot x+c\\)"], 1],
    ["\\(\\displaystyle\\int\\tan x\\,dx\\) equals:", ["\\(\\ln|\\sec x|+c\\)", "\\(\\ln|\\sin x|+c\\)", "\\(-\\ln|\\sin x|+c\\)", "\\(\\sec x+c\\)"], 0],
    ["\\(\\displaystyle\\int\\cot x\\,dx\\) equals:", ["\\(\\ln|\\sec x|+c\\)", "\\(\\ln|\\sin x|+c\\)", "\\(-\\ln|\\cos x|+c\\)", "\\(\\csc x+c\\)"], 1],
    ["\\(\\displaystyle\\int\\sec x\\,dx\\) equals:", ["\\(\\ln|\\sec x+\\tan x|+c\\)", "\\(\\ln|\\sec x-\\tan x|+c\\)", "\\(\\sec x\\tan x+c\\)", "\\(\\tan x+c\\)"], 0],
    ["\\(\\displaystyle\\int\\csc x\\,dx\\) equals:", ["\\(\\ln|\\csc x+\\cot x|+c\\)", "\\(\\ln|\\csc x-\\cot x|+c\\)", "\\(-\\csc x\\cot x+c\\)", "\\(\\cot x+c\\)"], 1],
    ["To integrate \\(\\sin^2x\\), we use the identity:", ["\\(\\sin^2x=\\dfrac{1-\\cos2x}2\\)", "\\(\\sin^2x=\\dfrac{1+\\cos2x}2\\)", "\\(\\sin^2x=1-\\cos^2x\\) directly integrated", "\\(\\sin^2x=2\\sin x\\cos x\\)"], 0],
    ["\\(\\displaystyle\\int\\cos kx\\,dx\\ (k\\ne0)\\) equals:", ["\\(\\dfrac{\\sin kx}k+c\\)", "\\(k\\sin kx+c\\)", "\\(-\\dfrac{\\sin kx}k+c\\)", "\\(\\sin kx+c\\)"], 0],
    ["The method of integration by substitution is most useful when the integrand contains:", ["a function and its derivative together", "only constants", "only trigonometric functions", "only polynomials"], 0],
    ["If \\(x=a\\sin\\theta\\) is substituted, then \\(\\displaystyle\\int\\dfrac{dx}{\\sqrt{a^2-x^2}}\\) equals:", ["\\(\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\cos^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\dfrac1a\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)"], 0],
    ["\\(\\displaystyle\\int\\dfrac{dx}{a^2+x^2}\\) equals:", ["\\(\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\dfrac1a\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\dfrac1a\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)"], 1],
    ["\\(\\displaystyle\\int\\dfrac{dx}{\\sqrt{x^2-a^2}}\\) equals:", ["\\(\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+c\\)", "\\(\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\ln\\left|x+\\sqrt{x^2+a^2}\\right|+c\\)"], 0],
    ["\\(\\displaystyle\\int\\dfrac{dx}{\\sqrt{x^2+a^2}}\\) equals:", ["\\(\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+c\\)", "\\(\\ln\\left|x+\\sqrt{x^2+a^2}\\right|+c\\)", "\\(\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\dfrac1a\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)"], 1],
    ["To evaluate \\(\\displaystyle\\int2x\\cos(x^2)\\,dx\\), the most suitable substitution is:", ["\\(u=2x\\)", "\\(u=x^2\\)", "\\(u=\\cos x\\)", "\\(u=\\sin x\\)"], 1],
    ["If \\(u=g(x)\\) and \\(du=g'(x)\\,dx\\), then \\(\\displaystyle\\int f(g(x))g'(x)\\,dx\\) equals:", ["\\(\\displaystyle\\int f(u)\\,du\\)", "\\(f(u)\\)", "\\(\\displaystyle\\int f(x)\\,dx\\)", "\\(f'(u)\\)"], 0],
    ["\\(\\displaystyle\\int3x^2\\cos(x^3)\\,dx\\) equals:", ["\\(\\sin(x^3)+c\\)", "\\(3\\sin(x^3)+c\\)", "\\(-\\sin(x^3)+c\\)", "\\(\\cos(x^3)+c\\)"], 0],
    ["\\(\\displaystyle\\int\\dfrac{2x+3}{x^2+3x+2}\\,dx\\) equals:", ["\\(\\ln|x^2+3x+2|+c\\)", "\\((x^2+3x+2)+c\\)", "\\(2\\ln|x^2+3x+2|+c\\)", "\\(\\dfrac12\\ln|x^2+3x+2|+c\\)"], 0],
    ["\\(\\displaystyle\\int\\dfrac{e^{\\tan^{-1}x}}{1+x^2}\\,dx\\) equals:", ["\\(e^{\\tan^{-1}x}+c\\)", "\\(\\tan^{-1}x\\cdot e^x+c\\)", "\\(e^x+c\\)", "\\(\\ln(1+x^2)+c\\)"], 0],
    ["\\(\\displaystyle\\int\\dfrac{dx}{9+x^2}\\) equals:", ["\\(\\tan^{-1}\\left(\\dfrac{x}3\\right)+c\\)", "\\(\\dfrac13\\tan^{-1}\\left(\\dfrac{x}3\\right)+c\\)", "\\(\\sin^{-1}\\left(\\dfrac{x}3\\right)+c\\)", "\\(3\\tan^{-1}\\left(\\dfrac{x}3\\right)+c\\)"], 1],
    ["\\(\\displaystyle\\int\\dfrac{dx}{\\sqrt{4-x^2}}\\) equals:", ["\\(\\sin^{-1}\\left(\\dfrac{x}2\\right)+c\\)", "\\(\\dfrac12\\sin^{-1}\\left(\\dfrac{x}2\\right)+c\\)", "\\(\\tan^{-1}\\left(\\dfrac{x}2\\right)+c\\)", "\\(\\cos^{-1}\\left(\\dfrac{x}2\\right)+c\\)"], 0],
    ["The choice of substitution in an integral depends on:", ["the constant of integration", "the form of the given integral", "the sign of \\(x\\) only", "nothing; substitution is always \\(u=x\\)"], 1],
    ["\\(\\displaystyle\\int x\\sqrt{x^2+4}\\,dx\\) can be solved by the substitution:", ["\\(u=x\\)", "\\(u=x^2+4\\)", "\\(u=\\sqrt{x}\\)", "\\(u=4\\)"], 1],
    ["The formula for integration by parts is:", ["\\(\\int fg\\,dx=f\\int g\\,dx-\\int\\left[f'\\int g\\,dx\\right]dx\\)", "\\(\\int fg\\,dx=f'g'\\)", "\\(\\int fg\\,dx=\\int f\\,dx\\cdot\\int g\\,dx\\)", "\\(\\int fg\\,dx=fg-\\int fg\\,dx\\)"], 0],
    ["In integration by parts, the function chosen as the “first function” should generally be the one whose:", ["integral is hardest to find", "derivative simplifies the expression", "value is always 1", "degree is highest and cannot be reduced"], 1],
    ["For \\(\\displaystyle\\int xe^x\\,dx\\), the most suitable choice of first function is:", ["\\(e^x\\)", "\\(x\\)", "either works equally well by convention", "\\(xe^x\\)"], 1],
    ["For \\(\\displaystyle\\int\\ln x\\,dx\\) (writing it as \\(\\int(\\ln x)(1)\\,dx\\)), the first function should be taken as:", ["1", "\\(\\ln x\\)", "neither", "\\(x\\)"], 1],
    ["\\(\\displaystyle\\int xe^x\\,dx\\) equals:", ["\\(xe^x-e^x+c\\)", "\\(xe^x+e^x+c\\)", "\\(e^x+c\\)", "\\(x^2e^x+c\\)"], 0],
    ["If the integrand is a product of an inverse trigonometric function and a polynomial, the inverse trig function is usually chosen as the:", ["first function", "second function", "neither function", "only function to integrate"], 0],
    ["\\(\\displaystyle\\int x\\cos x\\,dx\\) equals:", ["\\(x\\sin x+\\cos x+c\\)", "\\(x\\sin x-\\cos x+c\\)", "\\(-x\\sin x+\\cos x+c\\)", "\\(x\\cos x+\\sin x+c\\)"], 0],
    ["Integration by parts is generally not suitable for evaluating:", ["\\(\\displaystyle\\int xe^x\\,dx\\)", "\\(\\displaystyle\\int x\\ln x\\,dx\\)", "\\(\\displaystyle\\int\\sqrt{x}\\sin x\\,dx\\)", "\\(\\displaystyle\\int x\\sin x\\,dx\\)"], 2],
    ["When applying integration by parts, we do not add an arbitrary constant while finding the integral of the:", ["first function", "second function", "both functions", "final answer"], 1],
    ["\\(\\displaystyle\\int\\ln x\\,dx\\) equals:", ["\\(x\\ln x-x+c\\)", "\\(x\\ln x+x+c\\)", "\\(\\ln x+c\\)", "\\(\\dfrac{(\\ln x)^2}2+c\\)"], 0],
    ["To evaluate \\(\\displaystyle\\int e^{ax}\\sin(bx)\\,dx\\), integration by parts must be applied:", ["once only", "twice, leading to an equation solvable for the integral", "three times", "it cannot be evaluated"], 1],
    ["\\(\\displaystyle\\int x\\tan^{-1}x\\,dx\\) requires taking the first function as:", ["\\(x\\)", "\\(\\tan^{-1}x\\)", "neither, since the integral does not exist", "1"], 1],
    ["The method of partial fractions is used to integrate:", ["trigonometric functions only", "a rational function \\(\\dfrac{P(x)}{Q(x)}\\)", "exponential functions only", "polynomials only"], 1],
    ["Partial fractions apply directly when the degree of the numerator is:", ["greater than the degree of the denominator", "less than the degree of the denominator", "equal to zero always", "undefined"], 1],
    ["If the degree of the numerator is greater than or equal to that of the denominator, we must first:", ["multiply both by \\(x\\)", "perform polynomial long division", "differentiate the expression", "ignore the numerator"], 1],
    ["For \\(\\dfrac{5x+6}{(x+1)(x+2)}\\), the partial fraction decomposition has the form:", ["\\(\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\)", "\\(\\dfrac{Ax+B}{(x+1)(x+2)}\\)", "\\(A(x+1)+B(x+2)\\)", "\\(\\dfrac{A}{(x+1)(x+2)}\\)"], 0],
    ["For a repeated linear factor \\((x+1)^3\\) in the denominator, the partial fraction decomposition includes terms:", ["\\(\\dfrac{A}{x+1}\\) only", "\\(\\dfrac{A}{x+1}+\\dfrac{B}{(x+1)^2}+\\dfrac{C}{(x+1)^3}\\)", "\\(\\dfrac{A}{(x+1)^3}\\) only", "\\(A(x+1)^3\\)"], 1],
    ["For an irreducible quadratic factor \\((x^2+1)\\) in the denominator, the numerator of its partial fraction is of the form:", ["\\(A\\)", "\\(Ax+B\\)", "\\(Ax^2\\)", "\\(A/x\\)"], 1],
    ["\\(\\displaystyle\\int\\dfrac1{(x+2)(x+3)}\\,dx\\) equals:", ["\\(\\ln|x+2|-\\ln|x+3|+c\\)", "\\(\\ln|x+2|+\\ln|x+3|+c\\)", "\\(\\ln|(x+2)(x+3)|+c\\)", "\\(\\dfrac1{(x+2)(x+3)}+c\\)"], 0],
    ["The constants in a partial fraction decomposition are typically found by:", ["differentiating both sides", "equating coefficients or substituting suitable values of \\(x\\)", "integrating both sides", "guessing randomly"], 1],
    ["\\(\\displaystyle\\int\\dfrac1{x^2-9}\\,dx\\) can be evaluated using partial fractions since \\(x^2-9\\) factors as:", ["\\((x-3)(x+3)\\)", "\\((x-9)(x+1)\\)", "it does not factor", "\\((x-3)^2\\)"], 0],
    ["For \\(\\dfrac{x^2+2x+4}{(x+1)^3}\\), the number of unknown constants required in the partial fraction decomposition is:", ["1", "2", "3", "4"], 2],
    ["A definite integral \\(\\displaystyle\\int_a^bf(x)\\,dx\\) represents:", ["a family of functions", "a specific number (the net signed area)", "a derivative", "an undefined quantity"], 1],
    ["In \\(\\displaystyle\\int_a^bf(x)\\,dx\\), the number \\(a\\) is called the:", ["integrand", "lower limit of integration", "upper limit of integration", "constant of integration"], 1],
    ["\\(\\displaystyle\\int_a^af(x)\\,dx\\) equals:", ["1", "\\(f(a)\\)", "0", "undefined"], 2],
    ["\\(\\displaystyle\\int_b^af(x)\\,dx\\) equals:", ["\\(\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(-\\displaystyle\\int_a^bf(x)\\,dx\\)", "0", "\\(f(a)-f(b)\\)"], 1],
    ["If \\(c\\) lies between \\(a\\) and \\(b\\), then \\(\\displaystyle\\int_a^bf(x)\\,dx\\) equals:", ["\\(\\int_a^cf(x)\\,dx-\\int_c^bf(x)\\,dx\\)", "\\(\\int_a^cf(x)\\,dx+\\int_c^bf(x)\\,dx\\)", "\\(\\int_a^cf(x)\\,dx\\cdot\\int_c^bf(x)\\,dx\\)", "\\(f(c)\\)"], 1],
    ["By the Fundamental Theorem of Calculus, if \\(F'(x)=f(x)\\), then \\(\\displaystyle\\int_a^bf(x)\\,dx\\) equals:", ["\\(F(a)-F(b)\\)", "\\(F(b)-F(a)\\)", "\\(F(a)+F(b)\\)", "\\(F(b)\\cdot F(a)\\)"], 1],
    ["\\(\\displaystyle\\int_1^3x\\,dx\\) equals:", ["2", "4", "8", "9"], 1],
    ["\\(\\displaystyle\\int_0^2(3x^2)\\,dx\\) equals:", ["4", "6", "8", "12"], 2],
    ["If \\(\\displaystyle\\int_1^4f(x)\\,dx=6\\) and \\(\\displaystyle\\int_1^2f(x)\\,dx=2\\), then \\(\\displaystyle\\int_2^4f(x)\\,dx\\) equals:", ["2", "4", "6", "8"], 1],
    ["\\(\\displaystyle\\int_a^bcf(x)\\,dx\\), where \\(c\\) is constant, equals:", ["\\(c\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(c+\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(\\dfrac1c\\displaystyle\\int_a^bf(x)\\,dx\\)"], 0],
    ["\\(\\dfrac{d}{dx}\\displaystyle\\int_a^xf(t)\\,dt\\) equals:", ["\\(f(a)\\)", "\\(f(x)\\)", "0", "\\(F(x)\\)"], 1],
    ["\\(\\displaystyle\\int_{-1}^1x^3\\,dx\\) equals:", ["0", "1", "2", "\\(-1\\)"], 0],
    ["If \\(f\\) is an even function, \\(\\displaystyle\\int_{-a}^af(x)\\,dx\\) equals:", ["0", "\\(2\\displaystyle\\int_0^af(x)\\,dx\\)", "\\(\\displaystyle\\int_0^af(x)\\,dx\\)", "\\(af(a)\\)"], 1],
    ["If \\(f\\) is an odd function, \\(\\displaystyle\\int_{-a}^af(x)\\,dx\\) equals:", ["0", "\\(2\\displaystyle\\int_0^af(x)\\,dx\\)", "\\(f(a)\\)", "\\(2f(a)\\)"], 0],
    ["The area bounded by \\(y=f(x)\\ge0\\), the x-axis, and the lines \\(x=a\\), \\(x=b\\) is:", ["\\(\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(f(b)-f(a)\\)", "\\(\\displaystyle\\int_a^bf'(x)\\,dx\\)", "\\(f(a)\\cdot f(b)\\)"], 0],
    ["The area between two curves \\(y=f(x)\\) and \\(y=g(x)\\), where \\(f(x)>g(x)\\) on \\([a,b]\\), is:", ["\\(\\displaystyle\\int_a^b[f(x)+g(x)]\\,dx\\)", "\\(\\displaystyle\\int_a^b[f(x)-g(x)]\\,dx\\)", "\\(\\displaystyle\\int_a^bf(x)\\,dx\\cdot\\int_a^bg(x)\\,dx\\)", "\\(f(b)-g(a)\\)"], 1],
    ["The area of the region bounded by \\(y=x^2\\), the x-axis, and the lines \\(x=0\\), \\(x=2\\) is:", ["\\(\\dfrac43\\)", "\\(\\dfrac83\\)", "4", "8"], 1],
    ["By the disc method, the volume of the solid formed by revolving \\(y=f(x)\\) about the x-axis on \\([a,b]\\) is:", ["\\(\\pi\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(\\pi\\displaystyle\\int_a^b[f(x)]^2\\,dx\\)", "\\(\\displaystyle\\int_a^b[f(x)]^2\\,dx\\)", "\\(2\\pi\\displaystyle\\int_a^bf(x)\\,dx\\)"], 1],
    ["When a region is revolved about the y-axis and \\(x=g(y)\\), the volume by the disc method is given by:", ["\\(\\pi\\displaystyle\\int_a^b[g(y)]^2\\,dy\\)", "\\(\\pi\\displaystyle\\int_a^bg(y)\\,dy\\)", "\\(\\displaystyle\\int_a^b[g(y)]^2\\,dy\\)", "\\(2\\pi\\displaystyle\\int_a^bg(y)\\,dy\\)"], 0],
    ["The volume of the solid formed by revolving \\(y=x\\) about the x-axis for \\(x\\in[0,2]\\) is:", ["\\(\\dfrac{8\\pi}3\\)", "\\(\\dfrac{4\\pi}3\\)", "\\(8\\pi\\)", "\\(4\\pi\\)"], 0],
    ["In economics, if \\(p_0\\) is the equilibrium price and \\(Q_0\\) the equilibrium quantity for demand function \\(D(x)\\), the consumer surplus is defined as the integral:", ["\\(\\displaystyle\\int_0^{Q_0}[D(x)-p_0]\\,dx\\)", "\\(\\displaystyle\\int_0^{Q_0}[p_0-D(x)]\\,dx\\)", "\\(\\displaystyle\\int_0^{Q_0}D(x)S(x)\\,dx\\)", "\\(D(Q_0)-p_0\\)"], 0],
    ["In economics, if \\(p_0\\) is the equilibrium price and \\(Q_0\\) the equilibrium quantity for supply function \\(S(x)\\), the producer surplus is defined as the integral:", ["\\(\\displaystyle\\int_0^{Q_0}[D(x)-S(x)]\\,dx\\)", "\\(\\displaystyle\\int_0^{Q_0}[p_0-S(x)]\\,dx\\)", "\\(\\displaystyle\\int_0^{Q_0}S(x)\\,dx-p_0\\)", "\\(S(p_0)-p_0\\)"], 1],
    ["If \\(v(t)\\) is the velocity function, the distance travelled between \\(t=a\\) and \\(t=b\\) (for \\(v(t)\\ge0\\)) is:", ["\\(\\displaystyle\\int_a^bv(t)\\,dt\\)", "\\(v(b)-v(a)\\)", "\\(\\displaystyle\\int_a^ba(t)\\,dt\\)", "\\(v(a)\\cdot v(b)\\)"], 0],
    ["The work done by a variable force \\(F(x)\\) in moving an object from \\(x=a\\) to \\(x=b\\) is:", ["\\(F(b)-F(a)\\)", "\\(\\displaystyle\\int_a^bF(x)\\,dx\\)", "\\(F(a)\\cdot F(b)\\)", "\\(\\dfrac{F(b)}{F(a)}\\)"], 1],
    ["By Hooke's Law, the force needed to stretch a spring \\(x\\) units beyond its natural length is:", ["\\(F(x)=kx\\)", "\\(F(x)=k/x\\)", "\\(F(x)=kx^2\\)", "\\(F(x)=k\\)"], 0],
    ["If \\(s(t)\\) is the position function, then the velocity \\(v(t)\\) can be recovered from acceleration \\(a(t)\\) using:", ["\\(v(t)=\\displaystyle\\int a(t)\\,dt\\)", "\\(v(t)=a'(t)\\)", "\\(v(t)=\\dfrac{a(t)}t\\)", "\\(v(t)=a(t)\\)"], 0],
    ["The area of the region enclosed between \\(y^2=4x\\) and a vertical line is most naturally computed by integrating with respect to:", ["\\(x\\) only", "\\(y\\)", "neither variable", "\\(t\\)"], 1],
    ["For finding the total revenue over time given a rate function \\(f(t)\\) (dollars/year), the total revenue over \\([0,T]\\) is:", ["\\(f(T)-f(0)\\)", "\\(\\displaystyle\\int_0^Tf(t)\\,dt\\)", "\\(f(T)\\cdot T\\)", "\\(f'(T)\\)"], 1]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Curves</th></tr><tr><td>\\(y=x^2\\) and \\(y=x+2\\)</td></tr></table>",
          questions: [
            ["The points of intersection of the two curves occur at \\(x=\\):", ["\\(-1\\) and 2", "1 and \\(-2\\)", "0 and 2", "\\(-1\\) and 1"], 0],
            ["On the interval between these intersection points, the curve on top (greater \\(y\\)) is:", ["\\(y=x+2\\)", "\\(y=x^2\\)", "they are equal throughout", "neither"], 0],
            ["The area between the curves is given by the integral:", ["\\(\\int_{-1}^{2}[(x+2)-x^2]\\,dx\\)", "\\(\\int_{-1}^{2}[x^2-(x+2)]\\,dx\\)", "\\(\\int_{-1}^{2}[x^2+(x+2)]\\,dx\\)", "\\(\\int_{0}^{2}[(x+2)-x^2]\\,dx\\)"], 0],
            ["The value of this area is:", ["\\(\\dfrac92\\)", "\\(\\dfrac{10}3\\)", "\\(\\dfrac76\\)", "9"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Region</th><th>Details</th></tr><tr><td>\\(y=\\sqrt{x}\\)</td><td>bounded by the x-axis, \\(x=0\\) to \\(x=4\\), revolved about the x-axis</td></tr></table>",
          questions: [
            ["\\([f(x)]^2\\) equals:", ["\\(x\\)", "\\(x^2\\)", "\\(\\sqrt{x}\\)", "\\(\\dfrac1x\\)"], 0],
            ["The volume integral is set up as:", ["\\(\\pi\\displaystyle\\int_0^4x\\,dx\\)", "\\(\\pi\\displaystyle\\int_0^4\\sqrt{x}\\,dx\\)", "\\(\\pi\\displaystyle\\int_0^4x^2\\,dx\\)", "\\(2\\pi\\displaystyle\\int_0^4x\\,dx\\)"], 0],
            ["Evaluating, \\(\\displaystyle\\int_0^4x\\,dx\\) equals:", ["8", "16", "4", "2"], 0],
            ["The volume of the solid is:", ["\\(8\\pi\\)", "\\(16\\pi\\)", "\\(4\\pi\\)", "\\(2\\pi\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Market</th><th>Function</th></tr><tr><td>Demand</td><td>\\(D(x)=100-2x\\)</td></tr><tr><td>Supply</td><td>\\(S(x)=20+3x\\)</td></tr></table>",
          questions: [
            ["The equilibrium quantity \\(Q_0\\) (where \\(D(x)=S(x)\\)) is:", ["16", "20", "10", "68"], 0],
            ["The equilibrium price \\(p_0\\) is:", ["68", "100", "20", "48"], 0],
            ["The consumer surplus \\(\\displaystyle\\int_0^{16}[D(x)-p_0]\\,dx\\) is:", ["256", "384", "512", "128"], 0],
            ["The producer surplus \\(\\displaystyle\\int_0^{16}[p_0-S(x)]\\,dx\\) is:", ["384", "256", "768", "192"], 0]
          ]
        }
      ],
      short: [],
      long: []
    }
  ]
};
