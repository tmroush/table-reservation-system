

const TestimonialCard = ({ testimonial }) => {
    return (
        <article className="testimonialCard">
            <h4 className="rating">{testimonial.rating}</h4>
            <img src={testimonial.image} className="testimonialImage"
             alt={testimonial.name} />
            <h4 className="customerName">{testimonial.name}</h4>
            <p className="testDescription">{testimonial.description}</p>
        </article>
    );
};

export default TestimonialCard;