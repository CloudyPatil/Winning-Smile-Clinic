import { Heart, Shield, Sparkles } from "lucide-react";
import doctorImg from "@/assets/doctor-aarathi-real.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-navy-deep text-primary-foreground overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 lg:w-72 lg:h-80 rounded-2xl lg:rounded-3xl overflow-hidden ring-2 ring-primary/30 shadow-2xl">
              <img src={doctorImg} alt="Dr. Aarathi" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Meet Your Doctor</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-800 leading-tight">
              Dr. Aarathi
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/70 max-w-xl mx-auto lg:mx-0">
              With a passion for creating beautiful, healthy smiles, Dr. Aarathi brings expertise and genuine empathy to every patient. 
              Every visit is treated like family — with clear communication and the gentlest care.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { icon: Heart, label: "Gentle & Caring" },
                { icon: Shield, label: "Painless Procedures" },
                { icon: Sparkles, label: "Spotless Clinic" },
              ].map((t) => (
                <div key={t.label} className="rounded-xl bg-primary/10 px-2 py-3 sm:px-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <t.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm text-primary-foreground/90 leading-tight">{t.label}</span>
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
