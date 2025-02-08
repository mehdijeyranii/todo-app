import {
  CheckCheck,
  ChevronDown,
  FolderClock,
  Pin,
  Plus,
  Rocket,
  Timer,
} from "lucide-react";
import SidebarLink from "./SidebarLink";

interface SidebarDropdownProps {
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  isOpenDropdown: boolean;
  setIsOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const dropdownLinks = [
  { to: "/pin", icon: <Pin size={20} />, text: "Pinned Tasks" },
  { to: "/add-tasks", icon: <Rocket size={20} />, text: "Priority Tasks" },
  { to: "/add-tasks", icon: <Timer size={20} />, text: "Recents" },
  { to: "/add-tasks", icon: <CheckCheck size={20} />, text: "Completed Today" },
];

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
  dropdownRef,
  isOpenDropdown,
  setIsOpenDropdown,
}) => {
  const toggleDropdown = () => setIsOpenDropdown((prev) => !prev);

  return (
    <div className="pt-4">
      <div
        ref={dropdownRef}
        className="text-zinc-500 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-50/5 flex justify-between items-center p-2 rounded-lg transition-all duration-300 relative"
      >
        <div className="flex justify-start items-center gap-2">
          <FolderClock size={20} />
          <span className="font-semibold">My Tasks</span>
        </div>
        <div className="flex justify-end items-center gap-4">
          <button aria-label="Add task">
            <Plus size={20} strokeWidth={1.5} />
          </button>
          <button onClick={toggleDropdown} aria-label="Toggle dropdown">
            <ChevronDown size={20} strokeWidth={1.5} />
          </button>
        </div>
        {isOpenDropdown && (
          <div className="absolute top-12 right-0 bg-zinc-100 dark:bg-zinc-900 border-l border-zinc-400 dark:border-zinc-500 p-1 w-11/12">
            {dropdownLinks.map((link, index) => (
              <SidebarLink
                key={index}
                to={link.to}
                icon={link.icon}
                text={link.text}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarDropdown;
