/*
  CLASS 10 — MATH — SHORT QUESTIONS — CHAPTERS 7 TO 8
  -----------------------------------------------------
  Chapter 7: Vectors in Plane
  Chapter 8: Application of Trigonometry
  Source: Class 10 Mathematics (National Book Foundation) exercise and
  review-exercise questions (worked examples excluded). MCQ parts of the
  review exercises are NOT repeated here (they live in the mcq files).

  Figure questions: each question that has a figure carries it in the
  "diagram" field of the part it belongs to (the book's figure, cleaned
  and embedded as a small PNG image). Questions that only ask for a
  drawing or construction carry the construction steps as the answer.
  Figures whose labels could not be read reliably are listed below.
  Ex 7.1 Q17 reads b as i - 2j. Ex 8.2 Q14 (tree height label cut off in the
  source) takes FG = 12.7 m. Misc 8 Q4 takes 100 degrees as the interior angle.
  Left out: Misc 8 Q10 (pipe and stories).
  Answers were worked out and cross-checked by script; the source
  material itself contains no answers. Readings taken from graphs and
  box plots are approximate and are marked as such in the answer.

  The chapter objects also carry an empty "long" array so long questions
  can be added later without touching the app (chapters merge by id).

  DATA FORMAT (parts-selectable schema):
    short / long: [ { exercise, questions: [ { stem|null, parts: [ {label|null, text, answer, diagram?} ] } ] } ]
  MATH FORMATTING: inline math wrapped in \\( \\) for KaTeX.
*/
var CLASS10_MATH_CH7_8 = {
  "chapters": [
    {
      "id": 7,
      "name": "Vectors in Plane",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 7.1",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A point with coordinates \\((5,-7)\\) is translated by the vector \\([0,-3]\\). Find the new position of the point.",
                  "answer": "\\((5+0,\\ -7-3)=(5,\\ -10)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A vector \\([-5,4]\\) is translated by another vector \\([4,-3]\\). Find the new location of the given vector.",
                  "answer": "\\(\\text{A vector has magnitude and direction only, so translation does not change it: the image is }[-5,\\ 4].\\)"
                }
              ]
            },
            {
              "stem": "Triangle ABC has vertices \\(A=(-4,6)\\), \\(B=(-1,4)\\) and \\(C=(-6,1)\\). Find the coordinates of the image if the triangle is translated by:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\([5,\\ 0]\\)",
                  "answer": "\\(A'=(1, 6),\\ B'=(4, 4),\\ C'=(-1, 1)\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\([-3,\\ -4]\\)",
                  "answer": "\\(A'=(-7, 2),\\ B'=(-4, 0),\\ C'=(-9, -3)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "What translation vector is needed to bring the point \\(E(-6,5)\\) to the origin?",
                  "answer": "\\([0-(-6),\\ 0-5]=[6,\\ -5]\\)"
                }
              ]
            },
            {
              "stem": "ABCD is a rectangle with \\(\\overrightarrow{AB}=\\vec a\\) and \\(\\overrightarrow{BC}=\\vec b\\) (O is the intersection of the diagonals). Represent the following vectors in terms of \\(\\vec a\\) and \\(\\vec b\\).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\overrightarrow{DC}\\)",
                  "answer": "\\(\\vec a\\)",
                  "diagram": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACRCAAAAACXy2lhAAAK8ElEQVR42u1dK3srRxI92c/AsOCFzXRhs7mwmbJs2NxlYkqYmXKZmSMmlog1S4YV24gV3GFFxfon1D/wAj0sy3qN1CM/PjeQ9fqkPqqqU88e//SIj7X+hU9An4A+AX0C2lg373bnDYDi4wAaayIk5x8+CKA6kvNIST+KhAR+UACz9OKVn95lpFDfudg7TAqNJSNyxfsAlMz3DrPc/M6MAMJ9/10AIneEthVUBlKViHeByNExP2Qu9FE0pvF9iCgdiRSIQACKAaXZO8BDdgyQLUXYd/uxv6HlKTVHYrlkS+ywdwCoChpnwHz6614bcksc7l0Awp2JEIxoL6C0fE3h3gOgYiJq5oPbB4hAPQCozYV34Vp7vSM25FAfccHvKx+iBK1QC3u/823zFWfYghANWKrv+p4tb5cvg2zxFK2efTJO27jFc5rF1puAhaUs4hgDDPDDA4BWwem/1QjmfdkHZvHpK8kWd2wXB652+fxp2t7sMady5GkDrUkYABD+e0LGWno40ELfRNZiADnnNr+Elr8lbeGirY0Q8Ex351uPW67pZOUeiQ57yhWg4ZYnXv0i5u+yGNWFHzJMsszlvBfMey2LJM6XtIyG/OBtkIRbGBEoPHhKbYskrnQmBhiofCMZkncLCYVyv9XtlxBcMfAvmeg1FycDbKEwhpYSMgMqXRALo3x9nZtHTQgpgco+YGZtVQ4ABkmMvEvM4bXVbspKZVmMJxZGpzrWLQ9gQK9MSnd9jDlKeE1mmEqysuwDQaw8nhDslJAZgCoh9IFRYGY76Jy7XA2L+TAEgKJEhbMktKSRQB4AisJLUgmvAakRSa4cbflKorakgLRAskqnqprThE9Q4MxrLAlhUOxUoDMktJkhVlMRlXJ4bS7w973To7/DLLcdewxr1nspq2vBqaNSGPTREk+L2nZVTVlVwlUgzVjND/Z9VVuV28eLw+FYOKXQuVuaR4bfz0KWR0IAMAqsUTpmh4Y10QFvfoYfOlCcKJooEwkdSmkqilCeXb9t3R8qCvyI4u46IryamcIl1HNOw+shsNxxGXodSEdcecyFU3ZA6Pdn0Sac2y01Uc2fYKCWHRDQ79esk6xuqWGxpzDnXDzn91irasqSpMzVfZlyojJDonJB03g4HDOrnLCJho6ZWx0T/CDHj3NRF3wU5D5JeTCnrTklc+6gvTUTppO07UxA1ILDA/M9h4dDP30oKXHUPw5wAULpM3m2S+cUiiKIsu7lpgkGIwB+onW1N0egMp+jvjmDSF5wOGtMu4PWsd6PAKBKUaq99YLQyniyhj57II1VlHdxuDi/uBM47QqqhRHypiR5RmNGGIskfflLp1XRu3Avda5hTv6A/bWJmGwVt+Sa9RkFlsgv82Uq9irKNKor77IYTyMc/soLCEXRsIhs+UayJ7OkbUeK8mJta+4TCM4EMh1mIoUNSHMWVr8JiVaKNrNn0yx1TPBnw3naXlEuemmkq9mSrONlvVHg5xzuSBe7VttwNDPR5M+uiz2T9PJDalqx7GlVn3aKN5F1NcCLjkcAZmr+KcEWw+ACz0O7IstzagonQqpZJysOHxqzOSS1dUY4lgujUDr8cz++XH9+++3xovX3z19uf/57ff/Ll2/flo8ef//59ssv/1z26V9/e7bZb79vvtrJiGZV1ax3sRwulaEpNoptF1ObPesgk6VBvuD0ULYkiZNb6FnxVGwrL6/rCXT25MHJkc8fKezMlqbMlPx6/zOVC6htg/EViTdDkudzpR1OBQ+HU2bVpf2PObkyR59JEpmslRgpBWC2Dki6HXMeehGWcgRM2VBmSddrBZDiGoAi1cY2GF4DEIqijBKjh6Ac5El5WGGArK3ISMUhRdffT9t/f/vlMd/689vt7dfb7/9k+rSvt7e3t7dfvi8f/+/b1++Pj4/fv6y23PnplJmYC0QqWT5tzmkxiqPTVX6CEtgY8uv6qMBYkytDUpb/5Ghqii7HdiwOlxzuKzzNL3YNaCriQ+ij1/cskqFPSyUgidx6kjQtvNBTLN+RY91IefrLNL1mvbz1XFXAD3aDCuupYAdgllapfocSqqM86yNUVR01Rzc9iK9W0Ue9ODTAtg7eb9CNiOYcLWxVF6tqLKJ6qTvq323ULJJLBX4kX3ZLCg1rovJl+WNUyonV49MSViSHqODwVLy9yZaBP+OCZLubcL1eiMJHqsctErzSwwyb3bcOJFSLwu0tvPceGpbId1UWQP2O6nKbjpQ1ucHwSE4ry2wp/8oN6FdNbnAsqK6qaUwTGfTfPKCTg+rhcMp6z2cSnrUFROfCSTi58L7Ilrjsv1kJNVEQ2iTYw8CiSTLPS+YKfRphc6EdG/dGgZcJ4JuT0DQahfYpXFHUKhPOCSkLoDqKO3OapaqaiUw037zkTfvS5As4LBTuz7aE4q/W85LWpYSaeMyRnlTEE9M8nbxLAY1F/d3FLd/hcKyaNAfhXQZoKkqDLLw7mrOwZJh53x1tn2ZEs6iWreXbG5WRWS+eV7g5O3toIr9I4S6D9BCi3vnL7PFsx7p0pHm9fL8/Y72Lg0sG5s60oTqahTJ/tNzv16ITHhzU44MWcRagGacsjYQ9HM6S5OzC8Rld8DmzuUF3x4qGwzFz8meqc/v04YfkmdQ7xOGBhQ8c8rEDpwrbqlzNQrkaCYeC1iZKPMst7QLUOwjHX+VIR1HUopz8qK1JtJFQw2L+aidUqmoqKe2Kw3PR9pTTOTnPRewgml5WWukQb9+0gVNe+3jhaPRDRWWrTmEZJDTlZOF6h4ee1sOcJcatStLF+VAzYfi71zlX2BuVzLw1tnYhKYzZXMu50MyQIkc9kY2ORwpTVuoibGsVh3vW+9POWhwbL6tVUYYKr7yqqubEutjIBbQ9YwUNXh3OuvBwQtB6cxCO2IX1D9RMueQ7HNYxcjko6Ewbmsbkwh8X7sI0SbYjLFVVRx048a2jbZv1GxYLlzc8CEhRNddRgMpH1qfZ6ZMllERU3SBDhVZBBk0c/FmKN+8B81XEPAdgIIM1RVtAbABhRi+8mC1zYHuSgG0Soy1vVw8lLRXPi9vlFW1Pem0vr6azeCUZUWsJOWcEMpHFF9jmQPkJ5QvboNbVX0vPz6TTFiB6jshWlyZaG8HiTWTeu/ZnwUeExZl4MqOnC/XY6pvXT2L3XwMKzNED8CMlMoBK768T2HZ9WdD6PgHw17sMyKaEZsllj3CIQM5fMXLaBDSxg+Z21kpwHQSCMyMD9Y8AmgpIcwMabl+lKsdqojoCdJdb2ZhoFHhwB3l0frVKyXwZLP56UEKNhQGn+k1Eokct0z8AmNhBCUnyld9//dA3iAqHASmVCF6b94DFrAHSTge7VrlGqQAg3fi/JlLWHN4mzgT+ECAxGntNpNnBjAGDptTPqGzJE7DzOnMrQDOxxGpmmyc/8ggnJToxFDxZPnBlBSfy42EvIDUfHFFi5cyAigLALFLIaUKuAoakigOAlidkk8w76Pz0QV3Ypu1nOaNy4Qc9tAtW6OfEQ0hTzGveVeNeSSisIqNy/9XTzzUiBZJHRo9NpJxSWlyw8crpAzBV85DkclbDpkJk8LuuW9P5/32YRheGMGk5EXV2gNj1cZsmmhsCRO5KKVHXgNgWA/bO4WMAWka7Yh8F0OpfTnwYQGoE4FfxdCVAXbOcswQ0AgiKDwGIjBMZebV0HURdq9ydV8Vg4tBNMPcakcLMKmwc2H//gK68Pv8P3iegT0CfgJ6t/wNZSlHYEiM77AAAAABJRU5ErkJggg==\" alt=\"figure\" width=\"208\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\overrightarrow{DA}\\)",
                  "answer": "\\(-\\vec b\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\overrightarrow{AC}\\)",
                  "answer": "\\(\\vec a+\\vec b\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\overrightarrow{BD}\\)",
                  "answer": "\\(-\\vec a+\\vec b\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\overrightarrow{AO}\\)",
                  "answer": "\\(\\tfrac12(\\vec a+\\vec b)\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\overrightarrow{BO}\\)",
                  "answer": "\\(\\tfrac12(-\\vec a+\\vec b)\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(\\overrightarrow{AB}+\\overrightarrow{AC}\\)",
                  "answer": "\\(2\\vec a+\\vec b\\)"
                }
              ]
            },
            {
              "stem": "Given \\(\\overrightarrow{OP}=\\vec p+\\vec q\\), \\(\\overrightarrow{OQ}=\\vec p-\\vec q\\) and M is the mid-point of \\(PQ\\). Find in terms of \\(\\vec p\\) and \\(\\vec q\\).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\overrightarrow{PQ}\\)",
                  "answer": "\\(\\overrightarrow{OQ}-\\overrightarrow{OP}=-2\\vec q\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\overrightarrow{PM}\\)",
                  "answer": "\\(\\tfrac12\\overrightarrow{PQ}=-\\vec q\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\overrightarrow{QM}\\)",
                  "answer": "\\(\\vec q\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\overrightarrow{OM}\\)",
                  "answer": "\\(\\overrightarrow{OP}+\\overrightarrow{PM}=\\vec p+\\vec q-\\vec q=\\vec p\\)"
                }
              ]
            },
            {
              "stem": "Express \\(\\overrightarrow{AB}\\) in the form \\([x,y]\\) and \\(x\\hat i+y\\hat j\\), when:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(A(1, 3),\\ B(4, 6)\\)",
                  "answer": "\\(\\overrightarrow{AB}=[3,\\ 3]=3\\hat{i} + 3\\hat{j}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(A(-2, 5),\\ B(2, -5)\\)",
                  "answer": "\\(\\overrightarrow{AB}=[4,\\ -10]=4\\hat{i} - 10\\hat{j}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(A(4, -7),\\ B(-1, -9)\\)",
                  "answer": "\\(\\overrightarrow{AB}=[-5,\\ -2]=-5\\hat{i} - 2\\hat{j}\\)"
                }
              ]
            },
            {
              "stem": "Find the unit vectors of the following vectors.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\overrightarrow{PQ}\\text{ when }P(1,4),\\ Q(4,8)\\)",
                  "answer": "\\(\\overrightarrow{PQ}=[3,4],\\ |\\overrightarrow{PQ}|=5,\\ \\hat u=\\dfrac35\\hat i+\\dfrac45\\hat j\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\vec u=5\\hat i-12\\hat j\\)",
                  "answer": "\\(|\\vec u|=13,\\ \\hat u=\\dfrac{5}{13}\\hat i-\\dfrac{12}{13}\\hat j\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\vec b=-6\\hat i-8\\hat j\\)",
                  "answer": "\\(|\\vec b|=10,\\ \\hat b=-\\dfrac35\\hat i-\\dfrac45\\hat j\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(\\vec a=3\\hat i-2\\hat j\\) and \\(\\vec b=\\hat i+4\\hat j\\), find \\(x\\) and \\(y\\) such that \\(x\\vec a+y\\vec b=4\\hat i-12\\hat j\\).",
                  "answer": "\\(3x+y=4,\\ -2x+4y=-12\\Rightarrow x=2,\\ y=-2\\)"
                }
              ]
            },
            {
              "stem": "Given \\(D=(3,-2)\\), \\(E=(-3,-5)\\), \\(F=(0,5)\\) and \\(G=(3,6)\\), find the following vectors.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\overrightarrow{DE}\\)",
                  "answer": "\\([-6,\\ -3]\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\overrightarrow{DE}+\\overrightarrow{FG}\\)",
                  "answer": "\\([-3,\\ -2]\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(3\\overrightarrow{EF}-2\\overrightarrow{EG}\\)",
                  "answer": "\\([-3,\\ 8]\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\tfrac32\\overrightarrow{DF}+\\tfrac12\\overrightarrow{EG}\\)",
                  "answer": "\\([-1.5,\\ 16]\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\overrightarrow{DF}-\\overrightarrow{EF}+2\\overrightarrow{FG}\\)",
                  "answer": "\\([0,\\ -1]\\)"
                }
              ]
            },
            {
              "stem": "If \\(\\vec a=3\\hat i+5\\hat j\\) and \\(\\vec b=2\\hat i-4\\hat j\\), find:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\vec a+2\\vec b\\)",
                  "answer": "\\(7\\hat{i} - 3\\hat{j}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(2\\vec a-3\\vec b\\)",
                  "answer": "\\(22\\hat{j}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(5(2\\vec a+\\vec b)\\)",
                  "answer": "\\(40\\hat{i} + 30\\hat{j}\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(0.5(\\vec a-\\vec b)\\)",
                  "answer": "\\(0.5\\hat{i} + 4.5\\hat{j}\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(|\\vec a+\\vec b|\\)",
                  "answer": "\\(|5\\hat i+\\hat j|=\\sqrt{26}\\approx5.1\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(|\\vec a-\\vec b|\\)",
                  "answer": "\\(|\\hat i+9\\hat j|=\\sqrt{82}\\approx9.06\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(|\\vec a|+2|\\vec b|\\)",
                  "answer": "\\(\\sqrt{34}+2\\sqrt{20}=\\sqrt{34}+4\\sqrt5\\approx14.78\\)"
                },
                {
                  "label": "(viii)",
                  "text": "\\(|\\vec a|-|\\vec b|\\)",
                  "answer": "\\(\\sqrt{34}-2\\sqrt5\\approx1.36\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the value of \\(p\\) for which the vector \\(\\vec u=3\\hat i+6\\hat j\\) is parallel to \\(\\vec v=\\hat i+p\\hat j\\).",
                  "answer": "\\(\\dfrac{3}{1}=\\dfrac{6}{p}\\Rightarrow p=2\\)"
                }
              ]
            },
            {
              "stem": "If \\(\\vec a=\\hat i-3\\hat j\\) and \\(\\vec b=2\\hat i+4\\hat j\\), find:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "A vector of magnitude 4 in the direction of \\(2\\vec a-\\vec b\\).",
                  "answer": "\\(2\\vec a-\\vec b=-10\\hat j,\\ \\text{unit vector}=-\\hat j\\Rightarrow\\text{required vector}=-4\\hat j\\)"
                },
                {
                  "label": "(ii)",
                  "text": "A vector of magnitude 6 in the opposite direction of \\(\\vec a+2\\vec b\\).",
                  "answer": "\\(\\vec a+2\\vec b=5\\hat i+5\\hat j,\\ |\\cdot|=5\\sqrt2;\\ \\text{required vector}=-\\dfrac{6}{5\\sqrt2}(5\\hat i+5\\hat j)=-3\\sqrt2\\,\\hat i-3\\sqrt2\\,\\hat j\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "An airplane leaves the airport on a bearing of \\(45^\\circ\\) travelling at 380 mph. The wind is blowing at a bearing of \\(135^\\circ\\) at a speed of 50 mph. What is the actual velocity of the airplane?",
                  "answer": "\\(\\text{Components (east, north): plane }(268.7,\\ 268.7),\\ \\text{wind }(35.36,\\ -35.36)\\Rightarrow\\text{resultant }(304.06,\\ 233.35).\\) Speed \\(=383.3\\) mph on a bearing of about \\(52.5^\\circ\\)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A truck leaves the dry port on a bearing of \\(30^\\circ\\) and travels 15 km. It then turns due west and travels 8 km. How far is the truck from the dry port and what is its bearing?",
                  "answer": "\\(\\text{After leg 1: }(7.5,\\ 12.99);\\ \\text{after leg 2: }(-0.5,\\ 12.99).\\) Distance \\(\\approx13\\) km; bearing \\(\\approx357.8^\\circ\\) (about \\(2.2^\\circ\\) west of north)."
                }
              ]
            },
            {
              "stem": "Draw the following vectors (choose a convenient scale and state it).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(10\\text{ N force along the }x\\text{-axis}\\)",
                  "answer": "Scale 1 cm = 2 N: draw an arrow 5 cm long along the positive \\(x\\)-axis, i.e. from \\((0,0)\\) to \\((5,0)\\) on the scale."
                },
                {
                  "label": "(ii)",
                  "text": "\\(50\\text{ m/s velocity at }150^\\circ\\text{ with the }x\\text{-axis}\\)",
                  "answer": "Scale 1 cm = 10 m/s: draw an arrow 5 cm long making \\(150^\\circ\\) with the positive \\(x\\)-axis (in the second quadrant). Its components are \\([-43.3,\\ 25]\\) m/s, i.e. \\([-4.33,\\ 2.5]\\) cm on the scale."
                },
                {
                  "label": "(iii)",
                  "text": "\\(220\\text{ m displacement towards north}\\)",
                  "answer": "Scale 1 cm = 40 m: draw a vertical arrow pointing up (north), \\(220\\div40=5.5\\) cm long."
                },
                {
                  "label": "(iv)",
                  "text": "\\(24\\text{ m/s}^{2}\\text{ acceleration at }45^\\circ\\text{ with the }x\\text{-axis}\\)",
                  "answer": "Scale 1 cm = 6 m/s\\(^2\\): draw an arrow 4 cm long at \\(45^\\circ\\) to the \\(x\\)-axis. Components: \\([16.97,\\ 16.97]\\) m/s\\(^2\\)."
                }
              ]
            },
            {
              "stem": "Draw the vectors on graph paper when \\(\\vec p\\) is 4 cm long making an angle of \\(45^\\circ\\) with the \\(x\\)-axis.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(2\\vec p\\)",
                  "answer": "\\(\\text{8 cm long, same direction as }\\vec p\\ (45^\\circ)\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(-\\vec p\\)",
                  "answer": "\\(\\text{4 cm long, opposite direction (}225^\\circ)\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(0.5\\vec p\\)",
                  "answer": "\\(\\text{2 cm long, same direction (}45^\\circ)\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(-1.5\\vec p\\)",
                  "answer": "\\(\\text{6 cm long, opposite direction (}225^\\circ)\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(-0.5\\vec p\\)",
                  "answer": "\\(\\text{2 cm long, opposite direction (}225^\\circ)\\)"
                }
              ]
            },
            {
              "stem": "Draw \\(\\vec a=3\\) units west and \\(\\vec b=3\\) units north on graph paper (so \\(\\vec a=[-3,0]\\), \\(\\vec b=[0,3]\\)). Draw the following vectors on the graph paper.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(2\\vec a+\\vec b\\)",
                  "answer": "\\(=[-6,\\ 3]\\): draw the arrow from the origin to the point \\((-6,\\ 3)\\)."
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\vec a-2\\vec b\\)",
                  "answer": "\\(=[-3,\\ -6]\\): draw the arrow from the origin to the point \\((-3,\\ -6)\\)."
                },
                {
                  "label": "(iii)",
                  "text": "\\(3\\vec a+1.5\\vec b\\)",
                  "answer": "\\(=[-9,\\ 4.5]\\): draw the arrow from the origin to the point \\((-9,\\ 4.5)\\)."
                },
                {
                  "label": "(iv)",
                  "text": "\\((2\\vec a+\\vec b)+(\\vec a-2\\vec b)\\)",
                  "answer": "\\(=[-9,\\ -3]\\): draw the arrow from the origin to the point \\((-9,\\ -3)\\)."
                },
                {
                  "label": "(v)",
                  "text": "\\(0.5(\\vec a+\\vec b)\\)",
                  "answer": "\\(=[-1.5,\\ 1.5]\\): draw the arrow from the origin to the point \\((-1.5,\\ 1.5)\\)."
                },
                {
                  "label": "(vi)",
                  "text": "\\(3\\vec a-2\\vec b\\)",
                  "answer": "\\(=[-9,\\ -6]\\): draw the arrow from the origin to the point \\((-9,\\ -6)\\)."
                },
                {
                  "label": "(vii)",
                  "text": "\\(2\\vec a-2.5\\vec b\\)",
                  "answer": "\\(=[-6,\\ -7.5]\\): draw the arrow from the origin to the point \\((-6,\\ -7.5)\\)."
                },
                {
                  "label": "(viii)",
                  "text": "\\((2\\vec a+\\vec b)-(\\vec a-2\\vec b)\\)",
                  "answer": "\\(=[-3,\\ 9]\\): draw the arrow from the origin to the point \\((-3,\\ 9)\\)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "In the figure, the direction of \\(\\vec a\\) is 4 square units to the right and 3 square units up. Find the relation of the other vectors with \\(\\vec a\\).",
                  "answer": "All the vectors are parallel to \\(\\vec a=[4,3]\\) (same slope \\(\\tfrac34\\)), so each is a scalar multiple of \\(\\vec a\\). Reading the grid: \\(\\vec b=-\\tfrac12\\vec a\\), \\(\\vec d=-\\vec a\\), \\(\\vec f=\\tfrac12\\vec a\\); \\(\\vec c\\approx2\\vec a\\) and \\(\\vec e\\approx2.5\\vec a\\) (same direction as \\(\\vec a\\)); \\(\\vec g\\) points opposite to \\(\\vec a\\). (Values for \\(\\vec c,\\vec e,\\vec g\\) are approximate readings.)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"330\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": "If \\(\\vec a=2\\hat i-4\\hat j\\), \\(\\vec b=\\hat i-2\\hat j\\) and \\(\\vec c=[1,3]\\), find a unit vector in the direction of:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\vec a+\\vec b\\)",
                  "answer": "\\(=[3,\\ -6],\\ |\\cdot|=\\sqrt{45};\\ \\ \\hat u=\\dfrac{1}{\\sqrt{45}}[3,\\ -6]\\approx[0.45,\\ -0.89]\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(2\\vec a-\\vec c\\)",
                  "answer": "\\(=[3,\\ -11],\\ |\\cdot|=\\sqrt{130};\\ \\ \\hat u=\\dfrac{1}{\\sqrt{130}}[3,\\ -11]\\approx[0.26,\\ -0.96]\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(2\\vec a-\\vec b\\)",
                  "answer": "\\(=[3,\\ -6],\\ |\\cdot|=\\sqrt{45};\\ \\ \\hat u=\\dfrac{1}{\\sqrt{45}}[3,\\ -6]\\approx[0.45,\\ -0.89]\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(3(\\vec a+\\vec c)\\)",
                  "answer": "\\(=[9,\\ -3],\\ |\\cdot|=\\sqrt{90};\\ \\ \\hat u=\\dfrac{1}{\\sqrt{90}}[9,\\ -3]\\approx[0.95,\\ -0.32]\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\vec a+\\vec b+2\\vec c\\)",
                  "answer": "\\(=[5,\\ 0],\\ |\\cdot|=\\sqrt{25};\\ \\ \\hat u=\\dfrac{1}{\\sqrt{25}}[5,\\ 0]\\approx[1,\\ 0]\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(4\\vec a-2\\vec b+\\vec c\\)",
                  "answer": "\\(=[7,\\ -9],\\ |\\cdot|=\\sqrt{130};\\ \\ \\hat u=\\dfrac{1}{\\sqrt{130}}[7,\\ -9]\\approx[0.61,\\ -0.79]\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 7.2",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "What type of quadrilateral is EFGH if \\(\\overrightarrow{EF}=\\overrightarrow{HG}\\) and \\(\\overrightarrow{EH}=\\overrightarrow{FG}\\)?",
                  "answer": "A parallelogram: both pairs of opposite sides are equal and parallel."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Use vectors to find the lengths of the diagonals of a parallelogram having adjacent sides \\(2\\hat i+\\hat j\\) and \\(\\hat i-3\\hat j\\).",
                  "answer": "\\(\\text{Diagonals: }\\vec u+\\vec v=3\\hat i-2\\hat j,\\ |\\cdot|=\\sqrt{13}\\approx3.61;\\quad\\vec u-\\vec v=\\hat i+4\\hat j,\\ |\\cdot|=\\sqrt{17}\\approx4.12\\)"
                }
              ]
            },
            {
              "stem": "Vertices of triangles.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "Show that \\(A(0,2)\\), \\(B(\\sqrt3,-1)\\), \\(C(0,-2)\\) are the vertices of a right-angled triangle.",
                  "answer": "\\(AB^{2}=3+9=12,\\ BC^{2}=3+1=4,\\ AC^{2}=16.\\ \\text{Since }AB^{2}+BC^{2}=AC^{2},\\ \\text{the triangle is right-angled at }B.\\)"
                },
                {
                  "label": "(ii)",
                  "text": "Show that \\(A(3,1)\\), \\(B(-2,-3)\\), \\(C(2,2)\\) are the vertices of an isosceles triangle.",
                  "answer": "\\(AB^{2}=25+16=41,\\ BC^{2}=16+25=41,\\ AC^{2}=2.\\ \\text{Since }AB=BC=\\sqrt{41},\\ \\text{the triangle is isosceles.}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The position vectors of points C and D are \\(3\\hat i+2\\hat j\\) and \\(\\hat i-4\\hat j\\) respectively. Find the position vector of the point O dividing the segment CD internally in the ratio 2 : 3.",
                  "answer": "\\(\\vec r=\\dfrac{3(3\\hat i+2\\hat j)+2(\\hat i-4\\hat j)}{5}=\\dfrac{11\\hat i-2\\hat j}{5}=\\dfrac{11}{5}\\hat i-\\dfrac25\\hat j\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(M(2,4)\\) is the mid-point of \\(\\overrightarrow{XY}\\) where \\(X(-1,3)\\) and \\(Y(x,y)\\), find the point Y.",
                  "answer": "\\(\\dfrac{-1+x}{2}=2,\\ \\dfrac{3+y}{2}=4\\Rightarrow x=5,\\ y=5.\\ \\ Y=(5,\\ 5)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(\\overrightarrow{OA}=-\\hat i+3\\hat j\\) and \\(\\overrightarrow{OB}=6\\hat i+2\\hat j\\), find the points trisecting the join of A and B.",
                  "answer": "\\(A(-1,3),\\ B(6,2).\\ \\text{Trisection points: }\\left(\\dfrac{2(-1)+6}{3},\\dfrac{2(3)+2}{3}\\right)=\\left(\\dfrac43,\\dfrac83\\right)\\text{ and }\\left(\\dfrac{-1+2(6)}{3},\\dfrac{3+2(2)}{3}\\right)=\\left(\\dfrac{11}{3},\\dfrac73\\right)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find \\(x\\) such that the points \\(P(-1,x)\\), \\(Q(3,2)\\) and \\(R(7,3)\\) are collinear.",
                  "answer": "\\(\\text{slope }QR=\\dfrac{3-2}{7-3}=\\dfrac14=\\text{slope }PQ=\\dfrac{2-x}{4}\\Rightarrow x=1\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the coordinates of vertex D of the parallelogram ABCD if \\(A(-3,0)\\), \\(B(1,-2)\\) and \\(C(5,0)\\) are its three vertices.",
                  "answer": "\\(\\overrightarrow{AB}=\\overrightarrow{DC}\\Rightarrow D=A+C-B=(-3+5-1,\\ 0+0+2)=(1,\\ 2)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(\\overrightarrow{AB}=\\overrightarrow{CD}\\) and \\(A(0,2)\\), \\(C(-2,4)\\), \\(D(-1,5)\\), find the vertex B.",
                  "answer": "\\(\\overrightarrow{CD}=[1,1]\\Rightarrow B=A+\\overrightarrow{CD}=(0+1,\\ 2+1)=(1,\\ 3)\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The vertices of a quadrilateral are \\(U(9,4)\\), \\(V(-7,7)\\), \\(W(-4,-7)\\) and \\(X(5,-5)\\). Find the mid-points of its sides and prove that the figure obtained by joining the mid-points consecutively is a parallelogram.",
                  "answer": "\\(\\text{Mid-points: }P(1,\\ 5.5),\\ Q(-5.5,\\ 0),\\ R(0.5,\\ -6),\\ S(7,\\ -0.5).\\ \\ \\overrightarrow{PQ}=[-6.5,-5.5]=\\overrightarrow{SR},\\ \\ \\overrightarrow{QR}=[6,-6]=\\overrightarrow{PS}.\\) Opposite sides are equal and parallel, so PQRS is a parallelogram."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Prove that the line segment joining the mid-points of two sides of a triangle is half the length of the third side.",
                  "answer": "\\(\\text{In }\\triangle ABC\\text{ let M, N be the mid-points of }AB,\\ AC.\\ \\ \\overrightarrow{MN}=\\overrightarrow{AN}-\\overrightarrow{AM}=\\tfrac12\\overrightarrow{AC}-\\tfrac12\\overrightarrow{AB}=\\tfrac12\\overrightarrow{BC}.\\) So \\(MN\\parallel BC\\) and \\(MN=\\tfrac12BC\\)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Prove that the line joining the mid-points of the two non-parallel sides of a trapezium is parallel to its parallel sides.",
                  "answer": "\\(\\text{Trapezium ABCD with }AB\\parallel DC,\\ \\overrightarrow{DC}=\\lambda\\overrightarrow{AB}.\\ M,N\\text{ mid-points of }AD,\\ BC:\\ \\overrightarrow{MN}=\\tfrac12(\\vec b+\\vec c)-\\tfrac12(\\vec a+\\vec d)=\\tfrac12(\\overrightarrow{AB}+\\overrightarrow{DC})=\\tfrac{1+\\lambda}{2}\\overrightarrow{AB}.\\) Hence \\(MN\\parallel AB\\parallel DC\\)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Prove that the line segment joining the mid-points of two adjacent sides of a parallelogram divides the corresponding diagonal in the ratio 1 : 3.",
                  "answer": "\\(\\text{Take }A\\text{ as origin, }\\overrightarrow{AB}=\\vec a,\\ \\overrightarrow{AD}=\\vec d.\\ P=\\tfrac12\\vec a\\ (\\text{mid }AB),\\ Q=\\vec a+\\tfrac12\\vec d\\ (\\text{mid }BC).\\ \\text{Point R on }BD:\\ \\vec a+t(\\vec d-\\vec a);\\ \\text{on }PQ:\\ \\tfrac12\\vec a+s(\\tfrac12\\vec a+\\tfrac12\\vec d).\\)\\(\\text{Equating coefficients: }t=\\tfrac s2,\\ 1-t=\\tfrac12+\\tfrac s2\\Rightarrow t=\\tfrac14.\\) So \\(BR:RD=1:3\\)."
                }
              ]
            }
          ]
        },
        {
          "exercise": "Misc Ex 7 (Review Exercise 7 — non-MCQ)",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Given \\(\\vec p=3\\hat i-4\\hat j\\) and \\(\\vec q=-3\\hat i-4\\hat j\\). Prove that \\(|\\vec p|=|\\vec q|\\). Is \\(\\vec p=\\vec q\\)?",
                  "answer": "\\(|\\vec p|=\\sqrt{9+16}=5,\\ |\\vec q|=\\sqrt{9+16}=5.\\) The magnitudes are equal, but \\(\\vec p\\ne\\vec q\\) because their components (and directions) are different."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(\\vec a=2\\hat i-4\\hat j\\) and \\(\\vec b=-2\\hat i+x\\hat j\\), find the value of \\(x\\) if \\(|\\vec a+2\\vec b|=6\\).",
                  "answer": "\\(\\vec a+2\\vec b=-2\\hat i+(2x-4)\\hat j;\\ 4+(2x-4)^{2}=36\\Rightarrow(2x-4)^{2}=32\\Rightarrow x=2\\pm2\\sqrt2\\)"
                }
              ]
            },
            {
              "stem": "In \\(\\triangle OAB\\), \\(\\overrightarrow{OA}=\\vec a\\), \\(\\overrightarrow{OB}=\\vec b\\) and M is the mid-point of \\(OA\\). Write the following vectors in terms of \\(\\vec a\\) and \\(\\vec b\\).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\overrightarrow{OM}\\)",
                  "answer": "\\(\\tfrac12\\vec a\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"175\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\overrightarrow{AM}\\)",
                  "answer": "\\(-\\tfrac12\\vec a\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\overrightarrow{BM}\\)",
                  "answer": "\\(\\overrightarrow{OM}-\\overrightarrow{OB}=\\tfrac12\\vec a-\\vec b\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\overrightarrow{OB}+\\overrightarrow{BA}\\)",
                  "answer": "\\(\\vec b+(\\vec a-\\vec b)=\\vec a\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Two tractors are pulling a truck stuck in the mud. The first pulls with a force of 250 N at an angle of \\(50^\\circ\\) with the horizontal while the second pulls with 300 N at \\(40^\\circ\\) with the horizontal. What is the magnitude and direction of the resultant force?",
                  "answer": "\\(F_x=250\\cos50^\\circ+300\\cos40^\\circ\\approx390.5,\\ F_y=250\\sin50^\\circ+300\\sin40^\\circ\\approx384.3.\\) Magnitude \\(\\approx547.9\\) N at about \\(44.5^\\circ\\) to the horizontal."
                }
              ]
            },
            {
              "stem": "The paths of two balls are described by the vectors \\(V_1=120\\hat i+12\\hat j\\) and \\(V_2=90\\hat i-30\\hat j\\) (distances in metres).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "How much farther did the first ball travel as compared with the second ball?",
                  "answer": "\\(|V_1|=\\sqrt{14400+144}\\approx120.6,\\ |V_2|=\\sqrt{9000}\\approx94.87.\\ \\text{Difference}\\approx25.73\\text{ m}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "What is the distance between the two balls thrown?",
                  "answer": "\\(|V_1-V_2|=|30\\hat i+42\\hat j|=\\sqrt{2664}\\approx51.61\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": "Ahmad can swim in still water at 6 m/s in the river Chenab, whose current flows west at 1.5 m/s. What is his resultant velocity if he tries to swim:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "due west, along the current?",
                  "answer": "\\(6+1.5=7.5\\text{ m/s due west}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "due east, against the current?",
                  "answer": "\\(6-1.5=4.5\\text{ m/s due east}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "north across the river?",
                  "answer": "\\(\\sqrt{6^{2}+1.5^{2}}=\\sqrt{38.25}\\approx6.18\\text{ m/s}\\) at about \\(14^\\circ\\) west of north (bearing \\(\\approx346^\\circ\\))."
                }
              ]
            },
            {
              "stem": "A plane travels north at 150 km/h. A steady wind blows due east at 50 km/h.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "What is the resultant speed of the plane?",
                  "answer": "\\(\\sqrt{150^{2}+50^{2}}=\\sqrt{25000}=50\\sqrt{10}\\approx158.1\\text{ km/h}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "How far is the plane from its starting point after 10 hours?",
                  "answer": "\\(10\\times158.1\\approx1581\\text{ km}\\)"
                }
              ]
            }
          ]
        }
      ],
      "long": []
    },
    {
      "id": 8,
      "name": "Application of Trigonometry",
      "mcq": [],
      "short": [
        {
          "exercise": "Ex 8.1",
          "questions": [
            {
              "stem": "Find the reference angles of the following angles.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(125^\\circ\\)",
                  "answer": "\\(180^\\circ-125^\\circ=55^\\circ\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(138^\\circ\\)",
                  "answer": "\\(42^\\circ\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(111^\\circ\\)",
                  "answer": "\\(69^\\circ\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(142^\\circ\\)",
                  "answer": "\\(38^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(\\theta=36^\\circ\\), find the equivalent angle \\(\\alpha\\) in the second quadrant for which \\(\\sin\\alpha=\\sin\\theta\\).",
                  "answer": "\\(\\alpha=180^\\circ-36^\\circ=144^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "If \\(\\theta=87^\\circ\\), find the equivalent angle \\(\\beta\\) in the second quadrant for which \\(\\cos\\beta=-\\cos\\theta\\).",
                  "answer": "\\(\\beta=180^\\circ-87^\\circ=93^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Using a reference angle, find the exact values of \\(\\sin120^\\circ\\), \\(\\cos120^\\circ\\) and \\(\\tan120^\\circ\\).",
                  "answer": "\\(\\text{Reference angle }60^\\circ:\\ \\sin120^\\circ=\\dfrac{\\sqrt3}{2},\\ \\cos120^\\circ=-\\dfrac12,\\ \\tan120^\\circ=-\\sqrt3\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Using the reference angle, find \\(\\cos\\dfrac{3\\pi}{4}\\), \\(\\sin\\dfrac{3\\pi}{4}\\) and \\(\\tan\\dfrac{3\\pi}{4}\\).",
                  "answer": "\\(\\text{Reference angle }\\dfrac\\pi4:\\ \\cos\\dfrac{3\\pi}{4}=-\\dfrac{\\sqrt2}{2},\\ \\sin\\dfrac{3\\pi}{4}=\\dfrac{\\sqrt2}{2},\\ \\tan\\dfrac{3\\pi}{4}=-1\\)"
                }
              ]
            },
            {
              "stem": "If \\(\\cos\\theta=0.559\\), find the values of:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\cos(180^\\circ-\\theta)\\)",
                  "answer": "\\(-\\cos\\theta=-0.559\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\sin(180^\\circ-\\theta)\\)",
                  "answer": "\\(\\sin\\theta=\\sqrt{1-0.559^{2}}\\approx0.8292\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(\\tan(180^\\circ-\\theta)\\)",
                  "answer": "\\(-\\tan\\theta=-\\dfrac{0.8292}{0.559}\\approx1.4833\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\cot(180^\\circ-\\theta)\\)",
                  "answer": "\\(-\\cot\\theta\\approx-0.6742\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(\\sec(180^\\circ-\\theta)\\)",
                  "answer": "\\(-\\dfrac{1}{0.559}\\approx-1.7889\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(\\operatorname{cosec}(180^\\circ-\\theta)\\)",
                  "answer": "\\(\\dfrac{1}{\\sin\\theta}\\approx1.206\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 8.2",
          "questions": [
            {
              "stem": "Solve the following right-angled triangles (\\(\\gamma=90^\\circ\\)). Refer to the figure (triangles (i), (ii), (iii)).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "Hypotenuse \\(c=15\\) m and \\(\\alpha=40^\\circ\\).",
                  "answer": "\\(a=9.64,\\ b=11.49,\\ c=15,\\ \\alpha=40^\\circ,\\ \\beta=50^\\circ,\\ \\gamma=90^\\circ\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"440\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "(ii)",
                  "text": "Side \\(b=50\\) m and \\(\\beta=35.5^\\circ\\).",
                  "answer": "\\(a=70.1,\\ b=50,\\ c=86.1,\\ \\alpha=54.5^\\circ,\\ \\beta=35.5^\\circ,\\ \\gamma=90^\\circ\\)"
                },
                {
                  "label": "(iii)",
                  "text": "Sides \\(b=15\\) cm and \\(a=12.5\\) cm.",
                  "answer": "\\(a=12.5,\\ b=15,\\ c=19.53,\\ \\alpha=39.8^\\circ,\\ \\beta=50.2^\\circ,\\ \\gamma=90^\\circ\\)"
                }
              ]
            },
            {
              "stem": "Solve the right-angled triangles ABC in which \\(\\gamma=90^\\circ\\) and:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(a=12\\) cm, \\(\\beta=35^\\circ\\)",
                  "answer": "\\(a=12,\\ b=8.4,\\ c=14.65,\\ \\alpha=55^\\circ,\\ \\beta=35^\\circ,\\ \\gamma=90^\\circ\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(b=30\\) cm, \\(\\alpha=25^\\circ35'\\)",
                  "answer": "\\(a=14.36,\\ b=30,\\ c=33.26,\\ \\alpha=25^\\circ 35^{\\prime},\\ \\beta=64^\\circ 25^{\\prime},\\ \\gamma=90^\\circ\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(a=50\\) cm, \\(b=25\\) cm",
                  "answer": "\\(a=50,\\ b=25,\\ c=55.9,\\ \\alpha=63^\\circ 26^{\\prime},\\ \\beta=26^\\circ 34^{\\prime},\\ \\gamma=90^\\circ\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(a=30\\) cm, \\(c=40\\) cm",
                  "answer": "\\(a=30,\\ b=26.46,\\ c=40,\\ \\alpha=48^\\circ 35^{\\prime},\\ \\beta=41^\\circ 25^{\\prime},\\ \\gamma=90^\\circ\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(a=24\\) cm, \\(\\alpha=36^\\circ15'\\)",
                  "answer": "\\(a=24,\\ b=32.73,\\ c=40.59,\\ \\alpha=36^\\circ 15^{\\prime},\\ \\beta=53^\\circ 45^{\\prime},\\ \\gamma=90^\\circ\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(b=10\\) cm, \\(\\alpha=70.5^\\circ\\)",
                  "answer": "\\(a=28.24,\\ b=10,\\ c=29.96,\\ \\alpha=70^\\circ 30^{\\prime},\\ \\beta=19^\\circ 30^{\\prime},\\ \\gamma=90^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A tower casts a shadow 20 m long when the angle of elevation of the sun is \\(65^\\circ\\). How tall is the tower?",
                  "answer": "\\(h=20\\tan65^\\circ\\approx42.89\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Arif stands on top of a cliff 105 m above a lake. The angle of depression to a boat on the lake is \\(42^\\circ\\). How far is the boat from Arif?",
                  "answer": "\\(\\text{Line-of-sight distance}=\\dfrac{105}{\\sin42^\\circ}\\approx156.9\\text{ m}\\) (its horizontal distance from the foot of the cliff is \\(\\dfrac{105}{\\tan42^\\circ}\\approx116.6\\) m)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A 20 ft ladder leans against a building. The angle between the ladder and the ground is \\(75^\\circ\\). How far is the bottom of the ladder from the base of the building?",
                  "answer": "\\(20\\cos75^\\circ\\approx5.18\\text{ ft}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Uzma is standing 50 m from a hot air balloon that is preparing to take off. The angle of elevation to the top of the balloon is \\(28^\\circ\\). Find the height of the balloon.",
                  "answer": "\\(50\\tan28^\\circ\\approx26.59\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A man in a boat is 175 ft from the base of a 200 ft cliff. What is the angle of depression between the cliff top and the boat?",
                  "answer": "\\(\\tan\\theta=\\dfrac{200}{175}\\Rightarrow\\theta\\approx48.8^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A flagpole casts a shadow 40 ft long when the angle of elevation of the sun is \\(31^\\circ\\). How tall is the flagpole?",
                  "answer": "\\(40\\tan31^\\circ\\approx24.03\\text{ ft}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A straight waterslide is 175 ft above the ground and 200 ft long. What is the angle of depression to the bottom of the slide?",
                  "answer": "\\(\\sin\\theta=\\dfrac{175}{200}\\Rightarrow\\theta\\approx61^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Zain walks exactly 50 m from the base of a tree and finds that the angle from the ground to the top of the tree is \\(33^\\circ\\). How tall is the tree?",
                  "answer": "\\(50\\tan33^\\circ\\approx32.47\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "From a 100 m observation tower on the beach, a man sights a whale in difficulty. The angle of depression of the whale is \\(7^\\circ\\). How far is the whale from the shoreline?",
                  "answer": "\\(\\dfrac{100}{\\tan7^\\circ}\\approx814.4\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Urooba sits on the ground midway between two trees that are 100 m apart. The angles of elevation of the tops of the trees are \\(13^\\circ\\) and \\(18^\\circ\\). How much taller is one tree than the other?",
                  "answer": "\\(50\\tan18^\\circ-50\\tan13^\\circ\\approx16.25-11.54\\approx4.7\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The angle of elevation of the top T of a tree is \\(27^\\circ\\). From the same point on the ground, the angle of elevation of a hawk H flying directly above the tree is \\(43^\\circ\\). The tree is 12.7 m tall. How high is the hawk above the ground?",
                  "answer": "\\(d=\\dfrac{12.7}{\\tan27^\\circ}\\approx24.93\\text{ m};\\ \\ h=d\\tan43^\\circ\\approx23.24\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A falcon F is on a tree FG with a squirrel S and a chipmunk C on the ground (G is the foot of the tree). From the falcon, the angles of depression of the animals are \\(36^\\circ\\) (to S) and \\(47^\\circ\\) (to C). How far apart are the animals on the ground? (The height label of the tree is cut off in the source figure; the tree is taken as \\(FG=12.7\\) m, as in the previous question.)",
                  "answer": "\\(GS=\\dfrac{12.7}{\\tan36^\\circ}\\approx17.48,\\ \\ GC=\\dfrac{12.7}{\\tan47^\\circ}\\approx11.84;\\ \\ SC=GS-GC\\approx5.64\\text{ m}\\) (in general \\(SC=FG(\\cot36^\\circ-\\cot47^\\circ)\\)).",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"206\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Two guy wires support a flagpole FH. The first wire (to G) is 11.2 m long and has an angle of elevation of \\(39^\\circ\\). The second wire (to the top F) has an angle of elevation of \\(47^\\circ\\). How tall is the flagpole?",
                  "answer": "\\(\\text{Distance of the wires\\' base from H}=11.2\\cos39^\\circ\\approx8.7\\text{ m};\\ \\ FH=8.7\\tan47^\\circ\\approx9.33\\text{ m}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"159\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 8.3",
          "questions": [
            {
              "stem": "Use the Law of Cosines to find the remaining side(s) and angle(s) in triangle ABC.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(a=7,\\ b=12,\\ \\gamma=58.5^\\circ\\)",
                  "answer": "\\(a=7,\\ b=12,\\ c=10.26,\\ \\alpha=35.6^\\circ,\\ \\beta=85.9^\\circ,\\ \\gamma=58.5^\\circ\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(b=20,\\ c=15,\\ \\alpha=36^\\circ\\)",
                  "answer": "\\(a=11.81,\\ b=20,\\ c=15,\\ \\alpha=36^\\circ,\\ \\beta=95.7^\\circ,\\ \\gamma=48.3^\\circ\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(a=150,\\ c=150,\\ \\beta=15^\\circ\\)",
                  "answer": "\\(a=150,\\ b=39.16,\\ c=150,\\ \\alpha=82.5^\\circ,\\ \\beta=15^\\circ,\\ \\gamma=82.5^\\circ\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\beta=45^\\circ,\\ a=30,\\ c=42\\)",
                  "answer": "\\(a=30,\\ b=29.7,\\ c=42,\\ \\alpha=45.6^\\circ,\\ \\beta=45^\\circ,\\ \\gamma=89.4^\\circ\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(a=7,\\ b=10,\\ c=12\\)",
                  "answer": "\\(\\alpha=35.7^\\circ,\\ \\beta=56.4^\\circ,\\ \\gamma=88^\\circ\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(a=3,\\ b=3,\\ c=5\\)",
                  "answer": "\\(\\alpha=33.6^\\circ,\\ \\beta=33.6^\\circ,\\ \\gamma=112.9^\\circ\\)"
                },
                {
                  "label": "(vii)",
                  "text": "\\(a=30,\\ b=45,\\ c=50\\)",
                  "answer": "\\(\\alpha=36.3^\\circ,\\ \\beta=62.7^\\circ,\\ \\gamma=80.9^\\circ\\)"
                },
                {
                  "label": "(viii)",
                  "text": "\\(a=6,\\ b=6,\\ c=6\\)",
                  "answer": "\\(\\alpha=60^\\circ,\\ \\beta=60^\\circ,\\ \\gamma=60^\\circ\\)"
                },
                {
                  "label": "(ix)",
                  "text": "\\(a=5,\\ b=12,\\ c=13\\)",
                  "answer": "\\(\\alpha=22.6^\\circ,\\ \\beta=67.4^\\circ,\\ \\gamma=90^\\circ\\)"
                }
              ]
            },
            {
              "stem": "Use the Law of Sines to solve triangle ABC.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(a=10,\\ \\alpha=40^\\circ,\\ \\beta=60^\\circ\\)",
                  "answer": "\\(a=10,\\ b=13.47,\\ c=15.32,\\ \\alpha=40^\\circ,\\ \\beta=60^\\circ,\\ \\gamma=80^\\circ\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(b=20,\\ \\alpha=50^\\circ,\\ \\beta=70^\\circ\\)",
                  "answer": "\\(a=16.3,\\ b=20,\\ c=18.43,\\ \\alpha=50^\\circ,\\ \\beta=70^\\circ,\\ \\gamma=60^\\circ\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(c=12,\\ \\alpha=45^\\circ,\\ \\beta=75^\\circ\\)",
                  "answer": "\\(a=9.8,\\ b=13.38,\\ c=12,\\ \\alpha=45^\\circ,\\ \\beta=75^\\circ,\\ \\gamma=60^\\circ\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(b=18,\\ \\beta=40^\\circ35',\\ \\gamma=120^\\circ\\)",
                  "answer": "\\(a=9.2,\\ b=18,\\ c=23.96,\\ \\alpha=19^\\circ 25^{\\prime},\\ \\beta=40^\\circ 35^{\\prime},\\ \\gamma=120^\\circ\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(a=14.6,\\ \\alpha=25^\\circ10',\\ \\beta=85.5^\\circ\\)",
                  "answer": "\\(a=14.6,\\ b=34.23,\\ c=32.12,\\ \\alpha=25^\\circ 10^{\\prime},\\ \\beta=85^\\circ 30^{\\prime},\\ \\gamma=69^\\circ 20^{\\prime}\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(c=52,\\ \\alpha=42.3^\\circ,\\ \\gamma=85^\\circ14'\\)",
                  "answer": "\\(a=35.12,\\ b=41.38,\\ c=52,\\ \\alpha=42^\\circ 18^{\\prime},\\ \\beta=52^\\circ 28^{\\prime},\\ \\gamma=85^\\circ 14^{\\prime}\\)"
                }
              ]
            },
            {
              "stem": "Solve by using the appropriate law (where possible).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(a=10,\\ b=8,\\ \\beta=80^\\circ\\)",
                  "answer": "\\(\\sin\\alpha=\\dfrac{10\\sin80^\\circ}{8}\\approx1.231>1\\): no such triangle exists."
                },
                {
                  "label": "(ii)",
                  "text": "\\(b=20,\\ c=14,\\ \\beta=70^\\circ\\)",
                  "answer": "\\(\\sin\\gamma=\\dfrac{14\\sin70^\\circ}{20}\\Rightarrow\\gamma\\approx41.1^\\circ,\\ \\alpha\\approx68.9^\\circ,\\ a\\approx19.85\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(c=12,\\ b=10,\\ \\gamma=64^\\circ\\)",
                  "answer": "\\(\\sin\\beta=\\dfrac{10\\sin64^\\circ}{12}\\Rightarrow\\beta\\approx48.5^\\circ,\\ \\alpha\\approx67.5^\\circ,\\ a\\approx12.33\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(b=18,\\ \\alpha=55^\\circ5',\\ a=37\\)",
                  "answer": "\\(\\sin\\beta=\\dfrac{18\\sin55^\\circ5^{\\prime}}{37}\\Rightarrow\\beta\\approx23.5^\\circ,\\ \\gamma\\approx101.4^\\circ,\\ c\\approx44.23\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(a=14.6,\\ b=10.6,\\ c=17.2\\)",
                  "answer": "\\(\\alpha=57.7^\\circ,\\ \\beta=37.8^\\circ,\\ \\gamma=84.5^\\circ\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(c=88,\\ \\beta=23.2^\\circ,\\ \\gamma=73^\\circ14'\\)",
                  "answer": "\\(\\alpha=83^\\circ 34^{\\prime},\\ a\\approx91.33,\\ b\\approx36.21\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A pilot flies from city A to city C, 500 km apart. He starts his flight \\(20^\\circ\\) off course and flies on this course for 150 km and is above city B. How far is he from city C?",
                  "answer": "\\(a^{2}=150^{2}+500^{2}-2(150)(500)\\cos20^\\circ\\Rightarrow a\\approx362.7\\text{ km}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"340\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Two sides of a triangular plot have lengths 400 m and 600 m. The angle between the sides is \\(45^\\circ\\). Find the perimeter and area of the plot.",
                  "answer": "\\(\\text{Third side}=\\sqrt{400^{2}+600^{2}-2(400)(600)\\cos45^\\circ}\\approx425\\text{ m};\\ \\text{perimeter}\\approx1425\\text{ m};\\ \\text{area}=\\tfrac12(400)(600)\\sin45^\\circ\\approx84853\\text{ m}^{2}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sides of a triangle are 6.5 cm, 8.2 cm and 5.8 cm. Find the measure of the smallest and largest angles.",
                  "answer": "\\(\\text{Smallest (opposite 5.8): }\\cos\\theta=\\dfrac{6.5^{2}+8.2^{2}-5.8^{2}}{2(6.5)(8.2)}\\Rightarrow\\theta\\approx44.6^\\circ;\\ \\ \\text{largest (opposite 8.2): }\\approx83.4^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sides of a parallelogram are 50 cm and 70 cm. Find the length of each diagonal if the larger angle measures \\(110^\\circ\\).",
                  "answer": "\\(\\text{Longer diagonal}^{2}=50^{2}+70^{2}-2(50)(70)\\cos110^\\circ\\Rightarrow\\approx98.97\\text{ cm};\\ \\ \\text{shorter diagonal}^{2}=50^{2}+70^{2}-2(50)(70)\\cos70^\\circ\\Rightarrow\\approx70.75\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the height of the building if the angles of elevation of its top from two points in line with its base, 150 ft apart, are \\(35^\\circ\\) (farther point) and \\(48^\\circ\\) (nearer point).",
                  "answer": "\\(\\text{Angle at the top}=48^\\circ-35^\\circ=13^\\circ;\\ \\ \\text{distance from nearer point to top}=\\dfrac{150\\sin35^\\circ}{\\sin13^\\circ};\\ \\ h=\\dfrac{150\\sin35^\\circ\\sin48^\\circ}{\\sin13^\\circ}\\approx284.2\\text{ ft}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"284\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Fire towers A and B are 10 miles apart at the same level of ground. Rangers at A spot a fire at \\(42^\\circ\\) and rangers at B spot the same fire at \\(64^\\circ\\) (angles measured from the line AB). How far from tower A is the fire, to the nearest tenth of a mile?",
                  "answer": "\\(\\text{Angle at the fire}=180^\\circ-42^\\circ-64^\\circ=74^\\circ;\\ \\ AF=\\dfrac{10\\sin64^\\circ}{\\sin74^\\circ}\\approx9.4\\text{ miles}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"335\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Circle O has a radius of 15 cm. The angle between radii OA and OB is \\(120^\\circ\\). Find the length of chord AB.",
                  "answer": "\\(AB^{2}=15^{2}+15^{2}-2(15)(15)\\cos120^\\circ=675\\Rightarrow AB=15\\sqrt3\\approx25.98\\text{ cm}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"200\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Two lighthouses are 12 miles apart along a straight shore. A ship is 15 miles from one lighthouse and 20 miles from the other. Find, to the nearest degree, the angle between the lines of sight from the ship to each lighthouse.",
                  "answer": "\\(\\cos\\theta=\\dfrac{15^{2}+20^{2}-12^{2}}{2(15)(20)}=\\dfrac{481}{600}\\Rightarrow\\theta\\approx36.7^\\circ\\approx37^\\circ\\)"
                }
              ]
            },
            {
              "stem": "For the parallelogram ABCD (figure), find:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "BC, given the diagonal \\(BD=20\\) inch, \\(\\angle BDC=\\angle ABD=30^\\circ\\) and \\(\\angle C=100^\\circ\\).",
                  "answer": "\\(\\angle DBC=180^\\circ-30^\\circ-100^\\circ=50^\\circ;\\ \\ \\dfrac{BC}{\\sin30^\\circ}=\\dfrac{20}{\\sin100^\\circ}\\Rightarrow BC\\approx10.15\\text{ inch}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"440\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\angle BDC\\), given \\(BD=20\\) cm, \\(DC=15\\) cm and \\(\\angle C=120^\\circ\\).",
                  "answer": "\\(20^{2}=BC^{2}+15^{2}-2(15)BC\\cos120^\\circ\\Rightarrow BC^{2}+15BC-175=0\\Rightarrow BC\\approx7.71;\\ \\ \\sin\\angle BDC=\\dfrac{BC\\sin120^\\circ}{20}\\Rightarrow\\angle BDC\\approx19.5^\\circ\\)"
                }
              ]
            },
            {
              "stem": "For the figure below find:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "BC, where \\(ABD\\) is right-angled at B, C lies on BD with \\(\\angle ACB=40^\\circ\\), \\(\\angle D=20^\\circ\\) and \\(CD=15\\) m.",
                  "answer": "\\(\\angle CAD=40^\\circ-20^\\circ=20^\\circ=\\angle D\\Rightarrow AC=CD=15;\\ \\ BC=AC\\cos40^\\circ\\approx11.49\\text{ m}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"440\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\angle EDG\\), where \\(DE\\perp EG\\), \\(DF=20\\) cm, \\(DG=30\\) cm and \\(\\angle DFG=125^\\circ\\).",
                  "answer": "\\(\\sin G=\\dfrac{20\\sin125^\\circ}{30}\\Rightarrow\\angle G\\approx33.1^\\circ;\\ \\ \\angle EDG=90^\\circ-\\angle G\\approx56.9^\\circ\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 8.4",
          "questions": [
            {
              "stem": "Find the area of the triangular region ABC in the following.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(a=8,\\ b=14,\\ \\gamma=68.7^\\circ\\)",
                  "answer": "\\(\\tfrac12(8)(14)\\sin68.7^\\circ\\approx52.17\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(b=30,\\ c=25,\\ \\alpha=46^\\circ\\)",
                  "answer": "\\(\\tfrac12(30)(25)\\sin46^\\circ\\approx269.75\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(a=20,\\ c=15,\\ \\beta=25^\\circ\\)",
                  "answer": "\\(\\tfrac12(20)(15)\\sin25^\\circ\\approx63.39\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\beta=46^\\circ50',\\ a=43,\\ c=52\\)",
                  "answer": "\\(\\tfrac12(43)(52)\\sin46^\\circ50^{\\prime}\\approx815.43\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(a=2,\\ b=2,\\ c=5\\)",
                  "answer": "No triangle exists: \\(2+2<5\\) violates the triangle inequality."
                },
                {
                  "label": "(vii)",
                  "text": "\\(a=12,\\ \\alpha=44^\\circ,\\ \\beta=60^\\circ\\)",
                  "answer": "\\(\\gamma=76^\\circ;\\ \\Delta=\\dfrac{a^{2}\\sin\\beta\\sin\\gamma}{2\\sin\\alpha}\\approx87.1\\)"
                },
                {
                  "label": "(ix)",
                  "text": "\\(c=10,\\ \\alpha=75^\\circ,\\ \\beta=45^\\circ\\)",
                  "answer": "\\(\\gamma=60^\\circ;\\ \\Delta=\\dfrac{c^{2}\\sin\\alpha\\sin\\beta}{2\\sin\\gamma}\\approx39.43\\)"
                },
                {
                  "label": "(xiii)",
                  "text": "\\(18,\\ 21,\\ 32\\)",
                  "answer": "\\(s=35.5;\\ \\Delta=\\sqrt{s(s-a)(s-b)(s-c)}\\approx177.56\\)"
                },
                {
                  "label": "(xiv)",
                  "text": "\\(20,\\ 26,\\ 37\\)",
                  "answer": "\\(s=41.5;\\ \\Delta=\\sqrt{s(s-a)(s-b)(s-c)}\\approx249.47\\)"
                },
                {
                  "label": "(xvi)",
                  "text": "\\(12.4,\\ 13.7,\\ 20.2\\)",
                  "answer": "\\(s=23.15;\\ \\Delta=\\sqrt{s(s-a)(s-b)(s-c)}\\approx83.29\\)"
                },
                {
                  "label": "(xvii)",
                  "text": "\\(1.6,\\ 2.6,\\ 4.1\\)",
                  "answer": "\\(s=4.15;\\ \\Delta=\\sqrt{s(s-a)(s-b)(s-c)}\\approx0.91\\)"
                },
                {
                  "label": "(xv)",
                  "text": "\\(\\tfrac12,\\ \\tfrac13,\\ \\tfrac14\\)",
                  "answer": "\\(s=\\tfrac{13}{24};\\ \\Delta=\\sqrt{\\tfrac{13}{24}\\cdot\\tfrac{1}{24}\\cdot\\tfrac{5}{24}\\cdot\\tfrac{7}{24}}=\\dfrac{\\sqrt{455}}{576}\\approx0.037\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The adjacent sides of parallelogram ABCD measure 12 and 15. The measure of one angle of the parallelogram is \\(135^\\circ\\). Find the area of the parallelogram.",
                  "answer": "\\(\\text{Area}=ab\\sin\\theta=12(15)\\sin135^\\circ=90\\sqrt2\\approx127.28\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Three streets intersect in pairs enclosing a small triangular park. The distances between the intersections are 30 m, 34 m and 27 m. Find the area of the park.",
                  "answer": "\\(s=45.5;\\ \\text{Area}=\\sqrt{45.5(15.5)(11.5)(18.5)}\\approx387.4\\text{ m}^{2}\\)"
                }
              ]
            },
            {
              "stem": "A field is a parallelogram with adjacent sides 2 km and 3 km, and the shorter diagonal is 3 km.",
              "parts": [
                {
                  "label": "a.",
                  "text": "Find the cosine of the acute angle of the parallelogram.",
                  "answer": "\\(3^{2}=2^{2}+3^{2}-2(2)(3)\\cos\\theta\\Rightarrow\\cos\\theta=\\dfrac13\\)"
                },
                {
                  "label": "b.",
                  "text": "Find the exact value of the sine of the acute angle.",
                  "answer": "\\(\\sin\\theta=\\sqrt{1-\\dfrac19}=\\dfrac{2\\sqrt2}{3}\\)"
                },
                {
                  "label": "c.",
                  "text": "Find the exact area of the field.",
                  "answer": "\\(2(3)\\sin\\theta=6\\cdot\\dfrac{2\\sqrt2}{3}=4\\sqrt2\\text{ km}^{2}\\)"
                },
                {
                  "label": "d.",
                  "text": "Find the area to the nearest integer.",
                  "answer": "\\(4\\sqrt2\\approx5.66\\approx6\\text{ km}^{2}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The roof of a shed consists of four congruent isosceles triangles. The length of each equal side of one triangular section is 22.0 ft and the vertex angle of each triangle is \\(75^\\circ\\). Find the area of one triangular section.",
                  "answer": "\\(\\tfrac12(22)(22)\\sin75^\\circ\\approx233.8\\text{ ft}^{2}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "An isosceles trapezoid garden has parallel sides of 30 ft and 20 ft, and each of the other two sides is 10 ft. If a base angle measures \\(60^\\circ\\), find the exact area of the garden.",
                  "answer": "\\(h=10\\sin60^\\circ=5\\sqrt3;\\ \\text{Area}=\\tfrac12(30+20)(5\\sqrt3)=125\\sqrt3\\approx216.5\\text{ ft}^{2}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "In triangle ABC, \\(\\angle B=30^\\circ\\) and in triangle DEF, \\(\\angle E=150^\\circ\\). Show that if \\(AB=DE\\) and \\(BC=EF\\), the areas of the two triangles are equal.",
                  "answer": "\\(\\text{Area}(ABC)=\\tfrac12AB\\cdot BC\\sin30^\\circ,\\ \\ \\text{Area}(DEF)=\\tfrac12DE\\cdot EF\\sin150^\\circ.\\ \\ \\text{Since }\\sin150^\\circ=\\sin30^\\circ=\\tfrac12,\\ AB=DE,\\ BC=EF,\\ \\text{the areas are equal.}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The area of a triangular garden is 150 m². If the two corner angles at the ends of a side measure \\(40^\\circ\\) and \\(65^\\circ\\), find the length of that side. Also find the third angle.",
                  "answer": "\\(\\text{Third angle}=180^\\circ-40^\\circ-65^\\circ=75^\\circ;\\ \\ \\Delta=\\dfrac{a^{2}\\sin40^\\circ\\sin65^\\circ}{2\\sin75^\\circ}=150\\Rightarrow a\\approx22.3\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "An equilateral triangle is inscribed in a circle of radius 6 cm. Find the area of the triangle.",
                  "answer": "\\(\\text{Side}=R\\sqrt3=6\\sqrt3;\\ \\text{Area}=\\dfrac{\\sqrt3}{4}(6\\sqrt3)^{2}=27\\sqrt3\\approx46.77\\text{ cm}^{2}\\)"
                }
              ]
            },
            {
              "stem": "Laiba wants to draw triangle ABC with \\(AB=15\\) cm, \\(BC=8\\) cm and an area of 40 cm².",
              "parts": [
                {
                  "label": "a.",
                  "text": "What must be the sine of \\(\\angle B\\)?",
                  "answer": "\\(40=\\tfrac12(15)(8)\\sin B=60\\sin B\\Rightarrow\\sin B=\\dfrac23\\)"
                },
                {
                  "label": "b.",
                  "text": "Find the measure of \\(\\angle B\\).",
                  "answer": "\\(B=\\sin^{-1}\\dfrac23\\approx41.8^\\circ\\ \\ (\\text{or }138.2^\\circ)\\)"
                }
              ]
            },
            {
              "stem": "Let ABCD be a parallelogram with \\(AB=c\\), \\(BC=a\\) and \\(\\angle B=\\theta\\).",
              "parts": [
                {
                  "label": "a.",
                  "text": "Write a formula for the area of the parallelogram in terms of \\(c\\), \\(a\\) and \\(\\theta\\).",
                  "answer": "\\(\\text{Area}=ca\\sin\\theta\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"240\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "b.",
                  "text": "For what value of \\(\\theta\\) does the parallelogram have the greatest area?",
                  "answer": "\\(\\sin\\theta\\text{ is greatest (}=1\\text{) when }\\theta=90^\\circ\\) (a rectangle)."
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 8.5",
          "questions": [
            {
              "stem": "Find \\(r,\\ R,\\ r_1,\\ r_2\\) and \\(r_3\\) when:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(a=10,\\ b=13,\\ c=17\\)",
                  "answer": "\\(s=20,\\ \\Delta=64.81;\\ r=3.24,\\ R=8.53,\\ r_1=6.48,\\ r_2=9.26,\\ r_3=21.6\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(a=22,\\ b=24,\\ c=30\\)",
                  "answer": "\\(s=38,\\ \\Delta=260.95;\\ r=6.87,\\ R=15.18,\\ r_1=16.31,\\ r_2=18.64,\\ r_3=32.62\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(a=3,\\ b=4,\\ c=5\\)",
                  "answer": "\\(s=6,\\ \\Delta=6;\\ r=1,\\ R=2.5,\\ r_1=2,\\ r_2=3,\\ r_3=6\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(a=50,\\ b=60,\\ c=70\\)",
                  "answer": "\\(s=90,\\ \\Delta=1469.69;\\ r=16.33,\\ R=35.72,\\ r_1=36.74,\\ r_2=48.99,\\ r_3=73.48\\)"
                }
              ]
            },
            {
              "stem": "If ABC is an equilateral triangle (side \\(a\\)), prove that:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(r:R:r_1=1:2:3\\)",
                  "answer": "\\(s=\\tfrac{3a}{2},\\ \\Delta=\\tfrac{\\sqrt3}{4}a^{2}:\\ r=\\dfrac{\\Delta}{s}=\\dfrac{a}{2\\sqrt3},\\ R=\\dfrac{abc}{4\\Delta}=\\dfrac{a}{\\sqrt3},\\ r_1=\\dfrac{\\Delta}{s-a}=\\dfrac{\\sqrt3a}{2}.\\ \\text{Dividing by }\\dfrac{a}{2\\sqrt3}:\\ 1:2:3.\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(r_1:r_2:r_3=1:1:1\\)",
                  "answer": "\\(r_1=\\dfrac{\\Delta}{s-a},\\ r_2=\\dfrac{\\Delta}{s-b},\\ r_3=\\dfrac{\\Delta}{s-c}\\text{ and }s-a=s-b=s-c=\\tfrac a2,\\ \\text{so }r_1=r_2=r_3=\\dfrac{\\sqrt3a}{2}.\\)"
                }
              ]
            },
            {
              "stem": "Show that:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(\\dfrac1{ab}+\\dfrac1{bc}+\\dfrac1{ca}=\\dfrac{2s}{abc}=\\dfrac1{2Rr}\\)",
                  "answer": "\\(\\text{LHS}=\\dfrac{c+a+b}{abc}=\\dfrac{2s}{abc}.\\ \\text{Using }abc=4R\\Delta=4Rrs:\\ \\dfrac{2s}{4Rrs}=\\dfrac{1}{2Rr}.\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(\\dfrac1{r_1}+\\dfrac1{r_2}+\\dfrac1{r_3}=\\dfrac s\\Delta\\)",
                  "answer": "\\(\\dfrac{s-a}{\\Delta}+\\dfrac{s-b}{\\Delta}+\\dfrac{s-c}{\\Delta}=\\dfrac{3s-2s}{\\Delta}=\\dfrac s\\Delta.\\)"
                },
                {
                  "label": "(iii)",
                  "text": "\\(r_1r_2+r_2r_3+r_1r_3=s^{2}\\)",
                  "answer": "\\(\\Delta^{2}\\cdot\\dfrac{(s-c)+(s-a)+(s-b)}{(s-a)(s-b)(s-c)}=\\dfrac{\\Delta^{2}s}{\\Delta^{2}/s}=s^{2}\\ \\ (\\text{since }\\Delta^{2}=s(s-a)(s-b)(s-c)).\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(\\sqrt{r\\,r_1r_2r_3}=\\Delta\\)",
                  "answer": "\\(r\\,r_1r_2r_3=\\dfrac{\\Delta^{4}}{s(s-a)(s-b)(s-c)}=\\dfrac{\\Delta^{4}}{\\Delta^{2}}=\\Delta^{2}.\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(r_1r_2r_3=rs^{2}\\)",
                  "answer": "\\(r_1r_2r_3=\\dfrac{\\Delta^{3}}{(s-a)(s-b)(s-c)}=\\dfrac{\\Delta^{3}s}{\\Delta^{2}}=\\Delta s=(rs)s=rs^{2}.\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Show that \\(R(\\sin\\alpha+\\sin\\beta+\\sin\\gamma)=s\\).",
                  "answer": "\\(\\sin\\alpha=\\dfrac{a}{2R}\\text{ etc. (law of sines)}\\Rightarrow R\\cdot\\dfrac{a+b+c}{2R}=\\dfrac{a+b+c}{2}=s.\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the radius of the in-circle and circum-circle of a triangle having sides 7 cm, 12 cm and 15 cm.",
                  "answer": "\\(s=17,\\ \\Delta=\\sqrt{17\\cdot10\\cdot5\\cdot2}=\\sqrt{1700}\\approx41.23;\\ \\ r=\\dfrac{\\Delta}{s}\\approx2.43\\text{ cm},\\ \\ R=\\dfrac{abc}{4\\Delta}\\approx7.64\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": "The sides of a triangle are 5 cm, 9 cm, 10 cm. Find the circumference of the ex-circle:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "opposite to the smaller side.",
                  "answer": "\\(s=12,\\ \\Delta=\\sqrt{504}\\approx22.45;\\ \\ r_1=\\dfrac{\\Delta}{s-5}\\approx3.21;\\ \\ \\text{circumference}=2\\pi r_1\\approx20.2\\text{ cm}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "opposite to the larger side.",
                  "answer": "\\(r_3=\\dfrac{\\Delta}{s-10}\\approx11.22;\\ \\ \\text{circumference}=2\\pi r_3\\approx70.5\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the area and circumference of the in-circle of a triangle having sides 2.5 cm, 7.3 cm and 6.2 cm.",
                  "answer": "\\(s=8,\\ \\Delta=\\sqrt{8(5.5)(0.7)(1.8)}\\approx7.446;\\ \\ r=\\dfrac{\\Delta}{s}\\approx0.931;\\ \\ \\text{area}=\\pi r^{2}\\approx2.72\\text{ cm}^{2},\\ \\ \\text{circumference}=2\\pi r\\approx5.85\\text{ cm}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Ex 8.6",
          "questions": [
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "ABCDEFGH is a cuboid with \\(DC=24\\) cm, \\(CG=8\\) cm and \\(\\angle FHG=30^\\circ\\). Calculate CF.",
                  "answer": "\\(FG=HG\\tan30^\\circ=\\dfrac{24}{\\sqrt3}=8\\sqrt3;\\ \\ CF=\\sqrt{CG^{2}+FG^{2}}=\\sqrt{64+192}=16\\text{ cm}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"330\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": "Three workers stand at positions B, D and H of a cuboid-shaped container with base \\(12\\text{ cm}\\times16\\text{ cm}\\) (AB = 12, BC = 16) and height 15 cm.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "Find the distance between the workers at B and D.",
                  "answer": "\\(BD=\\sqrt{12^{2}+16^{2}}=20\\text{ cm}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"330\" style=\"max-width:100%;height:auto;\">"
                },
                {
                  "label": "(ii)",
                  "text": "Find the distance between the workers at B and H.",
                  "answer": "\\(BH=\\sqrt{20^{2}+15^{2}}=25\\text{ cm}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "Find \\(\\angle DBH\\).",
                  "answer": "\\(\\tan\\angle DBH=\\dfrac{DH}{BD}=\\dfrac{15}{20}\\Rightarrow\\angle DBH\\approx36.9^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "O is the centre of the square base of the pyramid ABCDE, whose base side is 4 cm and whose height OA is 6 cm. Calculate the angle between the edge AB and the plane of the base.",
                  "answer": "\\(OB=\\tfrac12(4\\sqrt2)=2\\sqrt2;\\ \\ \\tan\\theta=\\dfrac{OA}{OB}=\\dfrac{6}{2\\sqrt2}\\Rightarrow\\theta\\approx64.8^\\circ\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"250\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": "The floor of a room is 9 m long and 6 m wide. The angle of elevation from the bottom left corner to the top right corner of the room is \\(49^\\circ\\).",
              "parts": [
                {
                  "label": "(i)",
                  "text": "Find the distance from one corner of the floor to the opposite corner.",
                  "answer": "\\(\\sqrt{9^{2}+6^{2}}=\\sqrt{117}\\approx10.82\\text{ m}\\)"
                },
                {
                  "label": "(ii)",
                  "text": "Find the height of the room.",
                  "answer": "\\(h=\\sqrt{117}\\tan49^\\circ\\approx12.44\\text{ m}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "Find the angle of elevation from the bottom corner of the 9 m long wall to the opposite top corner of that wall.",
                  "answer": "\\(\\tan\\theta=\\dfrac{12.44}{9}\\Rightarrow\\theta\\approx54.1^\\circ\\)"
                },
                {
                  "label": "(iv)",
                  "text": "Find the angle of depression from the top corner of the 6 m long wall to the opposite bottom corner of that wall.",
                  "answer": "\\(\\tan\\theta=\\dfrac{12.44}{6}\\Rightarrow\\theta\\approx64.3^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the angle ACF in the cuboid of the figure (\\(AD=9\\) cm, \\(DC=12\\) cm, \\(CG=10\\) cm; A above D and F above G).",
                  "answer": "\\(AC=\\sqrt{12^{2}+9^{2}}=15,\\ CF=\\sqrt{10^{2}+9^{2}}=\\sqrt{181},\\ AF=\\sqrt{12^{2}+10^{2}}=\\sqrt{244};\\ \\ \\cos\\angle ACF=\\dfrac{15^{2}+181-244}{2(15)\\sqrt{181}}\\Rightarrow\\angle ACF\\approx66.3^\\circ\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"330\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "In the figure, the perimeter of the square base of a pyramid is 36 cm and \\(\\angle OAE=45^\\circ\\) (O the centre of the base, E a vertex of the base). Find the length of the diagonal of the base and the height of the pyramid.",
                  "answer": "\\(\\text{Side}=\\dfrac{36}{4}=9;\\ \\ \\text{diagonal}=9\\sqrt2\\approx12.73\\text{ cm};\\ \\ OE=\\dfrac{9\\sqrt2}{2};\\ \\ \\angle OAE=45^\\circ\\Rightarrow\\text{height }OA=OE\\approx6.36\\text{ cm}\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"300\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The diagram shows a cylinder of height 30 cm and base radius 10 cm (A the centre of the base, B on the rim, \\(\\angle C'AB=120^\\circ\\) where \\(C'\\) is the rim point below C). Find the value of \\(\\gamma\\) in triangle ABC.",
                  "answer": "\\(AB=10,\\ AC=\\sqrt{10^{2}+30^{2}}\\approx31.62,\\ C\\'B=2(10)\\sin60^\\circ\\approx17.32,\\ BC=\\sqrt{17.32^{2}+30^{2}}\\approx34.64;\\ \\ \\cos\\gamma=\\dfrac{AC^{2}+BC^{2}-AB^{2}}{2(AC)(BC)}\\Rightarrow\\gamma\\approx16.6^\\circ\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"250\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": "Three satellites A, B and C used for GPS navigation orbit the Earth in the same plane. The distance between satellites A and B is 15 km. D is a house on Earth such that \\(\\angle BAD=70^\\circ\\) and ACBD is a rhombus (AB and CD are its diagonals). Then:",
              "parts": [
                {
                  "label": "(i)",
                  "text": "Determine the distance between satellites A and C.",
                  "answer": "\\(\\text{In }\\triangle ABD:\\ AD=BD,\\ \\angle ABD=\\angle BAD=70^\\circ,\\ \\angle ADB=40^\\circ;\\ AD=\\dfrac{15\\sin70^\\circ}{\\sin40^\\circ}\\approx21.93\\text{ km}=AC\\)"
                },
                {
                  "label": "(ii)",
                  "text": "Determine the distance between satellites B and C.",
                  "answer": "\\(BC=AC\\approx21.93\\text{ km (sides of a rhombus)}\\)"
                },
                {
                  "label": "(iii)",
                  "text": "Find the distance from satellite C to the house D.",
                  "answer": "\\(\\text{Diagonals bisect at right angles: }\\tfrac12CD=7.5\\tan70^\\circ\\Rightarrow CD=15\\tan70^\\circ\\approx41.2\\text{ km}\\)"
                }
              ]
            }
          ]
        },
        {
          "exercise": "Misc Ex 8 (Review Exercise 8 — non-MCQ)",
          "questions": [
            {
              "stem": "Solve the following oblique triangles.",
              "parts": [
                {
                  "label": "(i)",
                  "text": "\\(a=8,\\ \\alpha=15^\\circ,\\ \\beta=20^\\circ\\)",
                  "answer": "\\(\\gamma=145^\\circ,\\ b\\approx10.57,\\ c\\approx17.73\\)"
                },
                {
                  "label": "(ii)",
                  "text": "\\(a=34,\\ b=41,\\ \\alpha=115^\\circ\\)",
                  "answer": "\\(\\sin\\beta=\\dfrac{41\\sin115^\\circ}{34}\\approx1.093>1\\): no triangle exists."
                },
                {
                  "label": "(iii)",
                  "text": "\\(b=17.3,\\ c=14.5,\\ \\beta=98.2^\\circ\\)",
                  "answer": "\\(\\gamma\\approx56.1^\\circ,\\ \\alpha\\approx25.7^\\circ,\\ a\\approx7.59\\)"
                },
                {
                  "label": "(iv)",
                  "text": "\\(c=55.4,\\ \\alpha=115^\\circ,\\ \\beta=45^\\circ\\)",
                  "answer": "\\(\\gamma=20^\\circ,\\ a\\approx146.8,\\ b\\approx114.5\\)"
                },
                {
                  "label": "(v)",
                  "text": "\\(a=34,\\ c=48,\\ \\beta=108^\\circ\\)",
                  "answer": "\\(b\\approx66.85,\\ \\alpha\\approx28.9^\\circ,\\ \\gamma\\approx43.1^\\circ\\)"
                },
                {
                  "label": "(vi)",
                  "text": "\\(a=44,\\ b=33,\\ c=55\\)",
                  "answer": "\\(\\alpha\\approx53.1^\\circ,\\ \\beta\\approx36.9^\\circ,\\ \\gamma\\approx90^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The diagonals of a parallelogram measure 12 cm and 22 cm and intersect at an angle of \\(143^\\circ\\). Find the length of the longer side of the parallelogram.",
                  "answer": "\\(\\text{Half-diagonals }6\\text{ and }11:\\ \\text{longer side}^{2}=6^{2}+11^{2}-2(6)(11)\\cos143^\\circ\\Rightarrow\\approx16.2\\text{ cm}\\)",
                  "diagram": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAC+CAAAAADv65f+AAAVD0lEQVR42u1dPWgjW5b+ZvYJKhHcQIIKSnCDElZQzVZQjb2gYRRo8VswrAOD38KD18FAM9G+rJloXjK86WDgJcO+Dh500mw7aFBith0YKhFbDgQnEVwHgpMIbiI4ieAmYjeQbMt2lf6m3W2LV9At2/Ujffece+453zn36Df/BwA4+0H/N3DJ+9jK47fTF635DbCzpSCvUO7E8sMfL7Ctxz/9MH1tloRoWK1sN0okdcXE1WArUX51/dPuruoQ7W7zvMQFgJex8FZbnzc/nQDQartRiqQnuCAl/3a2jSh/M/UKcKZ3gAuijtateHdbUc6ON99DqVi3tsw9+Or2rwoQYZWm24XzLkolSomQUOdwf2s1Fv/CKhZmADrengl6R5bQomJwRwAWUi39citRKqjW7qXqMJQGp+jE2zBDr/3Y2THuuFZYaY/FeireUzYz1BuWK9uG8r2LE6A58Vj8uOFrx4a5Xwq2CmXwQdQBgGRijcVeI/Yhhh0PR+EWocQHp2oBgKjqxIj378mzhnIZZXQ+ibYHZd+4RgQA4dHYkvTL/xwdPIs9sZT2euVgS1COUttozviDshXicoggqWmlnDVpbxxtBcro784/uPq57ozhcQIESd2HWLHcH42Dp48Sp04dXduisljmURNAJTqoac+SydLBJHzyKLuk6tfSCg7GlrhfrwBA2Cz7CpYNDUbRE0fZN6KTm1+bE2sNz+xr2DyqKc/ZlPrDSfCUUY4Nq4O535MaHJnRzCIhbFd9n11mqP90FPc+yvCU1Le3/nAwEZMNSleYwmY99j02hnpPRaD3UaKX6W9v/yUZi7X2xiuoRO2q8qxYYwbj8ImiJK9256MnJWcznsxN17BdVQAT0VNYQnNQDg3Hyd1VtCZi7KCNWzg1PGE2vWHy9FDeNT+zJaVkyfRG83jC5GiiIEzm3aBWeWIog16qvr1/ZVJzZG9pLYDkoBZ7jh1/fNQCzUGJXqr+kHNpWPbZ8vWSciPQqmY4NueDYfSEUPYz+V3eChG2h8h4eC8wiWp+A9ay4ce6hOahHGQ2zle/dtUZpvHdk5WkWVPOieXscVrcPJRjYv8g//KwLJZu29rZZG5WPXiWifqPEGceyqBLeeZnCrMGR1k/hzcI289jKDCl5/3HFm3noUSf3POizxm0yzBGSjkCq4QHVV85ZynrjUuVR48ytYfFZiSqQdjctbVXPm4t9uGRUNothY8b5eQjdLP4nuBgyIbH+exlELVLnsfi2AwfjY+bizJ4x/pg0V1lJdZIUalF1K434Kw1jwZnLkr0SD1fNK+CZtkS20LuMkhqngdr0qz/KFyifJTDj9hbLIWoDsPZuLBAKGge1ZRzlkz3EQRn+ShHH128RAZBHSzGtYuvCNs15UE44y++suSjDH9xur3kzkp77BnulhcIKhwprT1rOT0ffdGMUj5KvJNpHmHh0Zw4O6Vr7x6vu00AuEgbey3fc85Y/qKZlgKU57xsYgJAVLZs7P3Y8uItlSMAp2/1cSU6KEOLNfQFLe5X+X/WWKmMa1/plFhe3M3MK9IAoFkA4Pj4goiISXd0a/cRyXJAEjdXuD1oT5wRHt3W2uDcvqgAGKV7zdnKUlc+hNnQFxFogSxfdohXe8BLpSgl/jH3pMjVTzs7OEmFJCXdaR0/Elmia/zaauY/euZZy/1bjtA7+2cAGL6P5yx1dPDMVxAx5vxzL6EFsoQC84pTaOeV6lBHWi/n757J8s6VOxdEzMykKd5/BCi1Eln5IS9VJ+3Ma61SBVfu7uKMiJn4sypukcZO2KiDlZ8S1ZywGVxr7QfzrxUA/WyvmROclTVgDWfdQfMLy3JXg9d4zO7u6zR9y99P1fByuoJA8vVhHy0iYmZKW59nZSmSJc5TVVvHRDSrzlqaxtaD1FMJgNOsIICrRO1qwxeWLPss1USFKAcZGmsFTeEzsOF+KQSCavwdAJQW+PxhUtUNOEPGjB48c1aIckTOb6/1qEp7DGFXCoEwmpEKi8YpSNpj31POUDp64KqpQpQTMvpgzYc1x84YGa2uAkm75Dknkj2wj1uIsnKeFdKVxZ964sTQeI3NN1H7uQ+xTA9a7leIEt0Mz9fWo+hobA1xbY0bK8nRc0CYMuo/VOasGOUgc3sbsOTNibO0jtYCCA5qWnnMhvoPU3xSjHJEsrcJM5WUnDN3M4BLDXSzrJQnxnL3IeiwYpThB+MfbPLIaCJizHBNrids1jynHDE/gC9fjBKnZn3zM/P3YNnKutx60KwqBWFrP3mRzQKUg1SebfZmQbtkDXNp3TkWNuva95xhQ6NPKs8FKIdk9zadI0lZrOHR2t54JWrXteccp1l3lHwOlKWMG+1NnxuVPLFmvIFPEyS12HfOcXr+yRR3AcrKqfGKJubZ+TLeMToosSG7oED6snI5KEoo1WJlLRv6RDzuApToGVfPx/InVscraa3wsEBrT7r07j2XBh9yHaWwbOErJYayT+H7fbXgnEYBX/CGdWuFZx/HnU7Kkrsh5WJKhqoiQmIHWoNJmEh34pcPKMvkF9fIk8TFz16sV1GkSnNiTT77HkRhODB734XN/Aed8I9J0q77EMdkuoN/bF/6IllC59OVKYmkov9rJUYoTVOh73dyz0oRPYTXrKcUhCYhZk7/MVZhkSzRJ6+aMyn+Yv/6jc/v66ssh1HdWWtdrrHsZUXM9uVf7d5kOAyAsNmueh6czbKldaqv/96bDD7klVYtlKVSuXkEUWp3Vzq0Ege386PucIcl52IpvCmFbjGz7APA/v4ZEzFzqluL+M0LpsP9M6L4vuL8FpuYHwXEalV1efkiRvr2zToaxtA7++D0ig57eXj4oqXBP/30p+J927vQGvuaflpTlsdvcyemThlg6FU/87F+Synz4b2cUSFtq5UG4vRmiPf3cUbEIKY0LtChCxHehVrb+kBTnixbAkBa8cqi2QV16C2/uKNuxby2CN8bhP39C+oIp6nuxK8KFAy4JBWvaX1u77q4WWGGZtiTvTVSAEFSFea7HsI7Kkp4l6zfRM/dSaEGyfNYK8+y/SWv3G/w0eruz96L79aWpcrtufFqfVu+v/+6Qyy3tFbFulD4crkDfW8cd3b2L4iJhdNO6/5pJZA8US6R5ci4vU8VGTQnsNktv7as9wpLTMJRJYwKnHlf+57Ye7zfMHXff9dzKloXZXiabcYX5A4Zs7VmcMMhBNECh2YwLjpZGXrinHXWmH5vLujpGxxWSmRziq0WayzilN7Eage4nC5vcuWwqKufZTrt5WYRVLecG1EiWqYWRSkhYa2gRMn0wtm9avpPoCBQIK1YKVY3C6sSqKv/RUigREQIdHg8Z8x4Z5/St7vrogToJ30FL9czm6GSGzM3+00JADUdiLm/s8xumn5gqHnnQE8Nr5reJLNHXA/D9ZCqqwGXFHp37uFAi/nNyzVRHlLKfG2ob970Gui1QK/PXKNVEIhSavbJ1RWK6VOUghI9Hb3pOLGKlUAYMj09u0ddD5qCno3X9ZiS3JjHGBIDuyC9rix3WjJdMpVWWl03xlHX4pHrwb7zAURBJJU4VgBrQCklAISZWbTWWl+LZCokStVhLNNREOiZMkApyEyTbqaKzN5NdMp0bZh3519WQPmnWCnROwBe6pRYBICO125FccEcv9gBcKFufMsL6hBrpe96MK+h1+91cSIsm8YkZ2+Nx9n7YRNA2K42tCfiPId12YlgmL74PQAElfmloOQh81p3o5Qub5CCjwZsq9FmKEfv1WGDM57uKgmTdt2HY2vtZLQeW1X6mJfAjKrOE74bGL9zhxtQH+PM6PZmKMfv9atgksn1KAXNqgeh7GM2WIsyD/6SW5ww3GuArL2V+znpeH/eYBEOz4spuKWy9I8w+uhaN7oQtr+tKsCmnfN1uuadT8v4/9idDs7rbhO46Ha8hjClZp4qOTV7G9GigwU7CRajHLxVzyun5P94h3usOd+DUNatr4qzRHwE4J34EYCzn+23QDA0cjyBtcI3OejL9/hmI65umHG81An9Kj+IFd5Rh/q+y32ZdkhEvl+1U8xxJz05vi47TAUXu8A+AUrFIiSMmVlNWW9W5qTVCsUsReulINfg7ey00pRYmNI43lnhQxxy5xjQrAFcqtm4icaOKMXEKWYwU/ViM+94N16hYjBXY7sd/5siXa8kRyWlhMnQKrx3dE6lBOdmL8QZw7rDCnBivCaCqLwHj800SnnTif9zwyCgn3pLS3by52W68D2Tg2pDWWOyVTJwEzbjpIuvK/gb+0StECi9p1oIBEF7DCaeJDj52X+xKYM+TOE3N9TYJTExLuKUOKV0adXgMXc6U+qjxTIlQXZab6+IL42U3hJYfb9x8aHWzBtp7KlpLIsqg6SmACcmW5Y6bg6MEa0DRM2xxdchgC4OZ7oe1nxhY7nxalOQCM4Jz4INUDbrXy+fcUGzHvsQS2wX42yPTObpCEDY91uVs/Oebf3+5ikDEkDXNi9rGmWIo0249XCl9TCI2lXf86xw2luUXq+K8Vw1AFCNdzDy1LyWX2QWEKc2r94akV1WZbaYEVnuYDWfad9Za82CjjiV9sQZM4mASgUIwnDuwotO1mjFbnGmc5mTx6iGD4lyliMXoYy4uGqwOTGZHd4X19mHDje+edkuizGycb/lQeaWWNl/GOWUJ/UdhCkt7IgTVVky7t0+ffbh40f39Y8hEJVgrd203/IwkyUc3N0OjpseF5ymrKB1XJSBO0tTQMVaT6N9IRKF1hVBe5ampOMXG60nFz+w/p/PghLAScoEqLgQ5wnRFR8EARDHrTkKodMRxC8KA+mL3duv88d/pPp/H1xjr2OW0rSVEw/yDWbUrmvteZ5zytON+OvD/XkKoeY5RzIuiC9ep6UQwOXfTI457dGSuuyv8AmP4+PLlIjTNNX57MaMeZqngW4CgVeaOiRymBsEMLWmLyqPNVaS7n8mWU59+YOy58SwWVTuGuSfiWrWMNvcpbfLexGASYajHG6DxH37GVFOg+3YOUMZDdftK1KpepbJ5NVjnk9RVs5dDsqgS97vKp8VJRAm1YbnnF2/11rQLjm2dnR/5TyXVgjg8qPkCW1Izk8+17yci1liIhJ+q9M1WdyXOu6Q5JGWasFd8ZKNlA8hy6mnUNcKnqSGe4N1eNywrEDs7pYaDkwcAqj8gjxZBqeLmbyHkeWUPDm+fMvCrFQar7F3bXdXgUjk1T1+Z4FEteKz/c8vy5mbXmv4EGvYjuaqEy+WOHJJyVjDw1t0bc/sBQAuPnpH+YSBW9Qt40FRAkFSh+dZsSldB2cntCzKimrKsrlVLN3jRgig/zFXYzHJWB19CY29XuwvhFNiEp7VsOiFhmRqvbRKqSNzpVAyTaZJQfHMrl7I5D2wLAEgCJNnvucLkzkfjcLFifYrXW+WHAvfBGvN2j4AlPyCrfcDWlR+/hlQAqgkNeU5YWOpu2Irp6gMJnLXwVgwi2YLoIzTRYTB50EJBMlB2YMTQ7ziVqewCsdsVizxD08F335xlACiuvaVA5PJVipID9oTy7xqiX/X2GKVfWCUF905NqgStWtaKTDb1XqtJWUl5s72+ULCgBZs9nxglH9/f7trTJAcVH1AmFbqsxtV4cxqu8YmZIvTtQ+M8pfUP7pH+9W1UhBDKyQggnZZhHmF3HBwyqgHXwblB9vK6Z2XVLWCY7a2txRnNBZnGcszuAMjheTzA6M8d4d57xxE7aqvHBuzvP1sUhJh21+6a2y4gHx+YJSnrlXw6cJm2Vez9rOLJ2hUg2Wyy5aU6LzYyXtolFycwgibRzUNZzND/UGyOLb2rLXLWOlzgyKO64FRdnlhO4CwWfV9WJOZ7sKUb1KGJVqy13FIhRT7A6PsZXZxCiNsVn2lIEwLXYWwCmvFLlxSRqawiegDoyyJ8qNlvt+VxTULfNyg5omzdrjAEQq7hbvyHzq+PDhY7uMEUa3hayWcUbcw81VplsVYuyiFOMyKKgw+ox+7KGYJm1Xli7OGipsERmVYa6S4Nd0otQWEweNACSBI2jWtHFuTFTXCDg+GsMxFSQZMMlMQlzwalNMltOF7Yijr9fKJ3HbJsSncoVvpFzWSeEwogTA5KCkPjpmHuVCiMkQMF2jtILOt6PGjBBDVfKVQ2CQwrEIKtXbyUfLjkkeHEpWoXVaec4bofHK/b3LQnog1Nre3RXDK/tHTQAkgbNaU5xyblHKElpQ8snPfJDK/lhRUqz1KlEDQfNbwPcVsTrv3nPmo7sRyXmxd6kjuWvJIUQKVqF3ylWcN073cdqXuweU1fQg+5LdqfrQoAUTNie8rzxlzl9+sNEuweYzQuc3d4/yYUQJRs6oAJ4btnc4/URXOkbvrP4zY5gVBjxvllA7zoEBZen7LEgU1MJO7Y51GxHlryWNHiemX2vgeLJt3851iKs2JE0u3tTY85bwmxk8AJRAm7ZLywJaoN74heJO6c4ZuN9gZmLzc+5NACSBql5QHazmjG98vOCiLWDuvtUOSHI7rqaCc1kT5yjEz33xDZVRybMwcwTc2eW38ng5KIEhKvgfnmG/46qgsDnLDCAXnxn9WecoogTCp64YHO/e9cGHZCc81VBymcn9iPi2UQCVq1nztYMjwlFUIDyaQG0ZokuW0fntqKGesgg8IZ2l/WK4AyQSS0cx9D3o5cckTRAkgbFYbyollpkEpQFSHXLPv/UzuEQZPEyUQJlVfKWfZ8GAcVsbas9YNmgD6JPc6Tz5VlECQVJXnWcfG9CdQCsymlAATst7B1qAEgqTe0L6zlo0RBQXLg1ol6Br3hy1COeVxfa2cIWsd4DHb8dDSva+W+4R161/sOKOUBYCCiIq1pPL2eJtkeWVxS9r3nHMOzrE4ufcVMtuAEohKSnuesw7KiRPcXTG3AyWCKKkqvwEngOfg36FFvsK2HLu7F6yEmQW4uyNzS2Q5E2i7qjwFONyZmNsjy2uBckp3W+1tGUpgd/dSKdFbjhLY2YlTvX1ewfLjt/gV5a8oH/dxue3WB8AbpQC+aT69lbJ8k4re2dmX9GSLUV52EO8A0NzZYpQpTfcJasUnW4wSMYD5hs3biPLqa8RE1BajvOkkeeXPbiPKq6+VU9BbjLKlp7JkXLWJ3EaUx4dyAgCE1lbHJG8ALSLX+5S3NfJ6Taxv2gRvq7f+qhXP9otvdxR9wWr/V67gV5S/ovwV5a8oH/74f3o3tMiO2hgGAAAAAElFTkSuQmCC\" alt=\"figure\" width=\"229\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": "Usman and Abubakar walk 1.5 km along a straight road, turn so that the angle between the two legs is \\(100^\\circ\\), walk another 0.95 km and then return home (triangular path).",
              "parts": [
                {
                  "label": "a.",
                  "text": "Find the length of the last portion of their walk.",
                  "answer": "\\(x^{2}=1.5^{2}+0.95^{2}-2(1.5)(0.95)\\cos100^\\circ\\Rightarrow x\\approx1.91\\text{ km}\\)"
                },
                {
                  "label": "b.",
                  "text": "Find the total distance that they walk.",
                  "answer": "\\(1.5+0.95+1.91\\approx4.36\\text{ km}\\)"
                }
              ]
            },
            {
              "stem": "A kite is a quadrilateral with two pairs of congruent adjacent sides of lengths 20.0 in and 35.0 in. The two shorter sides meet at an angle of \\(115^\\circ\\).",
              "parts": [
                {
                  "label": "a.",
                  "text": "Find the length of the diagonal between the points at which the unequal sides meet.",
                  "answer": "\\(d^{2}=20^{2}+20^{2}-2(20)(20)\\cos115^\\circ\\Rightarrow d\\approx33.74\\text{ in}\\)"
                },
                {
                  "label": "b.",
                  "text": "Using part a, find the angle at which the two longer sides meet.",
                  "answer": "\\(\\cos\\theta=\\dfrac{35^{2}+35^{2}-33.74^{2}}{2(35)(35)}\\Rightarrow\\theta\\approx57.6^\\circ\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Three streets intersect in pairs enclosing a small triangular park. The distances between the intersections are 55 m, 63 m and 77 m. Find the area of the park.",
                  "answer": "\\(s=97.5;\\ \\text{Area}=\\sqrt{97.5(42.5)(34.5)(20.5)}\\approx1712\\text{ m}^{2}\\)"
                }
              ]
            },
            {
              "stem": "The base of an isosceles triangle measures 14.5 cm and the vertex angle measures \\(110^\\circ\\).",
              "parts": [
                {
                  "label": "a.",
                  "text": "Find the measure of one of the congruent sides.",
                  "answer": "\\(\\text{side}=\\dfrac{7.25}{\\sin55^\\circ}\\approx8.85\\text{ cm}\\)"
                },
                {
                  "label": "b.",
                  "text": "Find the perimeter of the triangle.",
                  "answer": "\\(14.5+2(8.85)\\approx32.2\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Three streets intersect in pairs enclosing a small park. Two of the angles at which the streets intersect measure \\(80^\\circ\\) and \\(60^\\circ\\). The longest side of the park is 90 m. Find the lengths of the other two sides.",
                  "answer": "\\(\\text{Third angle}=40^\\circ;\\ \\text{longest side is opposite }80^\\circ:\\ \\dfrac{90}{\\sin80^\\circ}=\\dfrac{x}{\\sin60^\\circ}=\\dfrac{y}{\\sin40^\\circ}\\Rightarrow x\\approx79.1\\text{ m},\\ y\\approx58.7\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Aamir wants to draw a parallelogram with one side 12 cm, one diagonal 10 cm and one angle \\(120^\\circ\\). Is this possible? Explain why or why not. (Hint: use the law of sines.)",
                  "answer": "\\(\\text{Take the triangle formed by the side 12 cm, the diagonal 10 cm and the angle }120^\\circ\\text{ opposite the diagonal:}\\ \\dfrac{\\sin\\theta}{12}=\\dfrac{\\sin120^\\circ}{10}\\Rightarrow\\sin\\theta=\\dfrac{12(0.866)}{10}\\approx1.04>1.\\) This is impossible, so such a parallelogram cannot be drawn."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A geologist wants to measure the diameter of a crater. From her camp, it is 4 miles to the northern-most point of the crater and 2 miles to the southern-most point. If the angle between the two lines of sight is \\(117^\\circ\\), what is the diameter of the crater?",
                  "answer": "\\(d^{2}=4^{2}+2^{2}-2(4)(2)\\cos117^\\circ\\Rightarrow d\\approx5.22\\text{ miles}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The side of an equilateral triangle is 6 cm. Find the circumference of the circum-circle and of the ex-circle.",
                  "answer": "\\(R=\\dfrac{6}{\\sqrt3}=2\\sqrt3:\\ 2\\pi R=4\\sqrt3\\pi\\approx21.77\\text{ cm};\\ \\ r_1=\\dfrac{\\sqrt3(6)}{2}=3\\sqrt3:\\ 2\\pi r_1=6\\sqrt3\\pi\\approx32.65\\text{ cm}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Use the Law of Cosines to prove that if the angle between two congruent sides of a triangle measures \\(60^\\circ\\), the triangle is equilateral.",
                  "answer": "\\(\\text{Let }a=b,\\ \\gamma=60^\\circ:\\ c^{2}=a^{2}+a^{2}-2a^{2}\\cos60^\\circ=2a^{2}-a^{2}=a^{2}\\Rightarrow c=a.\\) So \\(a=b=c\\)."
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Prove that \\(\\dfrac1{r^{2}}+\\dfrac1{r_1^{2}}+\\dfrac1{r_2^{2}}+\\dfrac1{r_3^{2}}=\\dfrac{a^{2}+b^{2}+c^{2}}{\\Delta^{2}}\\).",
                  "answer": "\\(\\text{LHS}=\\dfrac{s^{2}+(s-a)^{2}+(s-b)^{2}+(s-c)^{2}}{\\Delta^{2}}=\\dfrac{4s^{2}-2s(a+b+c)+a^{2}+b^{2}+c^{2}}{\\Delta^{2}}=\\dfrac{4s^{2}-4s^{2}+a^{2}+b^{2}+c^{2}}{\\Delta^{2}}=\\text{RHS}.\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "A mountain climber is on top of a mountain 680 m high. The angles of depression of two points on opposite sides of the mountain are \\(48^\\circ\\) and \\(32^\\circ\\). How long would a tunnel be that runs between the two points?",
                  "answer": "\\(\\dfrac{680}{\\tan48^\\circ}+\\dfrac{680}{\\tan32^\\circ}\\approx612.3+1088.2\\approx1700.5\\text{ m}\\)"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "Find the measure of \\(\\angle C\\) in the figure (\\(AD=12.6\\) cm, \\(\\angle A=37^\\circ\\), \\(DC=22.5\\) cm, \\(BD\\perp AD\\) and \\(\\angle DBC=90^\\circ\\)).",
                  "answer": "\\(BD=12.6\\tan37^\\circ\\approx9.49;\\ \\ \\sin C=\\dfrac{BD}{DC}=\\dfrac{9.49}{22.5}\\Rightarrow\\angle C\\approx25^\\circ\\)",
                  "diagram": "<img src=\"data:image/png;base64,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\" alt=\"figure\" width=\"285\" style=\"max-width:100%;height:auto;\">"
                }
              ]
            },
            {
              "stem": null,
              "parts": [
                {
                  "label": null,
                  "text": "The sides of a square prism are 12 cm, 5 cm and 5 cm long as shown. Find the measure of the angle \\(a\\) between the base diagonal AC and the space diagonal AG.",
                  "answer": "\\(AC=\\sqrt{12^{2}+5^{2}}=13;\\ \\ \\tan a=\\dfrac{CG}{AC}=\\dfrac{5}{13}\\Rightarrow a\\approx21^\\circ\\)",
                  "diagram": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADQCAAAAACYMQN/AAAT8UlEQVR42u1dK4zrTLL+9r/nwisVvGBBgZVCFjTz/qyZtcwsWukCs9FhYaNhYaOwsKMws5VZs5VZU7OmZgUXFrl4F9jOa/KwHec1mz5Hmslj/Phcz6+rq//wL7xG1/HbC4IXWC+wXmD9p4JV7fz4fuMPY3rDv5pPAPjQX98EnTIIQDxtXv4Y89BS//RaxN8Cq1UmpFCS9/HBUhAAgJS+CVaaWmjwfAXJAhQASvD30EEns3cA02pyBQOvKjkAH/RbgOUlqdWvxWpcySJdOmj4JtbdwwAoFRRdASyCQltlfP6hIGDlBDSbXsHAK8+mqFwG+iZoAcSQ4KfXiOB5Ckws0eR7yJYA01/LhOgaEXx71O+hhwa+qM074RpquDZe32HMNGRgBNFrgEWNZH2PMAuTdBnmBBVub+i/5uMd/c//n/wRwB//h//8LdD60//9t/7zn//7l3/86RqJ9HcfP0Y/YhFUSVvTpQBB6YvV33pHT9k4at2GbptDbf5R/TYRlEAEVVLFF9O5vprDrkd3r4rqw5r364O18EqmuQjSJkZV7F6/7uO2+bVBgNo3qE4NQLp5CQJkcyjSxlgSQYjbw9PBLH8PJ9oE1AqqHzKCl5tIVp4Jzd5rAnDS8IDb1z5BNUHVfPag4VgRQKzXB2sRWNlsks8DcEzadx81cs2zQNZ66g9WBWjU9TRVFiwv6anDrDLzgvQToT9YPwNBeT7peB5N3hDkmbHKM1FKPrci7M5g5Q6Wuj8TtW/AZxE9r1g5TyDza9v0dwZLNdlIVdmCUDOH5R4m1VLTKQA8Lf9eeM9GyH5iEFhbZjh3QpxGZYAIGRO8mNmOdmaSTp9ZAasswBqRGivQALDCwsQAkC8DQQhZRgTNGECmf9+Rq+RtS+6eT6yWwaZxHurZvCE2i1myWoddSFIWnmTgmfFzTVLM3OptcyrMGvVb0ucTYrVwSJOo8EhwnGY6DVacCULwi/dSTBpjAoCSKRScRkg2ExN5pvMGqzI8YeSQezF2imJp3w8lFh3VMIow/QgBqg1PoTUBw9H24YpsLVdPqYFOOJ0CK5+8ncKqSwTPB4Jx2bZMxVJnz2vbC+8psRNgFezbxaxDnbNrEyo0+ewE0Ma75ktsYUVPFsCvlprMJgBWLnm7iKJZiCFxsIi9m6eibIm3OAKqYwpOt3RwMnsmsMrMU/oOAKvsLFbnglLnAZq/AZ/qZjBmwkTAhBhAbcXyzCQ74ekzGa+VF1NH3SufvH9h0vqB9WkC2E4A4JcR2BiWYwAzA+CNYyDPOHnW9Gbl1STTRoWSfat7AKwLaeViSbM9rMonwa7wgVr7sfDz/av+PRmbKc3dF6zyDrr/EFA5Tdvo+SPs3wWq/hH8ubA3s19q/NTzMwTsc9h1KvvhD0WJNC5YC5d8zWyIH98bVpnnJJ1s5Gp6gD8YF6xVZj6PxmUPbdgdrI034VFntuTHBXJlZwfefvigtMiUk3jDlmB2yCOVo4K1cHt8Vhtm6UPbrDILSN+2maVZhK76MRSsD3/AtQIAHjpLzJdq02gLK5kfiXRoNLCqZUifIUDYFyvnMXtDF6xGtFlzOY7VwzKlpQ+a2Gg71tITWI3kDaulHscq9+ljhvArL2Y740fpj9mrMSUrO6WDwfEjglVkwrtWtnA48Vh1HLDKTE7Zq8cMHBZLpJ97WS2fVIFRvGG5lKez7UUW9sQK5Zz6m4sfvc97hkKmxwuzPjylyWRPrg5HiReGDisFgaZrHdTkdCBlUvtgoVWmdp9yy505O183wBt+OABgM2l0UM8RMNFjmffCe/6S++Wez2E1yMB7tQbKk7VcPZe9WrmvYoXcmfezfznEwBNt1K5aBqZSD0uskqKt8dyIMeHYah7a+UWb/4Sm5FEJpIAS1TWiTQGj0sECUWpfaXPG+iDivTKJQGmr0COEgVidt1lbqrv0kOXugWj9o70HVaJ2wqy+RcV2Radis4RTiUBU13MCqnW5bQ1PfTzl5tUaq62KU6X2cM0vulkfyuoVIAMW2b1gCfbzfLpBg8ASp9Qkx2osqxLp5lHSzsMgQDNJ9ku69qt3aPPsWBEDqJrDQhHXq9YaPJUnKKEtk6Frea2PO6mLVg/d8QLKXzSwmgAr2MZwKaBHDf0gb6hBQFSnCXxefBHE9jdru3e7d4dR97/cskuB0q/TThMAb1mNg3dkqF8MfV4NjVnLgulwQHqEGL7KAh3lP1u5RHLCJeoQA6+0ST61y3U+AlH64cienc1U6h0QngWr77Ilk947hM8z4RNFPZV2evhDKv9IfD9+Kr7z9H2ZeTOfdnDwpE4AG40IFovzAH8CqJ5hHeEiaPre6ZuqAqVjfJIech1nweK1qXuCWtHc6U5Jz2kDY1I6elODgtLPvlzVQmb3QrV0Hsl756+z7ZvG9qFoOmmh9/ZOYC0cbIeKHu12P3ohWN1CB0N30sBgkmmP21DtfY7xF2fKXZiY4Gn21uv6rPDoifSWSeimq/cQrIWH6VtTl572WHQLyUrtzQOtfAlOek+EDyApe4DVTclvz5R+OOrhAy8ZP/DkI8/E9pynoVuA9YDFRIUPtOyp9/Q4krXQ261zKr3HLScF+tisTt/ycrNS71XWKQoddBu38YZ6q3S7zMQkgzwvDYV0fANPehOsFg438oFXVMPb0Mq5C3aYWF1SH/xjbPmd6fXz6MIHzO4w2zu6ZN0gfl942GTwI7mgyd7zBaV5ptbeh7t+NrDKZeDL6sMeKXT4aa5oTCrvNLlN0HsLsEq5ojPMfeCLV67r46hhxNfzgU5ohApN1YcB62rrnErv1X5eS8HGV8NOrMOVJGvlgh2ndwTdSA27CE0yuYoGep7dMrkpBxWG9B7XwGrhNRmNy9Dh3xqdVr5GHjiUXrinzbrLqDJP465S6AQW3QSsxbhGK8/UPMzKqdGD0jBmM/giC3yfnkAX26yba6DPkNync5neyGaNhmnugknjR7q+0cEaa76s8AHpVUKrmxj4TieJRpKsVUbmjh2B6PJ0pxtaI2lgciXD3mlvLr1RIj3C+HBX0sDbecNbLenNnVg7fUCsRg8dyuzCELLKAl03tOKLvWGppDrCNaqni8BaeLJX1kC6FKxVJgyV94tPohftbVhkYh+4K14DVhCTKMzlakgXzN5XmceDNDw9GcHr1iKqvG6+U5IoR6jkVv0hV18agd/QdveyWWuyqsw8ED7xU1iEE3iB75GfxfOBopEHoVuIVXnB4rYfrT3KFDYCqiwwQ0sJwRgKS2IWR+/1I+ny2Ifdb+kCJw/fcrgBywq8+uQNwfM8QjURUPJezZ2dRaulv7J/qtzt6oeiy8GaGqhzGcdBTVS3B+R3TAg2wlvWCm6Xbk8DOkIVSzE3FKuLQwdMgEiCYr05Uh27EQGgpkd3F1ovd71v+6Ntb3yTUXT0ApOzEfxm3aqqYq+Krxu1IT29zaHuJw9uswCgEGIYhDJa61LTP6ARqSukhoUTto9o2LU6ujizzEAImsSITZgzKNmo43qI6USA9Ei9ShfwTP1aarCiLCgo+QSQuuBMGkWeAbBloGka0TU+6S5/H143fWjvTCh8uY8TNuvXek+4OK6V8BcATKfA3mrWc0FpZ99cZs7co20ZXSpZ2Jl2v+hhd82NFkHSZ+sk34eDP/xMSgGhLy+zCnqNmZvxUkO9EKwjp8mUSOH7TEQXI1cvPKBkHblxJWMk+FAHo0WHrPvj+gTfpUbrsGD8dvlZ+C2aflrn6vhCzq0Ozv+6vG2t1RD7rteRrOawxkgRd8hUK+dp/o7nHGNNWMRZ6GI6Vx72vlDpbcA6sgmz7nx8MiZdeXB65y4teoG2Xi5ZzdvN3hXT6QkfGDi9uw/slmHQxZJFh7GidRZ+WgMzPEaf4Z5oVarxWAa+bsFReZxug7MKgR5iW7+elbErJ6B5U4DfHazqyBPRkJMGz6Z5Docwy703D7OrXwe0ipaVy5dghvf1NlXdwZocll8iXRKhLfzMAjNgYgB527NzJV4omQIrBegNQB5IyUZA6YXIxABWoelWuRKA3gEUnhQ2BiovCjsFsFAoJ5Otz/ABEvPWfEafABYCIImB0qmSeQMqJ9Qe04szE6B0SjDT+nzEUwClB8BTIBff0FHVUmfJBHkjARfbLEsCantzYuVUQMQAyqAEioGFV9QMnwQh4hgIDmBEgHoBaQyULlA9yRs8QDYCgoMSYkCcADqtoVU2E8A7EmYAhdeazi29KLiMgOBRHyo4BfQNgA8EMjHgnWoIk/osiilQ+gCQvqFYBgDGAyGQSQAAPth3bGasLrZZk+1QYOE05eZSIwUhQpWJMU01Rhrqu0fCTS/0WFF/FqVKdevW1JAiApAQlAyAWLV+UtFMSCkGYM3ms7rwLEoVShGANFHAtDwcA5ik2vxdwl7sFACnIH0DEFkWhazUByUChKCUNHqy2c8WQK9d6H5fnqMWPrzuL13OHexDcaE7e2xUihC06d7MRAZEcG69oOr34OJBoUOHjlBKeyRxHtTYByOtVOt4QERVFVAmNlskU7mzQ4cOi7P0PGc123WFpVcyDzYbUfrgREWadMNQ2+p+/YWM38Yg/zo4zO2xCGwfiLSqVFVVgvgAgImYD1xdmW03kOYgw8AiOrknZrEneLkX8yBblZeqKqqqSqQKa4mPJajFDlZg8ibGepp9pGrl0oddQn0RkE7vL0xBVFpfyoZNhL+d2kEm39uFMPFh7lhDsz9oD5t1ohVImakxWxcZRO5q2EsVVRGFgpiJaaNxJpzwlPO9OoJongUHUBKNaLMCtiscVgK+10quUlSkyf/IMH/RuBNdmFbuS8+WOM5lvd3JSHXwdquRaxHqTOYOhklFVaFETMTH2iYfTQ0XB9v+TwdSNJ3c4MrTjYsXKhFV0Xo7CzLEdDrI0WO8iL1sO/dOj3R7prv0/oZLbioJjSyBwExEXeYvD6vhR7h0O/cOD+Rje8vf3Ou+Dyw9WITHJN6rWuMaYTIMBtGFT+hn6EAhXWrgPzK2a2vlRXnvlMWSLFxIxhIlBG2CASJDpn9/p8PP/EO60G0XqmHueB63UIGN+p87frDMdBbDBx5BmKS23wRmZhqaGxxsAf8hnVjcCyWL2oqFygtsDNgs2545dMHGqM4tRzibpKhIfQGmoQovGHQIq24TKRfarHbHipVo7QMnSeY2aJVCCSBhSDrdCJO0icd2ZHkJ6XDAXqHjdqN9Ivh9N7g+Q+FkvY91hPmGewg+iQGvST+UBIKgtWUyRMN1rgtaZdZ5a9YeYMm+uaJfzdlkOw+MjF+1TlhAwMJ3PUWhIs1pCMx8sY/rgtWc/t71bwerYe4aefkISHZ2YkiC30QsodAgGs5Vxxci0jCWzExMdLWJ612bVS45xfhg7Q1fp4O5k/12hZFxeSNo1gfHzHKUEkFRZ3KqADEx96+L64uV7uogemSxgyXL0BTA4tCiN+NajY3hzRRFsId1ro4FQESdw+9xJatccp91aIMl6w01wXcguWGSHW+5t8lTKRCpQyYm5hHC7142i3aixF785AVBaenk8FZvxxZollqz36pEZG6N0iFKpmf50xA1XDViRUdc7mQXrEoVIqjnUgjmOHtyY6x831Kx/pJVZcJlVAY5ysSst22tRCEiNeVWs0yPM4Ox8r0nNPuD5QJz8ErHq9JEkZOoQlUAAhHjkWACACz6YzUgN1QhAY5MclUQSFDNFAoiGGKmR1wa0NteDQOLIDAHq97zdpJXalqXHxGl2huu3JCVsz/6YlUEMvvWqhBtWSYmYoF93OXOLVZDCjD61ZSuoKLJ1nREqSqoZ1PIPIiX62Lbhy3c6wPWQjzIJCYCgByq7WbQRATC06xayv3AFdnnSo4+1gvo/hagStYytKYGCETXz+XGHj+FB1uJM5JVZJvlhgIA6lVVQcSGGTTBk408bG/2PC5YQdEUnzZLzet1FASoQNqwvt2ZvjWguk+E0NaHjUei9k+ayj3d+5722pVZD6T69VVoe6L6JKoX1OKfBqsKxOprsD6JBazN4mmtq+9rs6XNnLiCDjY5ouY+aCtvom1Mab2pvdL6i9uQkzaf6AFSSmmNE9UXsXPm9vEpqRIuCWhOg+W9NS40L551edJ44/QSOo/03YQcr3EerFw4hkF4wdRBDUW4jPSbgVV54oFe/MdJ8646J9FQxN8IrLknkCS/RlbDENgYYw3cd5IspWRmya9Glixf98wu5uF7gWXjUjMZV7LKwAkAxFaK61x30TzeIl+syhthVdZdTfq0zOkkWbaJ35JOy5/7Q+V8PUm0mivAN+qhFZGuSDyPDNZ6R+joH1d5xEuRhrVIDDvvzE3cSKkhgwrryJJ15Uc8C81kbBwDJEEBlCKwUc2TkZ2UQceHkAxr8H76TGAhjv0mx4tAAMplAPw8+vCkUM8iwjLuojJVk0ZYiR8QD921xTltyphyAQHOG6sQSCDL3pGxEtzIYIEiDCyue5R+8A5JjNI1i84JyWyymiOdVrPRQ2KtJvAyRL3vC9a6ycJPbz8B0WaGTWAnIJgpJuzHdcWMMCcNlDybZK218MObGXaWijDW3NW4YEXWC3hYd/4fjyBYH45nEeopyc0HY+2zsjd+lTS099xv9wSribNWTrm1+AVQtiKn1zlrNBk6c3A/yapcEHWSRlUQkiyjNJoGt3SChGstbIhrwqOM+4ElIbAihEiJoQIKERL13hgDpghgYwDY4TX0o48erQpGF63JgVflI8/V3hGs5xu/vSB4gfUC6wXWC6wXWC+wXhC8wHqB9QLrBdYLrBdY7S9F8QLj3FjzWfzC4ux4UTQvm/UC6wXWC6xvOv4NWIrHldMzfUgAAAAASUVORK5CYII=\" alt=\"figure\" width=\"300\" style=\"max-width:100%;height:auto;\">"
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
