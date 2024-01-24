import Automattic from "../../assets/images/automattic.svg";
import Avatars from "../../assets/images/Avatars.svg";
import Coinbase from "../../assets/images/coinbase.svg";
import Dropbox from "../../assets/images/dropbox.svg";
import { Icons } from "../icons";
import Intercom from "../../assets/images/intercom.svg";
import Marvel from "../../assets/images/marvel.svg";
import ProductDemo from "../../assets/images/product-demo.svg";
import Shopify from "../../assets/images/shopify-big.svg";
import "../styles/landing-page/hero-section.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-main">
        <div>
          <div className="hero-main-text">
            <h1>
              Uniting the world,
              <br /> one video call at a time
            </h1>
            <p className="paragraph-1">
              Experience the future of communication with ClearLink – where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
          </div>

          <div className="hero-cta">
            <button className="secondary-btn">Start your free trial</button>
            <a>
              <span>
                <Icons.AiAssistant />
              </span>
              Discover AI assistant
            </a>
          </div>

          <div className="hero-testimonials">
            <img src={Avatars} alt="customer images" />
            <div>
              <div className="star-rating">
                <div>
                  <Icons.Star />
                  <Icons.Star />
                  <Icons.Star />
                  <Icons.Star />
                  <Icons.Star />
                </div>
                <span>5.0</span>
              </div>
              <p>from 3,000+ reviews</p>
            </div>
          </div>
        </div>

        <img src={ProductDemo} alt="product demo" className="hero-image" />
      </div>

      <div className="hero-section-partners">
        <p>
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="partner-images">
          <a
            href="http://www.shopify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Shopify} alt="shopify logo" />
          </a>
          <a
            href="http://www.coinbase.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Coinbase} alt="coinbase logo" />
          </a>
          <a
            href="http://www.dropbox.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Dropbox} alt="dropbox logo" />
          </a>
          <a
            href="http://www.intercom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Intercom} alt="intercom logo" />
          </a>
          <a
            href="http://www.marvel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Marvel} alt="marvel logo" />
          </a>
          <a
            href="http://www.automattic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Automattic} alt="automattic logo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
