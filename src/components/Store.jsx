import Header from './Header';
import styles from '../styles/Store.module.css';
import Navbar from './Navbar';
function Store() {
  return (
    <div className="store">
      <Header />
      <div className={styles.storeContent}>
        <h1>Welcome to the Game Store</h1>
        <p>Explore our collection of games!</p>
      </div>
      <Navbar />
    </div>
  );
}

export default Store;
