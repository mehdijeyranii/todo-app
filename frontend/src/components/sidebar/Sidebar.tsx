import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ResizableHandle from "./ResizableHandle";
import SidebarHeader from "./SidebarHeader";
import SidebarNavigation from "./SidebarNavigation";
import SidebarDropdown from "./SidebarDropdown";

type SidebarProps = {
  sidebarRef: React.RefObject<HTMLDivElement | null>;
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarRef }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  // const [isOpenSlider, setIsOpenSlider] = useState(true);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const isOpenSidebar = true;

  const [minWidth, maxWidth, defaultWidth] = [300, 450, 350];

  const [width, setWidth] = useState<number>(() => {
    const savedWidth = localStorage.getItem("sidebarWidth");
    return savedWidth ? parseInt(savedWidth) : defaultWidth;
  });

  return (
    <div ref={sidebarRef} className="flex items-stretch">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isOpenSidebar ? width / 16 + "rem" : 0,
          opacity: isOpenSidebar ? 1 : 0,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className={`bg-zinc-100 dark:bg-zinc-900 rounded-lg ${
          isOpenSidebar && "p-2"
        }`}
      >
        <div className="content w-full h-full overflow-y-auto p-2 flex flex-col justify-between items-stretch">
          <div className="content-top divide-y divide-zinc-300 dark:divide-zinc-700 space-y-4">
            <SidebarHeader />
            <SidebarNavigation />
            <SidebarDropdown
              dropdownRef={dropdownRef}
              isOpenDropdown={isOpenDropdown}
              setIsOpenDropdown={setIsOpenDropdown}
            />
          </div>
          <div className="content-bottom">test</div>
        </div>
      </motion.div>

      {isOpenSidebar && (
        <ResizableHandle
          minWidth={minWidth}
          maxWidth={maxWidth}
          width={width}
          setWidth={setWidth}
          sidebarRef={sidebarRef}
        />
      )}
    </div>
  );
};

export default Sidebar;
