'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, Heart, Zap } from 'lucide-react'

export default function AboutPage() {
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
              About The Cage Padel Tribe
            </motion.h1>
            <motion.p variants={itemVariants} className="font-cage-body text-xl text-cage-muted max-w-2xl mx-auto">
              Where passion for padel meets professional excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-cage text-4xl font-extrabold text-cage-text mb-6">Our Story</h2>
              <p className="font-cage-body text-lg text-cage-muted mb-4 leading-relaxed">
                The Cage Padel Tribe was built on a simple mission: to create Singapore&rsquo;s premier padel destination where passionate players could excel, connect, and celebrate the sport we love.
              </p>
              <p className="font-cage-body text-lg text-cage-muted mb-4 leading-relaxed">
                What started as a vision from a group of padel enthusiasts has grown into a thriving community hub in the heart of Dempsey. Today, we welcome players of every level &mdash; from casual social games to competitive matches.
              </p>
              <p className="font-cage-body text-lg text-cage-muted leading-relaxed">
                We believe padel is more than a sport &mdash; it&rsquo;s a lifestyle. It&rsquo;s about community, dedication, improvement, and pure joy. Every court, every coach, every event at The Cage reflects these values.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/media/court-green-poster.png"
                  alt="A court at The Cage Padel Tribe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -right-6 w-40 h-40 bg-cage-red/20 rounded-xl blur-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-cage-surface">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold text-cage-text mb-12 text-center">
              Our Mission & Values
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Target size={36} />,
                  title: 'Our Mission',
                  desc: 'To build Singapore\'s most vibrant padel community by providing premium facilities, expert coaching, and an inclusive environment where every player can achieve their goals.'
                },
                {
                  icon: <Heart size={36} />,
                  title: 'Community First',
                  desc: 'We create meaningful connections between players. Padel is a social sport, and we foster friendships both on and off the court.'
                },
                {
                  icon: <Zap size={36} />,
                  title: 'Excellence',
                  desc: 'From court maintenance to coaching standards, we\'re committed to continuous improvement and the highest level of professionalism.'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-xl bg-cage-black border border-white/10 hover:border-cage-red/40 transition-all"
                >
                  <div className="w-14 h-14 bg-cage-red rounded-lg flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-cage text-xl font-bold text-cage-text mb-3">{item.title}</h3>
                  <p className="font-cage-body text-cage-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-cage-black">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold text-cage-text mb-12 text-center">
              Our Core Values
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              {[
                {
                  title: 'Integrity',
                  desc: 'We operate with honesty and transparency. What you see is what you get — no compromises on quality or values.'
                },
                {
                  title: 'Inclusivity',
                  desc: 'Everyone is welcome at The Cage, regardless of skill level, background, or experience.'
                },
                {
                  title: 'Innovation',
                  desc: 'We constantly evolve, adopting new technologies and methods to enhance your padel experience.'
                },
                {
                  title: 'Passion',
                  desc: 'Our love for padel is genuine. It drives everything we do, from facility upkeep to community building.'
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-cage-surface border-l-4 border-cage-red"
                >
                  <h3 className="font-cage text-xl font-bold text-cage-text mb-2">{value.title}</h3>
                  <p className="font-cage-body text-cage-muted">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="section-padding bg-cage-surface">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-3xl sm:text-4xl font-extrabold text-cage-text mb-8 text-center">
              Premium Facilities
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[
                'Four professional padel courts',
                'Tournament-grade LED lighting, 24/7',
                'Professional-grade court maintenance',
                'Equipment rental on site',
                'Changing rooms & showers',
                'Restaurant & snack bar',
                'Pro store',
                'Free parking',
                'Panoramic Dempsey views',
              ].map((facility, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-4 bg-cage-black rounded-lg border border-white/10"
                >
                  <div className="w-2.5 h-2.5 bg-cage-red rounded-full flex-shrink-0" />
                  <p className="font-cage-body text-cage-text">{facility}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cage-black text-center border-t border-white/10">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="font-cage text-4xl font-extrabold text-cage-text mb-4">
              Join Our Community
            </motion.h2>
            <motion.p variants={itemVariants} className="font-cage-body text-xl mb-8 text-cage-muted">
              Become part of Singapore&rsquo;s most vibrant padel community
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-cage-red hover:bg-cage-red-glow text-white font-cage font-bold py-3 px-8 rounded-md transition-all hover:shadow-[0_0_28px_4px_rgba(255,70,85,0.45)]"
              >
                Book Your First Court
              </Link>
              <Link
                href="/contact"
                className="border border-white/30 text-cage-text font-cage font-bold py-3 px-8 rounded-md hover:bg-white/10 transition-all"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
