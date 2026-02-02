import CategoryButton from "@/shared/ui/CategoryButton"
import styles from "./SelectCategory.module.scss"
import { memo } from "react"

const SelectCategory = (props) => {
    const {
        buttons,
        onChangeActiveTab,
        activeButton
    } = props

    const previousTab = () => {
        const currentIndex = buttons.findIndex(element => element.isActive)
        let nextIndex = "burgers"

        if(currentIndex !== 0) {
            nextIndex = buttons[currentIndex - 1].id
        } else {
            nextIndex = buttons.at(-1).id
        }

        onChangeActiveTab(nextIndex)
    }

    const nextTab = () => {
        const currentIndex = buttons.findIndex(element => element.isActive)
        let nextIndex = "burgers"

        if(currentIndex !== buttons.length - 1) {
            nextIndex = buttons[currentIndex + 1].id
        } else {
            nextIndex = buttons[0].id
        }

        onChangeActiveTab(nextIndex)
    }

    const firstTab = () => {
        onChangeActiveTab(buttons[0].id)
    }

    const lastTab = () => {
        onChangeActiveTab(buttons.at(-1).id)
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
                            activeButton={activeButton}
                            title={title}
                            pathImg={pathImg}
                            isActive={isActive}
                            onClick={() => onChangeActiveTab(id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(SelectCategory)