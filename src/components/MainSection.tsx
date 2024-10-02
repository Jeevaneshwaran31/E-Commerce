import { Link } from "react-router-dom"
import home_image from "../assets/Home.png"
import { Icons, IconType } from "./Icons"

function MainSection() {
    return (
        <div className="h-screen  flex bg-[#fcf8f7]">
            <div className="flex flex-col justify-center pl-28 leading-tight gap-5">
                <h2 className="text-neutral-950 text-lg font-bold ">NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="flex items-center gap-5">
                        <p className="text-neutral-900 text-7xl font-bold">New 👋</p>
                    </div>
                    <p className="text-neutral-900 text-7xl font-bold mb-2">Bags</p>
                    <p className="text-neutral-900 text-7xl font-bold">Collections</p>
                </div>
                <Link to="/products">
                    <div className="flex justify-center items-center w-56 h-16 rounded-full mt-7 bg-red-500 text-white text-xl font-medium">
                        Latest Collection
                        <Icons type={IconType.ArrowIcon} />
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-center ml-60">
                <img src={home_image} alt="" className="h-96" />
            </div>
        </div>
    )
}

export default MainSection