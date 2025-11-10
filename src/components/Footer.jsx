import React from 'react'
import { Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-white font-semibold">About</h3>
            <p className="mt-3 text-white/70 text-sm">SocialShield Simulator is an AI-powered platform for social engineering awareness and training.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#dashboard" className="hover:text-white">Dashboard</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Email: hello@socialshield.ai</li>
              <li>Support: support@socialshield.ai</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Policies</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© 2025 SocialShield Simulator</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
