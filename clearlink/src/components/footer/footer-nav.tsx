import AppleStoreBadge from "../../assets/images/apple-store-badge.svg";
import FullLogo from "../../assets/images/full_logo.svg";
import { FooterMenu } from "./footer-menu";
import PlaystoreBadge from "../../assets/images/playstore-badge.svg";
import { footer_menu_data } from "../../lib/footer-menu-data";

function FooterNav() {
  return (
    <div className="footer-nav">
      <div className="footer-nav-title">
        <a href="/">
          <img src={FullLogo} alt="clearlink logo" />
        </a>
        <p>
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>

      <div className="footer-nav-menu">
        {footer_menu_data.map((item) => (
          <div key={item.title}>
            <FooterMenu title={item.title} items={item.items} />
          </div>
        ))}
      </div>

      <div className="footer-nav-cta">
        <h3>Get the app</h3>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AppleStoreBadge} alt="apple app store badge" />
        </a>
        <a
          href="http://play.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={PlaystoreBadge} alt="google playstore badge" />
        </a>
      </div>
    </div>
  );
}

export { FooterNav };
