import { Link } from "react-router"
import styles from "./Logo.module.scss"

const Logo = (props) => {
    const {
        pathImg,
        width,
        height
    } = props

    return (
        <Link to="/" className={styles.logo}>
            <img 
                src={pathImg} 
                alt="" 
                loading="lazy" 
                width={width} 
                height={height} 
                className={styles.image}
            />
        </Link>
    )
}

export default Logo