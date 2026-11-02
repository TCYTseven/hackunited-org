import { ArrowUpRight } from "lucide-react";
import { impactHighlights } from "./data";

/** Impact figures: a label, the number, and one line of context each. */
export default function ImpactBoard() {
  return (
    <div className="hu-board">
      {impactHighlights.map((item) => (
        <article key={item.label} className="hu-board-cell nb" data-drop>
          <h3 className="hu-board-label hu-mono">{item.label}</h3>
          <p className="hu-board-num">{item.value}</p>
          <p className="hu-board-detail">{item.detail}</p>
        </article>
      ))}
      <a
        href="https://fund.hackunited.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="hu-board-cell hu-board-fund nb nb-alt nb-hover"
        data-drop
      >
        <div className="hu-board-head">
          <h3 className="hu-board-label hu-mono">United Fund</h3>
          <span className="hu-board-link">
            Learn more
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="hu-board-num">$50–500</p>
        <p className="hu-board-detail">Small grants so student projects can ship past the prototype.</p>
      </a>
    </div>
  );
}
