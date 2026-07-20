"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Laptop,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#f8fbff]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute -right-32 top-32 h-[520px] w-[520px] rounded-full bg-cyan-200/30 blur-[130px]" />
        <div className="absolute bottom-[-250px] left-1/3 h-[500px] w-[500px] rounded-full bg-indigo-200/20 blur-[120px]" />

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
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Skills that open doors. Opportunities that change lives.
          </motion.div>

          {/* Headline */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[78px]">
            Learn skills.
            <br />
            Build your future.
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Lift your potential.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            LearnLift Digital helps ambitious learners build practical digital
            skills, earn valuable certifications, and prepare for careers in a
            world shaped by technology.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#learning-paths"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-4 text-base font-bold text-white shadow-[0_14px_35px_rgba(29,78,216,0.25)] transition hover:bg-blue-800"
            >
              Explore Learning Paths
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white/80 px-7 py-4 text-base font-bold text-slate-800 shadow-sm backdrop-blur transition hover:border-blue-300 hover:bg-white hover:text-blue-700"
            >
              See How It Works
            </motion.a>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Practical skills
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Career-focused learning
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Accessible opportunities
            </div>
          </div>

          {/* Mini stats */}
          <div className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-7">
            <div className="pr-5">
              <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                100%
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                Digital-first
              </p>
            </div>

            <div className="px-5">
              <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Global
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                Career outlook
              </p>
            </div>

            <div className="pl-5">
              <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Future
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                Ready skills
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto hidden h-[620px] w-full max-w-[590px] lg:block"
        >
          {/* Main glow */}
          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-300/40 to-cyan-200/30 blur-[70px]" />

          {/* Main dashboard */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_35px_80px_rgba(15,23,42,0.15)] backdrop-blur-xl"
          >
            {/* Dashboard top */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Your journey
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-slate-950">
                  Build skills that matter
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-200">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>

            {/* Progress */}
            <div className="mt-7 rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">
                  Career readiness
                </span>
                <span className="text-sm font-extrabold text-blue-700">
                  78%
                </span>
              </div>

              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-700 to-cyan-500"
                />
              </div>
            </div>

            {/* Learning cards */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <Laptop className="h-5 w-5" />
                </div>

                <p className="mt-4 text-sm font-extrabold text-slate-900">
                  Digital Skills
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Build practical, job-ready capabilities.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <p className="mt-4 text-sm font-extrabold text-slate-900">
                  Certifications
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Strengthen your professional profile.
                </p>
              </div>
            </div>

            {/* Opportunity card */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900">
                  Career pathways
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Turn learning into real opportunities.
                </p>
              </div>

              <ArrowRight className="h-5 w-5 text-blue-600" />
            </div>
          </motion.div>

          {/* Floating card - Global Opportunities */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-45px] top-[35px] z-20 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Globe2 className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-500">
                Think beyond borders
              </p>
              <p className="text-sm font-extrabold text-slate-900">
                Global opportunities
              </p>
            </div>
          </motion.div>

          {/* Floating card - Professional Growth */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[25px] left-[-65px] z-20 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Award className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-500">
                Build credibility
              </p>
              <p className="text-sm font-extrabold text-slate-900">
                Professional growth
              </p>
            </div>
          </motion.div>

          {/* Decorative circles */}
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
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
    </section>
  );
}