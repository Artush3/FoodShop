import { Link } from "react-router"
import styles from "./Logo.module.scss"
import clsx from "clsx"

interface Props {
    pathImg: string,
    width: number,
    height: number,
    className?: string
}

const Logo = (props: Props) => {
    const {
        pathImg,
        width,
        height,
        className
    } = props

    return (
        <Link to="/" className={clsx(styles.logo, className)}>
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