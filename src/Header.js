import Nav from "./Nav"
import {Link} from 'react-router-dom';

function Header() {
    return ( 
      <header>
        <Link to="/" className="nav-item"><img src="logo.png" className="logo" width="200" alt="Little Lemon Logo" /></Link>
        <Nav />
      </header>
    );
};

export default Header;