import useProducts from "../hooks/useProducts";
import Product from "./Product";

const ProductsList = () => {
  const { products } = useProducts();
  return (
    <>
      {products.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Productos</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Productos</span>
          </p>

          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Productos</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando products {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este apartado
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ProductsList;
