import { useEffect, useState } from "react";

const useRetrieveFromLocalStorage = (key: string): any => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const items: string | null = localStorage.getItem(key);

    if (items !== null) {
      setData(JSON.parse(items));
    }
  }, []);

  return data;
};

export default useRetrieveFromLocalStorage;
