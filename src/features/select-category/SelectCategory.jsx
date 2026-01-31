import CategoryButton from "@/shared/ui/CategoryButton"
import styles from "./SelectCategory.module.scss"
import useCategoryButton from "./model/useCategoryButton"

const SelectCategory = () => {
    const {
        buttons,
        handleChangeActiveTab
    } = useCategoryButton()

    return (
        <div className={styles.category}>
            <ul className={styles.list}>
                {buttons.map(({id, title, pathImg, isActive, ariaControls}) => (
                    <li className={styles.item} key={id}>
                        <CategoryButton 
                            id={id}
                            title={title}
                            pathImg={pathImg}
                            isActive={isActive}
                            onClick={() => handleChangeActiveTab(id)}
                            ariaControls={ariaControls}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SelectCategory