import { useEffect, useState } from "react";

// Inporta l'URL dell'API dal file .env
const API_URL = import.meta.env.VITE_API_URL

function useWines() {
    // Stato per memorizzare l'elenco dei vini
    const [wines, setWines] = useState([])

    // Stato per segnalare un errore di connessione al backend
    const [error, setError] = useState(false)

    // Funzione per recuperare l'elenco dei vini dal server
    const fetchWines = async () => {
        try {
            // Effettua una richiesta fetch all'API per ottenere l'elenco dei vini
            const response = await fetch(`${API_URL}/wines`)

            // Se il server risponde ma con un errore, segnala lo stato di errore
            if (!response.ok) {
                setError(true)
                return
            }

            const data = await response.json()
            // Aggiorna lo stato dei vini con i dati ricevuti dal server
            setWines(data)
            setError(false)
        } catch (error) {
            // Logga l'errore in caso di problemi nella richiesta fetch
            console.error(error)
            setError(true)
        }
    }

    // Utilizza l'hook useEffect per chiamare la funzione fetchWines al montaggio del componente
    useEffect(() => {
        fetchWines()
    }, [])

    // Restituisce lo stato dei vini, l'errore e la funzione per recuperarli
    return { wines, error, fetchWines }

}

export default useWines