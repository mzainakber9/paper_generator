/*
  CLASS 11 -- MATH -- MCQs -- CHAPTERS 7 & 8 (100 each)
  ------------------------------------------------------
  Chapter 7: Mathematical Induction and Binomial Theorem.
  Chapter 8: Fundamentals of Trigonometry.
  Source: a 300-question MCQ bank (with answer key) covering
  Chapters 7, 8 and 9, provided as a PDF. Every computational
  question -- binomial coefficients, constant/middle terms, unit
  digits, remainders, quadrant-based sin/cos sum-difference values,
  r-sin(theta+phi) coefficients -- was independently recomputed
  (not just copied from the source key) before being transcribed
  here; all matched the source key for these two chapters. Options
  were re-ordered where the PDF's two-column layout listed them as
  A,C / B,D rather than A,B,C,D. Each chapter also gets 3 original
  scenario (stimulus) sets not in the source, built from the same
  identities. Every question validated to have exactly 4 distinct
  options before shipping.

  MATH FORMATTING: wrap inline math in \( \) so KaTeX renders it.
*/
var CLASS11_MATH_MCQ_CH7_8 = {
  chapters: [
    {
      id: 7,
      name: "Mathematical Induction and Binomial Theorem",
      mcq: [
    ["Mathematical induction is used to check the validity of a proposition \\(P(n)\\) for all \\(n\\) belonging to which set?", ["Rational numbers", "Real numbers", "Negative integers", "Positive integers"], 3],
    ["The first step in a proof by mathematical induction, in which \\(P(1)\\) is verified, is called the:", ["Terminal step", "Recursive step", "Basis step", "Inductive step"], 2],
    ["The second step in a proof by mathematical induction, in which \\(P(k+1)\\) is shown true whenever \\(P(k)\\) is true, is called the:", ["Basis step", "Closure step", "Base case", "Inductive step"], 3],
    ["If a mathematical statement \\(P(n)\\) is true for all positive integers, it is also true for all:", ["Negative integers", "Whole numbers only", "Positive integers", "Rational numbers"], 2],
    ["The method of mathematical induction was referred to as the \\(\\\\text{``method of infinite descent''}\\) by:", ["Blaise Pascal", "Augustus De Morgan", "Francesco Maurolico", "Pierre de Fermat"], 3],
    ["Who is credited with naming the technique \\(\\\\text{``mathematical induction''}\\) in 1883?", ["Francesco Maurolico", "Isaac Newton", "Blaise Pascal", "Augustus De Morgan"], 3],
    ["In the domino analogy for induction, \\(P(1)\\) being true corresponds to:", ["All dominoes standing still", "The last domino falling backward", "The first domino falling forward", "The \\(k\\)-th domino falling forward"], 2],
    ["\\(\\\\text{`Bi'}\\) in the word \\(\\\\text{`Binomial'}\\) means:", ["Three", "Many", "Two", "One"], 2],
    ["Which of the following is a binomial expression?", ["\\(x^2+\\dfrac1x\\)", "5", "\\(x+y+z\\)", "\\(xyz\\)"], 0],
    ["The general form of a binomial expression raised to a positive integral power is:", ["\\((a-b)(a+b)\\)", "\\(a^n\\cdot b^n\\)", "\\((a+b)^n\\)", "\\(a^n+b^n\\)"], 2],
    ["Expansion of \\((a+b)^n\\) using the numbers arranged in a triangular array of coefficients is known as expansion using:", ["Euler's triangle", "Fermat's triangle", "De Morgan's triangle", "Pascal's triangle"], 3],
    ["Expansion by Pascal's triangle is most convenient when \\(n\\) is:", ["A fraction", "A negative integer", "A large positive integer", "A small positive integer"], 3],
    ["In the expansion of \\((a+b)^n\\), the exponents of \\(a\\) and \\(b\\) in every term always add up to:", ["\\(2n\\)", "\\(n+1\\)", "\\(n\\)", "\\(n-1\\)"], 2],
    ["The number of terms in the expansion of \\((a+b)^n\\) is:", ["\\(n-1\\)", "\\(2n\\)", "\\(n\\)", "\\(n+1\\)"], 3],
    ["In the expansion of \\((a+b)^n\\), the coefficients of terms equidistant from the beginning and the end are:", ["Equal", "In arithmetic progression", "Always 1 and \\(n\\)", "Reciprocals of each other"], 0],
    ["To prove by mathematical induction that \\(1+2+3+\\\\cdots+n=\\\\dfrac{n(n+1)}{2}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:", ["\\(0=1\\)", "\\(1=1\\)", "\\(2=1\\)", "\\(1=2\\)"], 1],
    ["To prove by mathematical induction that \\(1^2+2^2+\\\\cdots+n^2=\\\\dfrac{n(n+1)(2n+1)}{6}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:", ["\\(1=6\\)", "\\(2=1\\)", "\\(6=1\\)", "\\(1=1\\)"], 3],
    ["To prove by mathematical induction that \\(1^3+2^3+\\\\cdots+n^3=\\\\dfrac{n^2(n+1)^2}{4}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:", ["\\(1=4\\)", "\\(2=1\\)", "\\(1=1\\)", "\\(4=1\\)"], 2],
    ["To prove by mathematical induction that \\(\\\\dfrac1{1\\\\cdot2}+\\\\dfrac1{2\\\\cdot3}+\\\\cdots+\\\\dfrac1{n(n+1)}=\\\\dfrac{n}{n+1}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:", ["\\(1=1\\)", "\\(\\tfrac12=1\\)", "\\(1=\\tfrac12\\)", "\\(\\tfrac12=\\tfrac12\\)"], 3],
    ["To prove by mathematical induction that \\(1\\\\cdot2+2\\\\cdot3+\\\\cdots+n(n+1)=\\\\dfrac{n(n+1)(n+2)}{3}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:", ["\\(2=2\\)", "\\(1=1\\)", "\\(2=3\\)", "\\(3=2\\)"], 0],
    ["To prove by mathematical induction that \\(n^2-3n+4\\) is an even number for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:", ["\\(P(1):1-3+4=2\\), which is even", "\\(P(1):0\\), which is even", "\\(P(1)\\) cannot be checked", "\\(P(1):1-3+4=3\\), which is odd"], 0],
    ["To prove by mathematical induction that \\(3^n>n^2\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:", ["\\(P(1):3^1>1^2\\Rightarrow3>1\\)", "\\(P(1):3<1\\)", "\\(P(1):1>3\\)", "\\(P(1):3>3\\)"], 0],
    ["To prove by mathematical induction that \\(4+4\\\\cdot6+4\\\\cdot6^2+\\\\cdots+4\\\\cdot6^n=\\\\dfrac{4(6^{n+1}-1)}{5}\\), starting from \\(n=0\\), the basis step \\(P(0)\\) reduces to the statement:", ["\\(P(0):4=5\\)", "\\(P(0):0=4\\)", "\\(P(0):4=\\tfrac45\\)", "\\(P(0):4=4\\)"], 3],
    ["To prove by mathematical induction that \\(n^3+2n\\) is divisible by 3 for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:", ["\\(P(1):1\\), divisible by 3", "\\(P(1):2\\), divisible by 3", "\\(P(1):1+2=3\\), divisible by 3", "\\(P(1):3\\), not divisible by 3"], 2],
    ["To prove by mathematical induction that \\(7^n-2^n\\) is divisible by 5, starting from \\(n=0\\), the basis step \\(P(0)\\) reduces to the statement:", ["\\(P(0):1\\), not divisible by 5", "\\(P(0):1-1=0\\), divisible by 5", "\\(P(0):7-2=5\\)", "\\(P(0):0\\), not divisible by 5"], 1],
    ["The value of the binomial coefficient \\(\\\\binom{16}{6}\\) is:", ["4368", "5005", "11440", "8008"], 3],
    ["The value of the binomial coefficient \\(\\\\binom{11}{7}\\) is:", ["120", "165", "330", "337"], 2],
    ["The value of the binomial coefficient \\(\\\\binom{15}{12}\\) is:", ["1365", "105", "455", "91"], 2],
    ["The value of the binomial coefficient \\(\\\\binom{12}{11}\\) is:", ["66", "1", "12", "19"], 2],
    ["The value of the binomial coefficient \\(\\\\binom{8}{2}\\) is:", ["28", "8", "35", "56"], 0],
    ["The value of the binomial coefficient \\(\\\\binom{15}{7}\\) is:", ["3432", "5005", "6435", "6442"], 2],
    ["The value of the binomial coefficient \\(\\\\binom{14}{8}\\) is:", ["3432", "2002", "3010", "3003"], 3],
    ["The value of the binomial coefficient \\(\\\\binom{8}{6}\\) is:", ["28", "35", "8", "56"], 0],
    ["The value of the binomial coefficient \\(\\\\binom{15}{2}\\) is:", ["105", "91", "112", "15"], 0],
    ["The value of the binomial coefficient \\(\\\\binom{14}{5}\\) is:", ["1001", "2009", "3003", "2002"], 3],
    ["The value of the binomial coefficient \\(\\\\binom{16}{15}\\) is:", ["16", "120", "23", "1"], 0],
    ["The value of the binomial coefficient \\(\\\\binom{7}{3}\\) is:", ["20", "42", "35", "21"], 2],
    ["The value of the binomial coefficient \\(\\\\binom{6}{3}\\) is:", ["15", "20", "27", "10"], 1],
    ["The value of the binomial coefficient \\(\\\\binom{16}{5}\\) is:", ["3003", "1820", "4368", "8008"], 2],
    ["The value of the binomial coefficient \\(\\\\binom{8}{5}\\) is:", ["70", "28", "21", "56"], 3],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac1x\\\\right)^{12}\\) occurs when \\(r=8\\); its value is:", ["990", "495", "220", "-495"], 1],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac2x\\\\right)^{6}\\) occurs when \\(r=4\\); its value is:", ["240", "192", "255", "-240"], 0],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac3x\\\\right)^{10}\\) occurs when \\(r=5\\); its value is:", ["-61236", "61236", "153090", "61488"], 1],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac2x\\\\right)^{9}\\) occurs when \\(r=6\\); its value is:", ["4608", "5460", "5376", "-5376"], 2],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(2x+\\\\dfrac2x\\\\right)^{6}\\) occurs when \\(r=3\\); its value is:", ["-1280", "1300", "960", "1280"], 3],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac3x\\\\right)^{6}\\) occurs when \\(r=3\\); its value is:", ["1215", "540", "-540", "560"], 1],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac1x\\\\right)^{12}\\) occurs when \\(r=8\\); its value is:", ["990", "-495", "220", "495"], 3],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(2x+\\\\dfrac1x\\\\right)^{12}\\) occurs when \\(r=6\\); its value is:", ["60060", "25344", "-59136", "59136"], 3],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac2x\\\\right)^{12}\\) occurs when \\(r=6\\); its value is:", ["59136", "60060", "101376", "-59136"], 0],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac1x\\\\right)^{12}\\) occurs when \\(r=6\\); its value is:", ["1848", "792", "-924", "924"], 3],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac2x\\\\right)^{9}\\) occurs when \\(r=6\\); its value is:", ["-5376", "4608", "5376", "5460"], 2],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac3x\\\\right)^{12}\\) occurs when \\(r=8\\); its value is:", ["-3247695", "4330260", "3247695", "3248190"], 2],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac1x\\\\right)^{8}\\) occurs when \\(r=4\\); its value is:", ["56", "140", "70", "-70"], 2],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac1x\\\\right)^{6}\\) occurs when \\(r=3\\); its value is:", ["40", "15", "-20", "20"], 3],
    ["The term independent of \\(x\\) in the expansion of \\(\\\\left(2x+\\\\dfrac1x\\\\right)^{10}\\) occurs when \\(r=5\\); its value is:", ["8064", "-8064", "3360", "8316"], 0],
    ["Since \\(n=4\\) is even, the number of terms in the expansion of \\((a+b)^4\\) is odd, and the middle term is the:", ["\\(\\left(\\tfrac42\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac42+1\\right)^{\\text{th}}\\) terms", "2\\(^{\\text{nd}}\\) term", "\\(\\left(\\tfrac42+1\\right)^{\\text{th}}=3^{\\text{rd}}\\) term", "4\\(^{\\text{th}}\\) term"], 2],
    ["Since \\(n=22\\) is even, the number of terms in the expansion of \\((a+b)^{22}\\) is odd, and the middle term is the:", ["22\\(^{\\text{nd}}\\) term", "11\\(^{\\text{th}}\\) term", "\\(\\left(\\tfrac{22}2\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac{22}2+1\\right)^{\\text{th}}\\) terms", "\\(\\left(\\tfrac{22}2+1\\right)^{\\text{th}}=12^{\\text{th}}\\) term"], 3],
    ["Since \\(n=18\\) is even, the number of terms in the expansion of \\((a+b)^{18}\\) is odd, and the middle term is the:", ["\\(\\left(\\tfrac{18}2\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac{18}2+1\\right)^{\\text{th}}\\) terms", "9\\(^{\\text{th}}\\) term", "\\(\\left(\\tfrac{18}2+1\\right)^{\\text{th}}=10^{\\text{th}}\\) term", "18\\(^{\\text{th}}\\) term"], 2],
    ["Since \\(n=16\\) is even, the number of terms in the expansion of \\((a+b)^{16}\\) is odd, and the middle term is the:", ["8\\(^{\\text{th}}\\) term", "\\(\\left(\\tfrac{16}2+1\\right)^{\\text{th}}=9^{\\text{th}}\\) term", "\\(\\left(\\tfrac{16}2\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac{16}2+1\\right)^{\\text{th}}\\) terms", "16\\(^{\\text{th}}\\) term"], 1],
    ["Since \\(n=20\\) is even, the number of terms in the expansion of \\((a+b)^{20}\\) is odd, and the middle term is the:", ["10\\(^{\\text{th}}\\) term", "\\(\\left(\\tfrac{20}2+1\\right)^{\\text{th}}=11^{\\text{th}}\\) term", "\\(\\left(\\tfrac{20}2\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac{20}2+1\\right)^{\\text{th}}\\) terms", "20\\(^{\\text{th}}\\) term"], 1],
    ["Since \\(n=23\\) is odd, the expansion of \\((a+b)^{23}\\) has an even number of terms, so there are two middle terms, namely the:", ["23\\(^{\\text{rd}}\\) and \\((n{+}1)^{\\text{th}}\\) terms", "12\\(^{\\text{th}}\\) and 13\\(^{\\text{th}}\\) terms", "11\\(^{\\text{th}}\\) and 14\\(^{\\text{th}}\\) terms", "12\\(^{\\text{th}}\\) term only"], 1],
    ["Since \\(n=9\\) is odd, the expansion of \\((a+b)^{9}\\) has an even number of terms, so there are two middle terms, namely the:", ["5\\(^{\\text{th}}\\) term only", "4\\(^{\\text{th}}\\) and 7\\(^{\\text{th}}\\) terms", "9\\(^{\\text{th}}\\) and \\((n{+}1)^{\\text{th}}\\) terms", "5\\(^{\\text{th}}\\) and 6\\(^{\\text{th}}\\) terms"], 3],
    ["Since \\(n=21\\) is odd, the expansion of \\((a+b)^{21}\\) has an even number of terms, so there are two middle terms, namely the:", ["10\\(^{\\text{th}}\\) and 13\\(^{\\text{th}}\\) terms", "11\\(^{\\text{th}}\\) and 12\\(^{\\text{th}}\\) terms", "11\\(^{\\text{th}}\\) term only", "21\\(^{\\text{st}}\\) and \\((n{+}1)^{\\text{th}}\\) terms"], 1],
    ["Since \\(n=17\\) is odd, the expansion of \\((a+b)^{17}\\) has an even number of terms, so there are two middle terms, namely the:", ["8\\(^{\\text{th}}\\) and 11\\(^{\\text{th}}\\) terms", "9\\(^{\\text{th}}\\) term only", "9\\(^{\\text{th}}\\) and 10\\(^{\\text{th}}\\) terms", "17\\(^{\\text{th}}\\) and \\((n{+}1)^{\\text{th}}\\) terms"], 2],
    ["Since \\(n=13\\) is odd, the expansion of \\((a+b)^{13}\\) has an even number of terms, so there are two middle terms, namely the:", ["13\\(^{\\text{th}}\\) and \\((n{+}1)^{\\text{th}}\\) terms", "7\\(^{\\text{th}}\\) and 8\\(^{\\text{th}}\\) terms", "7\\(^{\\text{th}}\\) term only", "6\\(^{\\text{th}}\\) and 9\\(^{\\text{th}}\\) terms"], 1],
    ["The sum of all the binomial coefficients in the expansion of \\((a+b)^n\\) is:", ["\\(n!\\)", "\\(2^{n-1}\\)", "\\(n^2\\)", "\\(2^n\\)"], 3],
    ["The sum of the coefficients of the odd-positioned terms in the expansion of \\((a+b)^n\\) equals:", ["\\(2^n\\)", "\\(n^2\\)", "\\(2^{n-1}\\)", "\\(2^{n+1}\\)"], 2],
    ["The \\(n^{\\\\text{th}}\\) row of Pascal's triangle (starting the count from \\(n=0\\)) gives the binomial coefficients for the expansion of:", ["\\((a+b)^{2n}\\)", "\\((a+b)^{n-1}\\)", "\\((a+b)^n\\)", "\\((a+b)^{n+1}\\)"], 2],
    ["Each interior entry of Pascal's triangle is obtained by:", ["Adding the two entries immediately above it", "Dividing the row number by the column number", "Subtracting the entries above it", "Multiplying the two entries above it"], 0],
    ["In Pascal's triangle, the first and last entry of every row is always:", ["0", "1", "\\(n\\)", "\\(n-1\\)"], 1],
    ["\\(\\\\displaystyle\\\\binom{n}{0}+\\\\binom{n}{1}+\\\\binom{n}{2}+\\\\cdots+\\\\binom{n}{n}=\\)", ["\\(n^2\\)", "\\(2n\\)", "\\(n!\\)", "\\(2^n\\)"], 3],
    ["\\(\\\\displaystyle\\\\binom{n}{r}+\\\\binom{n}{r-1}=\\)", ["\\(\\binom{n}{r+1}\\)", "\\(\\binom{n-1}{r}\\)", "\\(\\binom{n+1}{r-1}\\)", "\\(\\binom{n+1}{r}\\)"], 3],
    ["Using Pascal's triangle, the possible number of heads when three coins are tossed simultaneously corresponds to the row:", ["1, 2, 1", "1, 4, 6, 4, 1", "1, 3, 3, 1", "1, 5, 10, 10, 5, 1"], 2],
    ["The sixth row of Pascal's triangle (for \\(n=6\\)) is:", ["1, 6, 15, 15, 6, 1", "1, 6, 15, 20, 15, 6, 1", "1, 5, 10, 10, 5, 1", "1, 6, 12, 12, 6, 1"], 1],
    ["\\(\\\\displaystyle\\\\binom{n}{r}=\\\\binom{n}{n-r}\\) is a consequence of the fact that:", ["\\(n\\) must always be even", "Pascal's triangle has only odd entries", "The coefficients equidistant from the beginning and end of the expansion of \\((a+b)^n\\) are equal", "\\(r\\) must equal \\(n/2\\)"], 2],
    ["The binomial series \\((1+x)^n=1+nx+\\\\dfrac{n(n-1)}{2!}x^2+\\\\cdots\\) is valid (convergent) for non-integer \\(n\\) when:", ["\\(x<-1\\)", "\\(x>1\\)", "\\(-1\\le x\\le1\\)", "\\(-1<x<1\\)"], 3],
    ["The general term of the binomial series \\(1+nx+\\\\dfrac{n(n-1)}{2!}x^2+\\\\cdots\\) is:", ["\\(T_{r+1}=n^rx^r\\)", "\\(T_{r+1}=\\dfrac{n!}{r!}x^r\\)", "\\(T_{r+1}=\\dfrac{n(n-1)(n-2)\\cdots(n-r+1)}{r!}x^r\\)", "\\(T_{r+1}=\\binom{n}{r}x^r\\)"], 2],
    ["When \\(n\\) is a positive integer, the binomial expansion of \\((1+x)^n\\) is:", ["Terminating, with \\(n\\) terms only if \\(x=1\\)", "Terminating, with \\((n+1)\\) terms", "Always divergent", "Non-terminating"], 1],
    ["When \\(n\\) is a negative integer or a fraction, the expansion of \\((1+x)^n\\) is:", ["Non-terminating (an infinite series)", "Not defined", "Terminating after \\(n\\) terms", "Terminating after \\(n+1\\) terms"], 0],
    ["The binomial series for \\((2+3x)^{-1/2}\\) is convergent when:", ["\\(|x|<1\\)", "\\(\\left|\\dfrac{3x}2\\right|<1\\), i.e. \\(|x|<\\dfrac23\\)", "\\(|x|<\\dfrac32\\)", "\\(|x|\\le1\\)"], 1],
    ["The series \\(1-3\\\\left(\\\\tfrac37\\\\right)+4\\\\left(\\\\tfrac37\\\\right)^2-8\\\\left(\\\\tfrac37\\\\right)^3+\\\\cdots\\) is an example of a:", ["Geometric series only", "Harmonic series", "Binomial series expansion of the form \\((1+x)^n\\) for some fractional/negative \\(n\\)", "Arithmetic series"], 2],
    ["For \\(\\\\left(3+\\\\dfrac2x\\\\right)^{-1/3}\\) to be expressed as a convergent binomial series, we require:", ["\\(|x|<2\\)", "\\(|x|<1\\)", "\\(\\left|\\dfrac2{3x}\\right|<1\\)", "\\(|x|<3\\)"], 2],
    ["If \\(x\\) is so small that its square and higher powers may be neglected, then \\((1+x)^n\\\\approx\\)", ["\\(1-nx\\)", "\\(nx\\)", "\\(1+nx\\)", "\\(1+nx+\\dfrac{n(n-1)}{2}x^2\\)"], 2],
    ["If \\(x\\) is so small that its cube and higher powers may be neglected, then \\((1+x)^n\\\\approx\\)", ["\\(1-nx+x^2\\)", "\\(1+nx+\\dfrac{n(n-1)}{2!}x^2\\)", "\\(1+nx\\)", "\\(1+nx+\\dfrac{n(n-1)(n-2)}{3!}x^3\\)"], 1],
    ["The binomial series expansion is used to approximate the value of expressions like \\(\\\\sqrt[6]{65}\\) by writing 65 as:", ["\\(65^1\\) directly with no approximation", "\\(65=5\\times13\\) and expanding each factor", "\\(64\\left(1+\\dfrac1{64}\\right)\\), a perfect power plus a small correction", "A sum of two primes"], 2],
    ["The unit (last) digit of \\(17^{203}\\) is:", ["3", "4", "0", "5"], 0],
    ["The unit (last) digit of \\(29^{26}\\) is:", ["3", "2", "8", "1"], 3],
    ["The unit (last) digit of \\(36^{307}\\) is:", ["6", "8", "3", "7"], 0],
    ["The unit (last) digit of \\(23^{150}\\) is:", ["1", "0", "6", "9"], 3],
    ["The unit (last) digit of \\(48^{99}\\) is:", ["2", "4", "3", "9"], 0],
    ["The unit (last) digit of \\(54^{203}\\) is:", ["5", "1", "6", "4"], 3],
    ["The unit (last) digit of \\(27^{304}\\) is:", ["1", "8", "3", "2"], 0],
    ["The unit (last) digit of \\(108^{33}\\) is:", ["0", "8", "9", "5"], 1],
    ["Using the binomial theorem, the remainder when \\(7^{101}\\) is divided by 25 is:", ["8", "7", "9", "10"], 1],
    ["Using the binomial theorem, the remainder when \\(9^{205}\\) is divided by 31 is:", ["8", "6", "5", "7"], 2],
    ["Using the binomial theorem, the remainder when \\(8^{205}\\) is divided by 48 is:", ["33", "35", "34", "32"], 3],
    ["Using the binomial theorem, the remainder when \\(5^{103}\\) is divided by 13 is:", ["11", "8", "9", "10"], 1],
    ["Using the binomial theorem, the remainder when \\(6^{145}\\) is divided by 17 is:", ["6", "7", "9", "8"], 0],
    ["Using the binomial theorem, the remainder when \\(17^{1717}\\) is divided by 19 is:", ["8", "6", "7", "5"], 3],
    ["Using the binomial theorem, the remainder when \\(11^{60}\\) is divided by 17 is:", ["13", "14", "16", "15"], 0]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Expansion</th><th>Value</th></tr><tr><td>\\(n\\)</td><td>10</td></tr><tr><td>Term requested</td><td>independent of \\(x\\) in \\(\\left(x+\\dfrac2x\\right)^{10}\\)</td></tr></table>",
          questions: [
            ["The general term \\(T_{r+1}\\) of \\(\\left(x+\\dfrac2x\\right)^{10}\\) is:", ["\\(\\binom{10}{r}x^{10-2r}2^r\\)", "\\(\\binom{10}{r}x^{10-r}2^r\\)", "\\(\\binom{10}{r}x^{r}2^{10-r}\\)", "\\(\\binom{10}{r}x^{10}2^r\\)"], 0],
            ["The term is independent of \\(x\\) when \\(r=\\)", ["4", "5", "6", "10"], 1],
            ["The independent term equals:", ["\\(\\binom{10}{5}2^5=8064\\)", "\\(\\binom{10}{4}2^4=3360\\)", "\\(\\binom{10}{6}2^6=13440\\)", "\\(\\binom{10}{5}2^4=4032\\)"], 0],
            ["The total number of terms in this expansion is:", ["9", "10", "11", "12"], 2]
          ]
        },
        {
          stimulus: "<table><tr><th>Statement</th><th>Claim</th></tr><tr><td>\\(P(n)\\)</td><td>\\(2+4+6+\\cdots+2n=n(n+1)\\)</td></tr><tr><td>Method</td><td>Mathematical induction, basis at \\(n=1\\)</td></tr></table>",
          questions: [
            ["\\(P(1)\\) reduces to the statement:", ["\\(2=2\\)", "\\(1=2\\)", "\\(2=1\\)", "\\(0=2\\)"], 0],
            ["Assuming \\(P(k)\\) is true, the inductive hypothesis is:", ["\\(2+4+\\cdots+2k=k(k+1)\\)", "\\(2+4+\\cdots+2k=k^2\\)", "\\(2k=k(k+1)\\)", "\\(k=k+1\\)"], 0],
            ["Adding \\(2(k+1)\\) to both sides of the hypothesis gives \\(k(k+1)+2(k+1)=\\)", ["\\((k+1)(k+2)\\)", "\\((k+1)^2\\)", "\\(k(k+2)\\)", "\\((k+2)^2\\)"], 0],
            ["This final expression matches \\(P(k+1)\\), which is:", ["\\((k+1)(k+2)\\)", "\\((k+1)k\\)", "\\(k(k+1)\\)", "\\((k+2)(k+1)^2\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Row \\(n\\)</th><th>Pascal's triangle entries</th></tr><tr><td>5</td><td>1, 5, 10, 10, 5, 1</td></tr></table>",
          questions: [
            ["This row gives the coefficients in the expansion of:", ["\\((a+b)^5\\)", "\\((a+b)^4\\)", "\\((a+b)^6\\)", "\\((a+b)^{10}\\)"], 0],
            ["The sum of all entries in this row equals:", ["16", "32", "25", "64"], 1],
            ["The coefficient of the middle term(s) corresponds to:", ["\\(\\binom{5}{2}\\) and \\(\\binom{5}{3}\\), both 10", "\\(\\binom{5}{2}\\) only, 10", "\\(\\binom{5}{5}\\), 1", "\\(\\binom{5}{0}\\), 1"], 0],
            ["The next row (\\(n=6\\)) is obtained by adding adjacent pairs, giving:", ["1, 6, 15, 20, 15, 6, 1", "1, 5, 15, 20, 15, 5, 1", "1, 6, 10, 10, 6, 1", "1, 6, 12, 12, 6, 1"], 0]
          ]
        }
      ],
      short: [],
      long: []
    },
    {
      id: 8,
      name: "Fundamentals of Trigonometry",
      mcq: [
    ["The distance between two points \\(P(x_1,y_1)\\) and \\(Q(x_2,y_2)\\) in the plane is given by:", ["\\((x_1-x_2)^2-(y_1-y_2)^2\\)", "\\((x_1-x_2)+(y_1-y_2)\\)", "\\(\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}\\)", "\\(\\sqrt{(x_1+x_2)^2+(y_1+y_2)^2}\\)"], 2],
    ["The Fundamental Law of Trigonometry states that \\(\\cos(\\alpha-\\beta)=\\)", ["\\(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)", "\\(\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\)", "\\(\\sin\\alpha\\sin\\beta-\\cos\\alpha\\cos\\beta\\)", "\\(\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\)"], 3],
    ["The Fundamental Law of Trigonometry is proved using:", ["The Pythagorean theorem alone", "The distance formula on a unit circle", "Mathematical induction", "Pascal's triangle"], 1],
    ["\\(\\cos(\\alpha+\\beta)=\\)", ["\\(\\cos\\alpha\\sin\\beta-\\sin\\alpha\\cos\\beta\\)", "\\(\\sin\\alpha\\cos\\beta-\\cos\\alpha\\sin\\beta\\)", "\\(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)", "\\(\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\)"], 2],
    ["\\(\\sin(\\alpha+\\beta)=\\)", ["\\(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)", "\\(\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\)", "\\(\\sin\\alpha\\cos\\beta-\\cos\\alpha\\sin\\beta\\)", "\\(\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\)"], 1],
    ["\\(\\tan(\\alpha+\\beta)=\\)", ["\\(\\tan\\alpha+\\tan\\beta\\)", "\\(\\dfrac{\\tan\\alpha\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}\\)", "\\(\\dfrac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}\\)", "\\(\\dfrac{\\tan\\alpha-\\tan\\beta}{1+\\tan\\alpha\\tan\\beta}\\)"], 2],
    ["Angles connected to a basic angle \\(\\theta\\) by a right angle or its multiple are called:", ["Complementary angles", "Coterminal angles", "Supplementary angles", "Allied angles"], 3],
    ["A trigonometric ratio changes to its co-ratio (e.g. sine to cosine) when the allied angle contains:", ["Zero", "An odd multiple of a right angle", "Any multiple of \\(2\\pi\\)", "An even multiple of a right angle"], 1],
    ["A trigonometric ratio does NOT change when the allied angle contains:", ["An odd multiple of a right angle", "Any angle at all", "An even multiple of a right angle", "A multiple of \\(\\pi/4\\)"], 2],
    ["\\(\\sin(\\pi-\\theta)=\\)", ["\\(-\\sin\\theta\\)", "\\(-\\cos\\theta\\)", "\\(\\cos\\theta\\)", "\\(\\sin\\theta\\)"], 3],
    ["\\(\\cos(\\pi-\\theta)=\\)", ["\\(-\\sin\\theta\\)", "\\(-\\cos\\theta\\)", "\\(\\cos\\theta\\)", "\\(\\sin\\theta\\)"], 1],
    ["\\(\\cos\\left(\\dfrac{\\pi}{2}-\\theta\\right)=\\)", ["\\(-\\cos\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\sin\\theta\\)", "\\(\\sin\\theta\\)"], 3],
    ["\\(\\sin\\left(\\dfrac{\\pi}{2}+\\theta\\right)=\\)", ["\\(-\\sin\\theta\\)", "\\(\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\cos\\theta\\)"], 2],
    ["Writing \\(a\\sin\\theta+b\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(a+b\\)", "\\(\\sqrt{a-b}\\)", "\\(\\sqrt{a^2+b^2}\\)", "\\(a^2+b^2\\)"], 2],
    ["In \\(a\\sin\\theta+b\\cos\\theta=r\\sin(\\theta+\\phi)\\), the angle \\(\\phi\\) satisfies:", ["\\(\\phi=\\tan^{-1}\\left(\\tfrac{a}{b}\\right)\\)", "\\(\\phi=a\\times b\\)", "\\(\\phi=\\sin^{-1}\\left(\\tfrac{a}{b}\\right)\\)", "\\(\\phi=\\tan^{-1}\\left(\\tfrac{b}{a}\\right)\\)"], 3],
    ["The exact value of \\(\\cos15^\\circ\\) is:", ["\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}{2}\\)", "\\(\\dfrac{\\sqrt3+\\sqrt2}{4}\\)"], 0],
    ["The exact value of \\(\\sin15^\\circ\\) is:", ["\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt3-\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}{2}\\)"], 0],
    ["The exact value of \\(\\cos75^\\circ\\) is:", ["\\(\\dfrac{\\sqrt3-\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt2-\\sqrt6}{4}\\)"], 1],
    ["The exact value of \\(\\sin75^\\circ\\) is:", ["\\(\\dfrac{\\sqrt3+\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}{2}\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"], 1],
    ["The exact value of \\(\\cos105^\\circ\\) is:", ["\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)", "\\(-\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(-\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"], 3],
    ["The exact value of \\(\\sin105^\\circ\\) is:", ["\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)", "\\(-\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(-\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"], 0],
    ["The exact value of \\(\\tan15^\\circ\\) is:", ["\\(2+\\sqrt3\\)", "\\(2-\\sqrt3\\)", "\\(\\sqrt3-1\\)", "\\(\\sqrt3-2\\)"], 1],
    ["The exact value of \\(\\tan75^\\circ\\) is:", ["\\(\\sqrt3-2\\)", "\\(2-\\sqrt3\\)", "\\(\\sqrt3+1\\)", "\\(2+\\sqrt3\\)"], 3],
    ["The exact value of \\(\\cos165^\\circ\\) (using \\(180^\\circ-15^\\circ\\)) is:", ["\\(-\\dfrac{\\sqrt6-\\sqrt2}{4}\\)", "\\(-\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)"], 1],
    ["The exact value of \\(\\cos345^\\circ\\) (using \\(360^\\circ-15^\\circ\\)) is:", ["\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(-\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(-\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"], 1],
    ["The exact value of \\(\\cos120^\\circ\\) (using \\(180^\\circ-60^\\circ\\)) is:", ["\\(\\dfrac{\\sqrt3}{2}\\)", "\\(\\dfrac12\\)", "\\(-\\dfrac{\\sqrt3}{2}\\)", "\\(-\\dfrac12\\)"], 3],
    ["The exact value of \\(\\sin120^\\circ\\) is:", ["\\(\\dfrac{\\sqrt3}{2}\\)", "\\(-\\dfrac{\\sqrt3}{2}\\)", "\\(-\\dfrac12\\)", "\\(\\dfrac12\\)"], 0],
    ["The exact value of \\(\\tan\\left(\\dfrac{\\pi}{6}+\\dfrac{\\pi}{4}\\right)\\) is:", ["\\(\\dfrac{\\sqrt3+1}{\\sqrt3-1}\\)", "\\(\\dfrac{\\sqrt3-1}{\\sqrt3+1}\\)", "\\(\\sqrt3+1\\)", "\\(\\sqrt3-1\\)"], 0],
    ["The exact value of \\(\\cos\\left(\\dfrac{\\pi}{3}-\\dfrac{\\pi}{4}\\right)\\) is:", ["\\(\\dfrac{\\sqrt2-\\sqrt6}{4}\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)", "\\(\\dfrac12\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)"], 3],
    ["The value of \\(\\sin22.5^\\circ\\cos22.5^\\circ+\\cos22.5^\\circ\\sin22.5^\\circ\\) (i.e. \\(\\sin45^\\circ\\)) is:", ["\\(\\dfrac{\\sqrt3}{2}\\)", "\\(\\dfrac{\\sqrt2}{2}\\)", "\\(\\dfrac12\\)", "1"], 1],
    ["\\(\\sin(\\pi+\\theta)=\\)", ["\\(-\\cos\\theta\\)", "\\(\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\sin\\theta\\)"], 3],
    ["\\(\\cos(\\pi+\\theta)=\\)", ["\\(-\\cos\\theta\\)", "\\(\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\sin\\theta\\)"], 0],
    ["\\(\\tan(\\pi+\\theta)=\\)", ["\\(-\\cot\\theta\\)", "\\(-\\tan\\theta\\)", "\\(\\tan\\theta\\)", "\\(\\cot\\theta\\)"], 2],
    ["\\(\\sin(2\\pi-\\theta)=\\)", ["\\(\\sin\\theta\\)", "\\(-\\cos\\theta\\)", "\\(-\\sin\\theta\\)", "\\(\\cos\\theta\\)"], 2],
    ["\\(\\cos(2\\pi-\\theta)=\\)", ["\\(-\\cos\\theta\\)", "\\(\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\sin\\theta\\)"], 2],
    ["\\(\\sin\\left(\\dfrac{3\\pi}{2}+\\theta\\right)=\\)", ["\\(\\cos\\theta\\)", "\\(-\\sin\\theta\\)", "\\(-\\cos\\theta\\)", "\\(\\sin\\theta\\)"], 2],
    ["\\(\\cos\\left(\\dfrac{3\\pi}{2}+\\theta\\right)=\\)", ["\\(\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\sin\\theta\\)", "\\(-\\cos\\theta\\)"], 0],
    ["\\(\\tan\\left(\\dfrac{\\pi}{2}-\\theta\\right)=\\)", ["\\(-\\cot\\theta\\)", "\\(\\tan\\theta\\)", "\\(-\\tan\\theta\\)", "\\(\\cot\\theta\\)"], 3],
    ["\\(\\tan\\left(\\dfrac{\\pi}{2}+\\theta\\right)=\\)", ["\\(-\\cot\\theta\\)", "\\(\\cot\\theta\\)", "\\(\\tan\\theta\\)", "\\(-\\tan\\theta\\)"], 0],
    ["\\(\\cot\\left(\\dfrac{\\pi}{2}-\\theta\\right)=\\)", ["\\(\\tan\\theta\\)", "\\(-\\tan\\theta\\)", "\\(-\\cot\\theta\\)", "\\(\\cot\\theta\\)"], 0],
    ["\\(\\sin(-\\theta)=\\)", ["\\(-\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(\\sin\\theta\\)", "\\(-\\cos\\theta\\)"], 0],
    ["\\(\\cos(-\\theta)=\\)", ["\\(-\\sin\\theta\\)", "\\(\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\cos\\theta\\)"], 2],
    ["\\(\\tan(-\\theta)=\\)", ["\\(-\\cot\\theta\\)", "\\(\\cot\\theta\\)", "\\(-\\tan\\theta\\)", "\\(\\tan\\theta\\)"], 2],
    ["\\(\\cos(x+y)+\\cos(x-y)=\\)", ["\\(2\\sin x\\cos y\\)", "\\(2\\cos x\\sin y\\)", "\\(2\\cos x\\cos y\\)", "\\(2\\sin x\\sin y\\)"], 2],
    ["\\(\\sin(x+y)-\\sin(x-y)=\\)", ["\\(2\\cos x\\sin y\\)", "\\(2\\sin x\\sin y\\)", "\\(2\\cos x\\cos y\\)", "\\(2\\sin x\\cos y\\)"], 0],
    ["Given \\(\\sin A=\\dfrac{20}{29}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac7{25}\\) with the terminal arm of \\(B\\) in quadrant I, the value of \\(\\cos(A-B)\\) is:", ["\\(\\dfrac{364}{725}\\)", "\\(\\dfrac{627}{725}\\)", "\\(-\\dfrac{644}{725}\\)", "\\(-\\dfrac{364}{725}\\)"], 3],
    ["Given \\(\\sin A=\\dfrac9{41}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac{20}{29}\\) with the terminal arm of \\(B\\) in quadrant II, the value of \\(\\cos(A-B)\\) is:", ["\\(-\\dfrac{1020}{1189}\\)", "\\(\\dfrac{1020}{1189}\\)", "\\(-\\dfrac{660}{1189}\\)", "\\(-\\dfrac{611}{1189}\\)"], 0],
    ["Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac8{17}\\) with the terminal arm of \\(B\\) in quadrant I, the value of \\(\\sin(A+B)\\) is:", ["\\(\\dfrac{21}{221}\\)", "\\(-\\dfrac{171}{221}\\)", "\\(-\\dfrac{21}{221}\\)", "\\(\\dfrac{220}{221}\\)"], 0],
    ["Given \\(\\sin A=\\dfrac35\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac{20}{29}\\) with the terminal arm of \\(B\\) in quadrant III, the value of \\(\\sin(A+B)\\) is:", ["\\(\\dfrac{143}{145}\\)", "\\(-\\dfrac{144}{145}\\)", "\\(-\\dfrac{17}{145}\\)", "\\(\\dfrac{17}{145}\\)"], 2],
    ["Given \\(\\sin A=\\dfrac35\\) with the terminal arm of \\(A\\) in quadrant III, and \\(\\sin B=\\dfrac8{17}\\) with the terminal arm of \\(B\\) in quadrant IV, the value of \\(\\sin(A+B)\\) is:", ["\\(-\\dfrac{77}{85}\\)", "\\(\\dfrac{13}{85}\\)", "\\(-\\dfrac{84}{85}\\)", "\\(-\\dfrac{13}{85}\\)"], 3],
    ["Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac{20}{29}\\) with the terminal arm of \\(B\\) in quadrant I, the value of \\(\\cos(A-B)\\) is:", ["\\(-\\dfrac{352}{377}\\)", "\\(\\dfrac{152}{377}\\)", "\\(\\dfrac{345}{377}\\)", "\\(-\\dfrac{152}{377}\\)"], 3],
    ["Given \\(\\sin A=\\dfrac{20}{29}\\) with the terminal arm of \\(A\\) in quadrant III, and \\(\\sin B=\\dfrac9{41}\\) with the terminal arm of \\(B\\) in quadrant II, the value of \\(\\cos(A-B)\\) is:", ["\\(\\dfrac{660}{1189}\\)", "\\(\\dfrac{1020}{1189}\\)", "\\(\\dfrac{989}{1189}\\)", "\\(-\\dfrac{660}{1189}\\)"], 0],
    ["Given \\(\\sin A=\\dfrac{20}{29}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac8{17}\\) with the terminal arm of \\(B\\) in quadrant II, the value of \\(\\sin(A+B)\\) is:", ["\\(\\dfrac{468}{493}\\)", "\\(-\\dfrac{468}{493}\\)", "\\(-\\dfrac{132}{493}\\)", "\\(\\dfrac{155}{493}\\)"], 1],
    ["Given \\(\\sin A=\\dfrac8{17}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac5{13}\\) with the terminal arm of \\(B\\) in quadrant IV, the value of \\(\\cos(A-B)\\) is:", ["\\(\\dfrac{21}{221}\\)", "\\(\\dfrac{220}{221}\\)", "\\(-\\dfrac{140}{221}\\)", "\\(-\\dfrac{220}{221}\\)"], 3],
    ["Given \\(\\sin A=\\dfrac9{41}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac9{41}\\) with the terminal arm of \\(B\\) in quadrant III, the value of \\(\\sin(A+B)\\) is:", ["0", "\\(-1\\)", "\\(\\dfrac12\\)", "\\(\\dfrac{720}{1681}\\)"], 0],
    ["Given \\(\\sin A=\\dfrac8{17}\\) with the terminal arm of \\(A\\) in quadrant III, and \\(\\sin B=\\dfrac7{25}\\) with the terminal arm of \\(B\\) in quadrant I, the value of \\(\\sin(A+B)\\) is:", ["\\(-\\dfrac{87}{425}\\)", "\\(\\dfrac{297}{425}\\)", "\\(-\\dfrac{304}{425}\\)", "\\(-\\dfrac{297}{425}\\)"], 3],
    ["Given \\(\\sin A=\\dfrac{20}{29}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac{20}{29}\\) with the terminal arm of \\(B\\) in quadrant III, the value of \\(\\sin(A+B)\\) is:", ["\\(\\dfrac12\\)", "0", "\\(-\\dfrac{840}{841}\\)", "1"], 1],
    ["Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac35\\) with the terminal arm of \\(B\\) in quadrant III, the value of \\(\\sin(A+B)\\) is:", ["\\(\\dfrac{56}{65}\\)", "\\(-\\dfrac{63}{65}\\)", "\\(\\dfrac{16}{65}\\)", "\\(-\\dfrac{16}{65}\\)"], 3],
    ["Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac9{41}\\) with the terminal arm of \\(B\\) in quadrant II, the value of \\(\\cos(A-B)\\) is:", ["\\(-\\dfrac{435}{533}\\)", "\\(\\dfrac{525}{533}\\)", "\\(-\\dfrac{525}{533}\\)", "\\(\\dfrac{92}{533}\\)"], 2],
    ["Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac5{13}\\) with the terminal arm of \\(B\\) in quadrant IV, the value of \\(\\sin(A+B)\\) is:", ["\\(\\dfrac{119}{169}\\)", "0", "\\(-\\dfrac{120}{169}\\)", "\\(\\dfrac{120}{169}\\)"], 2],
    ["\\(\\sin2\\theta=\\)", ["\\(2\\cos^2\\theta-1\\)", "\\(\\sin^2\\theta-\\cos^2\\theta\\)", "\\(\\cos^2\\theta-\\sin^2\\theta\\)", "\\(2\\sin\\theta\\cos\\theta\\)"], 3],
    ["\\(\\cos2\\theta=\\)", ["\\(1-2\\sin^2\\theta\\)", "\\(2\\sin^2\\theta-1\\)", "\\(\\sin^2\\theta+\\cos^2\\theta\\)", "\\(2\\sin\\theta\\cos\\theta\\)"], 0],
    ["\\(\\cos2\\theta=\\) (in terms of \\(\\cos\\theta\\) alone)", ["\\(1-\\cos^2\\theta\\)", "\\(\\cos^2\\theta-1\\)", "\\(2\\cos^2\\theta-1\\)", "\\(2\\sin^2\\theta-1\\)"], 2],
    ["\\(\\tan2\\theta=\\)", ["\\(\\dfrac{2\\tan\\theta}{1+\\tan^2\\theta}\\)", "\\(\\dfrac{1-\\tan^2\\theta}{2\\tan\\theta}\\)", "\\(\\dfrac{\\tan^2\\theta}{1-\\tan\\theta}\\)", "\\(\\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}\\)"], 3],
    ["\\(\\sin3\\alpha=\\)", ["\\(3\\sin\\alpha+4\\sin^3\\alpha\\)", "\\(3\\sin\\alpha-4\\sin^3\\alpha\\)", "\\(\\sin\\alpha-4\\sin^3\\alpha\\)", "\\(4\\sin^3\\alpha-3\\sin\\alpha\\)"], 1],
    ["\\(\\cos3\\alpha=\\)", ["\\(4\\cos^3\\alpha+3\\cos\\alpha\\)", "\\(3\\cos^3\\alpha-4\\cos\\alpha\\)", "\\(4\\cos^3\\alpha-3\\cos\\alpha\\)", "\\(3\\cos\\alpha-4\\cos^3\\alpha\\)"], 2],
    ["\\(\\tan3\\alpha=\\)", ["\\(\\dfrac{3\\tan\\alpha+\\tan^3\\alpha}{1+3\\tan^2\\alpha}\\)", "\\(\\dfrac{3\\tan\\alpha-\\tan^3\\alpha}{1-3\\tan^2\\alpha}\\)", "\\(\\dfrac{3\\tan\\alpha-\\tan^3\\alpha}{1+3\\tan^2\\alpha}\\)", "\\(\\dfrac{\\tan^3\\alpha-3\\tan\\alpha}{1-3\\tan^2\\alpha}\\)"], 1],
    ["\\(\\cos^2\\left(\\dfrac{\\theta}{2}\\right)=\\)", ["\\(\\dfrac{1+\\cos\\theta}{2}\\)", "\\(1+\\cos\\theta\\)", "\\(\\dfrac{1-\\cos\\theta}{2}\\)", "\\(\\dfrac{1+\\sin\\theta}{2}\\)"], 0],
    ["\\(\\sin^2\\left(\\dfrac{\\theta}{2}\\right)=\\)", ["\\(\\dfrac{1-\\sin\\theta}{2}\\)", "\\(1-\\cos\\theta\\)", "\\(\\dfrac{1-\\cos\\theta}{2}\\)", "\\(\\dfrac{1+\\cos\\theta}{2}\\)"], 2],
    ["\\(\\tan\\left(\\dfrac{\\theta}{2}\\right)=\\)", ["\\(\\pm\\sqrt{\\dfrac{1-\\cos\\theta}{1+\\cos\\theta}}\\)", "\\(\\pm\\sqrt{\\dfrac{1+\\cos\\theta}{1-\\cos\\theta}}\\)", "\\(\\dfrac{1-\\cos\\theta}{\\sin\\theta}\\)", "\\(\\dfrac{\\sin\\theta}{1-\\cos\\theta}\\)"], 0],
    ["If \\(\\sin\\theta=\\dfrac35\\) and \\(\\theta\\) is acute, then \\(\\cos2\\theta=\\)", ["\\(\\dfrac{25}{7}\\)", "\\(\\dfrac7{25}\\)", "\\(-\\dfrac7{25}\\)", "\\(\\dfrac{24}{25}\\)"], 1],
    ["If \\(\\sin\\theta=\\dfrac35\\) and \\(\\theta\\) is acute, then \\(\\sin2\\theta=\\)", ["\\(-\\dfrac{24}{25}\\)", "\\(\\dfrac{12}{25}\\)", "\\(\\dfrac7{25}\\)", "\\(\\dfrac{24}{25}\\)"], 3],
    ["If \\(\\cos\\theta=-\\dfrac7{25}\\) with \\(\\theta\\) in QIII, then \\(\\sin\\left(\\dfrac{\\theta}{2}\\right)=\\)", ["\\(-\\dfrac45\\)", "\\(\\dfrac35\\)", "\\(-\\dfrac35\\)", "\\(\\dfrac45\\)"], 3],
    ["If \\(\\cos\\theta=-\\dfrac7{25}\\) with \\(\\theta\\) in QIII, then \\(\\cos\\left(\\dfrac{\\theta}{2}\\right)=\\)", ["\\(\\dfrac45\\)", "\\(-\\dfrac35\\)", "\\(-\\dfrac45\\)", "\\(\\dfrac35\\)"], 1],
    ["\\(4\\sin^4x\\) expressed in cosines of power 1 is:", ["\\(3-4\\cos2x+\\cos4x\\)", "\\(\\dfrac{1-4\\cos2x+\\cos4x}{2}\\)", "\\(\\dfrac{3+4\\cos2x+\\cos4x}{2}\\)", "\\(\\dfrac{3-4\\cos2x+\\cos4x}{2}\\)"], 3],
    ["Expressing \\(12\\sin\\theta+5\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=17\\)", "\\(r=\\sqrt7\\)", "\\(r=169\\)", "\\(r=13\\)"], 3],
    ["Expressing \\(3\\sin\\theta+4\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=25\\)", "\\(r=\\sqrt1\\)", "\\(r=5\\)", "\\(r=7\\)"], 2],
    ["Expressing \\(1\\sin\\theta+1\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=\\sqrt0\\)", "\\(r=2\\)", "\\(r=1\\)", "\\(r=\\sqrt2\\)"], 3],
    ["Expressing \\(5\\sin\\theta+12\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=169\\)", "\\(r=17\\)", "\\(r=\\sqrt7\\)", "\\(r=13\\)"], 3],
    ["Expressing \\(8\\sin\\theta+15\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=23\\)", "\\(r=17\\)", "\\(r=\\sqrt7\\)", "\\(r=289\\)"], 1],
    ["Expressing \\(7\\sin\\theta+24\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=25\\)", "\\(r=\\sqrt{17}\\)", "\\(r=31\\)", "\\(r=625\\)"], 0],
    ["Expressing \\(9\\sin\\theta+40\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=41\\)", "\\(r=\\sqrt{31}\\)", "\\(r=1681\\)", "\\(r=49\\)"], 0],
    ["Expressing \\(20\\sin\\theta+21\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=841\\)", "\\(r=29\\)", "\\(r=\\sqrt1\\)", "\\(r=41\\)"], 1],
    ["Expressing \\(6\\sin\\theta+8\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=100\\)", "\\(r=14\\)", "\\(r=10\\)", "\\(r=\\sqrt2\\)"], 2],
    ["Expressing \\(15\\sin\\theta+8\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["\\(r=289\\)", "\\(r=17\\)", "\\(r=23\\)", "\\(r=\\sqrt7\\)"], 1],
    ["\\(2\\sin\\alpha\\cos\\beta=\\)", ["\\(\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)\\)", "\\(\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\)", "\\(2\\sin\\alpha\\sin\\beta\\)", "\\(\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)\\)"], 1],
    ["\\(2\\cos\\alpha\\sin\\beta=\\)", ["\\(\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)\\)", "\\(2\\cos\\alpha\\cos\\beta\\)", "\\(\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)\\)", "\\(\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\)"], 0],
    ["\\(2\\cos\\alpha\\cos\\beta=\\)", ["\\(\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\)", "\\(\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)\\)", "\\(2\\sin\\alpha\\sin\\beta\\)", "\\(\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)\\)"], 3],
    ["\\(-2\\sin\\alpha\\sin\\beta=\\)", ["\\(\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)\\)", "\\(\\cos(\\alpha+\\beta)-\\cos(\\alpha-\\beta)\\)", "\\(2\\cos\\alpha\\cos\\beta\\)", "\\(\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)\\)"], 1],
    ["\\(\\sin p+\\sin q=\\)", ["\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)"], 2],
    ["\\(\\sin p-\\sin q=\\)", ["\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)", "\\(-2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)"], 1],
    ["\\(\\cos p+\\cos q=\\)", ["\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)", "\\(-2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)"], 2],
    ["\\(\\cos p-\\cos q=\\)", ["\\(-2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)", "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)"], 0],
    ["Expressing \\(2\\cos6\\theta\\sin3\\theta\\) as a sum/difference of sines gives:", ["\\(\\sin9\\theta-\\sin3\\theta\\)", "\\(\\cos9\\theta-\\cos3\\theta\\)", "\\(2\\sin9\\theta\\)", "\\(\\sin9\\theta+\\sin3\\theta\\)"], 0],
    ["Expressing \\(\\cos45^\\circ-\\cos15^\\circ\\) as a product gives:", ["\\(-2\\cos30^\\circ\\sin15^\\circ\\)", "\\(2\\sin30^\\circ\\sin15^\\circ\\)", "\\(2\\cos30^\\circ\\cos15^\\circ\\)", "\\(-2\\sin30^\\circ\\sin15^\\circ\\)"], 3],
    ["\\(\\sin(45^\\circ-30^\\circ)=\\)", ["\\(\\dfrac{\\sqrt6-\\sqrt2}{2}\\)", "\\(\\dfrac{\\sqrt3-\\sqrt2}{2}\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"], 3],
    ["\\(\\sin22.5^\\circ\\cos22.5^\\circ+\\cos22.5^\\circ\\sin22.5^\\circ=\\)", ["\\(-\\dfrac1{\\sqrt2}\\)", "\\(\\dfrac1{\\sqrt2}\\)", "\\(\\dfrac1{\\sqrt3}\\)", "\\(-\\dfrac1{\\sqrt3}\\)"], 1],
    ["\\(\\cos(\\pi-\\theta)=\\)", ["\\(-\\cos\\theta\\)", "\\(\\pm\\cos\\theta\\)", "\\(\\cos\\theta\\)", "\\(\\sec\\theta\\)"], 0],
    ["\\(2\\sin\\alpha\\cos\\alpha=\\)", ["\\(\\sin(\\pi-2\\alpha)\\)", "\\(\\cos(-2\\alpha)\\)", "\\(\\sin(\\pi+2\\alpha)\\)", "\\(\\sin(2\\alpha)\\)"], 3],
    ["If \\(\\sin\\beta=\\dfrac35\\), then \\(\\cos2\\beta=\\)", ["\\(-\\dfrac7{25}\\)", "\\(-\\dfrac75\\)", "\\(\\dfrac75\\)", "\\(\\dfrac7{25}\\)"], 3]
      ],
      mcqStimulus: [
        {
          stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>\\(\\sin A\\)</td><td>\\(\\tfrac{4}{5}\\), \\(A\\) in QII</td></tr><tr><td>\\(\\sin B\\)</td><td>\\(\\tfrac{5}{13}\\), \\(B\\) in QI</td></tr></table>",
          questions: [
            ["\\(\\cos A\\) equals:", ["\\(-\\tfrac35\\)", "\\(\\tfrac35\\)", "\\(-\\tfrac45\\)", "\\(\\tfrac45\\)"], 0],
            ["\\(\\cos B\\) equals:", ["\\(\\tfrac{12}{13}\\)", "\\(-\\tfrac{12}{13}\\)", "\\(\\tfrac5{13}\\)", "\\(-\\tfrac5{13}\\)"], 0],
            ["\\(\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B\\) equals:", ["\\(\\tfrac{33}{65}\\)", "\\(\\tfrac{63}{65}\\)", "\\(-\\tfrac{33}{65}\\)", "\\(\\tfrac{16}{65}\\)"], 0],
            ["\\(\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B\\) equals:", ["\\(\\tfrac{16}{65}\\)", "\\(-\\tfrac{16}{65}\\)", "\\(\\tfrac{63}{65}\\)", "\\(-\\tfrac{63}{65}\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Expression</th><th>Coefficients</th></tr><tr><td>\\(a\\sin\\theta+b\\cos\\theta\\)</td><td>\\(a=9,\\ b=12\\)</td></tr></table>",
          questions: [
            ["Writing \\(9\\sin\\theta+12\\cos\\theta\\) as \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:", ["15", "21", "3", "225"], 0],
            ["The maximum value the expression \\(9\\sin\\theta+12\\cos\\theta\\) can take is:", ["15", "21", "9", "12"], 0],
            ["The minimum value the expression can take is:", ["\\(-15\\)", "0", "\\(-21\\)", "\\(-3\\)"], 0],
            ["\\(\\tan\\phi=b/a\\) here equals:", ["\\(\\tfrac{12}9=\\tfrac43\\)", "\\(\\tfrac9{12}=\\tfrac34\\)", "\\(\\tfrac{15}9\\)", "\\(\\tfrac{21}{12}\\)"], 0]
          ]
        },
        {
          stimulus: "<table><tr><th>Angle</th><th>Split as</th></tr><tr><td>\\(75^\\circ\\)</td><td>\\(45^\\circ+30^\\circ\\)</td></tr></table>",
          questions: [
            ["Using \\(\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B\\), \\(\\sin75^\\circ\\) equals:", ["\\(\\dfrac{\\sqrt6+\\sqrt2}4\\)", "\\(\\dfrac{\\sqrt6-\\sqrt2}4\\)", "\\(\\dfrac{\\sqrt3+1}2\\)", "\\(\\dfrac{\\sqrt2}2\\)"], 0],
            ["Using \\(\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B\\), \\(\\cos75^\\circ\\) equals:", ["\\(\\dfrac{\\sqrt6-\\sqrt2}4\\)", "\\(\\dfrac{\\sqrt6+\\sqrt2}4\\)", "\\(\\dfrac{\\sqrt3-1}2\\)", "\\(\\dfrac12\\)"], 0],
            ["\\(\\tan75^\\circ=\\dfrac{\\sin75^\\circ}{\\cos75^\\circ}\\) equals:", ["\\(2+\\sqrt3\\)", "\\(2-\\sqrt3\\)", "\\(\\sqrt3+1\\)", "\\(\\sqrt3-1\\)"], 0],
            ["Since \\(75^\\circ=45^\\circ+30^\\circ\\), the value of \\(\\cos75^\\circ\\) can also be checked against \\(\\sin15^\\circ\\) because:", ["\\(\\cos75^\\circ=\\sin(90^\\circ-75^\\circ)=\\sin15^\\circ\\)", "\\(\\cos75^\\circ=-\\sin15^\\circ\\)", "They are unrelated", "\\(\\cos75^\\circ=\\cos15^\\circ\\)"], 0]
          ]
        }
      ],
      short: [],
      long: []
    }
  ]
};
