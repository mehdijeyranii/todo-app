import { ChevronDown, MonitorCog, Moon, Sun } from "lucide-react";
import { JSX, useEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../reducers/themeReducer";

const themeOptions: { mode: Theme; label: string; icon: JSX.Element }[] = [
  { mode: "system", label: "System", icon: <MonitorCog size={18} /> },
  { mode: "dark", label: "Dark", icon: <Moon size={18} /> },
  { mode: "light", label: "Light", icon: <Sun size={18} /> },
];

const ThemeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const selectedTheme = themeOptions.find((t) => t.mode === theme);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="w-32 py-2 grid grid-cols-[1fr_2fr_1fr] place-items-center gap-1 rounded-lg bg-zinc-300 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-50 px-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedTheme?.icon}
        <span className="text-left w-full font-semibold">
          {selectedTheme?.label}
        </span>
        <ChevronDown
          strokeWidth={1}
          className={`transition-transform duration-300 text-zinc-600 dark:text-zinc-400 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={20}
        />
      </button>
      {isOpen && (
        <div className="absolute bg-zinc-300 dark:bg-zinc-800 mt-2 w-40 left-0 p-2 rounded-lg flex flex-col justify-start items-start gap-2">
          {themeOptions.map(({ mode, label, icon }) => (
            <button
              key={mode}
              className="w-full flex justify-start items-center gap-2 px-2 py-2 rounded-md transition text-zinc-700 dark:text-zinc-300 hover:bg-rose-500 hover:text-zinc-50 font-semibold"
              onClick={() => {
                setTheme(mode);
                setIsOpen(false);
              }}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeButton;
