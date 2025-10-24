export const API = {
    URL: import.meta.env.VITE_BASE_URL ?? 'http://localhost:1452/api',
    BASE_URL: 'http://localhost:1452/',
    products: {
        all: '/products',
        product: (id: string) => `/products/${id}`,
    },
};
