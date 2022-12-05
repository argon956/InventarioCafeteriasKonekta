import Product from "../models/Product.js";

const saveProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ msg: "No Encontrado" });
  }

  if (product._id.toString() !== id.toString()) {
    return res.json({ msg: "Accion no válida" });
  }

  res.json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ msg: "No Encontrado" });
  }

  if (product._id.toString() !== id.toString()) {
    return res.json({ msg: "Accion no válida" });
  }

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  product.category = req.body.category || product.category;
  product.stock = req.body.stock || product.stock;

  try {
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ msg: "No Encontrado" });
  }

  if (product._id.toString() !== id.toString()) {
    return res.json({ msg: "Accion no válida" });
  }

  try {
    await product.deleteOne();
    res.json({ msg: "Producto Eliminado" });
  } catch (error) {
    console.log(error);
  }
};

export { saveProduct, getProducts, getProduct, updateProduct, deleteProduct };
