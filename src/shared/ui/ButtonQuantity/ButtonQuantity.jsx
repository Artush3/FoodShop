import styles from "./ButtonQuantity.module.scss"

const ButtonQuantity = (props) => {
    const {
        sign,
        onClick
    } = props

    return (
        <button 
            type="button" 
            className={styles.button}
            onClick={onClick}
        >
            {sign}
        </button>
    )
}

export default ButtonQuantity