import Link from "next/link";

export const metadata = {
  title: "Conditions Générales d'Utilisation — Banques",
  description: "Conditions générales d'utilisation du site de comparaison de banques en ligne.",
};

export default function CGUPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Bouton retour */}
        <Link href="/" className="inline-flex items-center gap-2 text-white text-sm hover:text-accent transition-colors mb-8">
          <span>←</span>
          <span>Retour à l'accueil</span>
        </Link>

        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Conditions Générales d'Utilisation</h1>
        <p className="text-muted mb-12">Dernière mise à jour : 9 décembre 2025</p>

        {/* Contenu */}
        <div className="prose prose-invert max-w-none space-y-12">
          {/* Préambule */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">PRÉAMBULE</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et l'utilisation du site internet parrainbanque.fr (ci-après « le Site »).
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Le Site est un service d'information, de comparaison et d'orientation dans le domaine des services bancaires et financiers, proposant des contenus éditoriaux, des guides, des comparatifs et des liens vers des établissements partenaires.
            </p>
            <p className="text-foreground/90 leading-relaxed font-semibold">
              L'accès et l'utilisation du Site impliquent l'acceptation pleine et entière des présentes CGU par l'utilisateur.
            </p>
          </section>

          {/* Article 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 1 - DÉFINITIONS</h2>
            <ul className="space-y-2 text-foreground/90">
              <li><strong>Site :</strong> Le site internet parrainbanque.fr</li>
              <li><strong>Éditeur :</strong> La personne morale éditant le Site</li>
              <li><strong>Utilisateur :</strong> Toute personne accédant au Site</li>
              <li><strong>Contenu :</strong> Ensemble des éléments présents sur le Site</li>
              <li><strong>Partenaire :</strong> Établissement bancaire présenté sur le Site</li>
              <li><strong>Services :</strong> Fonctionnalités proposées sur le Site</li>
            </ul>
          </section>

          {/* Article 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 2 - OBJET ET ACCEPTATION</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Les présentes CGU ont pour objet de définir les conditions d'accès et d'utilisation du Site, ainsi que les droits et obligations des parties.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Acceptation :</strong> L'utilisation du Site implique l'acceptation pleine et entière des présentes CGU. 
              Si vous n'acceptez pas ces CGU, vous devez cesser immédiatement toute utilisation du Site.
            </p>
          </section>

          {/* Article 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 3 - ACCÈS AU SITE</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">3.1. Modalités d'accès</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>Accès 24/7 (sauf interruptions techniques)</li>
              <li>Gratuit pour tous les utilisateurs</li>
              <li>Compatible tous terminaux et navigateurs récents</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.2. Prérequis techniques</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>Connexion Internet active</li>
              <li>Navigateur web récent (Chrome, Firefox, Safari, Edge)</li>
              <li>JavaScript activé</li>
              <li>Acceptation des cookies strictement nécessaires</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.3. Disponibilité</h3>
            <p className="text-foreground/90 leading-relaxed">
              L'Éditeur s'efforce d'assurer une disponibilité optimale mais ne garantit pas une accessibilité ininterrompue. 
              Le Site peut être interrompu pour maintenance ou en cas de force majeure.
            </p>
          </section>

          {/* Article 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 5 - UTILISATION DU SITE</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">5.1. Obligations de l'Utilisateur</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">L'Utilisateur s'engage à :</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>Utiliser le Site de manière loyale et conforme</li>
              <li>Respecter les lois et règlements en vigueur</li>
              <li>Fournir des informations exactes</li>
              <li>Ne pas perturber le fonctionnement du Site</li>
              <li>Ne pas extraire massivement le contenu</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">5.2. Utilisations interdites</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">Sont formellement interdits :</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Utilisation de robots ou scripts automatisés</li>
              <li>Tentatives d'intrusion ou piratage</li>
              <li>Injection de code malveillant</li>
              <li>Extraction massive de données (scraping)</li>
              <li>Utilisation commerciale non autorisée</li>
              <li>Contenu illégal, frauduleux ou diffamatoire</li>
            </ul>
          </section>

          {/* Article 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 7 - NATURE INFORMATIVE</h2>
            
            <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-accent mb-3">⚠️ AVERTISSEMENT IMPORTANT</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Le Contenu du Site est fourni à titre <strong>purement informatif et éducatif</strong>.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Le Site ne constitue <strong>EN AUCUN CAS</strong> :
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li>Un conseil financier personnalisé</li>
                <li>Une recommandation d'investissement</li>
                <li>Une offre de souscription</li>
                <li>Un conseil juridique ou fiscal</li>
              </ul>
            </div>

            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Responsabilité de l'Utilisateur :</strong> Chaque situation financière étant unique, l'Utilisateur est seul responsable de ses décisions.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Obligation de vérification :</strong> L'Utilisateur doit vérifier toute information auprès des établissements concernés avant souscription.
            </p>
          </section>

          {/* Article 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 8 - EXACTITUDE DES INFORMATIONS</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              L'Éditeur s'efforce de fournir des informations exactes et actualisées, mais ne peut garantir :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
              <li>L'exactitude absolue et l'exhaustivité des informations</li>
              <li>L'actualisation permanente de toutes les données</li>
              <li>L'absence totale d'erreurs ou omissions</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              Les offres bancaires évoluent régulièrement. Il appartient à l'Utilisateur de vérifier les informations avant toute décision.
            </p>
          </section>

          {/* Article 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 9 - LIENS DE PARRAINAGE</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">9.1. Présence de liens d'affiliation</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Le Site contient des liens de parrainage et d'affiliation vers des établissements partenaires. 
              L'Éditeur peut percevoir une commission lorsqu'un utilisateur souscrit via ces liens.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">9.2. Gratuité et indépendance</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>L'utilisation des liens de parrainage est <strong>totalement gratuite</strong> pour l'Utilisateur</li>
              <li>Les commissions n'affectent pas l'<strong>objectivité</strong> des informations</li>
              <li>Les comparatifs sont réalisés de manière <strong>indépendante</strong></li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">9.3. Responsabilité</h3>
            <p className="text-foreground/90 leading-relaxed">
              L'Éditeur n'est pas responsable des conditions d'éligibilité, du versement des primes ou des litiges avec les Partenaires. 
              Les relations contractuelles se nouent directement entre l'Utilisateur et le Partenaire.
            </p>
          </section>

          {/* Article 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 10 - PROPRIÉTÉ INTELLECTUELLE</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              L'ensemble du Contenu du Site (textes, images, logos, design, etc.) est la propriété exclusive de l'Éditeur, protégé par le droit d'auteur.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Utilisations autorisées :</strong> Consultation personnelle, impression pour usage privé, partage de liens
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Utilisations interdites :</strong> Reproduction, modification, extraction massive, exploitation commerciale sans autorisation
            </p>
          </section>

          {/* Article 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 11 - DONNÉES PERSONNELLES</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              La collecte et le traitement de vos données personnelles sont détaillés dans notre{" "}
              <Link href="/confidentialite" className="text-accent hover:underline">Politique de Confidentialité</Link>.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Nous respectons le RGPD et vos droits (accès, rectification, effacement, portabilité, opposition).
            </p>
          </section>

          {/* Article 13 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 13 - RESPONSABILITÉS</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">13.1. Limitation de responsabilité de l'Éditeur</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              L'Éditeur ne saurait être tenu responsable de :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>Interruptions techniques ou indisponibilité du Site</li>
              <li>Erreurs ou inexactitudes dans les informations</li>
              <li>Décisions prises par l'Utilisateur</li>
              <li>Contenu des sites tiers</li>
              <li>Relations avec les Partenaires</li>
              <li>Dommages indirects (perte de profits, données, etc.)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">13.2. Responsabilité de l'Utilisateur</h3>
            <p className="text-foreground/90 leading-relaxed">
              L'Utilisateur est responsable de ses décisions, de la sécurité de ses identifiants, et de tout dommage causé par une utilisation contraire aux CGU.
            </p>
          </section>

          {/* Article 17 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 17 - MODIFICATIONS DES CGU</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              L'Éditeur se réserve le droit de modifier les présentes CGU à tout moment.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Les modifications substantielles seront notifiées par email ou bandeau d'information. 
              La poursuite de l'utilisation du Site après modification vaut acceptation des nouvelles CGU.
            </p>
          </section>

          {/* Article 18 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ARTICLE 18 - LITIGES</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">18.1. Contact préalable</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              En cas de litige, l'Utilisateur est invité à contacter l'Éditeur pour rechercher une solution amiable : 
              <br/><strong>contact@parrainbanque.fr</strong>
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">18.2. Médiation</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              L'Utilisateur consommateur peut recourir gratuitement à un médiateur de la consommation.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">18.3. Loi et juridiction</h3>
            <p className="text-foreground/90 leading-relaxed">
              Les CGU sont régies par le droit français. En cas d'échec de la résolution amiable, 
              les tribunaux français compétents seront saisis.
            </p>
          </section>

          {/* Récapitulatif */}
          <section className="bg-accent/5 border-2 border-accent/20 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">RÉCAPITULATIF - VOS DROITS ET OBLIGATIONS</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">✅ VOS DROITS</h3>
                <ul className="space-y-2 text-foreground/90 text-sm">
                  <li>• Accéder gratuitement au Site</li>
                  <li>• Bénéficier d'informations objectives</li>
                  <li>• Utiliser les liens de parrainage</li>
                  <li>• Exercer vos droits RGPD</li>
                  <li>• Vous désinscrire de la newsletter</li>
                  <li>• Contacter l'Éditeur</li>
                  <li>• Recourir à la médiation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">📋 VOS OBLIGATIONS</h3>
                <ul className="space-y-2 text-foreground/90 text-sm">
                  <li>• Respecter les CGU et les lois</li>
                  <li>• Utiliser le Site de manière loyale</li>
                  <li>• Fournir des informations exactes</li>
                  <li>• Protéger vos identifiants</li>
                  <li>• Ne pas copier le contenu</li>
                  <li>• Vérifier les informations</li>
                  <li>• Assumer vos décisions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">CONTACT</h2>
            <p className="text-foreground/90 leading-relaxed">
              Pour toute question concernant les présentes CGU :<br/>
              <strong>Email :</strong> contact@parrainbanque.fr<br/>
              <strong>Courrier :</strong> [À compléter - Adresse postale]
            </p>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-center text-muted text-sm">
              Date d'entrée en vigueur : 9 décembre 2025<br/>
              Version : 1.0<br/><br/>
              Merci de votre confiance et bonne navigation sur parrainbanque.fr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

