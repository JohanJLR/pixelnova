import { games } from '../data/data'
import GameCard from './GameCard'

function FeaturedGames() {
  return (
    <section id="destacados" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Juegos destacados</h2>
        <div className="row g-4">
          {games.map((game) => (
            <div className="col-12 col-sm-6 col-lg-3" key={game.id}>
              <GameCard
                nombre={game.nombre}
                genero={game.genero}
                descripcion={game.descripcion}
                imagen={game.imagen}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGames