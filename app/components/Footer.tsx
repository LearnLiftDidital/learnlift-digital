"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const exploreLinks = [
  { name: "Home", href: "#" },
  { name: "Learning Paths", href: "#learning-paths" },
  { name: "Why LearnLift", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Outcomes", href: "#outcomes" },
];

const learningLinks = [
  { name: "AI & Emerging Technologies", href: "#learning-paths" },
  { name: "Digital Freelancing", href: "#learning-paths" },
  { name: "Translation & Localization", href: "#learning-paths" },
  { name: "Technology & Web Skills", href: "#learning-paths" },
  { name: "Career Accelerator", href: "#learning-paths" },
];

export default function Footer() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#f8fbff] py-24 sm:py-28 lg:py-32"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-48 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[120px]" />
          <div className="absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/60 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
            
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-10 lg:p-12"
            >
              <div className="pointer-events-none absolute -left-20 -top-20 h-[280px] w-[280px] rounded-full bg-blue-600/30 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-28 -right-20 h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-[90px]" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                  <MessageCircle className="h-4 w-4" />
                  Connect with LearnLift
                </div>

                <h2 className="mt-7 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                  Have a question?
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Let&apos;s connect.
                  </span>
                </h2>

                <p className="mt-6 max-w-md leading-8 text-slate-300">
                  Whether you&apos;re interested in learning opportunities,
                  partnerships, collaboration, or supporting our mission,
                  we&apos;d be happy to hear from you.
                </p>

                {/* Contact information */}
                <div className="mt-10 space-y-5">
                  <a
                    href="mailto:contact.learnlift@gmail.com"
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Email
                      </p>
                      <p className="mt-1 font-bold text-white">
                        contact.learnlift@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                      <Globe2 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Reach
                      </p>
                      <p className="mt-1 font-bold text-white">
                        Learning without borders
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Community
                      </p>
                      <p className="mt-1 font-bold text-white">
                        Built for ambitious learners everywhere
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-10 border-t border-white/10 pt-7">
                  <p className="text-sm font-semibold text-slate-400">
                    Follow the journey
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://www.linkedin.com/company/learnlift-digital/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow LearnLift Digital on LinkedIn"
                      title="LearnLift Digital on LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:-translate-y-1 hover:bg-blue-600"
                    >
                      <Globe2 className="h-5 w-5" />
                    </a>

                    <a
                      href="mailto:contact.learnlift@gmail.com"
                      aria-label="Email LearnLift Digital"
                      title="Email LearnLift Digital"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:-translate-y-1 hover:bg-blue-600"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 lg:p-12"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
                  <Sparkles className="h-4 w-4" />
                  Send us a message
                </div>

                <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                  We&apos;d love to hear from you.
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Fill in the form and tell us how we can help or collaborate.
                </p>
              </div>

              {/* WORKING FORMSPREE FORM */}
              <form
                action="https://formspree.io/f/xojgdzgn"
                method="POST"
                className="mt-8 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    What are you contacting us about?
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="Learning opportunities">
                      Learning opportunities
                    </option>
                    <option value="Partnership">Partnership</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Support LearnLift">Support LearnLift</option>
                    <option value="General inquiry">General inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Your message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us more..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-4 font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-800 sm:w-auto"
                >
                  Send Message
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-xs leading-5 text-slate-500">
                  We&apos;ll use the information you provide only to respond to
                  your inquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-700/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-10 lg:pt-20">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
            
            {/* Brand */}
            <div>
              <a href="#" className="inline-flex items-center">
                <span className="text-2xl font-extrabold tracking-tight text-blue-500">
                  LearnLift
                </span>

                <span className="ml-1 text-2xl font-extrabold tracking-tight text-white">
                  Digital
                </span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Helping ambitious learners build practical digital skills,
                strengthen their professional profiles, and prepare for
                opportunities in a changing world.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300">
                <Sparkles className="h-4 w-4 text-blue-400" />
                Learn. Build. Lift.
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-extrabold text-white">Explore</h3>

              <ul className="mt-5 space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning */}
            <div>
              <h3 className="font-extrabold text-white">Learning Paths</h3>

              <ul className="mt-5 space-y-3">
                {learningLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-extrabold text-white">Connect</h3>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                Interested in learning, collaboration, or partnership?
              </p>

              <a
                href="mailto:contact.learnlift@gmail.com"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
              >
                Email LearnLift
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://www.linkedin.com/company/learnlift-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-white"
              >
                Follow on LinkedIn
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="flex flex-col gap-5 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} LearnLift Digital. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="/privacy" className="transition hover:text-slate-300">
  Privacy
</a>

<a href="/terms" className="transition hover:text-slate-300">
  Terms
</a>

              <a href="#contact" className="transition hover:text-slate-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}