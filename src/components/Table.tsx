import { useContext } from "react";
import Button from "./Button"
import { CartContext } from "../context/CartContext";

function Table({ title }: { title: Array<String>}) {
    const contextType = useContext(CartContext)
    const { cart, updateItemQuantity, addToCart } = contextType;
    return (
        <table className="w-full">
            <thead>
                <tr>
                    {title.map((name: String) =>
                        <th className="text-left font-semibold">{name}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {cart.map((item) =>
                    <tr>
                        <td className="py-4">
                            <div className="flex items-center">
                                <img className="h-16 w-16 mr-4" src={item.image} alt={item.name} />
                                <span className="font-semibold">{item.name}</span>
                            </div>
                        </td>
                        <td className="py-4">Rs.{item.price}</td>
                        <td className="py-4">
                            <div className="flex items-center">
                                <Button className="mr-2" varient='Teritory' onClick={() => updateItemQuantity(item.id, item.quantity)} name="-"></Button>
                                <span className="text-center w-8">{item.quantity}</span>
                                <Button className="ml-2" varient='Teritory' onClick={() => addToCart(item)} name="+"></Button>
                            </div>
                        </td>
                        <td className="py-4">Rs.{item.price * item.quantity}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table