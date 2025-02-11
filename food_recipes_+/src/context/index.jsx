import { createContext, useState } from "react";
import Favorites from "../pages/favorites";
export const GlobalContext = createContext(null);

export default function GlobalState({children}) {

    const [searchParam, setSearchParam] = useState("")
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favoritesList, setFavoritesList] = useState([])

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch('https://forkify-api.herokuapp.com/api/search?q='+searchParam)
            const data = await res.json();

            if (data?.recipes) {
                
                setRecipeList(data?.recipes)
                setLoading(false)
                setSearchParam('')
                //console.log(data.recipes)
            }

           //console.log(data.recipes)
        } catch (e) {
            //console.log(e)
            setLoading(false)
            setSearchParam('')
        }
    }

    function handleAddToFavorite(getCurrentItem) {
        console.log(getCurrentItem)
        let copyFavoritesList = [...favoritesList];
        const index = copyFavoritesList.findIndex(item => item.id === getCurrentItem.id)

       
        copyFavoritesList.push(getCurrentItem)

        setFavoritesList(copyFavoritesList)
    }


    return <GlobalContext.Provider value={{ favoritesList, handleAddToFavorite ,searchParam, setSearchParam, loading, recipeList, handleSubmit, recipeDetailsData, setRecipeDetailsData}}>{children}</GlobalContext.Provider>
}
