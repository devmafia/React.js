import { useContext } from "react"
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
    const {recipeList, loading} = useContext(GlobalContext)

    if (loading) return <div>Loading...Please wait!</div>
    //console.log(recipeList)
    //{console.log(recipeList)};
    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      
        {
            recipeList && recipeList.length > 0 ? 
            recipeList.map(item => <RecipeItem item={item}></RecipeItem>)
            : <div>
                <p>Nothing to show. Search something different</p>
            </div>
        }
    </div>


    return (
        <div>Home</div>
    )
}