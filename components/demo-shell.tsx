import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { DEMOS, type DemoId } from "@/lib/demo-registry";
import s from "./demo-shell.module.css";

interface DemoShellProps {
  id: DemoId;
  children: ReactNode;
}

export function DemoShell({ id, children }: DemoShellProps) {
  const demo = DEMOS[id];

  return (
    <div className={s.root}>
      <SiteHeader title={demo.pageTitle} subtitle={demo.subtitle} />
      <div className={s.content} data-layout={demo.layout}>
        {children}
      </div>
    </div>
  );
}
