import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement<{ onClose?: () => void }>;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
}) => {
  if (!isOpen) return null;

  return (
    <Backdrop onClose={onClose}>
      <motion.div
        initial={{ opacity: 0, y: +50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: +50, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`bg-zinc-300 dark:bg-zinc-900 border-[1px] dark:border-zinc-600 p-2 rounded-lg w-11/12 max-w-md shadow-lg shadow-zinc-950 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { onClose })
        )}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
