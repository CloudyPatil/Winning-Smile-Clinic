import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-clinic-navy py-12 pb-28 lg:pb-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-display text-xl font-bold text-primary-foreground">Let's Smile</h3>
            <p className="text-primary-foreground/60 text-sm mt-1">Dental Clinic & Implant Centre</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:8369757266" className="hover:text-primary-foreground transition">8369757266</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Adaigaon, Adai, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Open till 10 PM</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Let's Smile Dental Clinic. All rights reserved.
          </p>
          <nav className="flex gap-6 text-xs text-primary-foreground/50">
            <a href="#about" className="hover:text-primary-foreground/80 transition">About</a>
            <a href="#services" className="hover:text-primary-foreground/80 transition">Services</a>
            <a href="#reviews" className="hover:text-primary-foreground/80 transition">Reviews</a>
            <a href="#booking" className="hover:text-primary-foreground/80 transition">Book</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
