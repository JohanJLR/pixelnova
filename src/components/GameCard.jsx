function GameCard({ nombre, genero, descripcion, imagen }) {
  return (
    <div className="card game-card h-100">
      <img src={imagen} className="card-img-top" alt={`Imagen de ${nombre}`} />
      <div className="card-body">
        <span className="badge badge-pixel mb-2">{genero}</span>
        <h3 className="card-title h5">{nombre}</h3>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  )
}

export default GameCard