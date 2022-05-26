import clsx from 'clsx';
import { useParams } from 'react-router-dom'
import Product from '../../components/Product';
import { useStore } from '../../store/context';
import css from './item-page.module.css'

function ItemPage() {
  const { products, addToCart } = useStore();

  const { id } = useParams();
  const currentItem = products.find((item) => item.id === +id)
  
  return (
    <div className={clsx('container', css.box)}>
      <div>
        <h1 className={clsx("page-title",css.title)}>Our products</h1>
        {currentItem &&(
          <div onClick={() =>addToCart(currentItem)}>
            <Product
              title ={currentItem?.title}
              image={currentItem?.image}
              text={currentItem?.description}
              price={currentItem?.price}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemPage;
