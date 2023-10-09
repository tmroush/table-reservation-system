
function Footer() {
    return (
        <footer>
            <div className="footerImage">
            <img src="logo-white.png" className="footerLogo" alt="Little Lemon" />
            </div>
            <div className="footerNav">
                <h4>Site Map</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Onine</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="contactUs">
                <h4>Contact Us</h4>
                <p>123 Any Street, Chicago, IL</p>
                <p>(123)555-1212</p>
            </div>
            <div className="socialMedia">
                <h4>Social Media</h4>
                <p>Facebook</p>
                <p>Instagram</p>
            </div>
        </footer>
    );
}

export default Footer;