import { useParams } from 'react-router-dom'
import Product from '../../components/Product';
import { useStore } from '../../store/context';

function ItemPage() {
  const { products, addToCart } = useStore();

  const { id } = useParams();
  const currentItem = products.find((item) => item.id === +id)
  
  return (
    <div className='box'>
      {currentItem &&(
        <button onClick={() =>addToCart(currentItem)}>
          <Product
            title ={currentItem?.title}
            image={currentItem?.image}
            text={currentItem?.description}
            price={currentItem?.price}
        />
        </button>

      )}
    </div>
  )
}

export default ItemPage;
