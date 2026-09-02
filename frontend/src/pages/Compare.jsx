import { useGlobalContext } from "../context/GlobalContext"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// Importa la funzione per ottenere il colore della categoria del vino
import { getCategoryColor } from "../utils/colors"

// Componente per la pagina di confronto dei vini
import CompareCard from "../components/CompareCard"

// URL dell'API per recuperare i dettagli dei vini
const API_URL = import.meta.env.VITE_API_URL

function Compare() {
    // Stato per memorizzare i dettagli dei vini selezionati per il confronto
    const [comparedWines, setComparedWines] = useState([])

    // Recupera la lista dei vini selezionati per il confronto e la funzione per modificarla dal contesto globale
    const { compareList, toggleCompare } = useGlobalContext()

    // Funzione per recuperare i dettagli dei vini selezionati per il confronto dall'API
    const fetchComparedWines = async () => {
        try {
            // Effettua richieste parallele per recuperare i dettagli dei vini selezionati
            const responses = await Promise.all(
                compareList.map(id => fetch(`${API_URL}/wines/${id}`))
            )
            // Converte le risposte in formato JSON e aggiorna lo stato con i dettagli dei vini
            const data = await Promise.all(responses.map(res => res.json()))
            setComparedWines(data.map(d => d.wine))
        } catch (error) {
            console.error(error)
        }
    }

    // Effettua il fetch dei dettagli dei vini selezionati ogni volta che la lista di confronto cambia
    useEffect(() => {
        fetchComparedWines()
    }, [compareList])

    return (
        <>

            {/* Contenitore per i dettagli dei vini nel confronto */}
            <div className="container mt-5 mb-5">
                <h1 className="font-display text-center mb-5" style={{ color: 'var(--etichetta)' }}>
                    Confronto Vini
                </h1>

                {/* Messaggio quando nessun vino è selezionato */}
                {compareList.length === 0 && (
                    <p className="text-center" style={{ color: 'var(--ottone)' }}>
                        Nessun vino selezionato. Vai alla <Link to="/" className="wine-detail-back">lista</Link> e scegli fino a 2 vini da confrontare.
                    </p>
                )}

                {/* Messaggio quando è selezionato un solo vino */}
                {compareList.length === 1 && (
                    <p className="text-center" style={{ color: 'var(--ottone)' }}>
                        Hai selezionato un solo vino. Scegline un secondo dalla <Link to="/" className="wine-detail-back">lista</Link> per completare il confronto.
                    </p>
                )}

                <div className="row g-4">
                    {/* Contenitore per i dettagli dei vini nel confronto */}
                    {comparedWines.map(wine => {
                        // Ottieni il colore della categoria del vino utilizzando la funzione importata
                        const colore = getCategoryColor(wine.category)

                        /* Card per i dettagli del vino nel confronto */
                        return (
                            <div className="col-md-6" key={wine.id}>
                                <CompareCard
                                    wine={wine}
                                    colore={colore}
                                    onRemove={() => toggleCompare(wine.id)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Compare