import { memo, useContext } from "react"
import styles from "./Basket.module.scss"
import { BasketContext } from "../Catalog/model/CatalogContext"
import CartItem from "@/entities/cart-item"
import Button from "@/shared/ui/Button"
import deliveryIcon from "@/shared/assets/icons/basket/delivery.svg"

const Basket = () => {
    const {
        basket
    } = useContext(BasketContext)

    const length = basket.length
    let sum = 0

    if(length > 0) {
        sum = basket.map(element => {
            return {
                ...element,
                price: +element.price
            }
        }).reduce((prev, next) => prev + next.price, 0)
    }

    if(basket.length === 0) {
        return <div className={styles.basket}>
            <div className={styles.header}>
                <h3 className={styles.title}>Корзина</h3>
                <div className={styles.counter}>
                    <p>0</p>
                </div>
            </div>
            <div className={styles.body}>
                <p className={styles.empty}>Тут пока пусто :(</p>
            </div>
        </div>
    }

    return (
        <div className={styles.basket}>
            <div className={styles.header}>
                <h3 className={styles.title}>Корзина</h3>
                <div className={styles.counter}>
                    <p>{length}</p>
                </div>
            </div>
            <div className={styles.body}>
                <ul className={styles.list}>
                    {basket.map(({id, image, title, weight, price}) => (
                        <li key={id} className={styles.item}>
                            <CartItem
                                image={image}
                                title={title}
                                weight={weight}
                                price={price}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.footer}>
                <div className={styles.block}>
                    <p className={styles.result}>Итог</p>
                    <p className={styles.sum}>{sum}₽</p>
                </div>
                <Button title="Оформить заказ" isAccent />
                {sum > 599 && (
                    <div className={styles.delivery}>
                        <img src={deliveryIcon} alt="" width={24} height={24} className={styles.icon} loading="lazy" />
                        <p className={styles.promotion}>Бесплатная доставка</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default memo(Basket)