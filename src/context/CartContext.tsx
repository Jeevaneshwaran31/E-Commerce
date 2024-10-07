import { createContext, ReactNode, useState } from "react"
import { productDetails } from "../data/ProductDetails"
import Product from "../type/ProductType"

const CartType = {
    cart: [
        {id:0, name:"", description:"", price:0, image:"", quantity:0}
    ],
    product: [
        {id:0, name:"", description:"", price:0, image:"", quantity:0}
    ],
    addToCart: (product: Product) => {},
    updateItemQuantity: (id: number, quantity: number) => {},
    emptyCart : () => {}
}

export const CartContext = createContext(CartType)

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [product] = useState<Product[]>(productDetails);

    const addToCart = (product: Product) => {
        const existCartItem = cart.find((item) => item.id === product.id);
        if (existCartItem) {
            setCart(cart.map((item) =>
                item.id === product.id ? { ...existCartItem, quantity: existCartItem.quantity + 1 } : item
            ))
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    const updateItemQuantity = (id: number, quantity: number) => {
        setCart(cart.map((item) =>
            item.id === id ? { ...item, quantity: quantity - 1 } : item
        ).filter((item) => item.id !== id || quantity > 1))
    }

    const emptyCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, product, addToCart, updateItemQuantity, emptyCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider