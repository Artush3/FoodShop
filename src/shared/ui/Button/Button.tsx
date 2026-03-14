import clsx from "clsx"
import styles from "./Button.module.scss"
import { MouseEvent } from 'react';

interface Props {
    isAccent?: boolean,
    title: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: Props) => {
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