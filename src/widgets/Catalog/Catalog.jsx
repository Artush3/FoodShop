import SelectCategory from "@/features/select-category"
import styles from "./Catalog.module.scss"
import clsx from "clsx"

const Catalog = () => {
    return (
        <section className={styles.catalog} aria-label="Меню и корзина">
            <div className={clsx(styles.inner, "container")}>
                <SelectCategory />
            </div>
        </section>
    )
}

export default Catalog