import React from 'react'
import { motion } from 'framer-motion'

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Visualize campaign success and user awareness growth.</h2>
            <p className="mt-4 text-white/70">Understand behavior trends with click and report rates, dwell time, and department risk scores.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur"
          >
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1551281044-8b59a0c6df81?q=80&w=1600&auto=format&fit=crop"
                alt="Analytics dashboard preview with charts and metrics"
                className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
