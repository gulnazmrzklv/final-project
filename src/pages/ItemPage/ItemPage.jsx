import { useParams } from 'react-router-dom'
import Product from '../../components/Product/Product';
import { useStore } from '../../store/context';

function ItemPage() {
  const { products } = useStore();

  const { id } = useParams();
  const currentItem = products.find((item) => item.id === +id)
  console.log(currentItem);
  return (
    <div>
      {currentItem &&(
        <Product
          title ={currentItem?.title}
          image={currentItem?.image}
          text={currentItem?.description}
          price={currentItem?.price}
        />
      )}
    </div>
  )
}

export default ItemPage;
