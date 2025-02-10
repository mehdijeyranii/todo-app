import React from "react";

interface BackdropProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Backdrop = (props: BackdropProps) => {
  const { children, onClose } = props;
  return (
    <div
      className="fixed inset-0 bg-zinc-950/50  grid place-content-center z-50"
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default Backdrop;
