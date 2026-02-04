import styles from "./ButtonQuantity.module.scss"

const ButtonQuantity = (props) => {
    const {
        sign
    } = props

    return (
        <button 
            type="button" 
            className={styles.button}
        >
            {sign}
        </button>
    )
}

export default ButtonQuantity