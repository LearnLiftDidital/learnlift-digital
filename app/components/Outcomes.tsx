"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const businessOutcomes = [
  {
    icon: Zap,
    title: "Move faster",
    description:
      "Access skilled teams and AI-enabled capabilities without building every function internally.",
  },
  {
    icon: Users,
    title: "Scale your workforce",
    description:
      "Build flexible project teams around your workload, timelines, languages, and operational needs.",
  },
  {
    icon: Globe2,
    title: "Work across markets",
    description:
      "Reach multilingual audiences and operate across markets with globally distributed talent.",
  },
  {
    icon: BarChart3,
    title: "Improve efficiency",
    description:
      "Combine technology, human expertise, and streamlined workflows to support better operational outcomes.",
  },
];

const capabilities = [
  "AI and data operations",
  "Multilingual language services",
  "Digital and back-office operations",
  "Managed outsourced teams",
];

export default function Outcomes() {
  return (
    <>
      {/* BUSINESS IMPACT */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28 lg:py-32"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
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
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300">
              <Sparkles className="h-4 w-4" />
              Built for business
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              The right capabilities.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                The right people.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you need AI data support, multilingual delivery, digital
              operations, or an outsourced project team, LearnLift helps you
              access the capabilities needed to get work done.
            </p>
          </motion.div>

          {/* Capability flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-16 max-w-5xl"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur sm:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                {/* STEP 01 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Layers3 className="h-6 w-6" />
                  </div>

                  <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-300">
                    01
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold">
                    Your challenge
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Tell us what you need to deliver, improve, scale, or
                    support.
                  </p>
                </div>

                <ArrowRight className="mx-auto hidden h-6 w-6 text-blue-400 lg:block" />

                {/* STEP 02 */}
                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-950/40">
                    <Network className="h-6 w-6" />
                  </div>

                  <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-300">
                    02
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold">
                    Our capabilities
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    We match the requirement with the right technology,
                    expertise, and global talent.
                  </p>
                </div>

                <ArrowRight className="mx-auto hidden h-6 w-6 text-blue-400 lg:block" />

                {/* STEP 03 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                    <Workflow className="h-6 w-6" />
                  </div>

                  <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                    03
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold">
                    Delivered at scale
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    We coordinate delivery through a flexible model designed
                    around your project and operational needs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business outcomes */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessOutcomes.map((outcome, index) => {
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
                  whileHover={{ y: -6 }}
                  className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {outcome.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {outcome.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Capability strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-[30px] border border-white/10 bg-white/[0.04] p-7 sm:p-9"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-300">
                  One partner. Multiple capabilities.
                </p>

                <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Built to support the work behind your growth.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Our model brings together technology, language expertise,
                  digital operations, and flexible talent so organizations can
                  access the support they need without unnecessary complexity.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                    <span className="text-sm font-semibold text-slate-200">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 text-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-extrabold text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-300" />
                Quality-focused delivery
              </span>

              <span className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-cyan-300" />
                Global talent
              </span>

              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-300" />
                Flexible teams
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}