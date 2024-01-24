import { FooterNav } from "./footer-nav";
import { Icons } from "../icons";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <FooterNav />
      <div className="footer-base">
        <p>&copy; 2023 ClearLink. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="norefferer noopener"
          >
            <Icons.Linkedin />
          </a>
          <a href="https://www.x.com" target="_blank" rel="norefferer noopener">
            <Icons.Twitter />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="norefferer noopener"
          >
            <Icons.Facebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="norefferer noopener"
          >
            <Icons.Instagram />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="norefferer noopener"
          >
            <Icons.Github />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="norefferer noopener"
          >
            <Icons.Youtube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
