import styles from  '../styles/Home.module.css';


const Home = () => {

    return(
        <div className={styles.heroSection}>
            <div className={styles.firstDiv}> 
                 <h1 className={styles.gameversetitle}>Welcome to GameVerse</h1>
                 <button className={styles.gameVersButton} type='button'> Enter the Gameverse</button>

            </div>
            <div className={styles.secondDiv}>
                <h2 className={styles.gameversetitle}>Hottest Games</h2>
                <div className={styles.hottestgamecontainer}>
                   
                    
                    
                    

                </div>

            </div>
        </div>
    )
    
}

export default Home;