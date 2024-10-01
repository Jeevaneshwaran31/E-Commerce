import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate, useParams } from "react-router-dom";
import Product from "../type/ProductType";
import Button from "../components/Button";

function ProductDetail() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const contextType = useContext(CartContext);
    if (!contextType) {
        throw new Error("Error");
    }
    const { product, addToCart } = contextType;

    const productItem: Product = product.find((item) =>
        String(item.id) === productId
    )

    return (
        <div className="mt-5 ml-4 flex">
            <Button onClick={() => navigate(-1)} className="w-28 h-9 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name="Go Back"></Button>
            <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
                <img className="w-80 mx-auto mt-3" src={productItem.image} alt="Product Image" />
                <div className="p-4">
                    <h3 className="text-lg text-center font-medium mb-2">{productItem.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                        vel eros fermentum faucibus sit amet euismod lorem.</p>
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">Rs.{productItem.price}</span>
                        <Button onClick={() => addToCart(productItem)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" name="Add to Cart"></Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail