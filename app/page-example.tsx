import HeroBanner from "@/components/HeroBanner";
import BankGrid from "@/components/BankGrid";
import StatsSection from "@/components/StatsSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 md:px-24">
      {/* Hero Banner avec image animée */}
      <HeroBanner
        title={
          <>
            Comparez les meilleures
            <br />
            <span className="text-accent">banques en ligne</span>
          </>
        }
        subtitle="Design minimaliste. Clarté absolue. Filtres intelligents. Trouvez la banque parfaite en 5 minutes."
      >
        <div className="flex gap-4 flex-wrap justify-center mt-8">
          <Link href="/comparateur">
            <button className="px-8 py-4 bg-accent text-black rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300">
              Comparer maintenant
            </button>
          </Link>
          <Link href="#banques">
            <button className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-xl font-semibold text-lg border border-white/30 hover:border-accent/50 transition-all duration-300">
              Explorer les banques
            </button>
          </Link>
        </div>
      </HeroBanner>

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


