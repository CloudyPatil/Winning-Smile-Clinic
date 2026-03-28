import { MapPin, Clock, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Find Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Visit Our Clinic</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border/60 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0!2d73.13!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzAwLjAiTiA3M8KwMDcnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Let's Smile Dental Clinic Location"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center sm:text-left">
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-sm text-muted-foreground">Adaigaon, Adai,<br />Maharashtra 410206</p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Hours</p>
                <p className="text-sm text-muted-foreground">Open Daily<br />Till 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <Navigation className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Easy Access</p>
                <p className="text-sm text-muted-foreground">Near New Panvel<br />Well-connected area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
