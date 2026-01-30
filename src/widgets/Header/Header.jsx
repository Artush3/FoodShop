import Logo from "@/shared/ui/Logo"
import clsx from "clsx"
import logo from "@/shared/assets/images/header/logo.svg"
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={clsx(styles.inner, "container")}>
                <Logo className={styles.logo} pathImg={logo} width={150} height={29} />
            </div>
        </header>
    )
}

export default Header