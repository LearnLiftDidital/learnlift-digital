"use client";

import { QRCodeSVG } from "qrcode.react";

export default function CertificatePage() {
  const credentialId = "LLD-PRO-2026-0001";

  const verificationUrl = `https://www.learnliftdigital.com/verify/${credentialId}`;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eef3f9",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          width: "1120px",
          minHeight: "790px",
          background: "#ffffff",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
          border: "1px solid #dbe5f0",
        }}
      >
        {/* TOP BLUE LINE */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "10px",
            background:
              "linear-gradient(90deg, #1557ff 0%, #1687f8 55%, #08b9d5 100%)",
          }}
        />

        {/* TOP RIGHT DECORATION */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "165px",
            height: "165px",
            background: "#eef5ff",
            borderBottomLeftRadius: "165px",
          }}
        />

        {/* BOTTOM LEFT DECORATION */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "90px",
            height: "90px",
            background: "#e8fbff",
            borderTopRightRadius: "90px",
          }}
        />

        {/* CERTIFICATE CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "55px 75px 40px",
            textAlign: "center",
          }}
        >
          {/* BRAND */}
          <div
            style={{
              fontSize: "31px",
              fontWeight: 800,
              letterSpacing: "-1px",
              marginBottom: "10px",
              color: "#071126",
            }}
          >
            <span style={{ color: "#1557ff" }}>LearnLift</span> Digital
          </div>

          <div
            style={{
              color: "#64748b",
              fontSize: "14px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Learn. Build. Lift.
          </div>

          <div
            style={{
              width: "66px",
              height: "2px",
              background: "#1557ff",
              margin: "25px auto 30px",
            }}
          />

          {/* CREDENTIAL CATEGORY */}
          <div
            style={{
              color: "#1557ff",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "5px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Professional Training Credential
          </div>

          {/* CERTIFICATE TITLE */}
          <h1
            style={{
              margin: 0,
              color: "#101827",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "52px",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Certificate of Completion
          </h1>

          {/* PRESENTED TO */}
          <p
            style={{
              marginTop: "28px",
              marginBottom: "16px",
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            This certificate is proudly presented to
          </p>

          {/* LEARNER NAME */}
          <div
            style={{
              color: "#1557ff",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "42px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            Kahiye Moulid Hassan
          </div>

          <div
            style={{
              height: "1px",
              width: "500px",
              maxWidth: "80%",
              background: "#cbd5e1",
              margin: "0 auto 25px",
            }}
          />

          {/* COMPLETION TEXT */}
          <p
            style={{
              margin: "0 0 18px",
              color: "#334155",
              fontSize: "17px",
            }}
          >
            for successfully completing the requirements of the
          </p>

          {/* PROGRAM */}
          <div
            style={{
              color: "#071126",
              fontSize: "27px",
              fontWeight: 600,
              marginBottom: "14px",
            }}
          >
            40-Hour Medical Interpreter Training
          </div>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "820px",
              color: "#64748b",
              fontSize: "15px",
              lineHeight: 1.6,
            }}
          >
            demonstrating commitment to professional development and
            competency in the program learning objectives.
          </p>

          {/* DETAILS SECTION */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "45px",
              alignItems: "end",
              marginTop: "40px",
            }}
          >
            {/* DATE */}
            <div>
              <div
                style={{
                  fontWeight: 700,
                  color: "#071126",
                  fontSize: "15px",
                  marginBottom: "11px",
                }}
              >
                July 26, 2026
              </div>

              <div
                style={{
                  borderTop: "1px solid #94a3b8",
                  paddingTop: "10px",
                  color: "#64748b",
                  fontSize: "11px",
                  letterSpacing: "2px",
                }}
              >
                DATE ISSUED
              </div>
            </div>

            {/* SIGNATURE */}
            <div>
              <img
                src="/signature.png"
                alt="Authorized signature"
                style={{
                  width: "175px",
                  height: "65px",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto 3px",
                }}
              />

              <div
                style={{
                  borderTop: "1px solid #94a3b8",
                  paddingTop: "8px",
                  fontWeight: 700,
                  color: "#071126",
                  fontSize: "14px",
                }}
              >
                Kahiye Moulid Hassan
              </div>

              <div
                style={{
                  color: "#64748b",
                  fontSize: "11px",
                  marginTop: "4px",
                }}
              >
                Founder, LearnLift Digital
              </div>
            </div>

            {/* QR VERIFICATION */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "7px",
                }}
              >
                <QRCodeSVG
                  value={verificationUrl}
                  size={72}
                  level="H"
                  marginSize={1}
                />
              </div>

              <div
                style={{
                  fontWeight: 700,
                  color: "#071126",
                  fontSize: "13px",
                  marginBottom: "8px",
                }}
              >
                {credentialId}
              </div>

              <div
                style={{
                  borderTop: "1px solid #94a3b8",
                  paddingTop: "8px",
                  color: "#64748b",
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                }}
              >
                SCAN TO VERIFY
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div
            style={{
              marginTop: "32px",
              paddingTop: "17px",
              borderTop: "1px solid #e2e8f0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#64748b",
              fontSize: "11px",
            }}
          >
            <span>LearnLift Digital</span>

            <span>www.learnliftdigital.com</span>

            <span>Secure Digital Credential</span>
          </div>
        </div>
      </div>
    </main>
  );
}