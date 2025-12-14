import Link from "next/link";

export const metadata = {
  title: "Politique de Confidentialité — Banques",
  description: "Politique de confidentialité et protection des données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Bouton retour */}
        <Link href="/" className="inline-flex items-center gap-2 text-white text-sm hover:text-accent transition-colors mb-8">
          <span>←</span>
          <span>Retour à l'accueil</span>
        </Link>

        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Politique de Confidentialité</h1>
        <p className="text-muted mb-12">Dernière mise à jour : 9 décembre 2025</p>

        {/* Contenu */}
        <div className="prose prose-invert max-w-none space-y-12">
          {/* Préambule */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">PRÉAMBULE</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              La protection de vos données personnelles est une priorité pour parrainbanque.fr.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              La présente Politique de Confidentialité a pour objectif de vous informer de manière claire et transparente sur :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
              <li>Les données personnelles que nous collectons</li>
              <li>Les raisons pour lesquelles nous les collectons</li>
              <li>La manière dont nous les utilisons et les protégeons</li>
              <li>Vos droits concernant vos données personnelles</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              En utilisant notre Site, vous acceptez les pratiques décrites dans cette Politique de Confidentialité.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. IDENTITÉ DU RESPONSABLE DU TRAITEMENT</h2>
            <ul className="space-y-2 text-foreground/90">
              <li><strong>Raison sociale :</strong> [À compléter - Nom de votre entreprise ou Nom Prénom]</li>
              <li><strong>Forme juridique :</strong> [À compléter - Ex : Auto-entrepreneur, SASU, etc.]</li>
              <li><strong>Siège social :</strong> [À compléter - Adresse complète]</li>
              <li><strong>SIRET :</strong> [À compléter - 14 chiffres]</li>
              <li><strong>Email :</strong> contact@parrainbanque.fr</li>
              <li><strong>Téléphone :</strong> [À compléter - optionnel]</li>
              <li><strong>DPO :</strong> [À compléter si applicable, sinon indiquer "Non désigné"]</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. DONNÉES PERSONNELLES COLLECTÉES</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">2.1. Définition</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Les données personnelles désignent toute information se rapportant à une personne physique identifiée ou identifiable, directement ou indirectement.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.2. Données collectées automatiquement</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Lors de votre navigation sur le Site, nous collectons automatiquement :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>Adresse IP, type et version du navigateur, système d'exploitation</li>
              <li>Pages consultées et temps passé sur chaque page</li>
              <li>Date et heure de connexion, URL de provenance</li>
              <li>Type d'appareil utilisé, résolution d'écran</li>
              <li>Cookies et technologies similaires</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.3. Données collectées via les formulaires</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Lorsque vous utilisez nos formulaires, nous collectons :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li><strong>Formulaire de contact :</strong> Nom, prénom, email, message</li>
              <li><strong>Newsletter :</strong> Adresse email, prénom (optionnel)</li>
              <li><strong>Comparaison :</strong> Informations financières, profil utilisateur</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.5. Données que nous ne collectons PAS</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Pour votre sécurité, nous ne collectons jamais :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Vos identifiants bancaires complets</li>
              <li>Vos numéros de carte bancaire ou codes PIN</li>
              <li>Le détail de vos transactions bancaires</li>
              <li>Vos données de santé ou biométriques</li>
              <li>Vos opinions politiques, religieuses ou philosophiques</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. FINALITÉS DU TRAITEMENT</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Nous utilisons vos données personnelles pour :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Assurer le bon fonctionnement du Site et améliorer l'expérience utilisateur</li>
              <li>Répondre à vos demandes de contact</li>
              <li>Envoyer des newsletters (avec consentement)</li>
              <li>Analyser les statistiques de fréquentation</li>
              <li>Gérer les liens de parrainage et affiliation</li>
              <li>Assurer la sécurité du Site et prévenir les fraudes</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. DESTINATAIRES DES DONNÉES</h2>
            <p className="text-foreground/90 leading-relaxed mb-4 font-semibold">
              Vos données personnelles ne sont jamais vendues à des tiers.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-3">4.2. Prestataires de services</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Nous faisons appel à des prestataires de confiance :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>Hébergement : [À compléter - ex : OVH, O2Switch]</li>
              <li>Analyse : Google Analytics (anonymisé)</li>
              <li>Emailing : [À compléter - ex : Mailchimp, Brevo]</li>
              <li>Cookies : [À compléter - ex : Axeptio, Tarteaucitron]</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">4.3. Partenaires bancaires</h3>
            <p className="text-foreground/90 leading-relaxed">
              Lorsque vous cliquez sur un lien de parrainage, vos données sont transmises directement au partenaire bancaire. 
              Chaque établissement dispose de sa propre politique de confidentialité.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. SÉCURITÉ DES DONNÉES</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Nous mettons en œuvre des mesures de sécurité appropriées :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Certificat SSL/TLS (HTTPS) pour chiffrer les communications</li>
              <li>Pare-feu et systèmes de détection d'intrusion</li>
              <li>Mises à jour régulières des systèmes</li>
              <li>Chiffrement des données sensibles</li>
              <li>Sauvegardes régulières et chiffrées</li>
              <li>Accès limité aux données (principe du moindre privilège)</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. COOKIES</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">8.1. Qu'est-ce qu'un cookie ?</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Un cookie est un petit fichier texte stocké sur votre terminal lors de votre visite sur un site web.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">8.2. Types de cookies utilisés</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li><strong>Cookies strictement nécessaires :</strong> Session, sécurité (exemptés de consentement)</li>
              <li><strong>Cookies analytiques :</strong> Google Analytics, mesure d'audience (nécessitent consentement)</li>
              <li><strong>Cookies publicitaires :</strong> Ré-ciblage, affiliation (nécessitent consentement)</li>
              <li><strong>Cookies réseaux sociaux :</strong> Facebook, Twitter, LinkedIn (nécessitent consentement)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">8.4. Gestion des cookies</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Vous pouvez gérer vos préférences de cookies :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Via notre bandeau de gestion des cookies</li>
              <li>Via les paramètres de votre navigateur</li>
              <li>En modifiant vos choix à tout moment</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. VOS DROITS (RGPD)</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Supprimer vos données (sous conditions)</li>
              <li><strong>Droit à la limitation :</strong> Geler le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement</li>
              <li><strong>Droit de retirer votre consentement :</strong> À tout moment</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Comment exercer vos droits ?</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Par email :</strong> contact@parrainbanque.fr<br/>
              <strong>Par courrier :</strong> [À compléter - Adresse postale]<br/>
              <strong>Délai de réponse :</strong> 1 mois maximum
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Réclamation auprès de la CNIL :</strong><br/>
              Si vous estimez que nous ne respectons pas vos droits, vous pouvez saisir la CNIL : www.cnil.fr
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. DONNÉES DES MINEURS</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Le Site s'adresse principalement à un public majeur (18 ans et plus).
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Nous ne collectons pas sciemment de données de mineurs sans consentement parental. 
              Si vous découvrez qu'un mineur a fourni des données sans autorisation, contactez-nous immédiatement.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. NEWSLETTER ET PROSPECTION</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              L'inscription à notre newsletter est volontaire et nécessite votre consentement explicite.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Contenu :</strong> Actualités bancaires, comparatifs, offres de parrainage, nouveautés
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Désinscription :</strong> Lien dans chaque email ou via contact@parrainbanque.fr
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. MODIFICATIONS</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Nous nous réservons le droit de modifier cette Politique à tout moment.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Les modifications substantielles vous seront notifiées par email ou via un bandeau sur le Site.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. CONTACT</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Pour toute question concernant vos données personnelles :
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Email :</strong> contact@parrainbanque.fr<br/>
              <strong>Courrier :</strong> [À compléter - Adresse postale]<br/>
              <strong>Délai de réponse :</strong> 48 à 72 heures ouvrées
            </p>
          </section>

          {/* Engagement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">NOTRE ENGAGEMENT</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Nous nous engageons à :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Être transparent sur nos pratiques</li>
              <li>Ne collecter que les données strictement nécessaires</li>
              <li>Protéger vos données par des mesures appropriées</li>
              <li>Faciliter l'exercice de vos droits</li>
              <li>Ne jamais vendre vos données à des tiers</li>
              <li>Respecter le RGPD et les recommandations de la CNIL</li>
            </ul>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-center text-muted text-sm">
              Merci de votre confiance.<br/>
              L'équipe de parrainbanque.fr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

