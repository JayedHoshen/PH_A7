import React, { useContext } from "react";
import { TimelineContext } from "../../context/TimelineProvider";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);
  console.log(timeline);
  return (
    <div>
      <h2>This is Timeline page: {timeline.length}</h2>
    </div>
  );
};

export default Timeline;
