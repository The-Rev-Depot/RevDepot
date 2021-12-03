import { IItem } from "./item";

export interface Transaction {
    transactionId: number,
    transactionDate: Date,
    cost: number,
    userId: number,
    items: IItem[]
}
