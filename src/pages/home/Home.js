import FeaturedProducts from '../home/FeaturedProducts'
import Hero from '../home/Hero'
import Testimonials from '../home/Testimonials'
import Faq from '../home/Faq'
import { useTitle } from '../../hooks/useTitle'

const Home = () => {
  useTitle("Home")
  return (
    <main className='max-w-[1300px]'>
      <Hero />
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
    </main>
  )
}

export default Home