import { Link } from 'react-router-dom'
import Portada from '../assets/Portada.jpg'

function Hero() {
  return (
    <header id="inicio" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="hero-tag">Bienvenido a PixelNova</p>
            <h1 className="hero-title">Descubre tu próximo juego favorito</h1>
            <p className="lead">
              Explora categorías, conoce los lanzamientos más esperados y encuentra
              recomendaciones hechas por gamers para gamers.
            </p>
            <a href="#destacados" className="btn btn-pixel btn-lg">Ver juegos destacados</a>
            <Link to="/catalogo" className="btn btn-outline-light btn-lg ms-2">Ver catálogo</Link>
          </div>
          <div className="col-lg-6">
            <img
              src= {Portada}
              alt="Videojuego destacado: Shadow Strike"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero