import { useState } from "react"
import ProfileCard from "./profile-card.jsx"
import users from "../src/data/users.json";

export default function ProfilesGrid() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCity, setSelectedCity] = useState("")

    const cities = [...new Set(users.map((user) => user.address.city))].sort()

    const filteredUsers = users.filter((user) => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCity = selectedCity === "" || user.address.city === selectedCity
        return matchesSearch && matchesCity
    })

    return (
        <div className="space-y-6">
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Пошук за ім'ям, username або компанією..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
                    />
                </div>
                <div className="sm:w-48">
                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    >
                        <option value="">Всі міста</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground mb-4">
                Знайдено {filteredUsers.length} з {users.length} користувачів
            </div>

            {/* Profiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map((user) => (
                    <ProfileCard key={user.id} user={user} />
                ))}
            </div>

            {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Нічого не знайдено</h3>
                    <p className="text-muted-foreground">Спробуйте змінити критерії пошуку</p>
                </div>
            )}
        </div>
    )
}