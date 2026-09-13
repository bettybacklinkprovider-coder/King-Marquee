import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Calendar, Users, Send, CheckCircle2, Crown, AlertCircle } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';
import { InquiryFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Weddings',
    eventDate: '',
    guestCount: '300-500',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.eventDate) newErrors.eventDate = 'Preferred Event Date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const generatedRef = 'KM-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedRef);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-stone-50 overflow-hidden">
      {/* Banner */}
      <section className="relative bg-stone-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://i.pinimg.com/1200x/02/27/18/02271818d4f45f2a3b98fcc8eabdfd9a.jpg"
            alt="King Marquee Contact"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/20 border border-amber-400/40 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-amber-100">
            Contact Us
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            We are eager to help you plan your dream wedding or event at King Marquee in Faisalabad.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-900 text-white p-8 rounded-3xl border border-stone-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
                <Crown className="w-7 h-7 text-amber-400" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-amber-100">{VENUE_INFO.name}</h3>
                  <p className="text-xs text-amber-400 uppercase tracking-wider">Faisalabad, Pakistan</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Direct Phone Line</p>
                  <a
                    href={VENUE_INFO.telLink}
                    className="text-xl font-bold text-amber-300 hover:text-amber-200 transition-colors inline-block mt-0.5"
                  >
                    {VENUE_INFO.phone}
                  </a>
                  <p className="text-xs text-stone-400 mt-1">Click to make a direct call</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Venue Address</p>
                  <p className="text-stone-200 text-sm leading-relaxed mt-1 font-medium">
                    {VENUE_INFO.address}
                  </p>
                  <p className="text-xs text-amber-400/90 mt-1">Officer's Colony 1, East Canal Expressway</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Email Inquiry</p>
                  <a href={`mailto:${VENUE_INFO.email}`} className="text-stone-200 hover:text-amber-300 text-sm transition-colors">
                    {VENUE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Office & Consultation Hours</p>
                  <p className="text-stone-200 text-sm mt-0.5">{VENUE_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Quick Consultation Badge */}
            <div className="bg-amber-50 border border-amber-200/80 p-6 rounded-2xl space-y-2">
              <h4 className="font-serif font-bold text-amber-950 text-lg">In-Person Hall Visits</h4>
              <p className="text-stone-700 text-xs leading-relaxed">
                You are warmly invited to visit King Marquee for a personal walkthrough of our venue, stage lighting options, and catering arrangements.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-lg">
              <div className="mb-8">
                <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">Bookings & Inquiries</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                  Send Us An Inquiry
                </h2>
                <p className="text-stone-600 text-sm mt-1">
                  Fill out the form below to check hall availability and get customized event estimates.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-stone-50 border border-amber-200 rounded-2xl p-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900">
                    Thank You For Contacting King Marquee!
                  </h3>
                  <p className="text-stone-700 text-sm max-w-md mx-auto">
                    We have received your event inquiry for <span className="font-semibold text-stone-900">{formData.eventType}</span>. Our event management team will review your details and contact you via phone (<span className="font-semibold text-stone-900">{formData.phone}</span>) within 24 hours.
                  </p>

                  <div className="bg-white p-4 rounded-xl border border-stone-200 max-w-xs mx-auto text-center">
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Reference Number</p>
                    <p className="text-xl font-mono font-bold text-amber-900 mt-0.5">{refCode}</p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          eventType: 'Weddings',
                          eventDate: '',
                          guestCount: '300-500',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-medium text-sm rounded-xl transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Mehmood"
                        className={`w-full px-4 py-3 text-sm bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName ? 'border-rose-400 focus:ring-rose-200' : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className={`w-full px-4 py-3 text-sm bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      />
                    </div>

                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      >
                        <option value="Weddings">Weddings</option>
                        <option value="Receptions">Receptions</option>
                        <option value="Engagements & Family Events">Engagements & Family Events</option>
                        <option value="Corporate Events">Corporate Events</option>
                        <option value="Other Celebrations">Other Celebrations</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Preferred Event Date <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-sm bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          errors.eventDate ? 'border-rose-400 focus:ring-rose-200' : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                        }`}
                      />
                      {errors.eventDate && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.eventDate}</span>
                        </p>
                      )}
                    </div>

                    {/* Guest Count */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Number of Guests
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      >
                        <option value="100-300">100 - 300 Guests</option>
                        <option value="300-500">300 - 500 Guests</option>
                        <option value="500-800">500 - 800 Guests</option>
                        <option value="800-1200+">800 - 1,200+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Message & Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention any preferences for hall layout, stage theme, catering style..."
                      className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-16 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-amber-800 tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Find Us Easily
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Venue Location & Directions
            </h2>
            <p className="text-stone-600 text-sm">
              Conveniently located on East Canal Expressway, Officer's Colony 1, Faisalabad.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-stone-300 shadow-xl h-96 relative bg-stone-900">
            <iframe
              src={VENUE_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="King Marquee Faisalabad Map Location"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <p className="text-xs uppercase font-bold text-amber-800">Canal Expressway Access</p>
              <p className="text-xs text-stone-600 mt-1">Direct access off East Canal Expy</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <p className="text-xs uppercase font-bold text-amber-800">Officer's Colony 1</p>
              <p className="text-xs text-stone-600 mt-1">Prestigious & safe neighborhood</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <p className="text-xs uppercase font-bold text-amber-800">Secured Parking</p>
              <p className="text-xs text-stone-600 mt-1">Guarded parking for 500+ cars</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
