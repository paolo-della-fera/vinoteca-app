import { useMemo, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

import WineCard from "../components/WineCard"

function WineList() {
    // Stato per la ricerca e la selezione della categoria
    const [searchWine, setSearchWine] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')

    // Stato per l'ordinamento dei vini
    const [sortBy, setSortBy] = useState('category')
    const [sortWine, setSortWine] = useState(1)

    // Recupera l'elenco dei vini e lo stato di errore dal contesto globale
    const { wines, error } = useGlobalContext()

    const categoryOrder = ['Rosso', 'Bianco', 'Rosato', 'Spumante']

    // Filtra i vini in base alla ricerca e alla categoria selezionata
    const filteredWines = useMemo(() => {

        return wines
            .filter(w =>
                w.title.toLowerCase().includes(searchWine.toLowerCase()) &&
                (!selectedCategory || w.category === selectedCategory)
            )
            .sort((a, b) => {
                if (sortBy === 'category') {
                    return (categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)) * sortWine
                }
                return a.title.localeCompare(b.title) * sortWine
            })

    }, [wines, searchWine, selectedCategory, sortBy, sortWine])

    // Funzione per gestire l'ordinamento per titolo
    const handleSortByTitle = () => {
        if (sortBy === 'title') {
            setSortWine(curr => curr * -1)
        } else {
            setSortBy('title')
            setSortWine(1)
        }
    }

    // Funzione per gestire l'ordinamento per categoria
    const handleSortByCategory = () => {
        if (sortBy === 'category') {
            setSortWine(curr => curr * -1)
        } else {
            setSortBy('category')
            setSortWine(1)
        }
    }

    return (
        <>

            {/* Titolo della pagina */}
            <div className="container">
                <div className="hero-banner">
                    <div className="hero-banner-content">
                        <h1 className="font-display" style={{ color: 'var(--etichetta)', fontSize: '42px' }}>
                            Le porte della Vinoteca<br />sono aperte
                        </h1>
                        <p className="font-mono" style={{ color: 'var(--ottone)', fontSize: '14px' }}>
                            40 etichette da scoprire, confrontare, custodire
                        </p>
                    </div>
                </div>
            </div>

            <div className="container d-flex flex-column flex-md-row justify-content-between mb-4 filters-bar">

                {/* Barra di ricerca e filtri */}
                <input
                    type="text"
                    value={searchWine}
                    onChange={e => setSearchWine(e.target.value)}
                    placeholder="Cerca un vino..."
                    className="form-control search-input filters-bar-input"
                />

                <div className="d-flex filters-group">

                    {/* Selezione della categoria */}
                    <select
                        className="form-select search-input filters-select"
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Tutte le categorie</option>
                        <option value="Rosso">Rosso</option>
                        <option value="Bianco">Bianco</option>
                        <option value="Rosato">Rosato</option>
                        <option value="Spumante">Spumante</option>
                    </select>

                    {/* Pulsanti di ordinamento */}
                    {/* Pulsante di ordinamento per titolo */}
                    <button
                        className="btn search-input filters-sort-btn"
                        onClick={handleSortByTitle}
                    >
                        A-Z {sortBy === 'title' && (sortWine === 1 ? '↑' : '↓')}
                    </button>

                    {/* Pulsante di ordinamento per categoria */}
                    <button
                        className="btn search-input filters-sort-btn-category"
                        onClick={handleSortByCategory}
                    >
                        Categoria {sortBy === 'category' && (sortWine === 1 ? '↑' : '↓')}
                    </button>

                </div>
            </div>

            {/* Lista dei vini */}
            <div className="container mt-4">
                <div className="row g-3">

                    {/* Card per ogni vino */}
                    {filteredWines.map(w => (
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex" key={w.id}>
                            <WineCard wine={w} />
                        </div>
                    ))}

                    {/* Messaggio se si è verificato un errore */}
                    {error && (
                        <h4 className="text-center font-mono w-100 mt-4" style={{ color: 'var(--bordeaux)' }}>
                            Impossibile caricare i vini. Riprova più tardi.
                        </h4>
                    )}

                    {/* Messaggio se non ci sono risultati */}
                    {!error &&filteredWines.length === 0 && (
                        <h4 className="text-center font-mono w-100 mt-4" style={{ color: 'var(--ottone)' }}>
                            Questa etichetta non è ancora in cantina!
                        </h4>
                    )}

                </div>
            </div>
        </>
    )
}

export default WineList