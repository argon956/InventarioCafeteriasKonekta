import { useState } from "react";
import useProducts from "../hooks/useProducts";

const Product = ({ product, view, alert }) => {
  const { setEdit, saveProduct, deleteProduct } = useProducts();

  const { name, price, category, stock, createdDate, _id } = product;

  const [sellAmount, setSellAmount] = useState(1);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat("es-ES", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(newDate);
  };

  const sellProduct = () => {
    if (sellAmount < 1 || sellAmount === "") {
      alert("Introduzca una cantidad válida", true);
      return;
    }

    const newStock = stock - sellAmount;

    console.log("newStock: " + newStock);

    if (newStock < 0) {
      alert("La cantidad a vender supera el stock disponible", true);
    } else {
      saveProduct({
        name,
        price,
        category,
        stock: newStock,
        createdDate,
        id: _id,
      });
      alert("Venta realizada correctamente");
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-700 my-2">
        Nombre: {""}
        <span className="font-normal normal-case text-black">{name}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Precio: {""}
        <span className="font-normal normal-case text-black">{price}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Categoria: {""}
        <span className="font-normal normal-case text-black">{category}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Stock: {""}
        <span className="font-normal normal-case text-black">{stock}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Fecha de adición: {""}
        <span className="font-normal normal-case text-black">
          {formatDate(createdDate)}
        </span>
      </p>
      <div className="flex justify-between my-5">
        {view !== "sales" ? (
          <>
            <button
              type="button"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold  rounded-lg"
              onClick={() => setEdit(product)}
            >
              Editar
            </button>
            <button
              type="button"
              className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold  rounded-lg"
              onClick={() => deleteProduct(_id)}
            >
              Eliminar
            </button>
          </>
        ) : (
          <>
            <div>
              <label className="font-bold uppercase text-indigo-700 my-2">
                Cantidad a vender: {""}
              </label>
              <input
                type="number"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={sellAmount}
                onChange={(e) => setSellAmount(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold  rounded-lg"
              onClick={() => sellProduct()}
            >
              Vender
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
