import ProductLiveDemo from "../../assets/images/product-live-demo.svg";
import "../styles/landing-page/offer-section.css";

function OfferSection() {
  const offers = [
    "30 days free trial",
    "Cancel at any time",
    "Access to all features",
    "Peronalized onboarding",
  ];

  return (
    <section className="offer-section">
      <div className="offer-section-text">
        <h2>Ready to clear the path to perfect communication?</h2>
        <ul>
          {offers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="cta-buttons">
          <button className="primary-btn">Talk to sales</button>
          <button className="secondary-btn">Start your free trial</button>
        </div>

        <img src={ProductLiveDemo} alt="live demo of the product" />
      </div>
    </section>
  );
}

export { OfferSection };
