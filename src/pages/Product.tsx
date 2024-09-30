import { productDetails } from '../utils/ProductDetails'
import Item from '../components/Item'
import Categories from '../assets/Categories.png'

function Product() {
  return (
    <div className='flex justify-evenly flex-wrap'>
      <div>
        <img src={Categories} alt="Cart Categories" />
      </div>
      {productDetails.map((item, i) => {
        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}></Item>
      })}
    </div>
  )
}

export default Product