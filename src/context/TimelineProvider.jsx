import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  let timeline = [];
  const handleTimeline = (status, name) => {
    const title = `${status} with ${name}`;
    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
    timeline.push({ status, title, currentDate });
    toast.success(`Successfully ${status} with ${name}`);
  };

  const data = {
    timeline,
    handleTimeline,
  };

  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;
