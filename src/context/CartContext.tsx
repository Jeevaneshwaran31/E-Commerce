import { createContext, ReactNode, useState } from "react"
import { productDetails } from "../utils/ProductDetails"

interface Product {
    id: number,
    name: string,
    image: string,
    description?: string,
    price: number,
    quantity?: number
}

interface Cart extends Product {
    quantity: number
}

interface CartType {
    cart: Cart[],
    product: Product[],
    addToCart: (product: Product) => void,
    updateItemQuantity: (id: number, quantity: number) => void
}

export const CartContext = createContext<CartType | undefined>(undefined)

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Cart[]>([]);
    const [product] = useState<Product[]>(productDetails);

    const addToCart = (product: Product) => {
        const existCartItem = cart.find((item) => item.id === product.id);
        if (existCartItem) {
            setCart(cart.map((item)=>
                item.id === product.id ? { ...existCartItem, quantity: existCartItem.quantity + 1 } : item
        ))
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    const updateItemQuantity = (id: number, quantity: number) => {
        setCart(cart.map((item) =>
            item.id === id ? { ...item, quantity: quantity - 1 } : item
        ));
    }

    return (
        <CartContext.Provider value={{ cart, product, addToCart, updateItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider