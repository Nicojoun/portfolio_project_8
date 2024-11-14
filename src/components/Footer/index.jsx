import '../../assets/styles/Footer.scss';    
import { Link } from 'react-router-dom';  

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-items'>
      <Link className='footer-link' to='/' >  
        <span className='footer-logo'>Nicolas</span>  
      </Link>
      </div>
    </div>
  );
}

export default Footer;
