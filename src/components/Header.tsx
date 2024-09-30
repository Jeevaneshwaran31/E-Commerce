import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function Header() {
    const contextType = useContext(CartContext)
    if (!contextType) {
        throw new Error("Error");
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
                                <li className="md:px-4 md:py-2 text-indigo-500"><Link to="/home">Home</Link></li>
                                <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/products">Products</Link></li>
                                <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="#">About</Link></li>
                                <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-2 md:order-3">
                        <div className="hidden xl:flex items-center space-x-7 items-center text-gray-500">
                            <Link className="" to="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </Link>
                            <Link className="flex items-center" to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <div className="w-4 h-4 flex items-center justify-center -mt-5 -ms-2 rounded-lg text-xs bg-red-500 text-white">{contextType.cart.length}</div>
                            </Link>
                            <Link className="flex items-center" to="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header