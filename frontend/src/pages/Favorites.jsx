import { useGlobalContext } from "../context/GlobalContext"
import WineCard from "../components/WineCard"

function Favorites() {
    // Recupera l'array dei vini e dei preferiti dal contesto globale
    const { wines, favorites } = useGlobalContext()

    // Filtra i vini per ottenere solo quelli che sono nei preferiti
    const favoriteWines = wines.filter(w => favorites.includes(w.id))

    return (
        <>

            {/* Titolo della pagina */}
            <div className="container mt-5 mb-5">
                <h1 className="font-display text-center mb-4" style={{ color: 'var(--etichetta)' }}>
                    I tuoi preferiti
                </h1>

                {/* Lista dei vini nei preferiti */}
                <div className="row g-3">
                    {favoriteWines.map(w => (
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex" key={w.id}>
                            <WineCard wine={w} />
                        </div>
                    ))}

                    {/* Messaggio quando non ci sono vini nei preferiti */}
                    {favoriteWines.length === 0 && (
                        <p className="text-center font-mono w-100 mt-4" style={{ color: 'var(--ottone)' }}>
                            Nessun vino nei preferiti ancora
                        </p>
                    )}
                </div>
            </div>

        </>
    )
}

export default Favorites