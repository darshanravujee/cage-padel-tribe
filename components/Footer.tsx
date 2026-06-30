'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cage-black text-cage-text border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* The Cage Padel Tribe */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="The Cage Padel Tribe" className="h-16 w-16 rounded-full object-cover" />
            </div>
            <p className="text-cage-muted text-sm">
              Premier padel venue in Singapore for community gatherings, tournaments, corporate games and socialising. United players across all skill levels.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/thecagepadeltribe/" target="_blank" rel="noopener noreferrer" className="hover:text-cage-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://chat.whatsapp.com/I2h1dLKKsRvI8IWJHNOFMQ" target="_blank" rel="noopener noreferrer" className="hover:text-cage-red transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cage font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courts" className="hover:text-cage-red transition-colors">Our Courts</Link></li>
              <li><Link href="/events" className="hover:text-cage-red transition-colors">Events</Link></li>
              <li><Link href="/booking" className="hover:text-cage-red transition-colors">Book Now</Link></li>
              <li><Link href="/team" className="hover:text-cage-red transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-cage font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-cage-red transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cage-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-cage font-semibold">Contact</h4>
            <div className="space-y-3 text-sm text-cage-muted">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-cage-red" />
                <span>10A Harding Rd, Dempsey<br />Singapore 249549</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-cage-red" />
                <a href="mailto:padeltribe@thecage.com.sg" className="hover:text-cage-red transition-colors break-all">padeltribe@thecage.com.sg</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-cage-red" />
                <a href="tel:+6587762177" className="hover:text-cage-red transition-colors">+65 8776 2177</a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={16} className="text-cage-red" />
                <a href="https://chat.whatsapp.com/I2h1dLKKsRvI8IWJHNOFMQ" className="hover:text-cage-red transition-colors">
                  WhatsApp Community
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="mt-1 flex-shrink-0 text-cage-red" />
                <div>
                  <div>Daily: 7am - 11pm</div>
                  <div>Holidays: 7am - 12am</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-cage-muted">
          <div>&copy; 2024 The Cage Padel Trib. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-cage-red transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cage-red transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-cage-red transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
