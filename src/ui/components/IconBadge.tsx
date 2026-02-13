import React from "react";

interface IconBadgeProps {
  icon: React.ElementType;
  size?: number;
  color?: string;
  className?: string;
}

export function IconBadge({
  icon: Icon,
  size = 20,
  color = "var(--color-accent)",
  className = "",
}: IconBadgeProps) {
  return (
    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 ${className}`}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
    >
      <Icon size={size} color={color} />
    </div>
  );
}
