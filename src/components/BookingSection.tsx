import { useState } from "react";
import { CheckCircle2, PhoneCall, Send } from "lucide-react";

const BookingSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [treatment, setTreatment] = useState("");

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Dr. Mandle, I'd like to book an appointment.\nName: ${name}\nPreferred Time: ${time}\nTreatment Type: ${treatment}\nPhone: ${phone}`
    );
    window.open(`https://wa.me/919029852134?text=${msg}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl border border-border/70 bg-background/95 shadow-xl shadow-black/5 px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Get Started</p>
              <h2 className="font-display text-3xl md:text-4xl font-800 text-foreground">Book Your Visit</h2>
              <p className="mt-3 text-muted-foreground">Quick and easy - we'll confirm within minutes.</p>

              <div className="mt-5 grid gap-2 text-sm text-foreground/90">
                <p className="inline-flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Takes less than 30 seconds
                </p>
                <p className="inline-flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  No advance payment required
                </p>
                <p className="inline-flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Confirmation via call or WhatsApp
                </p>
              </div>

              <p className="mt-4 text-sm font-semibold text-foreground">
                Today's slots filling fast • Open till 10 PM
              </p>
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
                <option value="Morning (9-12)">Morning (9-12)</option>
                <option value="Afternoon (12-4)">Afternoon (12-4)</option>
                <option value="Evening (4-8)">Evening (4-8)</option>
                <option value="Night (8-10)">Night (8-10)</option>
              </select>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                required
                className="w-full rounded-xl border-2 border-border bg-background px-5 py-4 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none text-base"
              >
                <option value="">Treatment Type</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Root Canal">Root Canal</option>
                <option value="Braces">Braces</option>
                <option value="Emergency">Emergency</option>
                <option value="Dental Implant">Dental Implant</option>
                <option value="Tooth Extraction">Tooth Extraction</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Consultation">Consultation</option>
              </select>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-2xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
              >
                <Send className="h-5 w-5" />
                Instant Booking on WhatsApp
              </button>
            </form>

            <div className="mt-5 text-center">
              <a
                href="tel:+919029852134"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
              >
                <PhoneCall className="h-4 w-4" />
                Prefer calling? Tap here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
