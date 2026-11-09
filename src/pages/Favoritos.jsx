import { Link } from 'react-router-dom'
import JuegosCard from '../components/JuegosCard'

function Favoritos({ juegos, favoritos, onToggleFavorito }) {
  const juegosFavoritos = juegos.filter((juego) => favoritos.includes(juego.id))

  return (
    <section className="pagina">
      <div className="container">
        <h1 className="section-title">Mis favoritos</h1>

        {juegosFavoritos.length === 0 ? (
          <div className="estado-vacio text-center">
            <p className="h5">Todavía no tienes juegos favoritos</p>
            <p>Explora el catálogo y agrega los que más te gusten.</p>
            <Link to="/catalogo" className="btn btn-pixel">Ir al catálogo</Link>
          </div>
        ) : (
          <div className="row g-4">
            {juegosFavoritos.map((juego) => (
              <div className="col-12 col-sm-6 col-lg-4" key={juego.id}>
                <JuegoCard
                  juego={juego}
                  esFavorito={true}
                  onToggleFavorito={onToggleFavorito}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

  )
}

export default Favoritos