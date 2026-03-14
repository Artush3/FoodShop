import Logo from "@/shared/ui/logo"
import clsx from "clsx"
import logo from "@/shared/assets/images/header/logo.svg"
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={clsx(styles.inner, "container")}>
                <Logo 
                    pathImg={logo} 
                    width={150} 
                    height={29}
                />
            </div>
        </header>
    )
}

export default Header