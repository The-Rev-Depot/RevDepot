import { IItem } from "./item";

export interface IInventory {
    inventoryId: number,
    product: IItem[],
    quantity: number
}