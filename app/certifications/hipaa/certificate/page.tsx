"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HipaaCertificateNamePage() {
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [eligible, setEligible] = useState(false);
  const [score, setScore] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const passed = sessionStorage.getItem("hipaaPassed");
    const savedScore = sessionStorage.getItem("hipaaScore");

    if (passed === "true" && savedScore) {
      setEligible(true);
      setScore(savedScore);
    }

    setChecking(false);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = fullName.trim().replace(/\s+/g, " ");

    if (cleanName.length < 3) {
      setError("Please enter your full name.");
      return;
    }

    if (!confirmed) {
      setError(
        "Please confirm that your name is spelled exactly as it should appear on your certificate."
      );
      return;
    }

    setError("");

    sessionStorage.setItem("hipaaCertificateName", cleanName);

    router.push("/certifications/hipaa/certificate/view");
  }

  if (checking) {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <p style={{ color: "#64748b", margin: 0 }}>
            Checking certificate eligibility...
          </p>
        </div>
      </main>
    );
  }

  if (!eligible) {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <div style={brandStyle}>LEARNLIFT DIGITAL</div>

          <div
            style={{
              width: "64px",
              height: "64px",
              margin: "0 auto 22px",
              borderRadius: "50%",
              background: "#fef2f2",
              color: "#b91c1c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            !
          </div>

          <h1
            style={{
              fontSize: "30px",
              margin: "0 0 15px",
              textAlign: "center",
            }}
          >
            Certificate Not Available
          </h1>

          <p
            style={{
              color: "#64748b",
              lineHeight: 1.7,
              textAlign: "center",
              margin: "0 0 28px",
            }}
          >
            A passing HIPAA assessment result is required before you can
            continue to certificate issuance.
          </p>

          <button
            type="button"
            onClick={() =>
              router.push("/certifications/hipaa/assessment")
            }
            style={primaryButtonStyle}
          >
            Take HIPAA Assessment
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <div style={cardStyle}>
        <div style={brandStyle}>LEARNLIFT DIGITAL CREDENTIALS</div>

        <div
          style={{
            display: "inline-block",
            background: "#ecfdf3",
            color: "#15803d",
            border: "1px solid #bbf7d0",
            borderRadius: "999px",
            padding: "8px 14px",
            fontSize: "12px",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          Assessment Passed · {score}%
        </div>

        <h1
          style={{
            fontSize: "36px",
            lineHeight: 1.2,
            margin: "0 0 15px",
          }}
        >
          Confirm Your Certificate Name
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "16px",
            lineHeight: 1.7,
            margin: "0 0 35px",
          }}
        >
          Enter your full name exactly as you want it to appear on your
          LearnLift Digital HIPAA credential. Check the spelling carefully
          before continuing.
        </p>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="fullName"
            style={{
              display: "block",
              fontWeight: 700,
              fontSize: "14px",
              marginBottom: "9px",
            }}
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Enter your full name"
            autoComplete="name"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "16px",
              border: "1px solid #cbd5e1",
              borderRadius: "10px",
              fontSize: "15px",
              outline: "none",
              marginBottom: "9px",
            }}
          />

          <p
            style={{
              color: "#94a3b8",
              fontSize: "12px",
              lineHeight: 1.6,
              margin: "0 0 27px",
            }}
          >
            Example: Kahiye Moulid Hassan. Your certificate will use the
            spelling entered here.
          </p>

          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "18px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <input
              id="confirmName"
              type="checkbox"
              checked={confirmed}
              onChange={(event) => setConfirmed(event.target.checked)}
              style={{
                width: "18px",
                height: "18px",
                marginTop: "2px",
                cursor: "pointer",
              }}
            />

            <label
              htmlFor="confirmName"
              style={{
                color: "#475569",
                fontSize: "13px",
                lineHeight: 1.6,
                cursor: "pointer",
              }}
            >
              I confirm that my full name is spelled correctly and should
              appear exactly this way on my LearnLift Digital credential.
            </label>
          </div>

          {error && (
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #fecaca",
                color: "#b91c1c",
                padding: "12px 15px",
                borderRadius: "9px",
                fontSize: "13px",
                marginBottom: "18px",
              }}
            >
              {error}
            </div>
          )}

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "12px",
              padding: "17px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "#1e40af",
                fontSize: "13px",
                marginBottom: "5px",
              }}
            >
              Credential
            </div>

            <div
              style={{
                color: "#475569",
                fontSize: "13px",
                lineHeight: 1.6,
              }}
            >
              HIPAA Privacy, Security &amp; Breach Notification Training
            </div>
          </div>

          <button
            type="submit"
            disabled={!fullName.trim() || !confirmed}
            style={{
              ...primaryButtonStyle,
              opacity: !fullName.trim() || !confirmed ? 0.45 : 1,
              cursor:
                !fullName.trim() || !confirmed
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            Continue to My Certificate
          </button>
        </form>

        <p
          style={{
            color: "#94a3b8",
            textAlign: "center",
            fontSize: "11px",
            lineHeight: 1.6,
            margin: "22px 0 0",
          }}
        >
          Your assessment score and certificate eligibility were recorded
          for this browser session.
        </p>
      </div>
    </main>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f5f8fc",
  padding: "60px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "#0f172a",
};

const cardStyle = {
  width: "100%",
  maxWidth: "700px",
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "45px",
  boxShadow: "0 15px 50px rgba(15, 23, 42, 0.07)",
};

const brandStyle = {
  color: "#1557ff",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "2px",
  marginBottom: "20px",
};

const primaryButtonStyle = {
  width: "100%",
  background: "#1557ff",
  color: "#ffffff",
  border: "none",
  borderRadius: "10px",
  padding: "15px 20px",
  fontSize: "14px",
  fontWeight: 700,
};