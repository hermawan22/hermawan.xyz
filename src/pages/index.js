import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../views/Landing'

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hermawan (Nino)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}

export default Index;