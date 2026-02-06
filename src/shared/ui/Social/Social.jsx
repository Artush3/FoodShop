import styles from "./Social.module.scss"

const Social = (props) => {
    const {
        iconPath,
        title
    } = props

    return (
        <a 
            href="https://github.com/Artush3" 
            className={styles.link}
            aria-label={title}
        >
            <img 
                src={iconPath}
                alt="" 
                width={36} 
                height={36} 
                loading="lazy"
                className={styles.image}
            />
        </a>
    )
}

export default Social