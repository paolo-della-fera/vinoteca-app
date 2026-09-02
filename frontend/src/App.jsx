import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importa il provider del contesto globale per condividere lo stato dei vini tra i componenti
import { GlobalProvider } from "./context/GlobalContext"

import WineList from "./pages/WineList"
import WineDetail from "./pages/WineDetail"
import Compare from "./pages/Compare"
import Favorites from "./pages/Favorites"

import Navbar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {

  return (
    <>

      {/* Avvolge l'applicazione con il provider del contesto globale */}
      <GlobalProvider>

        {/* Provider del contesto globale per condividere lo stato dei vini tra i componenti */}
        <BrowserRouter>

          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            {/* Barra di navigazione */}
            <Navbar />

            <div style={{ flex: 1 }}>
              <Routes>

                {/* Definisce le rotte dell'applicazione */}
                <Route path="/" element={<WineList />} />
                <Route path="/vino/:id" element={<WineDetail />} />
                <Route path="/confronto" element={<Compare />} />
                <Route path="/preferiti" element={<Favorites />} />

              </Routes>
            </div>

            {/* Footer */}
            <Footer />

          </div>

        </BrowserRouter >

      </GlobalProvider>

    </>
  )
}

export default App