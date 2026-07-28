"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";

export default function HipaaCertificateViewPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [eligible, setEligible] = useState(false);
  const [learnerName, setLearnerName] = useState("");
  const [score, setScore] = useState("");
  const [credentialId, setCredentialId] = useState("");
  const [qrCode, setQrCode] = useState("");

  const issueDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  useEffect(() => {
    async function prepareCertificate() {
      const passed = sessionStorage.getItem("hipaaPassed");
      const savedScore = sessionStorage.getItem("hipaaScore");
      const savedName = sessionStorage.getItem("hipaaCertificateName");

      if (passed !== "true" || !savedScore || !savedName) {
        setLoading(false);
        return;
      }

      setEligible(true);
      setScore(savedScore);
      setLearnerName(savedName);

      let savedCredentialId = sessionStorage.getItem(
        "hipaaCredentialId"
      );

      if (!savedCredentialId) {
        const year = new Date().getFullYear();

        const randomNumber = Math.floor(
          100000 + Math.random() * 900000
        );

        savedCredentialId = `LLD-HIPAA-${year}-${randomNumber}`;

        sessionStorage.setItem(
          "hipaaCredentialId",
          savedCredentialId
        );
      }

      setCredentialId(savedCredentialId);

      try {
        const verificationUrl =
          `${window.location.origin}/verify/${savedCredentialId}`;

        const qr = await QRCode.toDataURL(verificationUrl, {
          width: 220,
          margin: 1,
          errorCorrectionLevel: "H",
        });

        setQrCode(qr);
      } catch (error) {
        console.error("Unable to generate QR code:", error);
      }

      setLoading(false);
    }

    prepareCertificate();
  }, []);

  if (loading) {
    return (
      <main style={loadingPageStyle}>
        <div style={messageCardStyle}>
          <div style={brandSmallStyle}>LEARNLIFT DIGITAL</div>
          <p style={{ color: "#64748b", margin: 0 }}>
            Preparing your credential...
          </p>
        </div>
      </main>
    );
  }

  if (!eligible) {
    return (
      <main style={loadingPageStyle}>
        <div style={messageCardStyle}>
          <div style={brandSmallStyle}>LEARNLIFT DIGITAL</div>

          <h1
            style={{
              fontSize: "30px",
              margin: "0 0 15px",
            }}
          >
            Certificate Not Available
          </h1>

          <p
            style={{
              color: "#64748b",
              lineHeight: 1.7,
              margin: "0 0 25px",
            }}
          >
            You must successfully complete the HIPAA assessment and
            confirm your certificate name before accessing this
            credential.
          </p>

          <button
            type="button"
            onClick={() =>
              router.push("/certifications/hipaa/assessment")
            }
            style={buttonStyle}
          >
            Take HIPAA Assessment
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <section style={certificateStyle}>
        {/* TOP ACCENT */}
        <div style={topAccentStyle} />

        {/* TOP RIGHT DECORATION */}
        <div style={topDecorationStyle} />

        {/* BRAND */}
        <header style={headerStyle}>
          <div style={logoStyle}>
            <span style={{ color: "#1557ff" }}>LearnLift</span>{" "}
            <span style={{ color: "#071126" }}>Digital</span>
          </div>

          <div style={taglineStyle}>
            LEARN. BUILD. LIFT.
          </div>

          <div style={blueDividerStyle} />
        </header>

        {/* CREDENTIAL TYPE */}
        <div style={credentialTypeStyle}>
          PROFESSIONAL TRAINING CREDENTIAL
        </div>

        {/* TITLE */}
        <h1 style={certificateTitleStyle}>
          HIPAA Training Certificate
        </h1>

        <p style={presentedStyle}>
          This certificate is proudly presented to
        </p>

        {/* LEARNER */}
        <div style={learnerNameStyle}>
          {learnerName}
        </div>

        <div style={learnerDividerStyle} />

        <p style={completionTextStyle}>
          for successfully completing the assessment requirements for
        </p>

        <h2 style={programTitleStyle}>
          HIPAA Privacy, Security &amp; Breach Notification Training
        </h2>

        <p style={descriptionStyle}>
          Demonstrating knowledge of core HIPAA privacy, security,
          confidentiality, protected health information, and breach
          notification principles.
        </p>

        {/* BOTTOM CREDENTIAL DETAILS */}
        <div style={detailsGridStyle}>
          {/* DATE */}
          <div style={detailColumnStyle}>
            <div style={detailMainValueStyle}>
              {issueDate}
            </div>

            <div style={detailLineStyle} />

            <div style={detailLabelStyle}>
              DATE ISSUED
            </div>
          </div>

          {/* AUTHORIZED SIGNATURE */}
          <div style={signatureColumnStyle}>
            <div style={signatureAreaStyle}>
              <img
                src="/signature.png"
                alt="Authorized signature"
                style={signatureImageStyle}
              />
            </div>

            <div style={signatureLineStyle} />

            <div style={signerNameStyle}>
              Kahiye Moulid
            </div>

            <div style={signerTitleStyle}>
              CEO &amp; Co-Founder
            </div>
          </div>

          {/* QR VERIFICATION */}
          <div style={verificationColumnStyle}>
            {qrCode ? (
              <img
                src={qrCode}
                alt={`Verification QR code for ${credentialId}`}
                style={qrStyle}
              />
            ) : (
              <div style={qrPlaceholderStyle}>
                QR
              </div>
            )}

            <div style={credentialIdStyle}>
              {credentialId}
            </div>

            <div style={verifyLabelStyle}>
              SCAN TO VERIFY
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={footerStyle}>
          <span>LearnLift Digital</span>

          <span>HIPAA Training Credential</span>

          <span>Secure Digital Credential</span>
        </footer>
      </section>

      <div style={belowCertificateStyle}>
        <strong>Credential ID:</strong> {credentialId}
        <span style={{ margin: "0 8px" }}>·</span>
        Assessment score: {score}%
      </div>
    </main>
  );
}

/* =========================================================
   PAGE
========================================================= */

const pageStyle = {
  minHeight: "100vh",
  background: "#eaf0f7",
  padding: "30px 15px 45px",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "#0f172a",
};

const loadingPageStyle = {
  minHeight: "100vh",
  background: "#f5f8fc",
  padding: "60px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "#0f172a",
};

const messageCardStyle = {
  width: "100%",
  maxWidth: "600px",
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "45px",
  textAlign: "center" as const,
  boxShadow: "0 15px 50px rgba(15, 23, 42, 0.07)",
};

const brandSmallStyle = {
  color: "#1557ff",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "2px",
  marginBottom: "25px",
};

const buttonStyle = {
  background: "#1557ff",
  color: "#ffffff",
  border: "none",
  borderRadius: "9px",
  padding: "14px 22px",
  fontWeight: 700,
  cursor: "pointer",
};

/* =========================================================
   CERTIFICATE
========================================================= */

const certificateStyle = {
  width: "100%",
  maxWidth: "1150px",
  minHeight: "760px",
  boxSizing: "border-box" as const,
  background: "#ffffff",
  border: "1px solid #dbe3ef",
  position: "relative" as const,
  overflow: "hidden",
  padding: "55px 70px 30px",
  boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
};

const topAccentStyle = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "10px",
  background: "linear-gradient(90deg, #1557ff, #0ea5e9)",
};

const topDecorationStyle = {
  position: "absolute" as const,
  width: "220px",
  height: "220px",
  borderRadius: "50%",
  background: "#eff6ff",
  right: "-90px",
  top: "-90px",
};

const headerStyle = {
  position: "relative" as const,
  textAlign: "center" as const,
  marginBottom: "34px",
};

const logoStyle = {
  fontSize: "34px",
  fontWeight: 800,
  marginBottom: "9px",
};

const taglineStyle = {
  color: "#64748b",
  letterSpacing: "5px",
  fontSize: "12px",
};

const blueDividerStyle = {
  width: "70px",
  height: "2px",
  background: "#1557ff",
  margin: "27px auto 0",
};

const credentialTypeStyle = {
  textAlign: "center" as const,
  color: "#1557ff",
  fontWeight: 800,
  letterSpacing: "4px",
  fontSize: "12px",
  marginBottom: "24px",
};

const certificateTitleStyle = {
  textAlign: "center" as const,
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "48px",
  fontWeight: 400,
  margin: "0 0 30px",
  color: "#0f172a",
};

const presentedStyle = {
  textAlign: "center" as const,
  color: "#64748b",
  fontSize: "16px",
  margin: "0 0 22px",
};

const learnerNameStyle = {
  textAlign: "center" as const,
  color: "#1557ff",
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "39px",
  fontWeight: 700,
  marginBottom: "15px",
};

const learnerDividerStyle = {
  width: "58%",
  height: "1px",
  background: "#cbd5e1",
  margin: "0 auto 28px",
};

const completionTextStyle = {
  textAlign: "center" as const,
  color: "#334155",
  fontSize: "15px",
  margin: "0 0 13px",
};

const programTitleStyle = {
  textAlign: "center" as const,
  fontSize: "23px",
  fontWeight: 600,
  margin: "0 0 15px",
  color: "#071126",
};

const descriptionStyle = {
  textAlign: "center" as const,
  color: "#64748b",
  fontSize: "13px",
  lineHeight: 1.6,
  maxWidth: "760px",
  margin: "0 auto 38px",
};

/* =========================================================
   BOTTOM DETAILS
========================================================= */

const detailsGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1.15fr 1fr",
  gap: "42px",
  alignItems: "end",
  marginTop: "15px",
};

const detailColumnStyle = {
  textAlign: "center" as const,
  paddingBottom: "5px",
};

const detailMainValueStyle = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#0f172a",
  minHeight: "25px",
};

const detailLineStyle = {
  width: "100%",
  height: "1px",
  background: "#94a3b8",
  margin: "8px 0 9px",
};

const detailLabelStyle = {
  color: "#64748b",
  fontSize: "9px",
  fontWeight: 600,
  letterSpacing: "2px",
};

/* =========================================================
   SIGNATURE
========================================================= */

const signatureColumnStyle = {
  textAlign: "center" as const,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
};

const signatureAreaStyle = {
  width: "220px",
  height: "75px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  overflow: "visible",
};

const signatureImageStyle = {
  display: "block",
  width: "205px",
  height: "70px",
  objectFit: "contain" as const,
  objectPosition: "center bottom",
  background: "transparent",
};

const signatureLineStyle = {
  width: "100%",
  height: "1px",
  background: "#94a3b8",
  marginTop: "3px",
  marginBottom: "8px",
};

const signerNameStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "12px",
  lineHeight: 1.2,
  fontWeight: 700,
  letterSpacing: "0.2px",
  color: "#0f172a",
};

const signerTitleStyle = {
  color: "#64748b",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "9px",
  fontWeight: 500,
  letterSpacing: "0.7px",
  marginTop: "5px",
};

/* =========================================================
   VERIFICATION
========================================================= */

const verificationColumnStyle = {
  textAlign: "center" as const,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
};

const qrStyle = {
  width: "92px",
  height: "92px",
  display: "block",
  objectFit: "contain" as const,
  background: "#ffffff",
};

const qrPlaceholderStyle = {
  width: "92px",
  height: "92px",
  border: "1px solid #cbd5e1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#94a3b8",
  fontSize: "11px",
};

const credentialIdStyle = {
  color: "#0f172a",
  fontSize: "11px",
  fontWeight: 700,
  marginTop: "7px",
  whiteSpace: "nowrap" as const,
};

const verifyLabelStyle = {
  color: "#64748b",
  fontSize: "9px",
  fontWeight: 600,
  letterSpacing: "2px",
  marginTop: "6px",
};

/* =========================================================
   FOOTER
========================================================= */

const footerStyle = {
  borderTop: "1px solid #e2e8f0",
  marginTop: "34px",
  paddingTop: "17px",
  display: "flex",
  justifyContent: "space-between",
  color: "#64748b",
  fontSize: "9px",
};

const belowCertificateStyle = {
  width: "100%",
  maxWidth: "1150px",
  boxSizing: "border-box" as const,
  textAlign: "center" as const,
  color: "#64748b",
  fontSize: "11px",
  padding: "15px",
};