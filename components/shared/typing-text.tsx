"use client";

import React, { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  /** milliseconds between character typing */
  speed?: number;
  /** initial delay before typing starts (ms) */
  startDelay?: number;
  /** whether to show a blinking caret */
  caret?: boolean;
  /** className applied to the wrapper span */
  className?: string;
};

export function TypingText({
  text,
  speed = 80,
  startDelay = 300,
  caret = true,
  className = "",
}: TypingTextProps) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let mounted = true;
    let idx = 0;
    let timeoutId: number | undefined;
    let intervalId: number | undefined;

    timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        if (!mounted) return;
        idx += 1;
        setDisplay(text.slice(0, idx));
        if (idx >= text.length) {
          if (intervalId) window.clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      mounted = false;
      if (timeoutId) window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className} aria-label={text}>
      {display}
      {caret && <span className="typing-caret ml-1 align-baseline" aria-hidden> </span>}
    </span>
  );
}
