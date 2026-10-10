/*
  CLASS 10 — MATH — SHORT QUESTIONS — CHAPTERS 11 TO 12
  -----------------------------------------------------
  Chapter 11: Practical Geometry of Circles
  Chapter 12: Basic Statistics
  Source: Class 10 Mathematics (National Book Foundation) exercise and
  review-exercise questions (worked examples excluded). MCQ parts of the
  review exercises are NOT repeated here (they live in the mcq files).

  Figure questions: each question that has a figure carries it in the
  "diagram" field of the part it belongs to (the book's figure, cleaned
  and embedded as a small PNG image). Questions that only ask for a
  drawing or construction carry the construction steps as the answer.
  Figures whose labels could not be read reliably are listed below.
  Ex 12.2 Q2 (wage box plots): the printed figure has no clear median line for
  full-time employees, so that reading is only indicative.
  Answers were worked out and cross-checked by script; the source
  material itself contains no answers. Readings taken from graphs and
  box plots are approximate and are marked as such in the answer.

  The chapter objects also carry an empty "long" array so long questions
  can be added later without touching the app (chapters merge by id).

  DATA FORMAT (parts-selectable schema):
    short / long: [ { exercise, questions: [ { stem|null, parts: [ {label|null, text, answer, diagram?} ] } ] } ]
  MATH FORMATTING: inline math wrapped in \\( \\) for KaTeX.
*/
var CLASS10_MATH_CH11_12 = {
  "chapters": [
    {
      "id": 11,
      "name": "Practical Geometry of Circles",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 11.1",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Three non-collinear points A, B and C are such that \\(AB=BC=3\\) cm and \\(\\angle B=120^\\circ\\). Construct a circle passing through A, B and C.",
                  "answer": "Draw \\(\\angle ABC=120^\\circ\\) with \\(AB=BC=3\\) cm and join AC. Draw the perpendicular bisectors of AB and BC; they meet at the centre O. With radius OA draw the circle through A, B, C. \\(AC=3\\sqrt3,\\ \\ R=\\dfrac{AC}{2\\sin120^\\circ}=3\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "PQ and QR are perpendicular segments in a plane with \\(PQ=4\\) cm and \\(QR=3\\) cm. Construct a circle passing through P, Q and R. What is the radius of that circle?",
                  "answer": "Draw \\(PQ=4\\) cm, \\(QR=3\\) cm at right angles and join PR. Since \\(\\angle PQR=90^\\circ\\), PR is a diameter: its mid-point is the centre. \\(PR=\\sqrt{4^{2}+3^{2}}=5\\Rightarrow r=2.5\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the centre of an arc DEF such that chord \\(DE=3.5\\) cm, chord \\(EF=4.2\\) cm and the angle between both segments is \\(60^\\circ\\).",
                  "answer": "Construct \\(DE=3.5\\) cm and \\(EF=4.2\\) cm with \\(\\angle DEF=60^\\circ\\). The intersection of the perpendicular bisectors of DE and EF is the centre. \\(DF=\\sqrt{3.5^{2}+4.2^{2}-2(3.5)(4.2)\\cos60^\\circ}\\approx3.9,\\ \\ \\text{radius}=\\dfrac{DF}{2\\sin60^\\circ}\\approx2.25\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": "An engineer constructs a circular path in a park whose diameter fits the 50 m width of the park.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "How will he locate the centre of the path?",
                  "answer": "Mark any two chords of the path, draw their perpendicular bisectors; the point where the bisectors meet is the centre (plant the pine tree there).",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"270\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "(ii)",
                  "text": "What is the radius of the circular path?",
                  "answer": "\\(r=\\dfrac{50}{2}=25\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A factory produces arc-shaped tiles of inner radius 7 inches. The arc length of each tile is 2 inches. How many tiles does Hamza need to make a complete circular design on the wall?",
                  "answer": "\\(\\text{Circumference}=2\\pi(7)=44\\text{ in}\\Rightarrow\\dfrac{44}{2}=22\\text{ tiles}\\)",
                  "diagram": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABzCAAAAAAHuWA/AAAQy0lEQVR42u1dv2scWZc9szuClwhOIEMHMrxAQzsQbAeCdmBYBYZ28ME402az2fwJw2ab7p/wBQubOlhw8sHXwUAnC1PBwEsM7sBwE0ElgpMIbiJ2g/equyX3j6rultxeVIk1Hqu63qn749x7z3v9w//i+Wp7/cMzBM9gPYP1DNZ3dP249zv+NQEgQMbYfwZr7VWlSfmJkYyRw33deQoBBID+/xewlKwBy0iSHyPjLoBVkgQIyncVQEYQ+3sN384Ny5rKzwYgxgkH26xsmkwmSChgsbwGEET8yDjof99gsYSsuTUkJabUFa4qmUlqLGrhReQ/mEhwMIjD7xisBjFmS5BAwczSJLZfV2UZqrUWLACWYpf7HpxlESAFUBCzz0iSkTFd9lt530akZpcpkTFyMPpOLUuAOHfIEmkMoFmMm1ZVTSy1RKoxMCMn6QngehTLkqC4EJBzjIGUjNHWBq8PKVl7pBrABCo9Plz7pw7Z75DjO8UZVnlZUrKrvUKVb2xmaXL5uHD9sPcWzYfUoKJ76Z7ZBADGwWApXNXHbaCi5jYdL9935RLjDnzth8fqZ41NJisUqTCjxtwYLy+HX8eqZKYdQ0AcXF51fUzG0TeLWeUaAVPJzGTFH5XJt7LVYfiwpEy7QgUoWUpdfHFqSZRaAvyP//54Ln5yenbxcsAeQwDgwQEEBCBAqm/PF//tf/x9Yr7JbkJzrf6XXtf1zfFJ20f8M9WC49PN2Te1rHL1McTYklnmkIVJCCZh4X3+22S1WZGlwsl/CELh9VrOvGT/2jZymQmQwVoZ12ODVTxynNNcjvcEJdlEMxJRLY9WZOn1MKL5TTRgybI7L/FF4f2wpRdKzJGUo8MAC8BoNE4TUw7vmXSZzBoSMYxLkhtiJEnG5flqKmsi4lc0YiK1ClwmKWcem7SwrScCCxiNYjKzDFR2omTWuOIgpvu1MsAYB+uqvj6GwDhZ4+ELQCupnV+BkLLJmvTrtwzwD67zty8d7h5C7YADcOEoR9bzL/U9A2EvXr67/OX8dMM9z9781COZbwdf4PR+d775kc7+rD30GEJw1H57fjhgAacvQ3DJATCj5SpoHZsvoBVfDd69+7lVhjo5f/uSwYO+yoq3F5t/+8gEwAOCu7QJrScFCycXR/S6RiDc2YPLyxOefskg5lj1+vJfRqft38HFi16A3+cTLh1ttq3TW3e4oxeAzWg9LVjA2YsAd4cLPbhDtbK/vPC6Lg74+vX7n0+6mezFT+QDuFx+vNk2z2/hLgSHB0e9Hq2nBgsnF3dw1QoMCAJq1/EZgJOj2hyIvVeX769Ot7HZCMciXO51G7RuvPZAIARITVQ4BLCmJwDOX7g8IAQAIaB2/+kEwOm11YiD99tABQBnF3fwe8alWq3QogcPDAGoa7w8OQywqr9NvlwAOH37RRIQSMpd0FsAuPgTvXeXv5xuff/zF8F137b8Ly1+7chrgYA7HLg4CLCqyd//8JsLAHj7RQ4HAcjhyInrCPH9Tg2p0zdHHu4Zlx+3IBCnR3XtISAoUH59cQBgVemPPxwlnL+98VqEh+CaJa6zt29Pd/yQ82N5vYBViG/agHxXz6KCr0mJTwZWNamtprtf35wBePNJ7spdCHfgxel+PubsRa15mGfv1ZtWv3UtqeHJ4c23BquaWO090r3WzXljW2DwQF/7hF1d8YVqgQ4AHLx+1+4lHNe1EAAECCtN64nAqj5+doQQAuA1bs4BvPlk8jCLxC0YZFu0rIR5Di7ftWwZn9ya6tx2c2mVmT8NWB8mpsDggEMuvgGAO5dyqQFof46I0zvVDrD36v27f2rtvte1FALgrnqVmT8JWB+SoeeBCB4CPPAtAJwd1V4jeECA9uiIOL+r5RxcvvulQx1wbHKF8iwr6NlGsKq//d6y6bryDv9jdQhkgAtAiPEy3+/sppYQAhDcPbw83Rtat+Lg3ft/7lQC3NU1gACXO99sBVY1+Wymu7NdoHKHkyG4O9hj73VDpi6u6zqEHLcUXp3vzZQvXsTLq27lJc6upRAC4VhlWpvA+ttnOOC326L1wWoPvVBip5Nx8Mv8Xke1wQnAPQB/2Z/jn110f+BjkwAGh8LymLABrOpzbgPjy+3pVmYlASEEuLwOAQj3Zuyn1yagFzzAPbRpQD1miX9jCoEK8LC8qNzQVhbIIoKxzsKeyiyPZsooRpEPB5q/2sc8c6BgadpiKFOJfCQF21VKhLJaw9AZrLHKIEqQ1Amuyqwg3UztxSWz38uUsoiEspQ2ozBOIhPxKCLJSJECKdmyF7fWDf9qqEMAHME9QPry6ahd2Jz+9x+fDSE4HFDtHnoAe6+++u2zTxIBF7yhFGtD4B+f5e4u6PrmdN9gHZuHIs5wnnezrCoBUORc+WiQxU1i4QowSwKzTEuSSEHLpd6XZkZmVWUab2g6TJOV+Y9EGsC9Glj//X8J2RNhXd2QRSkGQCSzoNbElfLjSjKJQAILVo0TInLpcGqUkgQiGmS2YTUGxGbKWmawaY/icYw+gszSDHXMhqd3uZiDByGEQAQEr+ta9ac/v1zfPfSp8e9/pPS5VggSXvUQvIy8AgnGn5d/ylGqxYAAObih5rmpAwMcDpc74Far9i+319d7cslPLuQRRljSYF5rWaPZXH1mInMRMpvpehkzm0wSmf+ejcQIYAS0Wts9HKRix1BKG6yEKlaVG4fZCKKANNiLfcUSM7A0H26gDsPh2JSHtvkpm+F7FiEDkVktShWhGpl9DlD+v0AEsCYYDeLsuZQ2YJUlISIX5/wSRO0FrpiyaFjCkny4sTY8u4Mjt3q8rtEjAAaA9OAKDKrlIbikwFe9EEMIuTXkCj32iBDicB2fPv/dsotDCOs7NTdqvMSDQ+4AEdxdqmU3tzs74+mfn4EQ3D14POtoWY1xLbzCsosp/ydJAyKp4oISuOAn2RD7m+jN3Mm0Pl31KckKdSvsLetgICTTzlurSJWYs0TQ1EYYMqryIhrNY7MyFodkI7vljKxTivmzWzz9IJnKNoNNfpjduVKGLD8Q1YQGirtuIIhZvU9gS7AwBCrIiv6/IVD5IZuCKFubSmhhTu2xVWVyNbHGZGXjUavnAcYyy6Xv7BMlyjDczbKg8vhbglXwEhHzHU3l+dgIzFCIzzytEK2VrREqSzZZ22WNgKmlpJxdSrg3cqLRbmBlNxGsGm4JFoChFW8DIEU1RSfuy7ebHzqQ6wE5e53qwrj7o7Fld1TzILLWetqltyy0aKlpdRGzXVWFLyg7ohqOTjB7aUGNHauQBYuEui1uhKp4Y5NTJOiyv4NpqSGTO4HVRINqtqrcVcggNWyJ3Vsow2iljOwMFjAcVqlZV36Bhom2DlwE46rMvI1MctgEceZwOHsnjNguvEbajGBO+93hiskyzvmBDNo6cGX+XhxxD2ABoxGmfVQA+9PimtQOLaaYLZWCtto5MBpVyYoUlwKMsi1dkZkd7hyzHkTCbER76VpGNGxk2zsMh+NkTQQVDLblow1nat6vuzRPplbe+D7LHkVu3V4ZfbBCbiEIadsXqTlTPEiwiKbC0A53uapSstlmDNvS7Lnaxg8DrD6bl8pdbjOcJ/wyc+hv//KoAwWrAKVd7zFESrLiyjJsMwciV76xwzuLZifEhoOYSTwJyNJ4KzdsHqE60AAfG4pD7mhbgFEUCW1u6q99ZzpQN3wfZyxiuKsnIjNcgpJ96F4nrmg5HA5Yo/3tBB9yIiFPh9Vm+9ISqypl/fAwwdpratV8kiWkD1fbuiG3sayKfVSGpvri0x8vtEVOVC7xpUlnx14ZNjeBVZlMJK1UqiDJj0QEieHBoiXJmDv0St0fM1fTnSxrankWCEZaM/wqMwgDiCc/k6k1WjIJzP15VcNtLKtLuVNZKluQSwRg3tpcRpDNbDVGDg7QwEalqw9K1s201NUNK6XcfizTCTUNZbEpMUUARiMnMcbRoaE1UCpOIMN41M2wOoA1Tip8btYInRVti6UAi24LiTENRofmiE1njLLUKSWxkC1ujlnjScp6PQKxqcBnkzk1A4vZ9EsSZJbS5WF546jEEBDqBNasQp2DVVk+yOA+WNPZeTCcnTqRK/h8+oTNRxJNcU8ZBJNZ+vWwHDFxNoxM7XvVlRkGtHs8azhcYlnjSWqOScjaC5Q5aolbmo22cy9kNjhUPnhgcHVAYPUHDZEnYK3BSilHY5urCpa54ThZmilmS5cjA1yycMOKyw9xnmAjikj3kHxxkOWHEtV+dPthIiDSJH6t/Plx7oGTe4dXqRF7LMqxGi1fya+LIxAiKxWeGK01HKofLfNCYcl0eQVWH02MOR/GldmwmqQ0mzdDOYJLM4nLvTlotHtndGimN4DtNjzvfE3XMc6rfHpKTojtwJqYSJIDLcz4HoBVJTPLxqMiJc0SEMZBJPmgPTuVSVaC2bwHRdEAPSWpF9fZ1uVssGbWKsRXhX4Ph2vAMjObt3ULBSUYl2s7+hgCGEuyDGk5lFSiTPZ0nL7aQLaSNRHCUhuwzBpuFIXBelKas5/yDDsOuF4aNgKmKTXC0ZI3RVJmT5MWK2L9TCJylsBbhngShGGoZYvPYF1hbnbKp5MP2ojo+v2BJTPAsu6HMEAy05NwLmKzplDNCWVtQrwRBJWgpfP/H5tYaLBGlRZjbF299PujKlmaHalNZD6Gg2CoTUJcnEKs70flosS4JBfO3bDIiykwDrqxpeGwYjJxPveGkp4ErY3GXwo20Cxtfv/JQFIwcRlWM7XykZkQQujFwfvOh3acvjmGAwYEVwgBUK3rN4+K0/TLKU6AcmTLquuurkMgQu0eNm/C/s/kCJDcQxys2bvTvzSY4iBux8FHo3FKXCCrsgl+e0SoZiF2usEPqWazj21a2dhm5/XGpZXbj4vtMg62P95kNPqAuQKPkE34aJ5YtfbEvB0KaCPAnKh0CBQvf13fz7qUxZ1KuytOUm5Qllp88lhxawq0ncyXjhyxedQ9Nmv6BstD1sIOi5MXr65226Fw9jK48n5nDx68XnXu3vTLTh807d+G0CJgAcBtkoMMAHi8/lN/nygEAs7w+pdNndLdq5R+n0gq5RKltGKv3U71drVAr6YtyEPezUdt2r0xNTW7QuJyw9r3kPWqHCo7q922KFI2uqDmNeqwhR8KrVTjfZYaRHHVYdb7nkhfxY+TxvW5nNtOtbX4owL7C/bUxhfymKCN8iuy+RqWFYa1//H9kJyksu1weU7Zfvt8tShjnbaLG4RgMbeQNrznzKy1+l/uX+vQ/w1I+ST70aq2SrPSqbrgVt1bRdtfLOOCFgrMQRKAFez9ccACfoMUB3FFo6a6t051iFXDxYTY2tKjyr7njUTrKp9cv/orzh5FRXMpi+vPze53XfY9G+yUIdgM8TZHyt9iMiEOntKyMGRa3S4dLsDTz+441VqSOe3P0J0C/a463byvWm36DldXU63Z4Pk4+qx+f4NVTcvy+/OUNe83TQ0cAtOvvrqhyYOd9DvRZl+btGsf4xuJ2XTP//rAdKHlLQrVEP0q/5vpzFmnygbYidHGQaS2+36aAwFrWD14h/0HUWYRE02754PFdhsaT/9OwSpAVCti1YO/bGJUf7r1gvvfsWWVrKb14XyWBRov+sbKuW+6aWAYv07n0+WQTHEA1w/f+hvKSzF8n249JF9TDZ/BWtlW4EFKVQ8HrGmjMZydW9B/BmtdoZyPjwB4j+c/g/U9Xs9f5/4M1jNYz2B9T9f/ARsON91RGGpwAAAAAElFTkSuQmCC\" alt=\"figure\" width=\"300\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Given a circle, locate its centre.",
                  "answer": "Draw any two non-parallel chords AB and CD of the circle. Draw the perpendicular bisector of each chord. The point where the two perpendicular bisectors meet is the centre of the circle (the perpendicular bisector of every chord passes through the centre)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Three points X, Y and Z are located on an arc. Find the centre of that arc.",
                  "answer": "Join XY and YZ. Draw the perpendicular bisectors of XY and of YZ. Their intersection O is equidistant from X, Y and Z, so it is the centre of the arc (radius \\(OX=OY=OZ\\))."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Draw a circle with the help of any round object (e.g. a coin or a cup), then find its centre.",
                  "answer": "Place the object on paper and trace its outline. Mark any three points P, Q, R on the outline, join PQ and QR and draw their perpendicular bisectors. Their point of intersection is the centre of the traced circle; check that its distance from P, Q and R is the same."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Draw an arc of any length. Complete the circle without finding the centre of which the given arc is a part.",
                  "answer": "Join the end points A and B of the arc by a chord and draw the perpendicular bisector l of AB. The line l is an axis of symmetry of the circle (it passes through the centre), so reflecting the arc in l gives another arc of the same circle: mark several points of the arc, drop perpendiculars to l and make them equal on the other side. Now take a chord joining the end points of the new, longer figure, draw its perpendicular bisector and reflect again. Repeating this reflection a few times closes the figure into the complete circle, and the centre is never constructed as a point."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "In the figure a boat swing is shown. Trace the circular path of the swing during a complete round.",
                  "answer": "The boat swings on a pivot at the top of the frame. Trace the outline of the boat in its lowest position and mark three points on the path of its tip. Draw the perpendicular bisectors of the chords joining these points; they meet at the pivot, which is the centre. With the compass point on the pivot and radius equal to the distance from the pivot to the boat, draw the circle; it is the path traced in one complete round.",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"200\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 11.2",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Construct a circle of radius 3 cm. Draw two tangents from a point A, 5.8 cm away from the centre of the circle. What is the length of each tangent?",
                  "answer": "Draw the circle (centre O, radius 3 cm), mark A with \\(OA=5.8\\) cm, draw the circle on OA as diameter; it meets the first circle at two points P and Q. AP and AQ are the tangents. \\(AP=AQ=\\sqrt{5.8^{2}-3^{2}}=\\sqrt{24.64}\\approx4.96\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Construct a circle of radius 2.5 cm. Draw two tangents making an angle of (i) \\(45^\\circ\\) (ii) \\(90^\\circ\\) with each other. At what distance from the centre must the external point be?",
                  "answer": "\\(\\text{Half the angle between the tangents }=\\theta:\\ OA=\\dfrac{r}{\\sin\\theta}.\\ \\ (i)\\ OA=\\dfrac{2.5}{\\sin22.5^\\circ}\\approx6.53\\text{ cm};\\ \\ (ii)\\ OA=\\dfrac{2.5}{\\sin45^\\circ}\\approx3.54\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Construct two equal circles each of radius 3 cm whose centres are 6 cm apart. Draw their (i) direct common tangents, (ii) transverse common tangents. Find the lengths of the tangent segments.",
                  "answer": "The circles touch externally at one point. (i) The two direct common tangents are parallel to the line of centres, each of length equal to the distance between the centres: 6 cm. (ii) The transverse tangents coincide in a single common tangent at the point of contact, of length 0 between the points of contact."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Construct two circles of radii 2 cm and 3.5 cm whose centres are 6.4 cm apart. Draw their direct and transverse common tangents. Find their lengths.",
                  "answer": "\\(\\text{Direct tangent}=\\sqrt{d^{2}-(r_1-r_2)^{2}}=\\sqrt{6.4^{2}-1.5^{2}}\\approx6.22\\text{ cm};\\ \\ \\text{transverse tangent}=\\sqrt{d^{2}-(r_1+r_2)^{2}}=\\sqrt{6.4^{2}-5.5^{2}}\\approx3.27\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Construct two touching circles (externally) of radii 2.6 cm and 3.6 cm. Draw (i) a common tangent that passes through the point of contact, (ii) a common tangent that does not pass through the point of contact, (iii) the total number of common tangents.",
                  "answer": "\\(\\text{Centres }6.2\\text{ cm apart.}\\) (i) The internal common tangent at the point of contact, perpendicular to the line of centres. (ii) Each of the two direct common tangents; length \\(\\sqrt{6.2^{2}-1^{2}}\\approx6.12\\) cm. (iii) Three common tangents in all."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Construct two intersecting circles of radii 2.5 cm and 3 cm whose centres are 4.8 cm apart. Draw two common tangents. Find the length of each.",
                  "answer": "\\(\\text{Only the two direct tangents exist; length}=\\sqrt{4.8^{2}-(3-2.5)^{2}}=\\sqrt{22.79}\\approx4.77\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Two pulleys of radii 7 inches and 14 inches have centres 28 inches apart. Find the approximate length of the (open) rope moving on the pulleys.",
                  "answer": "\\(\\text{Straight parts: }2\\sqrt{28^{2}-7^{2}}=2\\sqrt{735}\\approx54.22;\\ \\ \\sin\\varphi=\\dfrac{7}{28}\\Rightarrow\\varphi\\approx14.5^\\circ;\\ \\ \\text{arcs}=14(\\pi+2\\varphi)+7(\\pi-2\\varphi)\\approx69.51.\\) Rope length \\(\\approx123.7\\) inches.",
                  "diagram": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAB+CAAAAAACM/WpAAAgkUlEQVR42u19PYgjV7r2c/fegZMMvMEMVNADJ2ijCtpQwSxSMB+3grlICwOrYKA1YFgF+zEyfIuVmNYEyyoxow6MlZjpDi5fJYulwNxKBkuB4SRmpcBwEoMUDJxkoJOBNxmoxOgLzqlSSSqpNf5Vf3bt2lZ3q/TznPe8/+9z/m2B369f6/rD7xD8etd//A7B/tecGczMYAIRQCAClX4H/2cBGwxmAAZsQWe2fyGSBICZiEEkg+oPef1/+13nr+PNDIZh94CZOP0juQsSRGRXxWhtAJIyePcF+K2DP2dk/2MHNyzaVrU4YScpA5JULniJIRujDUBhEJZ/B3+n1raaJFUhnIFNBJD7F4FAIGKjtWYKAil3i/WYtdYMGYanv4Ofv6acU9icyrXDm0BEUgIEwobcXiqDIAj2k+ep0VojCMLqbxr8uXFSbaw6WcHbuihWvImww1e5jDXXm++kyYexNhTUn/52wJ8zM2CcMknVNBOYsAI1QMC+anncVwj3hTF3W6wM9lyyGwn+1KSeCJYG0llJ6bS2JAD0g53wYawR1qtbNhYYgNyykONIQdbP/v8Bfw42JnUBwVgqktQ2Ekn6cSHPKn7UrJeKFt2A2YKfup1Sljaln4I9TO+hgj9PXe1Mjdhwh5wPSC7Q+cnwzl/nfQ7ba1I/1ZrBVo0x2Z3GgP2VpLUVmCvF11vewwDfQg3rBlrAc38lIiBw4fxuG/mTKLW+Rv35BvIMSQUe59RowyCmtSBrrDQF9dJBgj9nNqn/l3kjDAI49UMgCUSy9At/smFf19vlVRwNIOV2j3OqDRsQBWH+w15qI+vVwwB/nrnbBuA1tU0AydQrKf+am/DDWDbzLs5QG0i6PnUwNZqZg3o5r/oNN5/+GuDPUxXCqTZx0k05K2n/L6mEA7mGfRPmxf4yNkFB0mZerPoutWFZzxna89jUm+WfH/w5M8CpkVwG7faf1CNxgXsZh3kNu1x/kfsx0lSvb37Yyz6kDRrWXZqhMpC5Xw67Jmye/hzgu7idmSFNpkho1QEkIjocyb4W++bznOFVCAujpQ8jOH8n+NfGayiD8Cwfqsnu6U8J/lizMVluGwCIYQMbgpT4Ody/X+A671N7qaLPIw7axar+WUxWhZrwq4KX0Zw3tE8Uuk9/GvDnWmtjkOoPl4sFMZMM3imld3DXs37QreaU//Yo9XIJ/osijJQ24dLL/DBGu/iV3qmSNVdaGUgZUiDLK14jtDbaGB1WbzL2/fJyE6D5fOtTszCLZNGfS6WhUirTPS8o6uPsR0r+UClDMlh1ZvMxnTYgGd5Q/C+71K8uVYXc5SMOIxAxGHntvmoO4xhBZi+eRcWy/+/dfaH/5GJC9dZnj+7fKfz7nfuP3/MSNpPR17dObh72w57o/jlF7n+Pav1dIvSdRmLzC/6D4mccPXyrJ7PbDoiHb/Tk+wc/GPzx3y90pd76aAXW+avXr1+/Psp+Pn74vu/xlVGvbh3fNLnvoZ9if9kxrRd3sBt8CIgEyTbwgQfvXc0mbx9k6M/unvwwnT+NY85XCObGGAPDYIL1cgKbBSiXMVWxieJ6+0a5O5d9k4n6eZ/a1+SD2cUvvOtJVdmN++wMx3MTd3H6Q3T+ZZ+DZaQw1tpoABIgAtsqRr56P1daGdk8uznYT5tL//6yi/51TttlzGQt7u5iy4cxN507NG1ruaHKrgd/GkVLJMdaaYYMpCTpaglzYwwbs2JsL2PNa9mpQ76exPUvlsFr91qH+Txisr0j11S6nkXcdqs6bhcEBYtrrkFF1Ebu8UXDF16lM5hsPm3Ua/lCeI0L++Ok44vKYHEzrgtRSb/RwPdG19/QE8Lzfb9Wq1xc88yO53XSmzzRWvvrdeBf+Nndg5onKr38Z5tMVvFveEI0Btmi+b0bgf2k4g+W2O8jMR0hhOd5fuVa8Bcdz7vI0F9/cVx3r+/unbU8r7F686ji12q1WiO3TVq+8Bp2fUY1z2vdBPAbIhWvke/tJS8OfM+7HvxFS2RL2xCV2TuA3/EqTtJ7BWqkI4QQQqxs1FHLF15rki3X7OCx7y0hqWW7/DpALfhij7WatTx/lG6xNcWzE/yWV7OKZdIQfmdW+BnWwF8sBg1P1AbpitVmB690MmXQEnvu1JbV+Z4Q+yxWTdSydV5VPNj5Hs4QDXzRmBR+Bt/3xIaJ6lWEE6FBRRy67C8R74nKnvd03gn8UUU0NtbhOvBbwsl9xys2nS0h/Iq/Cf5i1EgVzqjiHbbsDzzfidXEFxd7a6p3AX9xkRndkS96e4Hf85wubGWKv2j3eUKMim4W9qYLXzRuhrVt7YdkBr7neULs5891shXuCH8f8C9SyBtbNccO8Be9irMzPW//L/XLXyOvkm2B9NFssAf4wvOEEPvulVoqgbNKHg1cZ4caq2oqb8drwivU+S4qEBb91tLTPUTBTz9bJfsanVprF/yzUa8i0mtPC72MH3qet7Se27KaH6vWRzZArv/Pltj5lTJCIElEvSiHefL2aja7dww8+lbP3jvQLOe4Kzt3XEIkTeBfKpjJt9vysuP/jpWGkL4kLxEi+frb76/5btPPbx+dvFbmrwCAu8rQw2uyms/i8LlNDYVfbHvVMmFXWu8p9XWXykDb6P6BFlgipNW+WNYdujFArI0u6DYbK2ZISa6MNzWGWet4VwP/NFIGZdRj/ew5AJRCHWflpmLJPx/I3hGA8yjoHm194a81AUiSRvHan9zWM34MHH0/M28eHmQ2s+d17Nc7V7W/2JRsxHZIxUze3L6zJsJx4tXPHt4/cZAcnTx4+OiuMFpvE//xp33FSP6Ko9eTq/+6AwC39Uw82gX+uJM0TwEMu9T9z+2f/ZsZKEGCLeDj5PVMv34E3P9uMnv/EBXP5yrNSn4smvYDfjoDiAQSJLPZd3fv5KAfce35w42vcfzgfWHi+NXdo4IKVKQYwNXd+3j4ciYeAsDRqwn/8WgH+H/XlRcA5h3u7Eqvfq0hRJJQfRuwD1+Z2e37wF1trj44QPD/htaJ0/ONvzjVf8UkBAFCiCszeZXCf9ljv/nnLQXUe8mV0t/f34B+wiAhEiQfAG+0sZi/UYl/fzv4wwvRug/gbzr4DACmWzTPl5MECRIRbq3ZvmeM+Stw9P1kdvf+4dVtI/8zJ23UPLLf3CSJACcJAIhkppTF9FmfGmcpDNNvXn7zz2++ffnqzfd2aY4e3eXJapV2/Pe+ERCCEoiE753gwdfaWtqTb7V4vB38j2eVzwCcX3jtEwBPLl4XaOz5t1+qKyRJAuFtVeh3bmv99iFwW5vk8ET/k1nDfvJhHFrB/25iEsEJIEAigUjYTL69fTz/Wxym5fXxl5+PzFWChK+MGn3z+s0xAJy8R3r03eNlt0E0SYQQQiABgfEYeK0S6/C8GSVO7xSAfzkQrfvAuMfNjwAML65mGw0Jw897g1EiPCIkyezr17cKN8f0pfRmk3snuHPLTG49ODDs531y5vZzdhr/5DbxVcJJYmEDEvBs8k2kmy/sMy8/VRyElfpfHj169PieJKMnL189AHD08HutX1tLOvw40gyCAIAECePq3gneTq7unQDA/Zcz+WBbGfFJHPzLNhH9C8C4qwHQSrPtZawgZUAkAcPaGJb1zXadcazQPf0wqn8B4MOoqLPu19U6TddpOW3LbuZXDmPFQOC6oZgJDLjetWHEMlwpHE610mlvwXlkmi+AYRwD5Irr5BqGmy+APylXrMyw2JT8yyhpPQDGfW49AOZtDVCSaPX6tpPu6cd9rjTbZw8f3D8+Pr7/4PH7vhAj9d17K57Z9JPehFk+fKtn906At9rcO7B2nn9Oao/SB0tTevL4ewAQAqCEQCIRovGRDX56SW2te/Po/uNbrNWr9+4AD27N9KvXn15oAEIIkYAEkDBAtcYx8DZVN29j2Aeb4P99FrSOgE9V0LkD/H0EECEBTxz8l51ZrfnZgyNg+t2rb797+/ro6P7j9xKjdU43TT/pqwRA8n71tb76ADj5RuPxYYH/qanb3f8J1/Ny8eCDu4ITCAiBBMxJ5czKXBz2/rLZz3P/gzdGzd47Au6/nUwmOiEhBBKBBAKcMGTYPTsGcHvE1s25NXF6ZyPCnWoEZWCqEJaAqbZ9KgSG6auwXn4W21besdJswEREYVAtl8d9ZcxZqnC0tm0tRpUD0uMqEMR6eljtDJpC15GRKpn0Oj09N8ZF7wT5HACmfb2te/O5jHS7XwbOTMwgcr8mZjBk1uBfCiP1FABKgVZnheAzKASgjAzhmu3BIAYxtFakg24ZGKqYJQUEaA0lw3apSlFs+0GnUcxuIgIch6dxHFeBIDDqoMAfs8sKGN4cRDqbK22YMjiA2GzvRHoqu7r7FYA2KzuyCDetuGIrw0jbBxI8L20BPwCgIKsASm2lDDvLQQyNsF8CPowR1AOUAYy10Rzr+lm5jLiPs2mkTLZoBAOESk3LqEZaH5TgG8i1B/mrVBprzQDY9r2fm1zD+FCzARBkM3JV7qonXwClptEsiWGnztbckEDy8BQAAjKmEHzNQQmYGgRuB4610nYElsAIuiWM+2rZRlWtzrXRum+a5RcUR4p1OpvCDJbNMqTUqgwEsTkovaNTzHUR+EC1OlaGIUMbAmf9yFOltFVJCjJ0gn3KfXV+BlSVhpsaRrDesF2SWp8CQDVQulrUNFUTvcViMfLyWfpBw3flA3+wWAwq3npFd3ZREZXJYtYSaVOF5wnhVXoTV49cLBYDzzuoLqqaKzNMdvRJXdT8jm0gyApKF5X0OwohxLI3qWPLFyNfCE8IIfzOpKgwu1I125B8QxKA4fwI3unppVLMADVP8SzOhsamBgBVgVIJfd3tlptGM1lTAwrqrpM/IDMvIUjX/VDUjptsYCPlVmWuWAKA4qYLBM77DGkFXzIA09XWea8rHVWBamDAIBkWzNEhQGbFTVG74MRWWlrrlddZp+IJUVssJn5avrlo+J7n+xXbIjioiMZiMfBTocj1E7nSdOOgqrkTz7fCPNhaqlssFhV/tFgsJo1WVlwVwvN9z/N93/e8ii+yInrHKoueEKLSm215T1fGGtheoXVqR8OyXGSESs/7IagOKA5eAMD0STc2zMboOBoCOG1KdY7TwI6CBt1oGQmWJTSAwC33gQg+u6E9A9oeBGtZBaA4dB5SxI6RCraSRACiSyv6kmMAYYCwf1baVn6yTgcRMzZ5NR3qTMHGnQHJp5hG1AaAaTdmIpKSQLp/CeBpyDEQSgBBe/XtJaxzwNNDcnZoh7PjLmXdDvcfwPqK6XA3YJgI3J8CQDmEspK2vbBF2QTnFvAJwJQLxIE5AJQJbJlFpc8gkO4PAdSluUQoIdv956tvL8EAqsTmkMBf+tbXuKND7TbJ0DhSQU7JCxgMmL4TfTPMJG0L+Ckr0C7JN0VGSCMAFNUBXHYVJCFzKU0MoBqwQimAfL6+8pJ4DuCgwN+FeRbtWxg0Z04pcvMoy/v11CkVBUBC7wE+isDnVCw2tRZTgKmWp8A0NkDKX0ZEgD4HEJCep2uy/p4m99aHde36TGxdP4fz1OQQJwkwW2YrY1KvzmrX8bbXS3dFqRh8bCxrJgZMZdgIio3NYBCDmCEJUNaTMiDwvODF+NovepDrQqXcJtHMlClbSnk3QW5LOE+yTNv1Tk78CsGn7e6BtTBY4XyyqScCTwEiNiAyG++d5ZoOCHzaR/+saRhePuYV9gPOm1Ni3vPd/1D4fsX2NruNs09hf2KrzssSxtqA9USJZAZ2eBUHK/lO+aT5RcfuQWA7hba6o4k2N/2WFbcP1iLcOe8W/zXHyY7BZwsjaee3oINEmK6Fn4hWfkNp2pLXxfQd+D6K1M52BSEJcxcX5z5MmsCDdD+UC7+Om5w8xEvSrnWZ5r5u6ucsNQ4XLSDvLWRr4Jd2mEbKzCnRCk0rgWDjYpaY55dmdUn5sHQ+Zy7I1ufYLE7qoxAY7O5jdqSpZE2t/R1dY0R4J/juPknY0F5VCQMp2QDVINuB1uozhQDmLIM0P1EcTtIBapsdlogCYgCSLPinEqCUaYRyXoQMcjHSfAsXSYHW/8OGJ8oADArioQAaVZvAaMpVvWPZNxTLMgzLAi/1EMHna3V+ydZFspg1IGaGo0DMqSuXT9AIrBKubpd8mXexNiXfWI+WCz6uBgLWU6BalzmPla3gQ3GwrTThdP4hgZ9p8h3K0MJelcYmpUICr/MHLwuNc00r8fD18fUftuilTcmfajZD1AMTA3geZraWmdGsAhgrWQd0wXdZC1YOw85Kp1l3gR+QBgDJympehz6Rjdmt7Us5ADTLU2wtjK3GFFvAJx4DdVpPUMwvuwocoxwgHgJo1wmO3A5h/zkAxByWMTZQT4brWSGXtKAD8vTLmRmlnRmnKYBQKpsxeFGnnHw6wNLSUsx1q/n1+DrwpzZ0+I+NtWZdxWm82ugxjW0ZXQ1Pm6z6sozSF2OtmG3RpgQAl3H4AogZxui4frpqbwMAYxMEh+TfO81aJh5vUdLTmKHLQFlGkX3KC8ScD3kZCNz0yKUKzgAMNXQ73EKmaSj1i2Qx+MYACJUx2f3j2DYkMHEUlJtQ3W4ZqFbPpsyUtl1c9mUXOI8BEMdqBX5NgXV5DomER7o0yJxMsd6Zam1c2iaQ6twW0NsWfSY4rzPsYkXwNQMm0oUsYeOsdMkoF4BfshY3lDrdjLYXxAXZqv+iylq126fACn38eZ/aZUxjhgSITayijKJnbGwr0GHlF1JdXypOhE2VNiBAn58BpzqK7GE0pRdBrDl18hBkDSWXOjgDMFcAMXTXPC9Kj8lSziktmsky0/KyqWoeKY2UwpOBWJ6d6th0zdnq/oyofQpEGkQu1lBGP09VflAC5oYOSesgUGZeAoAg3gR/qJQhgEAmDstAXauua/R9GsbaMFuCp4zsb9hHF7AIgADu600unrQfZyv4BBOXgTDWw1Ng2lX5nF4AE+HseRDrflyXQSndnorq9SrwYUSWphoEwMQcyjIAjdDGfwcFfhlsSs6FXlP6w0il35ihu18B5TarJ065l84sd3G+z23YRb8KO04HgiFipaN1Yk7ttM5cbwFfEisAQaDiU8CKvXOwZL3Ocdw3zdPTcay69oQMsDEUNqvAuK/DulGGwa7YFsVUf46pbYqMTf2wejXTwpqEXhH9sYpNFn4RW8VTNf34T1/lsjCryrzLlp8qMkufhrXRK2zA47Q71BgXE2/O69run47wJ4vFpGIn3ZftQS3PMk+NOhXbNiQqnfyg/6hX80TGTSC8yaJjezMq3oFxH3VqnbSFKd/T0mtUPM+SGfm+X/GEG+bu+SkXRREjVG/ZWbK8VhpoFosLzzWppN0qm5Iv2agqEEYmLqMcuPa3rDGujViZ5hmq1Tkbhkx3X0rmVq2GUcwu88qol6FQBzA9MJUPSOUEPoxVqnemWjEkmJjsYAQzYPpUBs5kpJpFzbLzKHZsycM+wx5RxLbMB47iJTWgZodAGodt9OcfvdWcvH+E41f66o9HuHVlAAS19kduNOLOo3tmpr98c+voztHJ/fvHx0cApv/8eBK0/+Fe4dHthJMk4SRB0LtzPqp8BuCfo+AfhwX+bc13jwHgljJuNHYY6QREQgCcAMlVkkAGNNH3joGTP4qZ+vLV2sjt8PMLHfT+7BR/AEaSQCSAECKBuJrp79w0+7zHbvjxU/dgczji9sRc0UPgrp7hEY7fTpKg0/5L7h1P/peXzEbq5ctv37w9AoYvX34aaVHvLNXb/Q9uC5EkALWr+GTWvg/g81nzwIay7rzS9AAA7nyr3WjsNxqUTjWABQNU6/zj3kzP7h0Ddx6+x2oy+vLbt2+tJE5f/vfnsfK7dk7xsiO6z9+7YpEkoARJIhIGEtYTC/+XAzvVj/GFbN0pdjVLgTFqXkI51HF4irBO6x5r6ayulFYAUUhaM20eCfj0qT2s6ynOTfgUwNDGfwdWRtGp3jG6DACBNq5oQmy75ZunQJX7uosqgGr1XGutYyIie5oRgn7K2dBF+xRVGSuVL7IQ2ERx9ymgEKbhmPMTUciMJHqLxWLW2NXFOBtYyyrEFtqRxUWtsVhMHJtHzTtAqsFW7SIlH2mk/di1Rq3RajUqnhBL/rpBZWk6ZxeNiuvC9mut0SaN4KhhcfE8z7HyCNFbLGZ+yjdSSalOUEitZvs4B/5uqpxRzX4I/3oWrcHeFFq/KLddrZX1vw4cHV2tVms0GrWa5+e5FGctz6stZWw2GY1GKySXNc8f5EgWPUf+6HueL4SoLRaLntfIWnTdKhT17YQEHdl6VjzetW2v39nDWLYBIEIdh3cFMDYB+zRA7HQuuRptM/oip0pLL9pSNbN0balcrVaXNm78pG7q8fLppy+iuqu0SmJAtgHEaNq/qnQeqXAC/eT1Fc/uneDo1exq9v521pFXsRGASOj/bM3HdtH9TwDPBoVHLPza1/F3V7Az6G9nMzup+kYnlID8xtO17/3gXmK0+vrt7Y15xPOPIxN0P1r5/fHje7hKEpEASYL+n4Fncc0ZvY+Tdjr8WEzA5BRPQ+ziZpxV3LjKbDtd1cViY87lkFi+aumMTTY00qnVGr3iEZpBzRPCbw3yX3fUqXherciezXoVN85TWywWs4zJ6mJpSYvJjurG6P4LoG206n6xsx62qzjVdZnVPrcPk+2omro5CJW6fAoAgZHbzr44PR1qZaKYIKUkZmY2DFkvPiqmdBb2tWGA2gAinZ5hE6dOzzbJX3R8y5Y6qIjt8yTXSX4qTT2vsjjQa9BYir4/2euOTqvhZxxr17B192qepRhdDn4NvCWnL7ayEVoO4EFlO4vbpGLZBbeA33KUmgPfP1w+8U6qMnLUo/vQlAqnUq5juLto9VapU/M+N7bz7tmE0qAiRGO0G/xJMYdwzT3LP1x2wcWokWbLLvz9WRAbQvietzer6eJiySCZj522tYijHcJ0p8BpO0DcHhbqezdtXVSFGzej4Cvr8JjmUxzs5RqRADyVHO1fBUv7NHmfp8+j1M1EvOJz79xblclisRg1fFFIrz3xhef7QniTgiRruokb3kEzyi4mjTR4Gu1PftvIcuZ73dHKuOwHXj5psP20oOPbzIbvHeH48a3kSr28vcHY8nZiPHAC0ViPBZ71k8b/tZnmQaV3Bwd8Hb2ZXVmymuNbs8nrR3vd9OUMQgBJAn8PKpXzKO1wmLZF+2QfyV8sJq2UEXnSyVjx13S+521K/qAmnPqcNbYWIA6wqLLoeHtmoBo2ebCf5F942akgjVUbgWuSNymMo4Yn/IvZutqxVn/19I6W57l806R22CzWqYylWZxZQ+xHUfAu4E+WR4Hk3cxrwV8MasvTEXq+EJWVEwxmDc+v+N6KGhu1sqMLFqOKdwOwXywuaq1Ztpf3cotb7wB+Ttora/4Urou/vUzfjFq+EJU8n8NkMJqMBrlwe9DyRGZcLvybcWbKYtFKs5uLSUq//ZOBnyM92OBUuO60oFmvsiwDjzoVIfxGZ1AUVY0uOjVP+J3RuyrQg3D2L3LoD/aQ5rREfh34jaUAXnjr5ZHrDykbxoopPRF5qmPNIElBRucMzA2z0ZpBYZhmS4eRCts35nzQS4W0vXHYLzjKbf36Uzp/z/Wdma/88Wdpa0/u2ud4vmEcQ4bpaYdjoxTDDaVQOhTJkEE9W45pFONGHY94rpCKyrir5XWHxD2J05m43eA/URkJ+7RtNg+E3s8kVVbYeyYXrVrF97LsklfrXIxmOaN7g46Hy5IhmbYZ1cR1RzY1Mr6jXWpnUsulfmoFaaA9DyOexrGBDHNHe8/tWAQTQeY7ZjGMFcv6c9ysa9qPKT2Qct5VCHee7PhhlPbx7ZD8y/7yuMt5VxUdRLC3N9ypeMKr9XbHTLOLmicqvcnixl0rlrbj7za7LSFsgXZHi0HLyyUUiwMevMPnG7R8Ibxaa7Alfz/qNXzPbw0WN/Ja8TIv/J2qJz2lbDv4k4bIFdy3JLje4Qx0AFOlFAApZSBl3p5OjTbGAEEYlnFDr3lXyXY2U9DXHLRPd6sdMG9hiD6PMiI6AI5PeuN6N/BhzyI2thOTiCxrKjvuoCWn3Q1FP84dAn0eGdqm+T+MbEPUFvCHfZM/wP6JCrrlnwR8106qV2dFpePCsPOVREQESas97DfD6i45e+f9mGW9WSp2NdM2m6+KAiPkmH+nXdXc0rrxg8AHgDFrx3REBEhjGHYwgpErr9i/Ewgk6QasxIcx15d07peRRhE5PZ4pW0sq8HaGkUaQCy8vI7ONg/mHg7917zIza8uPwisFH3LjBkREJInoEDXUs4jzkfl5rIF6/XTrVw1Ka8GaSen03S/62H6c/U8O/sYHhEnZ+Jx9oNy+cEtBIJL4ORdjrPfs073sssx34V/GmhGE+0zVTFWsKa/sMe/Gu6Llnxv8taUAG86YERkr1CVuLaQzF/zT7ozxvommcaS4nh/nmcbKMAVhsOsVpkYrw0Gw0sMz7OudCa5fFvwCDZXNsfOSMBH23AuSRNZYEP+SOuo8MnJ1jPlcGQNQEMqgVOR/GGUYMlg70iOK0dwZ6f+a4K9/h3Ql9IrNtrsCATFl5pt+OhU1L3ilYaQ5WO25GGujDACSkiRJ18DAzMawYZCU4ZqXfdk31+V1Dwj83BeVdg6emZnIGJaAhFnujNRYwP4LP2K2vVgdnccaK7oHwFwZw7wxrk6SSAanm8qLrk1wHSL4GzYQUpaAaWq0mXndXjimRSnpR63EiqLXVNSFObZGy70tiGS10G4gbF5rZW4C+Nt1FGAlMY2zISW7fKNdix+hoaZxbH5QyD5Xai/oby74G2uRJriZAWZ73ozdB9a1JWlntt9hW0xjpXMHzuyrM2Nt5/F/M+Cvw7Yk4LM2EYyUHZoBCYJ0qgq7oJ07L3PffsepVopXyh6/QfA3XVqkK2EDjSXBGkmASNo4o8BgjLXSkMGuA4fdu2ijtaGgHuy9U34L4BcshjXcMEgD76UX5fwo958SMFbGGJaSAinL2yTeGM0s5e5I7HfwCxIg1k7wMgeydKJctdA6mC4n5ZwrZHcZw6AgCOQ7Zg5/B79oW2RLgXWaxezASUIWCpKU8p2B/x38vUw3lttChpK1oxSyVkLiR6TKfwf/V7z+H+g7zSW6RRN5AAAAAElFTkSuQmCC\" alt=\"figure\" width=\"380\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A satellite A moves around Earth at an altitude of 7600 km above the surface. The radius of Earth is 6400 km. How far is the satellite from the city P (the point where the line of sight from A is tangent to Earth)?",
                  "answer": "\\(OA=6400+7600=14000;\\ \\ AP=\\sqrt{14000^{2}-6400^{2}}\\approx12452\\text{ km}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"250\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Two cylindrical rods, each of diameter 12 cm, are bound together with a strap (tight around both, rods touching). How long is the strap?",
                  "answer": "\\(\\text{Two straight parts of }12\\text{ cm each}+\\text{two semicircular arcs}=2(12)+2\\pi(6)\\approx61.7\\text{ cm}\\)",
                  "diagram": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAB1CAAAAADR4IMiAAAN2ElEQVR42u1dLWwjT5b/7f8GmKz0wAGDPemxDizWOelAgZU6x5o5f9bMGWaWCQvLGJ3ZjFmzi1mT08WsYMwKjsFKDy5Z6ZGFpxxoO7Ynjrv6yzO7mgL5aFe7qn7vs15VvfrDC36V0PLbLwh+gdVL+fAP2es1FACgAAjxPzFYa2yGuhktdPcbAFRB5UPSwzf3X1PQ5n8iIjZ0Bsj+0KGCX4vodgB6MMQDTA6G/T0G9N1nm0JvXsIGrM1PAhtjon8EsFZeRVVVQCU7HPAEUckve0/pFZpdHVWifWx2fzAIKiJaPmIGERHIFcisStm2gpiZxz+3GC69eFGAmJkIEK9sIFoCBADEREQAAUKAgl/B2NYoWYo2/xMirLHPJwuvqiDDTMRbiWOHtPx7pepFxINya0Y/K2ctvfcCMBMZE68jAMt7P3nASgAVUYiAmI1to1PWhfNKxnyHwzrTPN7nb+dVQdaOf0awloUTEJNhs9fp312e7PSY916V2NjmBJ86r2ys/V4lrSaya6nskPMigE3HP5sYLgsnxOYI0+x0URQlWDiv3hdFQ4IvCgdKj2L9xhYkCebee+ddlvxMnLXIPYjtEfH6T19893Al3okSp7dNoFJj06NCvMo0T44R0Qtge4DrpVl5vB4OL28ej352PXx6+/D589VwMLz8XK+Z55vh4OLT8zuffrs81tLLy8vTp8vhYPjppePSDKzn6+Hg8t2+XB8fQgnX1dca7Xy9HAxvnt/9+F2wXl6eboaD4eXjTwDW49VgeP1+R66Gj++N4HI4GN4Et/NpOLg6Od73wXp5/nQ5HAw//2iwvt1cnBan68Hj+9J7MRhcPYWy7/Dm28kqV8MTX/V4c9GxKNYH6+lqeHFCNF5eXq4HJ0Tt89VwcPE5sJ2qelcXT1VSHEiZoFLbdZjmatp4MbfGFTLzkyofdTGTAHumJz8do/BOdfSjrOHNcHD9XFVncFqJf74cDK4qvuTzxfC6ujcnxfDVmn79MWIYoEYCwHp5qkTr60WQHbgaVArZzcXg4vFHgPXtOsi+fKoC6+XpangSrceLQZDNvBpU4vDcIVq1wLoOY+lqsF6ery8G73tBgXx10u7udedicNGNlq8Rg1//7sysowlqfJ+Sn82PfzifafaluznKg2W5X555weK+4PvA6ZZW1oiylPxseXzSqdlDlzO6L5b9bHVWsO4KnoROTam6SjRJSfL1EQaeefvQXTslWuRm5wRrXlAW7LBoQJ0oM0eHMPMm6zpakDLc9HxgLXPNbruldzwxWkzfhmQorRFb0aBaScqaLzsBK0Cc1zOxD13TO8lY83lzotSZN6Qss07ACoiO554n3Q9hZCH5IalmzmbooWRM7u48YrjMkfWxiJlZ+AOCLzxlNRb/KLhmlBKK1VnAyrWfBZM4Y/jFPmNpzXUNDa04ttRaEIPAunNmgl7KKCXJ90IanjP0VDKGm/cP1rKoK4TB9MaDhf/4ugCRUx+LMlsuJj3m13UMVn0hDAcLKavbGvVc+Ba9lbGFL/oGa+4o7W8IIwvZDGFZuyGqoeJL17RvsAqtuXuAatXeDcEL1wZL69DFwC/7BWvhydb8UqozhMRCSsXr0POeIUvq+gXLqRn3OoSUUZRU4friXocsMAzXzNdaz4PAWjrYXrFCYkqbXqhJ+gUrNuR9oz7m+TIELCemZ7BgCQ5Y+r6pAlhCI7DmBSgELA/T925Nw/BreGXuG6xRQzmUctNcFVhN6F3PRgGxJfVQ5aRvsMAkTVgrvb8N0VleDfcNFizDLQSmd6xgmslhPAqyhmeQwlLFF57OBFbz2MNvlVJYfwha0y0FGOKlgcqqzcMxQaUvsFSpidbV2mBBwOc4KcEQ7QusRiaKqPYQCDiHygKY0BtnSbMZSF20Ym7wUpOGYPoFC/1rEsBQA348bGlRxqoWHz/OT9uSvsRwtXcYopbOehNkW6/6AGuv/J7lADC9d8X93Wl8G5vDDxUqq8kQ9kk31QcAmDrhU2u0TM3E8A1NXGqkKNL4pNHqh7NEmymS17eWs2INYFqQ1cmyW/VzSJiMASCaPIxu7THvYAlgtQSoBVgfqrrSCK3X7iSMCABPRlhmeXISqWZoraMtbyoAJCgPkW30GDmXjdcTpFrcp+SdnbSR9g+VXNLORLEAwKhUrdvxFSp2jLk3cJoa58xDRKB2gT/dMYzfztCmMrHeQ4Q4oXs3G3/0vl5kso4YEtAydknY6vqVbNBa3aul2QIu92wkd8YU06YKi444d0u5Lzu9LDhKZl/ARAzLFMGKb2EMq8WwQYn2X3wluNvGQXOZxKwEhkkS703Chaxba/fo9Rvcdt1OpexMRFuuJShRX36WtlW7O6ymMil7vPYUI/rvBERU6pcIGlFLxto1unhd06btSgi/dqSd1e0lVQEd89h2G4m2XtirViddaUP3Z6epNn98zHW92RfEJNP1cgqIrssKvsXEEL3lddDvcRO7xSpiKYDVxv0uK6rXZiK/I8tSdQXgLvezyb/nZUsZZtk9sBQotDzPL743nQXoOmolhoDEwGqmRlRKZZL6XEkQi3hA1MdQ8b6Z+7N7R0glBtQwvc7Jb8mruUUy4RjJDMBDKq6FHH6omnu1JLioACgKUlXKAAAjzQu2McgQyh9WVBtZE6LX/o0ZCYDJgfke7/1KACCOpYXO+hDamYbz28xaACkzFNs8FWOjFAO3aQR8WUfAFyyayuHeFHlriStCAw3i5P1y1u6l0jLFh3O1GLuBlaMb5dKkpai+h6ktXMdKp7QlZ9Uo0o4swa00ZqwqsNqEyuqUlTQEqy5aK20Rka3kLGnEWbXprYAuz0AV12xRIQQsJsjqHJzlFZBzMLEo9+XBR60WQ+qABSL1Z+BhabMOWuHB20ZDqF2WAmOabgeqqRubS2EVWIZxDrC8cGpZXO+c5YRNb2DF3GxnodYWjrHlJsZE64q7TXoDC0Rn0LtrD4OY4dc9s9aq3e6TKrAMtdzhGyYcYIBfty3vwdgtZ3mhPsGy3HKHb5jjYEaAMW+3x0bdyqHTVnuCqsCKLEnvrOWRAkgM/LzXdhZ+E/joCayG9rAWvRfCthR5LXptqZB2+QArwUq4Pr1rGvRiIxy2Z9ZalBzcI1iw3IDetTxSvzmFEqW1N/VTTaKMewZrbOGn/QoHb4RjbOqe+6ZajEUT9AwWDKtb98hYbqd1M9ait6baaqwgsMam7tGzWsKRy+6A3sjA5z3x8Lxofcw7ZCnMkha9zXHnbt+cZ4x80c8UegYbnwOs+vQOn+kUup/GIcm41nHT8AB2IbYtYwWBFWWMYt6PcOTuMD/Ibb1MKMECv8gpjc4BFkb3Vmc1Jj3he6AWBX93/DozVNx1zsCLGSbtDwKGLd+PUpbZqg9F8ub4dZwSimnn7UjawenrwL0O1lAttRUohvdHkvSMU9IaSj6opZnvJNdCIFhRarR76bjz5kgOhAcLmXUa6bgreNLFgeLQ1JsjVV+Ep/EPovc8p/SYm5ip8zN0d57uLudu0kUE5ykdi8qMgl3ggM03ixnsUUUST+D8fWdo3eXUVeKkWsmnA9MyPl1cPAdUej9j5LdPF4PL54CWHgeV2Uw/DzvLsBy+mS3OLHeoS1Yzse9mQYysIX/fySxxPlPbVRqSGjv/kmCTqAEHM2buVI6eJDXdpOlb5dogAUJ7sGCZWicK2k0JcTIGwAy4EAeCqmY5sKMfAVZkmAJDKJUnAIoKgsfAkcWe2lZ3VXTIWPU24BrDbRMFbcrUoyK4xIYO85AdLYJqxkp+DFiRMUFZGTVAk1Qt4FnDIaxVFcNCuRbyA8CCIYJUh1AqAye5oMpExQyEaEg6GWqQGslVuwYrSplQbaW0Yil5WqA6cauxpnqSeHLb7iL3lHaZvexf7mtV/9MfBX+Vv/3bv56s9ZcnSk/UmOZ/tZ8qNcmf/vx/qvr89/84Vel/vP3zuzL49Zmy/+pyjln3WoYEhdNc0lFja7jMHdJJSIR3DHKSy+l8g/SuHSyU024T0da+wyIhLnwhcoq9T7mk81yCp2pjhpfcZw3CdlPnYdOu76NrMEX6ejU8ee/Oy+Pw6v2LoCqu0vlukvj18mRbN4NPxy8GCryCpentKGsfSoexKZwvvLdJTeFYFk44q5PiNoq48OL8e5ey0fHZgVNKe0jiuQPL58H5LuJ47rzmhX1vJqHHoSqUa48hSZbeiXO5PUabt2CtnPPK3UvgIVijOoeUx+NF4TUvivQowm/HsHbOKzUaQ5JY573kheEjXv9BU0snruVdioEKvh7JR6O581J4MtW7LdbeOwGnacNVzjheixfxjnLLB/l9aHd4Z+FFRIlMavvKSdniMsjxeO68qqeZNSeSqq2881Ayts26XRQlS/Eq3oOImZiSjbz7Vbz2IuVFw2St7TFXUrtrRtfeexGAiA3vAFtO+H+3n4tXJZi6g1jrzkMvJU296PboGIE29/16MthcyEzM1vaa6LT11cgr58s7i4kMg4kIVMwoMyKqItthGGJoGRfUvTu2dXtJsu7ZBtI9G6E7tXTikB0xM/eeQ66Le6SX4r0owNDSIVUBHwyNtpiUg6aGBzFpewJyd+G0EjExzpBbEZ3dUL7yKiA4/W5mSwDo8BkdQqhvrtje4VIeeKT9J1Te9k6b0AYRRThb6fI6d2BV3hWuWiZtOARkkySi/LFhD9rTSbR/b/kZIfhRYO2UM/2Uo/0JwfqnLb/9guAXWL2U/wd5o1TMOjP5awAAAABJRU5ErkJggg==\" alt=\"figure\" width=\"300\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A circular mirror of radius 20 cm hangs by a wire from a hook. The wire is 30 cm long and is a tangent to the mirror in two places. How far above the top of the mirror is the hook?",
                  "answer": "\\(\\text{Each tangent segment}=15;\\ \\ OH=\\sqrt{20^{2}+15^{2}}=25;\\ \\ \\text{height above the top}=25-20=5\\text{ cm}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"270\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Draw an arc and divide it into two equal parts.",
                  "answer": "Mark the end points A and B of the arc and join the chord AB. Draw the perpendicular bisector of the chord AB; it meets the arc at M. Then arc AM = arc MB, so M divides the arc into two equal parts."
                }
              ]
            },
            {
              "stem": "Draw an arc of any length. Draw a tangent without using the centre, through the point A when A is:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "in the middle of the arc.",
                  "answer": "Take points B and C on the arc at equal distances on either side of A (use equal chords AB = AC). Draw a line through A parallel to the chord BC; it is the tangent at A (the tangent at the mid-point of an arc is parallel to its chord)."
                },
                {
                  "label": "(ii)",
                  "text": "at the right end of the arc.",
                  "answer": "Let A be the right end. Mark two points B and C on the arc so that A, B, C are in order, and join AB. At A construct an angle equal to the angle in the alternate segment (\\(\\angle ACB\\)) on the opposite side of AB: the arm of this angle is the tangent at A (alternate segment theorem)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Draw an arc ABC. Take a point X outside the arc and draw a tangent from X to the arc without using the centre of the arc.",
                  "answer": "Draw a secant from X cutting the arc at P and Q (with \\(XP<XQ\\)). On a separate straight line mark U, V, W in order with \\(UV=XP\\) and \\(VW=XQ\\); draw a semicircle on UW and erect the perpendicular at V meeting it at S, so that \\(VS=\\sqrt{XP\\cdot XQ}\\). With centre X and radius VS draw an arc cutting the given arc at T. Join XT: it is the required tangent, because for a tangent \\(XT^{2}=XP\\cdot XQ\\) (tangent–secant theorem)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Construct a circle of radius 4 cm. Mark a point P on the circumference and draw a tangent passing through P.",
                  "answer": "Draw the circle with centre O and radius 4 cm and mark P on it. Join OP. At P construct the perpendicular to OP (copy a \\(90^\\circ\\) angle at P). This perpendicular line touches the circle only at P: it is the required tangent."
                }
              ]
            }
          ]
        }
      ],
      "long": []
    },
    {
      "id": 12,
      "name": "Basic Statistics",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 12.1",
          "questions": [
            {
              "stem": "Construct a cumulative frequency column for the following table (classes 1–10, 11–20, 21–30, 31–40, 41–50, 51–60; frequencies 3, 4, 7, 9, 5, 2) and answer.",
              "parts": [
                {
                  "label": null,
                  "text": "Cumulative frequencies",
                  "answer": "\\(3,\\ 7,\\ 14,\\ 23,\\ 28,\\ 30\\)"
                },
                {
                  "label": "(i)",
                  "text": "What is the total number of items in the data?",
                  "answer": "\\(30\\)"
                },
                {
                  "label": "(ii)",
                  "text": "In which class interval does the 8th item lie?",
                  "answer": "\\(21\\text{–}30\\ \\ (\\text{cumulative frequency passes from }7\\text{ to }14)\\)"
                },
                {
                  "label": "(iii)",
                  "text": "What is the number of items having worth less than 21?",
                  "answer": "\\(7\\)"
                },
                {
                  "label": "(iv)",
                  "text": "Which group contains the highest number of items?",
                  "answer": "\\(31\\text{–}40\\ \\ (f=9)\\)"
                },
                {
                  "label": "(v)",
                  "text": "What is the lower boundary of the last class?",
                  "answer": "\\(50.5\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The mass gained by a newborn baby is: month 1: 4 kg, 2: 3 kg, 3: 2 kg, 4: 3 kg, 5: 2 kg, 6: 1 kg. Draw a cumulative frequency polygon of the data. Also find from the graph how much the baby had gained by the age of four and a half months.",
                  "answer": "\\(\\text{Cumulative gain: }4,\\ 7,\\ 9,\\ 12,\\ 14,\\ 15.\\) Plot the points (1, 4), (2, 7), (3, 9), (4, 12), (5, 14), (6, 15) and join them with straight lines. At 4.5 months the polygon lies midway between 12 and 14, i.e. about \\(13\\) kg (cumulative gain)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The ages of refugees in a camp were recorded: 20–24 (5), 25–29 (16), 30–34 (12), 35–39 (10), 40–44 (8), 45–49 (4). Draw an ogive (cumulative frequency curve) and find (a) the first quartile, (b) the 7th decile, (c) the 60th percentile.",
                  "answer": "\\(N=55;\\ \\text{cumulative frequencies }5,\\ 21,\\ 33,\\ 43,\\ 51,\\ 55\\text{ plotted against the upper boundaries }24.5,\\ 29.5,\\dots\\)\\(\\ \\ (a)\\ Q_1:\\ \\text{13.75th item}\\approx27.23;\\ \\ (b)\\ D_7:\\ \\text{38.5th item}\\approx37.25;\\ \\ (c)\\ P_{60}:\\ \\text{33rd item}\\approx34.5\\)"
                }
              ]
            },
            {
              "stem": "Scores of a Hifz-e-Quran test: 41–50 (3), 51–60 (17), 61–70 (20), 71–80 (30), 81–90 (18), 91–100 (2). Draw a cumulative frequency table and ogive and tell:",
              "parts": [
                {
                  "label": "a)",
                  "text": "How many boys appeared in the test?",
                  "answer": "\\(3+17+20+30+18+2=90\\)"
                },
                {
                  "label": "b)",
                  "text": "What is the median score?",
                  "answer": "\\(\\dfrac N2=45\\Rightarrow\\text{median class }71\\text{–}80:\\ 70.5+\\dfrac{45-40}{30}(10)\\approx72.2\\)"
                },
                {
                  "label": "c)",
                  "text": "How many boys scored under the median?",
                  "answer": "\\(45\\)"
                },
                {
                  "label": "d)",
                  "text": "How many boys fell in the first decile?",
                  "answer": "\\(\\dfrac{90}{10}=9\\)"
                },
                {
                  "label": "e)",
                  "text": "How many boys fell in the 30th percentile?",
                  "answer": "\\(\\dfrac{30}{100}\\times90=27\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The masses (to the nearest kg) of 50 cubs are: 60–64 (2), 65–69 (6), 70–74 (12), 75–79 (14), 80–84 (10), 85–89 (6). Construct a cumulative frequency table and a cumulative frequency polygon and estimate the number of cubs above 77 kg.",
                  "answer": "\\(\\text{Cumulative frequencies: }2,\\ 8,\\ 20,\\ 34,\\ 44,\\ 50\\ (\\text{boundaries }64.5,\\ 69.5,\\ 74.5,\\ 79.5,\\dots)\\)\\(\\ \\ \\text{At }77\\text{ kg: }20+\\dfrac{77-74.5}{5}(14)=27\\Rightarrow\\text{cubs above }77\\text{ kg}\\approx50-27=23\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Mr. Rashid's employees' salaries have \\(Q_1=\\) Rs. 50,000, \\(Q_2=\\) Rs. 70,000, \\(Q_3=\\) Rs. 90,000, maximum Rs. 150,000 and minimum Rs. 25,000. Find the range and the inter-quartile range.",
                  "answer": "\\(\\text{Range}=150000-25000=125000;\\ \\ \\text{IQR}=Q_3-Q_1=90000-50000=40000\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Khadeeja scored 85 on a test and the teacher reported that her score was in the 75th percentile. What does this indicate about her status in the class?",
                  "answer": "It means she scored higher than about 75% of the students (only about 25% scored higher than 85): she is in the top quarter of her class."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Uzair's house prices have \\(Q_1=\\) Rs. 20,000,000, \\(Q_2=\\) Rs. 25,000,000, \\(Q_3=\\) Rs. 30,000,000 and a maximum of Rs. 35,000,000. What is the possible price of the house if it is in the third quartile? Also find the IQR.",
                  "answer": "A house in the third quartile (the quarter between \\(Q_2\\) and \\(Q_3\\)) costs between Rs. 25,000,000 and Rs. 30,000,000. \\(\\text{IQR}=30000000-20000000=10000000\\)"
                }
              ]
            },
            {
              "stem": "Study the cumulative curve of the heights of 100 buildings in a megacity (figure) carefully and find (readings from the curve are approximate):",
              "parts": [
                {
                  "label": "a)",
                  "text": "the number of buildings with heights less than 50 m.",
                  "answer": "\\(\\text{At }50\\text{ m the curve reads}\\approx78\\text{ buildings}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"330\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "b)",
                  "text": "the percentage of buildings higher than 40 m.",
                  "answer": "\\(\\text{At }40\\text{ m the curve reads}\\approx43\\Rightarrow\\text{higher than }40\\text{ m}:\\ 100-43=57\\text{ buildings}\\Rightarrow57\\%\\)"
                },
                {
                  "label": "c)",
                  "text": "the ratio of the number of buildings less than 50 m to those more than 50 m.",
                  "answer": "\\(78:22\\approx39:11\\ (\\text{about }3.5:1)\\)"
                },
                {
                  "label": "d)",
                  "text": "the number of buildings falling in the first quartile.",
                  "answer": "\\(\\dfrac{100}{4}=25\\)"
                },
                {
                  "label": "e)",
                  "text": "the maximum height of buildings falling under the 8th decile.",
                  "answer": "\\(\\text{The 80th item}\\ (y=80)\\text{ corresponds to }x\\approx51\\text{ m}\\)"
                },
                {
                  "label": "f)",
                  "text": "the maximum height of buildings not falling under the 30th percentile.",
                  "answer": "\\(P_{30}:\\ y=30\\Rightarrow x\\approx38\\text{ m (buildings of height above this are not in the 30th percentile)}\\)"
                }
              ]
            },
            {
              "stem": "The cumulative frequency curve shows the number of faulty items in a shipment of 100 items produced by Khani's Collection (figure). Estimate (readings are approximate):",
              "parts": [
                {
                  "label": "i.",
                  "text": "the median",
                  "answer": "\\(\\text{At }y=50:\\ x\\approx34\\text{ faulty items}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"300\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "ii.",
                  "text": "the lower quartile",
                  "answer": "\\(Q_1:\\ y=25\\Rightarrow x\\approx29\\)"
                },
                {
                  "label": "iii.",
                  "text": "the upper quartile",
                  "answer": "\\(Q_3:\\ y=75\\Rightarrow x\\approx43\\)"
                },
                {
                  "label": "iv.",
                  "text": "the IQR",
                  "answer": "\\(Q_3-Q_1\\approx43-29=14\\)"
                },
                {
                  "label": "v.",
                  "text": "the 7th decile",
                  "answer": "\\(D_7:\\ y=70\\Rightarrow x\\approx40\\)"
                },
                {
                  "label": "vi.",
                  "text": "the 30th percentile",
                  "answer": "\\(P_{30}:\\ y=30\\Rightarrow x\\approx30\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 12.2",
          "questions": [
            {
              "stem": "A mechanical engineer analyses the mass of a car and its fuel efficiency. Mass (kg): min 1100, Q1 1200, median 1500, Q3 1700, max 2000. Fuel efficiency (km/l): 24, 20, 14, 12, 10. Show the data by box-and-whisker plots and answer:",
              "parts": [
                {
                  "label": "a.",
                  "text": "Find the IQR.",
                  "answer": "\\(\\text{Mass: }1700-1200=500\\text{ kg};\\ \\ \\text{fuel efficiency: }|12-20|=8\\text{ km/l}\\)"
                },
                {
                  "label": "b.",
                  "text": "What is the type of correlation?",
                  "answer": "Negative correlation: as the mass increases, the fuel efficiency decreases."
                },
                {
                  "label": "c.",
                  "text": "What conclusion can be drawn?",
                  "answer": "Heavier cars travel fewer kilometres per litre, i.e. they are less fuel efficient."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Maryam investigates the relationship between rainfall (inches: 2, 4, 6, 8) and the number of flowers blooming in her garden (10, 22, 55, 70). Draw the scatter diagram, draw a line of best fit and comment on the type of correlation.",
                  "answer": "Plot the points (2, 10), (4, 22), (6, 55), (8, 70). They rise from lower left to upper right, so there is a strong positive correlation. A line of best fit (least squares) is \\(y\\approx10.65x-14\\), i.e. about 10.7 more flowers per extra inch of rain."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Draw the scatter diagram for the AQI (20, 40, 60, 80, 100, 120, 10, 30, 50, 70) against the number of sick days (5, 18, 25, 40, 60, 80, 3, 15, 20, 27). Find the correlation and say what it suggests.",
                  "answer": "The points rise steeply from left to right: a strong positive correlation (Pearson \\(r\\approx0.97\\)). Higher pollution levels are associated with more sick days."
                }
              ]
            },
            {
              "stem": "A teacher draws a box-and-whisker plot of test scores with median 75, \\(Q_1=60\\) and \\(Q_3=85\\). Find:",
              "parts": [
                {
                  "label": "a.",
                  "text": "What percentage of students scored above 85?",
                  "answer": "25% (the top quarter lies above \\(Q_3\\))."
                },
                {
                  "label": "b.",
                  "text": "The IQR.",
                  "answer": "\\(85-60=25\\)"
                }
              ]
            },
            {
              "stem": "The box-and-whisker plot (figure) shows the hourly rates for full-time (F) and part-time (P) employees (scale 0 to 1400). Readings from the figure are approximate:",
              "parts": [
                {
                  "label": "a)",
                  "text": "What is the amount of median wages paid to full-time employees?",
                  "answer": "\\(\\text{The box for F extends from about }450\\text{ to }760\\text{ and the median is not marked separately; it is read as about }600\\text{ (the middle of the box).}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"420\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "b)",
                  "text": "What are the minimum and maximum wages paid to part-time employees?",
                  "answer": "\\(\\text{Minimum}\\approx170,\\ \\ \\text{maximum}\\approx915\\)"
                },
                {
                  "label": "c)",
                  "text": "What is the IQR for the dataset of full-time employees?",
                  "answer": "\\(Q_3-Q_1\\approx760-450\\approx310\\)"
                },
                {
                  "label": "d)",
                  "text": "What is the IQR for the dataset of part-time employees?",
                  "answer": "\\(Q_1\\approx360,\\ Q_3\\approx710\\Rightarrow\\text{IQR}\\approx350\\)"
                },
                {
                  "label": "e)",
                  "text": "What type of correlation is observed in both datasets?",
                  "answer": "A box-and-whisker plot shows the spread of a single variable, so it does not show a correlation. The plots only compare the spread: the part-time wages have the larger IQR and the full-time wages reach higher values."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The scatter diagram shows the relation between the time spent on math practice (hours) and the marks obtained in a math test. (a) Find the type of correlation. (b) Draw the line of best fit.",
                  "answer": "The points rise from the lower left to the upper right: the correlation is positive (and fairly strong). To draw the line of best fit, draw a straight line through the middle of the points (with about equal numbers of points above and below it) from about (1, 25) to about (7.5, 100). It shows that more practice is associated with higher marks.",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"300\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 12.3",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "What is dispersion? Write the names and formulae of three measures of dispersion.",
                  "answer": "Dispersion is the extent to which the values of a data set are spread out (scattered) about a central value. Three measures: Range \\(=\\) largest value \\(-\\) smallest value; Variance \\(\\sigma^{2}=\\dfrac{\\sum f(x-\\bar x)^{2}}{\\sum f}\\); Standard deviation \\(\\sigma=\\sqrt{\\text{variance}}\\) (also the coefficient of variation \\(CV=\\dfrac{\\sigma}{\\bar x}\\times100\\))."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Energy consumption (units) for Rabee's home: 101–200 (2 months), 201–300 (1), 301–400 (3), 401–500 (1), 501–600 (3), 601–700 (2). Find the range and variance.",
                  "answer": "\\(\\text{Range}=700.5-100.5=600;\\ \\ \\bar x=417.17;\\ \\ \\sigma^{2}=\\dfrac{\\sum f(x-\\bar x)^{2}}{\\sum f}\\approx28888.9\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Water supply (gallons) and hours: 501–700 (4 h), 701–900 (5 h), 901–1100 (2 h). Find (i) mean, (ii) variance, (iii) SD, (iv) CV of the supply.",
                  "answer": "\\(\\bar x=764.14,\\ \\sigma^{2}\\approx20495.87,\\ \\sigma\\approx143.16,\\ CV\\approx18.74\\%\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Salaries by department: Elementary 40,000–60,000 (10 employees), Secondary 60,000–80,000 (12), Higher secondary 80,000–100,000 (8). Find the range, variance, standard deviation and CV.",
                  "answer": "\\(\\text{Range}=100000-40000=60000;\\ \\ \\bar x=68666.67,\\ \\sigma^{2}\\approx238222222.22,\\ \\sigma\\approx15434.45,\\ CV\\approx22.48\\%\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Scores by section: 10 Mauve 70–80 (15 students), 10 Teal 60–70 (12), 10 Hazel 50–60 (10). Find the variance and standard deviation of the grades.",
                  "answer": "\\(\\bar x=66.35,\\ \\sigma^{2}\\approx65.74,\\ \\sigma\\approx8.11\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Purchases by age group: Kids 0–500 (20 customers), Juniors 500–1000 (30), Seniors 1000–2000 (25). Find the range, variance and standard deviation.",
                  "answer": "\\(\\text{Range}=2000-0=2000;\\ \\ \\bar x=866.67,\\ \\sigma^{2}\\approx240555.56,\\ \\sigma\\approx490.46\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Blood pressure (classes 100–110, …, 150–160, midpoints 105, …, 155). Patients in OT: 3, 8, 6, 7, 4, 2. Patients in OPD: 9, 1, 5, 7, 6, 2. Find the range, mean, variance, SD and CV for both datasets and comment.",
                  "answer": "\\(\\text{Range}=160-100=60\\text{ for both.}\\ \\ \\text{OT: }\\bar x=127.33,\\ \\sigma^{2}=197.89,\\ \\sigma=14.07,\\ CV=11.05\\%;\\ \\ \\text{OPD: }\\bar x=127,\\ \\sigma^{2}=282.67,\\ \\sigma=16.81,\\ CV=13.24\\%\\) OPD has the larger CV, so its blood-pressure readings are less consistent (more variable); OT readings are more consistent."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Temperature histories (°F) for a week. Jhelum: 96–100 (2 days), 101–105 (3), 106–110 (1). Indiana: 51–60 (3), 61–70 (1), 71–80 (2). Find the mean and variance of both datasets and comment on the predictions for next week.",
                  "answer": "\\(\\text{Jhelum: }\\bar x=102.17,\\ \\sigma^{2}=11.81;\\ \\ \\text{Indiana: }\\bar x=63.83,\\ \\sigma^{2}=80.56.\\) Jhelum has a small variance, so next week's temperatures are likely to stay close to its mean (about 102°F). Indiana has a much larger variance, so its temperature is far less predictable."
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 12.4",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Musaab picks a card at random from cards numbered 1, 2, 3, replaces it, reshuffles and picks again. Draw the possibility diagram and find the probability that the product of the two numbers is even.",
                  "answer": "\\(\\text{Possibility diagram (9 outcomes): products }1,2,3;\\ 2,4,6;\\ 3,6,9.\\ \\ \\text{Even products: }2,2,4,6,6\\Rightarrow P=\\dfrac59\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Asha flips a coin three times. Draw a tree diagram to find the probability of getting three tails.",
                  "answer": "\\(\\text{The tree has }2^{3}=8\\text{ equally likely branches; only TTT is favourable: }P=\\dfrac12\\cdot\\dfrac12\\cdot\\dfrac12=\\dfrac18\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A survey of 100 students shows that 40 like pizza and 45 like burgers. Draw a Venn diagram and find the probability that a student likes pizza or burgers, assuming none like both.",
                  "answer": "\\(P(\\text{pizza or burger})=\\dfrac{40}{100}+\\dfrac{45}{100}=0.85\\) (two disjoint circles of 40 and 45 inside the universal set of 100)."
                }
              ]
            },
            {
              "stem": "Find the probability of either event, if the events are independent.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "A patient tests positive with Test A (0.3) or Test B (0.4).",
                  "answer": "\\(0.3+0.4-0.3(0.4)=0.58\\)"
                },
                {
                  "label": "(ii)",
                  "text": "Getting Job A (0.5) or Job B (0.4).",
                  "answer": "\\(0.5+0.4-0.5(0.4)=0.7\\)"
                },
                {
                  "label": "(iii)",
                  "text": "Taking the Volvo bus (\\(\\tfrac12\\)) or the Bedford bus (\\(\\tfrac13\\)).",
                  "answer": "\\(\\dfrac12+\\dfrac13-\\dfrac12\\cdot\\dfrac13=\\dfrac23\\)"
                },
                {
                  "label": "(iv)",
                  "text": "Team Sudaisee (\\(\\tfrac{12}{27}\\)) or Team Huzaifee (\\(\\tfrac{13}{27}\\)) winning.",
                  "answer": "\\(\\dfrac{12}{27}+\\dfrac{13}{27}-\\dfrac{12}{27}\\cdot\\dfrac{13}{27}=\\dfrac{519}{729}=\\dfrac{173}{243}\\approx0.71\\)"
                },
                {
                  "label": "(v)",
                  "text": "A product with colour damage (0.1) or bad stitching (0.2).",
                  "answer": "\\(0.1+0.2-0.1(0.2)=0.28\\)"
                }
              ]
            },
            {
              "stem": "Find the probability of both events, if the events are independent.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "Fakeha tests positive with Test A (0.9) and Test B (0.7).",
                  "answer": "\\(0.9\\times0.7=0.63\\)"
                },
                {
                  "label": "(ii)",
                  "text": "A cake passes Quality Test A (0.9) and Test B (0.8).",
                  "answer": "\\(0.9\\times0.8=0.72\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Misc Ex 12 (Review Exercise 12 — non-MCQ)",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "For the data \\(x\\): 5, 10, 15, 20, 25, 30, 35, 40 with \\(f\\): 2, 4, 6, 8, 10, 7, 5, 3, draw a cumulative frequency polygon, estimate the three quartiles graphically, and find the variance and standard deviation.",
                  "answer": "\\(N=45;\\ \\text{cumulative frequencies }2,\\ 6,\\ 12,\\ 20,\\ 30,\\ 37,\\ 42,\\ 45.\\ \\ Q_1\\ (11.25\\text{th})\\approx15,\\ Q_2\\ (23\\text{rd})\\approx25,\\ Q_3\\ (33.75\\text{th})\\approx30.\\)\\(\\ \\ \\bar x=23.44,\\ \\sigma^{2}=83.14,\\ \\sigma\\approx9.12\\)"
                }
              ]
            },
            {
              "stem": "Aatika examines exercise time (min: min 0, \\(Q_1\\) 15, median 30, \\(Q_3\\) 45, max 60) against blood pressure (systolic: 140, 130, 120, 120, 115; diastolic: 90, 85, 80, 75, 70). Show the data by box-and-whisker plots.",
              "parts": [
                {
                  "label": "a.",
                  "text": "Find the IQR of both data sets.",
                  "answer": "\\(\\text{Time: }45-15=30\\text{ min};\\ \\ \\text{systolic: }|120-130|=10;\\ \\ \\text{diastolic: }|75-85|=10\\)"
                },
                {
                  "label": "b.",
                  "text": "What is the type of correlation?",
                  "answer": "Negative correlation: as exercise time increases, blood pressure decreases."
                },
                {
                  "label": "c.",
                  "text": "What conclusion can be drawn?",
                  "answer": "More exercise is associated with lower blood pressure."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A coach draws a box-and-whisker plot of athletes' times with median 20 s, \\(Q_1=10\\) s and \\(Q_3=30\\) s. What percentage of athletes could perform within the first 10 seconds? Also find the IQR.",
                  "answer": "25% (the lowest quarter of times lies below \\(Q_1=10\\) s). \\(\\text{IQR}=30-10=20\\text{ s}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Bareera and Hadiya draw cookie packs, Hadiya after Bareera, from a bag of 2 choco cookies and 3 lemon cookies. Find the probability of drawing both lemon cookies.",
                  "answer": "\\(P=\\dfrac35\\times\\dfrac24=\\dfrac{3}{10}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A company has two machines, A and B, which produce 60% and 40% of the total products. Machine A produces 20% defective products and machine B produces 15%. What is the probability that a randomly selected product is defective?",
                  "answer": "\\(P=0.6(0.2)+0.4(0.15)=0.12+0.06=0.18\\)"
                }
              ]
            },
            {
              "stem": "The box-and-whisker plots (figure) show the marks of 4 boys of the Mauve section and 4 boys of the Hazel section in a math test (readings from the scale are approximate).",
              "parts": [
                {
                  "label": "a)",
                  "text": "Find the median scores of both sections.",
                  "answer": "\\(\\text{Hazel: }\\approx64;\\ \\ \\text{Mauve: }\\approx70\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"400\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "b)",
                  "text": "Find the IQR of the scores of both sections.",
                  "answer": "\\(\\text{Hazel: }Q_1\\approx59,\\ Q_3\\approx68\\Rightarrow\\text{IQR}\\approx9;\\ \\ \\text{Mauve: }Q_1\\approx64,\\ Q_3\\approx80\\Rightarrow\\text{IQR}\\approx16\\)"
                }
              ]
            }
          ]
        }
      ],
      "long": []
    }
  ]
};
