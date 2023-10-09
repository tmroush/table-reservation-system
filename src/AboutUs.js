function AboutUs() {
    return ( 
    <section className="aboutUs">
      <div className="information">
        <h1 className="name">Little Lemon</h1>
        <h2 className="location">Chicago</h2>
        <p className="aboutUsText" width="30%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div>
      <img src="chefs-mario-and-adrian_a.jpg" className="aboutImage"  alt="Mario and Adrian" />
      </div>
      <div>
      <img src="chefs-mario-and-adrian_b.jpg" className="aboutImage"  alt="Mario and Adrian" />
      </div>
      </section>
    );
};

export default AboutUs;