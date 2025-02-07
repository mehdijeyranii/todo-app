import React from "react";
import Sidebar from "../components/Sidebar";
import ThemeButton from "../components/theme/ThemeButton";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[max-content_auto] p-2">
      <Sidebar />
      <div className="bg-zinc-200 dark:bg-zinc-600 rounded-lg p-2">
        <header>
            <ThemeButton/>
        </header>
      </div>
    </div>
  );
};

export default HomePage;
