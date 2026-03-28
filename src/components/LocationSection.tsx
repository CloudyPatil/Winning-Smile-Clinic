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

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {[
              { icon: MapPin, title: "Address", line1: "Adaigaon, Adai", line2: "Maharashtra 410206" },
              { icon: Clock, title: "Hours", line1: "Open Daily", line2: "Till 10:00 PM" },
              { icon: Navigation, title: "Easy Access", line1: "Near New Panvel", line2: "Well-connected area" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 text-center sm:text-left justify-center sm:justify-start">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.line1}<br />{item.line2}</p>
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
