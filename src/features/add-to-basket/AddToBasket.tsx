import { addItemBasket } from "@/app/store/useBasketStore";
import Button from "@/shared/ui/button"
import { MouseEvent } from 'react';

interface Props {
    isAccent?: boolean,
    id: string
}

const AddToBasket = (props: Props) => {
    const {
        id,
        isAccent
    } = props

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation()

        addItemBasket(id)
    }

    return (
        <Button 
            title="Добавить" 
            onClick={handleClick}
            isAccent={isAccent}
        />
    )
}

export default AddToBasket