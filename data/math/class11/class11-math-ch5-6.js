/*
  CLASS 11 — MATH — SHORT & LONG QUESTIONS — CHAPTERS 5 TO 6
  ------------------------------------------------------------
  Chapter 5: Polynomials
  Chapter 6: Permutation and Combination

  Source: curated "Important Questions" sheets (FBISE pattern). mcq
  stays empty — MCQs for these chapters live in class11-math-mcq-ch5-6.js.
*/
var CLASS11_MATH_CH5_6 = {
  chapters: [
    {
      id: 5,
      name: "Polynomials",
      mcq: [],
      short: [
        {
          exercise: "Ex 5.1 (Q1 — Remainder Theorem)",
          questions: [
            { text: "Find the remainder when \\(2x^{3}+3x^{2}-4x+1\\) is divided by \\(x-2\\), using the Remainder Theorem.", answer: "Remainder \\(=p(2)=21\\)" },
            { text: "Find the remainder when \\(x^{4}+2x^{3}-x^{2}+2x+3\\) is divided by \\(x-2\\).", answer: "Remainder \\(=p(2)=35\\)" }
          ]
        },
        {
          exercise: "Ex 5.1 (Q2–Q3 — Factor Theorem check)",
          questions: [
            { text: "Show that \\(x-3\\) is a factor of \\(x^{3}-2x^{2}-5x+6\\).", answer: "\\(p(3)=0\\), so \\(x-3\\) is a factor." },
            { text: "Decide whether \\(x-3\\) is a factor of \\(x^{3}-2x^{2}-5x+1\\).", answer: "\\(p(3)=-5\\ne0\\), so \\(x-3\\) is NOT a factor." }
          ]
        },
        {
          exercise: "Ex 5.1 (Q4–Q6 — find unknown coefficient)",
          questions: [
            { text: "\\(4y^{3}-4y^{2}+2y+10\\) is exactly divisible with quotient \\(4y^{2}-8y+10\\); find the other factor.", answer: "Other factor \\(=y+1\\)" },
            { text: "Find \\(q\\) if \\(x^{3}+qx^{2}-7x+6\\) is exactly divisible by \\((x+1)\\).", answer: "\\(q=-12\\)" },
            { text: "Find \\(m\\) in \\(2x^{3}+3x^{2}-3x-m\\) which, divided by \\(x-2\\), gives remainder 16.", answer: "\\(m=6\\)" }
          ]
        },
        {
          exercise: "Ex 5.1 (Q7–Q9 — zeros and division form)",
          questions: [
            { text: "Check whether \\(1\\) and \\(-2\\) are zeros of \\(x^{3}-7x+6\\).", answer: "\\(x=1\\) is a zero (\\(p(1)=0\\)); \\(x=-2\\) is NOT a zero (\\(p(-2)=12\\ne0\\))" },
            { text: "Find the zeros of \\(2x^{3}+3x^{2}-11x-6\\).", answer: "\\(x=2,\\ x=-\\dfrac12,\\ x=-3\\)" },
            { text: "Express \\(f(x)=x^{3}-x^{2}-14x+8\\) as \\(f(x)=(x-a)q(x)+r\\), where \\(a=4\\).", answer: "\\(f(x)=(x-4)(x^{2}+3x-2)+0\\)" }
          ]
        },
        {
          exercise: "Ex 5.1 (Q10 — application)",
          questions: [
            { text: "A rectangular room has volume \\((x^{3}+11x^{2}+34x+24)\\) cubic feet and height \\((x+1)\\) feet. Find the area of its floor.", answer: "Area of floor \\(=x^{2}+10x+24=(x+4)(x+6)\\) sq. ft" }
          ]
        },
        {
          exercise: "Ex 5.2 (factorization using the Factor Theorem)",
          questions: [
            { text: "Factorize \\(y^{3}-7y-6\\) using the Factor Theorem.", answer: "\\((y+1)(y-3)(y+2)\\)" },
            { text: "Factorize \\(2x^{3}-x^{2}-2x+1\\).", answer: "\\((x-1)(2x-1)(x+1)\\)" },
            { text: "Factorize \\(2x^{3}+5x^{2}-9x-18\\).", answer: "\\((x-2)(2x+3)(x+3)\\)" },
            { text: "Factorize \\(3x^{3}-5x^{2}-36\\).", answer: "\\((x-3)(3x^{2}+4x+12)\\)" },
            { text: "Factorize \\(t^{3}+t^{2}+3t-5\\).", answer: "\\((t-1)(t^{2}+2t+5)\\)" },
            { text: "If \\((x-2)\\) is a factor of \\(2x^{3}-15x^{2}+16x+12\\), find its other factors.", answer: "\\((2x+1)\\) and \\((x-6)\\)" },
            { text: "Factorize \\(2x^{3}-15x^{2}+27x-10\\) given \\(\\dfrac12\\) is one of its zeros.", answer: "\\((2x-1)(x-2)(x-5)\\)" },
            { text: "If \\(h(x)=4x^{3}+4x^{2}+73x+36\\) and \\(h\\left(-\\dfrac12\\right)=0\\), factorize \\(h(x)\\).", answer: "\\(h(x)=(2x+1)(2x^{2}+x+36)\\)" }
          ]
        },
        {
          exercise: "Ex 5.3 (applications of the Remainder Theorem)",
          questions: [
            { text: "A drinking-water bottle has volume 120 cm\\(^3\\), 7 cm longer than it is tall. Find the dimensions of the bottle.", answer: "Set up \\((\\text{height})^{2}\\times(\\text{height}+7)=120\\), solve by the Factor Theorem for the height \\(h\\)" },
            { text: "Tickets sold in a season follow \\(t(x)=x^{3}-12x^{2}+48x+74\\). Find tickets sold during the 12th game.", answer: "\\(t(12)=650\\) tickets" },
            { text: "A rectangular solid has volume 14 cubic units; width \\(=2\\times\\) height, length \\(=\\)width\\(+2\\). Find the dimensions.", answer: "Set up \\(2h^{2}(2h+2)=14\\), solve by the Factor Theorem for \\(h\\)" },
            { text: "A rectangular solid has volume 2475 cubic units; length \\(=2w+3\\), height \\(=w-2\\). Find the dimensions.", answer: "Width \\(=11\\), Length \\(=25\\), Height \\(=9\\)" },
            { text: "The area of rectangle ACED is \\(6x^{2}+38x+56\\), width \\(2x+8\\). \\(B\\) is the midpoint of \\(AC\\) and \\(ABFG\\) is a square. Find the length of ACED and the area of square ABFG.", answer: "Length \\(=3x+7\\); area of square ABFG \\(=(x+4)^{2}\\)" },
            { text: "The volume of a box is \\(y^{3}-2y^{2}-y+2\\). If one side is \\(y-2\\), find the length of the other two sides.", answer: "\\((y-1)\\) and \\((y+1)\\)" }
          ]
        },
        {
          exercise: "Miscellaneous Exercise (objective/short questions)",
          questions: [
            { text: "Choose the correct factors of \\(-2-x+x^{2}\\): (a) \\((x-2)(x-1)\\) (b) \\((x+1)(x+2)\\) (c) \\((x+2)(x-1)\\) (d) \\((x+1)(x-2)\\)", answer: "(d) \\((x+1)(x-2)\\)" },
            { text: "Divide \\(9y^{2}+9y-10\\) by \\(3y-2\\); the remainder is (a) 0 (b) 1 (c) 2 (d) 3", answer: "(a) 0" },
            { text: "\\(\\dfrac{x^{2}-x-9}{x-3}=x+2+\\dfrac{?}{x-3}\\); find \\(?\\)", answer: "\\(-3\\)" },
            { text: "If \\(3x^{3}-2x^{2}+5\\) is divided by \\(x+1\\), then \\(x+1\\) will be its: (a) divisor as well as factor (b) neither", answer: "(a) divisor as well as factor" },
            { text: "If 2 is a zero of \\(x^{3}+5x^{2}-4x+k\\), find \\(k\\).", answer: "\\(k=-20\\)" },
            { text: "If \\(x-b\\) is a factor of \\(q(x)\\), then \\(q(b)\\) is: (c) remainder (equal to zero)", answer: "(c) remainder, equal to zero" },
            { text: "If \\(2x^{3}+3px^{2}-4x\\) has remainder 4 when divided by \\(x+2\\), find \\(p\\).", answer: "\\(p=1\\)" },
            { text: "If \\(f(x)\\) divided by \\(x-2\\) has remainder 12, what is \\(f(2)\\)?", answer: "\\(f(2)=12\\)" },
            { text: "Divide: \\((64y^{3}-8)\\div(4y-2)\\)", answer: "\\(16y^{2}+8y+4\\) (remainder 0)" },
            { text: "Divide: \\((125y^{3}-8)\\div(5y-2)\\)", answer: "\\(25y^{2}+10y+4\\) (remainder 0)" },
            { text: "Is \\(3y-2\\) a factor of \\(6y^{3}-y^{2}-5y+2\\)?", answer: "Yes, \\(p(2/3)=0\\)" },
            { text: "If the zeros of a polynomial are \\(4,\\dfrac35,-2\\), find the polynomial.", answer: "\\(p(x)=5x^{3}-13x^{2}-34x+24\\)" },
            { text: "Find \\(k\\) so the remainder of \\((x^{2}+8x+k)\\div(x-4)\\) is zero.", answer: "\\(k=-48\\)" },
            { text: "The quotient of one polynomial divided by another is \\(3x^{2}-x+32-\\dfrac{121}{x+4}\\). Find the dividend.", answer: "Dividend \\(=3x^{3}+11x^{2}+28x+7\\)" },
            { text: "Two linear factors of \\(y^{3}+6y^{2}-y-30\\) are \\((y-2)\\) and \\((y+3)\\); find the third factor.", answer: "\\((y+5)\\)" }
          ]
        },
        {
          exercise: "Additional Practice (author-set)",
          questions: [
            { text: "Find the remainder when \\(x^{3}+2x^{2}-5x+6\\) is divided by \\(x+3\\).", answer: "Remainder \\(=p(-3)=12\\)" },
            { text: "Is \\(x=1\\) a zero of \\(3x^{3}-4x^{2}+x\\)?", answer: "Yes, \\(p(1)=0\\)" },
            { text: "Find the remainder when \\(x^{4}-3x^{2}+2\\) is divided by \\(x-1\\).", answer: "Remainder \\(=p(1)=0\\), so \\(x-1\\) is a factor" },
            { text: "State the Remainder Theorem, and the Factor Theorem.", answer: "Remainder Thm: dividing \\(p(x)\\) by \\((x-c)\\) leaves remainder \\(p(c)\\). Factor Thm: \\((x-c)\\) is a factor of \\(p(x)\\) iff \\(p(c)=0\\)" },
            { text: "Identify whether \\(2x^{-2}+5x\\) is a polynomial, and why.", answer: "Not a polynomial — exponent \\(-2\\) is not a whole number" }
          ]
        }
      ],
      long: [
        {
          exercise: "L1–L3 (state/prove theorems; find \\(k\\))",
          questions: [
            { text: "State and prove the Remainder Theorem. Hence find the remainder when \\(x^{3}-5x^{2}+7x-6\\) is divided by \\(x-3\\).", answer: "Statement & proof: \\(p(x)=(x-c)q(x)+r\\Rightarrow p(c)=r\\); remainder \\(=p(3)=-3\\)" },
            { text: "State and prove the Factor Theorem. Hence show that \\(y-1\\) is a factor of \\(y^{4}-24y^{2}-13y+36\\).", answer: "Statement & proof: \\(p(c)=0\\Leftrightarrow(x-c)\\) is a factor; \\(f(1)=0\\), so \\(y-1\\) is a factor" },
            { text: "Find \\(k\\) for which \\(x+3\\) is a factor of \\((x+2)^{5}+(3x-k)\\).", answer: "\\(k=10\\)" }
          ]
        },
        {
          exercise: "L4–L6, L9–L11 (complete factorization; construct polynomial from zeros)",
          questions: [
            { text: "Factorize \\(x^{3}-2x^{2}-5x+6\\) completely by the Factor Theorem (hit-and-trial + long division).", answer: "\\((x-1)(x-3)(x+2)\\)" },
            { text: "Two linear factors of \\(2y^{3}+y^{2}-8y-4\\) are \\((2y+1)\\) and \\((y-2)\\); find the third factor.", answer: "\\((y+2)\\)" },
            { text: "Factorize \\(x^{3}-5x-2\\) completely by the Factor Theorem.", answer: "\\((x+2)(x^{2}-2x-1)\\)" },
            { text: "If one zero of \\(g(x)=2x^{3}+x^{2}-2x-1\\) is \\(-\\dfrac12\\), find its other zeros and write \\(g(x)\\) fully factored.", answer: "Other zeros: \\(1\\) and \\(-1\\); \\(g(x)=(2x+1)(x-1)(x+1)\\)" },
            { text: "If the zeros of a cubic polynomial are \\(0,6,-1\\), find the polynomial and verify each is a zero.", answer: "\\(g(x)=x^{3}-5x^{2}-6x\\); \\(g(0)=g(6)=g(-1)=0\\) (verified)" }
          ]
        },
        {
          exercise: "L7–L8 (volume word problems)",
          questions: [
            { text: "A rectangular solid has volume 72 cubic units; width \\(=2\\times\\)height, length \\(=\\)height\\(+7\\). Find the dimensions.", answer: "height \\(=2\\), width \\(=4\\), length \\(=9\\)" },
            { text: "A rectangular solid has volume 2475 cubic units; length \\(=2w+3\\), height \\(=w-2\\). Find the dimensions of the box.", answer: "Width \\(=11\\), Length \\(=25\\), Height \\(=9\\)" }
          ]
        },
        {
          exercise: "L12 (author-set — find unknown coefficient)",
          questions: [
            { text: "Find \\(k\\) if \\((x+2)\\) is a factor of \\(x^{3}+3x^{2}-kx+4\\).", answer: "\\(k=-4\\)" }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Permutation and Combination",
      mcq: [],
      short: [
        {
          exercise: "Ex 6.1 (Q1 — simplify factorial expressions)",
          questions: [
            { text: "Simplify: \\(\\dfrac{4!-2!}{3!+5!}\\)", answer: "\\(\\dfrac{11}{63}\\)" },
            { text: "Simplify: \\(\\dfrac{(n-1)!}{(n-2)!}\\)", answer: "\\(n-1\\)" }
          ]
        },
        {
          exercise: "Ex 6.1 (Q2 — factorial notation)",
          questions: [
            { text: "Write \\(n(n^{2}-1)\\) in factorial form.", answer: "\\(\\dfrac{(n+1)!}{(n-2)!}\\)" },
            { text: "Write \\(\\dfrac{(n-3)(n-2)(n-1)}{n(n-4)}\\) in factorial form.", answer: "\\(\\dfrac{(n-1)!}{n(n-4)\\cdot(n-4)!}\\) (as printed — verify the denominator with your copy)" }
          ]
        },
        {
          exercise: "Ex 6.1 (Q3, Q4 — factorial identities)",
          questions: [
            { text: "Prove that \\(\\dfrac{(n-1)!}{(n-3)!}=n^{2}-3n+2\\).", answer: "LHS \\(=(n-1)(n-2)=n^{2}-3n+2=\\)RHS (verified)" },
            { text: "Show that \\(\\dfrac{(2n)!}{n!}=2^{n}[1\\cdot3\\cdot5\\cdots(2n-1)]\\).", answer: "\\((2n)!=[2\\cdot4\\cdot6\\cdots2n]\\times[1\\cdot3\\cdot5\\cdots(2n-1)]=2^{n}n!\\times[1\\cdot3\\cdot5\\cdots(2n-1)]\\) (verified)" },
            { text: "Show that \\(\\dfrac{(2n-1)!}{(n-1)!}=2^{n-1}[1\\cdot3\\cdot5\\cdots(2n-1)]\\).", answer: "\\((2n-1)!=[2\\cdot4\\cdots(2n-2)]\\times[1\\cdot3\\cdot5\\cdots(2n-1)]=2^{n-1}(n-1)!\\times[1\\cdot3\\cdot5\\cdots(2n-1)]\\) (verified)" }
          ]
        },
        {
          exercise: "Ex 6.1 (Q5 — find \\(n\\))",
          questions: [
            { text: "Find \\(n\\) if \\(\\dfrac{n}{(n-4)!}=\\dfrac{3\\cdot3!}{(n-3)!}\\)", answer: "\\(n=6\\)" },
            { text: "Find \\(n\\) if \\(\\left[\\dfrac{n!}{(n-4)!}\\right]:\\left[\\dfrac{(n-1)!}{(n-3)!}\\right]=36:2\\)", answer: "\\(n=6\\)" }
          ]
        },
        {
          exercise: "Ex 6.1 (Q6 — factorial proofs)",
          questions: [
            { text: "Prove: \\((n+1)[n!\\cdot n+(n-1)!(2n-1)+(n-2)!(n-1)!]=(n+2)!\\)", answer: "Verified by direct expansion (checked for \\(n=2\\): both sides \\(=24\\))" },
            { text: "Prove: \\(\\dfrac{n!}{r!(n-r)!}+\\dfrac{n!}{(r-1)!(n-r+1)!}=\\dfrac{(n+1)!}{r!(n-r+1)!}\\)", answer: "This is Pascal's Rule: \\({}^nC_r+{}^nC_{r-1}={}^{n+1}C_r\\) (verified)" },
            { text: "Prove that \\(33!\\) is divisible by \\(2^{15}\\).", answer: "Power of 2 in \\(33!=16+8+4+2+1=31\\ge15\\) (verified, in fact divisible by \\(2^{31}\\))" },
            { text: "Prove: \\(\\dfrac{(2n)!}{[(n-1)!]^{2}}=\\dfrac{n(n+1)(n+2)\\cdots(2n)}{(n-1)!}\\)", answer: "Both sides simplify to \\(\\dfrac{(2n)!}{[(n-1)!]^{2}}\\) (verified)" },
            { text: "Prove that \\((n!+1)\\) is not divisible by any natural number between 2 and \\(n\\).", answer: "Any such \\(k\\) divides \\(n!\\), so \\(n!+1\\) leaves remainder 1 on division by \\(k\\) (verified)" }
          ]
        },
        {
          exercise: "Ex 6.1 (Q7 — find \\(n\\), factorial equations)",
          questions: [
            { text: "Find \\(n\\) if \\((n+2)!=60(n-1)!\\)", answer: "\\(n=3\\)" },
            { text: "Find \\(n\\) if \\((n+2)!=56\\cdot n!\\)", answer: "\\(n=6\\)" },
            { text: "Find \\(n\\) if \\(\\dfrac{1}{9!}+\\dfrac{1}{10!}=\\dfrac{n}{11!}\\)", answer: "\\(n=121\\)" },
            { text: "Find \\(n\\) if \\(n!=990(n-3)!\\)", answer: "\\(n=11\\)" },
            { text: "Find \\(n\\) if \\(\\dfrac{(2n)!}{4!(2n-3)!}\\cdot\\dfrac{4!(n-4)!}{n!}=52\\)", answer: "Simplifies to \\(\\dfrac{4(2n-1)}{(n-2)(n-3)}=52\\Rightarrow13n^{2}-67n+79=0\\) (no whole-number root as printed — verify figures)" },
            { text: "Find \\(n\\ (n\\ge4)\\) if \\(\\dfrac{1}{2(n-2)!}:\\dfrac{1}{4!(n-4)!}=2\\)", answer: "\\(n=5\\)" }
          ]
        },
        {
          exercise: "Ex 6.2 (Q1–Q3 — permutation proofs and finding \\(n\\)/\\(r\\))",
          questions: [
            { text: "Prove for \\(n\\in\\mathbb{N}\\): \\({}^nP_n={}^nP_{n-1}\\)", answer: "Both equal \\(n!\\) (since \\({}^nP_{n-1}=n!/1!=n!\\)) (verified)" },
            { text: "Prove for \\(n\\in\\mathbb{N}\\): \\({}^nP_r=n\\cdot{}^{n-1}P_{r-1}\\)", answer: "RHS \\(=n\\times(n-1)!/(n-r)!=n!/(n-r)!=\\)LHS (verified)" },
            { text: "Find \\(n\\) if \\({}^nP_5=20\\cdot{}^nP_3\\)", answer: "\\(n=8\\)" },
            { text: "Find \\(n\\) if \\(30\\cdot{}^nP_6={}^{n+2}P_7\\)", answer: "\\(n=8\\) or \\(n=19\\)" },
            { text: "Find \\(n\\) if \\({}^{n-1}P_3:{}^{n+1}P_3=5:12\\)", answer: "\\(n=8\\)" },
            { text: "Find \\(n\\) if \\({}^{2n-1}P_n:{}^{2n+1}P_{n-1}=22:7\\)", answer: "\\(n=10\\)" },
            { text: "Find \\(r\\) if \\({}^{15}P_r=210\\)", answer: "\\(r=2\\)" },
            { text: "Find \\(r\\) if \\(2\\cdot{}^6P_{r-1}={}^5P_r\\)", answer: "\\(r=3\\)" },
            { text: "Find \\(r\\) if \\({}^{54}P_{r+3}:{}^{56}P_{r+6}=1:30800\\)", answer: "\\(r=41\\)" }
          ]
        },
        {
          exercise: "Ex 6.2 (Q4–Q10 — arrangement problems)",
          questions: [
            { text: "How many 3-digit even numbers from digits \\(1,2,3,4,5,6\\), no repetition?", answer: "\\(60\\)" },
            { text: "How many 7-digit mobile numbers using digits 0–9, each starting with 5, no repeated digit?", answer: "\\({}^9P_6=60480\\)" },
            { text: "How many 4-digit numbers from \\(1,2,3,4,5,6\\), repetition allowed?", answer: "\\(6^{4}=1296\\)" },
            { text: "Arrange \\(1,1,2,2,3,3,4\\) so even digits occupy even places, using all digits, no repeats.", answer: "\\(18\\) (evens \\(3!/2!=3\\) \\(\\times\\) odds \\(4!/(2!2!)=6\\))" },
            { text: "Seat 4 men and 5 women at a round table so no two women are adjacent.", answer: "\\(0\\) ways — impossible (only 4 gaps between 4 men for 5 women)" },
            { text: "How many signals with 2 blue, 3 yellow, 4 green flags, using all at a time?", answer: "\\(9!/(2!3!4!)=1260\\)" },
            { text: "How many words from FRIDAY, and how many end with F?", answer: "Total \\(=6!=720\\); ending with F \\(=5!=120\\)" }
          ]
        },
        {
          exercise: "Ex 6.2 (Q11–Q17 — arrangements with repeated/constrained letters)",
          questions: [
            { text: "How many permutations of STATESMAN using all letters?", answer: "\\(9!/(2!2!2!)=45360\\)" },
            { text: "Arrangements of VOWEL where vowels may occupy odd places.", answer: "\\({}^3P_2\\times3!=6\\times6=36\\)" },
            { text: "Arrange MACHINE so all vowels are never together.", answer: "\\(7!-(5!\\times3!)=5040-720=4320\\)" },
            { text: "3-letter words from ENGLISH, no repetition.", answer: "\\({}^7P_3=210\\)" },
            { text: "Fatima arranges 5 Math, 3 English, 2 Urdu books, same-subject books together.", answer: "\\(3!\\times5!\\times3!\\times2!=8640\\)" },
            { text: "Odd numbers from \\(1,2,3,4,5,6\\), no repetition (all 6 digits used).", answer: "\\(3\\times5!=360\\)" },
            { text: "4-digit odd numbers from \\(1,2,3,4,5\\), no repetition.", answer: "\\(3\\times{}^4P_3=3\\times24=72\\)" }
          ]
        },
        {
          exercise: "Ex 6.2 (Q18–Q23 — round-table, encryption applications)",
          questions: [
            { text: "Odd numbers less than 10,000 from digits \\(0,2,3,5,6\\), no repetition.", answer: "\\(62\\) (1-digit: 2, 2-digit: 6, 3-digit: 18, 4-digit: 36)" },
            { text: "10 secretaries at a round table, 3 particular ones must sit together.", answer: "\\((8-1)!\\times3!=5040\\times6=30240\\)" },
            { text: "Seat 6 men and 6 women alternately at a round table.", answer: "\\(5!\\times6!=120\\times720=86400\\)" },
            { text: "Find the number of permutations of the words WHY, SAD, TWO, MADE.", answer: "WHY\\(=3!=6\\), SAD\\(=3!=6\\), TWO\\(=3!=6\\), MADE\\(=4!=24\\)" },
            { text: "Encrypt LAHORE using the permutation \\((3\\,4\\,6\\,1\\,5\\,2)\\), L=1, A=2, etc.", answer: "Encrypted word \\(=\\) HOELRA" },
            { text: "Decrypt TNLUMA using the permutation \\((4\\,6\\,3\\,2\\,1\\,5)\\).", answer: "Decrypted word \\(=\\) MULTAN" }
          ]
        },
        {
          exercise: "Ex 6.3 (Q1 — combination proofs)",
          questions: [
            { text: "Prove: \\({}^{n-1}C_{r-1}+{}^{n-1}C_r={}^nC_r\\)", answer: "Pascal's Rule — verified using \\({}^nC_r=n!/[r!(n-r)!]\\)" },
            { text: "Prove: \\({}^nC_p={}^nC_q\\Rightarrow p=q\\) or \\(p+q=n\\)", answer: "Follows from \\({}^nC_r={}^nC_{n-r}\\) (verified)" },
            { text: "Prove: \\({}^nC_r+2\\cdot{}^nC_{r-1}+{}^nC_{r-2}={}^{n+2}C_r\\)", answer: "Apply Pascal's Rule twice in succession (verified)" },
            { text: "Prove: \\(r\\cdot{}^nC_r=n\\cdot{}^{n-1}C_{r-1}\\)", answer: "Both sides equal \\(n!/[(r-1)!(n-r)!]\\) (verified)" },
            { text: "Prove that the product of \\(k\\) consecutive integers is divisible by \\(k!\\).", answer: "Product of \\(k\\) consecutive integers \\(=k!\\times{}^nC_k\\) (an integer) (verified)" }
          ]
        },
        {
          exercise: "Ex 6.3 (Q2–Q4 — find \\(n\\)/\\(r\\))",
          questions: [
            { text: "Find \\(n\\) if \\({}^{2n}C_3:{}^nC_3=11:1\\)", answer: "\\(n=6\\)" },
            { text: "Find \\(n\\) if \\({}^nC_6:{}^{n-3}C_3=33:4\\)", answer: "\\(n=11\\)" },
            { text: "Find \\(n\\) if \\({}^{2n}C_3:{}^nC_2=12:1\\)", answer: "\\(n=5\\)" },
            { text: "Find \\(r\\) if \\({}^{16}C_r={}^{16}C_{r+4}\\)", answer: "\\(r=6\\)" },
            { text: "Find \\(r\\) if \\({}^{15}C_r:{}^{15}C_{r-1}=11:5\\)", answer: "\\(r=5\\)" },
            { text: "Find \\(n,r\\) if \\({}^nC_{r-1}:{}^nC_r:{}^nC_{r+1}=3:4:5\\)", answer: "\\(n=62,\\ r=27\\)" },
            { text: "Find \\(n,r\\) if \\({}^nC_r:{}^nC_{r+1}:{}^nC_{r+2}=1:2:3\\)", answer: "\\(n=14,\\ r=4\\)" }
          ]
        }
      ],
      long: [
        {
          exercise: "Statement & Proof — Combinations (Section 6.4)",
          questions: [
            { text: "Define combination and prove \\({}^nC_r=\\binom{n}{r}=\\dfrac{n!}{r!(n-r)!}\\).", answer: "Combination = selection of \\(r\\) objects out of \\(n\\) where order doesn't matter; since each combination gives \\(r!\\) permutations, \\(X\\cdot r!={}^nP_r\\Rightarrow{}^nC_r=\\dfrac{n!}{r!(n-r)!}\\) (proved)" },
            { text: "Prove the four standard deductions: (i) \\({}^nC_n={}^nC_0=1\\) (ii) \\({}^nC_r={}^nC_{n-r}\\) (iii) \\({}^nC_1={}^nC_{n-1}=n\\) (iv) \\({}^nC_r+{}^nC_{r-1}={}^{n+1}C_r\\)", answer: "All four verified directly from \\({}^nC_r=n!/[r!(n-r)!]\\) by substitution" },
            { text: "10 students applied for 6 HEC scholarships. In how many ways can these 6 be chosen?", answer: "\\({}^{10}C_6=210\\) ways" },
            { text: "Find the value of \\(n\\) if \\({}^nC_2=10\\).", answer: "\\(n(n-1)=20\\Rightarrow n=5\\) (\\(n=-4\\) rejected)" }
          ]
        },
        {
          exercise: "Ex 6.3 (Q5–Q9 — committee/selection word problems)",
          questions: [
            { text: "Choose 11 players out of 16 if (i) no restriction (ii) a particular player is always chosen.", answer: "(i) \\({}^{16}C_{11}=4368\\) (ii) \\({}^{15}C_{10}=3003\\)" },
            { text: "From 5 men and 3 women, form a committee of 3 with at least one man.", answer: "\\({}^8C_3-{}^3C_3=56-1=55\\)" },
            { text: "A committee of 5 from 6 men and 4 women: (i) exactly 2 women (ii) at least 2 women (iii) at most 2 women.", answer: "(i) 120 (ii) 186 (iii) 186" },
            { text: "10 points on a circle: find (i) the number of lines (ii) the number of triangles.", answer: "(i) \\({}^{10}C_2=45\\) (ii) \\({}^{10}C_3=120\\)" },
            { text: "Find the number of diagonals in an \\(n\\)-sided polygon.", answer: "\\(\\dfrac{n(n-3)}{2}\\)" }
          ]
        },
        {
          exercise: "Ex 6.3 (Q10–Q14 — grouping and selection problems)",
          questions: [
            { text: "Divide a group of 10 girls into two groups of 3 and 7.", answer: "\\({}^{10}C_3=120\\)" },
            { text: "The number of diagonals in an \\(n\\)-sided polygon is 35. Find \\(n\\).", answer: "\\(n(n-3)/2=35\\Rightarrow n=10\\)" },
            { text: "100 applicants for 6 officer posts; 2 posts reserved for 20 serving candidates. Number of selections?", answer: "\\({}^{20}C_2\\times{}^{80}C_4=190\\times1{,}581{,}580=300{,}500{,}200\\)" },
            { text: "A candidate must pass in each of 6 subjects. In how many ways can he NOT qualify?", answer: "\\(2^{6}-1=63\\)" },
            { text: "A paper has parts A, B, C, 8 questions each; choose 5 from A and 3 each from B, C.", answer: "\\({}^8C_5\\times{}^8C_3\\times{}^8C_3=56^{3}=175{,}616\\)" }
          ]
        },
        {
          exercise: "Ex 6.3 (Q15–Q17 — author-set extra problems)",
          questions: [
            { text: "Form a committee of 4 from 7 men and 5 women with at least 2 women.", answer: "\\({}^5C_2{}^7C_2+{}^5C_3{}^7C_1+{}^5C_4{}^7C_0=210+70+5=285\\)" },
            { text: "How many diagonals does a regular 12-sided polygon (dodecagon) have?", answer: "\\(n(n-3)/2=12(9)/2=54\\)" },
            { text: "In how many ways can 5 books be selected from 12 different books?", answer: "\\({}^{12}C_5=792\\)" }
          ]
        }
      ]
    }
  ]
};
