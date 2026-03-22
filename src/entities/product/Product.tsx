import AddToBasket from "@/features/add-to-basket"
import styles from "./Product.module.scss"
import { IItem } from "@/shared/types"
import receiveRubles from "@/shared/lib/receiveRubles"
import useNavigateWithBackground from "@/shared/hooks/useNavigateWithBackground"

const Product = (props: IItem) => {
    const {
        id,
        image,
        price,
        title,
        weight
    } = props

    const openProduct = useNavigateWithBackground(`/food/${id}`)

    return (
        <article 
            className={styles.product}
            role="button"
            onClick={openProduct}
            tabIndex={0}
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
                <h3 className={styles.price}>{receiveRubles(price)}</h3>
                <p className={styles.title}>{title}</p>
                <p className={styles.weight}>{weight}г</p>
            </div>
            <AddToBasket id={id} />
        </article>
    )
}

export default Product