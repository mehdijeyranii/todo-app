import { CirclePlus } from "lucide-react";
import { useState } from "react";
import Modal from "../../ui/Modal";
import { AnimatePresence } from "framer-motion";

const AddModals = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <button
        className="w-full flex justify-start items-center gap-2 p-2 rounded text-rose-500 hover:bg-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 transition-all duration-150"
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        <CirclePlus size={20} />
        <span className="text-sm">Add Tasks</span>
      </button>
      <AnimatePresence>
        {isOpenModal && (
          <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
            <h2>Add Tasks</h2>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddModals;
