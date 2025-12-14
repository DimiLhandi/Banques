import BankGrid from "@/components/BankGrid";
import StatsSection from "@/components/StatsSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Newsletter from "@/components/Newsletter";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Hero Banner avec image animée */}
      <HeroBanner />

      {/* Bank Grid */}
      <section id="banques" className="relative overflow-hidden rounded-2xl md:rounded-3xl mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        {/* Soft Organic Gradient Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Blob 1 - Soft Orange */}
          <div
            className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full animate-mesh-1"
            style={{
              background: "radial-gradient(circle, rgba(255, 140, 80, 0.15) 0%, rgba(255, 140, 80, 0.05) 50%, transparent 70%)",
              filter: "blur(80px) md:blur(100px) lg:blur(120px)",
              top: "-10%",
              right: "10%",
            }}
          />
          
          {/* Blob 2 - Soft Pink-Red */}
          <div
            className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] rounded-full animate-mesh-3"
            style={{
              background: "radial-gradient(circle, rgba(255, 100, 100, 0.12) 0%, rgba(255, 100, 100, 0.04) 50%, transparent 70%)",
              filter: "blur(100px) md:blur(120px) lg:blur(140px)",
              bottom: "20%",
              left: "5%",
            }}
          />
          
          {/* Blob 3 - Soft Yellow */}
          <div
            className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full animate-mesh-5"
            style={{
              background: "radial-gradient(circle, rgba(255, 200, 120, 0.1) 0%, rgba(255, 200, 120, 0.03) 50%, transparent 70%)",
              filter: "blur(70px) md:blur(80px) lg:blur(100px)",
              top: "40%",
              left: "30%",
            }}
          />
          
          {/* Overlay très subtil */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
        </div>
        
        {/* Contenu */}
        <div className="relative z-10">
          <BankGrid />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
