export class ProductClass {

    constructor (
        public productId: number,
        public productName: string,
        public productDescription: string,
        public picUrl: string,
        public productPrice: number,
        public productCategory: string,
        public productRating: number,
        public saleId: boolean
    ) {}

}
