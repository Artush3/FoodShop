import CategoryButton from "@/shared/ui/category-button"
import styles from "./SelectCategory.module.scss"
import { useContext } from "react"
import { CatalogContext } from "@/widgets/catalog/model/CatalogContext"
import useSelectCategory from "./model/useSelectCategory"
import { ICatalogContext } from "@/shared/types"

const SelectCategory = () => {
    const {
        buttons,
        handleChangeActiveTab
    } = useContext(CatalogContext) as ICatalogContext

    const {
        handleKeyChangeActiveTab
    } = useSelectCategory((buttons()), handleChangeActiveTab)

    return (
        <div 
            className={styles.category} 
            onKeyDown={handleKeyChangeActiveTab}
        >
            <ul className={styles.list}>
                {(buttons()).map(({id, title, pathImg, isActive}) => (
                    <li className={styles.item} key={id}>
                        <CategoryButton
                            title={title}
                            pathImg={pathImg}
                            isActive={isActive}
                            onClick={() => handleChangeActiveTab(id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SelectCategory