import Customers from "../../assets/images/customers.svg";
import { IconProps } from "../icons";
import LongCurvedArrow from "../../assets/images/long-curved-arrow.svg";
import { why_us_items } from "../../lib/why-us-data";
import "../styles/why-us-section.css";

export type WhyUsItemProps = {
  title: string;
  description: string;
  icon: {
    path: (props: IconProps) => JSX.Element;
  };
};

function WhyUsSection() {
  return (
    <section className="whyus-section">
      <div className="whyus-title">
        <div>
          <h3>The ClearLink Advantage</h3>
          <h2>Why choose ClearLink?</h2>
          <p className="paragraph-1">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>
        <img src={LongCurvedArrow} alt="hand drawn arrow" />
      </div>

      <div className="whyus-details">
        <div className="whyus-items">
          {why_us_items.map((item) => (
            <WhyUsItem
              title={item.title}
              description={item.description}
              icon={item.icon}
              key={item.title}
            />
          ))}
        </div>
        <img src={Customers} alt="our happy customers" />
      </div>
    </section>
  );
}

function WhyUsItem({ title, description, icon }: WhyUsItemProps) {
  return (
    <div className="whyus-card">
      <div className="icon-wrapper">
        <icon.path />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export { WhyUsSection };
