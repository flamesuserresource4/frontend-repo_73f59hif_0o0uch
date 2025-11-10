import React from 'react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 p-10 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to make your organization human-firewall strong?</h2>
            <p className="mt-2 text-white/90">Launch your first campaign in minutes, not weeks.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/80">Get Started Now</a>
              <a href="#contact" className="inline-flex items-center rounded-xl border border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/80">Request a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
