import { Icons } from "./icons";
import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

export type AccordionData = AccordionItem[];

function Accordion({ data }: { data: AccordionData }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.question}>
          <button onClick={handleClick}>
            <p>{item.question}</p>
            <div>
              <span>
                <Icons.PlusCircle />
              </span>
              <span>
                <Icons.MinusCircle />
              </span>
            </div>
          </button>
          <p>{item.answer}</p>
        </div>
      ))}
    </>
  );
}

export { Accordion };
