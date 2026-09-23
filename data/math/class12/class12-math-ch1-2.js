/*
  CLASS 12 — MATH — SHORT & LONG QUESTIONS — CHAPTERS 1 TO 2
  ------------------------------------------------------------
  Chapter 1: Functions and Graphs
  Chapter 2: Limit, Continuity and Derivative

  Source: curated "Important Questions" sheets (FBISE pattern, NBF
  textbook) for each chapter. Short/Long grouped by exercise. mcq stays
  empty here — MCQs for these chapters already live in
  class12-math-mcq-ch1-2-3.js.

  DATA FORMAT (same as class9 / class11 files):
    short / long: [ { exercise: "Ex X.Y (note)", questions: [ {text, answer}, ... ] }, ... ]

  MATH FORMATTING: inline math wrapped in \\( \\) for KaTeX.
*/
var CLASS12_MATH_CH1_2 = {
  chapters: [
    {
      id: 1,
      name: "Functions and Graphs",
      mcq: [],
      short: [
        {
          exercise: "Ex 1.1 (Q9 — domain and range of the inverse function)",
          questions: [
            { text: "Find the domain and range of the inverse function of \\(f(x)=4x-3\\).", answer: "\\(\\text{Dom }f^{-1}=\\mathbb{R},\\ \\text{Range }f^{-1}=\\mathbb{R}\\); \\(f^{-1}(x)=\\dfrac{x+3}{4}\\)" },
            { text: "Find the domain and range of the inverse function of \\(f(x)=\\dfrac{x}{x-5}\\).", answer: "\\(\\text{Dom }f^{-1}=\\mathbb{R}-\\{1\\},\\ \\text{Range }f^{-1}=\\mathbb{R}-\\{5\\}\\)" },
            { text: "Find the domain and range of the inverse function of \\(f(x)=\\dfrac{x+2}{x-1}\\).", answer: "\\(\\text{Dom }f^{-1}=\\mathbb{R}-\\{1\\},\\ \\text{Range }f^{-1}=\\mathbb{R}-\\{1\\}\\) (\\(f\\) is self-inverse)" },
            { text: "Find the domain and range of the inverse function of \\(f(x)=\\sqrt{x+2}\\).", answer: "\\(\\text{Dom }f^{-1}=[0,\\infty),\\ \\text{Range }f^{-1}=[-2,\\infty)\\)" },
            { text: "Find the domain and range of the inverse function of \\(f(x)=x^{2}+6,\\ x\\ge0\\).", answer: "\\(\\text{Dom }f^{-1}=[6,\\infty),\\ \\text{Range }f^{-1}=[0,\\infty)\\)" },
            { text: "Find the domain and range of the inverse function of \\(f(x)=\\dfrac{2x-1}{x+4}\\).", answer: "\\(\\text{Dom }f^{-1}=\\mathbb{R}-\\{2\\},\\ \\text{Range }f^{-1}=\\mathbb{R}-\\{-4\\}\\)" }
          ]
        },
        {
          exercise: "Ex 1.1 (Q3 — one-one / onto)",
          questions: [
            { text: "Let \\(A=\\{0,1,2,3\\}\\), \\(B=\\{p,q,r,s\\}\\) and \\(f=\\{(0,p),(1,q),(2,r),(3,s)\\}\\). Check whether \\(f\\) is one-one and onto.", answer: "\\(f\\) is one-one and onto (bijective)." }
          ]
        },
        {
          exercise: "Ex 1.1 (Q6 — type of a function)",
          questions: [
            { text: "Check the type of \\(g(x)=2x^{2}+3x+1\\) if \\(\\text{Dom }g=\\{0,1,2,3\\}\\) and the co-domain is \\(\\{1,6,15,28,35\\}\\).", answer: "\\(g\\) is an into function: the images are \\(1,6,15,28\\), so \\(35\\) has no pre-image." }
          ]
        },
        {
          exercise: "Ex 1.2 (Q5 — predict the function from its graph)",
          questions: [
            { text: "Predict the algebraic function whose graph is the line through \\((0,1)\\) and \\((-1,-1)\\).", answer: "\\(f(x)=2x+1\\)" },
            { text: "Predict the algebraic function whose graph is the parabola through \\((-1,1),\\ (1,1),\\ (0,-1)\\).", answer: "\\(f(x)=2x^{2}-1\\)" },
            { text: "Predict the algebraic function whose graph is the parabola with vertex \\((0,3)\\) passing through \\((-2,-1)\\) and \\((2,-1)\\).", answer: "\\(f(x)=3-x^{2}\\)" },
            { text: "Predict the algebraic function whose graph is the parabola through \\((-1,0)\\) and \\((0,1)\\) with \\(a=1\\).", answer: "\\(f(x)=(x+1)^{2}\\)" }
          ]
        },
        {
          exercise: "Ex 1.2 (Q6 — plot and find intercepts)",
          questions: [
            { text: "Plot the graph of \\(y=x^{2}-5x\\) and find its points of intersection with the axes.", answer: "\\(x\\)-intercepts: \\((0,0)\\) and \\((5,0)\\); \\(y\\)-intercept: \\((0,0)\\)." }
          ]
        },
        {
          exercise: "Ex 1.3 (Q1 — draw the graph; domain, range, features)",
          questions: [
            { text: "Draw the graph of \\(f(x)=e^{2x}\\) and state its domain and range.", answer: "Domain \\(=\\mathbb{R}\\), Range \\(=(0,\\infty)\\); passes through \\((0,1)\\); always increasing." },
            { text: "Draw the graph of \\(h(x)=2-e^{x}\\) and state its domain and range.", answer: "Domain \\(=\\mathbb{R}\\), Range \\(=(-\\infty,2)\\); \\(y\\)-intercept \\((0,1)\\); decreasing; asymptote \\(y=2\\)." },
            { text: "Draw the graph of \\(h(x)=1+e^{-2x}\\) and state its domain and range.", answer: "Domain \\(=\\mathbb{R}\\), Range \\(=(1,\\infty)\\); \\(y\\)-intercept \\((0,2)\\); decreasing; asymptote \\(y=1\\)." },
            { text: "Draw the graph of \\(g(x)=\\log(x+1)\\) and state its domain and range.", answer: "Domain: \\(x>-1\\), Range \\(=\\mathbb{R}\\); passes through \\((0,0)\\); increasing." },
            { text: "Draw the graphs of \\(f(x)=e^{0.6x}\\) and \\(g(x)=\\ln(0.6x)\\) and state their domains and ranges.", answer: "\\(f\\): Domain \\(\\mathbb{R}\\), Range \\((0,\\infty)\\). \\(g\\): Domain \\(x>0\\), Range \\(\\mathbb{R}\\). Both are increasing." }
          ]
        },
        {
          exercise: "Ex 1.3 (Q4, Q7 — doubling time)",
          questions: [
            { text: "A population grows at \\(1\\%\\) per year. Find its doubling time.", answer: "\\(t=\\dfrac{\\ln2}{\\ln1.01}\\approx69.7\\) years" },
            { text: "If \\(P(t)=P_0e^{kt}\\) with \\(k=10\\%\\) per year, find the doubling time.", answer: "\\(t=\\dfrac{\\ln2}{0.10}\\approx6.93\\) years" }
          ]
        },
        {
          exercise: "Ex 1.4 (Q1 — domain and range of trigonometric functions)",
          questions: [
            { text: "Find the domain and range of \\(g(x)=3\\cos\\dfrac{x}{3}\\).", answer: "Domain \\(=\\mathbb{R}\\), Range \\(=[-3,3]\\)" },
            { text: "Find the domain and range of \\(y=\\cot\\dfrac{x}{4}\\).", answer: "Domain: \\(x\\ne4n\\pi,\\ n\\in\\mathbb{Z}\\); Range \\(=\\mathbb{R}\\)" },
            { text: "Find the domain and range of \\(y=\\sin2x\\).", answer: "Domain \\(=\\mathbb{R}\\), Range \\(=[-1,1]\\)" }
          ]
        },
        {
          exercise: "Ex 1.4 (Q2 — check one-one; if so find the inverse)",
          questions: [
            { text: "Check whether \\(g(x)=x(x-5)\\) is one-one; if so, find its inverse.", answer: "Not one-one (fails the horizontal line test), so no inverse." },
            { text: "Check whether \\(f(x)=x^{3}-8\\) is one-one; if so, find its inverse.", answer: "One-one; \\(f^{-1}(x)=\\sqrt[3]{x+8}\\)" },
            { text: "Check whether \\(h(x)=\\dfrac{1}{3x+5}\\) is one-one; if so, find its inverse.", answer: "One-one; \\(h^{-1}(x)=\\dfrac{1-5x}{3x}\\)" },
            { text: "Check whether \\(h(x)=|x|\\) is one-one; if so, find its inverse.", answer: "Not one-one (\\(h(1)=h(-1)=1\\)), so no inverse." }
          ]
        },
        {
          exercise: "Examples (Ex 4, 7, 10, 13, 22)",
          questions: [
            { text: "Check whether \\(f(x)=2x^{2}+1\\) is one-one or not.", answer: "Not one-one (\\(f(1)=f(-1)=3\\))." },
            { text: "Find the inverse of \\(f(x)=\\dfrac{x}{x-2},\\ f:\\mathbb{R}\\to\\mathbb{R}\\), and prove that \\(f(f^{-1}(x))=x\\).", answer: "\\(f^{-1}(x)=\\dfrac{2x}{x-1}\\); \\(\\text{Dom }f=\\mathbb{R}-\\{2\\}=\\text{Range }f^{-1}\\)" },
            { text: "Draw the graph of \\(y=x^{2}-8x+12\\) using its factors.", answer: "\\(x\\)-intercepts \\((2,0),(6,0)\\); \\(y\\)-intercept \\((0,12)\\); vertex \\((4,-4)\\); opens upward." },
            { text: "Predict the function whose graph is a parabola through \\((2,0),\\ (-1,0),\\ (0,-4)\\).", answer: "\\(f(x)=2(x-2)(x+1)=2x^{2}-2x-4\\)" },
            { text: "Find the inverse of \\(f(x)=\\dfrac{1}{2x-3},\\ x\\ne\\dfrac32\\).", answer: "\\(f^{-1}(x)=\\dfrac{1+3x}{2x}\\)" }
          ]
        },
        {
          exercise: "Review Exercise (Q1 — choose the correct option)",
          questions: [
            { text: "The value of \\(\\log_{5}125\\) is:", answer: "\\(3\\)" },
            { text: "The function \\(f(x)=x+1,\\ f:\\{1,2,3\\}\\to\\{2,3,4\\}\\) is:", answer: "Both one-to-one and onto (bijective)." },
            { text: "The inverse function of \\(f(x)=x^{3}\\) is:", answer: "\\(f^{-1}(x)=\\sqrt[3]{x}\\)" },
            { text: "The inverse function of \\(f(x)=\\dfrac{1}{x},\\ x\\ne0\\), is:", answer: "\\(f^{-1}(x)=\\dfrac{1}{x}\\)" },
            { text: "The effect on the graph of \\(f(x)\\) when it is replaced by \\(f(x+2)\\) is:", answer: "It shifts \\(2\\) units to the left." }
          ]
        },
        {
          exercise: "Review Exercise (Q2, Q3 — domain and range)",
          questions: [
            { text: "Find the domain of \\(f(x)=\\sqrt{x^{2}-5x+4}\\).", answer: "\\(x\\le1\\) or \\(x\\ge4\\)" },
            { text: "Find the domain and range of \\(f(x)=3+\\sqrt{4-x^{2}}\\).", answer: "Domain \\(=[-2,2]\\), Range \\(=[3,5]\\)" }
          ]
        },
        {
          exercise: "Review Exercise (Q6, Q8 — inverse and application)",
          questions: [
            { text: "Find the domain and range of the inverse of \\(f(x)=\\log(x^{2}+1)\\).", answer: "\\(\\text{Dom }f^{-1}=[0,\\infty),\\ \\text{Range }f^{-1}=\\mathbb{R}\\)" },
            { text: "If \\(P(t)=1000e^{0.05t}\\), after how many years will the population reach \\(5000\\)?", answer: "\\(t=\\dfrac{\\ln5}{0.05}\\approx32.19\\) years" }
          ]
        },
        {
          exercise: "Extra Practice (similar pattern)",
          questions: [
            { text: "Find the domain and range of the inverse of \\(f(x)=\\dfrac{3x-1}{x+2}\\).", answer: "\\(\\text{Dom }f^{-1}=\\mathbb{R}-\\{3\\},\\ \\text{Range }f^{-1}=\\mathbb{R}-\\{-2\\}\\)" },
            { text: "Check whether \\(f(x)=5x-7\\) is one-one, and find its inverse.", answer: "One-one; \\(f^{-1}(x)=\\dfrac{x+7}{5}\\)" },
            { text: "Predict the function whose graph is the line through \\((0,-2)\\) and \\((2,2)\\).", answer: "\\(f(x)=2x-2\\)" },
            { text: "A radioactive substance decays as \\(N(t)=200(0.5)^{t/5}\\). Find its half-life.", answer: "Half-life \\(=5\\) years." },
            { text: "Find the domain of \\(f(x)=\\dfrac{\\sqrt{x+3}}{x-1}\\).", answer: "Domain \\(=[-3,1)\\cup(1,\\infty)\\)" }
          ]
        }
      ],
      long: [
        {
          exercise: "Ex 1.1, Q.8 (show that the function is bijective)",
          questions: [
            { text: "If \\(f:A\\to B,\\ f(x)=\\dfrac{x-2}{x-3}\\), where \\(A=\\mathbb{R}-\\{3\\}\\) and \\(B=\\mathbb{R}-\\{1\\}\\), show that \\(f\\) is bijective.", answer: "One-one (from \\(f(x_1)=f(x_2)\\Rightarrow x_1=x_2\\)) and onto (solving \\(y=f(x)\\) for \\(x\\) gives \\(f^{-1}(y)=\\dfrac{3y-2}{y-1}\\)); hence bijective." }
          ]
        },
        {
          exercise: "Ex 1.2, Q.9 (supply and demand — equilibrium)",
          questions: [
            { text: "The supply function is \\(S(x)=2x+10\\) and the demand function is \\(D(x)=-3x+40\\). Find the equilibrium point.", answer: "\\(x=6\\), price \\(=22\\); equilibrium point \\((6,22)\\)." }
          ]
        },
        {
          exercise: "Ex 1.2, Q.10 (intersection of a path and a wall)",
          questions: [
            { text: "The height of an object is \\(h(t)=-6t^{2}+10t+5\\) and a wall is given by \\(h(t)=9t\\). Find when and where the object meets the wall.", answer: "\\(-6t^{2}+10t+5=9t\\Rightarrow 6t^{2}-t-5=0\\Rightarrow t=1\\) s (rejecting \\(t=-\\tfrac56\\)); height \\(=9\\) m, i.e. the point \\((1,9)\\)." }
          ]
        },
        {
          exercise: "Ex 1.3, Q.2 (exponential growth — CD sales)",
          questions: [
            { text: "\\(N(t)=7.5(6)^{0.5t}\\) million CDs. Find (a) the time for \\(1\\) billion CDs, (b) the doubling time.", answer: "(a) \\(t\\approx5.46\\) years. (b) Doubling time \\(\\approx0.77\\) years." }
          ]
        },
        {
          exercise: "Ex 1.3, Q.3 (compound growth)",
          questions: [
            { text: "\\(A(t)=50{,}000(1.06)^{t}\\). Find (a) the time to reach Rs. \\(450{,}000\\), (b) the doubling time.", answer: "(a) \\(t\\approx37.7\\) years. (b) Doubling time \\(\\approx11.9\\) years." }
          ]
        },
        {
          exercise: "Ex 1.3, Q.5 (world population)",
          questions: [
            { text: "World population was \\(5.2\\) billion in 1990 and grows at \\(1.6\\%\\) per year. (a) Write the model \\(P(t)\\). (b) Find \\(P(2000)\\). (c) When will the population be \\(8\\) billion?", answer: "(a) \\(P(t)=5.2(1.016)^{t}\\). (b) \\(P(2000)\\approx6.09\\) billion. (c) About the year \\(2017\\)." }
          ]
        },
        {
          exercise: "Ex 1.3, Q.6 (logarithmic model — test scores)",
          questions: [
            { text: "\\(S(t)=68-20\\log(t+1)\\) is the average test score after \\(t\\) months. Find (a) \\(S(0)\\), (b) \\(S(4)\\) and \\(S(24)\\), (d) the time when the score is \\(50\\).", answer: "(a) \\(S(0)=68\\). (b) \\(S(4)\\approx54\\), \\(S(24)\\approx40\\). (d) \\(t\\approx6.94\\) months." }
          ]
        },
        {
          exercise: "Ex 1.3, Q.8 (exponential decay — cans in use)",
          questions: [
            { text: "\\(N(t)=250{,}000\\left(\\dfrac23\\right)^{t}\\) cans are still in use after \\(t\\) years. Find when (a) \\(N=60{,}000\\), (b) \\(N=1{,}000\\).", answer: "(a) \\(t\\approx3.52\\) years. (b) \\(t\\approx13.62\\) years." }
          ]
        },
        {
          exercise: "Example 16 (solve graphically)",
          questions: [
            { text: "Solve \\(f(x)=3x+4\\) and \\(g(x)=5+3x-2x^{2}\\) graphically.", answer: "Solution set \\(=\\{(-0.7,\\,1.9),\\ (0.7,\\,6.1)\\}\\)" }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Limit, Continuity and Derivative",
      mcq: [],
      short: [
        {
          exercise: "Ex 2.1 (Example 3 — evaluate the limit)",
          questions: [
            { text: "Evaluate: \\(\\lim_{x\\to3}15\\)", answer: "\\(15\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to5}10x\\)", answer: "\\(50\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to5}(x^{2}-5x+6)\\)", answer: "\\(6\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to-1}\\dfrac{3x-1}{6x+2}\\)", answer: "\\(1\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to1}\\dfrac{x-1}{x^{2}+x-2}\\)", answer: "\\(\\dfrac13\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to2}(3x-2)^{6}\\)", answer: "\\(4096\\)" }
          ]
        },
        {
          exercise: "Ex 2.1 (Example 4 — evaluate the limit)",
          questions: [
            { text: "Evaluate: \\(\\lim_{x\\to5}\\dfrac{4x+5}{x^{2}-25}\\)", answer: "Does not exist (numerator \\(\\to25\\), denominator \\(\\to0\\))." },
            { text: "Evaluate: \\(\\lim_{x\\to-8}\\dfrac{x-\\sqrt[3]{x}}{2x+10}\\)", answer: "\\(1\\)" }
          ]
        },
        {
          exercise: "Ex 2.1 (Q1 — use a graph to find the limit)",
          questions: [
            { text: "Use a graph to find \\(\\lim_{x\\to5}\\sqrt{x-1}\\).", answer: "\\(2\\)" },
            { text: "Find \\(\\lim_{x\\to2}f(x)\\) where \\(f(x)=\\begin{cases}x,&x<2\\\\x+1,&x\\ge2\\end{cases}\\)", answer: "Does not exist (LHL \\(=2\\), RHL \\(=3\\))." },
            { text: "Use a graph to find \\(\\lim_{x\\to0}\\dfrac{1-\\cos x}{x^{2}}\\).", answer: "\\(\\dfrac12\\)" }
          ]
        },
        {
          exercise: "Ex 2.1 (Q3–Q13 — evaluate the limit)",
          questions: [
            { text: "Evaluate: \\(\\lim_{x\\to-2}\\dfrac{x^{3}+8}{x+2}\\)", answer: "\\(12\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to0}\\dfrac{x^{2}-6x}{x^{2}-7x+6}\\)", answer: "\\(0\\)" },
            { text: "Evaluate: \\(\\lim_{y\\to1}\\dfrac{y^{3}-1}{y-1}\\)", answer: "\\(3\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to2}(x-4)^{4}(x^{2}-3)^{10}\\)", answer: "\\(16\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to-3}\\dfrac{2x+6}{4x^{2}-36}\\)", answer: "\\(-\\dfrac{1}{12}\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to0}\\dfrac{\\tan x}{x}\\)", answer: "\\(1\\)" },
            { text: "Evaluate: \\(\\lim_{x\\to0}\\dfrac{x}{\\sin3x}\\)", answer: "\\(\\dfrac13\\)" }
          ]
        },
        {
          exercise: "Ex 2.2 (Example 7 — value for continuity)",
          questions: [
            { text: "Let \\(f(x)=\\dfrac{x^{2}+x-6}{x^{2}-4},\\ x\\ne2\\). Define \\(f(2)\\) so that \\(f\\) is continuous at \\(2\\).", answer: "\\(f(2)=\\dfrac54\\)" }
          ]
        },
        {
          exercise: "Ex 2.2 (Q4, Q5, Q7, Q8 — discontinuities)",
          questions: [
            { text: "Find the points of discontinuity of \\(f(x)=\\dfrac{x^{2}-1}{x^{4}-1}\\).", answer: "Removable discontinuities at \\(x=1\\) and \\(x=-1\\)." },
            { text: "Find the points of discontinuity of \\(f(x)=\\dfrac{x-1}{\\sin2x}\\).", answer: "Discontinuous at \\(x=\\dfrac{n\\pi}{2},\\ n\\in\\mathbb{Z}\\)." },
            { text: "Discuss the continuity of \\(f(x)=\\begin{cases}\\dfrac{\\sin x}{x},&x\\ne0\\\\ \\dfrac12,&x=0\\end{cases}\\)", answer: "Discontinuous at \\(x=0\\) (removable): \\(\\lim_{x\\to0}f(x)=1\\ne f(0)=\\dfrac12\\)." },
            { text: "Discuss the continuity of \\(f(x)=\\begin{cases}\\dfrac{x^{2}-36}{x-6},&x\\ne6\\\\12,&x=6\\end{cases}\\)", answer: "Continuous everywhere (\\(\\lim_{x\\to6}f(x)=12=f(6)\\))." }
          ]
        },
        {
          exercise: "Ex 2.2 (Q12–Q14 — continuity on an interval)",
          questions: [
            { text: "Is \\(f(x)=\\sqrt{x^{2}-9}\\) continuous on (a) \\([-3,3]\\), (b) \\([3,\\infty)\\)?", answer: "(a) Not continuous (undefined for \\(-3<x<3\\)). (b) Continuous." },
            { text: "Is \\(f(x)=\\dfrac{x}{x^{3}+8}\\) continuous on (a) \\([-4,-3]\\), (b) \\([-10,10]\\)?", answer: "(a) Continuous. (b) Not continuous (undefined at \\(x=-2\\))." },
            { text: "Is \\(f(x)=\\sin\\dfrac1x\\) continuous on (a) \\(\\left[\\dfrac1\\pi,5\\right]\\), (b) \\(\\left[\\dfrac\\pi2,\\dfrac{3\\pi}{2}\\right]\\)?", answer: "(a) Continuous. (b) Continuous." }
          ]
        },
        {
          exercise: "Ex 2.2 (Q15–Q18 — find constants for continuity)",
          questions: [
            { text: "Find \\(m\\) so that \\(f(x)=\\begin{cases}mx,&x<4\\\\x^{2},&x\\ge4\\end{cases}\\) is continuous at \\(x=4\\).", answer: "\\(m=4\\)" },
            { text: "Find \\(m\\) so that \\(f(x)=\\begin{cases}\\dfrac{x^{2}-4}{x-2},&x\\ne2\\\\m,&x=2\\end{cases}\\) is continuous at \\(x=2\\).", answer: "\\(m=4\\)" },
            { text: "Find \\(m\\) and \\(n\\) so that \\(f(x)=\\begin{cases}mx,&x<3\\\\n,&x=3\\\\-2x+9,&x>3\\end{cases}\\) is continuous at \\(x=3\\).", answer: "\\(m=1,\\ n=3\\)" },
            { text: "Find \\(m\\) and \\(n\\) so that \\(f(x)=\\begin{cases}mx-n,&x<1\\\\5,&x=1\\\\2mx+n,&x>1\\end{cases}\\) is continuous at \\(x=1\\).", answer: "\\(m=\\dfrac{10}{3},\\ n=-\\dfrac53\\)" }
          ]
        },
        {
          exercise: "Ex 2.3 (Q1–Q5 — slope of the tangent)",
          questions: [
            { text: "Find the slope of the tangent to \\(f(x)=2x-1\\) at \\((4,7)\\).", answer: "\\(2\\)" },
            { text: "Find the slope of the tangent to \\(f(x)=-\\dfrac12x+3\\) at \\((a,f(a))\\).", answer: "\\(-\\dfrac12\\)" },
            { text: "Find the slope of the tangent to \\(f(x)=x^{2}+4\\) at \\((-1,5)\\).", answer: "\\(-2\\)" },
            { text: "Find the slope of the tangent to \\(f(x)=x^{3}\\) at \\((1,f(1))\\).", answer: "\\(3\\)" }
          ]
        },
        {
          exercise: "Ex 2.3 (Q8, Q10, Q11 — rates of change)",
          questions: [
            { text: "Find the average rate of change of \\(f(x)=\\cos x\\) on \\([-\\pi,\\pi]\\).", answer: "\\(0\\)" },
            { text: "Find the instantaneous velocity of \\(f(t)=t^{2}+\\dfrac{1}{5t+1}\\) at \\(t=0\\).", answer: "\\(-5\\)" },
            { text: "A body falls with \\(s(t)=122.5-4.9t^{2}\\). Find (i) the velocity at \\(t=\\tfrac12\\), (ii) the time to hit the ground, (iii) the impact velocity.", answer: "(i) \\(-4.9\\) m/s (ii) \\(t=5\\) s (iii) \\(-49\\) m/s" }
          ]
        },
        {
          exercise: "Ex 2.4 (Q3, Q4 — differentiate)",
          questions: [
            { text: "Find \\(f'(x)\\) if \\(f(x)=x^{2}(x^{3}+5)\\).", answer: "\\(f'(x)=5x^{4}+10x\\)" },
            { text: "Find \\(f'(x)\\) if \\(f(x)=-3x^{-8}+2\\sqrt{x}\\).", answer: "\\(f'(x)=\\dfrac{24}{x^{9}}+\\dfrac{1}{\\sqrt{x}}\\)" },
            { text: "Find \\(f'(x)\\) if \\(f(x)=x^{24}+2x^{1/3}+3x^{8}+9x^{4}\\).", answer: "\\(f'(x)=24x^{23}+\\dfrac23x^{-2/3}+24x^{7}+36x^{3}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac{x+2x^{3/2}}{\\sqrt{x}}\\).", answer: "\\(\\dfrac{dy}{dx}=\\dfrac{1}{2\\sqrt{x}}+2\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=(4x^{2}-3)(7x^{2}+x)\\).", answer: "\\(\\dfrac{dy}{dx}=112x^{3}+12x^{2}-42x-3\\)" }
          ]
        },
        {
          exercise: "Ex 2.5 (product and quotient rules)",
          questions: [
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac1x\\).", answer: "\\(-\\dfrac{1}{x^{2}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=(7x+1)(x^{4}-x^{3}-9x)\\).", answer: "\\(35x^{4}-24x^{3}-3x^{2}-126x-9\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac{3x+4}{x^{2}+1}\\).", answer: "\\(\\dfrac{-3x^{2}-8x+3}{(x^{2}+1)^{2}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\left(\\dfrac1x+\\dfrac{1}{x^{2}}\\right)(3x^{3}+27)\\).", answer: "\\(6x+3-\\dfrac{27}{x^{2}}-\\dfrac{54}{x^{3}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac{2-3x}{7-x}\\).", answer: "\\(\\dfrac{-19}{(7-x)^{2}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac{x^{4}+2x^{3}-1}{x^{2}}\\).", answer: "\\(2x+2+\\dfrac{2}{x^{3}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac{10}{(x^{3}-10)^{9}}\\).", answer: "\\(\\dfrac{-270x^{2}}{(x^{3}-10)^{10}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac{(x+1)^{2}}{(x-1)^{2}}\\).", answer: "\\(\\dfrac{-4(x+1)}{(x-1)^{3}}\\)" },
            { text: "Find the slope of \\(y=\\dfrac{54}{x^{2}+1}\\) at \\(x=2\\).", answer: "\\(-\\dfrac{216}{25}=-8.64\\)" },
            { text: "Find the slope of \\(y=\\dfrac{2x+5}{x+2}\\) at \\(x=1\\).", answer: "\\(-\\dfrac19\\)" },
            { text: "Find the slope of \\(y=(2\\sqrt{x}+1)(x^{3}-6)\\) at \\(x=0\\).", answer: "Undefined (the derivative contains \\(\\dfrac{1}{\\sqrt{x}}\\), which is not defined at \\(x=0\\))." }
          ]
        },
        {
          exercise: "Ex 2.6 (trigonometric and inverse trigonometric derivatives)",
          questions: [
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=(x^{2}+\\sin x)\\sec x\\).", answer: "\\((2x+\\cos x)\\sec x+(x^{2}+\\sin x)\\sec x\\tan x\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac{\\sec x}{1+\\tan x}\\).", answer: "\\(\\dfrac{\\sec x(\\tan x-1)}{(1+\\tan x)^{2}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac{\\sin x}{x^{2}+\\sin x}\\).", answer: "\\(\\dfrac{x(x\\cos x-2\\sin x)}{(x^{2}+\\sin x)^{2}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=(1+\\cos x)(x-\\sin x)\\).", answer: "\\(-x\\sin x+2\\sin^{2}x\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=x\\sin^{-1}x+x\\cos^{-1}x\\).", answer: "\\(\\dfrac{\\pi}{2}\\) (since \\(\\sin^{-1}x+\\cos^{-1}x=\\dfrac\\pi2\\))" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\dfrac{1}{\\tan^{-1}(x^{2})}\\).", answer: "\\(\\dfrac{-2x}{(1+x^{4})\\left(\\tan^{-1}x^{2}\\right)^{2}}\\)" }
          ]
        },
        {
          exercise: "Ex 2.7 (chain rule, implicit, exponential and logarithmic)",
          questions: [
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\left(x-\\dfrac{1}{x^{2}}\\right)^{5}\\).", answer: "\\(5\\left(x-\\dfrac{1}{x^{2}}\\right)^{4}\\left(1+\\dfrac{2}{x^{3}}\\right)\\)" },
            { text: "Find \\(f'(\\theta)\\) if \\(f(\\theta)=(2\\theta+1)^{3}\\tan^{2}\\theta\\).", answer: "\\(6(2\\theta+1)^{2}\\tan^{2}\\theta+2(2\\theta+1)^{3}\\tan\\theta\\sec^{2}\\theta\\)" },
            { text: "Find \\(f'(x)\\) if \\(f(x)=(\\sec4x+\\tan2x)^{5}\\).", answer: "\\(5(\\sec4x+\\tan2x)^{4}(4\\sec4x\\tan4x+2\\sec^{2}2x)\\)" },
            { text: "Find \\(h'(t)\\) if \\(h(t)=\\dfrac{t+\\sin4t}{10+\\cos3t}\\).", answer: "\\(\\dfrac{(1+4\\cos4t)(10+\\cos3t)+3\\sin3t\\,(t+\\sin4t)}{(10+\\cos3t)^{2}}\\)" },
            { text: "Find \\(f'(x)\\) if \\(f(x)=\\tan\\left(\\cos\\dfrac x2\\right)\\).", answer: "\\(-\\dfrac12\\sin\\dfrac x2\\,\\sec^{2}\\left(\\cos\\dfrac x2\\right)\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(x^{3}y^{2}=2x^{2}+y^{2}\\).", answer: "\\(\\dfrac{4x-3x^{2}y^{2}}{2y(x^{3}-1)}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(xy=\\sin x+y\\).", answer: "\\(\\dfrac{\\cos x-y}{x-1}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\ln\\left(x+\\sqrt{x^{2}+1}\\right)\\).", answer: "\\(\\dfrac{1}{\\sqrt{x^{2}+1}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=e^{-3x}\\cos x\\).", answer: "\\(-e^{-3x}(3\\cos x+\\sin x)\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(x=\\dfrac{\\theta^{2}-1}{\\theta^{2}+1},\\ y=\\dfrac{\\theta-1}{\\theta+1}\\).", answer: "\\(\\dfrac{(\\theta^{2}+1)^{2}}{2\\theta(\\theta+1)^{2}}\\)" },
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(x=\\sin2\\theta,\\ y=\\cos4\\theta\\).", answer: "\\(-4\\sin2\\theta\\)" },
            { text: "Find \\(\\Delta y\\) and \\(dy\\) for \\(y=\\sin x\\).", answer: "\\(\\Delta y=\\sin(x+\\Delta x)-\\sin x\\); \\(dy=\\cos x\\,dx\\)" },
            { text: "Use differentials to approximate \\(\\sqrt{37}\\).", answer: "\\(\\approx6.083\\)" },
            { text: "Use differentials to approximate \\(\\sin31^\\circ\\).", answer: "\\(\\approx0.515\\)" },
            { text: "(Example 36) Find \\(\\dfrac{dy}{dx}\\) if \\(x=\\dfrac{1-t^{2}}{1+t^{2}},\\ y=\\dfrac{2t}{1+t^{2}}\\).", answer: "\\(\\dfrac{t^{2}-1}{2t}\\)" },
            { text: "(Example 37a) Find \\(\\Delta y\\) and \\(dy\\) for \\(y=5x^{2}+4x+1\\).", answer: "\\(\\Delta y=(10x+4)\\Delta x+5(\\Delta x)^{2}\\); \\(dy=(10x+4)\\,dx\\)" }
          ]
        },
        {
          exercise: "Ex 2.8 (higher order derivatives)",
          questions: [
            { text: "Find \\(y''\\) if \\(y=2x^{6}+5x^{3}-6x^{2}\\).", answer: "\\(y''=60x^{4}+30x-12\\)" },
            { text: "Find \\(f''(x)\\) if \\(f(x)=(x^{2}+5x-1)^{4}\\).", answer: "\\(4(x^{2}+5x-1)^{2}(14x^{2}+70x+73)\\)" },
            { text: "Find \\(f''(\\theta)\\) if \\(f(\\theta)=\\sin^{2}5\\theta\\).", answer: "\\(50\\cos10\\theta\\)" },
            { text: "Find \\(\\dfrac{d^{5}y}{dx^{5}}\\) if \\(y=\\dfrac2x\\).", answer: "\\(-\\dfrac{240}{x^{6}}\\)" },
            { text: "Find \\(f'''(x)\\) if \\(f(x)=\\cos(\\pi x)\\).", answer: "\\(\\pi^{3}\\sin(\\pi x)\\)" },
            { text: "Find \\(f^{(4)}(x)\\) if \\(f(x)=\\dfrac{1}{\\sec(2x+1)}\\).", answer: "\\(16\\cos(2x+1)\\)" },
            { text: "If \\(f(x)=x^{3}+2x\\): (a) find \\(f'\\) and \\(f''\\); (b) verify \\(f''\\) using the definition of the derivative.", answer: "\\(f'(x)=3x^{2}+2,\\ f''(x)=6x\\); the definition also gives \\(f''(x)=6x\\)." },
            { text: "Show that \\(\\dfrac{d^{2}}{dx^{2}}(fg)=f''g+2f'g'+fg''\\) and write the analogous result for the third derivative.", answer: "Apply the product rule twice. Third derivative: \\((fg)'''=f'''g+3f''g'+3f'g''+fg'''\\) (Leibniz rule)." }
          ]
        },
        {
          exercise: "Ex 2.9 (Q1 — critical values)",
          questions: [
            { text: "Find the critical values of \\(f(x)=\\dfrac{x}{x^{2}+2}\\).", answer: "\\(x=\\pm\\sqrt2\\)" },
            { text: "Find the critical values of \\(f(x)=(4x-3)^{1/3}\\).", answer: "\\(x=\\dfrac34\\)" },
            { text: "Find the critical values of \\(f(x)=x^{2}(x+1)^{3}\\).", answer: "\\(x=0,\\ -1,\\ -\\dfrac25\\)" }
          ]
        },
        {
          exercise: "Ex 2.9 (Q2 — absolute extrema)",
          questions: [
            { text: "Find the absolute extrema of \\(f(x)=x^{2/3}\\) on \\([-1,8]\\).", answer: "Maximum \\(=4\\) at \\(x=8\\); minimum \\(=0\\) at \\(x=0\\)." },
            { text: "Find the absolute extrema of \\(f(x)=x^{3}-6x^{2}+2\\) on \\([-3,2]\\).", answer: "Maximum \\(=2\\) at \\(x=0\\); minimum \\(=-79\\) at \\(x=-3\\)." },
            { text: "Find the absolute extrema of \\(f(x)=2\\cos2x-4\\cos x\\) on \\([0,2\\pi]\\).", answer: "Maximum \\(=6\\) at \\(x=\\pi\\); minimum \\(=-3\\) at \\(x=\\dfrac\\pi3,\\ \\dfrac{5\\pi}{3}\\)." }
          ]
        },
        {
          exercise: "Ex 2.9 (Q3 — concavity)",
          questions: [
            { text: "Find the intervals of concavity of \\(f(x)=-x^{3}+6x^{2}+x-1\\).", answer: "Concave up on \\((-\\infty,2)\\); concave down on \\((2,\\infty)\\)." },
            { text: "Find the intervals of concavity of \\(f(x)=x^{1/2}+2x\\).", answer: "Concave downward on its entire domain \\((0,\\infty)\\)." },
            { text: "Find the intervals of concavity of \\(f(x)=x+\\dfrac9x\\).", answer: "Concave up on \\((0,\\infty)\\); concave down on \\((-\\infty,0)\\)." }
          ]
        },
        {
          exercise: "Ex 2.9 (Q4 — points of inflection)",
          questions: [
            { text: "Find the points of inflection of \\(f(x)=x^{5/3}+4x\\).", answer: "Point of inflection at \\((0,0)\\)." },
            { text: "Find the points of inflection of \\(f(x)=x-\\sin x\\).", answer: "\\((n\\pi,\\ n\\pi),\\ n\\in\\mathbb{Z}\\)" },
            { text: "Find the points of inflection of \\(f(x)=\\tan x\\).", answer: "\\((n\\pi,\\ 0),\\ n\\in\\mathbb{Z}\\)" }
          ]
        },
        {
          exercise: "Ex 2.9 (Q5 — relative extrema by the second derivative test)",
          questions: [
            { text: "Find the relative extrema of \\(f(x)=6x^{5}-10x^{2}\\).", answer: "Relative maximum \\(f(0)=0\\); relative minimum \\(\\approx-4.58\\) at \\(x\\approx0.874\\)." },
            { text: "Find the relative extrema of \\(f(x)=x^{2}+\\dfrac{1}{x^{2}}\\).", answer: "Relative minimum \\(=2\\) at \\(x=1\\) and \\(x=-1\\)." },
            { text: "Find the relative extrema of \\(f(x)=\\cos3x\\) on \\([0,2\\pi]\\).", answer: "Relative maximum \\(=1\\) at \\(x=0,\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3},2\\pi\\); relative minimum \\(=-1\\) at \\(x=\\dfrac\\pi3,\\pi,\\dfrac{5\\pi}{3}\\)." },
            { text: "Find the relative extrema of \\(f(x)=\\cos x+\\sin x\\) on \\([0,2\\pi]\\).", answer: "Relative maximum \\(=\\sqrt2\\) at \\(x=\\dfrac\\pi4\\); relative minimum \\(=-\\sqrt2\\) at \\(x=\\dfrac{5\\pi}{4}\\)." }
          ]
        },
        {
          exercise: "Ex 2.9 (Q6 — does a relative extremum occur at the given point?)",
          questions: [
            { text: "Does \\(f(x)=\\tan^{2}x\\) have a relative extremum at \\(x=\\pi\\)?", answer: "Yes, a relative minimum, \\(f(\\pi)=0\\)." },
            { text: "Does \\(f(x)=(1+\\sin x)^{3}\\) have a relative extremum at \\(x=\\dfrac\\pi8\\)?", answer: "No, because \\(f'\\left(\\dfrac\\pi8\\right)\\approx5.3\\ne0\\)." }
          ]
        },
        {
          exercise: "Ex 2.10 (applications of derivatives)",
          questions: [
            { text: "Einstein's mass formula is \\(m=\\dfrac{m_0}{\\sqrt{1-v^{2}/c^{2}}}\\). What happens to \\(m\\) as \\(v\\to c^{-}\\)?", answer: "\\(m\\to\\infty\\) (the mass becomes infinitely large)." },
            { text: "Find \\(k\\) so that \\(f(x)=\\begin{cases}kx+1,&x\\le3\\\\2-kx,&x>3\\end{cases}\\) is continuous.", answer: "\\(k=\\dfrac16\\)" },
            { text: "If \\(v=\\dfrac{4\\pi}{3}r^{3}\\), find the surface area \\(s=\\dfrac{dv}{dr}\\).", answer: "\\(s=4\\pi r^{2}\\)" },
            { text: "Find two non-negative numbers whose sum is \\(60\\) and whose product is maximum.", answer: "\\(30\\) and \\(30\\) (maximum product \\(=900\\))." },
            { text: "A total of \\(8000\\) m of fencing is used to enclose a rectangular field divided into three equal sections (\\(2L+4W=8000\\)). Find the dimensions for maximum area.", answer: "Length \\(=2000\\) m, width \\(=1000\\) m." },
            { text: "An open box with a square base has volume \\(32000\\ \\text{cm}^{3}\\). Find its dimensions so that the material used is minimum.", answer: "Base \\(40\\ \\text{cm}\\times40\\ \\text{cm}\\), height \\(20\\) cm." },
            { text: "If \\(R(x)=-3x^{2}+970x\\) and \\(G(x)=2x^{2}+500\\), find the maximum profit and the minimum average cost.", answer: "Maximum profit \\(=46{,}545\\) at \\(x=97\\); minimum average cost \\(=20\\sqrt{10}\\approx63.25\\) at \\(x\\approx15.81\\)." },
            { text: "The cost is \\(C(t)=500e^{0.04t}-100t\\). Find the rate of change of cost and the time at which the cost is minimum.", answer: "\\(C'(t)=20e^{0.04t}-100\\); \\(C'(t)=0\\) at \\(t=25\\ln5\\approx40.24\\), and \\(C''(t)>0\\), so the cost is minimum at \\(t\\approx40.24\\)." },
            { text: "If \\(P(t)=150(1+0.05t)^{2}\\), find the rate of change of \\(P\\) and the inflation rate at \\(t=3\\).", answer: "\\(P'(3)=17.25\\); inflation rate \\(=\\dfrac{P'(3)}{P(3)}\\approx8.7\\%\\) per year." }
          ]
        }
      ],
      long: [
        {
          exercise: "Ex 2.3, Q.12 (projectile motion)",
          questions: [
            { text: "A projectile has \\(s(t)=-16t^{2}+256t\\) (feet). Find (i) the heights at \\(t=2,6,9,10\\); (ii) the average velocity on \\([2,5]\\); (iii) the average velocity on \\([7,9]\\); (iv) the time to hit the ground; (v) the velocity at \\(t=8\\); (vi) the maximum height.", answer: "(i) \\(448,\\ 960,\\ 1008,\\ 960\\) ft (ii) \\(144\\) ft/s (iii) \\(0\\) ft/s (same height at \\(t=7\\) and \\(t=9\\)) (iv) \\(t=16\\) s (v) \\(0\\) ft/s (at the peak) (vi) Maximum height \\(=1024\\) ft at \\(t=8\\) s." }
          ]
        },
        {
          exercise: "Ex 2.7, Q.15 (implicit differentiation)",
          questions: [
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(x\\sin y-y\\cos x=1\\).", answer: "\\(\\dfrac{dy}{dx}=\\dfrac{\\sin y+y\\sin x}{\\cos x-x\\cos y}\\)" }
          ]
        },
        {
          exercise: "Ex 2.7, Q.16 (implicit differentiation)",
          questions: [
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(\\sin y=y\\cos2x\\).", answer: "\\(\\dfrac{dy}{dx}=\\dfrac{2y\\sin2x}{\\cos2x-\\cos y}\\)" }
          ]
        },
        {
          exercise: "Ex 2.7, Q.20 (logarithmic derivative)",
          questions: [
            { text: "Find \\(\\dfrac{dy}{dx}\\) if \\(y=\\ln(e^{x}+e^{-x})\\).", answer: "\\(\\dfrac{dy}{dx}=\\dfrac{e^{x}-e^{-x}}{e^{x}+e^{-x}}\\)" }
          ]
        },
        {
          exercise: "Ex 2.7, Q.32 (approximation by differentials)",
          questions: [
            { text: "Use differentials to approximate \\(\\tan\\left(\\dfrac\\pi4+0.1\\right)\\).", answer: "\\(\\approx1.2\\)" }
          ]
        },
        {
          exercise: "Ex 2.8, Q.14 (second derivative)",
          questions: [
            { text: "Find \\(f''(x)\\) if \\(f(x)=(x^{2}+1)\\ln(x^{2}+1)\\).", answer: "\\(f''(x)=2\\ln(x^{2}+1)+\\dfrac{6x^{2}+2}{x^{2}+1}\\)" }
          ]
        },
        {
          exercise: "Ex 2.10, Q.6 (related rates — two joggers)",
          questions: [
            { text: "A woman jogs north at \\(10\\) km/hr. Ten minutes later a man jogs east at \\(9\\) km/hr from the same point. At what rate is the distance between them changing \\(20\\) minutes after the man starts?", answer: "\\(\\dfrac{77}{\\sqrt{34}}\\approx13.21\\) km/hr (increasing)." }
          ]
        },
        {
          exercise: "Ex 2.10, Q.7 (related rates — triangular plate)",
          questions: [
            { text: "The side of an equilateral triangular plate increases at \\(2\\) cm/hr. Find the rate of increase of its area when the side is \\(8\\) cm.", answer: "\\(8\\sqrt3\\approx13.86\\ \\text{cm}^{2}/\\text{hr}\\)" }
          ]
        },
        {
          exercise: "Ex 2.10, Q.8 (related rates — rectangle)",
          questions: [
            { text: "The diagonal of a rectangle increases at \\(1\\) in/hr and its length at \\(\\dfrac14\\) in/hr. At what rate is the width increasing when the width is \\(6\\) in and the length is \\(8\\) in?", answer: "\\(\\dfrac43\\approx1.33\\) in/hr" }
          ]
        },
        {
          exercise: "Ex 2.10, Q.11 (related rates — two ships)",
          questions: [
            { text: "Ship \\(S_1\\) is \\(20\\) km north of ship \\(S_2\\) at 8:00 am. \\(S_1\\) sails south at \\(9\\) km/hr and \\(S_2\\) sails west at \\(12\\) km/hr. At what rate is the distance between them changing at 9:20 am?", answer: "\\(3\\sqrt5\\approx6.71\\) km/hr (increasing)." }
          ]
        },
        {
          exercise: "Ex 2.10, Q.20 (motion of a cyclist)",
          questions: [
            { text: "A cyclist's position is \\(s(t)=5t^{2}+3t\\). Find (a) the speed at time \\(t\\), (b) the speed at \\(t=4\\), (c) interpret the slope.", answer: "(a) \\(v(t)=10t+3\\) (b) \\(v(4)=43\\) m/s (c) The slope is the instantaneous speed; the acceleration is constant at \\(10\\ \\text{m/s}^{2}\\)." }
          ]
        },
        {
          exercise: "Example 52 (maximize a product)",
          questions: [
            { text: "Two non-negative numbers have sum \\(15\\). Find them if the product of one with the square of the other is maximum.", answer: "The numbers are \\(5\\) and \\(10\\) (maximum product \\(=500\\))." }
          ]
        },
        {
          exercise: "Example 53 (minimize fencing)",
          questions: [
            { text: "A rectangular plot of \\(1500\\ \\text{m}^{2}\\) is divided by an internal fence parallel to its sides. Find the dimensions that minimize the total fencing.", answer: "\\(x=15\\sqrt{10}\\) m, \\(y=10\\sqrt{10}\\) m; minimum fencing \\(=60\\sqrt{10}\\approx189.7\\) m." }
          ]
        }
      ]
    }
  ]
};
