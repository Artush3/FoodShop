import { memo } from "react"
import styles from "./CartItem.module.scss"
import ChangeQuantity from "@/features/change-quantity"

const CartItem = (props) => {
    const {
        id,
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
            <ChangeQuantity id={id} />
        </article>
    )
}

export default memo(CartItem)