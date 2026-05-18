import type { ComponentType } from 'react';
import {
  IconBedDouble,
  IconMessageCircle,
  IconShieldCheck,
  IconSparkles,
} from '@/components/icons';

export const homeServices = [
  {
    title: 'Deep Tissue Massage',
    desc: 'Firm-pressure wellness therapy focused on muscle recovery, body relaxation, and reducing everyday physical tension.',
    img: '/images/deep-tissue-massage-gomti-nagar-lucknow.avif',
    alt: 'Deep tissue wellness therapy at Relaxio Spa',
    link: '/services/deep-tissue-massage',
    cta: 'Book Deep Tissue',
  },
  {
    title: 'Balinese Massage',
    desc: 'Aromatherapy wellness therapy designed to calm the mind, relax the body, and reduce everyday stress.',
    img: '/images/balinese-massage-gomti-nagar-lucknow.avif',
    alt: 'Luxury Balinese massage therapy at Relaxio Spa',
    link: '/services/balinese-massage',
    cta: 'Relax with Balinese',
  },
  {
    title: 'Thai Massage',
    desc: 'Traditional stretching and pressure-based therapy designed to improve flexibility and relaxation.',
    img: '/images/thai-massage-gomti-nagar-lucknow.avif',
    alt: 'Relaxing Thai massage therapy at Relaxio Spa',
    link: '/services/thai-massage',
    cta: 'Try Thai Massage',
  },
  {
    title: 'Couple Massage',
    desc: 'Enjoy a relaxing wellness experience for couples with private rooms, calming ambience, and professional therapists.',
    img: '/images/couple-massage-lucknow.avif',
    alt: 'Private couple wellness experience at Relaxio Spa',
    link: '/services/couple-massage',
    cta: 'Book Couple Spa',
  },
  {
    title: 'Jacuzzi & Steam Bath',
    desc: 'Relax your body and mind with steam therapy, warm jacuzzi sessions, and a peaceful wellness ambience.',
    img: '/images/jacuzzi-steam-bath-lucknow.avif',
    alt: 'Luxury jacuzzi and steam bath experience at Relaxio Spa',
    link: '/services/spa-facilities',
    cta: 'Relax in Jacuzzi',
  },
] as const;

export const seoPillLinks = [
  { href: '/services/thai-massage', label: 'Thai Massage in Gomti Nagar Lucknow' },
  { href: '/services/balinese-massage', label: 'Balinese Massage Spa in Lucknow' },
  { href: '/services/deep-tissue-massage', label: 'Deep Tissue Massage Therapy in Gomti Nagar' },
  { href: '/services/couple-massage', label: 'Couple Massage Spa in Lucknow' },
  { href: '/services/spa-facilities', label: 'Jacuzzi & Steam Bath Spa in Lucknow' },
] as const;

export const whyChooseCards: {
  Icon: ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
}[] = [
  {
    Icon: IconShieldCheck,
    title: 'Professional Therapists',
    description:
      'Trained wellness professionals focused on comfort, relaxation, and personalized spa experiences.',
  },
  {
    Icon: IconBedDouble,
    title: 'Private Wellness Rooms',
    description:
      'Peaceful private rooms designed for relaxation, comfort, and a premium wellness experience.',
  },
  {
    Icon: IconSparkles,
    title: 'Luxury Ambience',
    description:
      'Elegant interiors, calming atmosphere, and wellness-focused spaces for complete relaxation.',
  },
  {
    Icon: IconMessageCircle,
    title: 'Quick Reservations',
    description:
      'Easy booking support through WhatsApp and direct call assistance for a smooth experience.',
  },
];

export const wellnessHighlights = [
  {
    label: 'Private Comfort',
    title: 'Private Spa Suites',
    description:
      'Quiet wellness spaces thoughtfully designed for peaceful and uninterrupted relaxation experiences.',
  },
  {
    label: 'Signature Therapies',
    title: 'Premium Wellness Rituals',
    description:
      'Luxury massage therapies carefully curated for comfort, rejuvenation, and stress relief.',
  },
  {
    label: 'Relaxing Ambience',
    title: 'Calm Luxury Experience',
    description:
      'Elegant interiors and peaceful wellness spaces designed to create a calming spa atmosphere.',
  },
] as const;
