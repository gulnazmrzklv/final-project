//import Product from '../../components/Product/Product.jsx';
import css from './product-page.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useStore } from '../../store/context';
import axios from 'axios';
import Product from '../../components/Product/Product';
import { Link } from 'react-router-dom';

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
    <div className={clsx(css.category, 'container')}>
      <div className={css.items}>{products.map((product)=>(
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
      <div className={css.search}></div>
    </div>
  )
}

export default ProductPage;