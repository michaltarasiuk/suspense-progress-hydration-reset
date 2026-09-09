import { Separator } from "@base-ui/react/separator";
import { Link } from "@/components/link";
import s from "./site-header.module.css";

interface SiteHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
}

export function SiteHeader({
  title,
  subtitle,
  backHref = "/",
  backLabel = "All demos",
}: SiteHeaderProps) {
  return (
    <header className={s.root}>
      <div className={s.inner}>
        <div className={s.topRow}>
          <Link href={backHref} className={s.back}>
            {backLabel}
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
