import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Chevron from '../../assets/icons/Chevron';

const MiniDropdown = ({
  title,
  onClick,
  collapsed,
  children,
  nonCollapsed = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const toggleDropdown = () => {
    if (nonCollapsed) return;
    setIsCollapsed(!isCollapsed);
    onClick; // You might want to call the onClick function if needed.
  };

  return (
    <div className="relative w-full flex flex-col gap-2">
      <ul className="relative w-full rounded-full hover:bg-transparent transition-all ease-in-out duration-150">
        <motion.li
          initial={{ top: isCollapsed ? 0 : -3 }}
          animate={{ top: isCollapsed ? 0 : 0 }}
          exit={{ top: -3 }}
          className="w-full p-2 flex gap-2 items-center rounded text-blue-950 text-start bg-[#f4e8e1] hover:top-0 cursor-pointer transition-all ease-in-out duration-150"
          onClick={toggleDropdown}
        >
          <Chevron
            className={`transition-all ease-in-out duration-150 ${
              isCollapsed ? 'transform rotate-0' : 'transform -rotate-90'
            }`}
          />
          {title}
        </motion.li>
      </ul>
      {nonCollapsed ? null : (
        <AnimatePresence>
          {!isCollapsed ? null : (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full rounded-md shadow-lg"
            >
              <div className="p-2">{children}</div>
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default MiniDropdown;
