import { memo, useContext } from "react"
import styles from "./Basket.module.scss"
import { BasketContext } from "../Catalog/model/CatalogContext"

const Basket = () => {
    const {
        basket
    } = useContext(BasketContext)

    if(basket.length === 0) {
        return <div className={styles.basket}>
            <div className={styles.header}>
                <h3 className={styles.title}>Корзина</h3>
                <div className={styles.counter}>
                    <p>0</p>
                </div>
            </div>
            <div className={styles.body}>
                <p className={styles.empty}>Тут пока пусто :(</p>
            </div>
        </div>
    }

    return (
        <div className={styles.basket}>
            <ul className={styles.list}>
                {basket.map(({id, title}) => (
                    <li key={id}>
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(Basket)