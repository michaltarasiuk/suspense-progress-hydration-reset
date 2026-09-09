import type { ReactNode } from "react";
import s from "./home-section.module.css";

interface HomeSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function HomeSection({ id, title, children }: HomeSectionProps) {
  return (
    <section className={s.root} aria-labelledby={id}>
      <h2 className={s.title} id={id}>
        {title}
      </h2>
      {children}
    </section>
  );
}
