import { Icons } from "./icons";
import { useState } from "react";
import "../components/styles/accordion.css";

type AccordionItem = {
  question: string;
  answer: string;
};

export type AccordionData = AccordionItem[];

function Accordion({ question, answer }: AccordionItem) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const accordionContent = isOpen ? "show-content" : "hide-content";
  const accordionOpen = isOpen ? "accordion-open" : "accordion-close";
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={accordionOpen}>
        <div onClick={handleClick} className="accordion-wrapper">
          <p>{question}</p>
          <div>
            <span className={accordionContent}>
              <Icons.PlusCircle />
            </span>
            <span className={accordionContent}>
              <Icons.MinusCircle />
            </span>
          </div>
        </div>
        <p className={accordionContent}>{answer}</p>
      </div>
    </>
  );
}

export { Accordion };
