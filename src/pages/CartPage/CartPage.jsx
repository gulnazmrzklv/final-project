import css from'./cart-page.module.css'

const CartPage = () => {
  return (
    <div className="container">
      <h1 className="page-title">Shopping Cart</h1>
      <div className= {css.content}>
        <div className={css.cart}></div>
        <div className={css.summary}></div>
      </div>
      <div className={css.support}></div>

    </div>
  )
}

export default CartPage;