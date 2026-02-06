import clsx from "clsx"
import styles from "./Footer.module.scss"
import Logo from "@/shared/ui/Logo"
import logoFooter from "@/shared/assets/images/footer/logo-footer.svg"
import items from "./data.json"
import Social from "@/shared/ui/Social"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={clsx(styles.inner, "container")}>
                <div className={styles.cap}>
                    <Logo className={styles.logo} pathImg={logoFooter} width={300} height={58} />
                    <div className={styles.contact}>
                        <p className={clsx(styles.title, "h3")}>Номер для заказа</p>
                        <a href="tel:+79308333811" className={styles.number}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_57_2456)">
                                    <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_57_2456">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>+7(930)833-38-11</span>
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <p className={clsx(styles.title, "h3")}>Мы в соцсетях</p>
                        <div className={styles.social}>
                            {items.map(({title, iconPath}) => (
                                <Social 
                                    title={title}
                                    key={title}
                                    iconPath={iconPath}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <p className={styles.text}>© YouMeal, <time value="2022">2022</time></p>
                    <address className={styles.text}>Design: Anastasia Ilina</address>
                </div>
            </div>
        </footer>
    )
}

export default Footer