import type { ReactNode } from "react";
import s from "./panel.module.css";

interface PanelProps {
  children: ReactNode;
  footer?: ReactNode;
}

export function Panel({ children, footer }: PanelProps) {
  return (
    <div className={s.root}>
      {children}
      {footer && <p className={s.footer}>{footer}</p>}
    </div>
  );
}
