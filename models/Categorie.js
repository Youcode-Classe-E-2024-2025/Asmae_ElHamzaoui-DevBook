const db = require('../config/database');

class Category {
  // Récupérer toutes les catégories
  static async getAllCategories() {
    const [rows] = await db.execute('SELECT * FROM categories');
    return rows;
  }

  // Récupérer une catégorie par son ID
  static async getCategoryById(id) {
    const [rows] = await db.execute('SELECT * FROM categories WHERE id = ?', [id]);
    return rows[0];
  }

 
}

module.exports = Category;
