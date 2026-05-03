import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import FadeIn from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Jacuzzi & Steam Bath in Gomti Nagar Lucknow | Relaxio Spa",
  description:
    "Experience luxury Jacuzzi and Steam Bath in Gomti Nagar Lucknow at Relaxio Spa. Premium wellness sessions for relaxation detox and stress relief.",
  keywords: [
    "Jacuzzi in Gomti Nagar Lucknow",
    "Steam Bath in Lucknow",
    "Luxury Spa in Gomti Nagar",
    "Best Spa in Lucknow",
    "Jacuzzi Spa Near Me"
  ],
  alternates: {
    canonical: "/services/spa-facilities",
  },
  openGraph: {
    title: "Jacuzzi & Steam Bath in Gomti Nagar Lucknow | Relaxio Spa",
    description:
      "Luxury Jacuzzi and Steam Bath sessions in Gomti Nagar Lucknow for complete relaxation wellness and detox.",
    url: "/services/spa-facilities",
    images: [
      "https://relaxiospa.in/images/jacuzzi-steam-bath-lucknow.avif"
    ],
  },
};

async function getFAQs() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/faqs`, {
      next: { revalidate: 3600 },
    });

    return res.json();
  } catch {
    return [];
  }
}

export default async function SpaFacilitiesPage() {
  const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Services", item: "/services" },
  { name: "Spa Facilities", item: "/services/spa-facilities" },
];
  const allFaqs = (await getFAQs()) || [];

  const faqs = Array.isArray(allFaqs)
    ? allFaqs.filter(
        (f) => f.page?.toLowerCase().trim() === "spa-facilities"
      )
    : [];

  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getFAQSchema(faqs)),
  }}
/>
<ServiceHero
  title="Jacuzzi & Steam Bath in Gomti Nagar Lucknow"
  subtitle="Relax your body and mind with premium Jacuzzi and Steam Bath sessions at Relaxio Spa."
  image="/images/jacuzzi-steam-bath-lucknow.avif"
  alt="Jacuzzi and Steam Bath in Gomti Nagar Lucknow"
/>

      {/* MAIN CONTENT */}
      <section className="py-24 bg-[#fdfbf7] content-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none font-light text-stone-700">

            {/* Intro */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-stone-600 leading-relaxed">
                Experience luxury Jacuzzi and Steam Bath sessions at Relaxio Spa Gomti Nagar Lucknow. Relax your body, detox your skin, and enjoy complete wellness in a premium spa environment.
              </p>
            </div>

            {/* Benefits */}
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 text-center">
                Incredible Benefits of Jacuzzi & Steam Bath
              </h2>

              <p className="mb-10 leading-relaxed text-center max-w-3xl mx-auto">
                Jacuzzi and Steam Bath therapies are more than just luxury spa facilities; they are powerful wellness experiences that help your body relax, detoxify, and recover from daily stress and fatigue.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Detoxifies the body and removes toxins",
                  "Improves blood circulation and recovery",
                  "Relieves muscle tension and body fatigue",
                  "Enhances skin health and glow",
                  "Reduces stress and mental exhaustion",
                  "Supports relaxation before massage therapy",
                  "Helps improve sleep quality",
                  "Provides a luxury wellness experience",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#d4af37] shrink-0 mt-1"
                      size={20}
                    />

                    <span className="text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>
            
            {/* Center Image */}
            <FadeIn>
              <div className="my-16 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <Image

                  src="/images/jacuzzi-steam-bath-lucknow.avif"
                  alt="Jacuzzi and Steam Bath in Gomti Nagar Lucknow Relaxio Spa"
                  fill
                  sizes="100vw"
                  
                  className="object-cover"
                  loading="lazy"
                 />
              </div>
            </FadeIn>

            {/* Why Relaxio */}
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
                Why Relaxio is the Best Spa in Gomti Nagar
              </h2>

              <p className="mb-6 leading-relaxed">
                At Relaxio Spa, we provide premium Jacuzzi and Steam Bath facilities designed for complete body relaxation and wellness. Our luxury spa environment, hygienic facilities, and peaceful ambience create the perfect experience for stress relief and rejuvenation.
              </p>

              <p className="mb-10 leading-relaxed">
                Whether you want to relax after a long day, prepare your body before massage therapy, or enjoy a complete wellness session, Relaxio Spa offers one of the best Jacuzzi and Steam Bath experiences in Gomti Nagar Lucknow.
              </p>
            
            {/* Pricing */}
            <FadeIn>
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-stone-100 my-16">
                <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">
                  Jacuzzi & Steam Bath Pricing
                </h2>

                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">
                        Relaxation Session
                      </h4>

                      <p className="text-stone-500 text-sm">
                        30 Minutes
                      </p>
                    </div>

                    <div className="text-2xl font-serif text-[#d4af37]">
                      ₹999
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">
                        Luxury Wellness Session
                      </h4>

                      <p className="text-stone-500 text-sm">
                        60 Minutes
                      </p>
                    </div>

                    <div className="text-2xl font-serif text-[#d4af37]">
                      ₹3,499
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">
                        Complete Spa Experience
                      </h4>

                      <p className="text-stone-500 text-sm">
                        Jacuzzi + Steam Bath + Massage
                      </p>
                    </div>

                    <div className="text-2xl font-serif text-[#d4af37]">
                      ₹5,999
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <a
                    href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20Jacuzzi%20and%20Steam%20Bath"
                    aria-label="Book Jacuzzi and Steam Bath Appointment"
                    className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all duration-300 text-sm uppercase tracking-widest font-medium w-full md:w-auto"
                  >
                    Book Your Appointment
                  </a>
                </div>
              </div>
              </FadeIn>

            {/* FAQ */}
              <FAQ faqs={faqs} />
            
          </div>
        </div>
      </section>
    </>
  );
}