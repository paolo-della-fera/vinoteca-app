import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useGlobalContext } from '../context/GlobalContext'

const Navbar = () => {
    // Accesso al contesto globale per ottenere i preferiti
    const { favorites } = useGlobalContext()

    return (
        <>

            {/* NaviBar */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--cantina)' }}>

                <div className="container">
                    <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
                        <img src={logo} alt="Vinoteca" style={{ height: '36px' }} />
                        <span className="font-display" style={{ color: 'var(--etichetta)' }}>
                            Vinoteca
                        </span>
                    </NavLink>

                    <div className="d-flex gap-3 align-items-center">
                        <NavLink
                            className="nav-link d-flex align-items-center gap-1"
                            to="/preferiti"
                            style={{ color: 'var(--etichetta)' }}
                        >
                            {/* Icona di cuore */}
                            <i className="bi bi-heart-fill"></i>
                            Preferiti
                            {/* Badge per il numero di preferiti */}
                            {favorites.length > 0 && (
                                <span
                                    className="badge rounded-pill"
                                    style={{ backgroundColor: 'var(--ottone)', color: 'var(--cantina)' }}
                                >
                                    {favorites.length}
                                </span>
                            )}
                        </NavLink>
                        <NavLink className="nav-link" to="/confronto" style={{ color: 'var(--etichetta)' }}>
                            Confronto
                        </NavLink>
                    </div>
                </div>

            </nav>

        </>
    )
}

export default Navbar