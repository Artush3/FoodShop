import CategoryButton from "@/shared/ui/CategoryButton"
import styles from "./SelectCategory.module.scss"
import { useContext } from "react"
import { CatalogContext } from "@/widgets/Catalog/model/CatalogContext"

const SelectCategory = () => {
    const {
        buttons,
        handleChangeActiveTab
    } = useContext(CatalogContext)

    const currentIndex = buttons.findIndex(element => element.isActive)

    const previousTab = () => {
        let nextIndex = "burgers"

        if(currentIndex !== 0) {
            nextIndex = buttons[currentIndex - 1].id
        } else {
            nextIndex = buttons.at(-1).id
        }

        handleChangeActiveTab(nextIndex)
    }

    const nextTab = () => {
        let nextIndex = "burgers"

        if(currentIndex !== buttons.length - 1) {
            nextIndex = buttons[currentIndex + 1].id
        } else {
            nextIndex = buttons[0].id
        }

        handleChangeActiveTab(nextIndex)
    }

    const firstTab = () => {
        handleChangeActiveTab(buttons[0].id)
    }

    const lastTab = () => {
        handleChangeActiveTab(buttons.at(-1).id)
    } 

    const handleKeyChangeActiveTab = (event) => {
        const { code } = event

        const action = {
            ArrowLeft: previousTab,
            ArrowRight:nextTab,
            Home: firstTab,
            End: lastTab,
        }[code]

        action?.()
    }

    return (
        <div 
            className={styles.category} 
            onKeyDown={handleKeyChangeActiveTab}
        >
            <ul className={styles.list}>
                {buttons.map(({id, title, pathImg, isActive}) => (
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