import clsx from "clsx"
import heroImage from "@/shared/assets/images/hero/burger.svg"
import styles from "./Hero.module.scss"

const Hero = () => {
    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={clsx(styles.inner, "container")}>
                <img src={heroImage} alt="" width={326} height={326} loading="lazy" className={styles.image} />
                <div className={styles.description}>
                    <h1 id="hero-title" className={styles.title}>Только самые <span>сочные бургеры!</span></h1>
                    <p className={styles.subtitle}>Бесплатная доставка от 599₽</p>
                </div>
            </div>
        </section>
    )
}

export default Hero