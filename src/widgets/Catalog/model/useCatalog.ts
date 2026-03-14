import { useEffect, useRef, useState } from "react"
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
import { IButtonCategory, IItem } from "@/shared/types"

const useCatalog = () => {
    const [activeTab, setActiveTab] = useState<string>("burgers")
    const [products, setProducts] = useState<IItem[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    
    const buttons = (): IButtonCategory[] => {
        const category: IButtonCategory[] = [
            {
                id: "burgers",
                title: "Бургеры",
                pathImg: burgerIcon,
                isActive: true
            },
            {
                id: "snacks",
                title: "Закуски",
                pathImg: snacksIcon,
                isActive: false
            },
            {
                id: "hotdogs",
                title: "Хот-доги",
                pathImg: hotDogsIcon,
                isActive: false
            },
            {
                id: "combo",
                title: "Комбо",
                pathImg: comboIcon,
                isActive: false
            },
            {
                id: "shawarma",
                title: "Шаурма",
                pathImg: shawarmaIcon,
                isActive: false
            },
            {
                id: "pizza",
                title: "Пицца",
                pathImg: pizzaIcon,
                isActive: false
            },
            {
                id: "wok",
                title: "Вок",
                pathImg: wokIcon,
                isActive: false
            },
            {
                id: "desserts",
                title: "Десерты",
                pathImg: dessertsIcon,
                isActive: false
            },
            {
                id: "sauces",
                title: "Соусы",
                pathImg: saucesIcon,
                isActive: false
            }
        ]
    
        return category.map(element => ({
            ...element,
            isActive: element.id === activeTab
        }))
    }

    const activeButton = useRef<HTMLButtonElement | null>(null)

    const {
        titleCategory,
        gettitleCategory
    } = useGetTitle()

    const handleChangeActiveTab = (idTab: string): void => {
        catalogAPI.getAllByСategory(idTab)
            .then(result => {
                setIsLoading(false)
                setActiveTab(idTab)
                setProducts(result)
                gettitleCategory(idTab)
                setTimeout(() => {
                    activeButton.current?.focus()
                }, 1)
            })
    }

    useEffect(() => {
        catalogAPI.getAllByСategory("burgers")
            .then(result => {
                setProducts(result)
                setIsLoading(false)
            })
    }, [])
    
    return {
        isLoading,
        buttons,
        products,
        titleCategory,
        handleChangeActiveTab,
        activeButton
    }
}

export default useCatalog