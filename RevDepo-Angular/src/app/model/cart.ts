import { IItem } from "./item";
import { IUser } from "./user";

export interface ICart {
    cartId: number,
    user: IUser,
    items: IItem[]
}