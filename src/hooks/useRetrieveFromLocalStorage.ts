import { useEffect, useState } from "react";

const useRetrieveFromLocalStorage = (key: string): any => {
  const [so, setSo] = useState([]);
  let data: any = [];

  useEffect(() => {
    const items: string | null = localStorage.getItem(key);

    console.log({ items });

    if (items !== null) {
      data = [...JSON.parse(items)];

      setSo(data);
    }
  }, []);

  return [so, setSo];
};

export default useRetrieveFromLocalStorage;
