import { MapPin, Clock, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 lg:py-32 bg-slate-bg">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Find Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-800 text-foreground">Visit Our Clinic</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-border/50 mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0!2d73.13!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzAwLjAiTiA3M8KwMDcnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Let's Smile Dental Clinic Location"
            />
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {[
              { icon: MapPin, title: "Address", line1: "Adaigaon, Adai", line2: "Maharashtra 410206" },
              { icon: Clock, title: "Hours", line1: "Open Daily", line2: "Till 10:00 PM" },
              { icon: Navigation, title: "Easy Access", line1: "Near New Panvel", line2: "Well-connected area" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-background/70 border border-border/70 px-2 py-3 sm:px-3 sm:py-4 text-center">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">{item.title}</p>
                  <p className="text-[11px] leading-snug sm:text-sm text-muted-foreground">{item.line1}<br />{item.line2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
