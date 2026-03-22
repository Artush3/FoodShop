import { useNavigate, useLocation } from 'react-router'

const useNavigateWithBackground = (path: string) => {
    const navigate = useNavigate()
    const location = useLocation()

    const openDetails = () => {
        navigate(path, {
            state: { background: location }
        })
    }

    return openDetails
}

export default useNavigateWithBackground