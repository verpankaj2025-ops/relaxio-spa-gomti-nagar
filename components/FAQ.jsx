"use client";
import { useState } from "react";
export default function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#fdfbf7]">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl md:text-5xl text-[#f2cc60] font-serif text-center mb-12 text-stone-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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

              {activeIndex === index && (
                <div
                   id={`faq-content-${index}`}
                   role="region"
                   aria-labelledby={`faq-button-${index}`}
                   className="px-6 pb-4 text-stone-600"
                  >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}