import { useContext } from "react"
import styles from "./Сategory.module.scss"
import Product from "../product/Product"
import { CatalogContext } from "@/widgets/catalog/model/CatalogContext"
import { ICatalogContext } from "@/shared/types"

const Category = () => {
    const {
        isLoading,
        products,
        titleCategory
    } = useContext(CatalogContext) as ICatalogContext

    return (
        <div 
            className={styles.category}
            tabIndex={0}
        >
            <h2 id="menu-title" className={styles.title}>{titleCategory.current}</h2>
            {
                isLoading ? 
                    <div>Loading...</div> : 
                    <ul className={styles.list}>
                        {products.map(({id, image, price, title, weight}) => (
                            <li key={id} className={styles.item}>
                                <Product
                                    quantity={1}
                                    id={id}
                                    image={image}
                                    price={price}
                                    title={title}
                                    weight={weight}
                                />
                            </li>
                        ))}
                    </ul>
            }
        </div>
    )
}

export default Category