import Nav from "./Nav"

function Header() {
    return ( 
      <header>
        <img src="logo.png" className="logo" width="200" alt="Little Lemon Logo" />
        <Nav />
      </header>
    );
};

export default Header;