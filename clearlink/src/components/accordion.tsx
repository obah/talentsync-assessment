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
  const openBtn = isOpen ? "hide-content" : "show-content";
  const accordionOpen = isOpen ? "accordion-open" : "accordion-close";
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"accordion " + accordionOpen} onClick={handleClick}>
      <div className="accordion-item">
        <p>{question}</p>
        <div>
          <span className={openBtn}>
            <Icons.PlusCircle />
          </span>
          <span className={accordionContent}>
            <Icons.MinusCircle />
          </span>
        </div>
      </div>
      <p className={"accordion-answer " + accordionContent}>{answer}</p>
    </div>
  );
}

export { Accordion };
