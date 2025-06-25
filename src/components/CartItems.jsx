import { useGameContext } from "./GameContext"
import styles from "../styles/CartItems.module.css"

function CartItems () {
    const {cart} = useGameContext()
    console.log(cart)

    return (
        <div className={styles.cartItemsDiv}>
            {cart.map((item) => (
                <div id={item.id} className={styles.cartItem}>
                    <h2>{item.name}</h2>
                </div>
            ))}


        </div>
    )
}

export default CartItems;