import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FormSolic from './src/components/cardapio/formSolic'
import Card from './src/components/cardapio/card'


export default function Home() {
  return (
    <div className={styles.containerAtendente}>
      <Head>
        <title>Cliente</title>
        <link rel="icon" href="https://testemailcot.s3-sa-east-1.amazonaws.com/pizza.png" />
      </Head>

      <main>
        <div className={styles.atendenteArea}>
            <Card />
          <FormSolic />
        </div>
      </main>
    </div>
  )
}