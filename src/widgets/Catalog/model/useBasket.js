import { useState, useCallback, useEffect } from "react"

const useBasket = (products) => {
    const [basket, setBasket] = useState(() => {
        const data = localStorage.getItem("basket")

        if(data) {
            return JSON.parse(data)
        }

        return []
    })

    const operation = useCallback((array, object, sign) => {
        return array.map(element => {
            if(element.id === object.id) {
                return {
                    ...element,
                    quantity: sign === "-" ? element.quantity-- : element.quantity++
                }
            }
            return element
        })
    }, [])

    const handleAddItem = useCallback((idProduct) => {
        setBasket(prev => {
            const product = products.find(element => element.id === idProduct)
            
            if(prev.some(element => element.id === product.id)) {
                return operation(prev, product, "+")
            }
            
            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ]
        })
    }, [products, operation])

    const handleChangeQuantity = useCallback((idProduct, sign) => {
        setBasket(prev => {
            const product = basket.find(element => element.id === idProduct)

            if(product.quantity === 0 && sign === "-") {
                return prev.filter(element => element.id !== product.id)
            }

            return operation(prev, product, sign === "+" ? "+" : "-")
        })
    }, [basket, operation])

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])
    
    return {
        basket,
        handleAddItem,
        handleChangeQuantity
    }
}

export default useBasket