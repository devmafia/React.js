
export default function Search({search, setSearch, handleSearch}) {

    return <div className="search-engine">
        <input type="text"
            className="city-search"
            placeholder="Enter City Name"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        ></input>
        <button className="search-btn" onClick={handleSearch}>Search weather</button>
    </div>
}