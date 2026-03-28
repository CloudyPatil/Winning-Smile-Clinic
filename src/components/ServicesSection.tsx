import { Smile, CircleDot, Layers, AlignLeft, Palette, AlertTriangle } from "lucide-react";

const services = [
  { icon: Smile, name: "Teeth Cleaning", desc: "Professional cleaning for a brighter smile" },
  { icon: CircleDot, name: "Root Canal", desc: "Pain-free root canal treatment" },
  { icon: Layers, name: "Dental Implants", desc: "Permanent tooth replacement" },
  { icon: AlignLeft, name: "Braces & Aligners", desc: "Straight teeth, confident smile" },
  { icon: Palette, name: "Cosmetic Dentistry", desc: "Veneers, whitening & makeovers" },
  { icon: AlertTriangle, name: "Emergency Care", desc: "Immediate relief when you need it" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 section-fade">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex-shrink-0 w-[260px] lg:w-auto snap-start group"
            >
              <div className="relative p-6 rounded-2xl bg-card/80 backdrop-blur border border-border/60 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
