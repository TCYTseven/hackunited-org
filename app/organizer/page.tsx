import type { Metadata } from "next";
import OrganizerPage from "./organizer-page";

export const metadata: Metadata = {
  title: "Organizer Applications | United Hacks V8",
  description:
    "United Hacks V8 organizer applications are open. Join the Marketing, R&D, Logistics & Operations, or Generalist team and help build the next United Hacks.",
  openGraph: {
    title: "United Hacks V8 Organizer Applications are OPEN!",
    description:
      "Help build the next United Hacks. Join the team behind V8 and work alongside other students to create an unforgettable hackathon experience.",
    url: "https://hackunited.org/organizer",
  },
};

export default function Page() {
  return <OrganizerPage />;
}
