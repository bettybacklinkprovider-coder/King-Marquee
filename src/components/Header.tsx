import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Menu, X, Crown, CalendarCheck2 } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

import LogoIcon from './LogoIcon';

interface HeaderProps {
  onOpenBooking: (eventType?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events & Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Info Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={VENUE_INFO.telLink}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{VENUE_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-stone-700">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate max-w-md">{VENUE_INFO.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-stone-400">
            <span className="hidden md:inline font-light tracking-wider uppercase text-[10px] text-amber-400/90">
              Faisalabad's Premier Wedding Venue
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-950/95 backdrop-blur-md shadow-xl py-3 border-b border-amber-900/30'
            : 'bg-stone-950 py-4 border-b border-stone-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl p-0.5 shadow-md group-hover:scale-105 transition-all duration-300">
              <LogoIcon className="w-full h-full text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                King Marquee
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                Officer's Colony • Faisalabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 font-semibold'
                      : 'text-stone-300 hover:text-amber-300 hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 rounded-xl shadow-md hover:shadow-amber-500/20 hover:scale-[1.02] transition-all duration-200"
            >
              <CalendarCheck2 className="w-4 h-4 text-stone-950" />
              <span>Book Your Event</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-amber-400 focus:outline-none rounded-lg hover:bg-white/5"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 font-semibold'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-center text-stone-950 font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <CalendarCheck2 className="w-5 h-5" />
                <span>Book Your Event</span>
              </button>
            </div>
            <div className="pt-3 text-xs text-stone-400 border-t border-stone-800/80 mt-2 space-y-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{VENUE_INFO.phone}</span>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{VENUE_INFO.address}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
