import "./Nav"

function Header() {
    return ( 
      <header>
        <img src="./assets/Logo.svg" className="logo" alt="Little Lemon Logo" />
        <Nav />
      </header>
    );
};

export default Header;