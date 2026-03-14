import { addItemBasket } from "@/app/store/useBasketStore";
import Button from "@/shared/ui/button"
import { MouseEvent } from 'react';

interface Props {
    id: string
}

const AddToBasket = (props: Props) => {
    const {
        id
    } = props

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation()

        addItemBasket(id)
    }

    return (
        <Button title="Добавить" onClick={handleClick} />
    )
}

export default AddToBasket