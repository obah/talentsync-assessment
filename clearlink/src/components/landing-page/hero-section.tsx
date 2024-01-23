import Avatars from "../../assets/images/Avatars.svg";
import { Icons } from "../icons";
import Partners from "../../assets/images/partners.svg";
import ProductDemo from "../../assets/images/product-demo.svg";

function HeroSection() {
  return (
    <section>
      <div>
        <div>
          <div>
            <h1>Uniting the world, one video call at a time</h1>
            <p>
              Experience the future of communication with ClearLink – where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
          </div>

          <div>
            <button>Start your free trial</button>
            <a>
              <span>
                <Icons.AiAssistant />
              </span>
              Discover AI assistant
            </a>
          </div>

          <div>
            <img src={Avatars} alt="customer images" />
            <div>
              <div>
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
                <span>5.0</span>
              </div>
              <p>from 3,000+ reviews</p>
            </div>
          </div>
        </div>

        <img src={ProductDemo} alt="product demo" />
      </div>

      <div>
        <p>
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <img src={Partners} alt="Our partners and customers" />
      </div>
    </section>
  );
}

export { HeroSection };
