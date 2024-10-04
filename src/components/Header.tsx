import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { Icons, IconType } from "./Icons";
import { AuthContext } from "../context/AuthContext";

function Header() {
    const contextType = useContext(CartContext)
    const authType = useContext(AuthContext)
    const {Logout} = authType;
    const navigate = useNavigate();

    const handleLogout = () => {
        Logout();
        navigate("/login");
    }

    return (
        <>
            <nav className="bg-gray-200 shadow shadow-gray-300 w-full fixed px-6 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className='flex'>
                        <div className="text-indigo-500 md:order-1">
                            <Icons type={IconType.HomeIcon} />
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
                            <Link className="flex items-center" to="" onSubmit={handleLogout}>
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