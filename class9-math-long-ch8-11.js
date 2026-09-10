/*
  CLASS 9 — MATH — LONG QUESTIONS — CHAPTERS 8 TO 11
  ------------------------------------------------------
  Merges (by id) with class9-math-ch5-8.js (Ch8) and class9-math-ch9-11.js
  (Ch9, 10, 11). Only the "long" arrays are populated here.

  Per instruction: Chapter 10 long questions are from section 10.2 only
  (10.1 is Formative, already excluded from this project). Chapter 11
  long questions are from section 11.2 only (mean/median/mode) — not
  11.1 or 11.3.
*/
var CLASS9_MATH_LONG_CH8_11 = {
  chapters: [
    {
      id: 8,
      name: "Geometry of Straight Lines",
      mcq: [],
      short: [],
      long: [
        {
          exercise: "Ex 8.3 (angle between lines & family of lines)",
          questions: [
            {
              text: "Find the angle between the lines \\(x+2y-6=0\\) and \\(2x-4y+9=0\\).",
              answer: "Slopes: \\(m_1=-\\dfrac12\\), \\(m_2=\\dfrac12\\); \\(\\tan\\theta=\\left|\\dfrac{m_2-m_1}{1+m_1m_2}\\right|=\\dfrac43\\), so \\(\\theta=\\tan^{-1}\\!\\left(\\dfrac43\\right)\\approx53.13^{\\circ}\\)"
            },
            {
              text: "Find the equation of the line passing through the point of intersection of \\(3x+2y+1=0\\) and \\(x-2y+3=0\\), and (a) passing through the point \\((-1,0)\\) (b) parallel to \\(3x-4y+3=0\\).",
              answer: "Point of intersection \\(=(-1,1)\\). (a) \\(x=-1\\) (b) \\(3x-4y+7=0\\)"
            }
          ]
        }
      ]
    },
    {
      id: 9,
      name: "Geometry and Polygons",
      mcq: [],
      short: [],
      long: [
        {
          exercise: "Similar Figures (Ex 9.4)",
          questions: [
            {
              text: "P and Q are two similar solids. Solid P has surface area \\(108\\text{ cm}^2\\) and volume \\(135\\text{ cm}^3\\). Find the volume of Q if Q has surface area \\(300\\text{ cm}^2\\).",
              answer: "Area ratio \\(=\\dfrac{300}{108}=\\dfrac{25}{9}\\), so length ratio \\(=\\dfrac53\\); volume ratio \\(=\\left(\\dfrac53\\right)^{3}=\\dfrac{125}{27}\\); Volume of Q \\(=135\\times\\dfrac{125}{27}=625\\text{ cm}^3\\)"
            }
          ]
        },
        {
          exercise: "Loci (Ex 9.7)",
          questions: [
            {
              text: "The figure shows an isosceles triangle ABC (\\(AB=AC\\)). Prove that the locus of the bisector of angle A is the right bisector of side BC.",
              answer: "Since \\(AB=AC\\), the bisector of \\(\\angle A\\) also serves as the median and altitude to BC (isosceles triangle property). A line that is both a median and an altitude to a side is, by definition, the right (perpendicular) bisector of that side."
            }
          ]
        }
      ]
    },
    {
      id: 10,
      name: "Practical Geometry",
      mcq: [],
      short: [],
      long: [
        {
          exercise: "Ex 10.2 (circumcentre & orthocentre)",
          questions: [
            {
              text: "Construct an obtuse-angled triangle DEF. Find its (a) circumcentre (b) orthocentre. Check whether they lie inside or outside the triangle.",
              answer: "For an obtuse triangle, both the circumcentre and the orthocentre lie OUTSIDE the triangle."
            },
            {
              text: "Construct \\(\\triangle XYZ\\) with \\(XY=4.5\\text{ cm}\\), \\(YZ=5\\text{ cm}\\), \\(ZX=4.8\\text{ cm}\\). Show that its perpendicular (right) bisectors are concurrent.",
              answer: "The three perpendicular bisectors meet at a single point — the circumcentre of the triangle (verified by construction)."
            }
          ]
        }
      ]
    },
    {
      id: 11,
      name: "Basic Statistics",
      mcq: [],
      short: [],
      long: [
        {
          exercise: "Ex 11.2 (mean, median & mode together)",
          questions: [
            {
              text: "Find the mean, median and mode for the following discrete frequency distribution: \\(x=0,1,2,3,4,5\\) with \\(f=3,5,9,4,2,1\\).",
              answer: "Mean \\(=\\dfrac{48}{24}=2\\); Median \\(=2\\) (12th of 24 values, in the \\(x=2\\) group); Mode \\(=2\\) (highest frequency, 9)"
            },
            {
              text: "Find the median and mode for the following discrete frequency distribution: \\(x=1,2,3,4,5\\) with \\(f=3,4,5,2,2\\).",
              answer: "\\(n=16\\); Median \\(=3\\) (8th value, in the \\(x=3\\) group); Mode \\(=3\\) (highest frequency, 5)"
            }
          ]
        }
      ]
    }
  ]
};
