import { notFound } from "next/navigation";
import banks from "@/lib/data/banks";
import AnimatedFade from "@/components/AnimatedFade";
import Button from "@/components/Button";
import ReferralButton from "@/components/ReferralButton";
import Link from "next/link";
import {
  ClockIcon,
  UserGroupIcon,
  MapPinIcon,
  SparklesIcon,
  CreditCardIcon,
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  BanknotesIcon,
  LockClosedIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

export async function generateStaticParams() {
  return banks.map((bank) => ({
    slug: bank.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const bank = banks.find((b) => b.slug === params.slug);
  
  if (!bank) {
    return {
      title: "Banque non trouvée",
    };
  }

  return {
    title: `${bank.name} — ${bank.tagline}`,
    description: bank.description,
  };
}

export default function BankPage({ params }: { params: { slug: string } }) {
  const bank = banks.find((b) => b.slug === params.slug);

  if (!bank) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Image de fond animée avec overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-breath"
          style={{
            backgroundImage: `url('/banks/${bank.slug}.jpg')`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
          }}
        />
        {/* Fallback gradient si pas d'image */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-black/80 to-black/90" />
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Back button */}
        <AnimatedFade>
          <Link href="/" className="inline-flex items-center gap-2 text-white text-sm sm:text-base hover:text-accent transition-colors mb-8 sm:mb-10 md:mb-12">
            <span>←</span>
            <span>Retour aux banques</span>
          </Link>
        </AnimatedFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start mb-10 sm:mb-12 md:mb-16">
          {/* Colonne gauche - Contenu */}
          <div>
            <AnimatedFade delay={0.1}>
              <div>
                {/* Badge */}
                {bank.highlight && (
                  <div className="inline-block bg-accent/10 border border-accent/20 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 bank-badge-gradient">
                    {bank.highlight}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bank-title-gradient">{bank.name}</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted mb-4 sm:mb-5 md:mb-6">{bank.tagline}</p>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-8">
                  <svg width="0" height="0" style={{position: 'absolute'}}>
                    <defs>
                      <linearGradient id="bankStarGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFD700" /> {/* Gold */}
                        <stop offset="50%" stopColor="#FFA500" /> {/* Orange */}
                        <stop offset="100%" stopColor="#FFD700" /> {/* Gold */}
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${i < Math.floor(bank.rating) ? "star-glow-animation" : "text-border"}`}
                        fill={i < Math.floor(bank.rating) ? "url(#bankStarGoldGradient)" : "currentColor"}
                        viewBox="0 0 20 20"
                        style={i < Math.floor(bank.rating) ? { animationDelay: `${i * 0.2}s` } : undefined}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xl font-semibold text-accent">{bank.rating}/5</span>
                </div>

                {/* Description */}
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">{bank.description}</p>

                {/* Bouton Lien de Parrainage */}
                <ReferralButton />
              </div>
            </AnimatedFade>
          </div>

          {/* Colonne droite - Image carte bancaire */}
          <div className="lg:sticky lg:top-24">
            <AnimatedFade delay={0.2}>
              <div className="relative group flex justify-center lg:justify-center lg:-ml-20">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 w-full max-w-xs sm:max-w-sm">
                  <img
                    src={`/banks/${bank.slug}.jpg`}
                    alt={`Carte bancaire ${bank.name}`}
                    className="w-full h-auto object-cover"
                  />
                  {/* Effet glow au survol */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Ombre décorative */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-full h-full bg-accent/10 rounded-xl sm:rounded-2xl -z-10 blur-lg max-w-xs sm:max-w-sm" />
              </div>
            </AnimatedFade>
          </div>
        </div>

      {/* Public cible & Positionnement */}
      {(bank.publicTarget || bank.positioning || bank.distinction) && (
        <AnimatedFade delay={0.2}>
          <section className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-7 md:mb-8">Positionnement</h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {bank.readingTime && (
                <div className="glass p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="text-accent text-xs sm:text-sm font-semibold">Temps de lecture</div>
                  </div>
                  <div className="text-base sm:text-lg">{bank.readingTime}</div>
                </div>
              )}
              {bank.publicTarget && (
                <div className="glass p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <UserGroupIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="text-accent text-xs sm:text-sm font-semibold">Public cible</div>
                  </div>
                  <div className="text-base sm:text-lg leading-relaxed">{bank.publicTarget}</div>
                </div>
              )}
              {bank.positioning && (
                <div className="glass p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="text-accent text-xs sm:text-sm font-semibold">Positionnement</div>
                  </div>
                  <div className="text-base sm:text-lg leading-relaxed">{bank.positioning}</div>
                </div>
              )}
              {bank.distinction && (
                <div className="glass p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="text-accent text-sm font-semibold">Distinction</div>
                  </div>
                  <div className="text-lg leading-relaxed">{bank.distinction}</div>
                </div>
              )}
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Types de compte */}
      {bank.accountTypes && (
        <AnimatedFade delay={0.25}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Types de compte disponibles</h2>
            <div className="glass p-8 rounded-2xl">
              <ul className="space-y-3">
                {bank.accountTypes.map((type, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/90 text-lg">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Conditions d'entrée */}
      {bank.entryConditions && (
        <AnimatedFade delay={0.3}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Conditions d'entrée</h2>
            <div className="glass p-8 rounded-2xl">
              <ul className="space-y-4">
                {bank.entryConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/90 text-lg">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Cartes bancaires */}
      {bank.cards && (
        <AnimatedFade delay={0.35}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Cartes bancaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bank.cards.map((card, index) => (
                <div key={index} className="glass p-6 rounded-xl hover:border-accent/50 transition-all">
                  <div className="text-accent font-bold text-xl mb-3">{card.name}</div>
                  <div className="text-sm text-muted mb-3">{card.type}</div>
                  <div className="text-foreground/90">{card.details}</div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Paiements mobiles */}
      {bank.mobilePay && (
        <AnimatedFade delay={0.4}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Paiements mobiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`glass p-6 rounded-xl ${bank.mobilePay.applePay ? 'border-green-500/30' : 'opacity-50'}`}>
                <div className="text-lg font-semibold mb-2">Apple Pay</div>
                <div className="mt-3">
                  {bank.mobilePay.applePay ? (
                    <CheckCircleIcon className="w-10 h-10 text-green-500" />
                  ) : (
                    <XCircleIcon className="w-10 h-10 text-red-500" />
                  )}
                </div>
              </div>
              <div className={`glass p-6 rounded-xl ${bank.mobilePay.googlePay ? 'border-green-500/30' : 'opacity-50'}`}>
                <div className="text-lg font-semibold mb-2">Google Pay</div>
                <div className="mt-3">
                  {bank.mobilePay.googlePay ? (
                    <CheckCircleIcon className="w-10 h-10 text-green-500" />
                  ) : (
                    <XCircleIcon className="w-10 h-10 text-red-500" />
                  )}
                </div>
              </div>
              <div className={`glass p-6 rounded-xl ${bank.mobilePay.samsungPay ? 'border-green-500/30' : 'opacity-50'}`}>
                <div className="text-lg font-semibold mb-2">Samsung Pay</div>
                <div className="mt-3">
                  {bank.mobilePay.samsungPay ? (
                    <CheckCircleIcon className="w-10 h-10 text-green-500" />
                  ) : (
                    <XCircleIcon className="w-10 h-10 text-red-500" />
                  )}
                </div>
              </div>
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Features Grid */}
      <AnimatedFade delay={0.45}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Caractéristiques essentielles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                    <CreditCardIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-accent text-sm font-semibold">Carte bancaire</div>
                </div>
                <div className="text-lg">{bank.features.cardFee}</div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                    <CurrencyDollarIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-accent text-sm font-semibold">Revenus minimum</div>
                </div>
                <div className="text-lg">{bank.features.minIncome}</div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                    <BanknotesIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-accent text-sm font-semibold">Retraits</div>
                </div>
                <div className="text-lg">{bank.features.withdraw}</div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                    <DevicePhoneMobileIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-accent text-sm font-semibold">Support client</div>
                </div>
                <div className="text-lg">{bank.features.support}</div>
              </div>
              {bank.instantTransfer && (
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <BoltIcon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-accent text-sm font-semibold">Virements instantanés</div>
                  </div>
                  <div className="text-lg">{bank.instantTransfer}</div>
                </div>
              )}
              {bank.overdraft && (
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <ChartBarIcon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-accent text-sm font-semibold">Découvert autorisé</div>
                  </div>
                  <div className="text-lg">{bank.overdraft}</div>
                </div>
              )}
            </div>
          </section>
      </AnimatedFade>

      {/* Application mobile */}
      {bank.appDetails && (
        <AnimatedFade delay={0.5}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Application mobile</h2>
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-lg font-semibold">Notes :</div>
                <div className="flex gap-4">
                  <span className="text-accent">App Store : {bank.appDetails.appStoreRating}</span>
                  <span className="text-accent">Google Play : {bank.appDetails.googlePlayRating}</span>
                </div>
              </div>
              <div className="text-lg font-semibold mb-4">Fonctionnalités :</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {bank.appDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Sécurité */}
      {bank.security && (
        <AnimatedFade delay={0.55}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Sécurité</h2>
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="text-lg font-semibold">Score de sécurité :</div>
                <div className="text-3xl font-bold text-accent">{bank.security.score}</div>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 text-accent" />
                  </div>
                  Garantie des dépôts
                </div>
                <div className="text-lg">{bank.security.depositGuarantee}</div>
              </div>
              <div className="text-lg font-semibold mb-4">Mesures de sécurité :</div>
              <ul className="space-y-3">
                {bank.security.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Trading */}
      {bank.tradingOffer && (
        <AnimatedFade delay={0.6}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Offre de trading</h2>
            <div className="glass p-8 rounded-2xl space-y-4">
              <div>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                    <ArrowTrendingUpIcon className="w-5 h-5 text-accent" />
                  </div>
                  Plateforme
                </div>
                <div className="text-lg">{bank.tradingOffer.platform}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                    <ChartBarIcon className="w-5 h-5 text-accent" />
                  </div>
                  Instruments disponibles
                </div>
                <div className="text-lg">{bank.tradingOffer.instruments}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                    <CurrencyDollarIcon className="w-5 h-5 text-accent" />
                  </div>
                  Frais de trading
                </div>
                <div className="text-lg">{bank.tradingOffer.fees}</div>
              </div>
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Services internationaux */}
      {bank.internationalServices && (
        <AnimatedFade delay={0.65}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Services internationaux</h2>
            <div className="glass p-8 rounded-2xl space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <GlobeAltIcon className="w-5 h-5 text-accent" />
                    </div>
                    IBAN
                  </div>
                  <div className="text-lg">{bank.internationalServices.iban}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <BanknotesIcon className="w-5 h-5 text-accent" />
                    </div>
                    Retraits à l'étranger
                  </div>
                  <div className="text-lg">{bank.internationalServices.withdrawals}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <CreditCardIcon className="w-5 h-5 text-accent" />
                    </div>
                    Paiements en devises
                  </div>
                  <div className="text-lg">{bank.internationalServices.payments}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <BuildingLibraryIcon className="w-5 h-5 text-accent" />
                    </div>
                    Compte multi-devises
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    {bank.internationalServices.multiCurrency ? (
                      <>
                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        <span>Oui</span>
                      </>
                    ) : (
                      <>
                        <XCircleIcon className="w-5 h-5 text-red-500" />
                        <span>Non</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {bank.internationalServices.assistance && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <ShieldCheckIcon className="w-5 h-5 text-accent" />
                    </div>
                    Assistance
                  </div>
                  <div className="text-lg">{bank.internationalServices.assistance}</div>
                </div>
              )}
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Tableau des frais */}
      {bank.detailedFees && (
        <AnimatedFade delay={0.7}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tableau complet des frais</h2>
            <div className="space-y-8">
              {bank.detailedFees.map((category, catIndex) => (
                <div key={catIndex} className="rounded-2xl border-2 border-accent/50 overflow-hidden bg-gradient-to-br from-accent/5 to-transparent backdrop-blur-sm">
                  {/* En-tête de catégorie */}
                  <div className="bg-gradient-to-r from-accent/20 to-accent/10 border-b-2 border-accent/50 px-8 py-4">
                    <h3 className="text-xl font-bold text-accent">{category.category}</h3>
                  </div>
                  
                  {/* Tableau */}
                  <div className="overflow-x-auto modern-scrollbar-glass">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-accent/10">
                          <th className="text-left py-4 px-6 font-bold text-white border-b-2 border-accent/40 border-r-2 border-accent/30">
                            Frais
                          </th>
                          {category.items[0].fosfo && (
                            <th className="text-left py-4 px-6 font-bold text-white border-b-2 border-accent/40 border-r-2 border-accent/30">
                              Fosfo
                            </th>
                          )}
                          {category.items[0].gold && (
                            <th className="text-left py-4 px-6 font-bold text-white border-b-2 border-accent/40 border-r-2 border-accent/30">
                              Gold
                            </th>
                          )}
                          {category.items[0].worldElite && (
                            <th className="text-left py-4 px-6 font-bold text-white border-b-2 border-accent/40 border-r-2 border-accent/30">
                              World Elite
                            </th>
                          )}
                          {category.items[0].standard && (
                            <th className="text-left py-4 px-6 font-bold text-white border-b-2 border-accent/40">
                              Tarif
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, itemIndex) => (
                          <tr 
                            key={itemIndex} 
                            className={`
                              ${itemIndex % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} 
                              hover:bg-accent/10 transition-all duration-200 border-b border-accent/20
                            `}
                          >
                            <td className="py-4 px-6 text-foreground font-medium border-r-2 border-accent/30">
                              {item.label}
                            </td>
                            {item.fosfo && (
                              <td className="py-4 px-6 text-foreground/90 border-r-2 border-accent/30">
                                {item.fosfo}
                              </td>
                            )}
                            {item.gold && (
                              <td className="py-4 px-6 text-foreground/90 border-r-2 border-accent/30">
                                {item.gold}
                              </td>
                            )}
                            {item.worldElite && (
                              <td className="py-4 px-6 text-foreground/90 border-r-2 border-accent/30">
                                {item.worldElite}
                              </td>
                            )}
                            {item.standard && (
                              <td className="py-4 px-6 text-foreground/90">
                                {item.standard}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Profil client */}
      {bank.clientProfile && (
        <AnimatedFade delay={0.75}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Pour qui est faite cette banque ?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {bank.clientProfile.ideal && (
                <div className="glass p-8 rounded-2xl border-green-500/20">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-green-500" />
                    <span>Client idéal</span>
                  </h3>
                  <ul className="space-y-3">
                    {bank.clientProfile.ideal.map((profile, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-foreground/90">{profile}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {bank.clientProfile.notSuitedFor && (
                <div className="glass p-8 rounded-2xl border-red-500/20">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <XCircleIcon className="w-6 h-6 text-red-500" />
                    <span>Client inadapté</span>
                  </h3>
                  <ul className="space-y-3">
                    {bank.clientProfile.notSuitedFor.map((profile, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircleIcon className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-foreground/90">{profile}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Scores détaillés */}
      {bank.scores && (
        <AnimatedFade delay={0.8}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Scores synthétiques</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {bank.scores.security && (
                <div className="glass p-6 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-2 text-accent text-sm font-semibold mb-2">
                    <LockClosedIcon className="w-5 h-5" />
                    <span>Sécurité</span>
                  </div>
                  <div className="text-3xl font-bold">{bank.scores.security}</div>
                </div>
              )}
              {bank.scores.price && (
                <div className="glass p-6 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-2 text-accent text-sm font-semibold mb-2">
                    <CurrencyDollarIcon className="w-5 h-5" />
                    <span>Prix</span>
                  </div>
                  <div className="text-3xl font-bold">{bank.scores.price}</div>
                </div>
              )}
              {bank.scores.innovation && (
                <div className="glass p-6 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-2 text-accent text-sm font-semibold mb-2">
                    <BoltIcon className="w-5 h-5" />
                    <span>Innovation</span>
                  </div>
                  <div className="text-3xl font-bold">{bank.scores.innovation}</div>
                </div>
              )}
              {bank.scores.simplicity && (
                <div className="glass p-6 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-2 text-accent text-sm font-semibold mb-2">
                    <SparklesIcon className="w-5 h-5" />
                    <span>Simplicité</span>
                  </div>
                  <div className="text-3xl font-bold">{bank.scores.simplicity}</div>
                </div>
              )}
              {bank.scores.support && (
                <div className="glass p-6 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-2 text-accent text-sm font-semibold mb-2">
                    <DevicePhoneMobileIcon className="w-5 h-5" />
                    <span>Support</span>
                  </div>
                  <div className="text-3xl font-bold">{bank.scores.support}</div>
                </div>
              )}
              {bank.scores.global && (
                <div className="glass p-6 rounded-xl text-center border-accent/30">
                  <div className="flex items-center justify-center gap-2 text-accent text-sm font-semibold mb-2">
                    <SparklesIcon className="w-5 h-5" />
                    <span>Global</span>
                  </div>
                  <div className="text-3xl font-bold text-accent">{bank.scores.global}</div>
                </div>
              )}
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Conclusion professionnelle */}
      {bank.conclusion && (
        <AnimatedFade delay={0.85}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Conclusion professionnelle</h2>
            <div className="glass p-8 rounded-2xl space-y-6">
              {bank.conclusion.summary && (
                <div>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <ChartBarIcon className="w-5 h-5 text-accent" />
                    </div>
                    Résumé
                  </div>
                  <p className="text-lg leading-relaxed text-foreground/90">{bank.conclusion.summary}</p>
                </div>
              )}
              {bank.conclusion.recommendedProfile && (
                <div>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <UserGroupIcon className="w-5 h-5 text-accent" />
                    </div>
                    Profil recommandé
                  </div>
                  <p className="text-lg leading-relaxed text-foreground/90">{bank.conclusion.recommendedProfile}</p>
                </div>
              )}
              {bank.conclusion.recommendation && (
                <div>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-5 h-5 text-accent" />
                    </div>
                    Recommandation finale
                  </div>
                  
                  {/* Extract rating from recommendation text */}
                  {(() => {
                    const match = bank.conclusion.recommendation.match(/\((\d+(?:\.\d+)?)\s*\/\s*5\)/);
                    const rating = match ? parseFloat(match[1]) : 0;
                    const cleanText = bank.conclusion.recommendation.replace(/⭐/g, '').replace(/\(\d+(?:\.\d+)?\/5\)/g, '').replace(/^\s*-\s*/, '').trim();
                    
                    return (
                      <>
                        {/* Stars */}
                        <div className="flex items-center gap-3 mb-4">
                          <svg width="0" height="0" style={{position: 'absolute'}}>
                            <defs>
                              <linearGradient id="conclusionStarGradient" x1="0%" y1="0%" x2="100%" y2="0%" className="bank-star-gradient">
                                <stop offset="0%" />
                                <stop offset="50%" />
                                <stop offset="100%" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-8 h-8 ${i < Math.floor(rating) ? "" : "text-border"}`}
                                fill={i < Math.floor(rating) ? "url(#conclusionStarGradient)" : "currentColor"}
                                viewBox="0 0 20 20"
                                style={i < Math.floor(rating) ? {
                                  filter: 'drop-shadow(0 0 4px rgba(255, 122, 26, 0.8))'
                                } : undefined}
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-2xl font-semibold text-accent">({rating}/5)</span>
                        </div>
                        
                        {/* Recommendation text */}
                        <p className="text-lg leading-relaxed text-foreground/90">{cleanText}</p>
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          </section>
        </AnimatedFade>
      )}

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <AnimatedFade delay={0.3}>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <span>Avantages</span>
            </h3>
            <ul className="space-y-3">
              {bank.pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedFade>

        <AnimatedFade delay={0.4}>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <XCircleIcon className="w-6 h-6 text-red-500" />
              <span>Inconvénients</span>
            </h3>
            <ul className="space-y-3">
              {bank.cons.map((con, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircleIcon className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedFade>
      </div>

      {/* CTA Section */}
      <AnimatedFade delay={0.5}>
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Intéressé par {bank.name} ?</h3>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Comparez avec d'autres banques ou découvrez toutes les options disponibles.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/comparateur">
              <div className="bank-discovery-btn">
                Voir le comparateur
              </div>
            </Link>
            <Link href="/">
              <div className="bank-discovery-btn">
                Toutes les banques
              </div>
            </Link>
          </div>
        </div>
      </AnimatedFade>

      {/* Other banks */}
      <AnimatedFade delay={0.6}>
        <section className="mt-24">
          <h3 className="text-2xl font-bold mb-8">Découvrir d'autres banques</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {banks
              .filter((b) => b.slug !== bank.slug)
              .map((otherBank) => (
                <Link key={otherBank.slug} href={`/banque/${otherBank.slug}`}>
                  <div className="bank-discovery-btn w-full">
                    {otherBank.name}
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </AnimatedFade>
      </div>
    </div>
  );
}

