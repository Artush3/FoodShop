import clsx from "clsx"
import styles from "./CategoryButton.module.scss"

const CategoryButton = (props) => {
    const {
        pathImg,
        title,
        isActive,
        onClick,
        activeButton
    } = props

    return (
        <button 
            ref={isActive ? activeButton : null}
            role="tab"
            type="button" 
            className={clsx(styles.button, isActive ? styles.isActive : "")}
            onClick={onClick}
            aria-selected={isActive}
            tabIndex={isActive ? "0" : "-1"}
        >
            <img 
                src={pathImg} 
                alt="" 
                width={24} 
                height={24} 
                loading="lazy" 
                className={styles.image} 
            />
            <span className={styles.title}>{title}</span>
        </button>
    )
}

export default CategoryButton