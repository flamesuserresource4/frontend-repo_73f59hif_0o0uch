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

          {/* Built-in, reliable dashboard illustration (no external images) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
            aria-label="Analytics dashboard preview with charts and metrics"
          >
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/60 via-slate-800/60 to-indigo-900/60">
              <svg
                className="h-full w-full"
                viewBox="0 0 1200 675"
                role="img"
                aria-label="Charts showing KPIs, line and bar trends"
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.25" />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                  </linearGradient>
                  <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                  </filter>
                </defs>

                {/* Window chrome */}
                <rect x="40" y="40" width="1120" height="595" rx="18" fill="url(#g1)" stroke="rgba(255,255,255,0.12)" />
                <circle cx="70" cy="70" r="6" fill="#ef4444" />
                <circle cx="92" cy="70" r="6" fill="#f59e0b" />
                <circle cx="114" cy="70" r="6" fill="#10b981" />

                {/* Left sidebar */}
                <rect x="60" y="110" width="220" height="505" rx="12" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.06)" />
                {[...Array(6)].map((_, i) => (
                  <rect key={i} x="80" y={140 + i * 70} width="180" height="40" rx="8" fill="rgba(148,163,184,0.15)" />
                ))}

                {/* KPI cards */}
                {[0,1,2].map((i) => (
                  <g key={i}>
                    <rect x={300 + i * 280} y="120" width="240" height="120" rx="14" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.08)" />
                    <text x={320 + i * 280} y="160" fill="#c7d2fe" fontFamily="Inter, system-ui" fontSize="22" fontWeight="600">{['Report Rate','Click Rate','Risk Score'][i]}</text>
                    <text x={320 + i * 280} y="205" fill="#e5e7eb" fontFamily="Inter, system-ui" fontSize="36" fontWeight="700">{['72%','3.4%','A-'][i]}</text>
                  </g>
                ))}

                {/* Line chart area */}
                <rect x="300" y="270" width="820" height="340" rx="16" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.08)" />
                {/* Grid */}
                {[0,1,2,3,4].map((i) => (
                  <line key={`h-${i}`} x1="320" y1={320 + i * 60} x2="1098" y2={320 + i * 60} stroke="rgba(255,255,255,0.06)" />
                ))}
                {[0,1,2,3,4,5,6,7,8,9].map((i) => (
                  <line key={`v-${i}`} x1={340 + i * 76} y1="290" x2={340 + i * 76} y2="590" stroke="rgba(255,255,255,0.04)" />
                ))}

                {/* Line series */}
                <path d="M320 520 C 400 480, 460 540, 520 500 S 640 460, 700 480 820 520, 880 470 1000 450, 1080 430" fill="none" stroke="#60A5FA" strokeWidth="3" />
                <path d="M320 560 C 420 520, 500 560, 560 520 S 700 500, 760 520 900 540, 960 500 1040 520, 1080 500" fill="none" stroke="#8B5CF6" strokeWidth="3" />
                {/* Area fill */}
                <path d="M320 520 C 400 480, 460 540, 520 500 S 640 460, 700 480 820 520, 880 470 1000 450, 1080 430 L 1080 590 L 320 590 Z" fill="url(#g2)" opacity="0.25" filter="url(#soft)" />

                {/* Bars */}
                {[0,1,2,3,4,5,6,7].map((i) => (
                  <rect key={`b-${i}`} x={360 + i * 90} y={520 - (i%3)*40} width="40" height={100 + (i%3)*40} rx="6" fill="rgba(99,102,241,0.6)" />
                ))}

                {/* Legend */}
                <g>
                  <rect x="860" y="285" width="240" height="40" rx="10" fill="rgba(2,6,23,0.6)" />
                  <circle cx="890" cy="305" r="6" fill="#60A5FA" />
                  <text x="905" y="310" fill="#e5e7eb" fontFamily="Inter, system-ui" fontSize="16">Reports</text>
                  <circle cx="980" cy="305" r="6" fill="#8B5CF6" />
                  <text x="996" y="310" fill="#e5e7eb" fontFamily="Inter, system-ui" fontSize="16">Clicks</text>
                </g>
              </svg>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
