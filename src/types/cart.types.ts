import { DetailedProduct } from './product.types'

export interface Cart {
    id: string;
    cart: DetailedProduct[]; 
}

export type UpdatedCart = Pick<Cart, 'cart'>