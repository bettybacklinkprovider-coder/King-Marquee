export interface EventService {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  features: string[];
  ctaText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Receptions' | 'Decor' | 'Interiors' | 'Corporate';
  image: string;
  caption: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}
