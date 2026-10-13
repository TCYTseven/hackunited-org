"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

type Alum = { name: string; position: string; image: string };

const isGenerated = (src: string) => src.includes("ui-avatars.com");

export default function AlumniRoster({ members }: { members: Alum[] }) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);

  const rows = useMemo(() => {
    const q = deferred.trim().toLowerCase();
    return members
      .map((m, i) => ({ ...m, index: i + 1 }))
      .filter((m) => !q || m.name.toLowerCase().includes(q) || m.position.toLowerCase().includes(q));
  }, [deferred, members]);

  return (
    <div className="roster">
      <div className="roster-bar">
        <label htmlFor="alumni-search" className="sr-only">
          Search previous volunteers
        </label>
        <div className="roster-search">
          <Search className="h-4 w-4 shrink-0 text-fg2" aria-hidden="true" />
          <input
            id="alumni-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <p className="t-label tabular text-fg2" aria-live="polite">
          <span className="text-fg">{String(rows.length).padStart(2, "0")}</span>
          <span className="mx-1.5">/</span>
          {members.length}
        </p>
      </div>

      <ul className="roster-grid">
        {rows.map((m) => (
          <li key={`${m.name}-${m.index}`} className="roster-row">
            <span className="roster-mono" aria-hidden="true">
              {isGenerated(m.image) ? (
                m.name.charAt(0)
              ) : (
                <Image src={m.image} alt="" fill sizes="44px" className="object-cover" />
              )}
            </span>
            <span className="min-w-0 flex-1">
              <span className="roster-name">{m.name}</span>
              {m.position && <span className="roster-role">{m.position}</span>}
            </span>
            <span className="roster-index t-label tabular" aria-hidden="true">
              {String(m.index).padStart(3, "0")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
