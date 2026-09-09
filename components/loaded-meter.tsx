"use client";

import { Meter } from "@base-ui/react/meter";
import { Panel } from "@/components/panel";
import s from "./loaded-meter.module.css";

interface LoadedMeterProps {
  result: string;
}

export function LoadedMeter({ result }: LoadedMeterProps) {
  return (
    <Panel footer={`Result: ${result}`}>
      <Meter.Root className={s.root} value={100}>
        <Meter.Label className={s.label}>Loaded</Meter.Label>
        <Meter.Value className={s.value} />
        <Meter.Track className={s.track}>
          <Meter.Indicator className={s.indicator} />
        </Meter.Track>
      </Meter.Root>
    </Panel>
  );
}
