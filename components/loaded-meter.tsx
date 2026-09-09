"use client";

import { Meter } from "@base-ui/react/meter";
import { Panel } from "@/components/panel";
import s from "./loaded-meter.module.css";
import layout from "./meter-layout.module.css";

export function LoadedMeter() {
  return (
    <Panel>
      <Meter.Root className={layout.root} value={100}>
        <Meter.Label className={layout.label}>Loaded</Meter.Label>
        <Meter.Value className={layout.value} />
        <Meter.Track className={layout.track}>
          <Meter.Indicator className={layout.indicator} />
        </Meter.Track>
      </Meter.Root>
      <p className={s.footer}>Result: done</p>
    </Panel>
  );
}
