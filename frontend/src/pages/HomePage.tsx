import React, { useRef } from "react";
import ThemeButton from "../components/theme/ThemeButton";
import { Sidebar } from "../components/sidebar";

const HomePage: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full h-screen grid grid-cols-[max-content_auto] p-2 relative overflow-hidden">
      <Sidebar sidebarRef={sidebarRef} />
      <div
        ref={mainRef}
        className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-2"
      >
        <header className="flex w-full h-12 border-b border-zinc-400 dark:border-zinc-300 pb-2">
          <div className="flex justify-end items-center gap-2">
            <ThemeButton />
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomePage;
