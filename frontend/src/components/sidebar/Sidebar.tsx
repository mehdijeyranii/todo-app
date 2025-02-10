import SidebarDropdown from "./SidebarDropdown";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col justify-between items-stretch gap-4">
      <div className="w-full flex flex-col divide-y-[1px] divide-zinc-700">
        <SidebarHeader />
        <SidebarLinks />
        <SidebarDropdown />
      </div>
      <div className="w-full ">Content</div>
    </div>
  );
};

export default Sidebar;
