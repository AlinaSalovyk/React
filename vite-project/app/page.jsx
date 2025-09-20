import ProfilesGrid from "../components/profiles-grid.jsx"
import { Suspense } from "react"

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Профілі Користувачів</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Сучасний інтерактивний додаток для перегляду детальної інформації про користувачів
                    </p>
                </div>

                <Suspense
                    fallback={
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="bg-card rounded-xl p-6 animate-pulse">
                                    <div className="h-16 w-16 bg-muted rounded-full mb-4"></div>
                                    <div className="h-4 bg-muted rounded mb-2"></div>
                                    <div className="h-3 bg-muted rounded w-2/3"></div>
                                </div>
                            ))}
                        </div>
                    }
                >
                    <ProfilesGrid />
                </Suspense>
            </div>
        </main>
    )
}