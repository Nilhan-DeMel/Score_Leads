import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-dvh">
      {/* Ambient background glow */}
      <div className="ambient-bg" aria-hidden="true" />

      {/* Main content */}
      <main className="relative z-10">{children}</main>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}
