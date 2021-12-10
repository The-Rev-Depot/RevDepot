export class ProductClass {

    constructor (
        public productId: number,
        public productName: string,
        public description: string,
        public picUrl: string,
        public productPrice: number,
        public productCategory: string,
        public saleId: boolean
    ) {}

}
