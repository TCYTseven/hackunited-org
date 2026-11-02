/**
 * The site read as one route: who we are, who runs it, how to join, how to
 * support it, where to follow along, and back to the start.
 */
export const route = [
  { path: "/", name: "Home", blurb: "Back to the start" },
  { path: "/team", name: "Team", blurb: "Meet the people running Hack United" },
  { path: "/apply", name: "Apply", blurb: "Volunteer roles, reviewed on a rolling basis" },
  { path: "/donate", name: "Donate", blurb: "Help cover servers, tooling, and prize pools" },
  { path: "/social", name: "Socials", blurb: "Profiles and a direct line" },
];

// Pages off the main line still lead somewhere sensible.
const offRoute: Record<string, string> = {
  "/organizer": "/apply",
  "/about": "/team",
};

const names: Record<string, string> = {
  ...Object.fromEntries(route.map((r) => [r.path, r.name])),
  "/organizer": "Organizer",
  "/about": "About",
};

export const routeName = (path: string) => names[path];

export function nextStop(path: string) {
  const target = offRoute[path];
  if (target) return route.find((r) => r.path === target)!;
  const i = route.findIndex((r) => r.path === path);
  if (i < 0) return null;
  return route[(i + 1) % route.length];
}
