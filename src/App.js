import './App.css';
import Layout from './layout/Layout';
import AddCategory from './pages/category/AddCategory';
import Category from './pages/category/Category';
import CategoryLanding from './pages/category/CategoryLanding';
import Dashboard from './pages/dashboard/Dashboard';
import { Entry } from './pages/entry/Entry.page';
import Orders from './pages/orders/Orders';
import AddProduct from './pages/product/AddProduct';
import ProductLanding from './pages/product/ProductLanding';

function App() {
  return (
    <div className="App">
 
     
     <Layout>
     {/* <Category/> */}
     {/* <AddCategory/> */}
     {/* <CategoryLanding category="toys" desc="dna"/> */}
     {/* <AddProduct/> */}
     {/* <ProductLanding productName="megatron"/> */}
     <Orders/>
     </Layout>
    
     {/* <Entry/> */}
    </div>
  );
}

export default App;
