import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const contextType = useContext(CartContext)
    if (!contextType) {
        throw new Error("Error");
    }
    const { cart, updateItemQuantity, addToCart, product } = contextType;

    const totalAmount = cart.reduce((total, product) => total + (product.price * (product.quantity || 0)), 0)
    const tax = 22.7;
    const shipping = 0;
    return (
        <div className="bg-gray-100 h-screen py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                    <button onClick={() => navigate(-1)} className="w-28 h-9 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go Back</button>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Product</th>
                                        <th className="text-left font-semibold">Price</th>
                                        <th className="text-left font-semibold">Quantity</th>
                                        <th className="text-left font-semibold">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) =>
                                        <tr>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src={item.image} alt="Product image" />
                                                    <span className="font-semibold">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4">Rs.{item.price}</td>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <button className="border rounded-md py-2 px-4 mr-2" onClick={() => updateItemQuantity(item.id, item.quantity)}>-</button>
                                                    <span className="text-center w-8">{item.quantity}</span>
                                                    <button className="border rounded-md py-2 px-4 ml-2" onClick={() => addToCart(item)}>+</button>
                                                </div>
                                            </td>
                                            <td className="py-4">Rs.{item.price * item.quantity}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>Rs.{totalAmount}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Taxes</span>
                                <span>Rs.{tax}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>Rs.{shipping}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">Total</span>
                                <span className="font-semibold">Rs.{totalAmount + tax + shipping}</span>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart