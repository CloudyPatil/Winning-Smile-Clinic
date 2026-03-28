import { Phone, MessageCircle, Calendar } from "lucide-react";

const StickyBar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
      <div className="glass border-t border-border/60 px-4 py-2.5 flex items-center gap-2">
        <a
          href="tel:8369757266"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-foreground/5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-foreground/10"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href="https://wa.me/918369757266"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[hsl(142,70%,45%)]/10 py-2.5 text-sm font-semibold text-[hsl(142,70%,35%)] transition hover:bg-[hsl(142,70%,45%)]/20"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href="#booking"
          className="flex-[1.3] inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:-translate-y-0.5"
        >
          <Calendar className="h-4 w-4" />
          Book Now
        </a>
      </div>
    </div>
  );
};

export default StickyBar;
