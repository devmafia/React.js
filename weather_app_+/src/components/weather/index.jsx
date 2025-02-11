import { useEffect, useState } from "react"
import Search from "../search"

export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true)
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8a1d29dbd3b92ffd37084d8e724ae26b`
            )
            const data = await response.json();
            if (data) {
                setWeatherData(data)
                setLoading(false)
            }

            console.log(data)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    async function handleSearch() {
        fetchWeatherData(search)
    }

    useEffect(() => {

    }, [])

    return <div className="">
        <div>
            <Search handleSearch={handleSearch} search={search} setSearch={setSearch}> 
            </Search>
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        <div className="city-name">
                            <h2>
                                {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
                            </h2>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}
