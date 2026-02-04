import ButtonQuantity from "@/shared/ui/ButtonQuantity"
import styles from "./ChangeQuantity.module.scss"

const ChangeQuantity = () => {
    return (
        <div className={styles.wrapper}>
            <ButtonQuantity sign="-" />
            <span className={styles.quantity}>1</span>
            <ButtonQuantity sign="+" />
        </div>
    )
}

export default ChangeQuantity