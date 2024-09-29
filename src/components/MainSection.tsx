import { Link } from "react-router-dom"
import home_image from "../assets/Home.png"
// import arrow from "../assets/arrow.svg"

function MainSection() {
    return (
        <div className="h-full flex mt-10">
            <div className="flex flex-col justify-center pl-28 leading-tight gap-5">
                <h2 className="text-neutral-950 text-lg font-bold">NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="flex items-center gap-5">
                        <p className="text-neutral-900 text-7xl font-bold">New 👋</p>
                    </div>
                    <p className="text-neutral-900 text-7xl font-bold">Collections</p>
                    <p className="text-neutral-900 text-7xl font-bold">for everyone</p>
                </div>
                <Link to="/products">
                    <div className="flex justify-center items-center w-56 h-16 rounded-full mt-7 bg-red-500 text-white text-xl font-medium">
                        Latest Collection
                        {/* <img src={arrow} alt="" className="w-7 ml-3 mt-1"/> */}
                        <svg className="h-7 w-7 ml-2 mt-1 text-slate-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
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