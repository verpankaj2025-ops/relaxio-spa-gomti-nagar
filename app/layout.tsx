import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';
import CallWidget from '@/components/layout/CallWidget';

const SITE_URL = "https://relaxiospa.in";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
});

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
  default: 'Best Spa in Gomti Nagar Lucknow | Relaxio Spa',
  template: '%s'
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
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#fdfbf7] text-stone-900 antialiased selection:bg-[#d4af37]/30" suppressHydrationWarning>

        <script
  type="application/ld+json"
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

<script
  type="application/ld+json"
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