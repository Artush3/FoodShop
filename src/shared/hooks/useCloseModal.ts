import { useNavigate } from 'react-router'
import { useCallback } from 'react'

const useCloseModal = () => {
    const navigate = useNavigate()

    const close = useCallback(() => {
        navigate(-1)
    }, [navigate])

    return close
}

export default useCloseModal