import useNavigateWithBackground from "@/shared/hooks/useNavigateWithBackground"
import Button from "@/shared/ui/button"

const PlaceOrder = () => {
    const openDelivery = useNavigateWithBackground('/delivery')

    return (
        <Button  
            title="Оформить заказ" 
            isAccent 
            onClick={openDelivery}
        />
    )
}

export default PlaceOrder