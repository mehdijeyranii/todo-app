import { AddModals, SearchModals } from "./modals";

const SidebarPopup = () => {
  return (
    <div className="flex flex-col justify-start items-stretch gap-2">
      <AddModals />
      <SearchModals />
    </div>
  );
};

export default SidebarPopup;
