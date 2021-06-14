
export interface Product {
    id: string;
    name: string;
    pictureUrl: string;
}

export interface DetailedProduct extends Product {
    description: string;
    price: number;
}