import Button from "@/shared/ui/Button"

const AddToBasket = (props) => {
    const {
        onClick
    } = props

    const handleClick = (event) => {
        event.stopPropagation()

        onClick()
    }

    return (
        <Button title="Добавить" onClick={handleClick} />
    )
}

export default AddToBasket