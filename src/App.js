import "./App.css";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCategory from "./pages/category/AddCategory";
import Category from "./pages/category/Category";
import CategoryLanding from "./pages/category/CategoryLanding";
import Dashboard from "./pages/dashboard/Dashboard";
import { Entry } from "./pages/entry/Entry.page";
import Orders from "./pages/orders/Orders";
import AddProduct from "./pages/product/AddProduct";
import ProductLanding from "./pages/product/ProductLanding";
import RegisterPage from "./pages/entry/RegisterPage";
import OrderLanding from "./pages/orders/OrderLanding";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/entry" element={<Entry />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/addcat" element={<AddCategory />} />
            <Route
              path="/category"
              element={<CategoryLanding category="toys" desc="dna" />}
            />
            <Route path="/addprod" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/purchase" element={<OrderLanding />} />
            <Route
              path="/product"
              element={<ProductLanding productName="megatron" />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
