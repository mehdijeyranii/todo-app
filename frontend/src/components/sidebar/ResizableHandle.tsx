import React, { useCallback, useEffect, useRef } from "react";

interface ResizableHandleProps {
  minWidth: number;
  maxWidth: number;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  sidebarRef: React.RefObject<HTMLDivElement | null>;
}

const ResizableHandle: React.FC<ResizableHandleProps> = ({
  minWidth,
  maxWidth,
  width,
  setWidth,
  sidebarRef,
}) => {
  const isResized = useRef(false);
  const handleRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResized.current || !sidebarRef) return;

      setWidth((prevWidth) => {
        const newWidth = prevWidth + e.movementX;
        return newWidth >= minWidth && newWidth <= maxWidth
          ? newWidth
          : prevWidth;
      });

      e.preventDefault();
    },
    [minWidth, maxWidth, setWidth, sidebarRef]
  );

  const handleMouseUp = useCallback(() => {
    isResized.current = false;
    document.body.style.cursor = "default";

    if (handleRef.current) {
      handleRef.current.style.opacity = "0";
    }

    if (sidebarRef.current) {
      sidebarRef.current.style.pointerEvents = "auto";
    }

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove, sidebarRef]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      isResized.current = true;
      document.body.style.cursor = "col-resize";

      if (handleRef.current) {
        handleRef.current.style.opacity = "1";
      }

      if (sidebarRef.current) {
        sidebarRef.current.style.pointerEvents = "none";
      }

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      e.preventDefault();
    },
    [handleMouseMove, handleMouseUp, sidebarRef]
  );

  useEffect(() => {
    localStorage.setItem("sidebarWidth", width.toString());
  }, [width]);

  return (
    <div
      ref={handleRef}
      className="w-[3px] mx-[2px] rounded-full h-[98%] self-center bg-zinc-500 dark:bg-zinc-300 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-col-resize"
      onMouseDown={handleMouseDown}
    ></div>
  );
};

export default ResizableHandle;
