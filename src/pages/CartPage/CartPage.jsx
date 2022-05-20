import css from'./cart-page.module.css'
import clsx from 'clsx';

const CartPage = () => {
  return (
    <div className={clsx("container",css.page)}>
      <h1 className="page-title">Shopping Cart</h1>
      <div className= {css.content}>
        <div className={css.cart}>
          <div className={clsx(css.cartHead, css.cartRow)}>
            <p>Item</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
          </div>
          <div  className={clsx(css.cartItem, css.cartRow)}>
            <div className={css.itemImage}>
              <img className={css.image} src="https://www.dairyfarmers.com.au/wp-content/uploads/2021/07/DF_ActivePackshot-1.png" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing nesciunt sunt esse voluptatem nobis vero, commodi consequuntur rerum iste velit quia pariatur ratione, et nihil?</p>
            </div>
            <p>$9</p>
            <input type="number" value={2} />
            <p>$18</p>
            <div>x</div>
          </div>
          <div className={clsx(css.cartItem, css.cartRow)}>
            <div className={css.itemImage}>
              <img className={css.image} src="https://www.dairyfarmers.com.au/wp-content/uploads/2021/07/DF_ActivePackshot-1.png" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing nesciunt sunt esse voluptatem nobis vero, commodi consequuntur rerum iste velit quia pariatur ratione, et nihil?</p>
            </div>
            <p>$9</p>
            <input type="number" value={2} />
            <p>$18</p>
            <div>x</div>
          </div>
          <div className={clsx(css.cartItem, css.cartRow)}>
            <div className={css.itemImage}>
              <img className={css.image} src="https://www.dairyfarmers.com.au/wp-content/uploads/2021/07/DF_ActivePackshot-1.png" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing nesciunt sunt esse voluptatem nobis vero, commodi consequuntur rerum iste velit quia pariatur ratione, et nihil?</p>
            </div>
            <p>$9</p>
            <input type="number" value={2} />
            <p>$18</p>
            <div>x</div>
          </div>
        </div>

        <div className={css.summary}>
            <h3>Check Out</h3>
            <div className={css.summaryItem}>
              <p>Total before discount</p>
              <p>$58.00</p>
            </div>
            <div className={css.summaryItem}>
              <p>Discount</p>
              <p>-10%</p>
            </div>
            <div className={css.summaryItem}>
              <p>Total</p>
              <p>$52.20</p>
            </div>
        </div>
      </div>
      <div className={css.cartActions}>
        <button className='btn btn--outline'>Continue</button>
        <button className='btn'>Clear</button>
        <button className='btn'>Checkout</button>
      </div>
    </div>
  )
}

export default CartPage;