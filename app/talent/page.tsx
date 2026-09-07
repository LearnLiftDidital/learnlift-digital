"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabase";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Languages,
  ShieldCheck,
  Upload,
  Users,
} from "lucide-react";

const skillOptions = [
  "AI Evaluation",
  "Data Annotation",
  "AI Data Collection",
  "LLM / NLP",
  "AI Testing",
  "Translation",
  "Interpretation",
  "Localization",
  "Transcription",
  "MT Post-Editing",
  "Linguistic QA",
  "Research",
  "Data Processing",
  "Web & Technology",
  "Content Operations",
  "Customer Support",
  "Back Office",
  "BPO / Operations",
  "Other",
];

const engagementOptions = [
  "Freelance / Project-based",
  "Part-time",
  "Full-time",
  "Open to opportunities",
];

export default function TalentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const skills = formData.getAll("skills") as string[];

  const { error } = await supabase
    .from("talent_profiles")
    .insert({
      full_name: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      location: formData.get("location") as string,

      primary_language: formData.get("primaryLanguage") as string,
      other_languages: formData.get("otherLanguages") as string,
      language_experience: formData.get("languageLevel") as string,

      skills,

      experience: formData.get("experience") as string,
      expertise: formData.get("expertise") as string,
      certifications: formData.get("certifications") as string,

      linkedin: formData.get("linkedin") as string,
      engagement: formData.get("engagement") as string,
      availability: formData.get("availability") as string,

      additional: formData.get("additional") as string,
    });

  if (error) {
  console.error("Supabase error:", {
    message: error.message,
    details: error.details,
    hint: error.hint,
    code: error.code,
  });

  alert(`Submission failed: ${error.message}`);
  return;
}

  setSubmitted(true);
}

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-extrabold tracking-[-0.04em] text-blue-700">
              LearnLift
            </span>
            <span className="ml-1 text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
              Digital
            </span>
          </a>

          <a
            href="/#contact"
            className="hidden items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 sm:inline-flex"
          >
            For Organizations
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              <Users className="h-4 w-4" />
              LearnLift Verified Talent Network
            </div>

            <h1 className="text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Join the network behind global work.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Connect with LearnLift Digital and become part of a global
              network of professionals across AI, language, digital
              operations, technology, and outsourced workforce services.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                <Globe2 className="h-4 w-4 text-blue-700" />
                Global opportunities
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                <Languages className="h-4 w-4 text-blue-700" />
                50+ languages
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                <ShieldCheck className="h-4 w-4 text-blue-700" />
                Skills-based matching
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left information */}
          <div>
            <div className="sticky top-28">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950">
                Tell us what you can do.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We use your professional information, skills, languages,
                experience, and availability to understand where you can
                contribute to client projects.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    number: "01",
                    title: "Create your profile",
                    text: "Share your professional background, languages, skills, and experience.",
                  },
                  {
                    number: "02",
                    title: "Verification & assessment",
                    text: "Relevant profiles may go through skills, language, or qualification checks.",
                  },
                  {
                    number: "03",
                    title: "Get matched",
                    text: "When a suitable opportunity becomes available, we can contact qualified professionals.",
                  },
                ].map((item) => (
                  <div key={item.number} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-700">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <p className="text-sm font-bold text-blue-900">
                  Important
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-800">
                  Joining the network does not guarantee employment or a
                  project. Opportunities depend on client requirements,
                  qualifications, availability, and successful matching.
                </p>
              </div>
            </div>
          </div>

          {/* Registration form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>

                <h2 className="mt-6 text-3xl font-black text-slate-950">
                  Profile received.
                </h2>

                <p className="mt-4 max-w-md leading-7 text-slate-600">
                  Thank you for your interest in joining the LearnLift Talent
                  Network. Our team will review your information and contact
                  you when relevant next steps or opportunities are available.
                </p>

                <a
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Back to LearnLift Digital
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Talent registration
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-slate-950">
                    Join the Talent Network
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    Complete your professional profile so we can understand
                    your capabilities and match you with relevant work.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-8"
                >
                  {/* Personal information */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      Personal information
                    </h3>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="text-sm font-bold text-slate-700"
                        >
                          Full name *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          required
                          type="text"
                          placeholder="Your full name"
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-bold text-slate-700"
                        >
                          Email address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          required
                          type="email"
                          placeholder="you@example.com"
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="text-sm font-bold text-slate-700"
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+254..."
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="text-sm font-bold text-slate-700"
                        >
                          Country / Location *
                        </label>
                        <input
                          id="location"
                          name="location"
                          required
                          type="text"
                          placeholder="Kenya"
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      Languages
                    </h3>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="primaryLanguage"
                          className="text-sm font-bold text-slate-700"
                        >
                          Primary language *
                        </label>
                        <input
                          id="primaryLanguage"
                          name="primaryLanguage"
                          required
                          type="text"
                          placeholder="e.g. Somali"
                          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="otherLanguages"
                          className="text-sm font-bold text-slate-700"
                        >
                          Other languages
                        </label>
                        <input
                          id="otherLanguages"
                          name="otherLanguages"
                          type="text"
                          placeholder="e.g. English, Swahili, Arabic"
                          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="languageLevel"
                          className="text-sm font-bold text-slate-700"
                        >
                          Language proficiency / relevant experience
                        </label>
                        <textarea
                          id="languageLevel"
                          name="languageLevel"
                          rows={3}
                          placeholder="Tell us about your language proficiency, interpretation or translation experience..."
                          className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      Professional skills
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Select the areas where you have relevant experience.
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {skillOptions.map((skill) => (
                        <label
                          key={skill}
                          className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/40"
                        >
                          <input
                            type="checkbox"
                            name="skills"
                            value={skill}
                            className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
                          />
                          {skill}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Professional information */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      Professional profile
                    </h3>

                    <div className="mt-5 space-y-5">
                      <div>
                        <label
                          htmlFor="experience"
                          className="text-sm font-bold text-slate-700"
                        >
                          Years of relevant experience *
                        </label>

                        <select
                          id="experience"
                          name="experience"
                          required
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        >
                          <option value="">Select experience</option>
                          <option value="less-than-1">Less than 1 year</option>
                          <option value="1-2">1–2 years</option>
                          <option value="3-5">3–5 years</option>
                          <option value="6-10">6–10 years</option>
                          <option value="10-plus">10+ years</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="expertise"
                          className="text-sm font-bold text-slate-700"
                        >
                          Areas of expertise
                        </label>

                        <textarea
                          id="expertise"
                          name="expertise"
                          rows={4}
                          placeholder="Describe your strongest professional areas, industries, tools, or types of projects you have worked on..."
                          className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="certifications"
                          className="text-sm font-bold text-slate-700"
                        >
                          Certifications
                        </label>

                        <input
                          id="certifications"
                          name="certifications"
                          type="text"
                          placeholder="e.g. HIPAA, Google, AWS, language certifications"
                          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="linkedin"
                            className="text-sm font-bold text-slate-700"
                          >
                            LinkedIn / Portfolio
                          </label>

                          <input
                            id="linkedin"
                            name="linkedin"
                            type="url"
                            placeholder="https://..."
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="engagement"
                            className="text-sm font-bold text-slate-700"
                          >
                            Preferred engagement
                          </label>

                          <select
                            id="engagement"
                            name="engagement"
                            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                          >
                            <option value="">
                              Select preference
                            </option>

                            {engagementOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="availability"
                          className="text-sm font-bold text-slate-700"
                        >
                          Availability
                        </label>

                        <input
                          id="availability"
                          name="availability"
                          type="text"
                          placeholder="e.g. Available immediately, evenings, 20 hrs/week"
                          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cv"
                          className="text-sm font-bold text-slate-700"
                        >
                          CV / Resume
                        </label>

                        <label
  htmlFor="cv"
  className="mt-2 block cursor-pointer rounded-xl border-2 border-dashed border-slate-200 p-6 text-center transition hover:border-blue-300 hover:bg-blue-50/30"
>
  <Upload className="mx-auto h-7 w-7 text-slate-400" />

  <p className="mt-3 text-sm font-semibold text-slate-700">
    Upload your CV or resume
  </p>

  <p className="mt-1 text-xs text-slate-500">
    Click here to choose a file
  </p>

  <p className="mt-1 text-xs text-slate-400">
    PDF, DOC, or DOCX
  </p>

  <input
  id="cv"
  name="cv"
  type="file"
  accept=".pdf,.doc,.docx"
  onChange={(event) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  }}
  className="sr-only"
/>
{selectedFile && (
  <p className="mt-4 text-sm font-bold text-blue-700">
    ✓ {selectedFile.name}
  </p>
)}
</label>
                      </div>

                      <div>
                        <label
                          htmlFor="additional"
                          className="text-sm font-bold text-slate-700"
                        >
                          Anything else we should know?
                        </label>

                        <textarea
                          id="additional"
                          name="additional"
                          rows={4}
                          placeholder="Additional experience, specializations, availability, or other relevant information..."
                          className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="border-t border-slate-200 pt-6">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
                      />

                      <span className="text-sm leading-6 text-slate-600">
                        I confirm that the information I have provided is
                        accurate and I agree to be contacted by LearnLift
                        Digital regarding relevant professional opportunities.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.5 hover:bg-blue-800"
                    >
                      Join the Talent Network
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                      By submitting this form, you agree that LearnLift
                      Digital may use your information for talent matching,
                      verification, and relevant communication.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-10">
          <h2 className="text-2xl font-black tracking-[-0.02em] text-slate-950 sm:text-3xl">
            Looking for talent instead?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            If you represent an organization looking for AI, language,
            digital, or outsourced workforce solutions, talk to our team.
          </p>

          <a
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}