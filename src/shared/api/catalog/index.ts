import { IProduct } from "@/shared/types";

const URL: string = "http://localhost:3001/products";

const catalogAPI = {
    getAllByСategory: async (categoryName: string): Promise<IProduct[]> => {
        const response = await fetch(URL);
        const data: IProduct[] = await response.json();
        
        return data.filter((item: IProduct) => item.category === categoryName);
    },
    getById: async (id: string): Promise<IProduct | undefined> => {
        const response = await fetch(`${URL}/${id}`);
        const data: IProduct = await response.json();

        return data
    }
};

export default catalogAPI;