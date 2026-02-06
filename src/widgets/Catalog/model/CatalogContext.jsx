import { createContext, useMemo } from "react";
import useCatalog from "./useCatalog";
import useBasket from "./useBasket";

export const CatalogContext = createContext({})
export const BasketContext = createContext({})

const CatalogProvider = (props) => {
    const {
        children
    } = props

    const {
        buttons,
        products,
        titleCategory,
        handleChangeActiveTab,
        activeButton
    } = useCatalog()

    const {
        basket,
        handleAddItem,
        handleChangeQuantity
    } = useBasket(products)

    const catalogValue = useMemo(() => {
        return {
            buttons,
            products,
            titleCategory,
            handleChangeActiveTab,
            activeButton,
            handleAddItem
        }
    }, [
        buttons,
        products,
        titleCategory,
        handleChangeActiveTab,
        activeButton,
        handleAddItem
    ])

    const basketValue = useMemo(() => {
        return {
            basket,
            handleChangeQuantity
        }
    }, [
        basket,
        handleChangeQuantity
    ])

    return (
        <CatalogContext.Provider value={catalogValue}>
            <BasketContext.Provider value={basketValue}>
                {children}
            </BasketContext.Provider>
        </CatalogContext.Provider>
    )
}

export default CatalogProvider