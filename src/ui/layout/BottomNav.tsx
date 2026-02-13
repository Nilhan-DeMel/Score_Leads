import { NavLink } from "react-router-dom";
import { Home, Target, BarChart3, History, UserCircle2 } from "lucide-react";

export function BottomNav() {
  const items = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/score", icon: Target, label: "Score" },
    { to: "/results", icon: BarChart3, label: "Last" },
    { to: "/history", icon: History, label: "History" },
    { to: "/profile", icon: UserCircle2, label: "Profile" },
  ];

  return (
    <nav className="bottom-nav">
      <div className="flex justify-around items-center w-full h-full px-4">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1.5 flex-1 min-h-[44px] transition-all duration-300 ${
                isActive ? "text-blue-400" : "text-white/40 hover:text-white/60"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`relative flex items-center justify-center transition-all duration-300 ${isActive ? "transform -translate-y-0.5" : ""}`}
                >
                  <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {isActive && (
                    <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                </div>
                <span
                  className={`text-[11px] font-bold tracking-tight transition-colors ${isActive ? "text-blue-400" : "text-white/30"}`}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
