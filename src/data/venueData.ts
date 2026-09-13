import { EventService, FeatureItem, GalleryItem } from '../types';
import heroImage from '../assets/images/king_marquee_hero_1789283343484.jpg';

export const VENUE_INFO = {
  name: 'King Marquee',
  phone: '+92 41 5380852',
  telLink: 'tel:+92415380852',
  address: "Officer's Colony, 1, East Canal Expy, Officer Colony 1, Faisalabad, Pakistan",
  shortAddress: 'East Canal Expy, Faisalabad',
  email: 'info@kingmarquee.pk',
  hours: 'Monday – Sunday: 10:00 AM – 11:00 PM',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0423187216!2d73.1121!3d31.4175!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242b5efec159b%3A0x6b772099e03d98!2sEast%20Canal%20Expy%2C%20Faisalabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  heroImage: heroImage,
};

export const SERVICES: EventService[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    tagline: 'Royal Celebrations for Your Dream Wedding',
    shortDescription: 'Elegant wedding celebrations with a beautiful environment for couples, families, and guests.',
    detailedDescription: 'At King Marquee, we transform your dream wedding into a majestic reality. Our grand hall, lavish floral setups, personalized bridal stage designs, and ambient lighting create a magical atmosphere for your sacred Barat or Nikkah ceremony.',
    image: 'https://i.pinimg.com/736x/01/d0/a8/01d0a8914ce15d8f5a8a83bcedeb15c7.jpg',
    features: [
      'Bespoke Stage & Floral Decor',
      'Spacious Seating for up to 1,200 Guests',
      'VIP Bridal Lounge & Groom Suite',
      'Customized Lighting & Sound System',
      'Gourmet Catering Options & Live Counters',
      'Dedicated Event Coordinator'
    ],
    ctaText: 'Inquire for Weddings'
  },
  {
    id: 'receptions',
    title: 'Receptions',
    tagline: 'Sophisticated Valima & Grand Receptions',
    shortDescription: 'Create a sophisticated reception experience with a comfortable and memorable atmosphere.',
    detailedDescription: 'Host your Valima or grand wedding reception with unmatched luxury and warmth. King Marquee provides exquisite buffet layouts, prompt table service, crystal chandeliers, and a soothing ambient environment so you and your guests enjoy every moment.',
    image: 'https://i.pinimg.com/736x/33/73/16/337316a0130c6404462956927c8135f3.jpg',
    features: [
      'Opulent Dining & Buffet Layouts',
      'Climate-Controlled Comfort Year-Round',
      'Grand Entrance & Red Carpet Protocol',
      'High-Definition Multimedia Displays',
      'Valet Parking & Secure Premises',
      'Experienced Service Staff'
    ],
    ctaText: 'Book Your Reception'
  },
  {
    id: 'engagements',
    title: 'Engagements & Family Events',
    tagline: 'Unforgettable Moments with Family & Loved Ones',
    shortDescription: 'Perfect for engagements, family gatherings, celebrations, and other special occasions.',
    detailedDescription: 'Whether it is a vibrant Mehndi night, a traditional Dholki, an intimate Engagement ring ceremony, or a milestone Anniversary celebration, King Marquee offers versatile setups tailored to your family’s traditions and joy.',
    image: 'https://i.pinimg.com/1200x/80/11/ed/8011ede7caa1591bf88acdf5191a1937.jpg',
    features: [
      'Flexible Hall Partitioning',
      'Vibrant Stage & Backdrop Styling',
      'Traditional & Modern Music Systems',
      'Customized Menu Planning',
      'Family Photography Zones',
      'Attentive Hospitality'
    ],
    ctaText: 'Plan Family Event'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    tagline: 'Professional Venues for Executive Excellence',
    shortDescription: 'Suitable for professional gatherings, corporate functions, meetings, celebrations, and business events.',
    detailedDescription: 'Elevate your business gatherings, annual corporate galas, award ceremonies, and product launches. King Marquee provides state-of-the-art audiovisual support, high-speed Wi-Fi connectivity, executive seating, and refined catering to reflect your corporate prestige.',
    image: 'https://i.pinimg.com/736x/2c/2d/28/2c2d28ede1c16eb0ccc5992017a081e1.jpg',
    features: [
      'Advanced AV & Projector Systems',
      'Flexible Seating (Theater, Banquet, Classroom)',
      'High-Speed Wi-Fi & Podiums',
      'Executive Luncheon & High-Tea Buffets',
      'Professional Sound Engineering',
      'Ample Parking for Corporate Delegates'
    ],
    ctaText: 'Reserve Corporate Venue'
  }
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: 'venue',
    title: 'Elegant & Modern Venue',
    description: 'Architecture and interior aesthetics featuring grand chandeliers, polished marble, and luxurious draped ceilings.',
    icon: 'Sparkles'
  },
  {
    id: 'spacious',
    title: 'Spacious Event Environment',
    description: 'Generously proportioned hall capable of hosting large gatherings with comfortable aisle space and guest movement.',
    icon: 'Maximize'
  },
  {
    id: 'professional',
    title: 'Professional Event Experience',
    description: 'Experienced management and hospitality team dedicated to seamless execution from planning to the final send-off.',
    icon: 'Award'
  },
  {
    id: 'comfort',
    title: 'Comfortable Guest Experience',
    description: '100% climate-controlled air conditioning, luxury washrooms, VIP suites, and comfortable upholstered seating.',
    icon: 'Heart'
  },
  {
    id: 'location',
    title: 'Ideal Location in Faisalabad',
    description: 'Prime position on East Canal Expressway, Officer’s Colony 1, with easy access and ample secured parking.',
    icon: 'MapPin'
  },
  {
    id: 'memorable',
    title: 'Memorable Celebrations',
    description: 'Impeccable attention to detail ensuring your special wedding or celebration creates lifelong cherished memories.',
    icon: 'Smile'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Grand Barat Stage Setup',
    category: 'Weddings',
    image: 'https://i.pinimg.com/736x/01/d0/a8/01d0a8914ce15d8f5a8a83bcedeb15c7.jpg',
    caption: 'Luxurious wedding stage decor with ambient lighting and royal sofa seating'
  },
  {
    id: '2',
    title: 'Valima Hall & Banquet Styling',
    category: 'Receptions',
    image: 'https://i.pinimg.com/736x/33/73/16/337316a0130c6404462956927c8135f3.jpg',
    caption: 'Opulent hall dining arrangement, chandeliers, and floral accents'
  },
  {
    id: '3',
    title: 'Royal Floral Walkway',
    category: 'Decor',
    image: 'https://i.pinimg.com/736x/33/85/02/3385023982f6f491913ff4776d86e248.jpg',
    caption: 'Elegantly decorated guest walkways and floral stage arrangements'
  },
  {
    id: '4',
    title: 'Mehndi & Festivity Decor',
    category: 'Weddings',
    image: 'https://i.pinimg.com/736x/aa/60/f7/aa60f72b5adea9f345d95ecae6248e80.jpg',
    caption: 'Vibrant wedding stage and festive reception decor'
  },
  {
    id: '5',
    title: 'Corporate Gala Stage',
    category: 'Corporate',
    image: 'https://i.pinimg.com/736x/6d/a2/c7/6da2c7f27708492f227562fe0d22928a.jpg',
    caption: 'Executive stage lighting and premium event setup'
  },
  {
    id: '6',
    title: 'Grand Marquee Banquet Hall',
    category: 'Interiors',
    image: 'https://i.pinimg.com/1200x/ce/6e/36/ce6e3611ae0b8b3d580c4821a67ba3cb.jpg',
    caption: 'Opulent hall dining arrangements and luxurious interior decor'
  }
];

export const VENUE_STATS = [
  { value: '1,200+', label: 'Guest Capacity' },
  { value: '500+', label: 'Parking Spaces' },
  { value: '100%', label: 'Climate Controlled' },
  { value: '15+', label: 'Years of Excellence' }
];
