'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from 'lucide-react'

export default function ContactPage() {
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

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Location',
      content: '10A Harding Rd, Dempsey\nSingapore 249549',
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      content: '+65 8776 2177',
      href: 'tel:+6587762177',
    },
    {
      icon: <Mail size={28} />,
      title: 'Email',
      content: 'padeltribe@thecage.com.sg',
      href: 'mailto:padeltribe@thecage.com.sg',
    },
    {
      icon: <Clock size={28} />,
      title: 'Hours',
      content: 'Daily: 7am – 11pm\nHolidays: 7am – 12am',
    },
  ]

  const faqs = [
    {
      q: 'What\'s the best way to reach you?',
      a: 'WhatsApp is the fastest — tap the button above and we\'ll get back to you quickly.',
    },
    {
      q: 'How do I book a court?',
      a: 'Court bookings are handled through Playtomic. Visit our Book Now page to select your date, time, and court.',
    },
    {
      q: 'Do you provide equipment rental?',
      a: 'Yes, equipment rental is available on site — perfect if you\'re just getting started.',
    },
    {
      q: 'Where exactly are you located?',
      a: '10A Harding Rd, Dempsey, Singapore 249549. Free parking on site, easy access from the Dempsey Hill area.',
    },
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
              Get in Touch
            </motion.h1>
            <motion.p variants={itemVariants} className="font-cage-body text-xl text-cage-muted max-w-2xl mx-auto">
              Have questions? We&rsquo;re on WhatsApp — reach out and we&rsquo;ll get back to you fast.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA — primary contact */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-cage-surface p-10 sm:p-14 text-center"
            >
              <div className="w-16 h-16 bg-[#25D366]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} className="text-[#25D366]" />
              </div>

              <h2 className="font-cage text-3xl font-extrabold text-cage-text mb-3">
                Chat With Us
              </h2>
              <p className="font-cage-body text-cage-muted mb-8 max-w-md mx-auto">
                The quickest way to reach us is on WhatsApp. Drop us a message and our team will reply shortly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6587762177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white font-cage font-bold py-4 px-8 rounded-md transition-all hover:shadow-[0_0_28px_4px_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle size={20} />
                  Message Us on WhatsApp
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://chat.whatsapp.com/I2h1dLKKsRvI8IWJHNOFMQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-cage-text font-cage font-bold py-4 px-8 rounded-md hover:bg-white/5 transition-all"
                >
                  Join the Community Group
                </a>
              </div>

              <p className="font-cage-body text-xs text-cage-muted mt-6">
                You can also email us at{' '}
                <a href="mailto:padeltribe@thecage.com.sg" className="text-cage-red hover:text-cage-red-glow transition-colors">
                  padeltribe@thecage.com.sg
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-cage-surface">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-cage-black border border-white/10 hover:border-cage-red/40 transition-all"
              >
                <div className="w-12 h-12 bg-cage-red rounded-lg flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="font-cage font-bold text-cage-text mb-2">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="font-cage-body text-sm text-cage-muted hover:text-cage-red transition-colors whitespace-pre-line">
                    {item.content}
                  </a>
                ) : (
                  <p className="font-cage-body text-sm text-cage-muted whitespace-pre-line">{item.content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl font-extrabold text-cage-text mb-8 text-center">
              Find Us
            </motion.h2>

            <motion.div variants={itemVariants} className="rounded-xl border border-white/10 overflow-hidden">
              {/* Map placeholder — EDIT ME: swap in a Google Maps iframe */}
              <div className="w-full h-72 bg-gradient-to-br from-cage-surface to-cage-black flex flex-col items-center justify-center gap-3">
                <MapPin size={40} className="text-cage-muted/50" />
                <p className="font-cage-body text-sm text-cage-muted">Map embed coming soon</p>
              </div>

              <div className="bg-cage-surface p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-cage font-bold text-cage-text">10A Harding Rd, Dempsey</p>
                  <p className="font-cage-body text-sm text-cage-muted">Singapore 249549 · Free parking on site</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10A+Harding+Rd+Dempsey+Singapore+249549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cage-red font-cage font-bold text-sm hover:text-cage-red-glow transition-colors shrink-0"
                >
                  Get Directions <ArrowUpRight size={16} />
                </a>
              </div>
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
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold text-cage-text mb-10 text-center">
              Common Questions
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
      <section className="section-padding bg-cage-black text-center border-t border-white/10">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-4xl font-extrabold text-cage-text mb-4">
              Ready to Play?
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-xl mb-8 text-cage-muted">
              Book your court and join the community
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-3 px-8 rounded-md transition-all hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)]"
              >
                Book a Court Now
              </Link>
              <Link
                href="/events"
                className="border border-white/30 text-cage-text font-cage font-bold py-3 px-8 rounded-md hover:bg-white/10 transition-all"
              >
                See Upcoming Events
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
