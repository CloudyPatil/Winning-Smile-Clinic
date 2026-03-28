import { Heart, Shield, Sparkles } from "lucide-react";
import doctorImg from "@/assets/doctor-refined.png";

const traits = [
  { icon: Heart, title: "Gentle & Caring", desc: "Every treatment is performed with warmth and patience" },
  { icon: Shield, title: "Painless Procedures", desc: "Advanced techniques to ensure a comfortable experience" },
  { icon: Sparkles, title: "Spotless Clinic", desc: "Sterile, modern environment you can trust" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image - mobile visible */}
          <div className="lg:hidden w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-xl mx-auto">
            <img src={doctorImg} alt="Dr. Kshitij Mandle" className="w-full h-full object-cover object-top" />
          </div>

          {/* Image - desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative w-72 h-80 rounded-[2rem] overflow-hidden shadow-xl">
              <img src={doctorImg} alt="Dr. Kshitij Mandle" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Meet Your Doctor</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Dr. Kshitij Mandle
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              With a passion for creating beautiful, healthy smiles, Dr. Mandle brings a perfect blend of expertise and empathy. 
              Every patient is treated like family — with genuine care, clear communication, and the most gentle hands in dentistry.
            </p>

            <div className="mt-10 space-y-5">
              {traits.map((t) => (
                <div key={t.title} className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <t.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.title}</p>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
