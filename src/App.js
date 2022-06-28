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
import PrivateRoute from "./components/private-route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        
          <Routes>
            <Route path="/entry" element={<Entry />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/categories" element={<PrivateRoute><Category /></PrivateRoute>} />
            <Route path="/addcat" element={<PrivateRoute><AddCategory /></PrivateRoute>} />
            <Route
              path="/category"
              element={<PrivateRoute><CategoryLanding category="toys" desc="dna" /></PrivateRoute>}
            />
            <Route path="/addprod" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
            <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
            <Route path="/purchase" element={<PrivateRoute><OrderLanding /></PrivateRoute>} />
            <Route
              path="/product"
              element={<PrivateRoute><ProductLanding productName="megatron" /></PrivateRoute>}
            />
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
