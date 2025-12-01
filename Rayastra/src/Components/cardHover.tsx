import { HoverEffect } from "../ui/card-hover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Verified News Only",
    description:
      "Every story you see is double-checked, fact-verified, and sourced from trusted outlets — no fake news, no misinformation, no agenda.",
  },
  {
    title: "All Formats in One Place",
    description:
      "Short news, videos, long reads, explainers, and trending reels — consume news in the format you enjoy most, without switching apps.",
  },
  {
    title: "Personalized News Feed",
    description:
      "A smart, AI-powered feed tailored to your interests. Get updates on the topics you care about — nothing more, nothing less.",
  },
  {
    title: "Daily Morning Briefing",
    description:
      "Wake up to a crisp, 2-minute scroll summarizing everything important that happened overnight — start your day fully informed.",
  },
  {
    title: "Breaking News Alerts",
    description:
      "Real-time push notifications for major events, emergencies, and trending headlines — always stay ahead of the news curve.",
  },
  {
    title: "Earn by Uploading Content",
    description:
      "Share news, stories, opinions, or local updates — and get paid for the engagement your content receives. Creators earn real money by contributing to the community.",
  },
];
