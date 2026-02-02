import { memo } from "react"
import styles from "./Сategory.module.scss"

const Category = (props) => {
    const {
        products,
        titleCategory
    } = props

    return (
        <div 
            className={styles.category}
            tabIndex="0"
        >
            <h2 className={styles.title}>{titleCategory.current}</h2>
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