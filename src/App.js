import './App.css';
import Layout from './layout/Layout';
import Category from './pages/category/Category';
import Dashboard from './pages/dashboard/Dashboard';
import { Entry } from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
 
     
     <Layout>
     <Category/>
     </Layout>
     {/* <Entry/> */}
    </div>
  );
}

export default App;
