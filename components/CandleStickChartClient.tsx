"use client";
import React, { useState } from "react";
import CandleStickChart from "./CandleStickChart";

const CandleStickChartClient = (
  props: Omit<CandlestickChartProps, "liveInterval" | "setLiveInterval">,
) => {
  const [liveInterval, setLiveInterval] = useState<"1s" | "1m">("1s");

  return (
    <CandleStickChart
      {...(props as CandlestickChartProps)}
      liveInterval={liveInterval}
      setLiveInterval={setLiveInterval}
    >
      {props.children}
    </CandleStickChart>
  );
};

export default CandleStickChartClient;
