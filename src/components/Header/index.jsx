import '../../assets/styles/Header.scss'; 
import logo from '../../assets/logo/logo.png';  
import { Link, useLocation } from 'react-router-dom';  

function Header() {
  const location = useLocation(); // Récupération de l'URL actuelle

  return (
    <div className='header'>
      <Link to='/' className='header-logoLink'>   
        <img src={logo} alt='Logo' className='header-logo'/>   
      </Link>

      <nav className='header-nav'>

        {/* Si on est sur la page d'accueil, afficher du texte souligné, sinon un lien */}
        {location.pathname === '/' ? (
          <span className='header-linkActive'>Accueil</span>  // Texte souligné
        ) : (
          <Link to='/' className='header-link'>Accueil</Link>  // Lien normal
        )}

        {/* Si on est sur la page "À propos", afficher du texte souligné, sinon un lien */}
        {location.pathname === '/about' ? (
          <span className='header-linkActive'>A Propos</span>  // Texte souligné
        ) : (
          <Link to='/about' className='header-link'>A Propos</Link>  // Lien normal
        )}

      </nav>
    </div>
  );
}

export default Header;
