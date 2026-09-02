import WineBottle from "./WineBottle"

// Componente per visualizzare i dettagli di un vino nel confronto
function CompareCard({ wine, colore, onRemove }) {
    return (
        <>

            {/* Card per i dettagli del vino nel confronto */}
            <div className="wine-detail-card" style={{ border: `2px solid ${colore}` }}>

                <div className="wine-detail-bottle">
                    <WineBottle wine={wine} />
                </div>

                <div className="wine-detail-badge" style={{ background: colore }}>
                    {wine.category[0]}
                </div>

                <h2 className="font-display wine-detail-title">
                    {wine.title}
                </h2>

                <p className="font-mono wine-detail-region" style={{ color: colore }}>
                    {wine.regione}
                </p>

                <div className="row wine-detail-specs">
                    <div className="col-6 col-md-3">
                        <p className="font-mono wine-detail-spec-label">Annata</p>
                        <p className="font-mono wine-detail-spec-value">{wine.annata}</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <p className="font-mono wine-detail-spec-label">Gradazione</p>
                        <p className="font-mono wine-detail-spec-value">{wine.gradazione}%</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <p className="font-mono wine-detail-spec-label">Prezzo</p>
                        <p className="font-mono wine-detail-spec-value">{wine.prezzo}€</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <p className="font-mono wine-detail-spec-label">Vitigno</p>
                        <p className="font-mono wine-detail-spec-value">{wine.vitigno}</p>
                    </div>
                </div>

                <p className="wine-detail-description">
                    {wine.descrizione}
                </p>

                <p className="font-mono wine-detail-spec-label mb-2">Produttore</p>
                <p className="wine-detail-description">{wine.produttore}</p>

                <p className="font-mono wine-detail-spec-label mb-2">Abbinamenti</p>
                <div className="mb-4">
                    {wine.abbinamento?.map(tag => (
                        <span key={tag} className="wine-detail-tag">{tag}</span>
                    ))}
                </div>

                <button
                    className="wine-detail-back border-0 bg-transparent"
                    onClick={onRemove}
                >
                    ✕ Rimuovi dal confronto
                </button>

            </div>

        </>
    )
}

export default CompareCard