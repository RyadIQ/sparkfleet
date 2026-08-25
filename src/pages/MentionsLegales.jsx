import LegalLayout from '../components/LegalLayout'

export default function MentionsLegales() {
  return (
    <LegalLayout
      title="Mentions légales"
      intro="Informations relatives à l’éditeur et à l’hébergeur du site sparkfleet.fr, conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique."
    >
      <h2>Éditeur du site</h2>
      <dl>
        <dt>Éditeur</dt>
        <dd>Ryad Bouharaoua</dd>
        <dt>Forme juridique</dt>
        <dd>Entreprise Individuelle (EI)</dd>
        <dt>SIRET</dt>
        <dd>820 100 402 00040</dd>
        <dt>Siège social</dt>
        <dd>Toulouse, France</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:bonjour@sparkfleet.fr">bonjour@sparkfleet.fr</a>
        </dd>
        <dt>Téléphone</dt>
        <dd>
          <a href="tel:+33652045448">06 52 04 54 48</a>
        </dd>
      </dl>

      <h2>Directeur de la publication</h2>
      <p>Ryad Bouharaoua, en qualité d’éditeur du site.</p>

      <h2>Hébergeur</h2>
      <dl>
        <dt>Hébergeur</dt>
        <dd>Netlify, Inc.</dd>
        <dt>Adresse</dt>
        <dd>512 2nd Street, Suite 200, San Francisco, CA 94107, USA</dd>
      </dl>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus présents sur ce site (textes, marques, logos, méthodologie
        SparkScore, éléments graphiques) est protégé par le droit de la propriété intellectuelle et
        demeure la propriété exclusive de l’éditeur, sauf mention contraire. Toute reproduction,
        représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable est
        interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Les informations publiées sur ce site sont fournies à titre indicatif et peuvent être
        modifiées à tout moment. L’éditeur s’efforce d’en assurer l’exactitude sans pouvoir la
        garantir, et ne saurait être tenu responsable des conséquences d’une décision prise sur leur
        seule base. Les exemples de flotte et de SparkScore présentés sur le site sont des
        illustrations et ne constituent pas un engagement de résultat.
      </p>

      <h2>Données personnelles et cookies</h2>
      <p>
        Le traitement des données transmises via le formulaire de contact est décrit dans notre{' '}
        <a href="/confidentialite">politique de confidentialité</a>. Ce site ne dépose aucun cookie
        publicitaire ni traceur de mesure d’audience.
      </p>
    </LegalLayout>
  )
}
