import Banner from '../../components/Banner';
import Card from '../../components/Card';
import '../../assets/styles/About.scss';

const dataCard = [
  { title: 'HTML', imageSrc: require('../../assets/image/image_html.png') },  // Utilisation de `require` pour les images locales
  { title: 'CSS', imageSrc: require('../../assets/image/image_css.png') },  // Utilisation de `require` pour les images locales
  { title: 'JS', imageSrc: require('../../assets/image/image_js.png') },  // Utilisation de `require` pour les images locales
  { title: 'React', imageSrc: require('../../assets/image/image_react.png') } // Utilisation de `require` pour les images locales
];

function About() {
  return (
    <div className='about'>
      <Banner bannerClass='about-banner' />
      {/* Boucle pour afficher des cards */}
      <div className='about-cards'>
        {dataCard.map((item, index) => (
          <Card 
            key={index} 
            cardTitle={item.title} 
            cardSrc={item.imageSrc} 
          />  
        ))}
      </div>
    </div>
  );
}

export default About;
