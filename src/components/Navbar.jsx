function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-3 nav-pixel">
      <a className="navbar-brand brand" href="#inicio">PIXEL<span>NOVA</span></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu"
        aria-expanded="false"
        aria-label="Abrir menú"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#categorias">Categorías</a></li>
          <li className="nav-item"><a className="nav-link" href="#destacados">Destacados</a></li>
          <li className="nav-item"><a className="nav-link" href="#novedades">Novedades</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar