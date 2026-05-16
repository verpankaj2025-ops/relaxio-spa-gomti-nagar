import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/Navbar'));

import Footer from '@/components/layout/Footer';

const WhatsAppWidget = dynamic(
  () => import('@/components/layout/WhatsAppWidget')
);

const CallWidget = dynamic(
  () => import('@/components/layout/CallWidget')
);

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
});
const SITE_URL = "https://relaxiospa.in";

export const viewport = {
  themeColor: "#d4af37",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  icons: {
  icon: "/favicon.ico",
},

  verification: {
    google: "fqsDy4r5bvC7t2LFbPsXD_h6SqzwN4GMD6ihrS1sDog",
  },

  title: {
    default: 'Luxury Wellness Spa in Gomti Nagar Lucknow | Relaxio Spa',
    template: '%s | Relaxio Spa Gomti Nagar'
  },

  description: 'Relaxio Spa is a luxury wellness spa in Gomti Nagar Lucknow offering relaxing therapies, private rooms, calming ambience, and professional massage experiences.',

  keywords: [
  'Luxury Wellness Spa Lucknow',
  'Spa in Gomti Nagar',
  'Thai Massage Lucknow',
  'Balinese Massage',
  'Deep Tissue Massage',
  'Couple Massage Spa',
  'Wellness Spa Lucknow',
  'Relaxation Therapy',
],

  alternates: {
  canonical: SITE_URL,
},

robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Relaxio Spa',
    title: 'Luxury Wellness Spa in Gomti Nagar Lucknow | Relaxio Spa',
    description: 'Relaxio Spa is a luxury wellness spa in Gomti Nagar Lucknow offering relaxing therapies, private rooms, calming ambience, and professional massage experiences.',
    images: [
      {
        url: 'https://relaxiospa.in/images/spa.avif',
        width: 1200,
        height: 630,
        alt: 'Relaxio Spa Gomti Nagar Lucknow',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Wellness Spa in Gomti Nagar Lucknow | Relaxio Spa',
    description: 'Relaxio Spa is a luxury wellness spa in Gomti Nagar Lucknow offering relaxing therapies, private rooms, calming ambience, and professional massage experiences.',
    images: ['https://relaxiospa.in/images/spa.avif'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#fdfbf7] text-stone-900 antialiased selection:bg-[#d4af37]/30" suppressHydrationWarning>

        {/* ✅ FINAL FIXED SCHEMA */}
        <Script
  id="schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Spa",
      "@id": `${SITE_URL}/#spa`,
      name: "Relaxio Spa",
      url: SITE_URL,
      telephone: "+917081891995",
      priceRange: "₹1499 - ₹8999",
      image: `${SITE_URL}/images/luxury-spa-gomti-nagar-lucknow.avif`,

      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, 4/526, Vivek Khand 4",
        addressLocality: "Lucknow",
        addressRegion: "UP",
        postalCode: "226010",
        addressCountry: "IN"
      },

      geo: {
  "@type": "GeoCoordinates",
  latitude: 26.8553677,
  longitude: 80.9985092
},
hasMap:
  "https://www.google.com/maps/dir/?api=1&destination=26.8553677,80.9985092",

      openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
    ],
    opens: "11:00",
    closes: "21:00"
  }
],

areaServed: [
  { "@type": "Place", name: "Gomti Nagar" },
  { "@type": "Place", name: "Lucknow" },
  { "@type": "Place", name: "Vivek Khand" },
  { "@type": "Place", name: "Indira Nagar" },
  { "@type": "Place", name: "Patrakarpuram" },
  { "@type": "Place", name: "Chinhut" },
],
  
    })
  }}
/>

<Script
  id="website-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Relaxio Spa",
      
      inLanguage: "en-IN",
      
      about: {
  "@id": `${SITE_URL}/#spa`
}
    })
  }}
/>

        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
        <CallWidget />

      </body>
    </html>
  );
}