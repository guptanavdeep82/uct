import { useState } from "react";

export default function FAQAccordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="faq__wrap">
      <div className="faq__list">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
              <button
                className="faq-item__q"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                {item.q}
                <span className="faq-item__icon" aria-hidden="true"></span>
              </button>
              <div className="faq-item__a">
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
