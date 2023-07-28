const API_HEAD = 'http://localhost:5000/api/v1'
export const apis = {
    product: {
      head: API_HEAD,
      getProductList: `/products`,
      createProduct: `/products`,
      getProductById: `/products/:id`,
      updateProduct: `/products/:id`,
      deleteProduct: `/products/:id`,
    },
  };