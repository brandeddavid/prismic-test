import React, { useEffect, createContext } from "react";
import useRetrieveFromLocalStorage from "@/hooks/useRetrieveFromLocalStorage";

export const StoreContext = createContext([]);

interface StoreProviderProps {
  children: JSX.Element;
}

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
  const [storeItems, setStoreItems] = useRetrieveFromLocalStorage("store");

  useEffect(() => {
    if (storeItems.length > 0)
      localStorage.setItem("store", JSON.stringify(storeItems));
  }, [storeItems]);

  return (
    <StoreContext.Provider value={[storeItems, setStoreItems]}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
