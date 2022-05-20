import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { StoreContext } from './store/context';
import  Header from './components/Header'
import Banner from './components/Banner';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurServicesPage from './pages/OurServicesPage';
import ProductPage from './pages/ProductPage';
import ItemPage from './pages/ItemPage';
import ContactsPage from './pages/ContactsPage';
import FaqPage from './pages/FaqPage';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';


function App() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const { data } = await axios.get('http://localhost:3001/products');
    setProducts(data)
  };

  useEffect(() =>{
    fetchProduct();
  }, [])

  const storeState = {
    products: products,
    setProducts: setProducts,
  }
  return (
    <div className="App">
      <StoreContext.Provider value={storeState}>
        <Header />
        <Banner />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/services' element={<OurServicesPage/>} />
          <Route path="/products/:name" element={<ProductPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path='/checkout' element={<CheckoutPage/>} />
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>} />
          <Route path='/faq' element={<FaqPage/>} />
        </Routes>
      </StoreContext.Provider>

    </div>
  );
}

export default App;
