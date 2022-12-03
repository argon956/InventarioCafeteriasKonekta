import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import { ProductsProvider } from "./context/ProductsProvider";
import AdminRoute from "./layouts/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes>
          <Route path="/admin" element={<AdminRoute />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
