import { useEffect, useState } from "react";

const useRetrieveFromLocalStorage = (key: string): any => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(key));

    if (items.length > 0) {
      setData(items);
    }
  }, []);

  return data;
};

export default useRetrieveFromLocalStorage;
