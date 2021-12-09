import { ProductClass } from "./product-class";

export class InventoryClass {

    constructor(
        public inventoryId: number,
        public product: ProductClass,
        public count: number
    ){}
}
