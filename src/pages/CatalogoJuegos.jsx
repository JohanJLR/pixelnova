import JuegoCard from '../components/JuegosCard'

function CatalogoJuegos({ juegos, favoritos, onToggleFavorito }) {
  return (
    <section className="pagina">
      <div className="container">
        <h1 className="section-title">Catálogo de juegos</h1>
        <div className="row g-4">
          {juegos.map((juego) => (
            <div className="col-12 col-sm-6 col-lg-4" key={juego.id}>
              <JuegoCard
                juego={juego}
                esFavorito={favoritos.includes(juego.id)}
                onToggleFavorito={onToggleFavorito}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CatalogoJuegos