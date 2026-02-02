import AddToBasket from "@/features/add-to-basket"
import styles from "./Product.module.scss"

const Product = (props) => {
    const {
        image,
        price,
        title,
        weight
    } = props

    return (
        <article 
            className={styles.product}
            role="button"
        >
            <img 
                src={image} 
                alt="" 
                width={276} 
                height={220} 
                loading="lazy" 
                className={styles.image}
            />
            <div className={styles.description}>
                <h3 className={styles.price}>{price}₽</h3>
                <p className={styles.title}>{title}</p>
                <p className={styles.weight}>{weight}г</p>
            </div>
            <AddToBasket />
        </article>
    )
}

export default Product