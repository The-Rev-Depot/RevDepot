import { IProduct } from "./product";

export interface IItem {
    itemId: number,
    quantity: number,
    product: IProduct
}