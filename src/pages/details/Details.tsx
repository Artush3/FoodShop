import Modal from "@/widgets/modal"
import useDetails from "./model/useDetails"
import styles from "./Details.module.scss"
import AddToBasket from "@/features/add-to-basket"

const Details = () => {
    const {
        data,
        loading,
        error
    } = useDetails()

    return (
        <Modal>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div className={styles.body}>
                <h2 className={styles.title}>{data?.title}</h2>
                <div className={styles.information}>
                    <img 
                        src={data?.image}
                        alt=""
                        width={276}
                        height={220}
                        loading="lazy"
                        className={styles.image}
                    />
                    <div className={styles.description}>
                        <p className={styles.text}>{data?.description}</p>
                        <div className={styles.compound}>
                            <p>Состав:</p>
                            {data?.ingredients.map((element, index) => (
                                <p key={index}>{element}</p>
                            ))}
                            <p className={styles.textWeight}>{data?.weight}г. ккал {data?.calories}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.order}>
                    <AddToBasket 
                        isAccent 
                        id={data?.id ?? ""}
                    />
                    <h3 className={styles.price}>{data?.price}₽</h3>
                </div>
            </div>
        </Modal>
    )
}

export default Details