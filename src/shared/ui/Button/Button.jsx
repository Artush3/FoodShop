import clsx from "clsx"
import styles from "./Button.module.scss"

const Button = (props) => {
    const {
        isAccent,
        title,
        onClick
    } = props

    return (
        <button 
            type="button"
            onClick={onClick}
            className={clsx(styles.button, isAccent ? styles["isAccent"] : "")}
        >
            {title}
        </button>
    )
}

export default Button