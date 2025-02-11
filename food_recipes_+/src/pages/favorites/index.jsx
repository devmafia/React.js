import { GlobalContext } from "../../context"
import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";

export default function Favorites() {

    const {favoritesList, loading} = useContext(GlobalContext)

    if (loading) return <div>Loading...Please wait!</div>
    //console.log(favoritesList)
    //{console.log(favoritesList)};
    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      
        {
            favoritesList && favoritesList.length > 0 ? 
            favoritesList.map(item => <RecipeItem item={item}></RecipeItem>)
            : <div>
                <p>Nothing is added.</p>
            </div>
        }
    </div>


    return (
        <div>Home</div>
    )
}