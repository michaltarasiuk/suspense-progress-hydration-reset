import { Separator } from "@base-ui/react/separator";
import Link from "next/link";
import s from "./site-header.module.css";

interface SiteHeaderProps {
  title: string;
  subtitle?: string;
}

export function SiteHeader({ title, subtitle }: SiteHeaderProps) {
  return (
    <header className={s.root}>
      <div className={s.inner}>
        <div className={s.topRow}>
          <Link href="/" className={s.back}>
            All demos
          </Link>
          <Separator className={s.sepV} orientation="vertical" />
          <h1 className={s.title}>{title}</h1>
        </div>
        {subtitle && <p className={s.subtitle}>{subtitle}</p>}
        <Separator className={s.sepH} orientation="horizontal" />
      </div>
    </header>
  );
}
