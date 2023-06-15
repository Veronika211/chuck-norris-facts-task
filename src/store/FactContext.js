import React, { createContext, useState } from "react";

export const FactContext = createContext();

export const FactProvider = ({ children }) => {
  const [facts, setFacts] = useState([]);

  const updateFacts = (newFacts) => {
    setFacts(newFacts);
  };

  return (
    <FactContext.Provider value={{ facts, updateFacts }}>
      {children}
    </FactContext.Provider>
  );
};
