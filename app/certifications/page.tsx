import Link from "next/link";

const certifications = [
  {
    title: "40-Hour Medical Interpreter Training",
    description:
      "Professional medical interpreter training covering core interpreting skills, ethics, terminology, standards of practice, and healthcare communication.",
    category: "Language & Interpreting",
    href: "/certifications/medical-interpreter",
    status: "Available",
  },
  {
    title: "Applied AI Foundations",
    description:
      "Build practical foundations in artificial intelligence, responsible AI use, modern AI tools, and real-world applications.",
    category: "Artificial Intelligence",
    href: "/certifications/ai-foundations",
    status: "Coming Soon",
  },
  {
    title: "Generative AI & Prompt Engineering",
    description:
      "Learn how to work effectively with generative AI systems and design structured prompts for professional tasks and workflows.",
    category: "Artificial Intelligence",
    href: "/certifications/prompt-engineering",
    status: "Coming Soon",
  },
  {
    title: "AI Data Annotation & Evaluation",
    description:
      "Develop practical skills for data annotation, AI response evaluation, quality assurance, and human-in-the-loop AI workflows.",
    category: "Artificial Intelligence",
    href: "/certifications/ai-data-annotation",
    status: "Coming Soon",
  },
  {
    title: "Digital Freelancing Foundations",
    description:
      "Learn the fundamentals of building a professional online profile, finding opportunities, communicating with clients, and delivering digital work.",
    category: "Digital Skills",
    href: "/certifications/digital-freelancing",
    status: "Coming Soon",
  },
];

export default function CertificationsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background: "#071126",
          color: "#ffffff",
          padding: "85px 24px 95px",
        }}
      >
        <div
          style={{
            maxWidth: "1150px",
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
            LEARNLIFT DIGITAL CREDENTIALS
          </div>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: 1.08,
              margin: "0 0 22px",
              maxWidth: "780px",
              letterSpacing: "-1.5px",
            }}
          >
            Build skills. Prove what you can do.
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: 0,
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            LearnLift Digital certification pathways combine structured
            learning, skills assessment, and verifiable digital credentials
            designed to demonstrate practical capability.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "65px 24px 25px",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
          }}
        >
          <div
            style={{
              color: "#1557ff",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            CERTIFICATION PATHWAYS
          </div>

          <h2
            style={{
              color: "#0f172a",
              fontSize: "34px",
              margin: "0 0 14px",
            }}
          >
            Choose the skill you want to demonstrate
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Each certification has its own learning and assessment pathway.
            Credentials are issued only after the applicable completion and
            assessment requirements have been met.
          </p>
        </div>
      </section>

      {/* CERTIFICATION CARDS */}
      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "25px 24px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "22px",
        }}
      >
        {certifications.map((certification) => {
          const available = certification.status === "Available";

          return (
            <article
              key={certification.title}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                minHeight: "310px",
                boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "15px",
                  marginBottom: "22px",
                }}
              >
                <span
                  style={{
                    color: "#1557ff",
                    background: "#eff6ff",
                    borderRadius: "20px",
                    padding: "7px 11px",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}
                >
                  {certification.category}
                </span>

                <span
                  style={{
                    color: available ? "#15803d" : "#64748b",
                    background: available ? "#ecfdf3" : "#f1f5f9",
                    borderRadius: "20px",
                    padding: "7px 11px",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}
                >
                  {certification.status}
                </span>
              </div>

              <h3
                style={{
                  color: "#0f172a",
                  fontSize: "23px",
                  lineHeight: 1.3,
                  margin: "0 0 14px",
                }}
              >
                {certification.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  margin: "0 0 28px",
                  flex: 1,
                }}
              >
                {certification.description}
              </p>

              {available ? (
                <Link
                  href={certification.href}
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#1557ff",
                    color: "#ffffff",
                    textDecoration: "none",
                    padding: "13px 18px",
                    borderRadius: "9px",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  View Certification
                </Link>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    background: "#f1f5f9",
                    color: "#94a3b8",
                    padding: "13px 18px",
                    borderRadius: "9px",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  Coming Soon
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          background: "#ffffff",
          borderTop: "1px solid #e2e8f0",
          padding: "75px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#0f172a",
              fontSize: "32px",
              margin: "0 0 45px",
            }}
          >
            How LearnLift credentials work
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "25px",
            }}
          >
            <Step
              number="01"
              title="Choose a certification"
              text="Open the dedicated pathway for the skill or certification you want to complete."
            />

            <Step
              number="02"
              title="Learn & prepare"
              text="Complete the required training, preparation materials, or prerequisite activities."
            />

            <Step
              number="03"
              title="Complete the assessment"
              text="Demonstrate that you meet the defined requirements for the credential."
            />

            <Step
              number="04"
              title="Receive your credential"
              text="Eligible learners receive a unique credential with QR-based online verification."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <div
        style={{
          color: "#1557ff",
          fontSize: "13px",
          fontWeight: 800,
          letterSpacing: "2px",
          marginBottom: "12px",
        }}
      >
        {number}
      </div>

      <h3
        style={{
          color: "#0f172a",
          fontSize: "18px",
          margin: "0 0 9px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#64748b",
          fontSize: "14px",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}