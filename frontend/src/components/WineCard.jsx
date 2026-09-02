import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
// Importa la funzione per ottenere il colore della categoria del vino
import { getCategoryColor } from "../utils/colors"

const WineCard = ({ wine }) => {
    // Recupera i preferiti e la funzione per aggiungere/rimuovere dai preferiti dal contesto globale
    const { favorites, toggleFavorite, compareList, toggleCompare } = useGlobalContext()

    // Determina il colore della categoria del vino in base al tipo
    const colore = getCategoryColor(wine.category)

    // Controlla se il vino è nei preferiti
    const isFavorite = favorites.includes(wine.id)

    // Controlla se il vino è nella lista di confronto
    const isCompare = compareList.includes(wine.id)

    return (
        <>

            {/* Card del vino */}
            <Link to={`/vino/${wine.id}`} className="text-decoration-none w-100">

                <div className="wine-card p-3 rounded-3 h-100">
                    <h4 className="font-display" style={{ color: 'var(--cantina)' }}>
                        {wine.title}
                    </h4>
                    <span
                        className="badge rounded-pill px-3 py-2"
                        style={{ backgroundColor: colore }}
                    >
                        {wine.category}
                    </span>

                    {/* Pulsante per aggiungere/rimuovere dai preferiti */}
                    <button
                        className="wine-card-favorite"
                        onClick={(e) => {
                            e.preventDefault()
                            toggleFavorite(wine.id)
                        }}
                    >
                        <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
                    </button>

                    {/* Pulsante per aggiungere/rimuovere dal confronto */}
                    <button
                        className="wine-card-compare"
                        style={{ color: isCompare ? 'var(--ottone)' : 'var(--bordeaux)' }}
                        onClick={(e) => {
                            e.preventDefault()
                            toggleCompare(wine.id)
                        }}
                    >
                        <i className="bi bi-arrow-left-right"></i>
                    </button>

                </div>

            </Link>

        </>
    )
}

export default WineCard