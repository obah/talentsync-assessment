import { Icons } from "../icons";
import PeopleWorking from "../../assets/images/people-working.svg";
import ProfilePic from "../../assets/images/profile-pic.svg";
import Shopify from "../../assets/images/shopify.svg";
import "../styles/landing-page/testimonials-section.css";

function TestimonialsSection() {
  const customerName = "Sarah Thompson";
  const customerRole = "Project Manager, Shopify";

  return (
    <section className="testimonials-section">
      <div className="testimonials-details">
        <img src={Shopify} alt="shopify icon" className="shopify-logo" />
        <div className="star-rating">
          <Icons.Star />
          <Icons.Star />
          <Icons.Star />
          <Icons.Star />
          <Icons.Star />
        </div>

        <p className="paragraph-2">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>

        <div className="testimonial-switch">
          <div className="testimonial-profile">
            <img src={ProfilePic} alt="testimony profile picture" />
            <div>
              <p>{customerName}</p>
              <p>{customerRole}</p>
            </div>
          </div>
          <div className="testimonial-switch">
            <button className="icon-btn">
              <Icons.LeftIcon />
            </button>
            <button className="icon-btn">
              <Icons.RightIcon />
            </button>
          </div>
        </div>
      </div>

      <img src={PeopleWorking} alt="people working with the product" />
    </section>
  );
}

export { TestimonialsSection };
