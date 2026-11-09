import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedGames from '../components/FeaturedGames'
import News from '../components/News'

function Home() {
  return (
    <>
      <Hero />
      <main>
        <Categories />
        <FeaturedGames />
        <News />
      </main>
    </>
  )
}

export default Home