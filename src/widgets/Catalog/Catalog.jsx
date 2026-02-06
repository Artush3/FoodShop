import SelectCategory from "@/features/select-category"
import styles from "./Catalog.module.scss"
import clsx from "clsx"
import Category from "@/entities/category"
import Basket from "@/widgets/Basket"
import CatalogProvider from "./model/CatalogContext"

const Catalog = () => {
    return (
        <CatalogProvider>
            <section 
                className={styles.catalog} 
                aria-labelledby="menu-title"
            >
                <div className={clsx(styles.inner, "container")}>
                    <SelectCategory />
                    <div className={styles.action}>
                        <Category />
                        <Basket />
                    </div>
                </div>
            </section>
        </CatalogProvider>
    )
}

export default Catalog