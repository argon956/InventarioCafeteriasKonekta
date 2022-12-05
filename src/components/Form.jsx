import { useState, useEffect } from "react";
import Alert from "./Alert";
import useProducts from "../hooks/useProducts";

const Form = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [id, setId] = useState(null);

  const [alert, setAlert] = useState({});

  const { saveProduct, product } = useProducts();

  useEffect(() => {
    if (product?.name) {
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.stock);
      setId(product._id);
    }
  }, [product]);

  const throwAlert = (msg, error) => {
    setAlert({
      msg,
      error,
    });
    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, price, category, stock].includes("")) {
      throwAlert("Todos los campos son obligatorios", true);
      return;
    }

    if (isNaN(price) || isNaN(stock) || stock.includes(".")) {
      throwAlert(
        "Alguno de los campos numéricos (precio y stock) tiene valor incorrecto",
        true
      );
      return;
    }

    saveProduct({ name, price, category, stock, id });
    setName("");
    setPrice("");
    setCategory("");
    setStock("");
    setId("");

    throwAlert("Producto Guardado Correctamente");
  };

  const { msg } = alert;
  return (
    <>
      <h2 className="font-black text-3xl text-center">
        Administración de Productos
      </h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Añade {""}
        <span className="text-indigo-600 font-bold">Productos</span> con el
        siguiente formulario
      </p>

      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-gray-700 uppercase font-bold">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre del producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="price" className="text-gray-700 uppercase font-bold">
            Precio
          </label>
          <input
            id="price"
            type="text"
            placeholder="Precio del producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="category"
            className="text-gray-700 uppercase font-bold"
          >
            Categoría
          </label>
          <input
            id="category"
            type="text"
            placeholder="Categoría del producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="stock" className="text-gray-700 uppercase font-bold">
            Stock
          </label>
          <input
            id="stock"
            type="text"
            placeholder="Stock inicial del producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={id ? "Guardar Cambios" : "Agregar Producto"}
        />
      </form>

      {msg && <Alert alert={alert} />}
    </>
  );
};

export default Form;
