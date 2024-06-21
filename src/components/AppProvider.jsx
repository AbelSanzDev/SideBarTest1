import React, { useState } from "react";
import { AppContex } from "./AppContex";

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <AppContex.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </AppContex.Provider>
    </>
  );
};
