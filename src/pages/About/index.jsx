import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import '../../assets/styles/About.scss';

const dataCollapse = [
  { title: 'Foutez-moi la paix', content: (<p>{'Si vous n’avez rien de mieux à faire, foutez-moi la paix et allez vous faire enculer !'}</p>) },
  { title: 'Dégagez de ma vue', content: (<p>{'Si ça ne vous plaît pas, dégagez de ma vue avant que je pète un câble !'}</p>) },
  { title: 'J’en ai ras-le-bol', content: (<p>{'Vos conneries, j’en ai ras-le-bol ! Gardez vos avis à la con pour vous.'}</p>) },
  { title: 'Cassez-vous, bande de nazes', content: (<p>{'Si vous êtes pas contents, cassez-vous, bande de nazes !'}</p>) }
];


function About() {
  return (
    <div className='about'>
      <Banner bannerClass='about-banner' />
      {/* Boucle pour afficher chaque élément du tableau dans un Collapse */}
      <div className='about-collapse'>
      {dataCollapse.map((item, index) => (
        <Collapse 
          key={index} 
          title={item.title} 
          content={item.content} 
        /> 
      ))}
      </div>
    </div>
  );
} 

export default About;