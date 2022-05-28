import FaqImgUrl from '../../assets/faqbanner.png'
import css from './faq-page.module.css'
import clsx from 'clsx';

function FaqPage(){
  return(
    <div className='container'>
      <div className={css.background}>
        <h1 className={clsx("page-title",css.title)}>FAQ</h1>
      </div>
      <div className={css.banner} >
        <img src={FaqImgUrl} alt="" />
        <p className={css.question}>What should be listed on a business card?</p>
        <p className='text'>Nullam pulvinar, enim ornare tristique vehicula, massa est eleifend velit, vitae laoreet leo diam vitae quam. Curabitur dignissim nisi sed libero pellentesque hendrerit. Mauris vitae nulla interdum quam dignissim congue vitae mattis felis. Nulla sit amet velit enisi venenatis pulvinar vitae sed lectus. Suspendisse erat arcu,  vitae mauris ultrices, rutrum dictum justo. Aliquam non suscipit turpis.</p>
        <p className={css.question}>What should be listed on a business card?</p>
        <p className='text'>Nullam pulvinar, enim ornare tristique vehicula, massa est eleifend velit, vitae laoreet leo diam vitae quam. Curabitur dignissim nisi sed libero pellentesque hendrerit. Mauris vitae nulla interdum quam dignissim congue vitae mattis felis. Nulla sit amet velit enisi venenatis pulvinar vitae sed lectus. Suspendisse erat arcu,  vitae mauris ultrices, rutrum dictum justo. Aliquam non suscipit turpis.</p>
        <p className={css.question}>What should be listed on a business card?</p>
        <p className='text'>Nullam pulvinar, enim ornare tristique vehicula, massa est eleifend velit, vitae laoreet leo diam vitae quam. Curabitur dignissim nisi sed libero pellentesque hendrerit. Mauris vitae nulla interdum quam dignissim congue vitae mattis felis. Nulla sit amet velit enisi venenatis pulvinar vitae sed lectus. Suspendisse erat arcu,  vitae mauris ultrices, rutrum dictum justo. Aliquam non suscipit turpis.</p>
        <p className={css.question}>What should be listed on a business card?</p>
        <p className='text'>Nullam pulvinar, enim ornare tristique vehicula, massa est eleifend velit, vitae laoreet leo diam vitae quam. Curabitur dignissim nisi sed libero pellentesque hendrerit. Mauris vitae nulla interdum quam dignissim congue vitae mattis felis. Nulla sit amet velit enisi venenatis pulvinar vitae sed lectus. Suspendisse erat arcu,  vitae mauris ultrices, rutrum dictum justo. Aliquam non suscipit turpis.</p>
        <p className={css.question}>What should be listed on a business card?</p>
        <p className='text'>Nullam pulvinar, enim ornare tristique vehicula, massa est eleifend velit, vitae laoreet leo diam vitae quam. Curabitur dignissim nisi sed libero pellentesque hendrerit. Mauris vitae nulla interdum quam dignissim congue vitae mattis felis. Nulla sit amet velit enisi venenatis pulvinar vitae sed lectus. Suspendisse erat arcu,  vitae mauris ultrices, rutrum dictum justo. Aliquam non suscipit turpis.</p>
        <p className={css.question}>What should be listed on a business card?</p>
        <p className='text'>Nullam pulvinar, enim ornare tristique vehicula, massa est eleifend velit, vitae laoreet leo diam vitae quam. Curabitur dignissim nisi sed libero pellentesque hendrerit. Mauris vitae nulla interdum quam dignissim congue vitae mattis felis. Nulla sit amet velit enisi venenatis pulvinar vitae sed lectus. Suspendisse erat arcu,  vitae mauris ultrices, rutrum dictum justo. Aliquam non suscipit turpis.</p>
      </div>
      
    </div>
  )
}

export default FaqPage;