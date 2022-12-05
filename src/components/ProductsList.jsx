import { useState } from "react";
import useProducts from "../hooks/useProducts";
import Alert from "./Alert";
import Product from "./Product";

const ProductsList = ({ view }) => {
  const [alert, setAlert] = useState({});

  const throwAlert = (msg, error) => {
    setAlert({
      msg,
      error,
    });
    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  const { msg } = alert;

  const { products } = useProducts();
  return (
    <>
      {products.length ? (
        <>
          {view !== "sales" ? (
            <h2 className="font-black text-3xl text-center">Listado</h2>
          ) : (
            ""
          )}

          <p className="text-xl mt-5 mb-10 text-center">
            Administra los {""}
            <span className="text-indigo-600 font-bold">Productos</span>
          </p>
          {msg && <Alert alert={alert} />}
          <div className="h-screen overflow-y-auto">
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                view={view}
                alert={throwAlert}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          {view !== "sales" ? (
            <>
              <h2 className="font-black text-3xl text-center">
                No Hay Productos
              </h2>

              <p className="text-xl mt-5 mb-10 text-center">
                Comienza agregando productos {""}
                <span className="text-indigo-600 font-bold">
                  y aparecerán en este apartado
                </span>
              </p>
            </>
          ) : (
            <>
              <p className="text-xl mt-5 mb-10 text-center">
                Agrega productos en la pestaña de {""}
                <span className="text-indigo-600 font-bold">
                  Administración, {""}
                </span>
                y aparecerán en este apartado
              </p>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductsList;
