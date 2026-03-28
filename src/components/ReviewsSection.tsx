import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    text: "The doctor was kind, explained everything well, and the treatment was painless. Best dental experience I've ever had!",
    rating: 5,
  },
  {
    name: "Rahul M.",
    text: "Clean clinic and friendly staff. Highly recommended! My kids were not scared at all.",
    rating: 5,
  },
  {
    name: "Sneha K.",
    text: "Got my root canal done here. Zero pain and the doctor was very reassuring throughout. Truly 5 star service.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % reviews.length);
  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);

  const featured = reviews[active];

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-slate-bg">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Patient Love</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-800 text-foreground">What Our Patients Say</h2>
        </div>

        {/* Featured review */}
        <div className="max-w-2xl mx-auto text-center">
          <Quote className="h-10 w-10 text-primary/20 mx-auto mb-6" />

          <p className="text-xl md:text-2xl lg:text-3xl font-display font-600 leading-snug text-foreground">
            "{featured.text}"
          </p>

          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(featured.rating)].map((_, j) => (
              <Star key={j} className="h-5 w-5 text-gold fill-gold" />
            ))}
          </div>

          <p className="mt-3 text-base font-semibold text-foreground">{featured.name}</p>
          <p className="text-sm text-muted-foreground">Verified Patient</p>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
