const API_HEAD = 'https://goldenowl.onrender.com/api/v1'
export const apis = {
    product: {
      head: API_HEAD,
      getProductList: `${API_HEAD}/products`,
      createProduct: `${API_HEAD}/products`,
      getProductById: `${API_HEAD}/products/:id`,
      updateProduct: `${API_HEAD}/products/:id`,
      deleteProduct: `${API_HEAD}/products/:id`,
    },
  };