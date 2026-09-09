"use client";

import { Progress } from "@base-ui/react/progress";
import { Panel } from "@/components/panel";
import s from "./loading-fallback.module.css";

export function LoadingFallback() {
  return (
    <Panel>
      <Progress.Root className={s.root} value={null}>
        <Progress.Label className={s.label}>Loading</Progress.Label>
        <Progress.Value className={s.value}>{() => "..."}</Progress.Value>
        <Progress.Track className={s.track}>
          <Progress.Indicator className={s.indicator} />
        </Progress.Track>
      </Progress.Root>
    </Panel>
  );
}
