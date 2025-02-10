import UserImage from "../../assets/images/user.png";
import { Bell, PanelLeftCloseIcon } from "lucide-react";

const SidebarHeader = () => (
  <>
    <div className="w-full h-10 flex justify-between items-center border-b border-zinc-500 dark:border-zinc-300 pb-2">
      <div className="flex justify-start items-center gap-2">
        <img className="size-8 rounded-full" src={UserImage} alt="" />
        <h3 className="truncate text-zinc-800 dark:text-zinc-300 text-sm font-bold">
          Mehdi Jeyrani
        </h3>
      </div>
      <div className="flex justify-end items-center gap-4">
        <button className="relative">
          <Bell size={20} />
          <span className="size-2 rounded-full bg-rose-500 absolute top-0 right-0"></span>
        </button>
        <button>
          <PanelLeftCloseIcon size={20} />
        </button>
      </div>
    </div>
  </>
);

export default SidebarHeader;
