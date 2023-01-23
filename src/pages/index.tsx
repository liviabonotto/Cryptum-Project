import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}> 
          <div className={styles.container}>
            <div className='Background'> 
            <img src='./BackgroundLogin.svg'/> 
            </div>
            <div className={styles.logo}>
            <img src='./TITLE.svg'/> 
              <p>
              Uma plataforma desenvolvida para acompanhamento de dados 
              <br/>gerenciais do Cryptum.
              </p>
            </div>
            <div className={styles.login}>
              <h1>Login</h1>
              <p>EMAIL</p>
              <input type="text" placeholder='Email' id='email'/>
              <div className={styles.password}>
              <p>PASSWORD</p>
              <input type='password' placeholder='**********'id='senha'/>
              <div className={styles.checkbox}>  
              <input type='checkbox'/> 
              <p>Remember me</p>
              </div>
              <div className={styles.button}>
              <button id='button'>Enter</button>
              </div>
              </div>
            </div>
          </div>
      </main>
    </>
  )
}
