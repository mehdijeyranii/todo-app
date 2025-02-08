import UserImage from "../../assets/images/user.png";
import { Bell, PanelLeftClose } from "lucide-react";

const SidebarHeader = () => (
  <div className="flex justify-between items-center">
    <div className="flex justify-start items-center gap-2">
      <img className="size-10 rounded-full" src={UserImage} alt="" />
      <h3 className="truncate text-zinc-800 dark:text-zinc-300">
        Mehdi Jeyrani
      </h3>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative size-5">
        <button className="text-zinc-500 dark:text-zinc-300">
          <Bell size={20} strokeWidth={1.25} />
        </button>
        <span className="absolute size-2 rounded-full bg-rose-500 top-0 right-0"></span>
      </div>
      <button className="text-zinc-500 dark:text-zinc-300">
        <PanelLeftClose size={20} strokeWidth={1.25} />
      </button>
    </div>
  </div>
);

export default SidebarHeader;
