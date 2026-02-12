import { NavLink } from "react-router-dom";
import { HomeIcon, InputIcon, ResultsIcon } from "../icons/NavIcons";

const navItems = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/input", label: "Score", icon: InputIcon },
  { to: "/results", label: "Results", icon: ResultsIcon },
] as const;

export function BottomNav() {
  return (
    <nav className="nav-bottom glass" aria-label="Main navigation">
      <div className="flex items-center justify-around">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
