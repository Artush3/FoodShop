import { memo, useContext } from "react"
import styles from "./Сategory.module.scss"
import Product from "../product/Product"
import { CatalogContext } from "@/widgets/Catalog/model/CatalogContext"

const Category = () => {
    const {
        products,
        titleCategory
    } = useContext(CatalogContext)

    return (
        <div 
            className={styles.category}
            tabIndex="0"
        >
            <h2 id="menu-title" className={styles.title}>{titleCategory.current}</h2>
            <ul className={styles.list}>
                {products.map(({id, image, price, title, weight}) => (
                    <li key={id} className={styles.item}>
                        <Product
                            id={id}
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