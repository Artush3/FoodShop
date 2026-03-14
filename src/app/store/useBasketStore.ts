import catalogAPI from '@/shared/api/catalog'
import { IItem, IProduct } from '@/shared/types'
import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface IInitialState {
    basket: IItem[]
}

interface IAction {
    addItem: (idItem: string) => Promise<void>
    changeQuantity: (idItem: string, sign: '-' | '+') => void
}

type IStore = IInitialState & IAction & {
    action: (object: IItem, sign: '-' | '+') => void
}

const initial: IInitialState = {
    basket: []
}

const basketStore: StateCreator<IStore, [['zustand/immer', never]]> = (set, get) => ({
    ...initial,
    action: (object: IItem, sign: '-' | '+') => {
        set((state) => {
            const element = state.basket.find((el) => el.id === object.id)
            if (element) {
                element.quantity += sign === '+' ? 1 : -1
            }
        })
    },
    addItem: async (idItem: string) => {
        try {
            const newObject: IProduct | undefined = await catalogAPI.getById(idItem)
            if (!newObject) return

            if (get().basket.some((element) => element.id === newObject.id)) {
                return get().action(newObject as IItem, '+')
            }

            set((state) => {
                state.basket.push({
                    ...newObject,
                    quantity: 1
                })
            })
        } catch (error) {
            console.error(error)
        }
    },
    changeQuantity: (idItem: string, sign: '-' | '+') => {
        const object = get().basket.find((element) => element.id === idItem)
        if (!object) return

        if (object.quantity === 1 && sign === '-') {
            set((state) => {
                state.basket = state.basket.filter((element) => element.id !== idItem)
            })
            return
        }

        get().action(object, sign)
    }
})

const useBasketStore = create<IStore>()(
    persist(
        immer(basketStore),
        { name: 'basket-storage' }
    )
)

export const useBasket = () => useBasketStore((state) => state.basket)
export const addItemBasket = (id: string) => useBasketStore.getState().addItem(id)
export const changeQuantityBasket = (id: string, sign: '-' | '+') =>
    useBasketStore.getState().changeQuantity(id, sign)