import { useEffect } from "react";

const useSetLocalStorage = (key: string, data: any): void => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, []);
};

export default useSetLocalStorage;
