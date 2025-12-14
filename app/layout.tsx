import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeTransition from "@/components/ThemeTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Comparateur Banques en Ligne — Design Apple Premium",
  description: "Comparez les 9 meilleures banques en ligne : Fortuneo, Monabanq, Trade Republic, Hello Bank, BforBank, BoursoBank, Wise, Revolut, N26. Design minimaliste façon Apple.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ThemeTransition>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeTransition>
      </body>
    </html>
  );
}


