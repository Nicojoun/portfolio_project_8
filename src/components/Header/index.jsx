import '../../assets/styles/Header.scss'; 
import { Link, useLocation } from 'react-router-dom';  

function Header() {
  const location = useLocation(); // Récupération de l'URL actuelle

  return (
    <div className='header'>
      <Link to='/' className='header-logoLink'>   
       <span className='header-logo'>Nicolas</span>
      </Link>

      <nav className='header-nav'>

        {/* Si on est sur la page d'accueil, afficher du texte souligné, sinon un lien */}
        {location.pathname === '/' ? (
          <span className='header-linkActive'>Projets</span>  // Texte souligné
        ) : (
          <Link to='/' className='header-link'>Projets</Link>  // Lien normal
        )}

        {/* Si on est sur la page "Langages", afficher du texte souligné, sinon un lien */}
        {location.pathname === '/languages' ? (
          <span className='header-linkActive'>Langages</span>  // Texte souligné
        ) : (
          <Link to='/languages' className='header-link'>Langages</Link>  // Lien normal
        )}

        {/* Si on est sur la page "formation", afficher du texte souligné, sinon un lien */}
        {location.pathname === '/formation' ? (
          <span className='header-linkActive'>Formation</span>  // Texte souligné
        ) : (
          <Link to='/formation' className='header-link'>Formation</Link>  // Lien normal
        )}

        {/* Si on est sur la page "à propos", afficher du texte souligné, sinon un lien */}
        {location.pathname === '/about' ? (
          <span className='header-linkActive'>à propos</span>  // Texte souligné
        ) : (
          <Link to='/about' className='header-link'>à propos</Link>  // Lien normal
        )}

      </nav>
    </div>
  );
}

export default Header;