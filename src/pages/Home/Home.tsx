import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner'
import styles from './Home.module.css'

function Home() {
  return (
      <main className={styles.main}>
        <Navbar/>
        <Banner/>
      </main>
  )
}

export default Home;