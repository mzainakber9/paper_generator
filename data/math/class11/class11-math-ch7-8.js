/*
  CLASS 11 — MATH — SHORT & LONG QUESTIONS — CHAPTERS 7 TO 8
  ------------------------------------------------------------
  Chapter 7: Mathematical Induction and Binomial Theorem
  Chapter 8: Fundamentals of Trigonometry

  Source: curated "Important Questions" sheets (FBISE pattern). mcq
  stays empty — MCQs for these chapters live in class11-math-mcq-ch7-8.js.
*/
var CLASS11_MATH_CH7_8 = {
  chapters: [
    {
      id: 7,
      name: "Mathematical Induction and Binomial Theorem",
      mcq: [],
      short: [
        {
          exercise: "Worked Examples — Sec 7.1 (Mathematical Induction)",
          questions: [
            { text: "Prove by induction: \\(1\\cdot2+2\\cdot3+3\\cdot4+\\cdots+n(n+1)=\\dfrac{n(n+1)(n+2)}{3},\\ \\forall n\\ge1\\).", answer: "Proved — \\(P(1)\\) true; \\(P(k)\\Rightarrow P(k+1)\\) by adding \\((k+1)(k+2)\\) to both sides." },
            { text: "Prove by induction: \\(n^{2}-3n+4\\) is even, \\(\\forall\\) positive integers \\(n\\).", answer: "Proved — \\(P(k+1)=(k^{2}-3k+4)+2(k-1)\\), a sum of two even numbers." },
            { text: "Prove by induction: \\(3^{n}>n^{2},\\ \\forall n\\ge1\\).", answer: "Proved — using \\(3^{k+1}=3\\cdot3^{k}>k^{2}+3k>(k+1)^{2}\\)." },
            { text: "Prove the Binomial Theorem \\((a+b)^{n}=\\sum\\binom{n}{r}a^{n-r}b^{r}\\) by induction.", answer: "Proved — base case \\(n=1\\) true; inductive step uses \\(\\binom{k}{r-1}+\\binom{k}{r}=\\binom{k+1}{r}\\)." }
          ]
        },
        {
          exercise: "Worked Examples — Sec 7.2 (Binomial Theorem / Pascal's Triangle)",
          questions: [
            { text: "Expand \\((1+2x)^{6}\\) using Pascal's triangle.", answer: "\\(1+12x+60x^{2}+160x^{3}+240x^{4}+192x^{5}+64x^{6}\\)" },
            { text: "Expand \\(\\left(2-\\dfrac1x\\right)^{5}\\) using Pascal's triangle.", answer: "\\(32-\\dfrac{80}{x}+\\dfrac{80}{x^{2}}-\\dfrac{40}{x^{3}}+\\dfrac{10}{x^{4}}-\\dfrac{1}{x^{5}}\\)" },
            { text: "Expand \\((x-y)^{5}\\) using the Binomial Theorem.", answer: "\\(x^{5}-5x^{4}y+10x^{3}y^{2}-10x^{2}y^{3}+5xy^{4}-y^{5}\\)" },
            { text: "Find the constant term in the expansion of \\(\\left(x+\\dfrac2x\\right)^{10}\\).", answer: "\\(T_6=8064\\) (occurs at \\(r=5\\))" },
            { text: "Find the 3rd term from the end in \\(\\left(2-\\dfrac{5}{\\sqrt x}\\right)^{5}\\).", answer: "\\(T_4=-5000x^{-3/2}\\)" },
            { text: "Find the remainder when \\(7^{101}\\) is divided by 25.", answer: "Remainder \\(=7\\)" },
            { text: "The 4th term of \\(\\left(ax+\\dfrac1x\\right)^{n}\\) is \\(\\dfrac52\\). Find \\(a\\) and \\(n\\).", answer: "\\(n=6,\\ a=\\dfrac12\\)" },
            { text: "Use Pascal's triangle to find the possible number of heads when 3 coins are tossed.", answer: "\\(0H{:}1,\\ 1H{:}3,\\ 2H{:}3,\\ 3H{:}1\\) (out of \\(2^{3}=8\\))" }
          ]
        },
        {
          exercise: "Worked Examples — Sec 7.4 (Applications of the Binomial Theorem)",
          questions: [
            { text: "Find the unit digit of (i) \\(17^{203}\\) (ii) \\(29^{26}\\) (iii) \\(36^{307}\\).", answer: "(i) 3 (ii) 1 (iii) 6" },
            { text: "Find the remainder when \\(7^{103}\\) is divided by 25.", answer: "Remainder \\(=18\\)" },
            { text: "If the fractional part of \\(2^{403}/15\\) is \\(k/15\\), find \\(k\\).", answer: "\\(k=8\\)" },
            { text: "Find the last two digits of \\((13)^{10}\\).", answer: "\\(49\\)" },
            { text: "Which is greater, \\(99^{50}+100^{50}\\) or \\(101^{50}\\)?", answer: "\\(101^{50}\\) is greater, since \\(101^{50}-99^{50}>100^{50}\\)" },
            { text: "Show that \\(11^{9}+9^{11}\\) is divisible by 10.", answer: "Proved — expanding \\((10+1)^{9}+(10-1)^{11}\\) reduces to \\(10k\\)" }
          ]
        },
        {
          exercise: "Ex 7.1 (prove by Mathematical Induction)",
          questions: [
            { text: "\\(n^{3}+2n\\) is divisible by 3, \\(\\forall n\\ge1\\).", answer: "Proved by induction — \\(P(1)\\): 3 is divisible by 3; \\(P(k)\\to P(k+1)\\) verified" },
            { text: "6 is a factor of \\(n(n^{2}+5)\\), \\(\\forall n\\ge1\\).", answer: "Proved by induction — true for \\(n=1\\) (\\(6\\mid6\\)); inductive step holds" },
            { text: "\\(\\dfrac{n(3n^{4}+5n^{2}+7)}{15}\\) is a rational number, \\(\\forall n\\ge1\\).", answer: "Proved by induction — the expression is always an integer, hence rational" },
            { text: "\\(4^{n}+15n-1\\) is divisible by 9, \\(\\forall n\\ge1\\).", answer: "Proved by induction — \\(P(1)\\): 18 divisible by 9; inductive step verified" },
            { text: "\\(7^{n}-2^{n}\\) is divisible by 5, \\(\\forall n\\ge0\\).", answer: "Proved by induction — \\(P(0)\\): 0 divisible by 5; inductive step verified" },
            { text: "\\(2^{n}<(n+1)!,\\ \\forall n\\ge2\\).", answer: "Proved by induction — \\(P(2)\\): \\(4<6\\) true; inequality preserved for \\(k+1\\)" },
            { text: "\\(5n+9<6^{n},\\ \\forall n\\ge2\\).", answer: "Proved by induction — \\(P(2)\\): \\(34<36\\) true; inductive step verified" },
            { text: "If \\(h>-1\\) then \\(1+nh\\le(1+h)^{n},\\ \\forall n\\ge0\\) (Bernoulli's Inequality).", answer: "Proved by induction — \\(P(0)\\) trivially true; \\((1+h)^{k+1}\\ge1+(k+1)h\\) shown" },
            { text: "\\(\\binom{2n}{n}<2^{2n-2},\\ \\forall n\\ge5\\).", answer: "Proved by induction — verified for \\(n=5\\), then inductive step for \\(k+1\\)" },
            { text: "\\(n!>n^{2},\\ \\forall n\\ge4\\).", answer: "Proved by induction — \\(P(4)\\): \\(24>16\\) true; inductive step verified" }
          ]
        },
        {
          exercise: "Ex 7.2 (Binomial Theorem — expansions and coefficients)",
          questions: [
            { text: "Expand \\(\\left(2-x^{3/2}\\right)^{7}\\) using Pascal's triangle.", answer: "Use the 7th row \\(1,7,21,35,35,21,7,1\\) — an 8-term expansion, decreasing powers of 2, alternating signs" },
            { text: "Expand \\(\\left(\\dfrac{x^{2}}{y^{2}}-\\sqrt{\\dfrac{y}{x}}\\right)^{5}\\) using Pascal's triangle.", answer: "Use the 5th row \\(1,5,10,10,5,1\\) — a 6-term expansion" },
            { text: "Expand \\((a\\sqrt2+b\\sqrt3)^{5}\\) using the Binomial Theorem.", answer: "\\(4a^{5}\\sqrt2+30a^{4}b\\sqrt3+60\\sqrt2\\,a^{3}b^{2}+90\\sqrt3\\,a^{2}b^{3}+60\\sqrt2\\,ab^{4}+9\\sqrt3\\,b^{5}\\)" },
            { text: "Expand \\((1+2x-y)^{4}\\) using the Binomial Theorem.", answer: "Treat \\((2x-y)\\) as one term and expand \\((1+(2x-y))^{4}\\)" },
            { text: "Simplify \\((.99)^{3}+(1.01)^{4}\\).", answer: "\\(\\approx1.9703\\) (to 4 d.p.; exact via expansion)" },
            { text: "Simplify \\((a^{2}+\\sqrt{a^{2}-1})^{4}-(a^{2}-\\sqrt{a^{2}-1})^{4}\\).", answer: "\\(=8a^{3}\\sqrt{a^{2}-1}+8a\\sqrt{a^{2}-1}^{3}\\) (only odd-power terms survive)" },
            { text: "Find the coefficient of the 8th term of \\(\\left(x^{2}+\\dfrac{y}{2}\\right)^{10}\\).", answer: "Coefficient \\(=\\dfrac{15}{16}\\) (\\(T_8,\\ r=7\\))" },
            { text: "Find the middle term of \\(\\left(\\dfrac{a}{\\sqrt x}+\\sqrt x\\right)^{8}\\).", answer: "\\(T_5=70a^{4}\\)" },
            { text: "Find the middle term of \\(\\left(a-\\dfrac{3}{x^{2}}\\right)^{12}\\).", answer: "\\(T_7=673596\\,a^{6}/x^{12}\\)" },
            { text: "Find the term involving \\(q^{8}\\) in \\(\\left(\\dfrac{p^{2}}{2}+6q^{2}\\right)^{12}\\).", answer: "\\(T_5=\\dfrac{40095}{16}p^{16}q^{8}\\)" },
            { text: "Find the term involving \\(y^{8}x^{3}\\) in \\((y^{4}-3x)^{5}\\).", answer: "\\(T_4=-270x^{3}y^{8}\\)" },
            { text: "Find the term independent of \\(x\\) in (i) \\(\\left(2x^{2}-\\dfrac1x\\right)^{12}\\) (ii) \\(\\left(\\sqrt x+\\dfrac{1}{3x^{2}}\\right)^{10}\\).", answer: "(i) \\(T_9=7920\\) (ii) \\(T_3=5\\)" },
            { text: "The sum of coefficients of the first three terms in \\(\\left(a-\\dfrac{3}{a^{2}}\\right)^{n}\\) is 559. Find the term involving \\(a^{3}\\).", answer: "\\(n=12\\); term \\(=T_4=-5940\\,a^{3}\\)" },
            { text: "If the coefficients of the \\((r-5)\\)th and \\((2r-1)\\)th terms in \\((1+a)^{34}\\) are equal, find \\(r\\).", answer: "\\(r=14\\)" },
            { text: "If the coefficients of the 2nd, 3rd, 4th terms of \\((1+x)^{2m}\\) are in A.P., show \\(2m^{2}-9m+7=0\\).", answer: "Proved — directly from the three binomial coefficients being in A.P." },
            { text: "If coefficients of three consecutive terms in \\((1+x)^{n}\\) are in ratio \\(6:33:110\\), find \\(n\\) and the terms' positions.", answer: "\\(n=12\\); terms are the 2nd, 3rd and 4th" },
            { text: "Prove \\(\\binom{n}{0}+\\dfrac12\\binom{n}{1}+\\dfrac13\\binom{n}{2}+\\cdots+\\dfrac{1}{n+1}\\binom{n}{n}=\\dfrac{2^{n+1}-1}{n+1}\\).", answer: "Proved — integrate the expansion of \\((1+x)^{n}\\) from 0 to 1" },
            { text: "Prove \\(\\binom{n}{0}-\\dfrac12\\binom{n}{1}+\\dfrac13\\binom{n}{2}-\\cdots+\\dfrac{(-1)^{n}}{n+1}\\binom{n}{n}=\\dfrac{1}{n+1}\\).", answer: "Proved — integrate the expansion of \\((1-x)^{n}\\) from 0 to 1" },
            { text: "Prove \\(\\binom{n}{0}+\\dfrac12\\binom{n}{1}+\\dfrac{1}{2^{2}}\\binom{n}{2}+\\cdots+\\dfrac{1}{2^{n}}\\binom{n}{n}=\\left(\\dfrac32\\right)^{n}\\).", answer: "Proved — put \\(x=1/2\\) in the expansion of \\((1+x)^{n}\\)" },
            { text: "Prove \\(\\binom{n}{0}^{2}+\\binom{n}{1}^{2}+\\cdots+\\binom{n}{n}^{2}=\\binom{2n}{n}\\).", answer: "Proved — compare the coefficient of \\(x^{n}\\) in \\((1+x)^{n}(1+x)^{n}=(1+x)^{2n}\\)" }
          ]
        },
        {
          exercise: "Ex 7.2 (Q18–Q20 — Pascal's triangle applications)",
          questions: [
            { text: "Use Pascal's triangle to find the number of heads when six coins are tossed.", answer: "\\(0H{:}1,1H{:}6,2H{:}15,3H{:}20,4H{:}15,5H{:}6,6H{:}1\\) (out of \\(2^{6}=64\\))" },
            { text: "If 7 coins are tossed, how many times will 5 heads appear?", answer: "\\(\\binom{7}{5}=21\\) outcomes" },
            { text: "If a coin is tossed 8 times, how many times will 3 tails appear?", answer: "\\(\\binom{8}{3}=56\\) outcomes" }
          ]
        },
        {
          exercise: "Ex 7.4 (Applications of the Binomial Theorem)",
          questions: [
            { text: "Find the unit-place digits in \\(27^{304}, 108^{33}, 54^{203}, 503^{43}\\).", answer: "\\(1,8,4,7\\) respectively" },
            { text: "Find the remainder when (a) \\(9^{205}\\) is divided by 31 (b) \\(8^{205}\\) is divided by 48.", answer: "(a) \\(5\\) (b) \\(32\\)" },
            { text: "If the fractional part of \\(25^{10}/31\\) is \\(k/31\\), find \\(k\\).", answer: "\\(k=1\\) (since \\(2^5\\equiv1\\bmod31\\) and 510 is a multiple of 5)" },
            { text: "Which is larger? (a) \\(98^{50}+100^{50}\\) or \\(102^{50}\\) (b) \\(47^{30}+50^{30}\\) or \\(53^{30}\\).", answer: "(a) \\(102^{50}\\) (b) \\(53^{30}\\)" },
            { text: "Show that \\(22^{25}+18^{25}\\) is divisible by 20.", answer: "Proved — write \\(22=20+2,\\ 18=20-2\\); every surviving term carries a factor of 20" },
            { text: "What is the remainder when \\(17^{1717}\\) is divided by 9?", answer: "Remainder \\(=8\\) (since \\(17\\equiv-1\\bmod9\\), exponent odd)" },
            { text: "Using the Binomial Theorem, which is larger, \\((1.1)^{10000}\\) or \\(1000\\)?", answer: "\\((1.1)^{10000}\\) is far larger — by Bernoulli's inequality it exceeds \\(1001\\)" },
            { text: "If \\(a,b\\) are distinct integers, prove \\(a-b\\) is a factor of \\(a^{n}-b^{n}\\), \\(\\forall n\\ge1\\).", answer: "Proved — \\(a^{n}-b^{n}=(a-b)(a^{n-1}+a^{n-2}b+\\cdots+b^{n-1})\\)" },
            { text: "Show that \\(6^{n+3}-8n-6\\) is divisible by 6.", answer: "Proved by induction — \\(P(k+1)\\) reduces to a multiple of 6" }
          ]
        },
        {
          exercise: "Review Exercise (Q1 — multiple choice)",
          questions: [
            { text: "Mathematical induction is used to check a proposition for all \\(n\\) where \\(n\\) is: positive integer / real / rational / none", answer: "positive integer" },
            { text: "A statement true for all positive integers is also true for all: negative integers / rationals / reals / none", answer: "none" },
            { text: "If \\(n\\) is an even positive integer, the middle term in \\((a+b)^{n}\\) is:", answer: "\\(\\left(\\dfrac{n}{2}+1\\right)\\)th term" },
            { text: "In the expansion of \\((a+b)^{20}\\), a term at the 11th position is, from the end, at position:", answer: "11th" },
            { text: "The coefficient of the 3rd-last term in \\((1+x)^{300}\\) is:", answer: "\\(44850\\)" },
            { text: "\\(\\binom{11}{0}+\\binom{11}{2}+\\binom{11}{4}+\\cdots+\\binom{11}{10}\\) equals:", answer: "\\(2^{10}\\)" },
            { text: "If the third term in the expansion of \\((1+x)^{p}\\) is \\(-\\dfrac18x^{2}\\), find \\(p\\).", answer: "\\(p=\\dfrac12\\)" },
            { text: "The coefficient of \\(x^{n}\\) in \\((1+x+x^{2}+\\cdots)^{-n}\\), \\(n\\) even, is:", answer: "\\(1\\)" },
            { text: "The greatest coefficient in the expansion of \\((1+x)^{10}\\) is:", answer: "\\(\\binom{10}{5}\\)" },
            { text: "The binomial series \\((2+3x)^{-1/2}\\) is valid when:", answer: "\\(|x|<2/3\\)" }
          ]
        }
      ],
      long: [
        {
          exercise: "Ex 7.3 (Binomial Series — expansion & convergence)",
          questions: [
            { text: "Expand \\((1-\\sqrt x)^{-3}\\) up to four terms and state the interval of convergence.", answer: "\\(1+3\\sqrt x+6x+10x^{3/2}\\); convergent for \\(0\\le x<1\\)" },
            { text: "Expand \\(\\left(3+\\dfrac2x\\right)^{-1/3}\\) up to four terms and state the interval of convergence.", answer: "\\(3^{-1/3}\\left[1-\\dfrac{2}{9x}+\\dfrac{8}{81x^{2}}-\\cdots\\right]\\); convergent for \\(|x|>2/3\\)" },
            { text: "Expand \\(\\left(\\dfrac52-\\dfrac{3}{x^{2}}\\right)^{1/2}\\) up to four terms and state the interval of convergence.", answer: "\\((5/2)^{1/2}\\left[1-\\dfrac{3}{5x^{2}}-\\cdots\\right]\\); convergent for \\(|x|>\\sqrt{6/5}\\)" },
            { text: "Expand \\(\\dfrac{3+x}{3-x}\\) up to four terms and state the interval of convergence.", answer: "\\((1+x/3)(1-x/3)^{-1}\\) series; convergent for \\(|x|<3\\)" },
            { text: "Expand \\(\\dfrac{1-2x}{\\sqrt{3+x/2}}\\) up to four terms and state the interval of convergence.", answer: "\\((1-2x)\\cdot3^{-1/2}(1+x/6)^{-1/2}\\) series; convergent for \\(|x|<6\\)" },
            { text: "Expand \\(\\dfrac{\\sqrt{x+1}}{\\sqrt{1-x}}\\) up to four terms and state the interval of convergence.", answer: "\\((1+x)^{1/2}(1-x)^{-1/2}\\) series; convergent for \\(|x|<1\\)" },
            { text: "Approximate \\(\\sqrt[6]{65}\\) to four decimal places.", answer: "\\(\\approx2.0052\\)" },
            { text: "Approximate \\(\\sqrt{5/3}\\) to four decimal places.", answer: "\\(\\approx1.2910\\)" },
            { text: "Approximate \\((1.03)^{1/3}\\) to four decimal places.", answer: "\\(\\approx1.0099\\)" },
            { text: "Approximate \\((0.95)^{2/7}\\) to four decimal places.", answer: "\\(\\approx0.9855\\)" },
            { text: "Find the term involving \\(x^{14}\\) in \\((1+x^{2})(2+\\sqrt3x^{3})^{-1/2}\\).", answer: "\\(\\approx0.1087x^{14}\\) (from the \\(x^2\\times x^{12}\\) part, \\(r=4\\))" },
            { text: "If \\(x\\) is so small its square and higher powers may be neglected, prove the three given approximations.", answer: "Proved — each side reduces to \\(1+\\)(linear term in \\(x\\)) via the binomial series, matching the RHS" },
            { text: "If \\(x\\) is so small its cube and higher powers may be neglected, show the two given approximations.", answer: "Proved — expand each factor to \\(x^{2}\\) and simplify; higher powers vanish" },
            { text: "If \\(x\\) is so large that \\((1/x)^{2}\\) and higher powers may be neglected, show \\(\\sqrt{x^{2}+25}-\\sqrt{x^{2}+9}\\approx8/x\\).", answer: "Proved — difference \\(\\approx(25-9)/(2x)=8/x\\)" },
            { text: "Find the term involving \\(x^{n}\\) in \\(\\dfrac{(2+x)^{2}}{(1+x)^{3}}\\).", answer: "Coefficient of \\(x^{n}=(-1)^{n}(n^{2}+7n+8)/2\\)" },
            { text: "Identify each given series as a binomial series and find its sum.", answer: "Match the general term \\(\\dfrac{n(n-1)\\cdots}{r!}x^{r}\\) to identify \\(n,x\\); sum \\(=(1+x)^{n}\\) evaluated at the identified \\(x\\)" },
            { text: "If \\(y=\\dfrac{3}{2^{2}\\cdot1!}+\\dfrac{3}{2^{4}\\cdot2!}+\\dfrac{3}{2^{6}\\cdot3!}+\\cdots\\), show \\(8y^{2}+16y-19=0\\).", answer: "Proved — identify the series with a binomial/exponential expansion and substitute" },
            { text: "If \\(\\dfrac2y=\\dfrac13+\\dfrac{1\\cdot3}{3\\cdot6}+\\dfrac{1\\cdot3\\cdot5}{3\\cdot6\\cdot9}+\\cdots\\), show \\(y^{2}-2y-2=0\\).", answer: "Proved — identify the series as \\((1-x)^{-1/2}\\) type and substitute" },
            { text: "If \\(x\\) is very nearly 1, show \\(\\dfrac{ax^{b}-bx^{a}}{x^{b}-x^{a}}\\approx\\dfrac{1}{1-x}\\).", answer: "Proved — write \\(x=1-h\\), expand each power for small \\(h\\), simplify" },
            { text: "If \\(p,q\\) are approximately equal, prove \\(\\dfrac{q+2p}{p+2q}\\approx\\left(\\dfrac{p}{q}\\right)^{1/3}\\); hence approximate \\((2.01/2)^{1/3}\\).", answer: "Proved; \\((2.01/2)^{1/3}\\approx1.0017\\)" }
          ]
        },
        {
          exercise: "Review Exercise (long questions)",
          questions: [
            { text: "By mathematical induction prove: \\(\\dfrac{1}{1\\cdot2\\cdot3}+\\dfrac{1}{2\\cdot3\\cdot4}+\\cdots+\\dfrac{1}{n(n+1)(n+2)}=\\dfrac{n(n+3)}{4(n+1)(n+2)}\\).", answer: "Proved — \\(P(1)\\) true; \\(P(k)\\to P(k+1)\\) verified by adding the \\((k+1)\\)th term" },
            { text: "The ratio of coefficients of three consecutive terms of \\((1+x)^{n}\\) is \\(2:15:70\\). Find the average of the three coefficients.", answer: "\\(n=16\\); coefficients \\(16,120,560\\to\\)average \\(=232\\)" },
            { text: "Show that \\(\\left(x^{2}+\\dfrac1x\\right)^{12}\\) has no term involving \\(1/x\\).", answer: "Proved — the power of \\(x\\) is \\(24-3r\\), never \\(-1\\) for integer \\(r\\)" },
            { text: "If \\(\\alpha,\\beta\\) are nearly equal, show \\(\\left(\\dfrac{3\\beta}{5\\alpha-2\\beta}\\right)^{-1/3}\\approx\\dfrac{\\alpha}{\\alpha+2\\beta}+\\dfrac{\\alpha+\\beta}{3\\beta}\\).", answer: "Proved — expand using the binomial series for small \\((\\beta-\\alpha)\\), keeping the linear term" },
            { text: "If \\({}^{22}C_r\\) is the largest coefficient in \\((1+x)^{22}\\), find \\({}^{13}C_r\\).", answer: "\\(r=11;\\ {}^{13}C_{11}=78\\)" },
            { text: "Use the Binomial Theorem to prove \\(6^{n}-5n\\) leaves remainder 1 when divided by 5.", answer: "Proved — \\(6^{n}=(5+1)^{n}=5k+1\\), so \\(6^{n}-5n=5(k-n)+1\\), remainder 1" }
          ]
        }
      ]
    },
    {
      id: 8,
      name: "Fundamentals of Trigonometry",
      mcq: [],
      short: [
        {
          exercise: "Ex 8.1 (Q1 — sum/difference identities)",
          questions: [
            { text: "Find \\(\\cos(\\alpha+\\beta),\\cos(\\alpha-\\beta),\\sin(\\alpha+\\beta),\\sin(\\alpha-\\beta),\\tan(\\alpha\\pm\\beta)\\) for \\(\\alpha=60^\\circ,\\beta=90^\\circ\\).", answer: "\\(\\cos(\\alpha+\\beta)=-\\dfrac{\\sqrt3}{2},\\ \\cos(\\alpha-\\beta)=\\dfrac{\\sqrt3}{2},\\ \\sin(\\alpha+\\beta)=\\dfrac12,\\ \\sin(\\alpha-\\beta)=-\\dfrac12,\\ \\tan(\\alpha\\pm\\beta)=-\\dfrac{1}{\\sqrt3}\\)" },
            { text: "Same, for \\(\\alpha=\\pi,\\ \\beta=2\\pi/3\\).", answer: "\\(\\cos(\\alpha+\\beta)=\\cos(\\alpha-\\beta)=\\dfrac12\\); \\(\\sin(\\alpha+\\beta)=-\\dfrac{\\sqrt3}{2},\\sin(\\alpha-\\beta)=\\dfrac{\\sqrt3}{2}\\); \\(\\tan(\\alpha+\\beta)=-\\sqrt3,\\tan(\\alpha-\\beta)=\\sqrt3\\)" },
            { text: "Same, for \\(\\alpha=7\\pi/4,\\ \\beta=3\\pi/4\\).", answer: "\\(\\alpha+\\beta=5\\pi/2\\equiv\\pi/2,\\ \\alpha-\\beta=\\pi\\Rightarrow\\cos(\\alpha+\\beta)=0,\\cos(\\alpha-\\beta)=-1;\\ \\sin(\\alpha+\\beta)=1,\\sin(\\alpha-\\beta)=0;\\ \\tan(\\alpha+\\beta)\\) undefined, \\(\\tan(\\alpha-\\beta)=0\\)" }
          ]
        },
        {
          exercise: "Ex 8.1 (Q3 — exact values via sum/difference identities)",
          questions: [
            { text: "Find exact values of \\(\\cos120^\\circ,\\sin120^\\circ,\\tan120^\\circ,\\cos75^\\circ,\\cos105^\\circ,\\cos285^\\circ,\\sin15^\\circ\\).", answer: "\\(\\cos120^\\circ=-\\dfrac12;\\sin120^\\circ=\\dfrac{\\sqrt3}{2};\\tan120^\\circ=-\\sqrt3;\\cos75^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{4};\\cos105^\\circ=-\\dfrac{\\sqrt6-\\sqrt2}{4};\\cos285^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{4};\\sin15^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{4}\\)" }
          ]
        },
        {
          exercise: "Ex 8.1 (Q4 — rewrite as a single expression)",
          questions: [
            { text: "Rewrite as a single expression: \\(\\cos7\\theta\\cos2\\theta+\\sin7\\theta\\sin2\\theta\\)", answer: "\\(\\cos5\\theta\\)" },
            { text: "Rewrite as a single expression: \\(\\sin138^\\circ\\cos46^\\circ-\\cos138^\\circ\\sin46^\\circ\\)", answer: "\\(\\sin92^\\circ\\)" },
            { text: "Rewrite as a single expression: \\(\\dfrac{\\tan(4\\pi/3)+\\tan(2\\pi/3)}{1-\\tan(4\\pi/3)\\tan(2\\pi/3)}\\)", answer: "\\(\\tan(2\\pi)=0\\)" }
          ]
        },
        {
          exercise: "Ex 8.1 (Q7, Q9 — given ratios, find sum/difference values)",
          questions: [
            { text: "Given \\(\\alpha,\\beta\\) acute, \\(\\sin\\alpha=12/13,\\tan\\beta=4/3\\). Find \\(\\sin(\\alpha+\\beta),\\cos(\\alpha+\\beta),\\tan(\\alpha+\\beta)\\).", answer: "\\(\\sin(\\alpha+\\beta)=\\dfrac{56}{65};\\cos(\\alpha+\\beta)=-\\dfrac{33}{65};\\tan(\\alpha+\\beta)=-\\dfrac{56}{33}\\)" },
            { text: "Given \\(\\alpha,\\beta\\) obtuse, \\(\\sin\\alpha=1/\\sqrt2,\\cos\\beta=-3/5\\). Find \\(\\sin(\\alpha\\pm\\beta),\\cos(\\alpha\\pm\\beta),\\tan(\\alpha\\pm\\beta)\\).", answer: "\\(\\sin(\\alpha+\\beta)=-\\dfrac{7\\sqrt2}{10},\\sin(\\alpha-\\beta)=\\dfrac{\\sqrt2}{10}\\); \\(\\cos(\\alpha+\\beta)=-\\dfrac{\\sqrt2}{10},\\cos(\\alpha-\\beta)=\\dfrac{7\\sqrt2}{10}\\); \\(\\tan(\\alpha+\\beta)=7,\\tan(\\alpha-\\beta)=1/7\\)" }
          ]
        },
        {
          exercise: "Ex 8.1 (Q10 — verify identities)",
          questions: [
            { text: "Verify: \\(\\sin(\\beta+\\pi/4)=\\dfrac{\\sqrt2}{2}(\\cos\\beta+\\sin\\beta)\\)", answer: "Proved by expanding \\(\\sin(\\beta+\\pi/4)\\) with the sum identity" },
            { text: "Verify: \\(\\tan(\\gamma-\\pi/4)=\\dfrac{\\tan\\gamma-1}{\\tan\\gamma+1}\\)", answer: "Proved by expanding \\(\\tan(\\gamma-\\pi/4)\\), using \\(\\tan(\\pi/4)=1\\)" },
            { text: "Verify: \\(\\tan(\\gamma+\\pi/4)=\\dfrac{1+\\tan\\gamma}{1-\\tan\\gamma}=\\dfrac{\\cos\\gamma+\\sin\\gamma}{\\cos\\gamma-\\sin\\gamma}\\)", answer: "Proved by expanding \\(\\tan(\\gamma+\\pi/4)\\) and dividing by \\(\\cos\\gamma\\)" }
          ]
        },
        {
          exercise: "Ex 8.1 (Q11 — show/prove identities)",
          questions: [
            { text: "Show: \\(\\tan\\alpha+\\tan\\beta=\\dfrac{\\sin(\\alpha+\\beta)}{\\cos\\alpha\\cos\\beta}\\)", answer: "Proved by writing \\(\\tan\\alpha,\\tan\\beta\\) as \\(\\sin/\\cos\\) and combining" },
            { text: "Show: \\(\\dfrac{\\tan(x+y)}{\\cot(x-y)}=\\dfrac{\\tan^{2}x-\\tan^{2}y}{1-\\tan^{2}x\\tan^{2}y}\\)", answer: "Proved using \\(\\tan(x+y)\\) and \\(\\tan(x-y)\\) expansions" },
            { text: "Show: \\(\\cot(\\alpha-\\beta)=\\dfrac{\\cot\\alpha\\cot\\beta+1}{\\cot\\beta-\\cot\\alpha}\\)", answer: "Proved from \\(\\cos(\\alpha-\\beta)/\\sin(\\alpha-\\beta)\\)" },
            { text: "Show: \\(\\dfrac{\\cos4\\theta}{\\csc\\theta}+\\dfrac{\\sin4\\theta}{\\sec\\theta}=\\sin5\\theta\\)", answer: "Proved: \\(\\cos4\\theta\\sin\\theta+\\sin4\\theta\\cos\\theta=\\sin(4\\theta+\\theta)=\\sin5\\theta\\)" }
          ]
        },
        {
          exercise: "Ex 8.1 (Q13 — express as \\(r\\sin(\\theta+\\varphi)\\))",
          questions: [
            { text: "Express \\(3\\sin\\theta+4\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\varphi)\\).", answer: "\\(5\\sin(\\theta+\\varphi)\\), \\(\\varphi=\\tan^{-1}(4/3)\\)" },
            { text: "Express \\(\\sin\\theta-\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\varphi)\\).", answer: "\\(\\sqrt2\\sin(\\theta-45^\\circ)\\)" }
          ]
        },
        {
          exercise: "Ex 8.2 (Q1, Q3 — double/half angle from a given point)",
          questions: [
            { text: "\\(P(-3,4)\\) lies on the terminal side of \\(\\theta\\). Find \\(\\cos2\\theta,\\sin2\\theta\\) and the quadrant of \\(2\\theta\\).", answer: "\\(\\cos2\\theta=-\\dfrac{7}{25},\\sin2\\theta=-\\dfrac{24}{25}\\); \\(2\\theta\\) in Quadrant III" },
            { text: "Use a half-angle formula to find the exact value of \\(\\cos15^\\circ\\).", answer: "\\(\\cos15^\\circ=\\dfrac{\\sqrt6+\\sqrt2}{4}\\)" }
          ]
        },
        {
          exercise: "Ex 8.2 (Q4 — double/half-angle values from a given ratio)",
          questions: [
            { text: "For \\(\\tan\\theta=12/5,\\ \\pi<\\theta<3\\pi/2\\), find \\(\\sin2\\theta,\\cos2\\theta,\\tan2\\theta,\\sin(\\theta/2),\\cos(\\theta/2),\\tan(\\theta/2)\\).", answer: "\\(\\sin2\\theta=\\dfrac{120}{169},\\cos2\\theta=-\\dfrac{119}{169},\\tan2\\theta=-\\dfrac{120}{119}\\); \\(\\sin(\\theta/2)=\\dfrac{3}{\\sqrt{13}},\\cos(\\theta/2)=-\\dfrac{2}{\\sqrt{13}},\\tan(\\theta/2)=-\\dfrac32\\)" },
            { text: "For \\(\\sin\\theta=-7/25,\\ 3\\pi/2<\\theta<2\\pi\\), find the same six values.", answer: "\\(\\sin2\\theta=-\\dfrac{336}{625},\\cos2\\theta=\\dfrac{527}{625},\\tan2\\theta=-\\dfrac{336}{527}\\); \\(\\sin(\\theta/2)=\\dfrac{\\sqrt2}{10},\\cos(\\theta/2)=-\\dfrac{7\\sqrt2}{10},\\tan(\\theta/2)=-\\dfrac17\\)" },
            { text: "For \\(\\sec\\theta=\\sqrt5,\\ 3\\pi/2<\\theta<2\\pi\\), find the same six values.", answer: "\\(\\sin2\\theta=-\\dfrac45,\\cos2\\theta=-\\dfrac35,\\tan2\\theta=\\dfrac43\\); \\(\\tan(\\theta/2)=-(\\sqrt5-1)/2\\)" }
          ]
        },
        {
          exercise: "Ex 8.2 (Q5 — reverse: find \\(\\sin\\theta,\\cos\\theta,\\tan\\theta\\) from a double-angle value)",
          questions: [
            { text: "\\(\\sin2\\theta=-240/289\\), \\(2\\theta\\) in QIII. Find \\(\\sin\\theta,\\cos\\theta,\\tan\\theta\\).", answer: "\\(\\sin\\theta=\\dfrac{15}{17},\\cos\\theta=-\\dfrac{8}{17},\\tan\\theta=-\\dfrac{15}{8}\\)" },
            { text: "\\(\\cos2\\theta=120/169\\), \\(2\\theta\\) in QIV. Find \\(\\sin\\theta,\\cos\\theta,\\tan\\theta\\).", answer: "\\(\\sin\\theta=\\dfrac{7\\sqrt2}{26},\\cos\\theta=-\\dfrac{17\\sqrt2}{26},\\tan\\theta=-\\dfrac{7}{17}\\)" }
          ]
        },
        {
          exercise: "Ex 8.2 (Q6, Q7 — evaluate double-angle expressions; power-reduction)",
          questions: [
            { text: "Find \\(\\cos^{2}15^\\circ-\\sin^{2}15^\\circ\\).", answer: "\\(\\cos30^\\circ=\\dfrac{\\sqrt3}{2}\\)" },
            { text: "Find \\(2\\cos^{2}(\\pi/12)-1\\).", answer: "\\(\\cos(\\pi/6)=\\dfrac{\\sqrt3}{2}\\)" },
            { text: "Find \\(\\dfrac{2\\tan(\\pi/12)}{1-\\tan^{2}(\\pi/12)}\\).", answer: "\\(\\tan(\\pi/6)=\\dfrac{1}{\\sqrt3}=\\dfrac{\\sqrt3}{3}\\)" },
            { text: "Rewrite \\(\\sin^{2}\\alpha\\cos^{2}\\alpha,\\ \\sin^{4}\\alpha\\cos^{2}\\alpha,\\ \\sin^{4}\\alpha\\cos^{4}\\alpha\\) using only cosines to power 1.", answer: "\\(\\sin^{2}\\alpha\\cos^{2}\\alpha=\\dfrac{1-\\cos4\\alpha}{8}\\); \\(\\sin^{4}\\alpha\\cos^{2}\\alpha=\\dfrac{2-\\cos2\\alpha-2\\cos4\\alpha+\\cos6\\alpha}{32}\\); \\(\\sin^{4}\\alpha\\cos^{4}\\alpha=\\dfrac{3-4\\cos4\\alpha+\\cos8\\alpha}{128}\\)" }
          ]
        },
        {
          exercise: "Ex 8.2 (Q8 — verify double-angle identities)",
          questions: [
            { text: "Verify: \\(\\tan2x=\\dfrac{1}{1-\\tan x}-\\dfrac{1}{1+\\tan x}\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(\\csc2\\alpha=\\dfrac{\\tan\\alpha+\\cot\\alpha}{2}\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(\\sin4\\theta=4\\sin\\theta\\cos^{3}\\theta-4\\sin^{3}\\theta\\cos\\theta\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(\\sin2\\theta=2\\cot\\theta\\sin^{2}\\theta\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(\\cos4\\theta=8\\cos^{4}\\theta-8\\cos^{2}\\theta+1\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(\\cos^{4}x-\\sin^{4}x=\\cos2x\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(\\csc2\\alpha-\\cot2\\alpha=\\tan\\alpha\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(\\dfrac{\\sin3\\alpha}{\\sin\\alpha}-\\dfrac{\\cos3\\alpha}{\\cos\\alpha}=2\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(\\dfrac{\\sin\\theta}{1+\\cos\\theta}=\\tan(\\theta/2)\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(2\\cos y\\sec2y=\\dfrac{1}{\\cos y-\\sin y}+\\dfrac{1}{\\cos y+\\sin y}\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" },
            { text: "Verify: \\(2\\sin y\\sec2y=\\dfrac{1}{\\cos y-\\sin y}-\\dfrac{1}{\\cos y+\\sin y}\\)", answer: "Proved (LHS reduces to RHS using double-angle identities)" }
          ]
        },
        {
          exercise: "Ex 8.3 (Q2 — sum/difference as a product)",
          questions: [
            { text: "Write \\(\\sin76^\\circ-\\sin14^\\circ\\) as a product.", answer: "\\(2\\cos45^\\circ\\sin31^\\circ\\)" },
            { text: "Write \\(\\cos\\left(\\dfrac{p-q}{2}\\right)+\\cos\\left(\\dfrac{p+q}{2}\\right)\\) as a product.", answer: "\\(2\\cos(p/2)\\cos(q/2)\\)" }
          ]
        },
        {
          exercise: "Ex 8.3 (Q3 — sum-to-product / product-to-sum proofs)",
          questions: [
            { text: "Prove: \\(\\dfrac{\\cos(\\alpha+\\beta)}{\\cos(\\alpha-\\beta)}=\\dfrac{1-\\tan\\alpha\\tan\\beta}{1+\\tan\\alpha\\tan\\beta}\\)", answer: "Proved using the sum-to-product / product-to-sum formulae" },
            { text: "Prove: \\(4\\cos4v\\sin3v=2(\\sin7v-\\sin v)\\)", answer: "Proved using the sum-to-product / product-to-sum formulae" },
            { text: "Prove: \\(\\cos3x+\\cos x=2\\cos x\\cos2x\\)", answer: "Proved using the sum-to-product / product-to-sum formulae" },
            { text: "Prove: \\(2\\tan y\\cos3y=\\sec y(\\sin4y-\\sin2y)\\)", answer: "Proved using the sum-to-product / product-to-sum formulae" },
            { text: "Prove: \\(\\dfrac{\\cot3\\theta+\\cot\\theta}{\\cot3\\theta-\\cot\\theta}=-\\cos2\\theta\\cot\\theta\\)", answer: "Proved using the sum-to-product / product-to-sum formulae" },
            { text: "Prove: \\(\\dfrac{\\cos2\\alpha-\\cos4\\alpha}{\\sin2\\alpha+\\sin4\\alpha}=\\tan\\alpha\\)", answer: "Proved using the sum-to-product / product-to-sum formulae" },
            { text: "Prove: \\(2\\sin2y\\sin3y=\\cos y-\\cos5y\\)", answer: "Proved using the sum-to-product / product-to-sum formulae" },
            { text: "Prove: \\(\\dfrac{\\cos10x+\\cos6x}{\\cos6x-\\cos10x}=\\cot2x\\cot8x\\)", answer: "Proved using the sum-to-product / product-to-sum formulae" }
          ]
        },
        {
          exercise: "Worked Examples — Sec 8.6 (product/sum conversions)",
          questions: [
            { text: "Express \\(2\\cos6\\theta\\sin3\\theta\\) as a sum or difference.", answer: "\\(\\sin9\\theta-\\sin3\\theta\\)" },
            { text: "Simplify \\(\\sin40^\\circ\\cos20^\\circ+\\cos40^\\circ\\sin20^\\circ\\).", answer: "\\(\\sin60^\\circ=\\dfrac{\\sqrt3}{2}\\)" },
            { text: "Express \\(\\cos45^\\circ-\\cos15^\\circ\\) as a product.", answer: "\\(-2\\sin30^\\circ\\sin15^\\circ\\)" },
            { text: "Show that \\(\\dfrac{\\sin x+\\sin y}{\\cos x+\\cos y}=\\tan\\left(\\dfrac{x+y}{2}\\right)\\).", answer: "Proved using sum-to-product formulae for numerator and denominator" },
            { text: "Show that \\(\\cos6\\alpha+\\cos5\\alpha+\\cos3\\alpha+\\cos2\\alpha=4\\cos4\\alpha\\cos1.5\\alpha\\cos0.5\\alpha\\).", answer: "Proved by grouping \\((\\cos6\\alpha+\\cos2\\alpha)\\) and \\((\\cos5\\alpha+\\cos3\\alpha)\\)" },
            { text: "Show that \\(\\sin70^\\circ\\sin30^\\circ\\cos20^\\circ\\cos10^\\circ=\\dfrac14\\cos10^\\circ+\\dfrac{\\sqrt3}{16}+\\dfrac18\\sin40^\\circ\\).", answer: "Proved by repeated product-to-sum reduction" }
          ]
        },
        {
          exercise: "Review Exercise (Q1 — multiple choice)",
          questions: [
            { text: "\\(\\sin(45^\\circ-30^\\circ)=\\) ? (a) \\((\\sqrt6-\\sqrt2)/4\\) (b) \\((\\sqrt6+\\sqrt2)/4\\) (c) \\((\\sqrt6-\\sqrt2)/2\\) (d) \\((\\sqrt3-\\sqrt2)/2\\)", answer: "(a) \\((\\sqrt6-\\sqrt2)/4\\)" },
            { text: "\\(\\tan(\\pi/6+\\pi/4)=\\) ?", answer: "\\((\\sqrt3+1)/(\\sqrt3-1)\\)" },
            { text: "\\(\\sin22.5^\\circ\\cos22.5^\\circ+\\cos22.5^\\circ\\sin22.5^\\circ=\\) ?", answer: "\\(1/\\sqrt2\\)" },
            { text: "\\(\\cos(\\pi-\\theta)=\\) ?", answer: "\\(-\\cos\\theta\\)" },
            { text: "\\(\\tan(\\pi/2+\\theta)=\\) ?", answer: "\\(-\\cot\\theta\\)" },
            { text: "\\(2\\sin\\alpha\\cos\\alpha=\\) ?", answer: "\\(\\sin(\\pi-2\\alpha)\\)" },
            { text: "\\(\\dfrac{\\sin2\\alpha\\cos\\alpha}{\\cos^{3}\\alpha-\\cos\\alpha\\sin^{2}\\alpha}=\\) ?", answer: "\\(\\tan2\\alpha\\)" },
            { text: "If \\(\\sin\\beta=3/5\\), then \\(\\cos2\\beta=\\) ?", answer: "\\(7/25\\)" },
            { text: "\\(\\cos^{2}3x-\\sin^{2}3x=\\) ?", answer: "\\(\\cos6x\\)" },
            { text: "\\((\\sin x-\\cos x)^{2}=\\) ?", answer: "\\(1-\\sin2x\\)" },
            { text: "\\(\\cos(60^\\circ-30^\\circ)\\ne\\) ?", answer: "\\(\\cos60^\\circ-\\cos30^\\circ\\)" },
            { text: "\\(\\dfrac{1-\\cos x}{\\sin x}=\\) ?", answer: "\\(\\tan(x/2)\\)" }
          ]
        },
        {
          exercise: "Review Exercise (Q3, Q4 — single-ratio conversions)",
          questions: [
            { text: "Express as a single trig ratio: \\(\\dfrac{1}{\\sqrt2}(\\sin\\beta+\\cos\\beta)\\); \\(\\dfrac{1}{\\sqrt2}\\sin75^\\circ+\\dfrac{1}{\\sqrt2}\\cos75^\\circ\\).", answer: "\\(\\sin(\\beta+45^\\circ)\\); \\(\\sin120^\\circ=\\dfrac{\\sqrt3}{2}\\)" },
            { text: "Find \\(\\dfrac{1+\\tan15^\\circ}{1-\\tan15^\\circ}\\) and \\(\\cos70^\\circ\\cos20^\\circ-\\sin70^\\circ\\sin20^\\circ\\).", answer: "\\(\\tan60^\\circ=\\sqrt3\\); \\(\\cos90^\\circ=0\\)" }
          ]
        }
      ],
      long: [
        {
          exercise: "Ex 8.1, Q12 (triangle-angle identities, \\(\\alpha+\\beta+\\gamma=180^\\circ\\))",
          questions: [
            { text: "Prove: \\(\\tan\\alpha+\\tan\\beta+\\tan\\gamma=\\tan\\alpha\\tan\\beta\\tan\\gamma\\)", answer: "Proved: since \\(\\alpha+\\beta=180^\\circ-\\gamma\\), \\(\\tan(\\alpha+\\beta)=-\\tan\\gamma\\Rightarrow\\) result" },
            { text: "Prove: \\(\\cot(\\alpha/2)+\\cot(\\beta/2)+\\cot(\\gamma/2)=\\cot(\\alpha/2)\\cot(\\beta/2)\\cot(\\gamma/2)\\)", answer: "Proved: since \\(\\alpha/2+\\beta/2=90^\\circ-\\gamma/2\\), use the cotangent identity" },
            { text: "Prove: \\(\\tan(\\alpha/2)\\tan(\\beta/2)+\\tan(\\beta/2)\\tan(\\gamma/2)+\\tan(\\gamma/2)\\tan(\\alpha/2)+1=0\\)", answer: "Proved using \\(\\tan(\\alpha/2+\\beta/2)=\\cot(\\gamma/2)\\) and cross-multiplying" }
          ]
        },
        {
          exercise: "Ex 8.3, Q4 & Sec 8.6 examples (products of sines/cosines)",
          questions: [
            { text: "Prove: \\(\\cos80^\\circ\\cos60^\\circ\\cos40^\\circ\\cos20^\\circ=1/16\\)", answer: "\\(1/16\\) — proved by repeated product-to-sum reduction" },
            { text: "Prove: \\(\\sin70^\\circ\\sin50^\\circ\\sin30^\\circ\\sin10^\\circ=1/16\\)", answer: "\\(1/16\\) — proved similarly" },
            { text: "Prove: \\(\\sin(\\pi/9)\\sin(2\\pi/9)\\sin(3\\pi/9)\\sin(4\\pi/9)=3/16\\)", answer: "\\(3/16\\) — proved (\\(\\sin3\\pi/9=\\sin\\pi/3=\\sqrt3/2\\))" }
          ]
        },
        {
          exercise: "Review Exercise (Q2–Q7, selected long questions)",
          questions: [
            { text: "Given \\(\\sin\\theta=3/5\\) (\\(\\theta\\) obtuse), \\(\\sin\\varphi=5/13\\) (\\(\\varphi\\) acute). Find \\(\\sin(\\theta-\\varphi),\\tan(\\theta-\\varphi),\\tan(\\theta+\\varphi)\\).", answer: "\\(\\sin(\\theta-\\varphi)=\\dfrac{56}{65};\\ \\tan(\\theta-\\varphi)=-\\dfrac{56}{33};\\ \\tan(\\theta+\\varphi)=-\\dfrac{16}{63}\\)" },
            { text: "If \\(\\sin(\\alpha+\\theta)=2\\cos(\\alpha-\\theta)\\), prove \\(\\tan\\alpha=\\dfrac{2-\\tan\\theta}{1-2\\tan\\theta}\\).", answer: "Proved by expanding both sides and dividing by \\(\\cos\\alpha\\cos\\theta\\)" },
            { text: "If \\(\\sin(\\alpha-\\theta)=\\cos(\\alpha+\\theta)\\), prove \\(\\tan\\alpha=1\\).", answer: "Proved." },
            { text: "Show that \\(\\dfrac{4\\sin^{2}\\theta\\cos\\theta}{\\cos3\\theta+\\cos\\theta}=\\tan2\\theta\\tan\\theta\\)", answer: "Proved using \\(\\cos3\\theta+\\cos\\theta=2\\cos2\\theta\\cos\\theta\\)" },
            { text: "Show that \\(\\dfrac{\\sin10\\theta-\\sin4\\theta}{\\sin4\\theta+\\sin2\\theta}=\\cos7\\theta\\sec\\theta\\)", answer: "Proved using sum-to-product formulae" },
            { text: "Prove: \\(\\sin16x=16\\sin x\\cos x\\cos2x\\cos4x\\cos8x\\)", answer: "Proved by repeatedly applying \\(\\sin2A=2\\sin A\\cos A\\)" }
          ]
        },
        {
          exercise: "Extra Practice (author-set)",
          questions: [
            { text: "Find the exact value of \\(\\tan15^\\circ\\) using \\(\\tan(45^\\circ-30^\\circ)\\).", answer: "\\(2-\\sqrt3\\)" },
            { text: "If \\(\\cos\\alpha=4/5\\) (\\(\\alpha\\) acute) and \\(\\sin\\beta=5/13\\) (\\(\\beta\\) acute), find \\(\\cos(\\alpha+\\beta)\\).", answer: "\\(33/65\\)" },
            { text: "Given \\(\\sin\\theta=5/13,\\ \\pi/2<\\theta<\\pi\\), find \\(\\sin2\\theta\\) and \\(\\cos2\\theta\\).", answer: "\\(\\sin2\\theta=-120/169,\\ \\cos2\\theta=119/169\\)" },
            { text: "Express \\(\\sin50^\\circ+\\sin30^\\circ\\) as a product.", answer: "\\(2\\sin40^\\circ\\cos10^\\circ\\)" },
            { text: "Express \\(8\\cos\\theta+6\\sin\\theta\\) in the form \\(r\\cos(\\theta-\\varphi)\\).", answer: "\\(10\\cos(\\theta-\\varphi),\\ \\varphi=\\tan^{-1}(6/8)=\\tan^{-1}(3/4)\\)" }
          ]
        }
      ]
    }
  ]
};
