const useSelectCategory = (array, action) => {
    const currentIndex = array.findIndex(element => element.isActive)

    const previousTab = () => {
        let nextIndex = currentIndex !== 0 ? array[currentIndex - 1].id : array.at(-1).id

        action(nextIndex)
    }

    const nextTab = () => {
        let nextIndex = currentIndex !== array.length - 1 ? array[currentIndex + 1].id : array[0].id

        action(nextIndex)
    }

    const firstTab = () => {
        action(array[0].id)
    }

    const lastTab = () => {
        action(array.at(-1).id)
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

    return {
        handleKeyChangeActiveTab
    }
}

export default useSelectCategory