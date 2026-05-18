export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20found%20you%20through%20your%20website%20and%20want%20to%20book%20a%20spa%20session."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Relaxio Spa"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 bg-[#25D366] text-stone-900 min-h-11 min-w-11 p-3 rounded-full shadow-lg hover:bg-[#1ebe57] transition-colors duration-200 flex items-center justify-center group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
      <span className="sr-only">Book via WhatsApp</span>
      <span
        aria-hidden="true"
        className="hidden md:block absolute right-full mr-4 bg-white text-stone-900 text-sm py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium shadow-lg border border-stone-100"
      >
        Book via WhatsApp
      </span>
    </a>
  );
}
