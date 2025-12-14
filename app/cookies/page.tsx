import Link from "next/link";

export const metadata = {
  title: "Politique de Gestion des Cookies — Banques",
  description: "Informations sur l'utilisation des cookies et technologies de traçage.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Bouton retour */}
        <Link href="/" className="inline-flex items-center gap-2 text-white text-sm hover:text-accent transition-colors mb-8">
          <span>←</span>
          <span>Retour à l'accueil</span>
        </Link>

        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Politique de Gestion des Cookies</h1>
        <p className="text-muted mb-12">Dernière mise à jour : 9 décembre 2025</p>

        {/* Contenu */}
        <div className="prose prose-invert max-w-none space-y-12">
          {/* Préambule */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">PRÉAMBULE</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              La présente Politique de Gestion des Cookies a pour objectif de vous informer de manière claire et transparente 
              sur l'utilisation des cookies et autres technologies de traçage sur le site parrainbanque.fr.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Nous accordons une importance particulière au respect de votre vie privée et à la protection de vos données personnelles. 
              Cette politique vous explique ce que sont les cookies, pourquoi et comment nous les utilisons, et comment vous pouvez les gérer.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. QU'EST-CE QU'UN COOKIE ?</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">1.1. Définition</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Un cookie (ou témoin de connexion) est un petit fichier texte stocké sur votre terminal (ordinateur, smartphone, tablette) 
              par votre navigateur web lors de votre visite sur un site internet.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">1.2. Contenu d'un cookie</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>Le nom du serveur qui l'a déposé</li>
              <li>Un identifiant unique</li>
              <li>Une date d'expiration</li>
              <li>Des informations techniques ou préférences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">1.4. Ce que les cookies ne font PAS</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">Les cookies ne peuvent pas :</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Accéder aux fichiers de votre ordinateur</li>
              <li>Exécuter des programmes</li>
              <li>Transmettre des virus ou malwares</li>
              <li>Accéder à vos données sensibles</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. POURQUOI UTILISONS-NOUS DES COOKIES ?</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li><strong>Fonctionnement technique :</strong> Assurer le bon fonctionnement et la sécurité du Site</li>
              <li><strong>Expérience utilisateur :</strong> Personnaliser l'affichage et mémoriser vos préférences</li>
              <li><strong>Analyse :</strong> Comprendre l'utilisation et améliorer le Site</li>
              <li><strong>Marketing :</strong> Afficher des publicités pertinentes</li>
              <li><strong>Partenariats :</strong> Suivre les clics sur les liens de parrainage</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. TYPES DE COOKIES UTILISÉS</h2>
            
            <div className="space-y-6">
              {/* Cookie type A */}
              <div className="bg-green-500/10 border-2 border-green-500/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-green-400 mb-2">A. Cookies strictement nécessaires</h3>
                <p className="text-foreground/90 text-sm mb-2">
                  <strong>Finalité :</strong> Essentiels au fonctionnement du Site
                </p>
                <p className="text-foreground/90 text-sm">
                  <strong>Consentement requis :</strong> ❌ Non (exemptés)<br/>
                  <strong>Possibilité de refus :</strong> ❌ Non (indispensables)
                </p>
              </div>

              {/* Cookie type B */}
              <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">B. Cookies de fonctionnalité</h3>
                <p className="text-foreground/90 text-sm mb-2">
                  <strong>Finalité :</strong> Améliorer votre confort de navigation
                </p>
                <p className="text-foreground/90 text-sm">
                  <strong>Consentement requis :</strong> ⚠️ Parfois<br/>
                  <strong>Possibilité de refus :</strong> ✅ Oui
                </p>
              </div>

              {/* Cookie type C */}
              <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">C. Cookies analytiques</h3>
                <p className="text-foreground/90 text-sm mb-2">
                  <strong>Finalité :</strong> Mesurer l'audience et améliorer le Site
                </p>
                <p className="text-foreground/90 text-sm">
                  <strong>Consentement requis :</strong> ✅ Oui<br/>
                  <strong>Possibilité de refus :</strong> ✅ Oui
                </p>
              </div>

              {/* Cookie type D */}
              <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-accent mb-2">D. Cookies publicitaires</h3>
                <p className="text-foreground/90 text-sm mb-2">
                  <strong>Finalité :</strong> Publicité ciblée et personnalisation
                </p>
                <p className="text-foreground/90 text-sm">
                  <strong>Consentement requis :</strong> ✅ Oui<br/>
                  <strong>Possibilité de refus :</strong> ✅ Oui
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. DURÉE DE CONSERVATION</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Conformément aux recommandations de la CNIL et du RGPD, les cookies ont une durée de vie maximale de <strong>13 mois</strong>.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              À l'expiration, votre consentement sera à nouveau sollicité.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. COOKIES ANALYTIQUES</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">7.1. Google Analytics</h3>
            <ul className="space-y-2 text-foreground/90 mb-4">
              <li><strong>Cookies :</strong> _ga, _gid, _gat</li>
              <li><strong>Finalité :</strong> Mesurer l'audience et analyser l'utilisation</li>
              <li><strong>Durée :</strong> 24 mois maximum</li>
              <li><strong>Fournisseur :</strong> Google LLC (États-Unis)</li>
              <li><strong>IP anonymisée :</strong> ✅ Oui</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed text-sm">
              <strong>Opt-out :</strong>{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-accent hover:underline">
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. COOKIES PUBLICITAIRES</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Ces cookies permettent d'afficher des publicités pertinentes selon vos centres d'intérêt.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-3">Principales plateformes :</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li><strong>Google Ads :</strong> Publicité ciblée et remarketing</li>
              <li><strong>Facebook Pixel :</strong> Publicité sur Facebook/Instagram</li>
              <li><strong>LinkedIn Insight :</strong> Publicité LinkedIn</li>
              <li><strong>Twitter/X Pixel :</strong> Publicité sur X</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. VOTRE CONSENTEMENT</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">11.1. Bandeau de consentement</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Lors de votre première visite, un bandeau vous permet de :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>✅ Accepter tous les cookies</li>
              <li>❌ Refuser les cookies non essentiels</li>
              <li>⚙️ Personnaliser vos choix par catégorie</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">11.5. Modification de vos choix</h3>
            <p className="text-foreground/90 leading-relaxed">
              Vous pouvez modifier vos choix à tout moment en cliquant sur <strong>"Gérer les cookies"</strong> en bas de page 
              ou en supprimant les cookies de votre navigateur.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. COMMENT GÉRER LES COOKIES ?</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">12.1. Via notre outil de gestion</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              <strong>Méthode recommandée :</strong> Cliquez sur "Gérer les cookies" en bas de page, 
              puis activez/désactivez chaque catégorie selon vos préférences.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">12.2. Via votre navigateur</h3>
            <div className="space-y-4 text-foreground/90">
              <div>
                <p className="font-semibold text-white mb-2">Google Chrome</p>
                <p className="text-sm">Menu → Paramètres → Confidentialité et sécurité → Cookies</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Firefox</p>
                <p className="text-sm">Menu → Paramètres → Vie privée et sécurité → Cookies</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Safari</p>
                <p className="text-sm">Préférences → Confidentialité → Cookies</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Edge</p>
                <p className="text-sm">Menu → Paramètres → Confidentialité → Cookies</p>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. CONSÉQUENCES DU REFUS</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">✅ Site utilisable</h3>
                <p className="text-foreground/90 text-sm">
                  Le Site reste entièrement fonctionnel même si vous refusez les cookies non essentiels.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">⚠️ Limitations</h3>
                <ul className="space-y-1 text-foreground/90 text-sm">
                  <li>• Expérience moins personnalisée</li>
                  <li>• Préférences non mémorisées</li>
                  <li>• Publicités moins pertinentes</li>
                  <li>• Boutons sociaux limités</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tableau récapitulatif */}
          <section className="bg-accent/5 border-2 border-accent/20 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">TABLEAU RÉCAPITULATIF DES COOKIES</h2>
            
            <div className="space-y-6 text-sm">
              {/* Cookies nécessaires */}
              <div>
                <h3 className="font-semibold text-green-400 mb-3">🔒 Cookies strictement nécessaires</h3>
                <div className="overflow-x-auto modern-scrollbar-glass">
                  <table className="w-full text-left border border-border/30">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-2 border-b border-border/30">Nom</th>
                        <th className="px-4 py-2 border-b border-border/30">Finalité</th>
                        <th className="px-4 py-2 border-b border-border/30">Durée</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground/90">
                      <tr>
                        <td className="px-4 py-2 border-b border-border/20">session_id</td>
                        <td className="px-4 py-2 border-b border-border/20">Maintien session</td>
                        <td className="px-4 py-2 border-b border-border/20">Session</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-border/20">csrf_token</td>
                        <td className="px-4 py-2 border-b border-border/20">Protection CSRF</td>
                        <td className="px-4 py-2 border-b border-border/20">Session</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">cookie_consent</td>
                        <td className="px-4 py-2">Mémorisation consentement</td>
                        <td className="px-4 py-2">13 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cookies analytiques */}
              <div>
                <h3 className="font-semibold text-yellow-400 mb-3">📊 Cookies analytiques</h3>
                <div className="overflow-x-auto modern-scrollbar-glass">
                  <table className="w-full text-left border border-border/30">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-2 border-b border-border/30">Nom</th>
                        <th className="px-4 py-2 border-b border-border/30">Fournisseur</th>
                        <th className="px-4 py-2 border-b border-border/30">Durée</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground/90">
                      <tr>
                        <td className="px-4 py-2 border-b border-border/20">_ga</td>
                        <td className="px-4 py-2 border-b border-border/20">Google Analytics</td>
                        <td className="px-4 py-2 border-b border-border/20">24 mois</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">_gid</td>
                        <td className="px-4 py-2">Google Analytics</td>
                        <td className="px-4 py-2">24 heures</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cookies publicitaires */}
              <div>
                <h3 className="font-semibold text-accent mb-3">🎯 Cookies publicitaires</h3>
                <div className="overflow-x-auto modern-scrollbar-glass">
                  <table className="w-full text-left border border-border/30">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-2 border-b border-border/30">Nom</th>
                        <th className="px-4 py-2 border-b border-border/30">Fournisseur</th>
                        <th className="px-4 py-2 border-b border-border/30">Durée</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground/90">
                      <tr>
                        <td className="px-4 py-2 border-b border-border/20">IDE</td>
                        <td className="px-4 py-2 border-b border-border/20">Google Ads</td>
                        <td className="px-4 py-2 border-b border-border/20">13 mois</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">_fbp</td>
                        <td className="px-4 py-2">Facebook Pixel</td>
                        <td className="px-4 py-2">90 jours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Ressources */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">RESSOURCES UTILES</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">Informations sur les cookies</h3>
            <ul className="space-y-2 text-foreground/90 mb-6">
              <li>
                • CNIL :{" "}
                <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener" className="text-accent hover:underline">
                  www.cnil.fr/fr/cookies-et-autres-traceurs
                </a>
              </li>
              <li>
                • About Cookies :{" "}
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener" className="text-accent hover:underline">
                  www.aboutcookies.org
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Gestion de la publicité</h3>
            <ul className="space-y-2 text-foreground/90">
              <li>
                • Your Online Choices :{" "}
                <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener" className="text-accent hover:underline">
                  www.youronlinechoices.eu
                </a>
              </li>
              <li>
                • Google Ads Settings :{" "}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener" className="text-accent hover:underline">
                  adssettings.google.com
                </a>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. CONTACT</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Pour toute question concernant l'utilisation des cookies :
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Email :</strong> contact@parrainbanque.fr<br/>
              <strong>Délai de réponse :</strong> 48 à 72 heures ouvrées
            </p>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-center text-muted text-sm">
              Merci de votre confiance et bonne navigation sur parrainbanque.fr !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

