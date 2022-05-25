import clsx from "clsx";
import css from './aboutus-page.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import AboutusImgUrl from '../../assets/about.svg';
import SignatureImgUrl from '../../assets/Signeture.png';
import FarmImgUrl from '../../assets/farm.png';
import { ReactComponent as Phone } from '../../assets/phone.svg';
import MilkImgUrl from '../../assets/milk.svg';
import FruitImgUrl from '../../assets/fruit.svg';


function AboutUsPage(){
  return(
    <div className={clsx("container",css.sevice)}>
      <h1 className={clsx("page-title",css.title)}>About us</h1>
      <div className={css.welcome}>
        <div className={css.logo}>
          <Logo/>
          <h3>Welcome to Milcandy Farm</h3>
          <p>Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi. Morbi eget magna mauris. Pellentesque id ornare augue. Duis dictum dui quis neque fringilla, in dignissim purus sodales. Etiam volutpat mattis turpis</p>
        </div>
        <div>
          <img className={css.img} src={AboutusImgUrl} alt="" />
        </div>
      </div>
      <div>
        <img className={css.signature} src={SignatureImgUrl} alt="" />
      </div>
      <div className={css.info}>
        <div >
          <img className={css.farm} src={FarmImgUrl} alt="" />
          <div className={css.contactbox}>
            <p className={css.phone}>Call to get us.</p>
            <p className={css.phone}>+880 916 3266</p>
            <Phone />
          </div>
        </div>
        <div className={css.skills}>
          <h4>We are very skilled in dairy farming.</h4>
          <p className={css.skilltext}>Duis a pellentesque velit, et amet sodales lacus. Etiam lobortis ligula vel enim pellentesque</p>
          <p className={css.passage}>Nullam et neque luctus lacus feugiat mattis ac id risus. In ut pulvinar quam. Integer suscipit non massa quis eleifend. Aliquam eu lobortis nibh, in venenatis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc justo, laoreet non orci nec, maximus interdum massa. Mauris quis blandit ex. Mauris laoreet libero nisl, vel  massa, in pellentesque erat aliquet sed.</p>
          <div className={css.bottomskills}>
            <div>
              <img className={css.img} src={MilkImgUrl} alt="" />
              <p>Naturel Milk</p>
            </div>
            <div>
              <img className={css.img} src={FruitImgUrl} alt="" />
              <p>Organic Food</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage;