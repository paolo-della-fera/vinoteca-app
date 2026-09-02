import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import WineBottle from "../components/WineBottle"
import { useGlobalContext } from "../context/GlobalContext"
// Importa la funzione per ottenere il colore della categoria del vino
import { getCategoryColor } from "../utils/colors"

// Inporta l'URL dell'API dal file .env
const API_URL = import.meta.env.VITE_API_URL

function WineDetail() {
    // Ottieni l'id del vino dai parametri dell'URL
    const { id } = useParams()
    const [wineDetail, setWineDetail] = useState()

    // Stato per gestire il caso in cui il vino non venga trovato
    const [notFound, setNotFound] = useState(false)

    // Recupera i preferiti e la funzione per aggiungere/rimuovere dai preferiti dal contesto globale
    const { favorites, toggleFavorite, compareList, toggleCompare } = useGlobalContext()

    // Funzione asincrona per ottenere i dettagli del vino dall'API
    const fetchWinesDetail = async () => {
        try {
            // Effettua una richiesta fetch all'API per ottenere i dettagli del vino con l'id specificato
            const response = await fetch(`${API_URL}/wines/${id}`)

            // Se la risposta non è ok (es. id inesistente), segna il vino come non trovato
            if (!response.ok) {
                setNotFound(true)
                return
            }

            const data = await response.json()
            // Aggiorna lo stato wineDetail con i dati ottenuti dalla risposta
            setWineDetail(data.wine)
        } catch (error) {
            // Logga l'errore in caso di problemi nella richiesta fetch
            console.error(error)
            setNotFound(true)
        }
    }

    // useEffect per chiamare la funzione fetchWinesDetail quando il componente viene montato o quando l'id cambia
    useEffect(() => {
        // Reset degli stati ad ogni cambio di id
        setWineDetail(undefined)
        setNotFound(false)
        fetchWinesDetail()
    }, [id])

    // Se il vino non è stato trovato, mostra un messaggio dedicato
    if (notFound) {
        return (
            <div className="container mt-5 mb-5 text-center">
                <h2 className="font-display" style={{ color: 'var(--etichetta)' }}>
                    Questo vino non è nella nostra cantina
                </h2>
                <p className="font-mono" style={{ color: 'var(--ottone)' }}>
                    L'etichetta che cerchi non esiste o è stata rimossa.
                </p>
                <Link to="/" className="wine-detail-back">
                    ← Torna alla lista
                </Link>
            </div>
        )
    }

    // Se wineDetail non è ancora stato caricato, restituisce null per evitare errori di rendering
    if (!wineDetail) {
        return null
    }

    // Determina il colore del bordo e dello sfondo in base alla categoria del vino
    const colore = getCategoryColor(wineDetail.category)

    // Controlla se il vino è nei preferiti
    const isFavorite = favorites.includes(wineDetail.id)

    // Controlla se il vino è nella lista di confronto
    const isCompare = compareList.includes(wineDetail.id)

    return (
        <>

            <div className="container mt-5 mb-5">
                <Link to="/" className="wine-detail-back">
                    ← Torna alla lista
                </Link>

                <div className="wine-detail-card" style={{ border: `2px solid ${colore}` }}>

                    {/* Card Wine Details */}
                    <div className="wine-detail-bottle">
                        <WineBottle wine={wineDetail} />
                    </div>

                    <div className="wine-detail-badge" style={{ background: colore }}>
                        {wineDetail.category[0]}
                    </div>

                    <h1 className="font-display wine-detail-title">
                        {wineDetail.title}
                    </h1>

                    <p className="font-mono wine-detail-region" style={{ color: colore }}>
                        {wineDetail.regione}
                    </p>

                    <div className="row wine-detail-specs">
                        <div className="col-6 col-md-3">
                            <p className="font-mono wine-detail-spec-label">Annata</p>
                            <p className="font-mono wine-detail-spec-value">{wineDetail.annata}</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <p className="font-mono wine-detail-spec-label">Gradazione</p>
                            <p className="font-mono wine-detail-spec-value">{wineDetail.gradazione}%</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <p className="font-mono wine-detail-spec-label">Prezzo</p>
                            <p className="font-mono wine-detail-spec-value">{wineDetail.prezzo}€</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <p className="font-mono wine-detail-spec-label">Vitigno</p>
                            <p className="font-mono wine-detail-spec-value">{wineDetail.vitigno}</p>
                        </div>
                    </div>

                    <p className="wine-detail-description">
                        {wineDetail.descrizione}
                    </p>

                    <p className="font-mono wine-detail-spec-label mb-2">Produttore</p>
                    <p className="wine-detail-description">{wineDetail.produttore}</p>

                    <p className="font-mono wine-detail-spec-label mb-2">Abbinamenti</p>
                    <div>
                        {wineDetail.abbinamento?.map(tag => (
                            <span key={tag} className="wine-detail-tag">{tag}</span>
                        ))}
                    </div>

                    {/* Pulsante per aggiungere/rimuovere dai preferiti */}
                    <button
                        className="wine-card-favorite"
                        onClick={(e) => {
                            e.preventDefault()
                            toggleFavorite(wineDetail.id)
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
                            toggleCompare(wineDetail.id)
                        }}
                    >
                        <i className="bi bi-arrow-left-right"></i>
                    </button>

                </div>
            </div>

        </>
    )
}

export default WineDetail