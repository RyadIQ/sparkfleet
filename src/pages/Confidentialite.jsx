import LegalLayout from '../components/LegalLayout'

export default function Confidentialite() {
  return (
    <LegalLayout
      path="/confidentialite"
      title="Politique de confidentialité"
      intro="SparkFleet s’engage à protéger les données personnelles qui lui sont confiées. Cette politique décrit les données collectées via ce site, leur usage et les droits dont vous disposez, conformément au Règlement général sur la protection des données (RGPD)."
    >
      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement est Ryad Bouharaoua, Entreprise Individuelle (EI), SIRET
        820 100 402 00040, dont le siège est à Toulouse, France. Contact :{' '}
        <a href="mailto:bonjour@sparkfleet.fr">bonjour@sparkfleet.fr</a>.
      </p>

      <h2>Données collectées</h2>
      <p>
        Les données sont collectées uniquement lorsque vous remplissez volontairement le formulaire
        de contact du site. Aucune donnée n’est collectée à votre insu, et ce site ne dépose ni
        cookie publicitaire ni traceur de mesure d’audience.
      </p>
      <ul>
        <li>Nom</li>
        <li>Société</li>
        <li>Adresse email</li>
        <li>Taille de votre flotte (nombre de véhicules)</li>
        <li>Message libre que vous choisissez de nous adresser</li>
      </ul>

      <h2>Finalité du traitement</h2>
      <p>
        Ces données servent exclusivement à répondre à vos demandes de contact et à vous proposer nos
        services de gestion de flotte. Elles ne font l’objet d’aucune décision automatisée, d’aucun
        profilage, et ne sont ni vendues ni cédées à des tiers à des fins commerciales.
      </p>

      <h2>Base légale</h2>
      <p>
        Le traitement repose sur notre <strong>intérêt légitime</strong> à répondre aux sollicitations
        commerciales qui nous sont adressées, ainsi que sur votre <strong>consentement</strong>,
        matérialisé par l’envoi volontaire du formulaire. Vous pouvez retirer ce consentement à tout
        moment.
      </p>

      <h2>Hébergement des données</h2>
      <p>
        Les données du formulaire sont stockées chez <strong>Supabase</strong>, sur une infrastructure
        située dans l’Union européenne (Irlande). Elles ne font l’objet d’aucun transfert hors de
        l’Union européenne. Le site lui-même est hébergé par Netlify, Inc.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les données sont conservées <strong>3 ans à compter du dernier contact</strong> avec vous,
        conformément aux recommandations de la CNIL en matière de prospection commerciale. Passé ce
        délai, elles sont supprimées.
      </p>

      <h2>Sécurité</h2>
      <p>
        L’accès aux données est restreint par des règles de sécurité au niveau des enregistrements
        (Row Level Security) : le formulaire public peut uniquement écrire une demande, jamais relire
        celles des autres visiteurs. La consultation est réservée à l’éditeur, via un accès
        authentifié.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément aux articles 15 à 21 du RGPD, vous disposez des droits suivants sur vos
        données :
      </p>
      <ul>
        <li>Droit d’accès : obtenir la copie des données vous concernant</li>
        <li>Droit de rectification : corriger une donnée inexacte ou incomplète</li>
        <li>Droit à la suppression : demander l’effacement de vos données</li>
        <li>Droit d’opposition : vous opposer au traitement à des fins de prospection</li>
        <li>Droit à la portabilité : recevoir vos données dans un format structuré et lisible</li>
      </ul>
      <p>
        Pour exercer ces droits, écrivez à{' '}
        <a href="mailto:bonjour@sparkfleet.fr">bonjour@sparkfleet.fr</a>. Une réponse vous sera
        apportée dans un délai d’un mois.
      </p>

      <h2>Réclamation</h2>
      <p>
        Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez
        introduire une réclamation auprès de la Commission nationale de l’informatique et des libertés
        (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, ou en ligne sur{' '}
        <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
          cnil.fr
        </a>
        .
      </p>
    </LegalLayout>
  )
}
