import type { ReactNode } from "react";
import s from "./home-section.module.css";

interface HomeSectionProps {
  id: string;
  title: string;
  hint?: string;
  children: ReactNode;
}

export function HomeSection({ id, title, hint, children }: HomeSectionProps) {
  return (
    <section className={s.root} aria-labelledby={id}>
      <div className={s.header}>
        <h2 className={s.title} id={id}>
          {title}
        </h2>
        {hint && <p className={s.hint}>{hint}</p>}
      </div>
      {children}
    </section>
  );
}
