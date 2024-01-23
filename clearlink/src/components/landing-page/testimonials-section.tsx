import { Icons } from "../icons";
import PeopleWorking from "../../assets/images/people-working.svg";
import ProfilePic from "../../assets/images/profile-pic.svg";
import Shopify from "../../assets/images/shopify.svg";

function TestimonialsSection() {
  const customerName = "Sarah Thompson";
  const customerRole = "Project Manager, Shopify";

  return (
    <section>
      <div>
        <img src={Shopify} alt="shopify icon" />
        <div>
          <Icons.Star />
          <Icons.Star />
          <Icons.Star />
          <Icons.Star />
          <Icons.Star />
        </div>
        <p>
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>
        <div>
          <div>
            <img src={ProfilePic} alt="testimony profile picture" />
            <div>
              <h3>{customerName}</h3>
              <p>{customerRole}</p>
            </div>
          </div>
          <div>
            <button>
              <Icons.LeftIcon />
            </button>
            <button>
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
