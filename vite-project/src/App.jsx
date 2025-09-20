"use client"

import { useState, useMemo } from "react"
import users from "./data/users.json"
import ProfileCard from "./components/ProfileCard.jsx"
import SearchBar from "./components/SearchBar.jsx"
import "./App.css"

function App() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCity, setSelectedCity] = useState("")

    const cities = useMemo(() => {
        const uniqueCities = [...new Set(users.map((user) => user.address.city))]
        return uniqueCities.sort()
    }, [])

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const matchesSearch =
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.username.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCity = selectedCity === "" || user.address.city === selectedCity
            return matchesSearch && matchesCity
        })
    }, [searchTerm, selectedCity])

    return (
        <div className="app">
            <header className="app-header">
                <h1>Modern Profiles Directory</h1>
                <p>Discover amazing professionals from around the world</p>
            </header>

            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                cities={cities}
            />

            <div className="profiles-grid">
                {filteredUsers.map((user) => (
                    <ProfileCard key={user.id} user={user} />
                ))}
            </div>

            {filteredUsers.length === 0 && (
                <div className="no-results">
                    <p>No profiles found matching your criteria</p>
                </div>
            )}
        </div>
    )
}

export default App
