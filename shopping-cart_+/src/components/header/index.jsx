import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div>
            <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
                <Link to={'/'}>
                    <div className="ml-5">
                    <h1 className="text-red-900 font-bold text-transparent text-xl cursor-poiner sm:text-2xl m:text-3xl tracking-wide">
                        Shopping cart
                    </h1>
                    </div>
                </Link>
                <ul className="flex items-center space-x-6 font-semibold list-none">
                    <Link to={'/'}>
                        <li className="cursor-pointer list-none">Home</li>
                    </Link>
                    <Link to={'/cart'}>
                        <li className="cursor-pointer">Cart</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}