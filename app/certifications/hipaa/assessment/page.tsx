"use client";

import { useEffect, useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    id: 1,
    question: "What does PHI stand for under HIPAA?",
    options: [
      "Private Healthcare Instructions",
      "Protected Health Information",
      "Personal Hospital Information",
      "Protected Healthcare Identity",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Which HIPAA rule establishes national standards for protecting certain health information?",
    options: [
      "The Privacy Rule",
      "The Employment Rule",
      "The Insurance Rule",
      "The Licensing Rule",
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question:
      "Which HIPAA rule specifically establishes safeguards for electronic protected health information (ePHI)?",
    options: [
      "The Privacy Rule only",
      "The Security Rule",
      "The Minimum Necessary Rule",
      "The Patient Billing Rule",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question:
      "Which statement best describes the HIPAA minimum necessary standard?",
    options: [
      "Every employee may access the complete medical record",
      "PHI should generally be limited to what is reasonably necessary for the intended purpose",
      "PHI can never be disclosed without written authorization",
      "Only physicians may access PHI",
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question:
      "Does the HIPAA minimum necessary standard generally apply to a disclosure between healthcare providers for treatment purposes?",
    options: [
      "Yes, in every situation",
      "No, provider-to-provider treatment disclosures are generally exempt",
      "Only if the patient is hospitalized",
      "Only when electronic records are involved",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question:
      "Which is an example of an appropriate security practice when working with ePHI?",
    options: [
      "Sharing passwords with coworkers",
      "Leaving an unlocked workstation unattended",
      "Using access controls and protecting login credentials",
      "Sending patient information through any personal account",
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question:
      "A workforce member accidentally sends PHI to the wrong recipient. What is the most appropriate immediate action?",
    options: [
      "Delete the sent message and say nothing",
      "Report the incident promptly according to the organization's privacy/security procedures",
      "Wait to see whether the recipient complains",
      "Post a warning to coworkers on social media",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question:
      "Under the HIPAA Breach Notification Rule, affected individuals generally must be notified of a reportable breach without unreasonable delay and no later than:",
    options: [
      "24 hours",
      "7 days",
      "30 days",
      "60 days after discovery",
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    question:
      "Which of the following is an individual right recognized by the HIPAA Privacy Rule, subject to applicable limitations?",
    options: [
      "Access to certain health information about themselves",
      "Access to every employee's medical record",
      "Automatic deletion of every medical record",
      "Permission to change another patient's information",
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question:
      "What should an employee generally do before leaving a workstation displaying ePHI unattended?",
    options: [
      "Leave it open for the next employee",
      "Lock or secure the workstation",
      "Take a photograph of the screen",
      "Disable the password",
    ],
    correctAnswer: 1,
  },
];

const EXAM_SECONDS = 45 * 60;
const PASSING_SCORE = 80;

export default function HipaaAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(EXAM_SECONDS);
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce((total, question) => {
    return answers[question.id] === question.correctAnswer
      ? total + 1
      : total;
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= PASSING_SCORE;

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [timeLeft, submitted]);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  function selectAnswer(questionId: number, optionIndex: number) {
    if (submitted) return;

    setAnswers((previous) => ({
      ...previous,
      [questionId]: optionIndex,
    }));
  }

  function submitAssessment() {
    const unanswered = questions.length - Object.keys(answers).length;

    if (
      unanswered > 0 &&
      !window.confirm(
        `You still have ${unanswered} unanswered question(s). Submit anyway?`
      )
    ) {
      return;
    }

    if (
      window.confirm(
        "Are you sure you want to submit your HIPAA assessment?"
      )
    ) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <main style={pageStyle}>
        <div style={resultCardStyle}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "2px",
              color: "#1557ff",
              marginBottom: "18px",
            }}
          >
            LEARNLIFT DIGITAL
          </div>

          <h1 style={{ fontSize: "34px", marginBottom: "12px" }}>
            HIPAA Assessment Result
          </h1>

          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              margin: "30px 0 10px",
              color: passed ? "#15803d" : "#b91c1c",
            }}
          >
            {percentage}%
          </div>

          <h2
            style={{
              color: passed ? "#15803d" : "#b91c1c",
              marginBottom: "18px",
            }}
          >
            {passed ? "Assessment Passed" : "Assessment Not Passed"}
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: 1.7,
              marginBottom: "8px",
            }}
          >
            You answered {score} of {questions.length} questions
            correctly.
          </p>

          <p style={{ color: "#64748b" }}>
            Required passing score: {PASSING_SCORE}%
          </p>

        {passed && (
  <div
    style={{
      marginTop: "30px",
      background: "#ecfdf3",
      border: "1px solid #bbf7d0",
      padding: "20px",
      borderRadius: "12px",
      color: "#166534",
      lineHeight: 1.6,
    }}
  >
    <div
      style={{
        fontWeight: 700,
        fontSize: "16px",
        marginBottom: "8px",
      }}
    >
      Certificate Eligible
    </div>

    <p
      style={{
        margin: "0 0 18px",
        fontSize: "14px",
      }}
    >
      You have successfully met the HIPAA assessment passing
      requirement. Continue to confirm the name that should appear
      on your credential.
    </p>

    <button
      type="button"
      onClick={() => {
        sessionStorage.setItem("hipaaPassed", "true");
        sessionStorage.setItem(
          "hipaaScore",
          percentage.toString()
        );

        window.location.href =
          "/certifications/hipaa/certificate";
      }}
      style={{
        background: "#15803d",
        color: "#ffffff",
        border: "none",
        borderRadius: "9px",
        padding: "13px 20px",
        fontSize: "14px",
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      Continue to Certificate
    </button>
  </div>
)}
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;

  return (
    <main style={pageStyle}>
      <div style={{ width: "100%", maxWidth: "1100px" }}>
        {/* HEADER */}
        <div
          style={{
            background: "#071126",
            color: "#ffffff",
            padding: "25px 30px",
            borderRadius: "16px",
            marginBottom: "22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                color: "#60a5fa",
                fontSize: "11px",
                letterSpacing: "2px",
                fontWeight: 800,
                marginBottom: "7px",
              }}
            >
              LEARNLIFT DIGITAL
            </div>

            <div style={{ fontSize: "21px", fontWeight: 700 }}>
              HIPAA Privacy, Security & Breach Notification Assessment
            </div>
          </div>

          <div
            style={{
              background: timeLeft < 300 ? "#7f1d1d" : "#172554",
              borderRadius: "10px",
              padding: "12px 18px",
              textAlign: "center",
              minWidth: "110px",
            }}
          >
            <div style={{ fontSize: "10px", color: "#cbd5e1" }}>
              TIME LEFT
            </div>

            <div
              style={{
                fontSize: "21px",
                fontWeight: 800,
                marginTop: "3px",
              }}
            >
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 260px",
            gap: "22px",
          }}
        >
          {/* QUESTION */}
          <section
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "35px",
            }}
          >
            <div
              style={{
                color: "#1557ff",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                marginBottom: "16px",
              }}
            >
              QUESTION {currentQuestion + 1} OF {questions.length}
            </div>

            <h2
              style={{
                fontSize: "23px",
                lineHeight: 1.5,
                margin: "0 0 28px",
              }}
            >
              {question.question}
            </h2>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              {question.options.map((option, index) => {
                const selected = answers[question.id] === index;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      selectAnswer(question.id, index)
                    }
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      borderRadius: "10px",
                      border: selected
                        ? "2px solid #1557ff"
                        : "1px solid #cbd5e1",
                      background: selected ? "#eff6ff" : "#ffffff",
                      color: "#0f172a",
                      cursor: "pointer",
                      fontSize: "14px",
                      lineHeight: 1.5,
                    }}
                  >
                    <strong style={{ marginRight: "10px" }}>
                      {String.fromCharCode(65 + index)}.
                    </strong>

                    {option}
                  </button>
                );
              })}
            </div>

            {/* NAVIGATION */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "35px",
                gap: "15px",
              }}
            >
              <button
                type="button"
                disabled={currentQuestion === 0}
                onClick={() =>
                  setCurrentQuestion((previous) => previous - 1)
                }
                style={secondaryButtonStyle}
              >
                Previous
              </button>

              {currentQuestion < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentQuestion((previous) => previous + 1)
                  }
                  style={primaryButtonStyle}
                >
                  Next Question
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submitAssessment}
                  style={primaryButtonStyle}
                >
                  Submit Assessment
                </button>
              )}
            </div>
          </section>

          {/* QUESTION NAVIGATOR */}
          <aside
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "22px",
              alignSelf: "start",
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: "17px" }}>
              Questions
            </h3>

            <p
              style={{
                margin: "0 0 20px",
                color: "#64748b",
                fontSize: "12px",
              }}
            >
              Answered {answeredCount} of {questions.length}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "8px",
              }}
            >
              {questions.map((item, index) => {
                const answered = answers[item.id] !== undefined;
                const active = currentQuestion === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentQuestion(index)}
                    style={{
                      height: "38px",
                      borderRadius: "8px",
                      border: active
                        ? "2px solid #1557ff"
                        : "1px solid #cbd5e1",
                      background: answered ? "#dbeafe" : "#ffffff",
                      color: "#0f172a",
                      cursor: "pointer",
                      fontWeight: active ? 800 : 600,
                    }}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={submitAssessment}
              style={{
                ...primaryButtonStyle,
                width: "100%",
                marginTop: "25px",
              }}
            >
              Submit Assessment
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f5f8fc",
  padding: "35px 20px",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "#0f172a",
};

const primaryButtonStyle = {
  background: "#1557ff",
  color: "#ffffff",
  border: "none",
  borderRadius: "9px",
  padding: "13px 20px",
  fontSize: "13px",
  fontWeight: 700,
  cursor: "pointer",
};

const secondaryButtonStyle = {
  background: "#ffffff",
  color: "#334155",
  border: "1px solid #cbd5e1",
  borderRadius: "9px",
  padding: "13px 20px",
  fontSize: "13px",
  fontWeight: 700,
  cursor: "pointer",
};

const resultCardStyle = {
  width: "100%",
  maxWidth: "650px",
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "50px",
  textAlign: "center" as const,
  boxShadow: "0 15px 50px rgba(15, 23, 42, 0.08)",
};