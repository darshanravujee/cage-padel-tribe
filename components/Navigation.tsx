'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courts', label: 'Courts' },
    { href: '/events', label: 'Events' },
    { href: '/team', label: 'Team' },
    { href: '/booking', label: 'Book Now' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-cage-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - The Cage Padel Tribe */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="The Cage Padel Tribe" className="h-11 w-11 rounded-full object-cover" />
            <span className="sr-only">The Cage Padel Tribe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm transition-all ${
                  link.label === 'Book Now'
                    ? 'bg-cage-red text-white font-cage font-bold hover:bg-cage-red-glow hover:shadow-[0_0_20px_2px_rgba(255,70,85,0.4)]'
                    : 'font-cage-body text-cage-muted hover:text-cage-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-cage-text hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded-md transition-all ${
                  link.label === 'Book Now'
                    ? 'bg-cage-red text-white font-cage font-bold'
                    : 'font-cage-body text-cage-muted hover:text-cage-text hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
