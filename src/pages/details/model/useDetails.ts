import catalogAPI from '@/shared/api/catalog'
import { useRequiredParams } from '@/shared/hooks/useRequiredParams'
import { IProduct } from '@/shared/types'
import { useEffect, useState } from 'react'

const useDetails = () => {
    const { id } = useRequiredParams<{ id: string }>()
    const [data, setData] = useState<IProduct | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        catalogAPI.getById(id)
            .then(data => setData(data ?? null))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])

    return {
        data,
        loading,
        error
    }
}

export default useDetails