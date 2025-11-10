import React from 'react'
import { Menu, ShieldCheck, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded">
              <ShieldCheck className="h-6 w-6 text-cyan-300" aria-hidden="true" />
              <span className="text-white text-lg font-semibold tracking-tight">PhishLab</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                Get Started
              </a>
            </nav>
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden px-4 pb-4"
              >
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#cta"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-90"
                  >
                    Get Started
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
