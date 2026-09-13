import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';
import CallWidget from '@/components/layout/CallWidget';

const SITE_URL = 'https://relaxiospa.in';

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

export const viewport: Viewport = {
  themeColor: '#d4af37',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  icons: {
    icon: '/favicon.ico',
  },

  verification: {
    google: 'fqsDy4r5bvC7t2LFbPsXD_h6SqzwN4GMD6ihrS1sDog',
  },

  title: {
    default: 'Best Spa in Gomti Nagar Lucknow | Relaxio Spa',
    template: '%s | Relaxio Spa',
  },

  description:
    'Relaxio Spa is a luxury wellness spa in Gomti Nagar Lucknow offering Thai, Balinese, Deep Tissue and Couple Massage, plus Jacuzzi and Steam Bath facilities.',

  keywords: [
    'Spa in Gomti Nagar',
    'Spa in Gomti Nagar Lucknow',
    'Thai Massage Lucknow',
    'Balinese Massage Lucknow',
    'Deep Tissue Massage Lucknow',
    'Couple Massage Lucknow',
    'Jacuzzi Lucknow',
    'Steam Bath Lucknow',
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Relaxio Spa',
    title: 'Best Spa in Gomti Nagar Lucknow | Relaxio Spa',
    description:
      'Relaxio Spa offers Thai, Balinese, Deep Tissue and Couple Massage with Jacuzzi and Steam Bath facilities in Gomti Nagar Lucknow.',
    images: [
      {
        url: `${SITE_URL}/images/spa.avif`,
        width: 1200,
        height: 630,
        alt: 'Relaxio Spa in Gomti Nagar Lucknow',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Best Spa in Gomti Nagar Lucknow | Relaxio Spa',
    description:
      'Relaxio Spa offers Thai, Balinese, Deep Tissue and Couple Massage with Jacuzzi and Steam Bath facilities in Gomti Nagar Lucknow.',
    images: [`${SITE_URL}/images/spa.avif`],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Spa',
      '@id': `${SITE_URL}/#spa`,
      name: 'Relaxio Spa',
      url: SITE_URL,
      telephone: ['+917081891995', '+919455671995'],
      priceRange: '₹2,499 - ₹6,499',
      image: `${SITE_URL}/images/spa.avif`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2nd Floor, 4/526, Vivek Khand 4',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        postalCode: '226010',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.8553677,
        longitude: 80.9985092,
      },
      hasMap:
        'https://www.google.com/maps/dir/?api=1&destination=26.8553677,80.9985092',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '11:00',
          closes: '21:00',
        },
      ],
      areaServed: [
        { '@type': 'Place', name: 'Gomti Nagar' },
        { '@type': 'Place', name: 'Lucknow' },
        { '@type': 'Place', name: 'Vivek Khand' },
        { '@type': 'Place', name: 'Indira Nagar' },
        { '@type': 'Place', name: 'Patrakarpuram' },
        { '@type': 'Place', name: 'Chinhat' },
      ],
      sameAs: [
        'https://www.instagram.com/relaxio_spa_lko/',
        'https://www.facebook.com/profile.php?id=61589844524555',
      ],
    },

    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Relaxio Spa',
      inLanguage: 'en-IN',
      publisher: {
        '@id': `${SITE_URL}/#spa`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#fdfbf7] text-stone-900 antialiased selection:bg-[#d4af37]/30">
        <Script id="gtm" strategy="afterInteractive">
          {`
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZT2H3DC');
`}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZT2H3DC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
        <WhatsAppWidget />
        <CallWidget />
      </body>
    </html>
  );
}
