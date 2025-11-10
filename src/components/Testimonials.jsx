import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ava Chen',
    role: 'CISO, SecureTech Inc.',
    quote:
      'Our team’s phishing awareness improved by 75% after using PhishLab. The simulations feel real, and the training sticks.',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Liam Patel',
    role: 'Head of IT, NimbusWorks',
    quote:
      'The analytics made it easy to target risk hot-spots. We saw report rates double in under a month.',
    avatar: 'https://i.pravatar.cc/100?img=15',
  },
  {
    name: 'Ella Rivera',
    role: 'Security Lead, BlueForge',
    quote:
      'Love the template editor and AI feedback. It’s like having a coach for every user.',
    avatar: 'https://i.pravatar.cc/100?img=9',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by modern security teams</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Real outcomes from organizations building human-firewall strength.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={`${t.name} avatar`} className="h-12 w-12 rounded-full" />
                <div>
                  <figcaption className="text-white font-semibold">{t.name}</figcaption>
                  <p className="text-white/60 text-sm">{t.role}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-white/80 text-sm">“{t.quote}”</blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
