import {NavLink} from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Navbar() {
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

    return (
        <div>
            <nav className="flex justify-between items-center py-8 container mx-auto flex-col">
                <h2 className="text-2xl font-semibold">FoodRecipe</h2>
                <NavLink to={'/'}>Food recipes</NavLink>
                <form onSubmit={handleSubmit} action="">
                    <input value={searchParam} onChange={(event) => setSearchParam(event.target.value)} type="text" name="search" placeholder="Enter items..." className="p-3 px-8 rounded-full outline-none shadow-lg"/>
                </form>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/favorites'}>Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/details'}>Details</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}