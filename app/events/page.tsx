'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, MapPin, ArrowUpRight, Clock } from 'lucide-react'

// EDIT ME: Replace placeholder events with real event data

interface UpcomingEvent {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image?: string
  cta?: { label: string; href: string }
}

interface PastEvent {
  id: number
  title: string
  date: string
  description: string
  images?: string[]
}

const upcomingEvents: UpcomingEvent[] = [
  // EDIT ME: Add real upcoming events here, e.g.:
  // {
  //   id: 1,
  //   title: 'Sunday Social Tournament',
  //   date: '13 July 2025',
  //   time: '9:00 AM – 1:00 PM',
  //   location: 'The Cage Padel Tribe, Dempsey',
  //   description: 'Open to all levels. Register via WhatsApp.',
  //   image: '/media/events/social-tournament.jpg',
  //   cta: { label: 'Register Now', href: 'https://wa.me/6587762177' },
  // },
]

const pastEvents: PastEvent[] = [
  // EDIT ME: Add real past event recaps here, e.g.:
  // {
  //   id: 1,
  //   title: 'Cage Open 2025',
  //   date: 'March 2025',
  //   description: 'Our biggest tournament yet — 32 teams competed across all four courts.',
  //   images: ['/media/events/open-2025-1.jpg', '/media/events/open-2025-2.jpg'],
  // },
]

export default function EventsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
            <motion.p
              variants={itemVariants}
              className="font-cage-body text-[11px] uppercase tracking-[0.22em] text-cage-muted mb-4"
            >
              Tournaments · Socials · Corporate
            </motion.p>
            <motion.h1 variants={itemVariants} className="font-cage text-4xl sm:text-5xl font-extrabold mb-4 text-cage-text">
              Events at The Cage
            </motion.h1>
            <motion.p variants={itemVariants} className="font-cage-body text-xl text-cage-muted max-w-2xl mx-auto">
              From weekly socials to full-scale tournaments — there&rsquo;s always something happening at Dempsey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold text-cage-text mb-10">
              Upcoming Events
            </motion.h2>

            {upcomingEvents.length === 0 ? (
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-cage-surface p-12 text-center max-w-xl mx-auto"
              >
                <Calendar size={40} className="mx-auto mb-4 text-cage-muted/40" />
                <p className="font-cage font-bold text-cage-text mb-2">Nothing scheduled yet</p>
                <p className="font-cage-body text-sm text-cage-muted mb-6">
                  Follow us on WhatsApp or Instagram to be the first to know when events drop.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://chat.whatsapp.com/I2h1dLKKsRvI8IWJHNOFMQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-3 px-6 rounded-md transition-all hover:shadow-[0_0_20px_2px_rgba(255,70,85,0.4)] text-sm"
                  >
                    Join WhatsApp Community
                  </a>
                  <a
                    href="https://www.instagram.com/thecagepadeltribe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-cage-text font-cage font-bold py-3 px-6 rounded-md hover:bg-white/5 transition-all text-sm"
                  >
                    Follow on Instagram
                  </a>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    className="rounded-2xl border border-white/10 bg-cage-surface overflow-hidden hover:border-cage-red/40 transition-all group"
                  >
                    {event.image && (
                      <div className="h-52 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div className="p-7">
                      <div className="flex flex-wrap gap-3 mb-4 text-xs font-cage-body text-cage-muted">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} /> {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} /> {event.location}
                        </span>
                      </div>
                      <h3 className="font-cage text-2xl font-extrabold text-cage-text mb-3">{event.title}</h3>
                      <p className="font-cage-body text-cage-muted text-sm mb-6">{event.description}</p>
                      {event.cta && (
                        <a
                          href={event.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold text-sm py-3 px-6 rounded-md transition-all hover:shadow-[0_0_20px_2px_rgba(255,70,85,0.4)]"
                        >
                          {event.cta.label} <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-cage-surface">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold text-cage-text mb-10">
              Past Events
            </motion.h2>

            {pastEvents.length === 0 ? (
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-cage-black p-12 text-center max-w-xl mx-auto"
              >
                <p className="font-cage font-bold text-cage-text mb-2">Coming Soon</p>
                <p className="font-cage-body text-sm text-cage-muted">
                  Event recaps and photos will appear here. Check our Instagram in the meantime.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-16">
                {pastEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                  >
                    {/* Photo grid */}
                    {event.images && event.images.length > 0 && (
                      <div className={`grid gap-3 ${event.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {event.images.slice(0, 4).map((src, i) => (
                          <div key={i} className={`rounded-xl overflow-hidden ${i === 0 && (event.images?.length ?? 0) > 1 ? 'col-span-2' : ''}`}>
                            <img src={src} alt={`${event.title} photo ${i + 1}`} className="w-full h-52 object-cover" />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Text */}
                    <div>
                      <p className="font-cage-body text-[11px] uppercase tracking-[0.22em] text-cage-muted mb-3">
                        {event.date}
                      </p>
                      <h3 className="font-cage text-3xl font-extrabold text-cage-text mb-4">{event.title}</h3>
                      <p className="font-cage-body text-cage-muted leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding overflow-hidden bg-cage-black border-t border-white/10">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-30"
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
              Want to Host an <span className="text-cage-red">Event?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-xl mb-8 text-cage-text/80">
              Corporate days, private tournaments, group bookings — we&rsquo;ll make it happen.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6587762177"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-3 px-8 rounded-md transition-all hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)]"
              >
                Talk to Us on WhatsApp
              </a>
              <Link
                href="/booking"
                className="border border-white/30 text-cage-text font-cage font-bold py-3 px-8 rounded-md hover:bg-white/10 transition-all"
              >
                Book a Court
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
