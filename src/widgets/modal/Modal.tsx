import styles from "./Modal.module.scss"
import React from "react"
import useModal from "./model/useModal"

interface Props {
    children: React.ReactNode
}

const Modal = ({children}: Props) => {
    const closeFunction = useModal()

    return (
        <div 
            className={styles.overlay}
            onClick={closeFunction}
        >
            <div 
                className={styles.modal}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal