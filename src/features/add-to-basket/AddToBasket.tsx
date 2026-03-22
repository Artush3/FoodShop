import { addItemBasket } from "@/app/store/useBasketStore";
import useCloseModal from "@/shared/hooks/useCloseModal";
import Button from "@/shared/ui/button"
import { MouseEvent } from 'react';

interface Props {
    inModal?: boolean,
    isAccent?: boolean,
    id: string
}

const AddToBasket = (props: Props) => {
    const close = useCloseModal()

    const {
        id,
        isAccent,
        inModal
    } = props

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation()

        addItemBasket(id)

        if(inModal) close()
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