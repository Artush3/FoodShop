import { useCallback, useEffect, useMemo, useRef, useState } from "react"
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
import useGetTitle from "./useGetTitle"

const useCatalog = () => {
    const [activeTab, setActiveTab] = useState("burgers")
    const [products, setProducts] = useState([])
    
    const buttons = useMemo(() => {
        const category = [
            {
                id: "burgers",
                title: "Бургеры",
                pathImg: burgerIcon,
            },
            {
                id: "snacks",
                title: "Закуски",
                pathImg: snacksIcon,
            },
            {
                id: "hotdogs",
                title: "Хот-доги",
                pathImg: hotDogsIcon,
            },
            {
                id: "combo",
                title: "Комбо",
                pathImg: comboIcon,
            },
            {
                id: "shawarma",
                title: "Шаурма",
                pathImg: shawarmaIcon,
            },
            {
                id: "pizza",
                title: "Пицца",
                pathImg: pizzaIcon,
            },
            {
                id: "wok",
                title: "Вок",
                pathImg: wokIcon,
            },
            {
                id: "desserts",
                title: "Десерты",
                pathImg: dessertsIcon,
            },
            {
                id: "sauces",
                title: "Соусы",
                pathImg: saucesIcon,
            }
        ]
    
        return category.map(element => ({
            ...element,
            isActive: element.id === activeTab
        }))
    }, [activeTab])

    const activeButton = useRef(null)

    const {
        titleCategory,
        gettitleCategory
    } = useGetTitle()

    const handleChangeActiveTab = useCallback((idTab) => {
        catalogAPI.getAllByCatalog(idTab)
            .then(result => {
                setActiveTab(idTab)
                setProducts(result)
                gettitleCategory(idTab)
                setTimeout(() => {
                    activeButton.current.focus()
                }, 1)
            })
    }, [gettitleCategory])

    useEffect(() => {
        catalogAPI.getAllByCatalog("burgers")
            .then(setProducts)
    }, [])
    
    return {
        buttons,
        products,
        titleCategory,
        handleChangeActiveTab,
        activeButton
    }
}

export default useCatalog