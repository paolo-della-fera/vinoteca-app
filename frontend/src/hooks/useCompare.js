import { useState } from "react"

const useCompare = () => {
    // Variabile di stato per memorizzare gli ID dei vini selezionati per il confronto
    const [compareList, setCompareList] = useState([])

    // Funzione per aggiungere o rimuovere un vino dalla lista di confronto
    const toggleCompare = id => {
        // Se l'ID del vino è già presente nella lista, lo rimuove
        if (compareList.includes(id)) {
            setCompareList(curr => curr.filter(favId => favId !== id))
            // Se la lista contiene già due elementi, mostra un messaggio di avviso
        } else if (compareList.length === 2) {
            alert('Si possono confrontare massimo 2 elementi per volta')
            // Altrimenti, aggiunge l'ID del vino alla lista di confronto
        } else {
            setCompareList(curr => [...curr, id])
        }
    }

    // Restituisce la lista di confronto e la funzione per modificarla
    return { compareList, toggleCompare }

}

export default useCompare