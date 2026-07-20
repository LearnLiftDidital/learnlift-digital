"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Laptop2,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const outcomes = [
  {
    icon: Laptop2,
    title: "Build practical skills",
    description:
      "Develop relevant digital capabilities you can apply to real projects, professional work, and future opportunities.",
  },
  {
    icon: BadgeCheck,
    title: "Strengthen your profile",
    description:
      "Build credibility through continuous learning, certifications, practical experience, and professional development.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Prepare for work",
    description:
      "Develop the confidence and career readiness needed to explore employment, freelancing, and remote work.",
  },
  {
    icon: Globe2,
    title: "Access wider opportunities",
    description:
      "Think beyond geographic boundaries and prepare to participate in an increasingly global digital economy.",
  },
];

const journeyPoints = [
  "Practical digital and professional skills",
  "Career guidance and opportunity readiness",
  "Support for certifications and professional growth",
  "Exposure to freelancing and remote-work pathways",
];

export default function Outcomes() {
  return (
    <>
      {/* OUTCOMES SECTION */}
      <section
        id="outcomes"
        className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[120px]" />
          <div className="absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/50 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Main two-column area */}
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <TrendingUp className="h-4 w-4" />
                Built around your growth
              </div>

              <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Learning is the start.
                <br />
                <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                  Progress is the goal.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                LearnLift Digital is designed to help learners move beyond
                simply completing courses. The goal is to help you build useful
                skills, strengthen your professional identity, and become
                better prepared for meaningful opportunities.
              </p>

              {/* Journey points */}
              <div className="mt-8 space-y-4">
                {journeyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <p className="font-semibold text-slate-700">{point}</p>
                  </div>
                ))}
              </div>

              <a
                href="#learning-paths"
                className="group mt-9 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Start Building Your Future
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* RIGHT - VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-[80px]" />

              <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-[#f8fbff] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:p-8">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">
                      The LearnLift Journey
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
                      From potential to progress
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-200">
                    <Rocket className="h-6 w-6" />
                  </div>
                </div>

                {/* Journey timeline */}
                <div className="mt-8 space-y-3">
                  <div className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-extrabold text-blue-700">
                      01
                    </div>

                    <div>
                      <p className="font-extrabold text-slate-950">
                        Discover
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Identify the skills and direction that match your goals.
                      </p>
                    </div>
                  </div>

                  <div className="ml-6 h-5 w-[2px] bg-blue-200" />

                  <div className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-extrabold text-cyan-700">
                      02
                    </div>

                    <div>
                      <p className="font-extrabold text-slate-950">Learn</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Build practical capabilities through focused learning.
                      </p>
                    </div>
                  </div>

                  <div className="ml-6 h-5 w-[2px] bg-blue-200" />

                  <div className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 font-extrabold text-indigo-700">
                      03
                    </div>

                    <div>
                      <p className="font-extrabold text-slate-950">Build</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Strengthen your experience, credibility, and profile.
                      </p>
                    </div>
                  </div>

                  <div className="ml-6 h-5 w-[2px] bg-blue-200" />

                  <div className="group flex items-center gap-4 rounded-2xl bg-slate-950 p-4 text-white shadow-xl">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-extrabold">
                      04
                    </div>

                    <div>
                      <p className="font-extrabold">Lift</p>
                      <p className="mt-1 text-sm text-slate-300">
                        Move forward with stronger skills and greater
                        confidence.
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-cyan-300" />
                  </div>
                </div>

                {/* Bottom status */}
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Your destination
                      </p>
                      <p className="text-sm font-extrabold text-slate-950">
                        Ready for what&apos;s next
                      </p>
                    </div>
                  </div>

                  <Target className="h-6 w-6 text-blue-700" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* OUTCOME CARDS */}
          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;

              return (
                <motion.div
                  key={outcome.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -7 }}
                  className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                    {outcome.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {outcome.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-white px-6 pb-24 lg:px-10 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-blue-700 px-7 py-16 text-center text-white shadow-[0_30px_80px_rgba(29,78,216,0.25)] sm:px-12 lg:py-20"
        >
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-[300px] w-[300px] rounded-full bg-cyan-300/20 blur-[80px]" />
            <div className="absolute -bottom-32 -right-20 h-[350px] w-[350px] rounded-full bg-indigo-900/30 blur-[90px]" />

            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "25px 25px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-50 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Your next chapter can start here
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ready to learn, build,
              <br />
              and lift your future?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Explore LearnLift Digital&apos;s learning opportunities and start
              building the skills, confidence, and professional foundation for
              what comes next.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#learning-paths"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-extrabold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Explore Learning Paths
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-7 py-4 font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-medium text-blue-100">
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Practical learning
              </span>

              <span className="flex items-center gap-2">
                <Globe2 className="h-4 w-4" />
                Global outlook
              </span>

              <span className="flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                Career growth
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}