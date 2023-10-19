import { Link } from 'react-router-dom';
import SpecialCard from "./SpecialCard";

const specials = [
    {
      name: 'Greek Salad',
      image: "greek-salad.jpg",
      price: '$14.99',
      description: `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
    },
    {
      name: 'Bruschetta',
      image: "bruschetta.jpg",
      price: '$7.99',
      description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: 'Lemon Dessert',
      image: "lemon_dessert.jpg",
      price: '$4.99',
      description: `Grandma's famous lemon desert, every ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];

function Specials() {
    return (
    <section className="special">
        <h1 className="special-title">This week's specials!</h1>
        <Link className="orderButton" to="./order" >Order online</Link>
    {specials.map((special, index) => <SpecialCard key={index} special={special} />)}
    </section>
    );
};

export default Specials;