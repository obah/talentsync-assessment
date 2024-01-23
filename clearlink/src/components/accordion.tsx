import { Icons } from "./icons";

type AccordionItem = {
  question: string;
  answer: string;
};

export type AccordionData = AccordionItem[];

function Accordion({ data }: { data: AccordionData }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.question}>
          <button>
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
