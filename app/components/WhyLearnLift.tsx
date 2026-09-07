"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Bot,
  CheckCircle2,
  Globe2,
  Languages,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    icon: Bot,
    title: "AI capability",
    description:
      "Support AI initiatives with automation, data services, evaluation, annotation, testing and human expertise.",
  },
  {
    icon: Languages,
    title: "Multilingual expertise",
    description:
      "Access professional language capabilities across 50+ languages for communication, localization and AI language workflows.",
  },
  {
    icon: Users,
    title: "Qualified global talent",
    description:
      "Connect with professionals selected according to project requirements, skills, language capability and experience.",
  },
  {
    icon: Workflow,
    title: "Flexible workforce",
    description:
      "Scale project teams and outsourced operations without having to build every capability internally.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-focused delivery",
    description:
      "We build structured workflows around assessment, quality control, project coordination and reliable delivery.",
  },
  {
    icon: Globe2,
    title: "Built for global work",
    description:
      "Work with a diverse talent network designed to support organizations operating across markets and borders.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your project, business challenge, required skills, languages, timeline or workforce requirements.",
  },
  {
    number: "02",
    title: "We design the right solution",
    description:
      "We assess the scope and identify the appropriate services, workflow and talent for your requirements.",
  },
  {
    number: "03",
    title: "We build the team",
    description:
      "Qualified professionals are matched to the project based on relevant capabilities and requirements.",
  },
  {
    number: "04",
    title: "We manage delivery",
    description:
      "LearnLift coordinates the work, quality processes and communication through project completion.",
  },
];

export default function WhyLearnLift() {
  return (
    <>
      {/* WHY LEARNLIFT */}
      <section
        id="about"
        className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28 lg:py-32"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300">
              <Sparkles className="h-4 w-4" />
              Why Organizations Choose LearnLift
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              The capabilities you need.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                The talent to deliver them.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              LearnLift combines AI expertise, multilingual capabilities,
              digital services and flexible workforce solutions to help
              organizations execute work faster and scale with confidence.
            </p>
          </motion.div>

          {/* Reasons */}
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.08,
                  }}
                  className="group rounded-[26px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Mission / impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative mt-16 overflow-hidden rounded-[32px] border border-blue-400/20 bg-gradient-to-r from-blue-700 to-blue-600 p-8 shadow-2xl shadow-blue-950/30 sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-[70px]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-blue-100">
                  <Target className="h-5 w-5" />
                  Our Purpose
                </div>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                  Expanding access to the global economy.
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                  We believe capable people should not be excluded from
                  economic opportunity because of where they come from. Through
                  our talent network, LearnLift creates pathways for qualified
                  professionals — including people from underserved and
                  displaced communities — to participate in global work.
                </p>
              </div>

              <a
                href="#talent"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Meet Our Talent Network
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="relative overflow-hidden bg-[#f8fbff] py-24 sm:py-28 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[120px]" />
          <div className="absolute bottom-0 left-[-200px] h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Workflow className="h-4 w-4" />
              How We Work
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              From requirement to
              <br />
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                delivered solution.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A straightforward process designed to connect your requirements
              with the right capabilities, people and delivery structure.
            </p>
          </motion.div>

          {/* Workflow */}
          <div className="relative mt-16">
            <div className="absolute left-[12.5%] right-[12.5%] top-[42px] hidden h-[2px] bg-gradient-to-r from-blue-200 via-blue-500 to-cyan-300 lg:block" />

            <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  <div className="relative z-10 mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-[26px] border-8 border-[#f8fbff] bg-blue-700 text-white shadow-xl shadow-blue-200">
                    <span className="text-lg font-extrabold">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-5 min-h-[245px] rounded-[28px] border border-slate-200 bg-white p-7 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]">
                    <h3 className="text-xl font-extrabold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Training pathway */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-16 overflow-hidden rounded-[30px] border border-blue-100 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.06)]"
          >
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
                  <Award className="h-5 w-5" />
                  Our Talent Development Pathway
                </div>

                <h3 className="mt-4 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                  Learn. Certify. Get ready for real-world work.
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  We continuously develop our talent pipeline through practical
                  training, relevant certifications, skills assessment and
                  professional readiness — helping qualified people become
                  prepared for real projects and employment opportunities.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Practical training
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Skills assessment
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Professional certifications
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Real-world opportunities
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 p-8 lg:border-l lg:border-t-0 sm:p-10">
                <a
                  href="#talent"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-1 hover:bg-blue-800"
                >
                  Explore Talent Network
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom trust strip */}
          <div className="mt-12 grid overflow-hidden rounded-[28px] border border-slate-200 bg-white sm:grid-cols-3">
            <div className="p-7 text-center sm:border-r sm:border-slate-200">
              <Bot className="mx-auto h-7 w-7 text-blue-700" />
              <p className="mt-4 text-lg font-extrabold text-slate-950">
                AI-enabled
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Built around emerging technology and human expertise
              </p>
            </div>

            <div className="border-y border-slate-200 p-7 text-center sm:border-x-0 sm:border-y-0 sm:border-r">
              <Languages className="mx-auto h-7 w-7 text-blue-700" />
              <p className="mt-4 text-lg font-extrabold text-slate-950">
                50+ languages
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Multilingual capability across global markets
              </p>
            </div>

            <div className="p-7 text-center">
              <Network className="mx-auto h-7 w-7 text-blue-700" />
              <p className="mt-4 text-lg font-extrabold text-slate-950">
                Global talent
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Diverse professionals ready for global opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}