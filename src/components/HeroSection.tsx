import { Phone, Calendar, Star } from "lucide-react";
import doctorImg from "@/assets/doctor-refined.png";
import doctorMobileImg from "@/assets/doctor.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center overflow-hidden bg-slate-bg">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative w-full container mx-auto pt-24 pb-20 lg:pt-0 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Doctor Image - Mobile */}
            <div className="lg:hidden w-full max-w-[360px] mx-auto mb-6 animate-fade-up">
              <div className="relative">
                <div className="w-full h-[270px] rounded-3xl overflow-hidden shadow-2xl shadow-navy/20 ring-1 ring-border/50">
                  <img
                    src={doctorMobileImg}
                    alt="Dr. Kshitij Mandle"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-3 left-3 bg-background/95 rounded-xl px-3 py-2 shadow-lg border border-border/60 text-left">
                  <p className="font-display text-sm font-bold text-foreground">Dr. Kshitij Mandle</p>
                  <p className="text-xs text-muted-foreground">BDS, Dental Surgeon</p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-1.5 mb-6 animate-fade-up shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-gold fill-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">5.0 Rated</span>
              <span className="text-xs text-muted-foreground">• 100+ patients</span>
            </div>

            <h1 className="font-display text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-800 leading-[1.08] tracking-tight text-foreground animate-fade-up delay-100">
              Pain-Free Dental
              <br />
              Care in{" "}
              <span className="text-primary">New Panvel</span>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed animate-fade-up delay-200">
              Trusted, gentle care by <strong className="text-foreground font-semibold">Dr. Kshitij Mandle</strong> — where every smile is treated with precision and warmth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up delay-300">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </a>
              <a
                href="tel:8369757266"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-foreground/10 bg-background px-7 py-4 text-base font-semibold text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid w-full max-w-md grid-cols-3 overflow-hidden rounded-2xl border border-border bg-background/80 animate-fade-up delay-400 mx-auto lg:mx-0">
              <div className="px-3 py-4 text-center border-r border-border/80">
                <p className="text-2xl font-display font-800 text-foreground leading-none">100+</p>
                <p className="mt-1 text-xs text-muted-foreground font-medium">Happy Patients</p>
              </div>
              <div className="px-3 py-4 text-center border-r border-border/80">
                <p className="text-2xl font-display font-800 text-foreground leading-none">5.0</p>
                <p className="mt-1 text-xs text-muted-foreground font-medium">Google Rating</p>
              </div>
              <div className="px-3 py-4 text-center">
                <p className="text-2xl font-display font-800 text-foreground leading-none">10PM</p>
                <p className="mt-1 text-xs text-muted-foreground font-medium">Open Till</p>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="hidden lg:block flex-shrink-0 animate-slide-in-right delay-200">
            <div className="relative">
              <div className="w-[360px] h-[460px] rounded-3xl overflow-hidden shadow-2xl shadow-navy/20 ring-1 ring-border/50">
                <img
                  src={doctorImg}
                  alt="Dr. Kshitij Mandle"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border/50">
                <p className="font-display font-bold text-foreground">Dr. Kshitij Mandle</p>
                <p className="text-sm text-muted-foreground">BDS, Dental Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
