import Image from 'next/image';
import type { Metadata } from 'next';
import { getBreadcrumbSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Relaxio Spa | Luxury Wellness Spa in Gomti Nagar Lucknow',
  description:
  'Reach out to Relaxio Spa in Gomti Nagar Lucknow for relaxing wellness sessions, booking assistance, and personalized spa experiences.',
  
  keywords: [
  'Contact Relaxio Spa',
  'Spa Contact Lucknow',
],
  
    alternates: {
    canonical: 'https://relaxiospa.in/contact',
  },
  openGraph: {
  title: 'Contact Relaxio Spa | Luxury Wellness Spa in Gomti Nagar Lucknow',

  description:
  'Reach out to Relaxio Spa in Gomti Nagar Lucknow for relaxing wellness sessions, booking assistance, and personalized spa experiences.',

  url: 'https://relaxiospa.in/contact',

  images: [
    {
      url: 'https://relaxiospa.in/images/spa-contact-gomti-nagar-lucknow.avif',
      width: 1200,
      height: 630,
      alt: 'Relaxio Spa Contact Page',
    },
  ],
}
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Contact Us', item: '/contact' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Relaxio Spa",
      "url": "https://relaxiospa.in/contact",
      "telephone": "+917081891995",
      "image": "https://relaxiospa.in/images/spa-contact-gomti-nagar-lucknow.avif",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, 4/526, Vivek Khand 4",
        "addressLocality": "Lucknow",
        "addressRegion": "UP",
        "postalCode": "226010",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Su 11:00-21:00"
    })
  }}
/>
      
      {/* Header Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-stone-950">

  {/* Background Image */}
  <div className="absolute inset-0">
  <Image 
  src="/images/spa-contact-gomti-nagar-lucknow.avif"
  alt="Spa interior Gomti Nagar Lucknow Relaxio Spa"
  fill
  sizes="100vw"
  className="object-cover object-[center_80%]"
/>

  <div className="absolute inset-0 bg-black/70" />
</div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-16">
          <FadeIn>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Get in Touch</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">Contact Relaxio Spa</h1>
            <p className="text-base sm:text-lg md:text-xl text-stone-200 font-light max-w-3xl mx-auto leading-relaxed">
               Relaxio Spa welcomes guests in a calm and luxurious wellness environment in Gomti Nagar, Lucknow.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <FadeIn direction="right">
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-stone-100 h-full">
                <h2 className="text-3xl font-serif text-stone-900 mb-10">Reach Our Wellness Team</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-[#d4af37]" size={28} />
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-stone-400 font-medium mb-2">Address</h3>
                      <p className="text-stone-700 font-light text-lg leading-relaxed">
                        2nd Floor, 4/526, Vivek Khand 4,<br />
                        Gomti Nagar, Lucknow<br />
                        Uttar Pradesh 226010
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <Clock className="text-[#d4af37]" size={28} />
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-stone-400 font-medium mb-2">Operating Hours</h3>
                      <p className="text-stone-700 font-light text-lg leading-relaxed">
                        Monday - Sunday<br />
                        11:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-[#d4af37]" size={28} />
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-stone-400 font-medium mb-2">Phone</h3>
                      <a
                        href="tel:+917081891995"
                        className="text-stone-700 font-light text-lg leading-relaxed underline underline-offset-4"
                       >
                         +91 7081891995
                       </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-[#d4af37]" size={28} />
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-stone-400 font-medium mb-2">Email</h3>
                      <a
                        href="mailto:hello@relaxiospa.in"
                        className="text-stone-700 font-light text-lg leading-relaxed underline underline-offset-4"
                      >
                        hello@relaxiospa.in
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-stone-100">
                    <h3 className="text-sm uppercase tracking-widest text-stone-400 font-medium mb-4">Direct Booking</h3>
                    
                    <p className="text-stone-600 font-light mb-6">
                      We prefer WhatsApp for instant confirmations and personalized service.
                    </p>
                  

                    <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20an%20appointment."
                      target="_blank"
                      rel="noopener noreferrer"
                       className="inline-flex items-center justify-center px-10 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#1ebe57] transition-all duration-300 text-sm uppercase tracking-widest font-medium w-full sm:w-auto shadow-lg hover:-translate-y-1">
                      Book Spa Appointment on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Map */}
<FadeIn direction="left">
  <div className="h-full min-h-[500px] w-full rounded-3xl overflow-hidden shadow-xl relative">

    {/* 👇 पूरा map clickable */}
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=26.8553677,80.9985092"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 z-10"
    ></a>

    {/* 👇 Map */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5152049774847!2d80.9985092!3d26.855367700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be336e4d8fa9f%3A0x6a5eb278f8c99c28!2sRelaxio%20Spa%20Gomti%20Nagar%20Lucknow!5e0!3m2!1sen!2sin!4v1776642592306!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) opacity(0.9)' }}
      loading="lazy"
      title="Relaxio Spa Location"
      className="pointer-events-none"
    ></iframe>

  </div>
</FadeIn>            
          </div>
        </div>
      </section>
    </>
  );
}
