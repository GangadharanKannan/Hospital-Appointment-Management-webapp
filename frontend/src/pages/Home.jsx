import Banner from '../components/Banner'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctor from '../components/TopDoctor'

const Home = () => {
  return (
    <>
      <Header />
      <SpecialityMenu />
      <TopDoctor />
      <Banner />
    </>
  )
}

export default Home