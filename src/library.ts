import { Book } from "./book";

export class Library {
  private items: Map<string, Book> = new Map();

  // ===== API ЗА КРИТЕРІЯМИ (під приховані тести) =====

  addBook(book: Book): void {
    if (this.items.has(book.id)) {
      throw new Error("Item already exists");
    }
    this.items.set(book.id, book);
  }

  removeBook(bookId: string): void {
    const book = this.getBook(bookId);

    if (book.getStatus() === "borrowed") {
      throw new Error("Cannot remove borrowed item");
    }

    this.items.delete(bookId);
  }

  listAllBooks(): Book[] {
    return Array.from(this.items.values());
  }

  listAvailableBooks(): Book[] {
    return this.listAllBooks().filter((b) => b.getStatus() === "available");
  }

  borrowBook(bookId: string, personName: string): void {
    const book = this.getBook(bookId);
    book.markBorrowed(personName); // має кинути "Already borrowed by X"
  }

  returnBook(bookId: string): void {
    const book = this.getBook(bookId);
    book.markReturned(); // має кинути "Already available"
  }

  // ===== ТВОЇ МЕТОДИ (аліаси, щоб нічого не зламати) =====

  add(item: Book): void {
    this.addBook(item);
  }

  remove(id: string): void {
    this.removeBook(id);
  }

  listAll(): Book[] {
    return this.listAllBooks();
  }

  listAvailable(): Book[] {
    return this.listAvailableBooks();
  }

  borrow(bookId: string, personName: string): void {
    this.borrowBook(bookId, personName);
  }

  return(bookId: string): void {
    this.returnBook(bookId);
  }

  // ===== PRIVATE helper ЗА КРИТЕРІЯМИ =====
  private getBook(bookId: string): Book {
    const book = this.items.get(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  }
}
