import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import { LandingPage } from './components/LandingPage.jsx'
import Nav from "./components/Nav.jsx";
import Cart from './components/Cart.jsx';
import { CartContext } from './context/CartContext.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import ProductsContext from './context/ProductsContext.jsx';
import products from './data/products.js';
import { useState } from 'react';
import AdminPage from './components/AdminPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import AdminProducts from './components/AdminProducts.jsx';
import NotFound from './components/NotFound.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const hideNav = location.pathname === "/admin";
  return (
  
    <>
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={{cartItems, setCartItems}}>
      <div>
        {!hideNav && <Nav />}
      </div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<LandingPage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/category/:name' element={<CategoryPage/>}/>
        
        <Route path='/admin' element={<AdminPage/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='products' element={<AdminProducts/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </CartContext.Provider>
    </ProductsContext.Provider>
    </>
  
  )
}

export default App
