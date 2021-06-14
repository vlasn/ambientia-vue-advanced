const BASE_URL = '/api/v1';
import { DetailedProduct, Product } from './types/product.types';
import { Cart, UpdatedCart } from './types/cart.types';


const get = (url: string) => fetch(`${BASE_URL}${url}`).then(res => res.json());
const post = (url: string, payload: any) => fetch(
    `${BASE_URL}${url}`,
    { method: 'post', body: payload }
).then(res => res.json());

export const getProducts: () => Promise<Product> = () => get('/products?all=1');
export const getProduct: (id: string) => Promise<DetailedProduct> = (id) => get(`/products/${id}`);

type TCreateProduct = Pick<DetailedProduct, 'name'|'description'|'pictureUrl'|'price'>
export const createProduct: (product: TCreateProduct) => Promise<DetailedProduct> = ({ name, description, pictureUrl, price }) => post('/products',
    {
        name, description, pictureUrl, price
    }
)

export const createCart: () => Promise<Cart> = () => post('/cart', {});
type TUpdateCart = (cartId: string, newItemId: string) => Promise<UpdatedCart> 
export const updateCart: TUpdateCart= (cartId, newItemId) => get(`/cart/${cartId}/${newItemId}`);
export const getCart: (cartId: string) => Promise<Cart> = (cartId) => get(`/cart/${cartId}`);