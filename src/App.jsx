import  Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import Product from './components/Product/Product'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <section>
        <h2>Our Product</h2>
        <div className='product__list'>
          <Product
              image ="https://www.dairyfarmers.com.au/wp-content/uploads/2021/07/DF_ActivePackshot-1.png"
              title ="Pure milk"
              text ="There are many variations of passages Lorem."
              price ={36.00}
              IsLiked ={false}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
