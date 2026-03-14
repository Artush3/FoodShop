import { IButtonCategory } from "@/shared/types"
import React from "react"

const useSelectCategory = (array: IButtonCategory[], action: (idTab: string) => void) => {
    const currentIndex = array.findIndex(element => element.isActive)

    const previousTab = (): void => {
        let nextIndex = currentIndex !== 0 ? array[currentIndex - 1].id : array[array.length - 1].id

        action(nextIndex)
    }

    const nextTab = (): void => {
        let nextIndex = currentIndex !== array.length - 1 ? array[currentIndex + 1].id : array[0].id

        action(nextIndex)
    }

    const firstTab = (): void => {
        action(array[0].id)
    }

    const lastTab = (): void => {
        action(array[array.length - 1].id)
    } 

    const handleKeyChangeActiveTab = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const { code } = event

        const action = {
            ArrowLeft: previousTab,
            ArrowRight:nextTab,
            Home: firstTab,
            End: lastTab,
        }[code]

        action?.()
    }

    return {
        handleKeyChangeActiveTab
    }
}

export default useSelectCategory