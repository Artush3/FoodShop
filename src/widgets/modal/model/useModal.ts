import { useEffect } from 'react'
import useCloseModal from '@/shared/hooks/useCloseModal'

const useModal = () => {
    const close = useCloseModal()

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