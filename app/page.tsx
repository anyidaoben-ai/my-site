import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel';
import styles from "./page.module.css"; 

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <h1 className={styles.title}>Paradiseはこちら</h1>
        <Carousel />


  
      </main>

      <Footer />
    </>
  )
}