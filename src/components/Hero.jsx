const Hero = () => {
  return (
    <>
      <section className="hero-bg">
        <article>
          <summary>
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept paym ents, send
              payouts, and manage their businesses online.
            </p>
            <button className="start-now-btn">Start now</button>
          </summary>
          <img
            className="phone-img"
            src="https://raw.githubusercontent.com/john-smilga/react-projects/a7607537821a58e3569a4e4d8eb029ae63fe405d/13-stripe-submenus/final/src/images/phone.svg"
            alt="Phone-img"
          />
        </article>
      </section>
    </>
  );
};

export default Hero;
