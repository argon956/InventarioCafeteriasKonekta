import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Sales from "./pages/Sales";
import { ProductsProvider } from "./context/ProductsProvider";
import AdminRoute from "./layouts/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<AdminRoute />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/sales" element={<Sales />} />
          </Route>
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
