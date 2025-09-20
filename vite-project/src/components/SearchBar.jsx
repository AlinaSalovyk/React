"use client"

import "./SearchBar.css"

function SearchBar({ searchTerm, setSearchTerm, selectedCity, setSelectedCity, cities }) {
    return (
        <div className="search-bar">
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Search by name, username, or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <span className="search-icon">🔍</span>
            </div>

            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="city-filter">
                <option value="">All Cities</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SearchBar
