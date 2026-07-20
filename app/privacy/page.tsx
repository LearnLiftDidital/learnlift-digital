import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
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
              <ShieldCheck className="h-4 w-4" />
              Your Privacy Matters
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-slate-500">
              Last updated: July 2026
            </p>
          </div>

          <div className="space-y-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                1. Introduction
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                LearnLift Digital respects your privacy and is committed to
                handling personal information responsibly. This Privacy Policy
                explains the types of information we may collect when you use
                our website, contact us, or participate in our learning
                programs and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                2. Information We Collect
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                We may collect information that you voluntarily provide to us,
                including your name, email address, messages, application
                information, learning interests, and other information you
                choose to submit through our website or communication channels.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                3. How We Use Your Information
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                We may use the information you provide to respond to inquiries,
                communicate about learning opportunities, manage program
                applications and participation, improve our services, support
                learners, and communicate with potential partners or
                collaborators.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                4. Contact Form Information
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                When you submit our contact form, the information you provide
                is used to receive and respond to your inquiry. Our website may
                use third-party form processing services to securely transmit
                form submissions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                5. Sharing of Information
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                LearnLift Digital does not sell your personal information. We
                may use trusted service providers when necessary to operate our
                website, process communications, or deliver our services.
                Information may also be disclosed when required by applicable
                law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                6. Data Security
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                We take reasonable measures to protect information submitted to
                us. However, no online system or method of electronic
                transmission can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                7. Third-Party Services
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                Our website may use or link to third-party platforms and
                services. These third parties may have their own privacy
                policies and practices, and we encourage users to review them
                when using those services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                8. Changes to This Policy
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                We may update this Privacy Policy as LearnLift Digital grows or
                as our services change. Updates will be reflected on this page
                with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-950">
                9. Contact Us
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                If you have questions about this Privacy Policy or how we handle
                information, contact LearnLift Digital at{" "}
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