import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Crown, Clock, ArrowRight, Heart } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

import LogoIcon from './LogoIcon';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-amber-900/30">
      {/* Upper Footer Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 py-12 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">Planning a Wedding or Celebration?</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Let King Marquee Host Your Special Moments
            </h3>
            <p className="text-stone-300 text-sm mt-1 max-w-xl">
              Located at Officer's Colony, Faisalabad. Book your date today for an unforgettable experience.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              Book Your Event
            </button>
            <a
              href={VENUE_INFO.telLink}
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white font-semibold rounded-xl border border-stone-700 flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <LogoIcon className="w-10 h-10 shrink-0" />
            <span className="text-2xl font-serif font-bold text-white">King Marquee</span>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed">
            Faisalabad's grand marquee venue providing luxury, comfort, and timeless elegance for weddings, receptions, family gatherings, and corporate events.
          </p>
          <div className="pt-2">
            <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Venue Highlights</p>
            <p className="text-xs text-stone-400 mt-1">100% Climate Controlled • Grand Chandeliers • Ample Parking</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-serif text-lg font-semibold mb-4 border-b border-amber-500/30 pb-2 inline-block">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                <span>Events & Services</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-serif text-lg font-semibold mb-4 border-b border-amber-500/30 pb-2 inline-block">
            Events We Host
          </h4>
          <ul className="space-y-2.5 text-sm text-stone-400">
            <li>
              <Link to="/services#weddings" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Royal Weddings & Barat</span>
              </Link>
            </li>
            <li>
              <Link to="/services#receptions" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Valima & Receptions</span>
              </Link>
            </li>
            <li>
              <Link to="/services#engagements" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Engagements & Mehndi</span>
              </Link>
            </li>
            <li>
              <Link to="/services#corporate" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Corporate Events & Galas</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-serif text-lg font-semibold border-b border-amber-500/30 pb-2 inline-block">
            Venue Contact Info
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span className="text-stone-300 leading-snug">{VENUE_INFO.address}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-400 shrink-0" />
              <a href={VENUE_INFO.telLink} className="text-stone-200 hover:text-amber-400 font-semibold transition-colors">
                {VENUE_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-400 shrink-0" />
              <a href={`mailto:${VENUE_INFO.email}`} className="text-stone-300 hover:text-amber-400 transition-colors">
                {VENUE_INFO.email}
              </a>
            </div>

            <div className="flex items-start gap-3 pt-1 border-t border-stone-800">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span className="text-xs text-stone-400">{VENUE_INFO.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-stone-950 py-6 border-t border-stone-900 text-xs text-stone-400 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} <span className="text-stone-200 font-semibold">{VENUE_INFO.name}</span>. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for memorable celebrations in</span>
            <span className="text-amber-400 font-medium">Faisalabad, Pakistan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
