import { Routes, Route } from 'react-router-dom';
import  Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurServicesPage from './pages/OurServicesPage';
import ProductPage from './pages/ProductPage/ProductPage';
import ContactsPage from './pages/ContactsPage';
import FaqPage from './pages/FaqPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/services' element={<OurServicesPage/>} />
        <Route path='/products/:name' element={<ProductPage/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/contacts' element={<ContactsPage/>} />
        <Route path='/faq' element={<FaqPage/>} />
      </Routes>
    </div>
  );
}

export default App;
