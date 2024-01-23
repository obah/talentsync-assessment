import AppleStoreBadge from "../../assets/images/apple-store-badge.svg";
import FullLogo from "../../assets/images/full_logo.svg";
import { FooterMenu } from "./footer-menu";
import PlaystoreBadge from "../../assets/images/playstore-badge.svg";
import { footer_menu_data } from "../../lib/footer-menu-data";

function FooterNav() {
  return (
    <div>
      <div>
        <img src={FullLogo} alt="clearlink logo" />
        <p>
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>

      <div>
        {footer_menu_data.map((item) => (
          <div key={item.title}>
            <FooterMenu title={item.title} items={item.items} />
          </div>
        ))}
      </div>

      <div>
        <p>Get the app</p>
        <img src={AppleStoreBadge} alt="apple app store badge" />
        <img src={PlaystoreBadge} alt="google playstore badge" />
      </div>
    </div>
  );
}

export { FooterNav };
