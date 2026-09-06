/*
  CLASS 9 — MATH
  --------------
  SAMPLE / PLACEHOLDER CONTENT — replace with real questions later.
  Structure to follow when adding real chapters or new subjects:

  { id: <chapter number>, name: <chapter title>,
    mcq:   [ [ questionText, [opt1,opt2,opt3,opt4], correctIndex ], ... ],
    short: [ questionText, ... ],
    long:  [ questionText, ... ]
  }
*/
var CLASS9_MATH = {
  chapters: [
    {
      id: 1,
      name: "Matrices and Determinants",
      mcq: [
        ["A matrix with 2 rows and 3 columns has order:", ["3×2","2×3","2×2","3×3"], 1],
        ["A matrix with an equal number of rows and columns is called a:", ["Row matrix","Column matrix","Square matrix","Null matrix"], 2],
        ["The determinant of a 2×2 identity matrix is:", ["0","1","2","−1"], 1],
        ["Two matrices can be added only if they have the same:", ["Order","Determinant","Number of rows only","Number of columns only"], 0],
        ["A matrix in which every element is zero is called a:", ["Identity matrix","Null matrix","Scalar matrix","Diagonal matrix"], 1]
      ],
      short: [
        "Define a matrix and state the order of a 3×2 matrix.",
        "What is a square matrix? Give one example.",
        "Find the determinant of the matrix [[2,3],[1,4]].",
        "Define an identity matrix, giving a 2×2 example.",
        "State the condition required for two matrices to be multiplied."
      ],
      long: [
        "Given A = [[1,2],[3,4]] and B = [[2,0],[1,3]], find A + B and A − B, showing all steps.",
        "Find the determinant and inverse of the matrix [[2,1],[5,3]], showing complete working.",
        "Solve the system of linear equations using matrices: 2x + y = 5, x − y = 1."
      ]
    },
    {
      id: 2,
      name: "Real and Complex Numbers",
      mcq: [
        ["Every rational number is a:", ["Natural number","Real number","Complex number only","Irrational number"], 1],
        ["The value of i² is:", ["1","−1","0","i"], 1],
        ["√−4 is equal to:", ["2","−2","2i","4i"], 2],
        ["A number that cannot be written as p/q is called:", ["Rational","Irrational","Integer","Whole number"], 1],
        ["The conjugate of 3 + 4i is:", ["3 − 4i","−3 + 4i","−3 − 4i","4 + 3i"], 0],
        ["0.333... is an example of a:", ["Terminating decimal","Recurring decimal","Irrational number","Complex number"], 1]
      ],
      short: [
        "Define rational and irrational numbers with one example each.",
        "Briefly explain how √2 can be shown to be irrational.",
        "Simplify: (3 + 2i) + (5 − 4i).",
        "Find the conjugate and modulus of 4 − 3i.",
        "Convert the recurring decimal 0.777... into the form p/q.",
        "State the closure property of real numbers under addition."
      ],
      long: [
        "Prove that the sum of a rational number and an irrational number is always irrational (use √2 as your example).",
        "Simplify (3 + 2i)(1 − 4i) and express the result in the form a + bi, showing full working.",
        "If z = 3 − 4i, find z + z̄ (its conjugate) and z·z̄, showing complete steps."
      ]
    }
  ]
};
