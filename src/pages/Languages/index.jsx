import Banner from '../../components/Banner';
import Card from '../../components/Card';
import '../../assets/styles/Languages.scss';

const dataCard = [
  { title: 'HTML', imageSrc: require('../../assets/image/image_html.webp'), alt: 'Icône HTML' }, 
  { title: 'CSS', imageSrc: require('../../assets/image/image_css.webp'), alt: 'Icône CSS' },  
  { title: 'JS', imageSrc: require('../../assets/image/image_js.webp'), alt: 'Icône JavaScript' },  
  { title: 'React', imageSrc: require('../../assets/image/image_react.webp'), alt: 'Icône React' },
  { title: 'Node.js', imageSrc: require('../../assets/image/image_node_JS.webp'), alt: 'Icône Node.js' }
];

function Languages() {
  return (
    <div className='languages'>
      <Banner bannerClass='languages-banner' />
      {/* Boucle pour afficher des cards */}
      <div className='languages-cards'>
        {dataCard.map((item, index) => (
          <Card 
            key={index} 
            cardTitle={item.title} 
            cardSrc={item.imageSrc} 
            cardAlt={item.alt} 
          />  
        ))}
      </div>
    </div>
  );
}

export default Languages;
