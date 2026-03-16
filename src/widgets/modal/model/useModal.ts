import { useNavigate } from 'react-router'
import { useEffect, useCallback } from 'react'

const useModal = () => {
    const navigate = useNavigate()

    const close = useCallback(() => {
        navigate(-1)
    }, [navigate])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
        }

        document.body.style.overflow = 'hidden'

        window.addEventListener('keydown', onKey)

        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = 'unset'
        }
    }, [close])

    return close
}

export default useModal