const db = require('../config/database');

class Category {
  // Récupérer toutes les catégories
  static async getAllCategories() {
    const [rows] = await db.execute('SELECT * FROM categories');
    return rows;
  }


}

module.exports = Category;
