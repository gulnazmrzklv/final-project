import clsx from 'clsx';
import { ReactComponent as LikeIcon } from '../../assets/like.svg';
import { ReactComponent as ToCartIcon } from '../../assets/tocart.svg';
import { ReactComponent as LikedIcon } from '../../assets/liked.svg';
import css from './product.module.css';


function Product({IsLiked, title, price, text, image}) {
  return(
    <article className={css.card}>
      <img src={image} alt="" className={css.image}/>
      <div className={css.discription}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>{text}</p>
        <div className={css.action}>
          <p className={css.price}>$ {price}</p>
          <button className={css.likebtn}>{IsLiked ? <LikedIcon/>:<LikeIcon/>}</button>
          <button className={css.incartbtn}><ToCartIcon /></button>
        </div>
      </div>
    </article>
  );
}

export default Product;