"use client";

import { useEffect, useMemo, useState } from "react";

const MIN = 47;
const MAX = 53;

export default function LoadingExperience() {
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= MAX ? MIN : prev + 1));
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  const values = useMemo(
    () => Array.from({ length: MAX - MIN + 1 }, (_, index) => MIN + index),
    []
  );

  return (
    <main className="loading-page">
      <div className="loading-caption">
        <p>Please hold on while Wavy gets</p>
        <p>a little glam makeover! ✨</p>
      </div>

      <div
        className="loading-stack"
        aria-live="polite"
        aria-label={`Loading ${progress}%`}
      >
        {values.map((value) => {
          const isActive = value === progress;

          return (
            <div
              key={value}
              className={`loading-node ${isActive ? "loading-node--active" : ""}`}
            >
              {value}
            </div>
          );
        })}
      </div>
    </main>
  );
}
