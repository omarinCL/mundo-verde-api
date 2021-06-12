import categories from '../data/categories.json';
import products from '../data/products.json';

class StoreService {
  getCategories = (id: string) => {
    if (id) return categories.find((i) => i.id === id);
    return categories;
  };

  getProducts = (categoryId: string, productId: string) => {
    if (!categoryId && !productId) return products;
    if (productId) return products.find((p) => p.id === productId);
    return products.filter((p) => p.categoryId === categoryId);
  };
}

export default new StoreService();
