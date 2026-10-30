import { news } from '../data/data'

function News() {
  return (
    <section id="novedades" className="section">
      <div className="container">
        <h2 className="section-title">Novedades</h2>
        <div className="row g-4">
          {news.map((item) => (
            <div className="col-md-4" key={item.id}>
              <article className="news-card h-100">
                <span className="news-tag">{item.tipo}</span>
                <h3 className="h5 mt-3">{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News