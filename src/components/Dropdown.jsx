import React from 'react';
import { ReactComponent as ChevronSvg } from '../assets/icons/chevron.svg';

const Dropdown = ({ title, onClick, collapsed, children }) => {
  return (
    <div className="relative w-full flex flex-col gap-2">
      <div
        className="w-full p-3 rounded-full bg-primary-100 text-blue-950 text-center hover:bg-primary-200 cursor-pointer border-2 border-black"
        onClick={onClick}
      >
        <h3 className="font-semibold text-xl">{title}</h3>
      </div>
      <div
        className={`${
          collapsed ? 'min-h-[100px] bg-white shadow-lg' : 'min-h-0 shadow-none'
        } w-full rounded-md shadow-lg transition-all ease-in-out duration-500`}
      >
        <div className="w-full p-2">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
