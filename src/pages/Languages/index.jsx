import Banner from '../../components/Banner';
import Card from '../../components/Card';
import '../../assets/styles/Languages.scss';

const dataCard = [
  { title: 'HTML', imageSrc: require('../../assets/image/image_html.png') }, 
  { title: 'CSS', imageSrc: require('../../assets/image/image_css.png') },  
  { title: 'JS', imageSrc: require('../../assets/image/image_js.png') },  
  { title: 'React', imageSrc: require('../../assets/image/image_react.png') },
  { title: 'Node.js', imageSrc: require('../../assets/image/image_node_JS.png') }
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
