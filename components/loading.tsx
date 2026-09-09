"use client";

import { Progress } from "@base-ui/react/progress";

import { Panel } from "@/components/panel";

import s from "./loading.module.css";
import layout from "./meter-layout.module.css";

export function Loading() {
  return (
    <Panel>
      <Progress.Root className={layout.root} value={null}>
        <Progress.Label className={layout.label}>Loading</Progress.Label>
        <Progress.Value className={layout.value}>{() => "..."}</Progress.Value>
        <Progress.Track className={layout.track}>
          <Progress.Indicator className={s.indicator} />
        </Progress.Track>
      </Progress.Root>
    </Panel>
  );
}
