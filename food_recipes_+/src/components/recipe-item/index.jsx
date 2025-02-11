import { Link } from "react-router-dom";

export default function RecipeItem({item}) {
    return (
        <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl">
            <div className="h-40 flex justify center overflow-hidden items-center rounded-xl">
                <img src={item?.image_url} alt="recipe-item" className="block w-full"/>
            </div>
            <div className="flex justify center overflow-hidden items-center rounded-xl">
                <span className="text-sm font-medium">{item?.publisher}</span>
                <h3 className="font-bold text-2x truncate">{item?.title}</h3>
              
                <Link className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block" to={`/recipe-item/${item?.recipe_id}`}>Recipe Details</Link>
            </div>
        </div>
    )
}