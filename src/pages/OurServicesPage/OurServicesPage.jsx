import css from './ourservices-page.module.css'
import clsx from 'clsx';
import MilkImgUrl from '../../assets/milk.svg';
import FruitImgUrl from '../../assets/fruit.svg';
import CheeseImgUrl from '../../assets/cheese.svg';
import PureImgUrl from '../../assets/pure.svg';



function OurServicesPage(){
  return(
    <div className={clsx("container",css.sevice)}>
      <div className={css.background}>
        <h1 className={clsx("page-title",css.title)}>Our Services</h1>
      </div>
      <div className={css.box}>
        <div className={css.boxItem}>
          <img className={css.img} src={MilkImgUrl} alt="" />
          <h4 className={css.boxtitle}>Milk Online Sales System.</h4>
          <p>Mauris iaculis urna eget est euismod, in auctor dui porta. Mauris non porta lacus.</p>
        </div>
        <div className={css.boxItem}>
          <img className={css.img} src={FruitImgUrl} alt="" />
          <h4 className={css.boxtitle}>Organic Fruits are Here.</h4>
          <p>Mauris iaculis urna eget est euismod, in auctor dui porta. Mauris non porta lacus.</p>
        </div>
        <div className={css.boxItem}>
          <img className={css.img} src={CheeseImgUrl} alt="" />
          <h4 className={css.boxtitle}>Soft & Hard Cheese.</h4>
          <p>Mauris iaculis urna eget est euismod, in auctor dui porta. Mauris non porta lacus.</p>
        </div>
        <div className={css.boxItem}>
          <img className={css.img} src={PureImgUrl} alt="" />
          <h4 className={css.boxtitle}>High Quality Pure Products.</h4>
          <p>Mauris iaculis urna eget est euismod, in auctor dui porta. Mauris non porta lacus.</p>
        </div>
        <div className={css.boxItem}>
          <img className={css.img} src={MilkImgUrl} alt="" />
          <h4 className={css.boxtitle}>Milk Online Sales System.</h4>
          <p>Mauris iaculis urna eget est euismod, in auctor dui porta. Mauris non porta lacus.</p>
        </div>
        <div className={css.boxItem}>
          <img className={css.img} src={FruitImgUrl} alt="" />
          <h4 className={css.boxtitle}>Organic Fruits are Here.</h4>
          <p>Mauris iaculis urna eget est euismod, in auctor dui porta. Mauris non porta lacus.</p>
        </div>
        <div className={css.boxItem}>
          <img className={css.img} src={CheeseImgUrl} alt="" />
          <h4 className={css.boxtitle}>Soft & Hard Cheese.</h4>
          <p>Mauris iaculis urna eget est euismod, in auctor dui porta. Mauris non porta lacus.</p>
        </div>
        <div className={css.boxItem}>
          <img className={css.img} src={PureImgUrl} alt="" />
          <h4 className={css.boxtitle}>High Quality Pure Products.</h4>
          <p>Mauris iaculis urna eget est euismod, in auctor dui porta. Mauris non porta lacus.</p>
        </div>
      </div>
    </div>
  )
}

export default OurServicesPage;