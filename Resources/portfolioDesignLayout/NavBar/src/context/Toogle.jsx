import { createContext, useState } from "react";

const ToogleContext = createContext({});

export const ToogleProvider = ({ children }) => {
  const [toogle, setToogle] = useState(false);
  return (
    <ToogleContext.Provider value={{ toogle, setToogle }}>
      {children}
    </ToogleContext.Provider>
  );
};

export default ToogleContext;
