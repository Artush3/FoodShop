import { memo } from "react"
import styles from "./CartItem.module.scss"

const CartItem = (props) => {
    const {
        image,
        title,
        weight,
        price
    } = props

    return (
        <article className={styles.cart}>
            <img src={image} alt="" loading="lazy" width={64} height={52} className={styles.image} />
            <div className={styles.description}>
                <p className={styles.title}>{title}</p>
                <p className={styles.weight}>{weight}г</p>
                <p className={styles.price}>{price}₽</p>
            </div>
            <div className={styles.action}></div>
        </article>
    )
}

export default memo(CartItem)