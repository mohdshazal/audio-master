
import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mohammed Khan",
    position: "Luxury Apartment Owner, Downtown Dubai",
    quote: "I didn't want visible cables or bulky speakers ruining my interior — they delivered a fully integrated system that sounds amazing and looks invisible. Truly premium service.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Villa Owner, Dubai Hills",
    quote: "Audio Master designed an immersive home theatre experience that my family and guests absolutely love. The installation was seamless and the team was very respectful of our home and privacy.",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima Al Suwaidi",
    position: "Architect, Abu Dhabi",
    quote: "As an architect, I'm very particular about aesthetics. Audio Master worked with our design team to ensure everything was sleek, minimal, and high-end — without compromising on performance.",
    rating: 4
  },
  {
    id: 4,
    name: "Ravi Menon",
    position: "Restaurant Owner, Jumeirah",
    quote: "They understood the vibe I wanted for my restaurant and delivered a sound system that blends beautifully into the interiors. Guests have noticed the improvement, especially during peak hours.",
    rating: 5
  },
  {
    id: 5,
    name: "Omar Al Hammadi",
    position: "Property Manager, Dubai",
    quote: "The technicians from Audio Master was extremely knowledgeable and efficient. They explained every step, kept the space clean, and completed the job faster than expected — all at a very fair price.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const next = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection('right');
    setActive((prev) => (prev + 1) % testimonials.length);

    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection('left');
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="section-padding bg-burj-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-burj-accent/20 rounded-full text-sm font-medium text-burj-accent mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-white/70">
            Read what our satisfied customers have to say about their experience with Audio Master.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto" role="region" aria-label="Testimonials Carousel">
          <div className="relative overflow-hidden h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ease-in-out transform",
                  active === index ? "opacity-100 translate-x-0" : "opacity-0",
                  active === index ? "" : direction === 'right' ? "translate-x-full" : "translate-x-[-100%]"
                )}
              >
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < testimonial.rating ? "text-burj-accent fill-burj-accent" : "text-gray-400"
                      )}
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl italic mb-6 max-w-2xl">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-lg">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  active === index ? "bg-burj-accent w-6" : "bg-white/30 hover:bg-white/50"
                )}
                onClick={() => {
                  setDirection(index > active ? 'right' : 'left');
                  setActive(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 bg-burj-dark/50 backdrop-blur rounded-full flex items-center justify-center text-white transition-all hover:bg-burj-accent"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 bg-burj-dark/50 backdrop-blur rounded-full flex items-center justify-center text-white transition-all hover:bg-burj-accent"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
