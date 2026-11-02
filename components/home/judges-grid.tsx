import { judgeOrgs } from "./data";

/** Logo wall: each organisation on its own card. */
export default function JudgesGrid() {
  return (
    <div className="hu-judges">
      {judgeOrgs.map((org) => (
        <div key={org.alt} className="hu-judge nb" data-drop>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={org.src}
            alt={org.alt}
            loading="lazy"
            className={org.alt === "Y Combinator" ? "hu-judge-logo" : "hu-judge-logo hu-logo"}
          />
        </div>
      ))}
    </div>
  );
}
