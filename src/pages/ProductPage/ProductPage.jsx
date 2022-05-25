//import Product from '../../components/Product/Product.jsx';
import css from './product-page.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useStore } from '../../store/context';
import axios from 'axios';
import Product from '../../components/Product';
import { Link } from 'react-router-dom';
import SidebarImgUrl from '../../assets/right-sidebar.png';


function ProductPage(){
  const {products, setProducts} = useStore();
  const fetchProduct = async () => {
    const { data } = await axios.get('http://localhost:3001/products');
    setProducts(data)
  };

  useEffect(() =>{
    fetchProduct()
  }, [])

  return(
    <div className={clsx("container", css.category)}>
          <div className={css.productList}>
            {products.map((product)=>(
              <Link to={`/item/${product.id}`} key={product.id}>
                <Product 
                  image={product.image}
                  title={product.title}
                  text={product.description}
                  price={product.price}
                />
              </Link>
            ))}
          </div>
          <div className={css.sidebar}>
            <img  src={SidebarImgUrl} alt="" />
          </div>
    </div>
  )
}

export default ProductPage;