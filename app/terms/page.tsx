import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="inline-flex items-center">
            <span className="text-2xl font-extrabold tracking-tight text-blue-700">
              LearnLift
            </span>
            <span className="ml-1 text-2xl font-extrabold tracking-tight text-slate-950">
              Digital
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 py-16 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              <FileText className="h-4 w-4" />
              LearnLift Digital
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Terms of Use
            </h1>

            <p className="mt-4 text-slate-500">Last updated: July 2026</p>
          </div>

          <div className="space-y-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                1. Introduction
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                Welcome to LearnLift Digital. These Terms of Use apply when you
                access or use our website, learning opportunities, programs,
                resources, and related services. By using our website or
                participating in our services, you agree to use them
                responsibly and in accordance with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                2. Our Services
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                LearnLift Digital provides and supports learning opportunities
                focused on practical digital skills, professional development,
                career readiness, certifications, and pathways to digital
                opportunities. Available programs, requirements, schedules,
                and services may change as the organization develops.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                3. Eligibility and Participation
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                Some LearnLift Digital programs may have specific eligibility
                requirements, application processes, assessments, or
                participation conditions. Meeting initial requirements does not
                automatically guarantee admission, certification, employment,
                or access to every opportunity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                4. Learner Responsibilities
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                Learners and website users are expected to provide accurate
                information, communicate respectfully, complete their own work,
                follow applicable program guidelines, and use LearnLift Digital
                resources only for lawful and appropriate purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                5. Certifications and Third-Party Platforms
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                LearnLift Digital may recommend or support access to
                certifications, courses, assessments, tools, or services
                provided by third parties. Unless explicitly stated otherwise,
                these third-party services are governed by their own terms,
                policies, requirements, and decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                6. Employment and Opportunity Disclaimer
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                LearnLift Digital aims to help learners strengthen their skills
                and prepare for professional opportunities. However,
                participation in a LearnLift Digital program does not guarantee
                employment, freelance work, income, admission to another
                program, certification, or any specific career outcome.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                7. Intellectual Property
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                Content created and published by LearnLift Digital, including
                original website content, branding, learning materials, and
                resources, may not be copied, redistributed, or used for
                commercial purposes without appropriate permission, except
                where such use is permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                8. Acceptable Use
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                You may not misuse our website or services, attempt to disrupt
                their operation, submit intentionally false or harmful
                information, impersonate another person, or use LearnLift
                Digital platforms for unlawful activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                9. Limitation of Responsibility
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                We work to provide useful and accurate information, but
                LearnLift Digital cannot guarantee that all website content or
                services will always be available, uninterrupted, error-free,
                or suitable for every individual circumstance. Users remain
                responsible for decisions they make based on information and
                opportunities presented through our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                10. Changes to These Terms
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                LearnLift Digital may update these Terms of Use as our website,
                programs, and services evolve. Updated terms will be published
                on this page with a revised update date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                11. Contact Us
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                If you have questions about these Terms of Use, contact
                LearnLift Digital at{" "}
                <a
                  href="mailto:contact.learnlift@gmail.com"
                  className="font-bold text-blue-700 hover:text-blue-800"
                >
                  contact.learnlift@gmail.com
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to LearnLift Digital
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}