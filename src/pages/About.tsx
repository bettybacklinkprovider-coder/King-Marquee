import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Crown, Heart, Award, Shield, Users, MapPin, Phone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { VENUE_INFO, VENUE_STATS } from '../data/venueData';

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  return (
    <div className="w-full bg-stone-50 overflow-hidden">
      {/* About Banner Header */}
      <section className="relative bg-stone-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://i.pinimg.com/736x/7b/09/96/7b09966b54ff455d879e9909b6be025e.jpg"
            alt="King Marquee About Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/20 border border-amber-400/40 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Faisalabad Landmark</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-amber-100">
            About King Marquee
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Providing an unmatched luxury event environment, royal hospitality, and timeless memory-making in Officer's Colony, Faisalabad.
          </p>
        </div>
      </section>

      {/* 1. About King Marquee Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-xs uppercase font-bold text-amber-700 tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              Our Journey & Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              An Architectural Haven of Elegance in Faisalabad
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Established with a clear objective to elevate celebration standards in Faisalabad, <strong className="text-stone-900 font-semibold">King Marquee</strong> stands as a landmark of sophisticated event hosting. Located at Officer’s Colony 1 along East Canal Expressway, our marquee combines grand interior craftsmanship with state-of-the-art event technology.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We understand that weddings, receptions, and family celebrations are once-in-a-lifetime occasions. Our purpose is to take away all stress from hosts and guests alike, ensuring every ceremony flows seamlessly with regal dignity.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-stone-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Prime East Canal Expressway Location</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>100% Central Climate Control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Spacious Capacity up to 1,200 Guests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Dedicated VIP & Bridal Lounges</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900">
              <img
                src="https://i.pinimg.com/1200x/ce/6e/36/ce6e3611ae0b8b3d580c4821a67ba3cb.jpg"
                alt="King Marquee Grand Hall Interior"
                className="w-full h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Vision Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-widest">Our Guiding Light</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-50">
              Our Vision & Mission
            </h2>
            <p className="text-stone-300 text-base sm:text-lg font-light">
              Creating memorable, comfortable, and beautifully organized celebrations for every family and organization we host.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-950 p-8 rounded-2xl border border-stone-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-100">Exquisite Aesthetic</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                To continuously maintain world-class marquee decor, magnificent lighting, and clean, elegant interiors that set the gold standard in Faisalabad.
              </p>
            </div>

            <div className="bg-stone-950 p-8 rounded-2xl border border-stone-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-100">Guest Comfort First</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                To guarantee 100% climate comfort, prompt hospitality service, easy accessibility, and stress-free event organization for couples and families.
              </p>
            </div>

            <div className="bg-stone-950 p-8 rounded-2xl border border-stone-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-100">Uncompromising Reliability</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                To execute every single function with punctuality, full backup power generation, security management, and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Venue Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
            Grand Marquee Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4 mb-4">
            Our Venue Experience
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Immerse your guests in a setting that combines luxurious scale with intimate warmth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {VENUE_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 text-center shadow-sm">
              <p className="text-3xl sm:text-4xl font-serif font-bold text-amber-800">{stat.value}</p>
              <p className="text-xs font-semibold text-stone-600 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Venue highlights 2 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <h3 className="text-2xl font-serif font-bold text-stone-900">Grand Hall Atmosphere</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              King Marquee features high ceilings adorned with brilliant crystal chandeliers and heavy acoustic draping. This design ensures that speech, music, and announcements remain crisp and pleasing without harsh echoes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <h3 className="text-2xl font-serif font-bold text-stone-900">Guest Accessibility & Parking</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Situated right off East Canal Expressway, Officer's Colony 1, our venue features wide entry points, dedicated drop-off lanes for brides and elders, and a secured parking area accommodating over 500 vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why King Marquee Cards Section */}
      <section className="py-20 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">
              Why King Marquee Stand Out
            </h2>
            <p className="text-stone-600">
              The preferred choice for families celebrating weddings and milestones in Faisalabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-900">Experienced Hospitality Staff</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Uniformed waitstaff and table coordinators trained to provide prompt, courteous service to all your guests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Crown className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-900">Custom Stage Styling</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Extensive catalog of Barat and Valima stage backdrops, fresh flower arrangements, and royal couple thrones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-900">Complete Event Solutions</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                From buffet setups and live catering counters to sound, projection, and backup power generators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA: Plan Your Event With Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100">
            Plan Your Event With Us
          </h2>
          <p className="text-stone-300 text-base max-w-xl mx-auto">
            Contact our event planning specialists to schedule a venue tour or request custom pricing for your date.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Contact King Marquee</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 bg-stone-800 hover:bg-stone-700 text-white font-semibold rounded-xl border border-stone-700 transition-colors"
            >
              Book Event Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
