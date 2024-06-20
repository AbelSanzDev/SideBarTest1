import React, { useState } from "react";
import AppContex from "./AppContex";

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <AppContex.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </AppContex.Provider>
    </>
  );
};

export default AppProvider;
