import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-cyan-900" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 pt-36 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Empower Your Team Against Social Engineering Attacks
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-xl text-base sm:text-lg text-white/80"
          >
            Simulate real-world phishing and cyber threats, train users instantly, and track progress through AI-driven insights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#cta" className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              Start Free Demo
            </a>
            <a href="#features" className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              Learn More
            </a>
          </motion.div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur">
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
