import { useState } from "react"

const useFavorites = () => {
    // Stato per gestire i preferiti
    const [favorites, setFavorites] = useState([])

    // Funzione per aggiungere o rimuovere un vino dai preferiti
    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            // Se il vino è già nei preferiti, lo rimuove
            setFavorites(curr => curr.filter(favId => favId !== id))
        } else {
            // Se il vino non è nei preferiti, lo aggiunge
            setFavorites(curr => [...curr, id])
        }
    }

    // Ritorna lo stato dei preferiti e la funzione per modificarlo
    return { favorites, toggleFavorite }

}

export default useFavorites