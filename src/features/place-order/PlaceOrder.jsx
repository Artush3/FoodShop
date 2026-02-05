import Button from "@/shared/ui/Button"
import { memo } from "react"

const PlaceOrder = () => {
    return (
        <Button title="Оформить заказ" isAccent />
    )
}

export default memo(PlaceOrder)