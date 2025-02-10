import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Sidebar } from "../components/sidebar";
import React, { useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-screen h-screen">
      <PanelGroup
        autoSaveId="sidebarWidth"
        direction="horizontal"
        className="w-full h-full p-1 flex justify-start items-center"
      >
        <Panel
          defaultSize={20}
          minSize={16}
          maxSize={25}
          className="bg-zinc-200 dark:bg-zinc-900 h-full w-full rounded-lg p-2"
        >
          <Sidebar />
        </Panel>

        <PanelResizeHandle
          className={`w-1 transition-all duration-300 h-[98%] rounded-full ${
            isDragging ? "bg-zinc-600 dark:bg-zinc-700" : "bg-transparent"
          } cursor-ew-resize`}
          onDragging={(dragging) => setIsDragging(dragging)}
        />

        <Panel className="bg-zinc-200 dark:bg-zinc-900 h-full w-full rounded-lg p-2">
          {children}
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default MainLayout;
