import React from 'react'
import { ShieldAlert, BrainCircuit, Edit3, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: ShieldAlert,
    title: 'Realistic Attack Simulations',
    desc: 'URL & Email Phishing, SQL Injection scenarios crafted to mirror real-world threats.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Training Feedback',
    desc: 'Personalized guidance powered by AI to build lasting security habits.',
  },
  {
    icon: Edit3,
    title: 'Custom Email Template Editor',
    desc: 'Build, preview and deploy bespoke phishing templates with ease.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics Dashboard',
    desc: 'Track click rates, report rates, and awareness growth across teams.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/30 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Powerful features built for security leaders</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Everything you need to run effective simulations and measure real impact.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur hover:bg-white/15 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30">
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
