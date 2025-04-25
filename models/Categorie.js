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

   // Créer une nouvelle catégorie
   static async createCategory(name) {
    const [result] = await db.execute(
      'INSERT INTO categories (name) VALUES (?)',
      [name]
    );
    return result.insertId; // retourne l'ID de la catégorie insérée
  }

  
 
}

module.exports = Category;
