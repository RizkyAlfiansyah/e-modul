import React from 'react';
import { ReactComponent as ChevronSvg } from '../assets/icons/chevron.svg';

const Dropdown = ({ title, onClick, collapsed, children }) => {
  return (
    <div className="relative w-full flex flex-col gap-2">
      <div className="relative w-full h-14 rounded-full bg-[#C7B5AA] hover:bg-transparent">
        <div
          className="absolute -top-3 w-full p-3 rounded-full bg-primary-200 text-blue-950 text-center hover:top-0 cursor-pointer border border-black"
          onClick={onClick}
        >
          <h3 className="font-semibold text-xl">{title}</h3>
        </div>
      </div>
      <div
        className={`${
          collapsed ? 'min-h-[100px] bg-white shadow-lg' : 'min-h-0 shadow-none'
        } w-full rounded-md shadow-lg transition-all ease-in-out duration-500`}
      >
        <div className={`${collapsed ? 'block w-full p-2' : 'w-0 hidden p-0'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
