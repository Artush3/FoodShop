import { memo } from "react"
import styles from "./Сategory.module.scss"
import Product from "../product/Product"

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
                {products.map(({id, image, price, title, weight}) => (
                    <li key={id} className={styles.item}>
                        <Product
                            image={image}
                            price={price}
                            title={title}
                            weight={weight}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(Category)