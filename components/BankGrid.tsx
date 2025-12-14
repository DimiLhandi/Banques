import banks from "@/lib/data/banks";
import BankCard from "./BankCard";

export default function BankGrid() {
  return (
    <section>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-left uppercase px-4">
        Les 9 meilleures banques en ligne&nbsp;:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {banks.map((bank, index) => (
          <BankCard key={bank.slug} bank={bank} index={index} />
        ))}
      </div>
    </section>
  );
}

