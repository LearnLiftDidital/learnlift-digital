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
    marginTop: "35px",
    marginBottom: "35px",
    padding: "22px",
    borderRadius: "14px",
    background: "#ecfdf3",
    border: "1px solid #86efac",
    textAlign: "center",
  }}
>
  <div
    style={{
      fontSize: "15px",
      color: "#15803d",
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "uppercase",
    }}
  >
    ✓ VERIFIED CREDENTIAL
  </div>

  <div
    style={{
      marginTop: "8px",
      fontSize: "28px",
      fontWeight: 800,
      color: "#0f172a",
    }}
  >
    VALID
  </div>

  <div
    style={{
      marginTop: "10px",
      color: "#64748b",
      fontSize: "15px",
    }}
  >
    Issued by LearnLift Digital
  </div>
</div>

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
          Official Credential Verification
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
          Verify the authenticity and status of this LearnLift Digital credential.
        </p>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    marginBottom: "35px",
  }}
>
  <div
    style={{
      background: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      padding: "18px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        fontSize: "12px",
        color: "#64748b",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      Status
    </div>

    <div
      style={{
        marginTop: "8px",
        fontWeight: 700,
        color: "#16a34a",
      }}
    >
      Valid
    </div>
  </div>

  <div
    style={{
      background: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      padding: "18px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        fontSize: "12px",
        color: "#64748b",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      Issued
    </div>

    <div
      style={{
        marginTop: "8px",
        fontWeight: 700,
      }}
    >
      {credential.dateIssued}
    </div>
  </div>

  <div
    style={{
      background: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      padding: "18px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        fontSize: "12px",
        color: "#64748b",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      Issuer
    </div>

    <div
      style={{
        marginTop: "8px",
        fontWeight: 700,
      }}
    >
      LearnLift Digital
    </div>
  </div>
</div>
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
  label="Language"
  value="Oromo"
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
  label="Certificate ID"
  value={credential.id}
/>
<CredentialRow
  label="Verification URL"
  value={`learnliftdigital.com/verify/${credential.id}`}
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

<div
  style={{
    textAlign: "center",
    marginTop: "30px",
  }}
>
  <a
    href={`/certificate/${credential.id}`}
    target="_blank"
    style={{
      display: "inline-block",
      padding: "14px 32px",
      background: "#1557ff",
      color: "#ffffff",
      textDecoration: "none",
      borderRadius: "10px",
      fontWeight: 700,
      fontSize: "15px",
      boxShadow: "0 6px 18px rgba(21,87,255,0.25)",
    }}
  >
    📄 View Certificate
  </a>
</div>
        <Footer />
      </div>
    </main>
  );
}

function Brand() {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="/learnlift-logo.png"
        alt="LearnLift Digital"
        style={{
          width: "180px",
          marginBottom: "18px",
        }}
      />

      <div
        style={{
          color: "#64748b",
          fontSize: "13px",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        Official Credential Verification Portal
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
      © 2026 LearnLift Digital • Official Credential Verification Portal
    </div>
  );
}