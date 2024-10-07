import { productDetails } from '../data/ProductDetails'
import Item from '../components/Item'

function Product() {
  return (
    <div className='relative top-20'>
      <p className='text-center font-bold text-gray-700 font-serif text-5xl mb-4'>List of Products</p>
      <div className='flex justify-evenly flex-wrap'>
      {productDetails.map((item, i) => {
        return <Item key={i} item={item}></Item>
      })}
    </div>
    </div>
  )
}

export default Product