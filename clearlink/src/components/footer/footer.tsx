import { FooterNav } from "./footer-nav";
import { Icons } from "../icons";

function Footer() {
  return (
    <footer>
      <FooterNav />
      <div>
        <p>&copy; 2023 ClearLink. All rights reserved.</p>
        <div>
          <Icons.Linkedln />
          <Icons.Twitter />
          <Icons.Facebook />
          <Icons.Instagram />
          <Icons.Github />
          <Icons.Youtube />
        </div>
      </div>
    </footer>
  );
}

export { Footer };
