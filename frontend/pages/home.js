import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Btn from './src/components/cardapio/btn'
import Card from './src/components/cardapio/card'

export default function Home() {
  return (
    <div className={styles.containerAtendente}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="https://testemailcot.s3-sa-east-1.amazonaws.com/pizza.png" />
      </Head>

      <main>
        <div className={styles.atendenteArea}>
          <Btn />
          <Card />
        </div>
      </main>
    </div>
  ) 
}