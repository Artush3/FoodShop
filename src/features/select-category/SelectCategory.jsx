import CategoryButton from "@/shared/ui/CategoryButton"
import styles from "./SelectCategory.module.scss"
import { memo } from "react"

const SelectCategory = (props) => {
    const {
        buttons,
        onChangeActiveTab
    } = props

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
                            onClick={() => onChangeActiveTab(id)}
                            ariaControls={ariaControls}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(SelectCategory)