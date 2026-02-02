import clsx from "clsx"
import styles from "./Button.module.scss"

const Button = (props) => {
    const {
        isAccent,
        title
    } = props

    return (
        <button 
            type="button"
            className={clsx(styles.button, isAccent ? styles["isAccent"] : "")}
        >
            {title}
        </button>
    )
}

export default Button