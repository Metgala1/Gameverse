import { useGameContext } from './GameContext';
import styles from '../styles/CartItems.module.css';

function CartItems() {
  const { cart, setCart, setCartVisibility, removeFromCart } = useGameContext();
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
            <div className={styles.cartitemcontainer}>
                <h2>{item.name}</h2>
            <button onClick={() => removeFromCart(item) } className={styles.removeItemBtn}>X</button></div>
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
