'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: {
    name: string
    role: string
    content: string
    rating?: number
    image?: string
  }
}

// Official Google "G" mark
function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initial = testimonial.name.trim().charAt(0).toUpperCase()
  const rating = testimonial.rating ?? 5

  return (
    <motion.div
      className="relative group bg-cage-surface p-8 rounded-2xl transition-all duration-500 border border-white/10 hover:border-cage-red/40 hover:-translate-y-2 overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] flex flex-col h-full"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-cage-red opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header: author + Google badge */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-cage-red/15 border border-cage-red/30 flex items-center justify-center flex-shrink-0">
          <span className="font-cage font-bold text-cage-red text-lg">{initial}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-cage font-bold text-cage-text text-base truncate group-hover:text-cage-red transition-colors">
            {testimonial.name}
          </p>
          <p className="font-cage-body text-xs text-cage-muted truncate">{testimonial.role}</p>
        </div>
        <div className="flex-shrink-0" title="Posted on Google">
          <GoogleG size={18} />
        </div>
      </div>

      {/* Stars */}
      <motion.div
        className="flex gap-1 mb-4"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? '#FBBC05' : 'none'}
            stroke={i < rating ? '#FBBC05' : '#8A8A8F'}
          />
        ))}
      </motion.div>

      {/* Quote */}
      <p className="font-cage-body text-cage-text/85 text-[15px] leading-relaxed flex-1">
        {testimonial.content}
      </p>
    </motion.div>
  )
}
