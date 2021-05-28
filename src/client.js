const BASE_URL = '/api/v1';


const get = (url) => fetch(`${BASE_URL}${url}`).then(res => res.json());
const post = (url, payload) => fetch(
    `${BASE_URL}${url}`,
    { method: 'post', body: payload }
).then(res => res.json());

export const getProducts = () => get('/products?all=1');
export const getProduct = (id) => get(`/products/${id}`);

export const createProduct = ({ name, description, pictureUrl, price }) => post('/products',
    {
        name, description, pictureUrl, price: parseFloat(price)
    }
)

export const createCart = () => post('/cart', {});
export const updateCart = (cartId, cart) => post(`/cart/${cartId}`, { cart });
export const getCart = (cartId) => get(`/cart/${cartId}`);