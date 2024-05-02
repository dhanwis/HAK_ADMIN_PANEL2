import './App.css';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import SideNav from './components/SideNav';
import ThemeSettings from './components/ThemeSettings';
import ThemeSettingsAndNichesButtons from './components/ThemeSettingsAndNichesButtons';
import Dashboard from './pages/Dashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductAdmin from './pages/ProductAdmin';
import OrderAdmin from './pages/OrderAdmin';
import SalesAdmin from './pages/SalesAdmin';


function App() {
  return (
    <div className="App">
      
      

      <Router>
        <SideNav/>
        

        <Routes>
          <Route path="/" element={<Dashboard />} />

          

          <Route path="/product-list" element={<ProductList/>} />
          
          <Route path="/product-admin" element={<ProductAdmin/>} />
          <Route path="/order-admin" element={<OrderAdmin/>} />
          <Route path="/sales-admin" element={<SalesAdmin/>} />
        </Routes>
      
      <Footer/>
      <ThemeSettings/>

      <ThemeSettings/>
      <ThemeSettingsAndNichesButtons/>
      <SearchModal/>
    </Router>
    

      
    </div>
  );
}

export default App;
