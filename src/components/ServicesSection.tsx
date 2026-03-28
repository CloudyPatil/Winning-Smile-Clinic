import { Smile, CircleDot, Layers, AlignLeft, Palette, AlertTriangle, ArrowRight } from "lucide-react";

const services = [
  { icon: Smile, name: "Teeth Cleaning", desc: "Professional cleaning for a brighter, healthier smile" },
  { icon: CircleDot, name: "Root Canal", desc: "Advanced pain-free root canal treatment" },
  { icon: Layers, name: "Dental Implants", desc: "Permanent, natural-looking tooth replacement" },
  { icon: AlignLeft, name: "Braces & Aligners", desc: "Straight teeth and a confident smile" },
  { icon: Palette, name: "Cosmetic Dentistry", desc: "Veneers, whitening & complete makeovers" },
  { icon: AlertTriangle, name: "Emergency Care", desc: "Immediate relief when you need it most" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-800 text-foreground">Our Services</h2>
        </div>

        {/* Vertical list with dividers */}
        <div className="max-w-3xl mx-auto">
          {services.map((s, i) => (
            <div key={s.name}>
              <a
                href="#booking"
                className="group flex items-center gap-5 py-6 px-2 transition-colors hover:bg-primary/5 rounded-xl -mx-2"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>
              {i < services.length - 1 && <div className="h-px bg-border mx-2" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
