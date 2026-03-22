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
                <button 
                    type="button"
                    onClick={closeFunction}
                    className={styles.closeButton}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5.0752" y="5.28249" width="1" height="20" transform="rotate(-45 5.0752 5.28249)" fill="#B1B1B1"/>
                        <rect x="5.78223" y="19.4246" width="1" height="20" transform="rotate(-135 5.78223 19.4246)" fill="#B1B1B1"/>
                    </svg>
                </button>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal