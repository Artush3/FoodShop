import React from "react"

export interface IIcon {
    title: string,
    iconPath: string
}

export interface IItem {
    id: string,
    image: string,
    price: string,
    title: string,
    weight: string,
    quantity: number
}

export interface IProduct extends IItem {
    description: string,
    ingredients: string[],
    calories: string,
    category: string
}

export interface IButtonCategory {
    id: string,
    title: string,
    pathImg: string,
    isActive: boolean
}

export interface ICatalogContext {
    buttons: () => IButtonCategory[],
    products: IItem[],
    titleCategory: React.RefObject<string>,
    handleChangeActiveTab: (idTab: string) => void,
    activeButton: React.RefObject<HTMLButtonElement | null>,
    isLoading: boolean
}