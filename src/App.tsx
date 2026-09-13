import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState('Weddings');

  const handleOpenBooking = (eventType?: string) => {
    if (eventType) {
      setSelectedEventType(eventType);
    }
    setBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-800">
        <Header onOpenBooking={handleOpenBooking} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer onOpenBooking={() => handleOpenBooking()} />

        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          defaultEventType={selectedEventType}
        />
      </div>
    </BrowserRouter>
  );
}
