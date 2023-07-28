import { IShoesList } from "@/model/shoes";
import { SAVE_ITEM, SAVE_TOTAL } from "@/util/constant";

export const saveItem = (items: IShoesList[], totalAmount: number) => {
    localStorage.setItem(SAVE_ITEM, JSON.stringify(items))
    localStorage.setItem(SAVE_TOTAL, totalAmount.toString())
}

export const getSavedItem = () => {
    const itemsString = localStorage.getItem(SAVE_ITEM)
    const items =  itemsString ? JSON.parse(itemsString) as IShoesList[] : []
    const totalAmount = localStorage.getItem(SAVE_TOTAL) ?? 0
    return {
        items,
        totalAmount: +totalAmount
    }
}
