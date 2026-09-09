"use client";

import type { ReactNode } from "react";
import { Accordion } from "@base-ui/react/accordion";
import { PlusIcon } from "@/components/plus-icon";
import s from "./accordion-item.module.css";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  return (
    <Accordion.Item className={s.item}>
      <Accordion.Header className={s.header}>
        <Accordion.Trigger className={s.trigger}>
          {title}
          <PlusIcon className={s.icon} />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel className={s.panel}>
        <div className={s.content}>{children}</div>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
