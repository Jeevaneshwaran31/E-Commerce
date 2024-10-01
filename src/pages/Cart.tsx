import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Cart() {
    const navigate = useNavigate();
    const contextType = useContext(CartContext)
    if (!contextType) {
        throw new Error("Cart contextType must be used in CartProvider");
    }
    const { cart, updateItemQuantity, addToCart } = contextType;

    const totalAmount = cart.reduce((total, product) => total + (product.price * product.quantity), 0)
    let tax;
    if (totalAmount === 0) {
        tax = 0
    } else {
        tax = 22.7;
    }
    return (
        <div className="bg-gray-100 h-screen py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                    <Button onClick={() => navigate(-1)} className="w-28 h-9 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name="Go Back"></Button>
                </div>
                {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <svg className="h-48 w-48 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-gray-600 text-lg font-semibold mb-4">Your shopping cart is empty.</p>
                            <Button onClick={() => navigate("/products")} className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300" name="Let's go shopping"></Button>
                        </div>
                ) : (
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
                                                        <Button className="border rounded-md py-2 px-4 mr-2" onClick={() => updateItemQuantity(item.id, item.quantity)} name="-"></Button>
                                                        <span className="text-center w-8">{item.quantity}</span>
                                                        <Button className="border rounded-md py-2 px-4 ml-2" onClick={() => addToCart(item)} name="+"></Button>
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
                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">Rs.{totalAmount + tax}</span>
                                </div>
                                <Button onClick={() => navigate("payment")} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full" name="Payment"></Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart