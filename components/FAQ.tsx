type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs?: FAQItem[];
};

export default function FAQ({ faqs = [] }: FAQProps) {
  return (
    <section className="py-16 md:py-20 bg-[#fdfbf7] content-auto">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 text-center mb-10 leading-tight tracking-[-0.02em]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border border-stone-200/80 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 open:shadow-md"
            >
              <summary className="w-full text-left px-6 py-4 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-medium text-stone-900 pr-4">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl shrink-0 transition-transform duration-300 group-open:rotate-180"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>

              <div
                id={`faq-content-${index}`}
                className="px-6 pb-5 text-stone-600 leading-relaxed border-t border-stone-100/80"
              >
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
