import type { ReactNode } from "react";
import s from "./panel.module.css";

export function Panel({ children }: { children: ReactNode }) {
  return <div className={s.root}>{children}</div>;
}
