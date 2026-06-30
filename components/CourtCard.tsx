'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface CourtCardProps {
  court: {
    id: number
    name: string
    type: string
    surface: string
    lighting: string
    price: string
    image: string
    video?: string
    poster?: string
    accent?: string
    playbackRate?: number
  }
  index?: number
}

export default function CourtCard({ court, index = 0 }: CourtCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const accent = court.accent ?? '#E11D2A'
  const reversed = index % 2 === 1
  const [amount, unit] = court.price.split('/')

  useEffect(() => {
    if (videoRef.current && court.playbackRate) {
      videoRef.current.playbackRate = court.playbackRate
    }
  }, [court.playbackRate])

  return (
    <motion.div
      className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Court visual — floats, no box */}
      <div className={`group relative ${reversed ? 'md:order-2' : ''}`}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 60% 52% at 50% 55%, ${accent}3a, transparent 70%)` }}
        />
        {court.video ? (
          <video
            ref={videoRef}
            className="relative z-10 w-full transition-transform duration-700 group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={court.poster ?? court.image}
          >
            <source src={court.video} type="video/mp4" />
          </video>
        ) : (
          <img src={court.image} alt={court.name} className="relative z-10 w-full" />
        )}
      </div>

      {/* Text — beside the court */}
      <div className={`relative ${reversed ? 'md:order-1' : ''}`}>
        {/* Oversized ghost numeral */}
        <span className="pointer-events-none absolute -top-20 -left-3 select-none font-cage text-[9rem] font-extrabold leading-none text-white/[0.035]">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="relative">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
            <span className="font-cage-body text-[11px] uppercase tracking-[0.22em] text-cage-muted">
              Premium Court · {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="mb-6 font-cage text-4xl font-extrabold leading-[1.0] text-cage-text md:text-5xl">
            {court.name}
          </h3>

          <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-cage-body text-sm text-cage-muted">
            <span>{court.type}</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>{court.surface}</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>{court.lighting}</span>
          </div>

          <div className="mb-8 flex items-baseline gap-1.5">
            <span className="font-cage text-3xl font-extrabold tracking-tight" style={{ color: accent }}>
              {amount}
            </span>
            <span className="font-cage-body text-sm text-cage-muted">/ {unit}</span>
          </div>

          <Link
            href="/booking"
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-7 py-3.5 font-cage font-bold text-cage-text transition-colors duration-300 hover:text-white"
            style={{ borderColor: `${accent}66` }}
          >
            <span
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
              style={{ background: accent }}
            />
            <span className="relative z-10">Book this court</span>
            <ArrowUpRight
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
