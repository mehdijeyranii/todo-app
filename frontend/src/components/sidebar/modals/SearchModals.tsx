import { Search } from "lucide-react";
import { useState } from "react";
import Modal from "../../ui/Modal";
import { AnimatePresence } from "framer-motion";

const SearchModals = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <button
        className="w-full flex justify-start items-center gap-2 p-2 rounded text-zinc-500 dark:text-zinc-400 hover:bg-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 transition-all duration-150"
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        <Search size={20} />
        <span className="text-sm">Search</span>
      </button>
      <AnimatePresence>
        {isOpenModal && (
          <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
            <h2>Search</h2>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchModals;
