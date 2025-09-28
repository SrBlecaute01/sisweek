import Navbar from '../../components/Navbar';
import Banner from './components/Banner'
import About from './components/About/About';
import Guests from './components/Guests/Guests';
import styles from './Home.module.css'
import Sponsors from "./components/Sponsors";
import Awards from "./components/Awards";
import EventSchedules from "./components/EventSchedules";

function Home() {
  return (
      <main className={styles.main}>
        <Navbar/>
        <Banner/>
        <About/>
        <Guests/>
        <Awards/>
        <EventSchedules/>
        <Sponsors/>
      </main>
  )
}

export default Home;