
import React from "react";
import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of audio systems do you install?",
    answer: "We specialize in premium audio installations including home theater systems, multi-room audio setups, outdoor speaker systems, and high-end stereo configurations. Our expert technicians deliver exceptional sound quality with top-tier brands, ensuring a perfect fit for your home or business."
  },
  {
    question: "How long does a typical installation take?",
    answer: "The installation timeline varies based on the complexity of the project. A simple single-room setup may take 1-2 days, while a complete whole-home audio system may require 1-2 weeks. Our team provides detailed timelines during the consultation process to ensure your system is installed on time and to your specifications."
  },
  {
    question: "Do you offer audio system reinstallation or upgrades?",
    answer: "Yes, we offer reinstallation, upgrades, and complete calibration services for existing audio systems. Whether you want to improve your current setup or completely overhaul it, our technicians are equipped to handle various audio systems and provide top-notch service, ensuring your system delivers optimal performance."
  },
  {
    question: "Do you offer maintenance services for existing systems?",
    answer: "Yes, we provide comprehensive maintenance, troubleshooting, and upgrade services for existing audio systems, even if we didn't perform the original installation. Our technicians are trained to work with a wide range of audio equipment."
  },
  {
    question: "Can you integrate audio systems with smart home technology?",
    answer: "Absolutely! We specialize in integrating audio systems with smart home technologies such as Control4, Crestron, and Savant. Our services include seamless integration with voice assistants like Alexa, Google Assistant, and Siri, allowing you to control your audio system effortlessly through your smart devices."
  },
  {
    question: "Do you provide consultations before installation?",
    answer: "Yes, we provide in-depth consultations to understand your space, preferences, and budget. Our experts will assess your room acoustics and recommend the best audio solution, whether you're looking for premium sound quality or an affordable option that meets your needs. This ensures that your installation is tailored specifically to your requirements."
  },
  {
    question: "What warranties do you offer on installations?",
    answer: "We offer a comprehensive warranty on all our audio system installations, typically covering both labor and parts for 1 year. Additionally, the equipment we install comes with manufacturer warranties, and we assist you with managing those warranties if issues arise after installation."
  },
  {
    question: "How do you ensure top-notch quality in your installations?",
    answer: "Our technicians are highly trained professionals with extensive experience in installing audio systems. We focus on delivering top-notch quality work, ensuring every installation is precise, efficient, and meets the highest standards of performance. We use only the best brands and technologies to guarantee that your audio system delivers exceptional sound quality."
  },
  {
    question: "How do you ensure affordable pricing without compromising quality?",
    answer: "At Audio Master, we believe in providing value for money. We offer competitive pricing while maintaining high-quality service. Our technicians work efficiently to minimize costs, and we offer tailored solutions that match your budget. Whether you need a premium or medium-level system, we ensure that you receive the best performance for your investment."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-black to-card/80">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4 border border-white/10">
            Questions & Answers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70">
            Get answers to common questions about our audio installation services and processes.
          </p>
        </AnimatedSection>

        <AnimatedSection
          className="max-w-3xl mx-auto bg-gradient-to-br from-black/70 to-black/40 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-white/5 shadow-xl"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-white/10 last:border-b-0 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/5"
              >
                <AccordionTrigger className="text-left text-white hover:text-white/90 hover:no-underline py-3 px-4 text-base group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-sm px-4 pb-5 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
