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
    <section className="py-16 md:py-20 bg-[#fdfbf7]">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 text-center mb-10 leading-tight tracking-[-0.02em]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-stone-200/80 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
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

                <span aria-hidden="true" className={`text-xl transition-transform duration-300 ${
                     activeIndex === index ? "rotate-180" : ""
                   }`}>
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

        <div
          id={`faq-content-${index}`}
          role="region"
          aria-labelledby={`faq-button-${index}`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
          activeIndex === index
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0"
          }`}
           >
           <p className="px-6 pb-5 text-stone-600 leading-relaxed">
           {faq.answer}
          </p>
           </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}