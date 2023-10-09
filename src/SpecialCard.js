import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpecialCard = ({ special }) => {
    return (
        <article className="specialCard">
            <img src={special.image} className="specialImage"
             alt={special.name} />
            <h3 className="specialHeader">{special.name} {special.price}</h3>
            <p className="specialDescription">{special.description}</p>
            <h4 className="specialOrder">Order a delivery <FontAwesomeIcon icon={faMotorcycle} /></h4>
        </article>
    );
};

export default SpecialCard;