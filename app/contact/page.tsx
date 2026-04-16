import { getBreadcrumbSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Contact Relaxio Spa Gomti Nagar Lucknow | Book Body Massage Near You',
  description: 'Contact Relaxio Spa in Gomti Nagar Lucknow for premium Thai, Balinese & Deep Tissue Massage. Call or WhatsApp now to book your body massage near you.',
  keywords: [
  'Contact Spa in Gomti Nagar Lucknow',
  'Massage Spa Contact Lucknow',
  'Body Massage near me Lucknow',
  'Spa Phone Number Gomti Nagar',
  'Relaxio Spa Contact'
],
  alternates: {
    canonical: 'https://relaxiospa.in/contact',
  },
  openGraph: {
    title: 'Contact Relaxio Spa Gomti Nagar Lucknow | Book Body Massage Near You',
    description: 'Contact Relaxio Spa in Gomti Nagar Lucknow for Thai, Balinese & Deep Tissue Massage. Call or WhatsApp now to book your body massage near you.',

    url: 'https://relaxiospa.in/contact',
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
      
      {/* Header Section */}
      <section className="relative pt-40 pb-20 text-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
  <Image 
  src="/spa-contact-gomti-nagar-lucknow.webp"
  alt="Spa interior Gomti Nagar Lucknow Relaxio Spa"
  fill
  className="object-cover object-bottom"
/>
  <div className="absolute inset-0 bg-black/70" />
</div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto px-4">
          <FadeIn>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">Visit Our Sanctuary</h1>
            <p className="text-lg text-stone-400 font-light">
              We are conveniently located in the heart of Gomti Nagar. Reach out to us to book your session or ask any questions about our premium therapies.
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
                <h2 className="text-3xl font-serif text-stone-900 mb-10">Contact Information</h2>
                
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
                      <p className="text-stone-700 font-light text-lg leading-relaxed">
                        +91 7081891995
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-[#d4af37]" size={28} />
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-stone-400 font-medium mb-2">Email</h3>
                      <p className="text-stone-700 font-light text-lg leading-relaxed">
                        hello@relaxiospa.in
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-stone-100">
                    <h3 className="text-sm uppercase tracking-widest text-stone-400 font-medium mb-4">Direct Booking</h3>
                    <p className="text-stone-600 font-light mb-6">
                      We prefer WhatsApp for instant confirmations and personalized service.
                    </p>
                    <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20an%20appointment." 
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
                <iframe 
                  src="https://www.google.com/maps?q=26.8554035,80.9959241&output=embed"
                  width="100%" 
                  height="350%" 
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Relaxio Spa Location in Gomti Nagar Lucknow"
                ></iframe>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>
    </>
  );
}
