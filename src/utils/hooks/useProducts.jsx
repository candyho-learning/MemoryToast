import { useEffect, useState } from "react";
import api from "../api";

const useProducts = ({ keyword, category }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPaging, setNextPaging] = useState(0);
  const [shouldReset, setShouldReset] = useState(false);

  async function fetchProducts() {
    if (nextPaging === undefined) return;
    if (isLoading) return;
    setIsLoading(true);
    const response = keyword
      ? await api.searchProducts(keyword, nextPaging)
      : await api.getProducts(category, nextPaging);

    if (nextPaging === 0) {
      setProducts(response.data);
    } else {
      setProducts((prev) => [...prev, ...response.data]);
    }
    setNextPaging(response.next_paging);
    setIsLoading(false);
  }

  useEffect(() => {
    setProducts([]);
    setNextPaging(0);
    setShouldReset(true);
  }, [keyword, category]);

  useEffect(() => {
    if (!shouldReset) {
      return;
    }
    fetchProducts();
    setShouldReset(false);
  }, [shouldReset]);

  return { products, loadMoreProducts: fetchProducts, isLoading };
};

export default useProducts;
