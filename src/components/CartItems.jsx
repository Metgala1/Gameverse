import { useGameContext } from './GameContext';
import styles from '../styles/CartItems.module.css';

function CartItems() {
  const { cart, setCart, setCartVisibility } = useGameContext();
  console.log(cart);

  return (
    <div className={styles.cartItemsDiv}>
      <button
        onClick={() => setCartVisibility((prevState) => !prevState)}
        className={styles.closeBtn}
      >
        {'X'}
      </button>
      <div className={styles.itemsContainer}>
        {cart.map((item) => (
          <div id={item.id} className={styles.cartItem}>
            <h2>{item.name}</h2>
             <hr />
          </div>
        ))}
      </div>
      {cart.length > 0 ? (
        <button onClick={() => setCart([])} className={styles.clearCart}>
          Clear Cart
        </button>
      ) : null}
    </div>
  );
}

export default CartItems;
