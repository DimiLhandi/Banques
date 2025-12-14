import Link from "next/link";

export const metadata = {
  title: "Mentions Légales — Banques",
  description: "Mentions légales du site de comparaison de banques en ligne.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Bouton retour */}
        <Link href="/" className="inline-flex items-center gap-2 text-white text-sm hover:text-accent transition-colors mb-8">
          <span>←</span>
          <span>Retour à l'accueil</span>
        </Link>

        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Mentions Légales</h1>
        <p className="text-muted mb-12">Dernière mise à jour : 9 décembre 2025</p>

        {/* Contenu */}
        <div className="prose prose-invert max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. INFORMATIONS GÉNÉRALES</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN), il est porté à la connaissance des utilisateurs et visiteurs du site parrainbanque.fr les présentes mentions légales.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              La connexion et la navigation sur le site parrainbanque.fr impliquent l'acceptation intégrale et sans réserve de l'utilisateur des présentes mentions légales.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. ÉDITEUR DU SITE</h2>
            <ul className="space-y-2 text-foreground/90">
              <li><strong>Raison sociale :</strong> [À compléter - Nom de votre entreprise ou Nom Prénom si entrepreneur individuel]</li>
              <li><strong>Forme juridique :</strong> [À compléter - Ex : Auto-entrepreneur, SASU, EURL, SAS, etc.]</li>
              <li><strong>Siège social :</strong> [À compléter - Adresse complète]</li>
              <li><strong>Numéro SIRET :</strong> [À compléter - 14 chiffres]</li>
              <li><strong>Numéro RCS :</strong> [À compléter si société - Ex : RCS Paris 123 456 789]</li>
              <li><strong>Capital social :</strong> [À compléter si société - Ex : 1 000 €]</li>
              <li><strong>Numéro de TVA intracommunautaire :</strong> [À compléter si applicable]</li>
              <li><strong>Directeur de la publication :</strong> [À compléter - Nom Prénom du responsable légal]</li>
              <li><strong>Email de contact :</strong> contact@parrainbanque.fr</li>
              <li><strong>Téléphone :</strong> [À compléter - optionnel]</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. HÉBERGEMENT DU SITE</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">Le site parrainbanque.fr est hébergé par :</p>
            <ul className="space-y-2 text-foreground/90">
              <li><strong>Nom de l'hébergeur :</strong> [À compléter - Ex : OVH, O2Switch, Hostinger, etc.]</li>
              <li><strong>Adresse du siège social :</strong> [À compléter - Adresse de l'hébergeur]</li>
              <li><strong>Téléphone :</strong> [À compléter - Numéro de l'hébergeur]</li>
              <li><strong>Site web :</strong> [À compléter - URL de l'hébergeur]</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. OBJET DU SITE</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Le site parrainbanque.fr est un site d'information et de comparaison de services bancaires et financiers. Il propose :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
              <li>Des présentations détaillées de banques en ligne et fintechs</li>
              <li>Des comparatifs de services bancaires</li>
              <li>Des guides et conseils financiers</li>
              <li>Des liens de parrainage vers des établissements bancaires et financiers</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              Le site parrainbanque.fr agit en qualité d'intermédiaire non exclusif et n'est pas un établissement bancaire. Nous ne sommes pas habilités à fournir des conseils en investissement personnalisés ni à commercialiser directement des produits bancaires.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. PROPRIÉTÉ INTELLECTUELLE</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">5.1. Contenu du site</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              L'ensemble du contenu présent sur le site parrainbanque.fr (textes, images, graphismes, logos, icônes, sons, logiciels, bases de données, structure, design, etc.) est la propriété exclusive de l'éditeur du site ou de ses partenaires, sauf mention contraire.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de l'éditeur.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.2. Marques</h3>
            <p className="text-foreground/90 leading-relaxed">
              Les marques, logos et noms commerciaux mentionnés sur le site parrainbanque.fr appartiennent à leurs propriétaires respectifs et sont utilisés à des fins d'information et de comparaison uniquement.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. LIENS HYPERTEXTES ET AFFILIATION</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">6.1. Liens sortants</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Le site parrainbanque.fr peut contenir des liens hypertextes vers d'autres sites internet. L'éditeur ne peut être tenu responsable du contenu de ces sites tiers, de leur disponibilité, de leurs pratiques en matière de protection des données personnelles ou de tout dommage résultant de leur utilisation.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.2. Liens d'affiliation et de parrainage</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Le site parrainbanque.fr utilise des liens d'affiliation et de parrainage vers des établissements bancaires et financiers. L'éditeur peut percevoir une commission lorsqu'un utilisateur ouvre un compte ou souscrit à un service via ces liens.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Ces partenariats n'affectent pas l'objectivité des informations présentées. Les avis et comparatifs publiés sont réalisés de manière indépendante et factuelle.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Les établissements partenaires sont clairement identifiés le cas échéant.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.3. Liens entrants</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">La création de liens hypertextes vers le site parrainbanque.fr est autorisée sous réserve :</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
              <li>Que le lien s'ouvre dans une nouvelle fenêtre</li>
              <li>Que la source soit clairement mentionnée</li>
              <li>Qu'aucune modification du contenu ne soit effectuée</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              L'éditeur se réserve le droit de demander la suppression d'un lien qu'il estime non conforme à l'image du site.
            </p>
          </section>

          {/* Section 7 - RGPD */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. DONNÉES PERSONNELLES</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">7.1. Responsable du traitement</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">Le responsable du traitement des données personnelles collectées sur le site parrainbanque.fr est :</p>
            <p className="text-foreground/90 leading-relaxed mb-6">[À compléter - Nom Prénom ou Raison sociale]<br/>Email : contact@parrainbanque.fr</p>

            <h3 className="text-xl font-semibold text-white mb-3">7.2. Données collectées</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">Le site parrainbanque.fr peut collecter les données personnelles suivantes :</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
              <li>Données de navigation (cookies, adresse IP, pages consultées, durée de visite)</li>
              <li>Données renseignées volontairement dans les formulaires de contact (nom, prénom, email)</li>
              <li>Données d'inscription à la newsletter (email)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">7.7. Droits des utilisateurs</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
              <li>Droit d'accès : obtenir la confirmation que des données vous concernant sont traitées</li>
              <li>Droit de rectification : faire corriger des données inexactes ou incomplètes</li>
              <li>Droit à l'effacement : obtenir l'effacement de vos données dans certaines conditions</li>
              <li>Droit à la portabilité : recevoir vos données dans un format structuré</li>
              <li>Droit d'opposition : vous opposer au traitement de vos données</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mb-4">Pour exercer ces droits : Email : contact@parrainbanque.fr</p>
            <p className="text-foreground/90 leading-relaxed">
              Vous disposez également du droit d'introduire une réclamation auprès de la CNIL : www.cnil.fr
            </p>
          </section>

          {/* Section 8 - Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. COOKIES</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Le site parrainbanque.fr utilise des cookies pour améliorer votre expérience de navigation, analyser l'utilisation du site et vous proposer des contenus personnalisés.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Vous pouvez gérer vos préférences de cookies via le bandeau de consentement ou les paramètres de votre navigateur.
            </p>
          </section>

          {/* Section 9 - Responsabilité */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. RESPONSABILITÉ ET LIMITATION DE GARANTIE</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Les informations diffusées sur le site parrainbanque.fr sont fournies à titre informatif et éducatif uniquement. Elles ne constituent pas des conseils financiers personnalisés, des recommandations d'investissement ou des offres de souscription.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              L'éditeur s'efforce de fournir des informations précises et actualisées, mais ne peut garantir leur exactitude absolue. Il appartient à l'utilisateur de vérifier les informations auprès des établissements concernés.
            </p>
          </section>

          {/* Section 10 - Loi applicable */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. LOI APPLICABLE ET JURIDICTION</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Les présentes mentions légales sont régies par le droit français.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Tout litige sera soumis aux tribunaux français compétents. Les consommateurs peuvent recourir à un médiateur pour la résolution amiable des litiges.
            </p>
          </section>

          {/* Section 11 - Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">11. CONTACT</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Pour toute question concernant les présentes mentions légales :
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Email : contact@parrainbanque.fr<br/>
              Adresse postale : [À compléter - Adresse complète]<br/>
              Délai de réponse : 48 à 72 heures ouvrées
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

