import Navbar from '../../components/Navbar';
import Banner from './components/Banner'
import About from './components/About/About';
import Guests from './components/Guests/Guests';
import styles from './Home.module.css'
import Sponsors from "./components/Sponsors";
import Awards from "./components/Awards";
import EventSchedules from "./components/EventSchedules";
import RegistrationForm from "./components/RegistrationForm";
import {Bounce, ToastContainer} from "react-toastify";
import Footer from '../../components/Footer';

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
        <RegistrationForm/>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
        />
        <Footer/>
      </main>
  )
}

export default Home;