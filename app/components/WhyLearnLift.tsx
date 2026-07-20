"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Laptop2,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Laptop2,
    title: "Practical, relevant skills",
    description:
      "Learn skills you can actually use in today's digital economy through practical, career-focused learning experiences.",
  },
  {
    icon: Globe2,
    title: "A global perspective",
    description:
      "Prepare for opportunities beyond borders and build the confidence to participate in an increasingly connected world.",
  },
  {
    icon: GraduationCap,
    title: "Learning that builds credibility",
    description:
      "Strengthen your professional profile through structured learning, valuable certifications, and continuous development.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career-focused pathways",
    description:
      "Connect what you learn with real career directions, freelance opportunities, remote work, and professional growth.",
  },
  {
    icon: HeartHandshake,
    title: "Accessible opportunities",
    description:
      "We believe talent exists everywhere. Our goal is to make valuable learning and career pathways more accessible.",
  },
  {
    icon: TrendingUp,
    title: "Built for continuous growth",
    description:
      "Technology keeps changing. LearnLift helps learners keep building new skills and adapting as opportunities evolve.",
  },
];

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Choose your direction",
    description:
      "Explore learning paths based on the skills you want to build and the opportunities you want to pursue.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Learn practical skills",
    description:
      "Develop useful, relevant capabilities through focused learning designed around real-world needs.",
  },
  {
    number: "03",
    icon: Award,
    title: "Build your profile",
    description:
      "Strengthen your credibility with certifications, practical experience, and a stronger professional presence.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Move toward opportunity",
    description:
      "Use your new skills to pursue jobs, freelance work, remote opportunities, further learning, and career growth.",
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
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

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
          {/* Top section */}
          <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300">
                <Sparkles className="h-4 w-4" />
                Why LearnLift Digital
              </div>

              <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                More than learning.
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  A pathway forward.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:pb-2"
            >
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                LearnLift Digital is built around a simple idea: learning should
                lead somewhere. We help learners develop practical skills,
                strengthen their professional profiles, and become better
                prepared for opportunities in the digital economy.
              </p>

              <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  Learn with purpose
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  Build with confidence
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  Grow toward opportunity
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits grid */}
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
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
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Mission banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16 overflow-hidden rounded-[32px] border border-blue-400/20 bg-gradient-to-r from-blue-700 to-blue-600 p-8 shadow-2xl shadow-blue-950/30 sm:p-10 lg:p-12"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-[70px]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-blue-100">
                  <Target className="h-5 w-5" />
                  Our Mission
                </div>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                  Help people turn potential into progress.
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                  We aim to make practical digital learning, professional
                  development, and career opportunities more accessible to
                  ambitious learners — including youth, refugees, and emerging
                  professionals ready to build their future.
                </p>
              </div>

              <a
                href="#learning-paths"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Explore Programs
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <TrendingUp className="h-4 w-4" />
              Your journey with LearnLift
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              From learning to
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                opportunity.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A clear journey designed to help you move from discovering your
              goals to building skills and preparing for your next opportunity.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative mt-16">
            {/* Desktop connecting line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-[42px] hidden h-[2px] bg-gradient-to-r from-blue-200 via-blue-500 to-cyan-300 lg:block" />

            <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="relative"
                  >
                    {/* Step icon */}
                    <div className="relative z-10 mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-[26px] border-8 border-[#f8fbff] bg-blue-700 text-white shadow-xl shadow-blue-200">
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Card */}
                    <div className="mt-5 min-h-[250px] rounded-[28px] border border-slate-200 bg-white p-7 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]">
                      <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">
                        Step {step.number}
                      </span>

                      <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Impact strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:grid-cols-3"
          >
            <div className="p-8 text-center sm:border-r sm:border-slate-200">
              <Users className="mx-auto h-7 w-7 text-blue-700" />
              <p className="mt-4 text-2xl font-extrabold text-slate-950">
                Learner-first
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Designed around growth and accessibility
              </p>
            </div>

            <div className="border-y border-slate-200 p-8 text-center sm:border-x-0 sm:border-y-0 sm:border-r">
              <Globe2 className="mx-auto h-7 w-7 text-blue-700" />
              <p className="mt-4 text-2xl font-extrabold text-slate-950">
                Opportunity-driven
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Skills connected to a changing digital world
              </p>
            </div>

            <div className="p-8 text-center">
              <Rocket className="mx-auto h-7 w-7 text-blue-700" />
              <p className="mt-4 text-2xl font-extrabold text-slate-950">
                Future-focused
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Built to grow alongside emerging opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}