import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Icons, IconType } from "../components/Icons";
import Table from "../components/Table";

function Cart() {
    const navigate = useNavigate();
    const contextType = useContext(CartContext)
    if (!contextType) {
        throw new Error("Cart contextType must be used in CartProvider");
    }
    const { cart } = contextType;

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
                        <Icons type={IconType.EmptyCartIcon} />
                        <p className="text-gray-600 text-lg font-semibold mb-4">Your shopping cart is empty.</p>
                        <Button onClick={() => navigate("/products")} className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300" name="Let's go shopping"></Button>
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <Table title={["Product", "Price", "Quantity", "Total"]}></Table>
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