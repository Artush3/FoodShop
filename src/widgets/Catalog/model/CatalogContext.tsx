import { createContext, ReactNode } from "react";
import useCatalog from "./useCatalog";
import { ICatalogContext } from "@/shared/types";

interface Props {
    children: ReactNode
}

export const CatalogContext = createContext<ICatalogContext | null>(null)

const CatalogProvider = (props: Props) => {
    const {
        children
    } = props

    const {
        buttons,
        products,
        titleCategory,
        handleChangeActiveTab,
        activeButton,
        isLoading
    } = useCatalog()

    const catalogValue = {
        buttons,
        products,
        titleCategory,
        handleChangeActiveTab,
        activeButton,
        isLoading
    }

    return (
        <CatalogContext.Provider value={catalogValue}>
            {children}
        </CatalogContext.Provider>
    )
}

export default CatalogProvider