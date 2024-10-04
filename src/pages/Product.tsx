import { productDetails } from '../data/ProductDetails'
import Item from '../components/Item'

function Product() {
  return (
    <div className='relative top-20'>
      <p className='text-center font-bold text-gray-700 font-serif text-5xl mb-4'>List of Products</p>
      <div className='flex justify-evenly flex-wrap'>
      {productDetails.map((item, i) => {
        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} quantity={item.quantity}></Item>
      })}
    </div>
    </div>
    
  )
}

export default Product