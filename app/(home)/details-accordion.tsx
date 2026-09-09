"use client";

import { Accordion } from "@base-ui/react/accordion";
import { assertNever } from "@/lib/assert-never";
import { ACCORDION_ITEMS } from "@/lib/demo-docs";
import { AccordionItem } from "./accordion-item";
import s from "./details-accordion.module.css";

interface AccordionPanelProps {
  item: (typeof ACCORDION_ITEMS)[number];
}

function AccordionPanel({ item }: AccordionPanelProps) {
  switch (item.kind) {
    case "paragraph":
      return <p>{item.text}</p>;
    case "steps":
      return (
        <ol>
          {item.items.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      );
    default:
      return assertNever(item);
  }
}

export function DetailsAccordion() {
  return (
    <Accordion.Root className={s.root}>
      {ACCORDION_ITEMS.map((item) => (
        <AccordionItem key={item.title} title={item.title}>
          <AccordionPanel item={item} />
        </AccordionItem>
      ))}
    </Accordion.Root>
  );
}
