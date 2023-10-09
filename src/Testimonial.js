import TestimonialCard from "./TestimonialCard.js"

const testimonials = [
    {
      name: 'Amy',
      image: "customer1.jpg",
      description: 'The best place to hangout with friends.',
      rating: '5 stars',
    },
    {
      name: 'Ahmed',
      image: "customer2.jpg",
      description: 'Authentic Mediterranean food and inviting atmosphere.',
      rating: '5 stars',
    },
    {
        name: 'James',
        image: "customer3.jpg",
        description: 'The food is always delicious.',
        rating: '5 stars',
      },
      {
        name: 'Eileen',
        image: "customer4.jpg",
        description: 'Special celebrations are top notch.',
        rating: '5 stars',
      },
  ];

function Testimonials() {
    return (
    <section className="testimonials">
      <h1 className="testimonial-title">Testimonials</h1>
      <div className="testimonialItems">
    {testimonials.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial} />)}
    </div>
    </section>
    );
};

export default Testimonials;