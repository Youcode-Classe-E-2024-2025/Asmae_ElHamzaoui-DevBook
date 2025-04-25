const db = require('../config/database');

class Book {
  // Récupérer tous les livres
  static async getAllBooks() {
    const [rows] = await db.execute('SELECT * FROM books');
    return rows;
  }

  // Récupérer un livre par son ID
  static async getBookById(id) {
    const [rows] = await db.execute('SELECT * FROM books WHERE id = ?', [id]);
    return rows[0];
  }

}

module.exports = Book;
