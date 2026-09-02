import { createContext, useContext } from "react";

import useWines from "../hooks/useWines";
import useFavorites from "../hooks/useFavorites"
import useCompare from "../hooks/useCompare";

// Crea un contesto globale per condividere lo stato dei vini tra i componenti
export const GlobalContext = createContext()

// Provider del contesto globale che avvolge l'applicazione e fornisce lo stato dei vini ai componenti figli
export function GlobalProvider({ children }) {

    // Utilizza gli hook personalizzati per ottenere lo stato dei vini, dei preferiti e del confronto
    const wineData = useWines()
    const favoritesData = useFavorites()
    const compareWines = useCompare()

    return (
        <>

            {/* Avvolge l'applicazione con il provider del contesto globale */}
            <GlobalContext.Provider value={{ ...wineData, ...favoritesData, ...compareWines }}>
                {children}
            </GlobalContext.Provider>

        </>
    )
}

// Hook personalizzato per accedere al contesto globale dei vini
export function useGlobalContext() {
    return useContext(GlobalContext)
}