import ProductsList from "../components/ProductsList";

const Sales = () => {
  return (
    <>
      <h2 className="font-black text-3xl text-center">
        Venta de {""}
        <span className="text-indigo-600 font-bold">Productos</span>
      </h2>
      <ProductsList view="sales" />
    </>
  );
};

export default Sales;
