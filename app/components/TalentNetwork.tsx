"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  Globe2,
  Languages,
  Users,
  Workflow,
} from "lucide-react";

const talentCategories = [
  {
    icon: BrainCircuit,
    title: "AI & Data Specialists",
    description:
      "Professionals supporting AI data, annotation, evaluation, NLP, research, and human-in-the-loop workflows.",
    skills: ["AI Evaluation", "Data Annotation", "NLP", "Data Operations"],
  },
  {
    icon: Languages,
    title: "Language Professionals",
    description:
      "Qualified linguists supporting multilingual communication, localization, interpretation, and language-data projects.",
    skills: ["Translation", "Interpretation", "Localization", "MTPE"],
  },
  {
    icon: Workflow,
    title: "Digital Specialists",
    description:
      "Professionals supporting research, web, content, data processing, digital operations, and technology-enabled work.",
    skills: ["Research", "Web Support", "Content Operations", "Data Processing"],
  },
  {
    icon: Users,
    title: "Operations & BPO",
    description:
      "Flexible professionals and project teams supporting customer service, back-office functions, and operational workflows.",
    skills: ["Customer Support", "Back Office", "Data Operations", "Project Teams"],
  },
];

const networkStrengths = [
  "Skills-based talent matching",
  "Multilingual capabilities",
  "Professional profiles and assessments",
  "Flexible individual or team deployment",
];

export default function TalentNetwork() {
  return (
    <section
      id="talent"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            <Globe2 className="h-4 w-4" />
            LearnLift Verified Talent Network
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            The people behind
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              the work.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Access qualified professionals across AI, language, digital
            operations, and outsourced workforce services — matched to the
            skills, languages, and requirements of your project.
          </p>
        </motion.div>

        {/* Talent categories */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {talentCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified talent
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Network capability panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-[0_30px_80px_rgba(15,23,42,0.15)]"
        >
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            {/* Left */}
            <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -left-24 -top-24 h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-[90px]" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-950/50">
                  <Users className="h-6 w-6" />
                </div>

                <h3 className="mt-6 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Talent matched to the work.
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  LearnLift connects organizations with professionals whose
                  capabilities align with the requirements of each engagement.
                  From individual specialists to coordinated project teams,
                  our model is designed around the work that needs to be done.
                </p>

                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Discuss Your Workforce Needs
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="border-t border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-300">
                Network strengths
              </p>

              <div className="mt-6 space-y-4">
                {networkStrengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <p className="text-sm font-semibold leading-6 text-slate-200">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-cyan-300" />

                  <p className="text-sm font-extrabold text-white">
                    Global delivery
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Diverse professionals across languages, disciplines, and
                  locations — ready to support global work.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold leading-7 text-slate-500">
            LearnLift combines talent, technology, and operational expertise
            to help organizations access the capabilities they need — when
            they need them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}