import ButtonQuantity from "@/shared/ui/ButtonQuantity"
import styles from "./ChangeQuantity.module.scss"
import { useContext } from "react"
import { BasketContext } from "@/widgets/Catalog/model/CatalogContext"

const ChangeQuantity = (props) => {
    const {
        id
    } = props

    const {
        basket,
        handleChangeQuantity
    } = useContext(BasketContext)

    const quantity = basket.find(element => element.id === id).quantity

    return (
        <div className={styles.wrapper}>
            <ButtonQuantity onClick={() => handleChangeQuantity(id, "-")} sign="-" />
            <span className={styles.quantity}>{quantity}</span>
            <ButtonQuantity onClick={() => handleChangeQuantity(id, "+")} sign="+" />
        </div>
    )
}

export default ChangeQuantity