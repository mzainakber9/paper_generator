/*
  CLASS 9 — MATH — CHAPTERS 9 TO 11
  ------------------------------------
  Real content, sourced from the National Book Foundation Grade 9 textbook,
  filtered to Summative-only SLOs per the FBISE Assessment Framework.

  Chapter 9 (Geometry and Polygons): the "Logic" section (mathematical
  statements/proof, axiom/conjecture/theorem, deductive proofs) is entirely
  Formative and excluded. Only Similar Figures, Properties of Regular
  Polygons, and Loci are included (all Summative).

  Chapter 10 (Practical Geometry): section 10.1 (constructing a triangle
  given sides/angles) is Formative and excluded. Only section 10.2
  (perpendicular bisectors / angle bisectors / medians / altitudes and
  their concurrency) is included.

  Chapter 11 (Basic Statistics): section 11.1 (constructing frequency
  tables/histograms/polygons) is Formative; per instruction, 4 selected
  questions from it (histogram + frequency polygon) are included anyway.
  Sections 11.2 (mean/median/mode) and 11.3 (probability) are fully
  Summative and included.

  Diagrams: some questions include an optional "diagram" field holding
  raw SVG markup, rendered inline in the picker and on the printed paper.
  Diagrams are schematic (not to exact scale), matching how the textbook
  itself often presents them.

  Same data format as class9-math-ch1-4.js.
*/
var CLASS9_MATH_CH9_11 = {
  chapters: [
    {
      id: 9,
      name: "Geometry and Polygons",
      mcq: [],
      short: [
        {
          exercise: "Similar Figures",
          questions: [
            {
              text: "In the figure, the height of a pole BE is 7.5 m, at a distance AB = 15 m from a point A. A wall CD stands 45 m from A, in line with the pole (\\(BE\\parallel CD\\)). Find the height of the wall.",
              answer: "\\(x = \\dfrac{45\\times7.5}{15} = 22.5\\text{ m}\\)",
              diagram: "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"120\" x2=\"280\" y2=\"120\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"120\" y1=\"120\" x2=\"120\" y2=\"75\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"260\" y1=\"120\" x2=\"260\" y2=\"25\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"120\" x2=\"260\" y2=\"25\" stroke=\"black\" stroke-dasharray=\"4,3\"/><text x=\"12\" y=\"135\" font-size=\"10\">A</text><text x=\"116\" y=\"135\" font-size=\"10\">B</text><text x=\"256\" y=\"135\" font-size=\"10\">C</text><text x=\"123\" y=\"70\" font-size=\"10\">E</text><text x=\"263\" y=\"22\" font-size=\"10\">D</text><text x=\"55\" y=\"115\" font-size=\"9\">15 m</text><text x=\"180\" y=\"115\" font-size=\"9\">45 m</text><text x=\"93\" y=\"98\" font-size=\"9\">7.5m</text><text x=\"264\" y=\"75\" font-size=\"9\">wall</text></svg>"
            },
            {
              text: "In \\(\\triangle ABC\\), \\(AB=10\\text{ cm}\\), \\(AC=5\\text{ cm}\\). D and E are on AB and AC such that \\(AD=4\\text{ cm}\\) and \\(AE=2\\text{ cm}\\). Is \\(DE\\parallel BC\\)?",
              answer: "\\(\\dfrac{AD}{DB}=\\dfrac{4}{6}=\\dfrac23\\) and \\(\\dfrac{AE}{EC}=\\dfrac{2}{3}\\) — equal, so yes, \\(DE\\parallel BC\\) (converse of the basic proportionality theorem)."
            },
            {
              text: "The ratio of the radii of two similar cylinders is \\(3:5\\). Find: (i) the ratio of their volumes (ii) the curved surface area of the smaller cylinder if the larger one's CSA is \\(250\\text{ cm}^2\\) (iii) the volume of the larger cylinder if the smaller one's volume is \\(162\\text{ cm}^3\\).",
              answer: "(i) \\(27:125\\) (ii) \\(90\\text{ cm}^2\\) (iii) \\(750\\text{ cm}^3\\)"
            },
            {
              text: "In the figure, \\(BC\\parallel DE\\), \\(AD=5\\text{ cm}\\), \\(DB=3\\text{ cm}\\). Find: (i) \\(\\dfrac{DE}{BC}\\) (ii) \\(\\dfrac{\\text{Area }\\triangle ADE}{\\text{Area }\\triangle ABC}\\) (iii) area of \\(\\triangle ADE\\) if area of \\(\\triangle ABC=256\\text{ cm}^2\\) (iv) area of trapezium DBCE.",
              answer: "(i) \\(\\dfrac58\\) (ii) \\(\\dfrac{25}{64}\\) (iii) \\(100\\text{ cm}^2\\) (iv) \\(156\\text{ cm}^2\\)",
              diagram: "<svg viewBox=\"0 0 200 160\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,10 30,140 170,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"65\" y1=\"75\" x2=\"135\" y2=\"75\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"95\" y=\"10\" font-size=\"10\">A</text><text x=\"52\" y=\"80\" font-size=\"10\">D</text><text x=\"138\" y=\"80\" font-size=\"10\">E</text><text x=\"15\" y=\"150\" font-size=\"10\">B</text><text x=\"165\" y=\"150\" font-size=\"10\">C</text><text x=\"75\" y=\"45\" font-size=\"9\">5cm</text><text x=\"40\" y=\"110\" font-size=\"9\">3cm</text></svg>"
            },
            { text: "Solid A and solid B are mathematically similar. The volume of A is \\(32\\text{ cm}^3\\) and volume of B is \\(108\\text{ cm}^3\\). The height of A is 10 cm. Find the height of B.", answer: "15 cm" },
            { text: "Masses of two similar objects are 8 kg and 27 kg respectively. If the height of the first object is 2 m, what is the height of the second object?", answer: "3 m" }
          ]
        },
        {
          exercise: "Properties of Regular Polygons",
          questions: [
            { text: "In a certain polygon, the sum of the measures of all interior angles is equal to twice the sum of the exterior angles. What is the name of that polygon?", answer: "Hexagon (\\(n=6\\))" },
            { text: "The measures of the exterior angles of a polygon are \\((x+4)^{\\circ}\\), \\((3x-4)^{\\circ}\\), \\((7x-3)^{\\circ}\\), \\((2x+3)^{\\circ}\\), \\((8x-1)^{\\circ}\\) and \\((9x+1)^{\\circ}\\). (i) Identify the polygon (ii) Find \\(x\\) (iii) Find the measure of each angle.", answer: "(i) Hexagon (ii) \\(x=12\\) (iii) \\(16^{\\circ},32^{\\circ},81^{\\circ},27^{\\circ},95^{\\circ},109^{\\circ}\\)" },
            { text: "Find the sum of the measures of interior angles of polygons having: (i) 9 sides (ii) 17 sides.", answer: "(i) \\(1260^{\\circ}\\) (ii) \\(2700^{\\circ}\\)" },
            { text: "A lawn is in the shape of an equilateral triangle. Find the perimeter of the lawn if the length of one side is 5 m. Also find the cost of a boundary wall at Rs.\\,220 per metre.", answer: "Perimeter \\(=15\\text{ m}\\); cost \\(=\\) Rs.\\,3300" },
            { text: "A cricket ground is in the shape of a parallelogram. One side of the ground is 65 m long, and the distance between the parallel sides is 42 m. Find the cost of planting grass at Rs.\\,10 per square metre.", answer: "Area \\(=2730\\text{ m}^2\\); cost \\(=\\) Rs.\\,27,300" },
            { text: "A plot in the shopping area is in the shape of a regular hexagon. One side of the plot is 10 m long. Find: (i) the cost of fencing the plot at Rs.\\,160 per metre (ii) the area of the plot (iii) the cost of filling the plot at Rs.\\,500 per m\\(^2\\).", answer: "(i) Rs.\\,9600 (ii) \\(\\approx259.8\\text{ m}^2\\) (iii) \\(\\approx\\) Rs.\\,1,29,900" },
            { text: "The basement of a water tank is in the shape of a regular pentagon with side length 8 feet and apothem 7 feet. Find the perimeter and area of the basement.", answer: "Perimeter \\(=40\\text{ ft}\\); Area \\(=140\\text{ ft}^2\\)" }
          ]
        },
        {
          exercise: "Loci",
          questions: [
            {
              text: "A point P is moving parallel to a straight line \\(l\\) at a distance of 5 m. (i) Draw the locus of the path (ii) prove the point moves in a straight line (iii) how many paths are possible? (iv) another point Q is moving 8 m away from \\(l\\) — explain why Q is not part of the locus.",
              answer: "(i)-(ii) Locus is a pair of straight lines \\(m,n\\) parallel to \\(l\\), 5 m away on each side (iii) Two paths (iv) Q is 8 m away, not 5 m, so it doesn't satisfy the locus condition.",
              diagram: "<svg viewBox=\"0 0 220 140\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"40\" x2=\"210\" y2=\"40\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"10\" y1=\"70\" x2=\"210\" y2=\"70\" stroke=\"black\" stroke-dasharray=\"4,3\"/><line x1=\"10\" y1=\"100\" x2=\"210\" y2=\"100\" stroke=\"black\" stroke-dasharray=\"4,3\"/><line x1=\"60\" y1=\"70\" x2=\"60\" y2=\"40\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"60\" y1=\"70\" x2=\"60\" y2=\"100\" stroke=\"black\" stroke-width=\"1\"/><text x=\"195\" y=\"36\" font-size=\"10\">l</text><text x=\"195\" y=\"66\" font-size=\"10\">m</text><text x=\"195\" y=\"96\" font-size=\"10\">n</text><text x=\"64\" y=\"58\" font-size=\"9\">5m</text><text x=\"64\" y=\"88\" font-size=\"9\">5m</text></svg>"
            },
            { text: "Take two lines AB and CD inclined at \\(60^{\\circ}\\), intersecting at O. (i) Draw the locus of points equidistant from both lines (ii) draw the bisector of the \\(60^{\\circ}\\) angle (iii) what is the relation between the locus and the angle bisector? (iv) draw the bisector of the adjacent angle at O and find the relation between both bisectors.", answer: "The locus of points equidistant from two intersecting lines is their angle bisector, so (i) and (ii) are the same line. The bisectors of the two adjacent angles (\\(60^{\\circ}\\) and \\(120^{\\circ}\\)) are perpendicular to each other." },
            { text: "Draw an equilateral triangle PQR. (i) Draw right bisectors of any two sides and locate point A where they meet (ii) draw angle bisectors of any two vertices and locate point B where they meet (iii) what is the relation between the locus of A and B?", answer: "For an equilateral triangle, A and B coincide — the perpendicular bisectors and angle bisectors all meet at the same single point (the centre of the triangle)." }
          ]
        }
      ],
      long: []
    },
    {
      id: 10,
      name: "Practical Geometry",
      mcq: [],
      short: [
        {
          exercise: "Ex 10.2 (concurrency of bisectors, medians, altitudes)",
          questions: [
            {
              text: "Construct a \\(\\triangle LMN\\) with \\(LM=4.1\\text{ cm}\\), \\(MN=4\\text{ cm}\\) and \\(\\angle M=90^{\\circ}\\). Draw the perpendicular bisectors of the sides of the triangle. Are they concurrent?",
              answer: "Yes — the perpendicular bisectors of the three sides meet at a single point O (concurrent). For a right triangle, this point lies at the midpoint of the hypotenuse.",
              diagram: "<svg viewBox=\"0 0 220 160\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 190,30\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"110\" cy=\"103\" r=\"2.5\" fill=\"black\"/><line x1=\"30\" y1=\"140\" x2=\"190\" y2=\"30\" stroke=\"black\" stroke-width=\"0.7\" stroke-dasharray=\"3,2\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"black\" stroke-width=\"0.7\" stroke-dasharray=\"3,2\"/><text x=\"20\" y=\"150\" font-size=\"10\">L</text><text x=\"192\" y=\"150\" font-size=\"10\">M</text><text x=\"192\" y=\"25\" font-size=\"10\">N</text><text x=\"113\" y=\"98\" font-size=\"10\">O</text></svg>"
            },
            { text: "Construct \\(\\triangle ABC\\) with \\(AB=5.8\\text{ cm}\\), \\(BC=4.9\\text{ cm}\\), \\(\\angle B=60^{\\circ}\\). Show that its angle bisectors are concurrent.", answer: "The three angle bisectors meet at a single point — the incentre of the triangle (verified by construction)." },
            { text: "Construct \\(\\triangle ABC\\) with \\(AB=5.8\\text{ cm}\\), \\(BC=5\\text{ cm}\\), \\(\\angle B=45^{\\circ}\\). Show that its medians are concurrent.", answer: "The three medians meet at a single point — the centroid of the triangle (verified by construction)." },
            { text: "Construct a right triangle ABC such that \\(\\angle B=90^{\\circ}\\). (a) Find its orthocentre — where does it lie? (b) Find the circumcentre M of the triangle. Is M the midpoint of the hypotenuse AC? Is \\(BM=CM\\)?", answer: "(a) The orthocentre of a right triangle lies at the right-angle vertex, B. (b) Yes, M is the midpoint of the hypotenuse AC, and \\(BM=CM\\) (both equal the circumradius)." },
            { text: "In what ratio do the medians of a triangle divide each other at the centroid?", answer: "\\(2:1\\) (from vertex to centroid : centroid to midpoint of opposite side)" },
            { text: "In any triangle, which three notable points are always collinear?", answer: "The orthocentre, centroid, and circumcentre." }
          ]
        }
      ],
      long: []
    },
    {
      id: 11,
      name: "Basic Statistics",
      mcq: [],
      short: [
        {
          exercise: "Ex 11.1 (histogram & frequency polygon)",
          questions: [
            {
              text: "The heights (in cm) of 44 students of a school are: 130-144 (9 students), 145-149 (7), 150-154 (8), 155-159 (6), 160-169 (10), 170-179 (4). Represent the data by a histogram (note the unequal class sizes — use frequency density).",
              answer: "Frequency density (f \\(\\div\\) class size): 0.6, 1.4, 1.6, 1.2, 1.0, 0.4 respectively — plotted as a histogram over the class boundaries \\(129.5\\)-\\(179.5\\)."
            },
            {
              text: "At a farm house there are 40 lambs; their masses (in pounds) are distributed as: 125-135 (8), 136-146 (13), 147-157 (11), 158-168 (6), 169-179 (2). Represent this frequency distribution by a frequency polygon.",
              answer: "Plot points at class marks \\(119,130,141,152,163,174,185\\) against frequencies \\(0,8,13,11,6,2,0\\) and join with straight lines (extra zero-frequency classes added at both ends)."
            },
            { text: "Using the frequency distribution of the 40 lambs' masses above, draw a frequency polygon on a histogram for the same data.", answer: "The histogram bars are drawn over class boundaries \\(124.5\\)-\\(179.5\\); the polygon connects the midpoints of the top of each bar, closed with zero-frequency points at \\(113.5\\) and \\(190.5\\)." },
            { text: "The ages of workers in a factory were recorded as: 20-24 (5), 25-29 (16), 30-34 (12), 35-39 (10), 40-44 (8), 45-49 (4). Draw a frequency polygon to represent the data.", answer: "Plot points at class marks \\(22,27,32,37,42,47\\) against frequencies \\(5,16,12,10,8,4\\), closed with zero-frequency points on either end." }
          ]
        },
        {
          exercise: "Ex 11.2 (mean, median, mode)",
          questions: [
            { text: "Find the arithmetic mean of the following grouped data: Marks 0-10 (2 students), 10-20 (5), 20-30 (7), 30-40 (3), 40-50 (8).", answer: "\\(\\bar{x}=\\dfrac{\\sum fx}{\\sum f}=\\dfrac{725}{25}=29\\)" },
            { text: "Marks obtained by 100 students in an examination: 10-19 (5), 20-29 (25), 30-39 (40), 40-49 (20), 50-59 (10). Find the median marks.", answer: "Median \\(=29.5+\\dfrac{10}{40}(50-30)=34.5\\) marks" },
            { text: "Fifty workers of a factory are distributed by their hourly wages (Rs.): 25-29 (2), 30-34 (4), 35-39 (8), 40-44 (20), 45-49 (6), 50-54 (6), 55-59 (4). Find the mode of the distribution.", answer: "Mode \\(=39.5+\\dfrac{(20-8)}{2(20)-8-6}\\times5\\approx41.81\\) rupees" },
            { text: "The scores made by two batsmen A and B over ten innings are: A: 12,15,6,73,7,19,199,36,84,29 and B: 47,12,76,48,4,51,37,48,13,0. Find the arithmetic mean of scores of both players and state who is the better run-getter.", answer: "Mean A \\(=48\\), Mean B \\(=33.6\\) — A is the better run-getter." },
            { text: "Marks of a student, Hanzala, in four subjects (out of 100) are: Mathematics 70 (weight 4), Physics 95 (weight 3), Chemistry 80 (weight 2), Biology 55 (weight 1). Find his weighted mean.", answer: "Weighted mean \\(=\\dfrac{70(4)+95(3)+80(2)+55(1)}{4+3+2+1}=\\dfrac{780}{10}=78\\)" },
            { text: "At an old-age home, residents' ages are distributed as: 40-50 (3), 50-60 (8), 60-70 (11), 70-80 (5), 80-90 (4). Find the median age of residents.", answer: "Median \\(\\approx60+\\dfrac{10}{11}(15.5-11)\\approx64.09\\) years" }
          ]
        },
        {
          exercise: "Ex 11.3 (probability, relative & expected frequency)",
          questions: [
            { text: "Ali picked a book at random from a library shelf which had 3 history books of grade 6, 4 geography books of grade 7, 9 science books of grade 8, 3 science books of grade 7 and 6 geography books of grade 8, and 5 science books of grade 6. Find the probability of getting: (a) a science book (b) a geography book (c) a book of grade 7 (d) a book of grade 9 (e) a book of mathematics.", answer: "Total books \\(=30\\). (a) \\(\\dfrac{17}{30}\\) (b) \\(\\dfrac{1}{3}\\) (c) \\(\\dfrac{7}{30}\\) (d) 0 (e) 0" },
            { text: "There are 12 teachers in a maths department, of whom 2 are higher secondary teachers, 4 are secondary teachers, and 6 are senior elementary teachers. If a good-performance award is given to only one teacher, find the probability: (a) that a secondary teacher will get the award (b) that a secondary teacher will not get the award.", answer: "(a) \\(P(E)=\\dfrac{4}{12}=\\dfrac13\\) (b) \\(P(E')=1-\\dfrac13=\\dfrac23\\)" },
            { text: "A spinner of 5 equally likely colours (red, blue, green, yellow, white) is spun 50 times, landing 10 times on red, 12 on blue, 9 on green, 9 on yellow, and 10 on white. Find the relative frequency for the event that it lands on green.", answer: "\\(\\dfrac{9}{50}=0.18\\)" },
            { text: "A fair coin is tossed 150 times, and heads comes up 70 times. What is the relative frequency of getting heads?", answer: "\\(\\dfrac{70}{150}\\approx0.466\\)" },
            { text: "5 students out of a section of 30 are expected to be absent every day in a summer camp. What number of students is expected to be absent every day from 12 such sections of the same strength?", answer: "\\(n=360\\), \\(p=\\dfrac{5}{30}=\\dfrac16\\); expected \\(=360\\times\\dfrac16=60\\)" },
            { text: "If the probability of a person being Hafiz-e-Quran in a village is \\(\\dfrac{3}{10}\\), what do you expect the number of Hafiz-e-Quran to be in 2500 such villages?", answer: "\\(2500\\times\\dfrac{3}{10}=750\\)" },
            { text: "A letter is chosen randomly from the word 'ALLAH'. Find the probability of getting: (i) a vowel (ii) an H (iii) an L (iv) a consonant.", answer: "5 letters (A,L,L,A,H). (i) \\(\\dfrac25\\) (ii) \\(\\dfrac15\\) (iii) \\(\\dfrac25\\) (iv) \\(\\dfrac35\\)" },
            { text: "A coin is tossed 10 times, giving 6 heads and 4 tails. (i) What is the expected frequency of heads if it were tossed 520 times? (ii) What is the expected frequency of tails if it were tossed 305 times?", answer: "Relative frequencies: head \\(=0.6\\), tail \\(=0.4\\). (i) \\(520\\times0.6=312\\) (ii) \\(305\\times0.4=122\\)" }
          ]
        }
      ],
      long: []
    }
  ]
};
