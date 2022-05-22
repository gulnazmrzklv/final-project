import css from'./cart-page.module.css'
import clsx from 'clsx';
import { useStore } from '../../store/context';


const CartPage = () => {
  const {cart, changeProductQty} = useStore();
  return (
    <div className={clsx("container",css.page)}>
      <h1 className={clsx("page-title",css.title)}>Shopping Cart</h1>
      <div className= {css.content}>
        <div className={css.carts}>
          <div className={clsx(css.cartHead, css.cartRow)}>
            <p>Item</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
          </div>
          {cart.map((product) => (
            <div key={product.id} className={clsx(css.cartItem, css.cartRow)}>
              <div className={css.itemImage}>
                <img src={product.image} className={css.producImage} alt="" />
                <p>{product.title}</p>
              </div>
              <p>{product.price}</p>
              <input
                type="number"
                defaultValue={product.qty}
                onChange={(e)=> changeProductQty(product.id, e.target.value)}
              />
              <p>{product.price*product.qty}</p>
              <div>x</div>
            </div>
          ))}
        </div>
      </div>
      <div className={css.cartActions}>
        <button className='btn btn--outline'>Continue</button>
        <button className='btn'>Clear</button>
        <button className='btn'>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;