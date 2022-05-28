import clsx from 'clsx';
import { useParams } from 'react-router-dom'
import { useStore } from '../../store/context';
import css from './item-page.module.css'

function ItemPage() {
  const { products, addToCart } = useStore();

  const { id } = useParams();
  const currentItem = products.find((item) => item.id === +id)
  
  return (
    <div className='container'>
      <div>
        <h1 className={clsx("page-title",css.title)}>Product</h1>
        {currentItem &&(
          <div onClick={() =>addToCart(currentItem)}>
            <div className={css.box} key={currentItem?.id}>
              <img className={css.image} src={currentItem?.image} alt="" />
              <div>
                <h5 className={css.texttitle}>{currentItem?.title}</h5>
                <p className={css.text}>{currentItem?.description}</p>
                <p className={css.price}>{currentItem?.price.toFixed(2)}$</p>
                <button></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemPage;
