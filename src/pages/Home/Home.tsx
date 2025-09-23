import Guests from '../../components/Guests/Guests';
import styles from './Home.module.css'

function Home() {
  return (
      <main className={styles.main}>
        <Guests/>
      </main>
  )
}

export default Home;