import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

const BookingSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Dr. Mandle, I'd like to book an appointment.\nName: ${name}\nPhone: ${phone}\nPreferred Time: ${time}`
    );
    window.open(`https://wa.me/918369757266?text=${msg}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  return (
    <section id="booking" className="py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Get Started</p>
            <h2 className="font-display text-3xl md:text-4xl font-800 text-foreground">Book Your Visit</h2>
            <p className="mt-3 text-muted-foreground">Quick & easy — we'll confirm within minutes.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border-2 border-border bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-base"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-xl border-2 border-border bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors text-base"
            />
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full rounded-xl border-2 border-border bg-background px-5 py-4 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none text-base"
            >
              <option value="">Preferred Time</option>
              <option value="Morning (9–12)">Morning (9–12)</option>
              <option value="Afternoon (12–4)">Afternoon (12–4)</option>
              <option value="Evening (4–8)">Evening (4–8)</option>
              <option value="Night (8–10)">Night (8–10)</option>
            </select>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              <Send className="h-5 w-5" />
              Book via WhatsApp
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="https://wa.me/918369757266"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Or chat with us directly on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
