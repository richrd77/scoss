import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/919113030506"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with SCOSS on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-whatsapp-hover"
  >
    <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
  </a>
);
