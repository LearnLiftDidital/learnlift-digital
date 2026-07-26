import { getCredentialById } from "../../data/credentials";

type VerifyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function VerifyPage({
  params,
}: VerifyPageProps) {
  const { id } = await params;

  const credential = getCredentialById(id);

  // CREDENTIAL DOES NOT EXIST
  if (!credential) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#f4f7fb",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "20px",
            padding: "50px",
            boxShadow: "0 15px 50px rgba(15, 23, 42, 0.08)",
            border: "1px solid #e2e8f0",
            textAlign: "center",
          }}
        >
          <Brand />

          <div
            style={{
              width: "75px",
              height: "75px",
              margin: "35px auto 20px",
              borderRadius: "50%",
              background: "#fef2f2",
              color: "#dc2626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
              fontWeight: 700,
            }}
          >
            ×
          </div>

          <h1
            style={{
              fontSize: "32px",
              color: "#101827",
              marginBottom: "12px",
            }}
          >
            Credential Not Found
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            We could not find a LearnLift Digital credential matching
            this Credential ID.
          </p>

          <div
            style={{
              marginTop: "30px",
              padding: "18px",
              background: "#f8fafc",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontSize: "12px",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              Credential ID
            </div>

            <strong style={{ color: "#0f172a" }}>{id}</strong>
          </div>

          <Footer />
        </div>
      </main>
    );
  }

  // REVOKED CREDENTIAL
  if (credential.status === "revoked") {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#f4f7fb",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "20px",
            padding: "50px",
            boxShadow: "0 15px 50px rgba(15, 23, 42, 0.08)",
            border: "1px solid #e2e8f0",
            textAlign: "center",
          }}
        >
          <Brand />

          <div
            style={{
              width: "75px",
              height: "75px",
              margin: "35px auto 20px",
              borderRadius: "50%",
              background: "#fff7ed",
              color: "#ea580c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "35px",
              fontWeight: 700,
            }}
          >
            !
          </div>

          <h1
            style={{
              fontSize: "32px",
              color: "#101827",
              marginBottom: "12px",
            }}
          >
            Credential Revoked
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            This credential exists in the LearnLift Digital system but
            is no longer considered valid.
          </p>

          <Footer />
        </div>
      </main>
    );
  }

  // VALID CREDENTIAL
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "50px",
          boxShadow: "0 15px 50px rgba(15, 23, 42, 0.08)",
          border: "1px solid #e2e8f0",
        }}
      >
        <Brand />

        <div
          style={{
            width: "75px",
            height: "75px",
            margin: "35px auto 20px",
            borderRadius: "50%",
            background: "#ecfdf3",
            color: "#16a34a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            fontWeight: 700,
          }}
        >
          ✓
        </div>

        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            color: "#101827",
            marginBottom: "10px",
          }}
        >
          Credential Verified
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            fontSize: "16px",
            lineHeight: 1.6,
            marginBottom: "40px",
          }}
        >
          This credential is recorded as valid in the LearnLift Digital
          credential verification system.
        </p>

        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <CredentialRow
            label="Learner"
            value={credential.learnerName}
          />

          <CredentialRow
            label="Program"
            value={credential.program}
          />

          <CredentialRow
            label="Credential Type"
            value={credential.credentialType}
          />

          <CredentialRow
            label="Date Issued"
            value={credential.dateIssued}
          />

          <CredentialRow
            label="Credential ID"
            value={credential.id}
          />

          <CredentialRow
            label="Issued By"
            value="LearnLift Digital"
            last
          />
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "18px",
            borderRadius: "12px",
            background: "#f0fdf4",
            border: "1px solid #bbf7d0",
            textAlign: "center",
          }}
        >
          <strong style={{ color: "#15803d" }}>
            ✓ Valid LearnLift Digital Credential
          </strong>
        </div>

        <Footer />
      </div>
    </main>
  );
}

function Brand() {
  return (
    <div style={{ textAlign: "center" }}>
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
  );
}

function CredentialRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "180px 1fr",
        padding: "18px 22px",
        borderBottom: last ? "none" : "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        {label}
      </div>

      <div
        style={{
          color: "#0f172a",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        marginTop: "40px",
        paddingTop: "20px",
        borderTop: "1px solid #e2e8f0",
        textAlign: "center",
        color: "#64748b",
        fontSize: "12px",
      }}
    >
      LearnLift Digital · www.learnliftdigital.com
    </div>
  );
}