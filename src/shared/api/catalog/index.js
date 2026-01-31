const catalogAPI = {
    getAllByCatalog: async (catalogName) => {
        const response = await fetch(`http://localhost:3001/${catalogName}`)
        return await response.json()
    }
}

export default catalogAPI