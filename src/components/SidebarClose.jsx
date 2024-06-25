import React, { useContext } from "react";
import { AppContex } from "./AppContex";

const SidebarClose = ({ children, className }) => {
  const { setIsOpen } = useContext(AppContex);
  return (
    <div className={className} onClick={() => setIsOpen(false)}>
      {children}
    </div>
  );
};

export default SidebarClose;
