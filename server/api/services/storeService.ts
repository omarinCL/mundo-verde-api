import categories from '../data/categories.json';

class StoreService {
  getCategories = () => categories;
}

export default new StoreService();
