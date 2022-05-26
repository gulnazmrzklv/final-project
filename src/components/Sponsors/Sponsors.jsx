import css from './sponsors.module.css'
import Brand1ImgUrl from '../../assets/brand1.svg';
import Brand2ImgUrl from '../../assets/brand2.svg';
import Brand3ImgUrl from '../../assets/brand3.svg';
import Brand4ImgUrl from '../../assets/brand4.svg';
import Brand5ImgUrl from '../../assets/brand5.svg';
import Brand6ImgUrl from '../../assets/brand6.svg';
import FooterImgUrl from '../../assets/bottom-logo.png';



function Sponsors () {
  return(
    <div className='container'>
      <div className={css.brands}>
        <img className={css.brand} src={Brand1ImgUrl} alt="" />
        <img className={css.brand} src={Brand2ImgUrl} alt="" />
        <img className={css.brand} src={Brand3ImgUrl} alt="" />
        <img className={css.brand} src={Brand4ImgUrl} alt="" />
        <img className={css.brand} src={Brand5ImgUrl} alt="" />
        <img className={css.brand} src={Brand6ImgUrl} alt="" />
      </div>
      <div>
        <img className={css.imgfooter} src={FooterImgUrl} alt="" />
      </div>
    </div>
  )
}

export default Sponsors;