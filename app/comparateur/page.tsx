import CompareTableAdvanced from "@/components/CompareTableAdvanced";
import ComparatorHeader from "@/components/ComparatorHeader";
import ComparatorBanner from "@/components/ComparatorBanner";

export const metadata = {
  title: "Comparateur Intelligent — Comparez les 9 meilleures banques en ligne",
  description: "Tableau comparatif interactif avec filtres intelligents : frais, carte gratuite, conditions de revenus, support, retraits internationaux. Trouvez votre banque idéale en 5 minutes.",
};

export default function ComparePage() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Bannière avec image des 9 cartes */}
      <ComparatorBanner />

      <div className="py-8 sm:py-12 md:py-16 lg:py-24">
        <CompareTableAdvanced />
      </div>
    </div>
  );
}

