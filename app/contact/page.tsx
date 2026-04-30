import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import FAQ from '@/components/FAQ';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ShieldCheck,
  Sparkles,
  MessageCircle
} from 'lucide-react';


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

async function getFAQs() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/faqs`, {
      next: { revalidate: 3600 },
    });

    return res.json();
  } catch (error) {
    console.error("FAQ fetch error:", error);
    return [];
  }
}

export default async function ContactPage() {
  
    const allFaqs = (await getFAQs()) || [];

  const faqs = Array.isArray(allFaqs)
    ? allFaqs.filter(
        (f) => f.page?.toLowerCase().trim() === "contact"
      )
    : [];

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
    __html: JSON.stringify(getFAQSchema(faqs))
  }}
/>
      
      {/* Header Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-950">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
  <Image 
  src="/images/relaxio-spa-gomti-nagar-lucknow-contact.webp"
  alt="Luxury spa interior in Gomti Nagar Lucknow at Relaxio Spa"
  fill
  priority
  unoptimized
  quality={65}
  sizes="100vw"
  className="object-cover object-center"
/>

  <div className="absolute inset-0 bg-black/70" />
</div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

      {/* Trust Section */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <FadeIn>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">
              Why Choose Relaxio Spa
            </span>

            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Luxury Wellness Experience in Gomti Nagar
            </h2>

            <p className="text-base md:text-lg text-stone-300 max-w-3xl mx-auto font-light leading-relaxed mb-16">
              Relaxio Spa offers professional massage therapies, luxury ambiance,
              private spa rooms, and expert wellness treatments designed to help
              you relax, recover, and rejuvenate in complete comfort.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <FadeIn>
              <div className="bg-stone-800/50 rounded-3xl p-10 border border-stone-700">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
  <ShieldCheck className="text-[#d4af37]" size={30} />
</div>
                <h3 className="text-2xl font-serif mb-4 text-[#d4af37]">
                  Certified Therapists
                </h3>

                <p className="text-stone-300 font-light leading-relaxed">
                  Experienced and professionally trained therapists delivering premium wellness therapies.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-stone-800/50 rounded-3xl p-10 border border-stone-700">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
  <Sparkles className="text-[#d4af37]" size={30} />
</div>
                  <h3 className="text-2xl font-serif mb-4 text-[#d4af37]">
                  Private Luxury Rooms
                </h3>

                <p className="text-stone-300 font-light leading-relaxed">
                  Enjoy peaceful and hygienic spa rooms designed for complete privacy and relaxation.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-stone-800/50 rounded-3xl p-10 border border-stone-700">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
  <MessageCircle className="text-[#d4af37]" size={30} />
</div>
                <h3 className="text-2xl font-serif mb-4 text-[#d4af37]">
                  Easy WhatsApp Booking
                </h3>

                <p className="text-stone-300 font-light leading-relaxed">
                  Quick appointment confirmations and personalized support directly through WhatsApp.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

           {/* CTA Section */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-stone-950 px-8 py-16 md:px-16 md:py-20 text-center">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-transparent"></div>

            <div className="relative z-10">

              <FadeIn>
                <span className="text-[#d4af37] uppercase tracking-[0.25em] text-xs md:text-sm font-medium mb-4 block">
                  Relax • Rejuvenate • Recharge
                </span>

                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                  Book Your Luxury Spa Experience Today
                </h2>

                <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10">
                  Experience premium Thai Massage, Balinese Massage, Deep Tissue Therapy,
                  and wellness treatments at Relaxio Spa Gomti Nagar Lucknow.
                </p>

                <a
                  href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20an%20appointment."
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#1ebe57] transition-all duration-300 text-sm uppercase tracking-widest font-medium shadow-xl hover:-translate-y-1"
                >
                  Book on WhatsApp
                </a>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-[#fdfbf7] pb-24">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
}
