import { Link }  from 'react-router-dom';
function Hero() {
    return (
    <section className="hero">
      <div className="information">
        <h1 className="name">Little Lemon</h1>
        <h2 className="location">Chicago</h2>
        <p className="description" width="30%">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link className="reservationButton" to={'/Reservations'}>  Make a reservation  </Link>
      </div>
      <img src="restauranfood.jpg" className="heroImage" width="200" alt="Beautiful food" />
      </section>
    );
};

export default Hero;