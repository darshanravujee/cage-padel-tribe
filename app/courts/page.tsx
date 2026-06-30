'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CourtCard from '@/components/CourtCard'
import { MapPin, Users, Clock } from 'lucide-react'

export default function CourtsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const courts = [
    {
      id: 1,
      name: 'CMC Court (Center Green)',
      type: 'Outdoor',
      surface: 'Professional Padel',
      lighting: '24/7 LED',
      price: '$100/60min',
      image: '/media/court-green-poster.png',
      video: '/media/court-green.mp4',
      poster: '/media/court-green-poster.png',
      accent: '#10B981',
    },
    {
      id: 2,
      name: 'Purple Court',
      type: 'Outdoor',
      surface: 'Professional Padel',
      lighting: '24/7 LED',
      price: '$100/60min',
      image: '/media/court-purple-poster.png',
      video: '/media/court-purple.mp4',
      poster: '/media/court-purple-poster.png',
      accent: '#8B5CF6',
    },
    {
      id: 3,
      name: 'Terracotta Court',
      type: 'Outdoor',
      surface: 'Professional Padel',
      lighting: 'Panoramic',
      price: '$100/60min',
      image: '/media/court-terracotta-poster.png',
      video: '/media/court-terracotta.mp4',
      poster: '/media/court-terracotta-poster.png',
      accent: '#D2693E',
    },
    {
      id: 4,
      name: 'Blue Court',
      type: 'Outdoor',
      surface: 'Professional Padel',
      lighting: 'Panoramic',
      price: '$100/60min',
      image: '/media/court-blue-poster.png',
      video: '/media/court-blue.mp4',
      poster: '/media/court-blue-poster.png',
      accent: '#3B82F6',
    },
  ]

  const amenities = [
    { icon: <MapPin size={32} />, title: 'Prime Dempsey Location', description: 'Free parking and easy access in the heart of Dempsey, Singapore' },
    { icon: <Users size={32} />, title: 'Premium Facilities', description: 'Professional courts, equipment rental, and a thriving community of players' },
    { icon: <Clock size={32} />, title: '24/7 Availability', description: 'Courts lit for play day and night, every day of the week' },
  ]

  return (
    <div className="min-h-screen bg-cage-black">
      {/* Page Hero */}
      <section className="section-padding bg-cage-black border-b border-white/10">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 variants={itemVariants} className="font-cage text-4xl sm:text-5xl font-extrabold mb-4 text-cage-text">
              Our Premium Courts
            </motion.h1>
            <motion.p variants={itemVariants} className="font-cage-body text-xl text-cage-muted max-w-2xl mx-auto">
              Four professional courts, world-class maintenance, and the perfect environment to elevate your game.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 rounded-xl bg-cage-surface border border-white/10 hover:border-cage-red/40 transition-all"
              >
                <div className="w-14 h-14 bg-cage-red rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {amenity.icon}
                </div>
                <h3 className="font-cage text-xl font-bold text-cage-text mb-2">{amenity.title}</h3>
                <p className="font-cage-body text-cage-muted">{amenity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courts Grid */}
      <section className="section-padding bg-black overflow-hidden">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h2 variants={itemVariants} className="font-cage text-4xl font-extrabold text-cage-text mb-2">
              All Courts
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-lg text-cage-muted">
              Every court books the same way — through Playtomic
            </motion.p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {courts.map((court, i) => (
              <CourtCard key={court.id} court={court} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cage-black border-t border-white/10">
        <div className="container-max text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-4xl font-extrabold text-cage-text mb-4">
              Ready to Book?
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-xl mb-8 text-cage-muted">
              Check availability and book your court now
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href="/booking"
                className="inline-block bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-3 px-8 rounded-md transition-all hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)]"
              >
                Book on Playtomic
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
