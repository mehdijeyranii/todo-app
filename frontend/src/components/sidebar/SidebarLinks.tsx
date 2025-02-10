import React from "react";
import { NavLink } from "react-router-dom";
import {
  Calendar1,
  CalendarDays,
  Inbox,
  SlidersHorizontal,
} from "lucide-react";
import SidebarPopup from "./SidebarPopup";

interface NavItemProps {
  label: string;
  icon?: React.ReactNode;
  counter?: number;
  to: string;
}

const navItems: NavItemProps[] = [
  { icon: <Inbox size={20} />, label: "Inbox", to: "/inbox" },
  { icon: <Calendar1 size={20} />, label: "Today", counter: 5, to: "/today" },
  {
    icon: <CalendarDays size={20} />,
    label: "Upcoming",
    counter: 19,
    to: "/upcoming",
  },
  {
    icon: <SlidersHorizontal size={20} />,
    label: "Filter & Labels",
    to: "/filter",
  },
];

const NavItem: React.FC<NavItemProps> = ({ label, icon, counter, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `w-full flex justify-start items-center gap-2 p-2 rounded transition-all duration-150 ${
        isActive
          ? "text-rose-500 dark:text-rose-500 bg-rose-500/10 dark:bg-rose-500/10"
          : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
      }`
    }
  >
    {icon && <span>{icon}</span>}
    <span className="text-sm">{label}</span>
    {counter && (
      <span className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
        {counter}
      </span>
    )}
  </NavLink>
);

const SidebarLinks: React.FC = () => {
  return (
    <>
      <nav className="w-full py-2 flex flex-col gap-2">
        <SidebarPopup />
        {navItems.map((nav) => (
          <NavItem key={nav.label} {...nav} />
        ))}
      </nav>
    </>
  );
};

export default SidebarLinks;
