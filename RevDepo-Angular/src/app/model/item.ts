import { IProduct } from "./product";

export interface IItem {
    itemId: number,
    quantify: number,
    product: IProduct
}