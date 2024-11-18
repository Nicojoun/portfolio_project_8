import Banner from '../../components/Banner';
import Card from '../../components/Card';
import '../../assets/styles/Languages.scss';

const dataCard = [
  { title: 'HTML', imageSrc: require('../../assets/image/image_html.webp') }, 
  { title: 'CSS', imageSrc: require('../../assets/image/image_css.webp') },  
  { title: 'JS', imageSrc: require('../../assets/image/image_js.webp') },  
  { title: 'React', imageSrc: require('../../assets/image/image_react.webp') },
  { title: 'Node.js', imageSrc: require('../../assets/image/image_node_JS.webp') }
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
          />  
        ))}
      </div>
    </div>
  );
}

export default Languages;
