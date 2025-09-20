"use client"

import { useState } from "react"
import "./ProfileCard.css"

function ProfileCard({ user }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
    }

    const getAvatarColor = (id) => {
        const colors = [
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
            "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
            "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
        ]
        return colors[id % colors.length]
    }

    return (
        <div className={`profile-card ${isExpanded ? "expanded" : ""}`}>
            <div className="profile-header">
                <div className="avatar" style={{ background: getAvatarColor(user.id) }}>
                    {getInitials(user.name)}
                </div>
                <div className="profile-basic-info">
                    <h3 className="profile-name">{user.name}</h3>
                    <p className="profile-username">@{user.username}</p>
                    <p className="profile-company">{user.company.name}</p>
                </div>
                <button className="expand-btn" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "−" : "+"}
                </button>
            </div>

            <div className="profile-preview">
                <p className="company-catchphrase">"{user.company.catchPhrase}"</p>
                <div className="location">
                    <span className="location-icon">📍</span>
                    {user.address.city}
                </div>
            </div>

            {isExpanded && (
                <div className="profile-details">
                    <div className="detail-section">
                        <h4>Contact Information</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <a href={`mailto:${user.email}`}>{user.email}</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <a href={`tel:${user.phone}`}>{user.phone}</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">🌐</span>
                                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                                    {user.website}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h4>Address</h4>
                        <div className="address-info">
                            <p>
                                {user.address.street}, {user.address.suite}
                            </p>
                            <p>
                                {user.address.city}, {user.address.zipcode}
                            </p>
                            <div className="geo-coordinates">
                                <small>
                                    Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h4>Company Details</h4>
                        <div className="company-info">
                            <p>
                                <strong>Business:</strong> {user.company.bs}
                            </p>
                            <p>
                                <strong>Motto:</strong> "{user.company.catchPhrase}"
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileCard
