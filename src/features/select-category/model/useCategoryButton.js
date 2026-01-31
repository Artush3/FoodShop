import { useMemo, useState } from "react"
import burgerIcon from "@/shared/assets/icons/category/burger.svg"
import сomboIcon from "@/shared/assets/icons/category/сombo.svg"
import dessertsIcon from "@/shared/assets/icons/category/desserts.svg"
import hotDogsIcon from "@/shared/assets/icons/category/hot-dogs.svg"
import pizzaIcon from "@/shared/assets/icons/category/pizza.svg"
import saucesIcon from "@/shared/assets/icons/category/sauces.svg"
import shawarmaIcon from "@/shared/assets/icons/category/shawarma.svg"
import snacksIcon from "@/shared/assets/icons/category/snacks.svg"
import wokIcon from "@/shared/assets/icons/category/wok.svg"

const useCategoryButton = () => {
    const [activeTab, setActiveTab] = useState("tab-1")

    const buttons = useMemo(() => {
        const category = [
            {
                id: "tab-1",
                title: "Бургеры",
                pathImg: burgerIcon,
                ariaControls: "tabpanel-1"
            },
            {
                id: "tab-2",
                title: "Закуски",
                pathImg: snacksIcon,
                ariaControls: "tabpanel-2"
            },
            {
                id: "tab-3",
                title: "Хот-доги",
                pathImg: hotDogsIcon,
                ariaControls: "tabpanel-3"
            },
            {
                id: "tab-4",
                title: "Комбо",
                pathImg: сomboIcon,
                ariaControls: "tabpanel-4"
            },
            {
                id: "tab-5",
                title: "Шаурма",
                pathImg: shawarmaIcon,
                ariaControls: "tabpanel-5"
            },
            {
                id: "tab-6",
                title: "Пицца",
                pathImg: pizzaIcon,
                ariaControls: "tabpanel-6"
            },
            {
                id: "tab-7",
                title: "Вок",
                pathImg: wokIcon,
                ariaControls: "tabpanel-7"
            },
            {
                id: "tab-8",
                title: "Десерты",
                pathImg: dessertsIcon,
                ariaControls: "tabpanel-8"
            },
            {
                id: "tab-9",
                title: "Соусы",
                pathImg: saucesIcon,
                ariaControls: "tabpanel-9"
            }
        ]

        return category.map(element => ({
            ...element,
            isActive: element.id === activeTab
        }))
    }, [activeTab])

    const handleChangeActiveTab = (idTab) => {
        setActiveTab(idTab)
    }

    return {
        buttons,
        handleChangeActiveTab
    }
}

export default useCategoryButton