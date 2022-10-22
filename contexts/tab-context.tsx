import { createContext, useState, ReactNode, useContext } from "react";

type TabContextType = {
  tabIndex: number;
  setTabIndex: (index: number) => void;
};

const TabIndexConextDefaultValues: TabContextType = {
  tabIndex: 0,
  setTabIndex: () => {},
};

const TabContext = createContext<TabContextType>(TabIndexConextDefaultValues);

type TabIndexProps = {
  children: ReactNode;
};

export const TabProvider = ({ children }: TabIndexProps) => {
  const [tabIndex, setIndex] = useState<number>(0);
  const setTabIndex = (index: number) => setIndex(index);
  const value = {
    tabIndex,
    setTabIndex,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export default TabContext;
