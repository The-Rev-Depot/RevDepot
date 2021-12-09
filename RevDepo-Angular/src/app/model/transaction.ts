import { IItem } from "./item";
import { IUser } from "./user";

export interface ITransaction {
    transactionId: number,
    transactionDate: Date,
    cost: number,
    user: IUser,
    items: IItem[]
}
