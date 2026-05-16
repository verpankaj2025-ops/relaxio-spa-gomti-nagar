"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs?: FAQItem[];
};

export default function FAQ({ faqs = [] }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#fdfbf7]">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl md:text-5xl text-amber-700 font-serif text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-stone-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-button-${index}`}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="text-lg font-medium text-stone-900">
                  {faq.question}
                </span>

                <span aria-hidden="true" className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

          <div
            id={`faq-content-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            className={`overflow-hidden transition-all duration-200 ${
               activeIndex === index
                   ? "max-h-40 opacity-100 px-6 pb-4"
                   : "max-h-0 opacity-0 px-6 pb-0"
               }`}
              >
               <p className="text-stone-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}