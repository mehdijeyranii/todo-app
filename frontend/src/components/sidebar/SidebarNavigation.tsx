import {
  Calendar1,
  CalendarDays,
  CirclePlus,
  Inbox,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import SidebarLink from "./SidebarLink";

const SidebarNavigation = () => (
  <div className="pt-4">
    <nav className="flex flex-col justify-center items-stretch gap-1">
      <SidebarLink
        to="/add-tasks"
        icon={<CirclePlus size={20} strokeWidth={2} />}
        text="Add tasks"
        isPrimary
      />
      <SidebarLink to="/add-tasks" icon={<Search size={20} />} text="Search" />
      <SidebarLink to="/add-tasks" icon={<Inbox size={20} />} text="Inbox" />
      <SidebarLink
        to="/add-tasks"
        icon={<Calendar1 size={20} />}
        text="Today"
      />
      <SidebarLink
        to="/add-tasks"
        icon={<CalendarDays size={20} />}
        text="Upcoming"
      />
      <SidebarLink
        to="/add-tasks"
        icon={<SlidersHorizontal size={20} />}
        text="Filters & Labels"
      />
    </nav>
  </div>
);

export default SidebarNavigation;
