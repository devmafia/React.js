import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
// accept parameter as an array of distructure them
    const {id} = useParams();
    const {recipeDetailsData, setRecipeDetailsData, handleAddToFavorite, favoritesList} = useContext(GlobalContext)

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
            const data = await response.json();

            if(data) {
                setRecipeDetailsData(data)
            }    
        }
        getRecipeDetails()
    }, [])
       
    return (
        <div className="container mx-auto py-10 grid grid-cols-1 gap-10">
            <div className="row-start-2 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img src={recipeDetailsData?.recipe?.image_url}
                    className="w-full h-full object-cover block group-hover:scale-105" alt="" />
                </div>
                <div className="flex justify center overflow-hidden items-center rounded-xl">
                    <span className="text-sm font-medium">{recipeDetailsData?.recipe?.publisher}</span>
                    <h3 className="font-bold text-2x truncate">{recipeDetailsData?.recipe?.title}</h3>
                </div>
                <div>
                    <button onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)} className="p-3 px-8 rounded-lg text-sm uppercase">
                        Save as favorites
                    </button>
                </div>
                <div>
                    <span className="text-2xl font-semibold">
                        Ingredients:
                    </span>
                </div>
            </div>
        </div>
    )
}