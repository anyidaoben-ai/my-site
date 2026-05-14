import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel';
import styles from "./page.module.css"; 

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <h1 className={styles.title}>Paradise</h1>
        <Carousel />
       <div className={styles.videoList}>

  <section className={styles.videoItem}>
    <h2 className={styles.subtitle}>TechnologyLand & AI</h2>
    <video controls width="500">
      <source src="/" type="video/mp4" />
    </video>
  </section>

  <section className={styles.videoItem}>
    <h2 className={styles.subtitle}>Paradise Onsenn</h2>
    <video controls width="500">
      <source src="/" type="video/mp4" />
    </video>
  </section>

  <section className={styles.videoItem}>
    <h2 className={styles.subtitle}>Japanese Hokkaido</h2>
    <video controls width="500">
      <source src="/" type="video/mp4" />
    </video>
  </section>

  <section className={styles.videoItem}>
    <h2 className={styles.subtitle}>Shokujiba Beach</h2>
    <video controls width="500">
      <source src="/" type="video/mp4" />
    </video>
  </section>

</div>
      </main>

      <Footer />
    </>
  )
}