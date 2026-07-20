"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  Languages,
  Megaphone,
  Mic2,
  PenTool,
  Sparkles,
} from "lucide-react";

const learningPaths = [
  {
    icon: Bot,
    title: "AI & Emerging Technologies",
    description:
      "Build practical skills for an AI-powered world, from intelligent tools and automation to real-world AI workflows.",
    skills: ["AI Tools", "Automation", "Prompting"],
    accent: "blue",
  },
  {
    icon: Mic2,
    title: "Interpretation",
    description:
      "Develop professional interpreting skills for medical, community, and remote communication environments.",
    skills: ["Medical", "Remote", "Professional"],
    accent: "cyan",
  },
  {
    icon: Languages,
    title: "Translation & Localization",
    description:
      "Learn modern translation, localization, quality assurance, and language technology workflows used globally.",
    skills: ["Translation", "Localization", "QA"],
    accent: "violet",
  },
  {
    icon: BriefcaseBusiness,
    title: "Digital Freelancing",
    description:
      "Learn how to position your skills, find opportunities, work with clients, and build a sustainable freelance career.",
    skills: ["Freelancing", "Clients", "Remote Work"],
    accent: "emerald",
  },
  {
    icon: Code2,
    title: "Technology & Web Skills",
    description:
      "Explore practical digital and technology skills that help you create, build, and participate in the digital economy.",
    skills: ["Web", "Digital Tools", "Technology"],
    accent: "indigo",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Build skills in digital communication, content, online branding, and strategies that help ideas reach the right audience.",
    skills: ["Content", "Branding", "Marketing"],
    accent: "orange",
  },
  {
    icon: PenTool,
    title: "AI & Data Work",
    description:
      "Prepare for emerging digital work including AI data annotation, evaluation, content review, and related opportunities.",
    skills: ["Annotation", "AI Data", "Evaluation"],
    accent: "rose",
  },
  {
    icon: Sparkles,
    title: "Career Accelerator",
    description:
      "Strengthen your professional profile with career guidance, certifications, job-search skills, and opportunity readiness.",
    skills: ["Career", "Certificates", "Job Search"],
    accent: "amber",
  },
];

const accentStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-700",
    border: "hover:border-blue-200",
    glow: "group-hover:bg-blue-100/60",
    tag: "bg-blue-50 text-blue-700",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-700",
    border: "hover:border-cyan-200",
    glow: "group-hover:bg-cyan-100/60",
    tag: "bg-cyan-50 text-cyan-700",
  },
  violet: {
    icon: "bg-violet-50 text-violet-700",
    border: "hover:border-violet-200",
    glow: "group-hover:bg-violet-100/60",
    tag: "bg-violet-50 text-violet-700",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-700",
    border: "hover:border-emerald-200",
    glow: "group-hover:bg-emerald-100/60",
    tag: "bg-emerald-50 text-emerald-700",
  },
  indigo: {
    icon: "bg-indigo-50 text-indigo-700",
    border: "hover:border-indigo-200",
    glow: "group-hover:bg-indigo-100/60",
    tag: "bg-indigo-50 text-indigo-700",
  },
  orange: {
    icon: "bg-orange-50 text-orange-700",
    border: "hover:border-orange-200",
    glow: "group-hover:bg-orange-100/60",
    tag: "bg-orange-50 text-orange-700",
  },
  rose: {
    icon: "bg-rose-50 text-rose-700",
    border: "hover:border-rose-200",
    glow: "group-hover:bg-rose-100/60",
    tag: "bg-rose-50 text-rose-700",
  },
  amber: {
    icon: "bg-amber-50 text-amber-700",
    border: "hover:border-amber-200",
    glow: "group-hover:bg-amber-100/60",
    tag: "bg-amber-50 text-amber-700",
  },
};

export default function LearningPaths() {
  return (
    <section
      id="learning-paths"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-250px] top-[200px] h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute right-[-250px] bottom-[100px] h-[500px] w-[500px] rounded-full bg-cyan-100/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            <Sparkles className="h-4 w-4" />
            Explore what you can become
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
            Choose a path.
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Build skills for your future.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore practical learning paths designed to help you develop
            valuable skills, strengthen your professional profile, and prepare
            for opportunities in the digital economy.
          </p>
        </motion.div>

        {/* Featured banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-16 overflow-hidden rounded-[32px] bg-slate-950 px-7 py-9 text-white shadow-2xl shadow-slate-200 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12"
        >
          <div className="absolute right-[-80px] top-[-120px] h-[300px] w-[300px] rounded-full bg-blue-600/30 blur-[70px]" />
          <div className="absolute bottom-[-150px] left-[30%] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-[80px]" />

          <div className="relative max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Not sure where to begin?
            </p>

            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Start with your goal. We&apos;ll help you find the path.
            </h3>

            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Whether you want to build digital skills, explore AI, work
              remotely, or strengthen your career profile, LearnLift is
              designed to help you move forward.
            </p>
          </div>

          <a
            href="#how-it-works"
            className="relative mt-7 inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 lg:mt-0"
          >
            Find Your Path
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Learning path cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {learningPaths.map((path, index) => {
            const Icon = path.icon;
            const styles =
              accentStyles[path.accent as keyof typeof accentStyles];

            return (
              <motion.article
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.08,
                }}
                whileHover={{ y: -8 }}
                className={`group relative flex min-h-[350px] flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 ${styles.border} hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute -right-20 -top-20 h-44 w-44 rounded-full bg-transparent blur-[50px] transition duration-500 ${styles.glow}`}
                />

                {/* Card number */}
                <div className="absolute right-6 top-6 text-xs font-bold text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className={`relative flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-2xl ${styles.icon}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="relative mt-6 text-xl font-extrabold tracking-tight text-slate-950">
                  {path.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-slate-600">
                  {path.description}
                </p>

                {/* Skills */}
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {path.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${styles.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom link */}
                <div className="relative mt-auto pt-7">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:text-blue-700"
                  >
                    Explore path
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-slate-200 bg-slate-50 px-7 py-8 text-center sm:px-10 lg:flex-row lg:text-left"
        >
          <div>
            <h3 className="text-xl font-extrabold text-slate-950">
              More learning opportunities are coming.
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              LearnLift Digital will continue expanding its programs as new
              skills and career opportunities emerge.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-blue-700 transition hover:gap-3"
          >
            Stay connected
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}