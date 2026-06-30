'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { User } from 'lucide-react'

export default function TeamPage() {
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

  // EDIT ME: Placeholders until real team details are approved
  const team = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

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
              Meet Our Team
            </motion.h1>
            <motion.p variants={itemVariants} className="font-cage-body text-xl text-cage-muted max-w-2xl mx-auto">
              Coaches, community builders, and dedicated staff committed to your padel journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group text-center"
              >
                {/* Placeholder avatar */}
                <div className="relative mb-6 aspect-square overflow-hidden rounded-xl bg-cage-surface border border-white/10 flex items-center justify-center">
                  <User size={64} className="text-white/20" />
                </div>

                {/* Placeholder info */}
                <h3 className="font-cage text-xl font-bold text-cage-text mb-1">Team Member</h3>
                <p className="font-cage-body text-sm font-semibold text-cage-red mb-3">Role to be announced</p>
                <p className="font-cage-body text-cage-muted text-sm">Profile coming soon.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="section-padding bg-cage-surface">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold text-cage-text mb-12 text-center">
              Why Our Team Stands Out
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Expert Coaching',
                  desc: 'Our coaches bring real padel experience and a genuine passion for teaching the game.'
                },
                {
                  title: 'Community First',
                  desc: 'We focus on building a supportive, inclusive community where everyone can thrive.'
                },
                {
                  title: 'Continuous Learning',
                  desc: 'Our team stays current with the latest padel techniques and facility practices.'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-cage-black p-8 rounded-xl border border-white/10 hover:border-cage-red/40 transition-all"
                >
                  <h3 className="font-cage text-xl font-bold text-cage-text mb-3">{item.title}</h3>
                  <p className="font-cage-body text-cage-muted">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coaching — coming soon */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center rounded-2xl border border-white/10 bg-cage-surface p-12"
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl font-extrabold text-cage-text mb-3">
              Coaching Programs
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-cage-muted">
              Group lessons, private coaching, and tournament prep are on the way. Details and pricing coming soon —{' '}
              <Link href="/contact" className="text-cage-red hover:text-cage-red-glow transition-colors">
                contact us
              </Link>{' '}
              to be notified first.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cage-surface text-center border-t border-white/10">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-4xl font-extrabold text-cage-text mb-4">
              Get Coaching Updates
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-xl mb-8 text-cage-muted">
              Reach out and we&rsquo;ll keep you posted on coaching availability
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-block bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-3 px-8 rounded-md transition-all hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)]"
              >
                Contact Us to Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
