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
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Patient Love</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What Our Patients Say</h2>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-primary/30">
              <div className="flex mb-2">
                {[...Array(r.rating)].map((_, j) => (
                  <svg key={j} className="h-4 w-4 text-clinic-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground leading-relaxed italic">"{r.text}"</p>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
