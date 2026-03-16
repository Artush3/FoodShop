import Modal from "@/widgets/modal"
import useDetails from "./model/useDetails"

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
        </Modal>
    )
}

export default Details