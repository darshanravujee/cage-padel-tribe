'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-[78vh] min-h-[480px] max-h-[760px] flex items-end overflow-hidden bg-cage-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/hero-poster.png"
      >
        <source src="/media/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cage-black via-cage-black/30 to-cage-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-cage-black/40 via-transparent to-cage-black/40" />

      {/* Live footage badge */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-2 font-cage-body text-[10px] uppercase tracking-widest text-white/50">
        <span className="w-1.5 h-1.5 rounded-full bg-cage-red animate-pulse" />
        Live Footage
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-16 pt-28">
        <motion.h1
          className="font-cage font-extrabold text-white leading-[0.9] text-4xl sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          PLAY
          <br />
          <span className="text-cage-red">FEARLESS</span>
        </motion.h1>

        <motion.p
          className="font-cage-body text-cage-text/80 text-sm sm:text-base mt-4 max-w-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Singapore&rsquo;s premier padel venue. Four courts. One tribe.
        </motion.p>

        <motion.div
          className="mt-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
            className="inline-block"
          >
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold text-sm py-3 px-6 rounded-md shadow-[0_0_0_0_rgba(225,29,42,0.5)] hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)] transition-all"
            >
              BOOK YOUR COURT
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint + coordinates */}
      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between font-mono text-[10px] tracking-widest text-white/40">
        <span>EST. DEMPSEY · 1°18&apos;N 103°48&apos;E</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL ↓
        </motion.span>
      </div>
    </section>
  )
}
