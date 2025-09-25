import Navbar from '../../components/Navbar';
import Banner from './components/Banner'
import About from './components/About/About';
import Guests from './components/Guests/Guests';
import styles from './Home.module.css'
import EventSchedule from "./components/EventSchedule";

function Home() {
  return (
      <main className={styles.main}>
        <Navbar/>
        <Banner/>
        <About/>
        <Guests/>
        <EventSchedule/>
      </main>
  )
}

export default Home;