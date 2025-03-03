import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 md:p-12 flex-col md:flex-row md:flex justify-start md:justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="border border-white text-white font-BOLD rounded-md w-auto pt-1 pb-1 pl-3 pr-3">A</div>
          <div className="flex font-bold text-xs md:text-sm border-b-2 border-white pt-1 md:pt-2 pb-1">
            <div>ADELISO</div>
            <div>&nbsp;</div>
            <div>FORMENTERA JR</div>
          </div>
        </div>
        <p className="text-slate-600 text-xs md:text-base mt-4 md:mt-0">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;