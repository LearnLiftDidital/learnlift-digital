import { getCredentialById } from "../../data/credentials";
import { notFound } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import DownloadButton from "../../components/DownloadButton";

type CertificatePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CertificatePage({
  params,
}: CertificatePageProps) {
  const { id } = await params;

  const credential = getCredentialById(id);

  if (!credential) {
    notFound();
  }

  const verificationUrl = `https://www.learnliftdigital.com/verify/${credential.id}`;

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
<div style={{ marginBottom: "18px" }}>
  <img
    src="/learnlift-logo.png"
    alt="LearnLift Digital"
    style={{
      width: "180px",
      display: "block",
      margin: "0 auto 18px",
    }}
  />

  <div
    style={{
      fontSize: "36px",
      fontWeight: 800,
      color: "#071126",
      letterSpacing: "-1px",
      lineHeight: 1,
    }}
  >
    <span style={{ color: "#1557ff" }}>LearnLift</span> Digital
  </div>

  <div
    style={{
      color: "#64748b",
      fontSize: "13px",
      letterSpacing: "5px",
      marginTop: "14px",
      textTransform: "uppercase",
    }}
  >
    Learn. Build. Lift.
  </div>

  <div
    style={{
      width: "95px",
      height: "3px",
      background: "#d4af37",
      borderRadius: "20px",
      margin: "24px auto 34px",
    }}
  />
</div>

          {/* CATEGORY */}
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
            {credential.category === "language"
  ? "LANGUAGE PROFICIENCY CREDENTIAL"
  : "LEARNLIFT DIGITAL CREDENTIAL"}
          </div>

          {/* CERTIFICATE TYPE */}
          <h1
            style={{
              margin: 0,
              color: "#101827",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "46px",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            {credential.credentialType}
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
            This certifies that
          </p>

          {/* LEARNER NAME — AUTOMATIC */}
          <div
            style={{
              color: "#1557ff",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "54px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            {credential.learnerName}
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

          <p
            style={{
              margin: "0 0 18px",
              color: "#334155",
              fontSize: "17px",
            }}
          >
            has successfully demonstrated professional proficiency in the Oromo language through the LearnLift Digital Language Proficiency Assessment.
          </p>

          {/* PROGRAM — AUTOMATIC */}
          <div
  style={{
    marginBottom: "28px",
    textAlign: "center",
  }}
>
  <div
    style={{
      color: "#64748b",
      fontSize: "13px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "8px",
    }}
  >

  </div>
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
            This credential is digitally verifiable and confirms successful completion of the LearnLift Digital Language Proficiency Assessment. Its authenticity can be verified using the QR code or Certificate ID below.
  
          </p>

          {/* DETAILS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "45px",
              alignItems: "end",
              marginTop: "40px",
            }}
          >
            {/* DATE — AUTOMATIC */}
            <div>
              <div
                style={{
                  fontWeight: 700,
                  color: "#071126",
                  fontSize: "15px",
                  marginBottom: "11px",
                }}
              >
                {credential.dateIssued}
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

           {/* AUTHORIZATION */}
<div>
  

  <div
    style={{
      fontWeight: 800,
      color: "#071126",
      fontSize: "22px",
    }}
  >
    Joseph Parmuat
  </div>

  <div
    style={{
      color: "#64748b",
      fontSize: "13px",
      marginTop: "6px",
      lineHeight: 1.6,
    }}
  >
    Chief Executive Officer
    <br />
    LearnLift Digital
  </div>
</div>

            {/* QR + UNIQUE ID */}
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
                {credential.id}
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
<div
  style={{
    marginTop: "35px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <DownloadButton />
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