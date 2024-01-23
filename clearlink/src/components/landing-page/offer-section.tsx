import ProductLiveDemo from "../../assets/images/product-live-demo.svg";

function OfferSection() {
  const offers = [
    "30 days free trial",
    "Cancel at any time",
    "Access to all features",
    "Peronalized onboarding",
  ];

  return (
    <section>
      <div>
        <h3>Ready to clear the path to perfect communication?</h3>
        <ul>
          {offers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>
          <button>Talk to sales</button>
          <button>Start your free trial</button>
        </div>

        <img src={ProductLiveDemo} alt="live demo of the product" />
      </div>
    </section>
  );
}

export { OfferSection };
