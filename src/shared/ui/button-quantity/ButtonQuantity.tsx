import styles from "./ButtonQuantity.module.scss"

interface Props {
    sign: string,
    onClick: () => void 
}

const ButtonQuantity = (props: Props) => {
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