export const metadata = {
title: "Terms of Service | Relaxio Spa",
description:
"Terms of Service for Relaxio Spa.",
};

export default function TermsOfServicePage() {
return (
<section className="max-w-4xl mx-auto px-4 py-20">
<h1 className="text-4xl font-serif mb-8 text-[#d4af37]">
Terms of Service
</h1>

  <div className="space-y-6 text-stone-700 leading-relaxed">

    <p>
      By booking or using Relaxio Spa services, you agree to
      comply with these terms.
    </p>

    <h2 className="text-2xl font-serif text-[#d4af37]">
      Appointments
    </h2>

    <p>
      Appointments are subject to availability and confirmation.
    </p>

    <h2 className="text-2xl font-serif text-[#d4af37]">
      Pricing
    </h2>

    <p>
      Prices and offers may change without prior notice.
    </p>

    <h2 className="text-2xl font-serif text-[#d4af37]">
      Guest Responsibilities
    </h2>

    <p>
      Guests are expected to provide accurate information and
      arrive on time for appointments.
    </p>

  </div>
</section>

);
}