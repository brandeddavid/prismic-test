import { useEffect, useState } from "react";

const useRetrieveFromLocalStorage = (key: string): any => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items: string | null = localStorage.getItem(key);

    if (items !== null) {
      setData(JSON.parse(items));
    }
  }, []);

  return [data, setData];
};

export default useRetrieveFromLocalStorage;
