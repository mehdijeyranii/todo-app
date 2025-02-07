import { useState, useEffect, useRef } from "react";

const [minWidth, maxWidth, defaultWidth] = [200, 500, 350];

export default function Sidebar() {
  const [width, setWidth] = useState<number>(() => {
    const savedWidth = localStorage.getItem("sidebarWidth");
    return savedWidth ? parseInt(savedWidth) : defaultWidth;
  });

  const isResized = useRef(false);
  const handleRef = useRef<HTMLDivElement | null>(null); // Store the handle reference

  // Handle mouse events for resizing
  const handleMouseMove = (e: MouseEvent) => {
    if (!isResized.current) return;

    setWidth((prevWidth) => {
      const newWidth = prevWidth + e.movementX / 2;
      return newWidth >= minWidth && newWidth <= maxWidth
        ? newWidth
        : prevWidth;
    });

    e.preventDefault();
  };

  const handleMouseUp = () => {
    isResized.current = false;
    if (handleRef.current) {
      // Restore the default cursor style when resizing ends
      document.body.style.cursor = "default";
    }
  };

  useEffect(() => {
    // Add mouse move and up listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Store the width in localStorage
    localStorage.setItem("sidebarWidth", width.toString());

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [width]);

  return (
    <div className="flex">
      <div
        style={{ width: `${width / 16}rem` }}
        className="bg-zinc-200 dark:bg-zinc-600 rounded-lg p-2"
      >
        Sidebar
      </div>

      {/* Handle */}
      <div
        ref={handleRef}
        className="w-2 cursor-col-resize"
        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
          isResized.current = true;
          e.preventDefault();
          if (handleRef.current) {
            handleRef.current.style.cursor = "col-resize";
          }
        }}
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          if (isResized.current) {
            // Prevent default cursor change while resizing
            e.preventDefault();
            document.body.style.cursor = "col-resize"; // Keep the cursor as col-resize
          }
        }}
      />
    </div>
  );
}
