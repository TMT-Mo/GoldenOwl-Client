
import { IShoes, IShoesList } from "@/model/shoes";
import React from "react";

export interface IContext {
    items: IShoesList[],
    totalAmount: number,
    addItem(item: IShoes): void,
    deleteItem(id: number): void,
    removeItem(id: number): void,
    getSavedItem(items: IShoesList[], totalAmount: number): void
}

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    deleteItem: () => {},
    removeItem: () => {},
    getSavedItem: () => {}
} as IContext) 

