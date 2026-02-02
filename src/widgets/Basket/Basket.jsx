import { memo } from "react"
import styles from "./Basket.module.scss"

const Basket = () => {
    return (
        <div className={styles.basket}></div>
    )
}

export default memo(Basket)