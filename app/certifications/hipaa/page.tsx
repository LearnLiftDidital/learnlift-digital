import Link from "next/link";

export default function HipaaPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#0f172a",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background: "#071126",
          color: "#ffffff",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "3px",
              marginBottom: "18px",
            }}
          >
            LEARNLIFT DIGITAL · HEALTHCARE COMPLIANCE
          </div>

          <h1
            style={{
              fontSize: "50px",
              lineHeight: 1.1,
              maxWidth: "850px",
              margin: "0 0 22px",
            }}
          >
            HIPAA Privacy, Security & Breach Notification Training
          </h1>

          <p
            style={{
              maxWidth: "760px",
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Demonstrate your understanding of core HIPAA privacy,
            security, confidentiality, and breach-notification principles
            through a structured LearnLift Digital assessment.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 24px 90px",
          display: "grid",
          gridTemplateColumns: "1.6fr 0.9fr",
          gap: "35px",
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "18px",
              padding: "35px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                color: "#1557ff",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              ABOUT THIS ASSESSMENT
            </div>

            <h2
              style={{
                fontSize: "28px",
                margin: "0 0 16px",
              }}
            >
              Test your knowledge of essential HIPAA principles
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              The assessment evaluates practical understanding of HIPAA
              concepts commonly relevant to healthcare professionals,
              interpreters, contractors, support personnel, and others who
              may work with protected health information.
            </p>
          </div>

          {/* TOPICS */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "18px",
              padding: "35px",
            }}
          >
            <h2
              style={{
                fontSize: "25px",
                margin: "0 0 25px",
              }}
            >
              Assessment topics
            </h2>

            <Topic
              number="01"
              title="HIPAA Fundamentals"
              text="Purpose, scope, terminology, covered entities and business associates."
            />

            <Topic
              number="02"
              title="Protected Health Information"
              text="PHI, electronic PHI, identifiers and appropriate handling of health information."
            />

            <Topic
              number="03"
              title="Privacy Rule"
              text="Permitted uses and disclosures, authorization, minimum necessary and individual rights."
            />

            <Topic
              number="04"
              title="Security Rule"
              text="Administrative, physical and technical safeguards for electronic protected health information."
            />

            <Topic
              number="05"
              title="Breach Notification"
              text="Recognizing potential breaches, reporting concerns and understanding notification responsibilities."
            />

            <Topic
              number="06"
              title="Workplace Scenarios"
              text="Practical confidentiality, communication, access control and information-handling situations."
              last
            />
          </div>
        </div>

        {/* RIGHT */}
        <aside
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "18px",
            padding: "30px",
            boxShadow: "0 10px 35px rgba(15, 23, 42, 0.06)",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              margin: "0 0 25px",
            }}
          >
            Assessment details
          </h2>

          <Detail label="Questions" value="40" />
          <Detail label="Time limit" value="45 minutes" />
          <Detail label="Passing score" value="80%" />
          <Detail label="Format" value="Multiple choice + scenarios" />
          <Detail label="Credential" value="Digital certificate" />
          <Detail label="Verification" value="Unique ID + QR" last />

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "12px",
              padding: "17px",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                color: "#1e40af",
                fontWeight: 700,
                fontSize: "13px",
                marginBottom: "6px",
              }}
            >
              Before you begin
            </div>

            <div
              style={{
                color: "#475569",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Once started, the assessment timer will begin. Make sure
              you have enough uninterrupted time to complete your
              attempt.
            </div>
          </div>

          <Link
            href="/certifications/hipaa/assessment"
            style={{
              display: "block",
              textAlign: "center",
              background: "#1557ff",
              color: "#ffffff",
              textDecoration: "none",
              padding: "15px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            Start HIPAA Assessment
          </Link>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "11px",
              lineHeight: 1.6,
              margin: "17px 0 0",
            }}
          >
            A LearnLift credential is issued only after successful
            completion of the applicable assessment requirements.
          </p>
        </aside>
      </section>
    </main>
  );
}

function Topic({
  number,
  title,
  text,
  last = false,
}: {
  number: string;
  title: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50px 1fr",
        gap: "15px",
        padding: "18px 0",
        borderBottom: last ? "none" : "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          color: "#1557ff",
          fontWeight: 800,
          fontSize: "13px",
        }}
      >
        {number}
      </div>

      <div>
        <div
          style={{
            fontWeight: 700,
            fontSize: "15px",
            marginBottom: "5px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

function Detail({
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
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
        padding: "13px 0",
        borderBottom: last ? "none" : "1px solid #e2e8f0",
      }}
    >
      <span
        style={{
          color: "#64748b",
          fontSize: "13px",
        }}
      >
        {label}
      </span>

      <strong
        style={{
          color: "#0f172a",
          fontSize: "13px",
          textAlign: "right",
        }}
      >
        {value}
      </strong>
    </div>
  );
}