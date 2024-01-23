import { Menu } from "./menu";
import fullLogo from "../../assets/images/full_logo.svg";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header>
      <a href="/">
        <img src={fullLogo} alt="clear link logo" />
      </a>

      <div>
        <Menu />
      </div>

      <div className="cta-buttons">
        <button className="primary-btn">Talk to sales</button>
        <button className="secondary-btn">Sign up for free</button>
      </div>
    </header>
  );
}

export { Navbar };
