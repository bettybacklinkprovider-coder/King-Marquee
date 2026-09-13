import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Phone, Mail, User, CheckCircle2, Crown, MapPin } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';
import { InquiryFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEventType?: string;
}

export default function BookingModal({ isOpen, onClose, defaultEventType = 'Weddings' }: BookingModalProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: defaultEventType,
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

    // Generate reference code
    const generatedRef = 'KM-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
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
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-900/75 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl overflow-hidden bg-white shadow-2xl rounded-2xl border border-amber-200/50 my-8"
          >
            {/* Modal Header */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 text-white">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 text-stone-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <Crown className="w-7 h-7 text-amber-400" />
                <span className="text-xs uppercase tracking-widest font-semibold text-amber-300">King Marquee Faisalabad</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
                Book Your Event
              </h2>
              <p className="text-sm text-stone-300 mt-1">
                Reserve your date at Faisalabad's premier event venue. Our team will contact you promptly.
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 px-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-stone-600 mb-4 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>. Your event inquiry for <span className="font-semibold text-stone-900">{formData.eventType}</span> on <span className="font-semibold text-stone-900">{formData.eventDate}</span> has been successfully submitted.
                  </p>

                  <div className="inline-block bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                    <p className="text-xs text-amber-800 uppercase tracking-wider font-semibold mb-1">Inquiry Reference Code</p>
                    <p className="text-2xl font-mono font-bold text-amber-950">{refCode}</p>
                  </div>

                  <div className="text-sm text-stone-500 mb-6 bg-stone-50 p-4 rounded-xl border border-stone-100 text-left">
                    <p className="font-medium text-stone-800 mb-1">Direct Contact Assistance:</p>
                    <p className="flex items-center gap-2 text-stone-700">
                      <Phone className="w-4 h-4 text-amber-600" />
                      <span>{VENUE_INFO.phone}</span>
                    </p>
                    <p className="flex items-center gap-2 text-stone-700 mt-1">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span>{VENUE_INFO.address}</span>
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-xl shadow-md transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Mohammad Ali"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                            errors.fullName ? 'border-rose-400 focus:ring-rose-200' : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                          }`}
                        />
                      </div>
                      {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 1234567"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                            errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                      </div>
                    </div>

                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      >
                        <option value="Weddings">Weddings</option>
                        <option value="Receptions">Receptions</option>
                        <option value="Engagements & Family Events">Engagements & Family Events</option>
                        <option value="Corporate Events">Corporate Events</option>
                        <option value="Other Celebrations">Other Celebrations</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Event Date */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Preferred Event Date <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                            errors.eventDate ? 'border-rose-400 focus:ring-rose-200' : 'border-stone-200 focus:border-amber-500 focus:ring-amber-200'
                          }`}
                        />
                      </div>
                      {errors.eventDate && <p className="text-xs text-rose-500 mt-1">{errors.eventDate}</p>}
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Estimated Guest Count
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <select
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        >
                          <option value="100-300">100 - 300 Guests</option>
                          <option value="300-500">300 - 500 Guests</option>
                          <option value="500-800">500 - 800 Guests</option>
                          <option value="800-1200+">800 - 1,200+ Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Special Requirements / Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your preferences, stage design ideas, catering requirements..."
                      className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                    ></textarea>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-center"
                    >
                      Submit Booking Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="py-3 px-6 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-xl transition-colors text-center"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
