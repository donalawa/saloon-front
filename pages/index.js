import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <div classNam={styles.loginContainer}>
            <div className={styles.login}>
                <h1 className={styles.h1}>Login</h1>
                <br />
                <div className={styles.username}>
                    <input className={styles.name} type="text" placeholder="Username" required/>
                </div>
                <div className={styles.password}>
                    <input className={styles.name} type="password" placeholder="Password" required/>
                </div>
                <button className={styles.loginBtn}>Login</button>
            </div>
        </div>
    </div>
  )
}
