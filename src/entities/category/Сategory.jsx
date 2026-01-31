import { memo } from "react"
import styles from "./Сategory.module.scss"

const Category = (props) => {
    const {
        products
    } = props

    return (
        <div className={styles.category}>
            <ul className={styles.list}>
                {products.map(({title}) => (
                    <li key={title} className={styles.item}>
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(Category)