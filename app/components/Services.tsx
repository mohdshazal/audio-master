
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Speaker,
  Headphones,
  Home,
  Music,
  Radio,
  MonitorSpeaker,
  Settings,
  Cable
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Speaker,
    title: "Premium Speaker Installation",
    description: "We specialize in the installation of high-end audio speakers to deliver crisp, clear, and immersive sound in any environment."
  },
  {
    icon: Home,
    title: "Home Cinema Systems",
    description: "Transform your living room into a cinematic experience with our professional home theater setup and surround sound solutions."
  },
  {
    icon: Music,
    title: "Multi-Room Audio Solutions",
    description: "Enjoy seamless music across every room with our integrated whole-house audio systems and smart controls."
  },
  {
    icon: MonitorSpeaker,
    title: "Commercial Audio Systems",
    description: "Enhance your business environment with tailored commercial sound systems for retail, offices, restaurants, and more."
  },
  {
    icon: Settings,
    title: "System Maintenance & Repair",
    description: "Keep your sound systems running flawlessly with our expert maintenance and repair services."
  },
  {
    icon: Cable,
    title: "Custom Wiring & Integration",
    description: "Get clean, efficient wiring and smart home integration for an uninterrupted and professional audio setup."
  },
  {
    icon: Radio,
    title: "Acoustic Consultation",
    description: "Our experts provide room analysis and custom acoustic treatment recommendations to optimize audio clarity and depth."
  },
  {
    icon: Headphones,
    title: "Audio Equipment Consultation",
    description: "Receive tailored advice on selecting top-quality audio equipment to match your needs, space, and preferences."
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" aria-label="Audio Master Services Section" className="section-padding bg-gradient-to-b from-black/95 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4 border border-white/10">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Premium Audio Solutions in Dubai
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Discover our wide range of professional audio installation services in Dubai, designed to elevate your sound experience at home or in commercial spaces.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <AnimatedSection
                key={index}
                delay={100 * index}
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={cn(
                    "service-card backdrop-blur h-full border border-white/5 rounded-xl transition-all duration-500",
                    isHovered ? "bg-gradient-to-br from-white/10 to-black/80 translate-y-[-5px] shadow-lg scale-105" : "bg-card/90 hover:bg-card/80"
                  )}
                >
                  <div className="p-6">
                    <div
                      className={cn(
                        "w-12 h-12 flex items-center justify-center rounded-lg mb-4 transition-all duration-500",
                        isHovered ? "bg-gradient-to-br from-white/30 to-white/5" : "bg-white/5"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6 transition-all duration-500",
                          isHovered ? "text-white scale-110" : "text-white/80"
                        )}
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-white">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>

                    {/* Animated underline on hover */}
                    <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-white/5 via-white/30 to-white/5 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
