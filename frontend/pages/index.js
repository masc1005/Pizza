import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from './src/components/areaLogin'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="https://testemailcot.s3-sa-east-1.amazonaws.com/pizza.png" />
      </Head>

      <main>
        <Login />
      </main>
    </div>
  )
}
