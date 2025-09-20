import { useState } from "react"

export default function ProfileCard({ user }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
    }

    const getAvatarColor = (id) => {
        const colors = [
            "bg-gradient-to-br from-purple-500 to-pink-500",
            "bg-gradient-to-br from-blue-500 to-cyan-500",
            "bg-gradient-to-br from-green-500 to-emerald-500",
            "bg-gradient-to-br from-orange-500 to-red-500",
            "bg-gradient-to-br from-indigo-500 to-purple-500",
        ]
        return colors[id % colors.length]
    }

    return (
        <div
            className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer bg-white border border-gray-200 rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="p-6">
                {/* Header with Avatar and Basic Info */}
                <div className="flex items-start gap-4 mb-4">
                    <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${getAvatarColor(user.id)} shadow-lg`}
                    >
                        {getInitials(user.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-gray-900 truncate">{user.name}</h3>
                        <p className="text-blue-500 font-medium">@{user.username}</p>
                        <p className="text-sm text-gray-500 truncate">{user.company.name}</p>
                    </div>
                </div>

                {/* Quick Contact Info */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-4 h-4 flex items-center justify-center">📧</span>
                        <span className="truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-4 h-4 flex items-center justify-center">📍</span>
                        <span className="truncate">{user.address.city}</span>
                    </div>
                </div>

                {/* Company Catchphrase */}
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <p className="text-sm italic text-gray-500 text-center">"{user.company.catchPhrase}"</p>
                </div>

                {/* Expandable Details */}
                <div
                    className={`transition-all duration-300 overflow-hidden ${
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="border-t border-gray-200 pt-4 space-y-3">
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="w-4 h-4 flex items-center justify-center">📞</span>
                                <span className="text-gray-500">Телефон:</span>
                                <span className="text-gray-900 font-medium">{user.phone}</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                                <span className="w-4 h-4 flex items-center justify-center">🌐</span>
                                <span className="text-gray-500">Сайт:</span>
                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline font-medium"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {user.website}
                                </a>
                            </div>

                            <div className="text-sm">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-4 h-4 flex items-center justify-center">🏠</span>
                                    <span className="text-gray-500">Адреса:</span>
                                </div>
                                <div className="ml-6 text-gray-900">
                                    <div>
                                        {user.address.street}, {user.address.suite}
                                    </div>
                                    <div>
                                        {user.address.city}, {user.address.zipcode}
                                    </div>
                                </div>
                            </div>

                            <div className="text-sm">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-4 h-4 flex items-center justify-center">🏢</span>
                                    <span className="text-gray-500">Компанія:</span>
                                </div>
                                <div className="ml-6">
                                    <div className="font-medium text-gray-900">{user.company.name}</div>
                                    <div className="text-xs text-gray-500">{user.company.bs}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expand/Collapse Indicator */}
                <div className="flex justify-center mt-4">
                    <div
                        className={`w-6 h-6 flex items-center justify-center text-blue-500 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                        }`}
                    >
                        ⌄
                    </div>
                </div>
            </div>

            {/* Hover Effect Overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    )
}