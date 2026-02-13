import { PageTransition } from "../motion/PageTransition";
import { HomeHero } from "./home/components/HomeHero";
import { HomeFeatureCard } from "./home/components/HomeFeatureCard";
import { HomeStats } from "./home/components/HomeStats";
import { FileEdit, Zap, ShieldCheck } from "lucide-react";

export function HomePage() {
  return (
    <PageTransition>
      <div className="page overflow-x-hidden">
        {/* Ambient Background Glows */}
        <div className="ambient-bg" />

        {/* Hero Section */}
        <HomeHero />

        {/* Feature Cards Section */}
        <section className="space-y-4">
          <HomeFeatureCard
            icon={FileEdit}
            title="Paste Anything"
            description="Company names, email addresses, domains, or messy unstructured text — we extract what matters."
            delay={0.4}
            iconColor="#3b82f6"
          />
          <HomeFeatureCard
            icon={Zap}
            title="Instant Scoring"
            description="Each lead is scored by fit signals, risk signals, and purchase likelihood — with clear rationale."
            delay={0.5}
            iconColor="#22d3ee"
          />
          <HomeFeatureCard
            icon={ShieldCheck}
            title="Evidence-Backed"
            description="Every score comes with extracted evidence so you know exactly why a lead fits — or doesn't."
            delay={0.6}
            iconColor="#fbbf24"
          />
        </section>

        {/* Quick Stats Section */}
        <HomeStats />
      </div>
    </PageTransition>
  );
}
