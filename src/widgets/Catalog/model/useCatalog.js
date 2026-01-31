import { useCallback, useEffect, useMemo, useState } from "react"
import burgerIcon from "@/shared/assets/icons/category/burger.svg"
import comboIcon from "@/shared/assets/icons/category/сombo.svg"
import dessertsIcon from "@/shared/assets/icons/category/desserts.svg"
import hotDogsIcon from "@/shared/assets/icons/category/hot-dogs.svg"
import pizzaIcon from "@/shared/assets/icons/category/pizza.svg"
import saucesIcon from "@/shared/assets/icons/category/sauces.svg"
import shawarmaIcon from "@/shared/assets/icons/category/shawarma.svg"
import snacksIcon from "@/shared/assets/icons/category/snacks.svg"
import wokIcon from "@/shared/assets/icons/category/wok.svg"
import catalogAPI from "@/shared/api/catalog"

const useCatalog = () => {
    const [activeTab, setActiveTab] = useState("burgers")
    const [products, setProducts] = useState([])
    
    const buttons = useMemo(() => {
        const category = [
            {
                id: "burgers",
                title: "Бургеры",
                pathImg: burgerIcon,
                ariaControls: "tabpanel-1"
            },
            {
                id: "snacks",
                title: "Закуски",
                pathImg: snacksIcon,
                ariaControls: "tabpanel-2"
            },
            {
                id: "hotdogs",
                title: "Хот-доги",
                pathImg: hotDogsIcon,
                ariaControls: "tabpanel-3"
            },
            {
                id: "combo",
                title: "Комбо",
                pathImg: comboIcon,
                ariaControls: "tabpanel-4"
            },
            {
                id: "shawarma",
                title: "Шаурма",
                pathImg: shawarmaIcon,
                ariaControls: "tabpanel-5",
            },
            {
                id: "pizza",
                title: "Пицца",
                pathImg: pizzaIcon,
                ariaControls: "tabpanel-6",
            },
            {
                id: "wok",
                title: "Вок",
                pathImg: wokIcon,
                ariaControls: "tabpanel-7",
            },
            {
                id: "desserts",
                title: "Десерты",
                pathImg: dessertsIcon,
                ariaControls: "tabpanel-8",
            },
            {
                id: "sauces",
                title: "Соусы",
                pathImg: saucesIcon,
                ariaControls: "tabpanel-9",
            }
        ]
    
        return category.map(element => ({
            ...element,
            isActive: element.id === activeTab
        }))
    }, [activeTab])
    
    const handleChangeActiveTab = useCallback((idTab) => {
        setActiveTab(idTab)
        catalogAPI.getAllByCatalog(idTab)
            .then(setProducts)
    }, [])

    useEffect(() => {
        catalogAPI.getAllByCatalog("burgers")
            .then(setProducts)
    }, [])
    
    return {
        buttons,
        handleChangeActiveTab,
        products
    }
}

export default useCatalog