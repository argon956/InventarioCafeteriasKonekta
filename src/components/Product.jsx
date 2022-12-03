import useProducts from "../hooks/useProducts";

const Product = ({ product }) => {
  const { setEdit, deleteProduct } = useProducts();

  const { name, price, category, stock, creationDate, _id } = product;

  const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      newDate
    );
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
          {formatDate(creationDate)}
        </span>
      </p>

      <div className="flex justify-between my-5">
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
      </div>
    </div>
  );
};

export default Product;
