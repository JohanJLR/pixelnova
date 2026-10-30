import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedGames from './components/FeaturedGames'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Categories />
        <FeaturedGames />
        <News />
      </main>
      <Footer />
    </>
  )
}

export default App