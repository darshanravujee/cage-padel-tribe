'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, Award, Instagram } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import CourtCard from '@/components/CourtCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
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

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premier Dempsey Location',
      description: 'Located in Singapore\'s premium Dempsey neighborhood with free parking & easy access'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Thriving Community Hub',
      description: 'Community gatherings, tournaments, corporate games, and social events for all skill levels'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'World-Class Amenities',
      description: 'Equipment rental, restaurant, snack bar, changing rooms, store & spectacular panoramic views'
    },
  ]

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
      accent: '#10B981'
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
      accent: '#8B5CF6'
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
      accent: '#D2693E'
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
      accent: '#3B82F6'
    },
  ]

  const testimonials = [
    {
      name: 'Zeeshan Sadeque',
      role: 'Local Guide · 9 months ago',
      content: 'By far the most happening padel spot in Singapore. Super friendly staff and high quality coaches!! They have 4 different coloured courts along with a store and racket rentals. Shower facility is also present.',
      rating: 5,
    },
    {
      name: 'Jaime de la Torre de Arenzana',
      role: '1 year ago',
      content: 'The Cage Padel Tribe is undoubtedly the best padel club in Singapore. Since I started attending, I have noticed an incredible improvement in my game, and I owe it all to the excellent team and top-notch facilities.',
      rating: 5,
    },
    {
      name: 'Danny Lectrifying',
      role: 'Local Guide · 2 months ago',
      content: 'An amazing place for anyone who enjoys sports and an active lifestyle. The first thing that stood out to me is the outdoor setting — the whole place has such great energy.',
      rating: 5,
    },
    {
      name: 'Juan Figar',
      role: '2 years ago',
      content: 'Best club in Singapore. Shane and Farah are rockstars and really creating a community!',
      rating: 5,
    },
    {
      name: 'Ernst DB',
      role: 'Local Guide · 2 years ago',
      content: 'This is undoubtedly the best pádel complex and academy in Singapore. The coaches and staff are wonderful. We will come back for sure. Thank you for treating us so kindly.',
      rating: 5,
    },
    {
      name: 'Namrin B',
      role: 'Local Guide · 2 years ago',
      content: 'Great facilities! Thank goodness, we have toilet and shower on site! Brilliant service from the owner. You can go for dining or luncheon afterwards as it\'s right in the heart of Dempsey.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* WhatsApp Community Band */}
      <section className="relative overflow-hidden bg-cage-surface border-b border-white/10">
        {/* Ambient brand-red glow + fine texture, matching the cinematic dark sections */}
        <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-72 w-[44rem] rounded-full bg-cage-red/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        {/* Oversized ghost glyph — echoes the CourtCard numerals */}
        <svg viewBox="0 0 24 24" aria-hidden="true" className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 h-72 w-72 fill-white/[0.02]">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.519 5.276l-.999 3.648 3.48-.913zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>

        <div className="container-max relative z-10 py-16 sm:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14"
          >
            {/* Left — red icon tile, echoing the Why-Choose-Us icon language */}
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-cage-red flex items-center justify-center shadow-[0_0_36px_-8px_rgba(225,29,42,0.7)]">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="#fff" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.519 5.276l-.999 3.648 3.48-.913zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                {/* The only green: a live "active community" signal */}
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-[#25D366] border-2 border-cage-surface" />
                </span>
              </div>
            </motion.div>

            {/* Center — copy */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 mb-3 font-cage-body text-[11px] uppercase tracking-[0.22em] text-cage-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-cage-red" />
                The Tribe Lives on WhatsApp
              </motion.div>
              <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold text-cage-text mb-3 leading-tight">
                Join Our Beautiful <span className="text-cage-red">Community</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="font-cage-body text-cage-muted max-w-xl mx-auto lg:mx-0">
                Open games, last-minute partners, socials, tournaments and good vibes — it all starts in our WhatsApp group. Come say hello and find your next match.
              </motion.p>
            </div>

            {/* Right — CTA, identical language to the hero button */}
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <motion.a
                href="https://chat.whatsapp.com/I2h1dLKKsRvI8IWJHNOFMQ"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                className="group inline-flex items-center gap-2.5 bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold text-sm py-4 px-8 rounded-md shadow-[0_0_0_0_rgba(225,29,42,0.5)] hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)] transition-shadow"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.519 5.276l-.999 3.648 3.48-.913zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Join the Group
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold mb-4 text-cage-text">
              Why Choose The Cage?
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-xl text-cage-muted max-w-2xl mx-auto">
              Premium facilities, expert coaching, and a thriving community of passionate players
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-xl bg-cage-surface border border-white/10 hover:border-cage-red/40 transition-all"
              >
                <div className="w-12 h-12 bg-cage-red rounded-lg flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="font-cage text-xl font-bold mb-2 text-cage-text">{item.title}</h3>
                <p className="font-cage-body text-cage-muted">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courts Showcase */}
      <section className="section-padding bg-black overflow-hidden">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5 md:flex-row md:justify-between md:items-end mb-12"
          >
            <div>
              <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold mb-2 text-cage-text">
                Our Premium Courts
              </motion.h2>
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-cage-muted">
                Regulation-size courts with world-class facilities
              </motion.p>
            </div>
            <motion.div variants={itemVariants}>
              <Link href="/courts" className="inline-flex items-center gap-2 bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold text-sm py-3 px-6 rounded-md transition-all hover:shadow-[0_0_20px_2px_rgba(255,70,85,0.4)]">
                Explore All Courts <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {courts.map((court, i) => (
              <CourtCard key={court.id} court={court} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold mb-4 text-cage-text">
              What Players Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-cage-muted">
              Real reviews from our players on Google
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram / Follow The Tribe */}
      <section className="section-padding bg-cage-surface">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold mb-4 text-cage-text">
              Follow The Tribe
            </motion.h2>
            <motion.a
              variants={itemVariants}
              href="https://www.instagram.com/thecagepadeltribe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-cage-body text-lg text-cage-muted hover:text-cage-red transition-colors"
            >
              <Instagram size={20} /> @thecagepadeltribe
            </motion.a>
          </motion.div>

          {/* Behold / Instagram feed mounts here */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-cage-black to-cage-surface overflow-hidden flex items-center justify-center"
                >
                  <div className="absolute inset-0 animate-pulse bg-white/[0.02]" />
                  <Instagram size={26} className="text-white/15" />
                </div>
              ))}
            </div>
            <p className="font-cage-body text-cage-muted text-xs text-center mt-4">
              Live feed connects soon &mdash; the latest @thecagepadeltribe posts will appear here automatically.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="https://www.instagram.com/thecagepadeltribe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-3 px-6 rounded-md transition-all hover:shadow-[0_0_20px_2px_rgba(255,70,85,0.4)]"
            >
              <Instagram size={18} /> Follow on Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding overflow-hidden bg-cage-black">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/final-cta-poster.png"
        >
          <source src="/media/final-cta.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-cage-black via-cage-black/70 to-cage-black/80" />
        <div className="relative z-10 container-max text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-4xl md:text-5xl font-extrabold mb-4 text-cage-text">
              Ready to <span className="text-cage-red">Play?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-xl mb-8 text-cage-text/80">
              Book your court today and join our thriving community
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-3 px-8 rounded-md transition-all hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)]">
                Book Now on Playtomic
              </Link>
              <Link href="/contact" className="border border-white/30 text-cage-text font-cage font-bold py-3 px-8 rounded-md hover:bg-white/10 transition-all">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
