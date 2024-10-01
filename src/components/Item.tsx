import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import Button from './Button';

interface ItemDetails {
    id: number,
    name: string,
    image: string,
    price: number
}

function Item(props: ItemDetails) {
    const contextType = useContext(CartContext);
    if (!contextType) {
        throw new Error("Cart contextType must be used in CartProvider")
    }

    return (
        <div className="w-60 shadow shadow-gray-300 m-3 text-center border-1">
            <Link to={`${props.id}`}>
                <img src={props.image} alt="Ethnic wear" className='w-56 h-56 p-3 ms-2' />
                <div className="mb-1 text-gray-900 font-semibold">{props.name}</div>
                <div className="mb-2 text-xl font-bold text-gray-900">Rs.{props.price}</div>
            </Link>
            <Button onClick={() => contextType.addToCart(props)} className="w-28 h-9 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name='Add to Cart'></Button>
        </div>
    )
}

export default Item