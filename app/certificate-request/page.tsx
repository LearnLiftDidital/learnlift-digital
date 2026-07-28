"use client";

import { useState } from "react";

export default function CertificateRequestPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f8fc",
        padding: "70px 20px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        {/* BRAND */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontWeight: 800,
              color: "#071126",
            }}
          >
            <span style={{ color: "#1557ff" }}>LearnLift</span> Digital
          </div>

          <div
            style={{
              marginTop: "8px",
              color: "#64748b",
              fontSize: "12px",
              letterSpacing: "3px",
            }}
          >
            LEARN. BUILD. LIFT.
          </div>
        </div>

        {/* FORM CARD */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "45px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 15px 50px rgba(15, 23, 42, 0.07)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#eff6ff",
              color: "#1557ff",
              padding: "7px 13px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "18px",
            }}
          >
            LEARNLIFT CREDENTIALS
          </div>

          <h1
            style={{
              color: "#0f172a",
              fontSize: "34px",
              margin: "0 0 12px",
            }}
          >
            Certificate Name Confirmation
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "15px",
              lineHeight: 1.7,
              marginBottom: "35px",
            }}
          >
            If you have successfully completed an eligible LearnLift
            Digital program, confirm your details below. Your submission
            will be reviewed before a credential is issued.
          </p>

          {/* FULL NAME */}
          <label style={labelStyle}>
            Full Name
          </label>

          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Enter your full name"
            style={inputStyle}
          />

          <p style={helperStyle}>
            Enter your name exactly as you want it to appear on your
            certificate.
          </p>

          {/* EMAIL */}
          <label style={labelStyle}>
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            style={inputStyle}
          />

          <p style={helperStyle}>
            Use the email address associated with your LearnLift training
            or registration.
          </p>

          {/* PROGRAM */}
          <label style={labelStyle}>
            Program / Certification
          </label>

          <select
            value={program}
            onChange={(event) => setProgram(event.target.value)}
            style={{
              ...inputStyle,
              cursor: "pointer",
            }}
          >
            <option value="">
              Select your completed program
            </option>

            <option value="40-Hour Medical Interpreter Training">
              40-Hour Medical Interpreter Training
            </option>

            <option value="Applied AI Foundations">
              Applied AI Foundations
            </option>

            <option value="Generative AI & Prompt Engineering">
              Generative AI & Prompt Engineering
            </option>

            <option value="AI Data Annotation & Evaluation">
              AI Data Annotation & Evaluation
            </option>

            <option value="AI Workflow Automation">
              AI Workflow Automation
            </option>

            <option value="Digital Freelancing Foundations">
              Digital Freelancing Foundations
            </option>

            <option value="Web Development Foundations">
              Web Development Foundations
            </option>
          </select>

          <p style={helperStyle}>
            Only programs eligible for LearnLift credentials are listed.
          </p>

          {/* CONFIRMATION */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "18px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              marginTop: "10px",
            }}
          >
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(event) => setConfirmed(event.target.checked)}
              style={{
                marginTop: "3px",
                width: "17px",
                height: "17px",
              }}
            />

            <div>
              <div
                style={{
                  color: "#0f172a",
                  fontSize: "14px",
                  fontWeight: 700,
                  marginBottom: "5px",
                }}
              >
                Certificate Name Confirmation
              </div>

              <div
                style={{
                  color: "#64748b",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                I confirm that my full name above is spelled correctly
                and should appear exactly this way on my LearnLift
                Digital credential.
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="button"
            disabled={
              !fullName ||
              !email ||
              !program ||
              !confirmed
            }
            style={{
              width: "100%",
              marginTop: "28px",
              padding: "16px",
              borderRadius: "10px",
              border: "none",
              background:
                fullName && email && program && confirmed
                  ? "#1557ff"
                  : "#cbd5e1",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 700,
              cursor:
                fullName && email && program && confirmed
                  ? "pointer"
                  : "not-allowed",
            }}
          >
            Submit for Certificate Review
          </button>

          {/* SECURITY NOTE */}
          <div
            style={{
              marginTop: "25px",
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            Submitting this form does not automatically issue a
            certificate. LearnLift Digital verifies program completion
            before issuing a credential.
          </div>
        </div>
      </div>
    </main>
  );
}

const labelStyle = {
  display: "block",
  color: "#0f172a",
  fontSize: "14px",
  fontWeight: 700,
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "14px 15px",
  border: "1px solid #cbd5e1",
  borderRadius: "9px",
  fontSize: "14px",
  color: "#0f172a",
  background: "#ffffff",
  outline: "none",
};

const helperStyle = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: 1.5,
  marginTop: "7px",
  marginBottom: "22px",
};