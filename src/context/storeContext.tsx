import React, { useEffect, createContext } from "react";
import useRetrieveFromLocalStorage from "../hooks/useRetrieveFromLocalStorage";
import { type Products } from "../types";

interface StoreProviderProps {
  children: JSX.Element;
}

interface StoreContextProps {
  storeItems: Products;
  setStoreItems: (item: Products) => void;
}

export const StoreContext = createContext<StoreContextProps>({
  storeItems: [],
  setStoreItems: () => {},
});

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
  const [storeItems, setStoreItems] = useRetrieveFromLocalStorage("store");

  useEffect(() => {
    if (storeItems.length > 0)
      localStorage.setItem("store", JSON.stringify(storeItems));
  }, [storeItems]);

  return (
    <StoreContext.Provider value={{ storeItems, setStoreItems }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
