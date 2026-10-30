import { categories } from '../data/data'

function Categories() {
  return (
    <section id="categorias" className="section">
      <div className="container">
        <h2 className="section-title">Explora por categoría</h2>
        <div className="row g-4">
          {categories.map((cat) => (
            <div className="col-6 col-md-3" key={cat.id}>
              <div className="category-card text-center">
                <span className="category-icon">{cat.icono}</span>
                <h3 className="h5 mt-2">{cat.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories