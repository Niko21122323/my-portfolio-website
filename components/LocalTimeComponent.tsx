"use client";

import { useEffect, useState } from "react";

const LocalTimeComponent = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <span>--:-- --</span>;
  }

  return <span>{time}</span>;
};

export default LocalTimeComponent;
