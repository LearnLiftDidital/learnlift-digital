"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  Languages,
  Network,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Bot,
    title: "AI Solutions",
    description:
      "Build, evaluate and improve AI systems with practical human expertise across automation, data, evaluation and AI workflows.",
    capabilities: [
      "AI Automation",
      "AI Evaluation",
      "Data Annotation",
      "LLM & NLP",
      "AI Testing",
      "Human-in-the-loop",
    ],
    featured: true,
  },
  {
    number: "02",
    icon: Languages,
    title: "Language & Linguistic Services",
    description:
      "Professional multilingual services supporting global communication, localization and language technology workflows.",
    capabilities: [
      "Translation",
      "Interpretation",
      "Localization",
      "Transcription",
      "MTPE",
      "Linguistic QA",
    ],
    featured: false,
  },
  {
    number: "03",
    icon: Code2,
    title: "Digital Solutions",
    description:
      "Flexible digital support for organizations that need reliable people and processes across technology and digital operations.",
    capabilities: [
      "Data Processing",
      "Research",
      "Web & Technology",
      "Content Operations",
      "Digital Support",
      "Back Office",
    ],
    featured: false,
  },
  {
    number: "04",
    icon: Users,
    title: "BPO & Outsourced Workforce",
    description:
      "Access qualified professionals and managed teams for scalable business operations without building every function in-house.",
    capabilities: [
      "Managed Teams",
      "Back-office Operations",
      "Customer Support",
      "Data Operations",
      "Remote Workforce",
      "Project Teams",
    ],
    featured: false,
  },
];

const additionalCapabilities = [
  {
    icon: Database,
    title: "AI Data & Annotation",
    description:
      "Structured data collection, annotation, labeling, transcription and evaluation for AI and machine-learning workflows.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Automate repetitive workflows and connect AI-powered tools to practical business processes.",
  },
  {
    icon: Network,
    title: "Global Talent Network",
    description:
      "A growing network of qualified professionals matched to projects based on skills, language and experience.",
  },
];

export default function LearningPaths() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-250px] top-[180px] h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[130px]" />
        <div className="absolute right-[-250px] bottom-[120px] h-[500px] w-[500px] rounded-full bg-cyan-100/40 blur-[130px]" />
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
            What We Deliver
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
            Solutions built for
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              the way work is changing.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From AI and multilingual data to digital operations and
            outsourced teams, LearnLift helps organizations access the
            capabilities they need to move faster and scale efficiently.
          </p>
        </motion.div>

        {/* Main services */}
        <div
          id="solutions"
          className="mt-16 grid gap-5 lg:grid-cols-2"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-300 sm:p-8 ${
                  service.featured
                    ? "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-[0_18px_55px_rgba(29,78,216,0.10)]"
                    : "border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:border-blue-200 hover:shadow-[0_22px_55px_rgba(15,23,42,0.09)]"
                }`}
              >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-200/30 blur-[65px] transition duration-500 group-hover:bg-cyan-200/40" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        service.featured
                          ? "bg-blue-700 text-white shadow-lg shadow-blue-200"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-slate-950">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
                    {service.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                        {capability}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="mt-7 border-t border-slate-200/80 pt-6">
                    <a
                      href="#request-demo"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-blue-700"
                    >
                      Discuss this service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Capability strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-6 grid overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 sm:grid-cols-3"
        >
          {additionalCapabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`p-7 ${
                  index !== additionalCapabilities.length - 1
                    ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* B2B CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mt-10 overflow-hidden rounded-[30px] bg-slate-950 px-7 py-10 text-white shadow-2xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12"
        >
          <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[350px] w-[350px] rounded-full bg-blue-600/25 blur-[80px]" />

          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Have a project?
            </p>

            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Tell us what you need. We&apos;ll build the right solution.
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Share your requirements, timeline and preferred scope. Our team
              will assess your needs and connect you with the right
              capabilities and talent.
            </p>
          </div>

          <a
            href="#request-demo"
            className="relative mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 lg:mt-0"
          >
            Request a Demo
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}