import Avatars from "../../assets/images/Avatars.svg";
import { Icons } from "../icons";
import Partners from "../../assets/images/partners.svg";
import ProductDemo from "../../assets/images/product-demo.svg";
import "../styles/hero-section.css";

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
            <p className="hero-paragraph-1">
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
        <img src={Partners} alt="Our partners and customers" />
      </div>
    </section>
  );
}

export { HeroSection };
