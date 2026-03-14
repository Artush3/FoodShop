import { useRef } from "react"

const useGetTitle = () => {
    let titleCategory = useRef<string>("Бургеры")

    const gettitleCategory = (idTab: string): void => {
        switch(idTab) {
            case "burgers":
                titleCategory.current = "Бургеры"
                break
            case "snacks":
                titleCategory.current = "Закуски"
                break
            case "hotdogs":
                titleCategory.current = "Хот-доги"
                break
            case "combo":
                titleCategory.current = "Комбо"
                break
            case "shawarma":
                titleCategory.current = "Шаурма"
                break
            case "pizza":
                titleCategory.current = "Пицца"
                break
            case "wok":
                titleCategory.current = "Вок"
                break
            case "desserts":
                titleCategory.current = "Десерты"
                break
            default:
                titleCategory.current = "Соусы"
                break
        }
    }
    
    return {
        titleCategory,
        gettitleCategory
    }
}

export default useGetTitle