import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Phone,
  ArrowRight,
  Sparkles,
  Maximize,
  Award,
  Heart,
  MapPin,
  Smile,
  ChevronRight,
  Crown,
  CheckCircle,
  CalendarCheck,
  Eye,
  X
} from 'lucide-react';
import { VENUE_INFO, SERVICES, WHY_CHOOSE_US, GALLERY_ITEMS, VENUE_STATS } from '../data/venueData';
import { GalleryItem } from '../types';

interface HomeProps {
  onOpenBooking: (eventType?: string) => void;
}

export default function Home({ onOpenBooking }: HomeProps) {
  const navigate = useNavigate();
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<GalleryItem | null>(null);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Maximize': return <Maximize className="w-6 h-6 text-amber-500" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-500" />;
      case 'Heart': return <Heart className="w-6 h-6 text-amber-500" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-amber-500" />;
      case 'Smile': return <Smile className="w-6 h-6 text-amber-500" />;
      default: return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <div className="w-full bg-stone-50 overflow-hidden">
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-stone-950 text-white overflow-hidden py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={VENUE_INFO.heroImage}
            alt="King Marquee Faisalabad Venue"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle dark soft overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-900/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-stone-950/40 to-stone-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
          >
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Faisalabad's Premier Wedding & Event Venue</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-amber-50 leading-[1.15] mb-6 drop-shadow-lg"
          >
            Celebrate Your Special Moments at <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">King Marquee</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-stone-200 font-light max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow"
          >
            King Marquee provides an elegant, spacious, and luxurious venue for weddings, receptions, engagements, family celebrations, and corporate events in the heart of Faisalabad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            {/* Primary CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-bold text-base rounded-xl shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-5 h-5 text-stone-950" />
              <span>Book Your Event</span>
            </button>

            {/* Secondary CTA */}
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 bg-stone-900/80 hover:bg-stone-800 text-white font-semibold text-base rounded-xl border border-stone-700/80 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore Our Venue</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 inline-flex items-center gap-2 text-xs sm:text-sm text-stone-300 bg-stone-950/60 px-4 py-2 rounded-xl border border-stone-800"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Officer's Colony 1, East Canal Expressway, Faisalabad</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — WELCOME / ABOUT PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/80 border border-amber-300 text-amber-900 rounded-full text-xs font-bold uppercase tracking-widest">
              <Crown className="w-3.5 h-3.5 text-amber-700" />
              <span>Faisalabad Event Destination</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Welcome to <span className="text-amber-800">King Marquee</span>
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Designed to provide an elegant, comfortable, and memorable environment for important celebrations and gatherings in Faisalabad. From grand wedding feasts to corporate galas, we deliver an atmosphere of true royal hospitality.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl">
                <p className="text-2xl font-serif font-bold text-amber-900">1,200+</p>
                <p className="text-xs text-stone-600 font-medium mt-0.5">Guest Hall Capacity</p>
              </div>
              <div className="p-4 bg-stone-100/70 border border-stone-200 rounded-xl">
                <p className="text-2xl font-serif font-bold text-stone-900">100%</p>
                <p className="text-xs text-stone-600 font-medium mt-0.5">Climate Controlled</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-amber-900 text-white font-semibold rounded-xl shadow-md transition-all duration-300 group"
              >
                <span>Learn More About Us</span>
                <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 group">
              <img
                src="https://i.pinimg.com/736x/01/d0/a8/01d0a8914ce15d8f5a8a83bcedeb15c7.jpg"
                alt="King Marquee Grand Venue"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-stone-950/80 backdrop-blur-md rounded-xl border border-stone-800 text-white">
                <p className="text-sm font-serif font-semibold text-amber-300">King Marquee Faisalabad</p>
                <p className="text-xs text-stone-300">Officer's Colony, East Canal Expressway</p>
              </div>
            </div>

            {/* Floating Decorative Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-amber-200 items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900">Prime Location</p>
                <p className="text-[11px] text-stone-600">East Canal Expy, Officer Colony 1</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — EVENTS & SERVICES */}
      <section className="py-20 bg-stone-100 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              Versatile Celebrations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4 mb-4">
              Events & Services
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              We cater to all your memorable occasions with customized stage setups, banquet arrangements, and exquisite hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200/80 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-stone-950/80 backdrop-blur-md text-amber-300 text-xs px-3 py-1 rounded-full font-medium border border-stone-800">
                      King Marquee
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <button
                      onClick={() => navigate(`/services#${service.id}`)}
                      className="w-full text-left inline-flex items-center justify-between text-amber-800 font-semibold text-sm hover:text-amber-950 group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 text-amber-700 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CHOOSE KING MARQUEE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
            Excellence in Hospitality
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4 mb-4">
            Why Choose King Marquee?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Discover why families and event organizers in Faisalabad trust King Marquee for their most cherished life moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                {item.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — EXPERIENCE / GALLERY PREVIEW */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400">Atmosphere & Visuals</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-50 mt-2">
                Create Memories That Last Forever
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow transition-transform hover:scale-105 shrink-0"
            >
              <span>View More</span>
              <ArrowRight className="w-4 h-4 text-stone-950" />
            </Link>
          </div>

          {/* Masonry / Grid gallery layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-800 bg-stone-950 group cursor-pointer"
                onClick={() => setSelectedGalleryImg(item)}
              >
                <div className="h-64 sm:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-stone-950/75 backdrop-blur-md rounded-xl border border-stone-800/80 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">{item.category}</span>
                    <h3 className="text-sm font-semibold text-white truncate">{item.title}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery */}
      {selectedGalleryImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
            <button
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] overflow-hidden">
              <img
                src={selectedGalleryImg.image}
                alt={selectedGalleryImg.title}
                className="w-full h-full object-contain bg-black"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-stone-900 text-white">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">{selectedGalleryImg.category}</span>
              <h3 className="text-xl font-serif font-bold text-white mt-1">{selectedGalleryImg.title}</h3>
              <p className="text-stone-300 text-sm mt-1">{selectedGalleryImg.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6 — CALL TO ACTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://i.pinimg.com/1200x/02/27/18/02271818d4f45f2a3b98fcc8eabdfd9a.jpg"
            alt="King Marquee Celebration Venue"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Crown className="w-12 h-12 text-amber-400 mx-auto" />
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100">
            Ready to Celebrate Your Special Day?
          </h2>
          <p className="text-lg sm:text-xl text-stone-200 font-light max-w-2xl mx-auto">
            Let King Marquee provide the perfect setting for your next unforgettable celebration.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Call Now Button with tel link */}
            <a
              href={VENUE_INFO.telLink}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-105"
            >
              <Phone className="w-5 h-5 text-stone-950" />
              <span>Call Now (+92 41 5380852)</span>
            </a>

            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-stone-800 hover:bg-stone-700 text-white font-semibold rounded-xl border border-stone-600 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 text-amber-400" />
            </Link>
          </div>

          <div className="pt-6 text-xs text-stone-400">
            <p>{VENUE_INFO.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
