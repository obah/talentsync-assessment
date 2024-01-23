import Customers from "../../assets/images/customers.svg";
import { IconProps } from "../icons";
import LongCurvedArrow from "../../assets/images/long-curved-arrow.svg";
import { why_us_items } from "../../lib/why-us-data";

export type WhyUsItemProps = {
  title: string;
  description: string;
  icon: {
    path: (props: IconProps) => JSX.Element;
  };
};

function WhyUsSection() {
  return (
    <section>
      <div>
        <div>
          <h2>The ClearLink Advantage</h2>
          <h1>Why choose ClearLink?</h1>
          <p>
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>
        <img src={LongCurvedArrow} alt="hand drawn arrow" />
      </div>

      <div>
        <div>
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
    <>
      <span>
        <icon.path />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
}

export { WhyUsSection };
