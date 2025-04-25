const db = require('../config/database');

class Book {
  // Récupérer tous les livres
  static async getAllBooks() {
    const [rows] = await db.execute('SELECT * FROM books');
    return rows;
  }

 
}

module.exports = Book;
