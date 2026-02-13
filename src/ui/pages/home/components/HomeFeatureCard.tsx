import { GlassPanel } from "../../../components/GlassPanel";
import { IconBadge } from "../../../components/IconBadge";
import type { LucideIcon } from "lucide-react";

interface HomeFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  iconColor?: string;
}

export function HomeFeatureCard({
  icon,
  title,
  description,
  delay = 0,
  iconColor = "var(--color-accent)",
}: HomeFeatureCardProps) {
  return (
    <GlassPanel delay={delay}>
      <div className="flex items-start gap-5 p-1">
        <IconBadge icon={icon} color={iconColor} className="mt-0.5" />
        <div className="flex-1">
          <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">{description}</p>
        </div>
      </div>
    </GlassPanel>
  );
}
