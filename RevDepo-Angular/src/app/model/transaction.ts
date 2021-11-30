export interface Transaction {
    transactionId: number,
    transactionDate: Date,
    cost: number,
    productId: number[],
    userId: number
}
