function JuegosCard({ juego, esFavorito, onToggleFavorito }) {
  return (
    <div className="card game-card juego-card h-100">
      <img src={juego.imagen} className="card-img-top" alt={`Imagen de ${juego.nombre}`} />
      <div className="card-body d-flex flex-column">
        <span className="badge badge-pixel mb-2 align-self-start">{juego.genero}</span>
        <h3 className="card-title h5">{juego.nombre}</h3>
        <p className="card-text">{juego.descripcion}</p>
        <button
          type="button"
          className={`btn mt-auto ${esFavorito ? 'btn-quitar' : 'btn-pixel'}`}
          onClick={() => onToggleFavorito(juego.id)}
        >
          {esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </button>
      </div>
    </div>
  )
}

export default JuegosCard