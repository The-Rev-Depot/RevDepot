import { IProduct } from "./product";

export interface IInventory {
    inventoryId: number,
    product: IProduct,
    quantity: number,
    
}