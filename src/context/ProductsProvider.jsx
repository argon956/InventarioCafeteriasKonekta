import { createContext, useState, useEffect } from "react";
import axiosClient from "../server/axios";

const ProductsContext = createContext();

const reqConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      // const { data } = await axiosClient("/products", reqConfig);
      const { data } = await axiosClient.get("/products");
      setProducts(data);
    };
    getProducts();
  }, []);

  const saveProduct = async (product) => {
    if (product.id) {
      try {
        const { data } = await axiosClient.put(
          `/products/${product.id}`,
          product,
          reqConfig
        );

        const updatedProducts = products.map((productState) =>
          productState._id === data._id ? data : productState
        );
        setProducts(updatedProducts);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await axiosClient.post(
          "/products",
          product,
          reqConfig
        );

        const { createdAt, updatedAt, __v, ...productAlmacenado } = data;
        setProducts([productAlmacenado, ...products]);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
  };

  const setEdit = (product) => {
    setProduct(product);
  };

  const deleteProduct = async (id) => {
    await axiosClient.delete(`/products/${id}`, reqConfig);

    const updatedProducts = products.filter(
      (productsState) => productsState._id !== id
    );
    setProducts(updatedProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        saveProduct,
        setEdit,
        product,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
