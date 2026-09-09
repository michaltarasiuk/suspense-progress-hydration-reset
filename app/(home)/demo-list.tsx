import { Link } from "@/components/link";
import { DEMO_LIST } from "@/lib/demo-registry";
import s from "./demo-list.module.css";

export function DemoList() {
  return (
    <ul className={s.list}>
      {DEMO_LIST.map((demo) => (
        <li className={s.item} key={demo.id}>
          <div className={s.itemInner}>
            <span className={s.meta}>{demo.label}</span>
            <Link href={demo.href} className={s.link}>
              <span className={s.title}>{demo.title}</span>
            </Link>
            <p className={s.description}>{demo.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
