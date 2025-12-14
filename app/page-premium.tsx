import HeroBannerPremium from "@/components/HeroBannerPremium";
import BankGrid from "@/components/BankGrid";
import StatsSection from "@/components/StatsSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="px-6 md:px-24">
      {/* Hero Banner Premium - Style exact de la photo */}
      <HeroBannerPremium />

      {/* Stats Section */}
      <StatsSection />

      {/* Bank Grid */}
      <section id="banques" className="pb-24">
        <BankGrid />
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}


