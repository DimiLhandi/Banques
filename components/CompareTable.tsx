"use client";

import banks from "@/lib/data/banks";
import AnimatedFade from "./AnimatedFade";
import Link from "next/link";

export default function CompareTable() {
  return (
    <AnimatedFade>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 text-sm font-semibold text-muted">Banque</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-muted">Note</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-muted">Carte</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-muted">Revenus min</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-muted">Retraits</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-muted">Support</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-muted"></th>
            </tr>
          </thead>
          <tbody>
            {banks
              .sort((a, b) => b.rating - a.rating)
              .map((bank, index) => (
                <tr
                  key={bank.slug}
                  className="border-b border-border/50 hover:bg-card/30 transition-colors"
                >
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent">{bank.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold">{bank.name}</div>
                        <div className="text-xs text-muted">{bank.tagline}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-semibold">{bank.rating}</span>
                      <span className="text-muted text-sm">/5</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-sm text-muted">{bank.features.cardFee}</td>
                  <td className="py-6 px-4 text-sm text-muted">{bank.features.minIncome}</td>
                  <td className="py-6 px-4 text-sm text-muted">{bank.features.withdraw}</td>
                  <td className="py-6 px-4 text-sm text-muted">{bank.features.support}</td>
                  <td className="py-6 px-4">
                    <Link
                      href={`/banque/${bank.slug}`}
                      className="text-accent text-sm font-medium hover:underline"
                    >
                      Voir →
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </AnimatedFade>
  );
}


