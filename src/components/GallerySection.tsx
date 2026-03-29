import { ArrowRight } from "lucide-react";

const images = [
  {
    url: "/gallery-img1.png",
    alt: "Winning Smile Facade",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    url: "/gallery-img4.png",
    alt: "Painless Treatment",
    className: "col-span-1 row-span-1",
  },
  {
    url: "/gallery-img3.png",
    alt: "Advanced Technology",
    className: "col-span-1 row-span-1",
  },
  {
    url: "/gallery-img5.png",
    alt: "Welcoming Reception",
    className: "col-span-1 row-span-1",
  },
  {
    url: "/gallery-img2.png",
    alt: "Happy, Healthy Smiles",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Our Space</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-800 text-foreground">Clinic Gallery</h2>
          </div>
          <div className="hidden md:block">
            <a 
              href="https://maps.app.goo.gl/s8tWcKbK4q3hYmL56" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              See all photos on Google <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[160px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div key={i} className={`group relative rounded-3xl overflow-hidden bg-muted shadow-lg ${img.className}`}>
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-white font-semibold text-sm md:text-base leading-snug">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a 
            href="https://maps.app.goo.gl/s8tWcKbK4q3hYmL56" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center justify-center gap-2 w-full rounded-xl border-2 border-foreground/10 bg-background px-7 py-4 text-sm font-semibold text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all"
          >
             View all photos <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
