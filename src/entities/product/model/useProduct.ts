import { useNavigate, useLocation } from 'react-router'

const useProduct = (id: string) => {
    const navigate = useNavigate()
    const location = useLocation()

    const openDetails = () => {
        navigate(`/food/${id}`, {
            state: { background: location }
        })
    }

    return openDetails
}

export default useProduct