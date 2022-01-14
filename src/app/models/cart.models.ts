import { ProductsEntreprise } from "./products";


export interface CartModelServer {
    total: Number;
    data: [{
        product: ProductsEntreprise | undefined
        numInCart: Number
    }];
}

export interface CartModelPublic {
    total: Number;
    prodData: [{
        id: Number,
        incart: Number
    }]
}