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
  const [productMostStock, setProductMostStock] = useState({});
  const [productMostSales, setProductMostSales] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axiosClient("/products", reqConfig);
      setProducts(data);
    };
    getProducts();
  }, []);

  const saveProduct = async (product) => {
    if (product.id) {
      try {
        if (product.stock === 0) {
          await axiosClient.delete(`/products/${product.id}`, reqConfig);

          const { data } = await axiosClient.post(
            "/products",
            product,
            reqConfig
          );
          const { createdAt, updatedAt, __v, ...savedProduct } = data;
          savedProduct.createdDate = product.createdDate;
          savedProduct.reference = product.reference;

          const updatedProducts = products.map((productState) =>
            productState._id === product.id ? savedProduct : productState
          );
          setProducts(updatedProducts);
        } else {
          const { data } = await axiosClient.put(
            `/products/${product.id}`,
            product,
            reqConfig
          );

          const updatedProducts = products.map((productState) =>
            productState._id === data._id ? data : productState
          );
          setProducts(updatedProducts);
        }
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

        const { createdAt, updatedAt, __v, ...savedProduct } = data;
        setProducts([savedProduct, ...products]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const saveSale = async (sale) => {
    try {
      await axiosClient.post("/sales", sale, reqConfig);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductWithMostStock = async () => {
    try {
      const { data } = await axiosClient.get("/stats", reqConfig);
      setProductMostStock(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductWithMostSales = async () => {
    try {
      const { data } = await axiosClient.get("/sales", reqConfig);
      setProductMostSales(data[0]);
    } catch (error) {
      console.log(error);
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
        saveSale,
        getProductWithMostStock,
        productMostStock,
        getProductWithMostSales,
        productMostSales,
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
