import { Accordion } from "../accordion";
import { faq_data } from "../../lib/faq-data";
import "../styles/faq-section.css";
function FaqSection() {
  return (
    <section className="faq-section">
      <div className="faq-section-title">
        <h3>Support</h3>
        <h2>FAQs</h2>
        <p>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <a className="content-link">chat to our friendly team</a>.
        </p>
      </div>

      <div className="faq-accordion-section">
        {faq_data.map((item) => (
          <Accordion
            question={item.question}
            answer={item.answer}
            key={item.question}
          />
        ))}
      </div>
    </section>
  );
}

export { FaqSection };
