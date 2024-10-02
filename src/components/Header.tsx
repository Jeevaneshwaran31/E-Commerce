import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { Icons, IconType } from "./Icons";

function Header() {
    const contextType = useContext(CartContext)
    if (!contextType) {
        throw new Error("Cart contextType must be used in CartProvider");
    }

    return (
        <>
            <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-6 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className='flex'>
                        <div className="text-indigo-500 md:order-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                        </div>
                        <div className="text-gray-500 w-full md:w-auto md:order-2">
                            <ul className="flex font-semibold justify-between">
                                <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/home">Home</Link></li>
                                <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/products">Products</Link></li>
                                <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="#">About</Link></li>
                                <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-2 md:order-3">
                        <div className="hidden xl:flex items-center space-x-7 items-center text-gray-500">
                            <Link className="" to="#">
                                <Icons type={IconType.HeartIcon} />
                            </Link>
                            <Link className="flex items-center" to="/cart">
                                <Icons type={IconType.CartIcon} />
                                <div className="w-4 h-4 flex items-center justify-center -mt-5 -ms-2 rounded-lg text-xs bg-red-500 text-white">{contextType.cart.length}</div>
                            </Link>
                            <Link className="flex items-center" to="/login">
                                <Icons type={IconType.ProfileIcon} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header