import { getBreadcrumbSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Relaxio Spa | Best Spa in Gomti Nagar Lucknow',
  description: 'Get in touch with Relaxio Spa. Find our location in Gomti Nagar, Lucknow, operating hours, and book your appointment via WhatsApp.',
  keywords: ['Contact Relaxio Spa', 'Spa in Gomti Nagar Lucknow', 'Massage Spa in Lucknow', 'Body Massage near me'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Relaxio Spa | Best Spa in Gomti Nagar Lucknow',
    description: 'Get in touch with Relaxio Spa. Find our location in Gomti Nagar, Lucknow, operating hours, and book your appointment via WhatsApp.',
    url: '/contact',
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
      <section className="pt-40 pb-20 bg-stone-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
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
                        123 Luxury Avenue, Phase 1<br />
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
                        10:00 AM - 9:00 PM
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
                        +91 99999 99999
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
                        hello@relaxiospa.com
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-stone-100">
                    <h3 className="text-sm uppercase tracking-widest text-stone-400 font-medium mb-4">Direct Booking</h3>
                    <p className="text-stone-600 font-light mb-6">
                      We prefer WhatsApp for instant confirmations and personalized service.
                    </p>
                    <a href="https://wa.me/919999999999?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20an%20appointment." 
                       className="inline-flex items-center justify-center px-10 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#1ebe57] transition-all duration-300 text-sm uppercase tracking-widest font-medium w-full sm:w-auto shadow-lg hover:-translate-y-1">
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn direction="left">
              <div className="h-full min-h-[500px] w-full rounded-3xl overflow-hidden shadow-xl relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914113!2d80.9999999!3d26.8500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTknNTkuOSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
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
