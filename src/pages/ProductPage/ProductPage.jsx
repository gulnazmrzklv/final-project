import Product from '../../components/Product/Product.jsx';
import css from './product-page.module.css'
import clsx from 'clsx';


function ProductPage(){
  return(
    <div className={clsx('container', 'css.category')}>
      <div className={css.products}></div>
      <div className={css.search}></div>
    </div>
  )
}

export default ProductPage;