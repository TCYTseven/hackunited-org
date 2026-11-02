"use client";

import { useState } from "react";
import { goalPillars } from "./data";

/**
 * Three goals as side-by-side panels. The one under the pointer (or with
 * keyboard focus) widens to show its full description; on small screens they
 * simply stack.
 */
export default function GoalPanels() {
  const [open, setOpen] = useState(0);

  return (
    <div className="hu-goals">
      {goalPillars.map((goal, i) => (
        <button
          key={goal.title}
          type="button"
          className="hu-goal nb"
          data-num={`0${i + 1}`}
          data-open={open === i || undefined}
          aria-expanded={open === i}
          onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(i)}
          onFocus={() => setOpen(i)}
          onClick={() => setOpen(i)}
          data-drop
        >
          <span className="hu-goal-num hu-mono">0{i + 1}</span>
          <span className="hu-goal-title">{goal.title}</span>
          <span className="hu-goal-body">
            <span>{goal.description}</span>
          </span>
          <span className="hu-goal-bar" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
