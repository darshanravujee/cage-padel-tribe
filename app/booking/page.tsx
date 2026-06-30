'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, ArrowUpRight } from 'lucide-react'

const PLAYTOMIC_URL = 'https://app.playtomic.io/club/the-cage-padel-tribe'

export default function BookingPage() {
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

  const steps = [
    { icon: <Calendar size={28} />, title: 'Choose Date', desc: 'Pick from all available dates on Playtomic' },
    { icon: <Clock size={28} />, title: 'Select Time', desc: 'Day or night slots, courts lit 24/7' },
    { icon: <MapPin size={28} />, title: 'Pick Your Court', desc: 'Green, Purple, Terracotta or Blue' },
    { icon: <Users size={28} />, title: 'Invite Friends', desc: 'Up to 4 players per court' },
  ]

  const faqs = [
    {
      q: 'How far in advance can I book?',
      a: 'Open the Playtomic booking page to see every currently available date and time for our courts.',
    },
    {
      q: 'Can I cancel my booking?',
      a: 'Cancellation terms are shown at checkout when you book on Playtomic. For any questions, just get in touch with us.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'Payments are handled securely through Playtomic, which accepts major credit cards, debit cards, and digital wallets.',
    },
    {
      q: 'Can I book for groups?',
      a: 'Yes — each court fits up to 4 players. For larger group or corporate bookings, contact us directly.',
    },
  ]

  return (
    <div className="min-h-screen bg-cage-black">
      {/* Page Hero — pure cinematic visual, no text */}
      <section className="relative h-[42vh] min-h-[320px] max-h-[520px] overflow-hidden bg-cage-black">
        <img
          src="/media/booking-hero.png"
          alt="Players in a night rally on a padel court at The Cage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Fade edges into the page so it blends seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-cage-black/30 via-transparent to-cage-black" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cage-black/60 to-transparent" />
      </section>

      {/* How It Works */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-7 rounded-xl bg-cage-surface border border-white/10 hover:border-cage-red/40 transition-all"
              >
                <div className="w-12 h-12 bg-cage-red rounded-lg flex items-center justify-center text-white mb-4">
                  {step.icon}
                </div>
                <h3 className="font-cage text-lg font-bold mb-1.5 text-cage-text">{step.title}</h3>
                <p className="font-cage-body text-sm text-cage-muted">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Playtomic Booking Widget */}
      <section className="section-padding bg-cage-surface">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold mb-4 text-cage-text">
              Reserve Your Court
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-cage-muted max-w-xl mx-auto">
              All bookings are handled securely through Playtomic, our official booking partner.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-cage-black p-10 sm:p-14 text-center"
          >
            <a
              href={PLAYTOMIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-4 px-10 rounded-md transition-all hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)]"
            >
              Open Playtomic Booking <ArrowUpRight size={20} />
            </a>

            {/* Powered by Playtomic lockup */}
            <div className="mt-7 flex flex-col items-center gap-2.5">
              <span className="font-cage-body text-[10px] uppercase tracking-[0.22em] text-cage-muted">
                Powered by
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-[#2f58f6] px-3.5 py-2">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <g fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M6 4 V20" />
                    <path d="M6 4 H12 A5 5 0 0 1 12 14 H6" />
                    <path d="M9.5 14 H13" />
                    <path d="M9.5 17 H13" />
                  </g>
                </svg>
                <span className="font-cage-body text-sm font-bold tracking-[0.12em] text-white">
                  PLAYTOMIC
                </span>
              </span>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { label: 'Instant Confirmation', desc: 'Get your slot locked in immediately' },
                { label: 'Secure Payment', desc: 'Cards, debit & digital wallets' },
                { label: 'Official Partner', desc: 'Same system our front desk uses' },
              ].map((f, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="font-cage font-bold text-sm text-cage-text">{f.label}</p>
                  <p className="font-cage-body text-xs text-cage-muted mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold mb-10 text-cage-text text-center">
              Court Pricing
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="max-w-md mx-auto rounded-2xl border border-white/10 bg-cage-surface p-10 text-center"
            >
              <p className="font-cage-body text-[11px] uppercase tracking-[0.22em] text-cage-muted mb-4">
                Court Booking
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-cage text-6xl font-extrabold text-cage-gold">$100</span>
                <span className="font-cage-body text-lg text-cage-muted">SGD</span>
              </div>
              <p className="font-cage-body text-cage-muted mt-2">per 60 minutes · all four courts</p>
              <p className="font-cage-body text-sm text-cage-muted mt-6">
                Academy classes and tournament entry are priced separately —{' '}
                <Link href="/contact" className="text-cage-red hover:text-cage-red-glow transition-colors">
                  contact us
                </Link>{' '}
                for details.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cage-surface">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold mb-10 text-cage-text text-center">
              Booking FAQs
            </motion.h2>

            <motion.div variants={containerVariants} className="max-w-2xl mx-auto space-y-4">
              {faqs.map((item, index) => (
                <motion.details
                  key={index}
                  variants={itemVariants}
                  className="bg-cage-black p-6 rounded-lg border border-white/10 cursor-pointer group"
                >
                  <summary className="font-cage font-bold text-cage-text group-open:text-cage-red flex justify-between items-center list-none">
                    {item.q}
                    <span className="text-2xl text-cage-muted group-open:text-cage-red ml-4">+</span>
                  </summary>
                  <p className="font-cage-body text-cage-muted mt-3">{item.a}</p>
                </motion.details>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding overflow-hidden bg-cage-black">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-poster.png"
        >
          <source src="/media/hero-loop.mp4" type="video/mp4" />
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
              Ready to Hit the <span className="text-cage-red">Courts?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-xl mb-8 text-cage-text/80">
              Book your first game today and join our community
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PLAYTOMIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-3 px-8 rounded-md transition-all hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)]"
              >
                Book Now on Playtomic
              </a>
              <Link href="/contact" className="border border-white/30 text-cage-text font-cage font-bold py-3 px-8 rounded-md hover:bg-white/10 transition-all">
                Need Help?
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
