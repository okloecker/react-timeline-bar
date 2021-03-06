import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import Timeline from "..";

export default {
  title: "Timeline",
  component: Timeline,
};

export const TimelineDefault = () => (
  <Timeline onSetNewTime={action("onSetNewTime")} />
);

export const TimelineHours = () => (
  <Timeline onSetNewTime={action("onSetNewTime")} totalDuration={3800} />
);

export const TimelineHours2 = () => (
  <Timeline onSetNewTime={action("onSetNewTime")} totalDuration={3800 * 10} />
);

export const Timeline100 = () => (
  <Timeline
    currentTime={100}
    totalDuration={1959}
    onSetNewTime={action("onSetNewTime")}
  />
);

export const TimelineInteractive = () => {
  const [time, setTime] = useState(0);
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,0.3))",
      }}
    >
      <Timeline
        currentTime={time}
        totalDuration={1800}
        onSetNewTime={setTime}
        height={80}
        width={500}
        padding={50}
        color="white"
      />
    </div>
  );
};

export const TimelineInteractiveWhite = () => {
  const [time, setTime] = useState(0);
  return (
    <Timeline
      currentTime={time}
      totalDuration={1800}
      onSetNewTime={setTime}
      width={500}
      height={100}
      padding={50}
      text="(1.2)"
    />
  );
};

export const TimelineInteractiveNarrow = () => {
  const [time, setTime] = useState(0);
  return (
    <div
      style={{
        display: "inline-block",
        backgroundImage:
          "linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,0.3))",
      }}
    >
      <Timeline
        currentTime={time}
        totalDuration={1800}
        onSetNewTime={setTime}
        width={100}
        height={40}
        color="white"
      />
    </div>
  );
};

/*
 * 100% of parent width, but since padding is added to 100%, must set padding to 0
 */
export const TimelineInteractiveDynamicWidth = () => {
  const [time, setTime] = useState(0);
  return (
    <div
      style={{
        width: 180,
        display: "inline-block",
        backgroundImage:
          "linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,0.3))",
      }}
    >
      <Timeline
        currentTime={time}
        totalDuration={1800}
        onSetNewTime={setTime}
        width="100%"
        height={40}
        padding={0}
        color="white"
      />
    </div>
  );
};
