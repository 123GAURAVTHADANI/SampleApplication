// custom hook

import { useEffect, useState } from "react";
import axios from "axios";
export function useFetch(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return products;
}
