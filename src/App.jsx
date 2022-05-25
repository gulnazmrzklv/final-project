import { Routes, Route } from 'react-router-dom';
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
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) ?? []
    );


  const fetchAllData = async () => {
    const [ resProducts ] = await Promise.all([
      axios.get('http://localhost:3001/products')])
    setProducts(resProducts.data)
  };

  useEffect(() =>{
    fetchAllData();
  }, []);

  const addToCart = (newProduct) => {
    let product = cart.find((el) => el.id ===newProduct.id);

    if(product) {
      product.qty++
      setCart([...cart]);
    } else {
      product = {...newProduct, qty: 1}
      setCart([...cart,product]);
    }
  };
  const changeProductQty = (id, value) => {
    const product = cart.find((el) => el.id === id);

    if(product) {
      product.qty += value
      setCart([...cart]);
    }
  }

  const deleteFromCart = (id) => {
    setCart(cart.filter((product)=> product.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const storeState = {
    products,
    setProducts,
    addToCart,
    cart,
    changeProductQty,
  };
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
