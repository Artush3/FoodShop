import SelectCategory from "@/features/select-category"
import styles from "./Catalog.module.scss"
import clsx from "clsx"
import Category from "@/entities/category"
import useCatalog from "./model/useCatalog"
import Basket from "@/widgets/Basket"

const Catalog = () => {
    const {
        buttons,
        products,
        titleCategory,
        handleChangeActiveTab
    } = useCatalog()
    
    return (
        <section 
            className={styles.catalog} 
            aria-label="Меню и корзина"
        >
            <div className={clsx(styles.inner, "container")}>
                <SelectCategory 
                    buttons={buttons} 
                    onChangeActiveTab={handleChangeActiveTab} 
                />
                <div className={styles.action}>
                    <Basket />
                    <Category 
                        products={products}
                        titleCategory={titleCategory}
                    />
                </div>
            </div>
        </section>
    )
}

export default Catalog