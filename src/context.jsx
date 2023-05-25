import React, { useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [popupBar, setPopupBar] = useState(false);
  const [subHeader, setSubHeader] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <AppContext.Provider
      value={{
        popupBar,
        setPopupBar,
        subHeader,
        setSubHeader,
        hoveredIndex,
        setHoveredIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
