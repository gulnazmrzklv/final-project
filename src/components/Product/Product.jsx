import clsx from 'clsx';
import { ReactComponent as ToCartIcon } from '../../assets/tocart.svg';
import css from './product.module.css';


function Product({title, price, text, image}) {
  return(
    <div className={css.card}>
      <img src={image} alt="" className={css.image}/>
      <div className={css.description}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>{text}</p>
        <div className={css.action}>
          <p className={css.price}>$ {price}</p>
          <button className={css.incartbtn}><ToCartIcon /></button>
        </div>
      </div>
    </div>
  );
}

export default Product;