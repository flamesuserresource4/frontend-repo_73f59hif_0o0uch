import React from 'react'
import { motion } from 'framer-motion'
import { Settings, MousePointerClick, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: Settings,
    title: 'Create Campaign',
    desc: 'Admins tailor phishing simulations to roles and risk levels.',
  },
  {
    icon: MousePointerClick,
    title: 'Users Interact',
    desc: 'Employees receive realistic emails and URLs across channels.',
  },
  {
    icon: CheckCircle2,
    title: 'AI Feedback',
    desc: 'Platform analyzes behavior and delivers instant, targeted training.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Launch in minutes. Improve continuously.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
