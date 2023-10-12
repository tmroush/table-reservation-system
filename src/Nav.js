import {Link} from 'react-router-dom';

function Nav() {
    return (
    <div>
    <nav>
        <ul className='nav-bar'>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/About" className="nav-item">About</Link></li>
            <li><Link to="/Menu" className="nav-item">Menu</Link></li>
            <li><Link to="/Reservations" className="nav-item">Reservations</Link></li>
            <li><Link to="/Order" className="nav-item">Order Online</Link></li>
            <li><Link to="/Login" className="nav-item">Login</Link></li>
        </ul>
    </nav>
    </div>
    );
}

export default Nav;