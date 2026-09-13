import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Crown, CheckCircle2, Phone, Calendar, ArrowRight, Sparkles, Utensils, Music, Shield, Car, Coffee, Flame } from 'lucide-react';
import { SERVICES, VENUE_INFO } from '../data/venueData';

interface ServicesProps {
  onOpenBooking: (eventType?: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const amenities = [
    { icon: Utensils, title: 'Gourmet Catering Options', desc: 'Customizable traditional Pakistani & continental buffet menus' },
    { icon: Sparkles, title: 'Floral & Stage Design', desc: 'Personalized flower arches, backdrops, and lighting setups' },
    { icon: Music, title: 'Sound & Audio Visual', desc: 'High-definition speakers, microphones, and projector displays' },
    { icon: Car, title: 'Valet & Secure Parking', desc: 'Capacity for over 500 vehicles with dedicated security staff' },
    { icon: Coffee, title: 'VIP Bridal Lounge', desc: 'Private climate-controlled suite for the bride & groom family' },
    { icon: Flame, title: '100% Backup Generators', desc: 'Uninterrupted power supply throughout your entire function' }
  ];

  return (
    <div className="w-full bg-stone-50 overflow-hidden">
      {/* Banner */}
      <section className="relative bg-stone-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://i.pinimg.com/736x/7b/09/96/7b09966b54ff455d879e9909b6be025e.jpg"
            alt="King Marquee Services Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/20 border border-amber-400/40 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>King Marquee Offerings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-amber-100">
            Events & Services
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Crafting tailored, grand event experiences for weddings, receptions, family celebrations, and corporate galas in Faisalabad.
          </p>
        </div>
      </section>

      {/* Services List with Alternating Layouts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-3xl border border-stone-200/90 shadow-lg ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-100 group h-80 sm:h-[420px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs uppercase font-bold tracking-widest text-amber-300">King Marquee Faisalabad</span>
                    <h3 className="text-2xl font-serif font-bold">{service.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                  {service.tagline}
                </span>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                  {service.title}
                </h2>

                <p className="text-stone-700 leading-relaxed text-base">
                  {service.detailedDescription}
                </p>

                {/* Feature List */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-900">Key Service Amenities:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all text-sm flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{service.ctaText}</span>
                  </button>

                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium rounded-xl text-sm transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Contact Inquiry</span>
                    <ArrowRight className="w-4 h-4 text-stone-600" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Venue Amenities & Addons Grid */}
      <section className="py-20 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              Complete Hospitality
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-4 mb-3">
              Venue Amenities & Standards
            </h2>
            <p className="text-stone-600">
              Every event at King Marquee comes backed by premium infrastructure to ensure your guests enjoy complete comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA: Let's Make Your Event Special */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Crown className="w-10 h-10 text-amber-400 mx-auto" />
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100">
            Let’s Make Your Event Special
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Our experienced event team at King Marquee is ready to customize decor, layout, and catering to match your vision perfectly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <span>Contact King Marquee</span>
              <ArrowRight className="w-5 h-5 text-stone-950" />
            </Link>

            <a
              href={VENUE_INFO.telLink}
              className="w-full sm:w-auto px-8 py-4 bg-stone-800 hover:bg-stone-700 text-white font-semibold rounded-xl border border-stone-600 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call +92 41 5380852</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
