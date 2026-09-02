function Footer() {
    return (
        <>

            {/* Footer */}
            <footer className="mt-5 py-4" style={{ borderTop: '1px solid var(--ottone)' }}>

                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <span className="font-display" style={{ color: 'var(--etichetta)' }}>
                        Vinoteca
                    </span>

                    <div className="d-flex gap-3 font-mono" style={{ fontSize: '12px' }}>
                        <a href="#" style={{ color: 'var(--ottone)', textDecoration: 'none' }}>Instagram</a>
                        <a href="#" style={{ color: 'var(--ottone)', textDecoration: 'none' }}>Contatti</a>
                        <a href="#" style={{ color: 'var(--ottone)', textDecoration: 'none' }}>Chi siamo</a>
                    </div>

                    <span className="font-mono" style={{ color: 'var(--etichetta)', fontSize: '11px', opacity: 0.6 }}>
                        Boolean 2026
                    </span>
                </div>

            </footer>

        </>
    )
}

export default Footer