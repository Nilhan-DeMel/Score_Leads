import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  InputIcon,
  ResultsIcon,
  UserIcon,
  HistoryIcon,
} from "../icons/NavIcons";

export function BottomNav() {
  const items = [
    { to: "/", icon: HomeIcon, label: "Home" },
    { to: "/score", icon: InputIcon, label: "Score" },
    { to: "/results", icon: ResultsIcon, label: "Last" },
    { to: "/history", icon: HistoryIcon, label: "History" },
    { to: "/profile", icon: UserIcon, label: "Profile" },
  ];

  return (
    <nav className="bottom-nav">
      <div className="flex justify-around items-center h-full px-2">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 flex-1 py-1 transition-all duration-300 ${
                isActive
                  ? "text-[var(--color-accent)] transform scale-110"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              }`
            }
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium tracking-wide">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
