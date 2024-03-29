import css from'./cart-page.module.css'
import clsx from 'clsx';
import { useStore } from '../../store/context';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const {cart, changeProductQty } = useStore();
  return (
    <div className={clsx("container",css.page)}>
      <h1 className={clsx("page-title",css.title)}>Shopping Cart</h1>
      <div className={css.content}>
        <div className={css.carts}>
          <div className={clsx(css.cartHead, css.cartRow)}>
            <p>Item</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
          </div>
          {cart.map((products) => {
            console.log(products)
            console.log(products.price * products.qty)
            return (
              <div key={products.id} className={clsx(css.cartItem, css.cartRow)}>
                <div className={css.itemImage}>
                  <img src={products.image} className={css.productImage} alt=""/>
                  <p>{products.title}</p>
                </div>
                <p>{products.price.toFixed(2)}</p>
                <input className={css.qty}
                  type="number"
                  defaultValue={+products.qty}
                  onChange={(e)=> changeProductQty(products.id, +e.target.value)}
                />
                <p>{(products.price * products.qty).toFixed(2)}</p>
                <button>x</button>
              </div>
              )
          })}
        </div>
      </div>
      <div className={css.cartActions}>
        <button className='btn btn--outline'>Continue</button>
        <button className='btn'>Clear</button>
        <Link to="/checkout"><button className='btn'>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;