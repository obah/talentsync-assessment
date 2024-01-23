import { Accordion } from "../accordion";
import { faq_data } from "../../lib/faq-data";
function FaqSection() {
  return (
    <section>
      <div>
        <h2>Support</h2>
        <h1>FAQs</h1>
        <p>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span>chat to our friendly team</span>.
        </p>
      </div>

      <div>
        <Accordion data={faq_data} />
      </div>
    </section>
  );
}

export { FaqSection };
