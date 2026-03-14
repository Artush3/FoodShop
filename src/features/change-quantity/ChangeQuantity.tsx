import ButtonQuantity from "@/shared/ui/button-quantity"
import styles from "./ChangeQuantity.module.scss"
import { changeQuantityBasket, useBasket } from "@/app/store/useBasketStore"

interface Props {
    id: string
}

const ChangeQuantity = (props: Props) => {
    const {
        id
    } = props

    const basket = useBasket()

    const quantity = basket.find(element => element.id === id)?.quantity;

    return (
        <div className={styles.wrapper}>
            <ButtonQuantity onClick={() => changeQuantityBasket(id, "-")} sign="-" />
            <span className={styles.quantity}>{quantity}</span>
            <ButtonQuantity onClick={() => changeQuantityBasket(id, "+")} sign="+" />
        </div>
    )
}

export default ChangeQuantity