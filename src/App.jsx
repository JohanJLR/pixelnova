import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatalogoJuegos from './pages/CatalogoJuegos'
import Favoritos from './pages/Favoritos'
import { games } from './data/data'

function App() {
  const [favoritos, setFavoritos] = useState([])

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    )
  }

  return (
    <>
      <Navbar totalFavoritos={favoritos.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalogo"
          element={
            <CatalogoJuegos juegos={games} favoritos={favoritos} onToggleFavorito={toggleFavorito} />
          }
        />
        <Route

          path="/favoritos"
          element={
            <Favoritos juegos={games} favoritos={favoritos} onToggleFavorito={toggleFavorito} />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App