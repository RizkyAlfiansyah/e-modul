import React, { useState } from 'react';
import { ReactComponent as ChevronSvg } from '../../assets/icons/chevron.svg';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({ title, onClick, collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const toggleDropdown = () => {
    setIsCollapsed(!isCollapsed);
    onClick(); // You might want to call the onClick function if needed.
  };

  return (
    <div className="relative w-full flex flex-col gap-2">
      <div className="relative w-full h-12 rounded-full bg-[#C7B5AA] hover:bg-transparent transition-all ease-in-out duration-150">
        <motion.div
          initial={{ top: isCollapsed ? 0 : -3 }}
          animate={{ top: isCollapsed ? 0 : 0 }}
          exit={{ top: -3 }}
          className="absolute w-full p-3 rounded-full bg-primary-200 text-blue-950 text-center hover:top-0 cursor-pointer border border-black transition-all ease-in-out duration-150"
          onClick={toggleDropdown}
        >
          <h3 className="font-semibold text-xl">{title}</h3>
        </motion.div>
      </div>
      <AnimatePresence>
        {!isCollapsed ? null : (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full rounded-md shadow-lg bg-[#C7B5AA]"
          >
            <div className="p-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
