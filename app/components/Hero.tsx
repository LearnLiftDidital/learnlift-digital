"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe2,
  Languages,
  Network,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-blue-200/30 blur-[130px]" />
        <div className="absolute -right-40 top-20 h-[560px] w-[560px] rounded-full bg-cyan-200/25 blur-[140px]" />
        <div className="absolute bottom-[-260px] left-1/3 h-[520px] w-[520px] rounded-full bg-indigo-200/20 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#1d4ed8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
        {/* =========================================================
            LEFT CONTENT
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Global B2B AI, Language & Digital Solutions
          </motion.div>

          {/* Main headline */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[76px]">
            Build smarter.
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Scale globally.
            </span>
          </h1>

          {/* Main description */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            LearnLift Digital provides AI, language, digital and outsourced
            workforce solutions to organizations worldwide, delivered through
            a diverse network of qualified global talent.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-4 text-base font-bold text-white shadow-[0_16px_38px_rgba(29,78,216,0.25)] transition hover:bg-blue-800"
            >
              Request a Demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white/80 px-7 py-4 text-base font-bold text-slate-800 shadow-sm backdrop-blur transition hover:border-blue-300 hover:bg-white hover:text-blue-700"
            >
              Explore Services
            </motion.a>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Global delivery
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Qualified talent
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Scalable teams
            </div>
          </div>

          {/* Capability stats */}
          <div className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-7">
            <div className="pr-5">
              <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                AI
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                Solutions
              </p>
            </div>

            <div className="px-5">
              <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                50+
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                Languages
              </p>
            </div>

            <div className="pl-5">
              <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Global
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                Talent Network
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            RIGHT-SIDE B2B VISUAL
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto hidden h-[620px] w-full max-w-[590px] lg:block"
        >
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-300/40 to-cyan-200/30 blur-[75px]" />

          {/* Main dashboard */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-white/80 bg-white/95 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.15)] backdrop-blur-xl"
          >
            {/* Dashboard header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  LearnLift Digital
                </p>

                <h3 className="mt-1 text-xl font-extrabold text-slate-950">
                  One partner. Multiple solutions.
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-200">
                <Globe2 className="h-5 w-5" />
              </div>
            </div>

            {/* AI */}
            <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <Bot className="h-5 w-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-extrabold text-slate-900">
                      AI Solutions
                    </p>

                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700">
                      Core
                    </span>
                  </div>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    AI automation, data services, evaluation, testing,
                    annotation and human-in-the-loop solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="mt-3 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-600 text-white">
                  <Languages className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Language & Linguistic
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Translation, interpretation, localization, transcription,
                    MTPE, linguistic QA and multilingual data.
                  </p>
                </div>
              </div>
            </div>

            {/* Digital / BPO */}
            <div className="mt-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Workflow className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Digital & BPO
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Digital operations, research, data processing, back-office
                    support and managed outsourced teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Workforce footer */}
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-950 p-4 text-white">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Network className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Talent infrastructure
                </p>

                <p className="text-sm font-extrabold">
                  Verified global professionals
                </p>
              </div>
            </div>
          </motion.div>

          {/* Global talent floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-42px] top-[35px] z-20 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Globe2 className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-500">
                Talent network
              </p>

              <p className="text-sm font-extrabold text-slate-900">
                Global & diverse
              </p>
            </div>
          </motion.div>

          {/* Languages floating card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[30px] left-[-58px] z-20 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
              <Languages className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-500">
                Linguistic capability
              </p>

              <p className="text-sm font-extrabold text-slate-900">
                50+ languages
              </p>
            </div>
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 right-16 h-4 w-4 rounded-full bg-blue-500"
          />

          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-6 top-1/2 h-3 w-3 rounded-full bg-cyan-400"
          />

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-10 top-20 h-2.5 w-2.5 rounded-full bg-blue-400"
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
    </section>
  );
}