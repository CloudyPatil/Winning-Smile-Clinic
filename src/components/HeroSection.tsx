import { Phone, Calendar } from "lucide-react";
import doctorImg from "@/assets/doctor-refined.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-end lg:items-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative w-full container mx-auto pb-28 lg:pb-16 pt-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6 animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Open till 10 PM today</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground animate-fade-up delay-100">
              Pain-Free Dental Care{" "}
              <span className="text-gradient">in New Panvel</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-up delay-200">
              Trusted, gentle care by <strong className="text-foreground">Dr. Kshitij Mandle</strong> — where every smile matters.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up delay-300">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </a>
              <a
                href="tel:8369757266"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/15 bg-card/80 backdrop-blur px-7 py-3.5 text-base font-semibold text-foreground hover:border-primary/40 transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start animate-fade-up delay-400">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-clinic-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">Rated</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span className="text-sm text-muted-foreground">100+ Happy Patients</span>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="hidden lg:block flex-shrink-0 animate-fade-in delay-300">
            <div className="relative w-80 h-[420px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={doctorImg}
                alt="Dr. Kshitij Mandle"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-clinic-navy/80 to-transparent p-5">
                <p className="font-display text-lg font-semibold text-primary-foreground">Dr. Kshitij Mandle</p>
                <p className="text-sm text-primary-foreground/80">BDS, Dental Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
