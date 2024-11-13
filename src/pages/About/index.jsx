import Banner from '../../components/Banner';
import Card from '../../components/Card';
import '../../assets/styles/About.scss';

const dataCard = [
  { title: 'HTML', imageSrc: require('../../assets/image/image_html.png') }, 
  { title: 'CSS', imageSrc: require('../../assets/image/image_css.png') },  
  { title: 'JS', imageSrc: require('../../assets/image/image_js.png') },  
  { title: 'React', imageSrc: require('../../assets/image/image_react.png') },
  { title: 'Node.js', imageSrc: require('../../assets/image/image_node_JS.png') }
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
