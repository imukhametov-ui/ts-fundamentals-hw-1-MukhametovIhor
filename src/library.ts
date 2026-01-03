import { Book } from "./book";

export class Library {
  private items = new Map<string, Book>();

  add(item: Book): void {
    if (this.items.has(item.id)) {
      throw new Error("Item already exists");
    }
    this.items.set(item.id, item);
  }

  remove(id: string): void {
    const book = this.getBookOrThrow(id);

    if (book.getStatus() === "borrowed") {
      throw new Error("Cannot remove borrowed item");
    }

    this.items.delete(id);
  }

  listAll(): Book[] {
    return Array.from(this.items.values());
  }

  listAvailable(): Book[] {
    return this.listAll().filter((b) => b.getStatus() === "available");
  }

  borrow(bookId: string, personName: string): void {
    const book = this.getBookOrThrow(bookId);
    // делегуємо в Book — він сам кине "Already borrowed by X"
    book.markBorrowed(personName);
  }

  return(bookId: string): void {
    const book = this.getBookOrThrow(bookId);
    // делегуємо в Book — він сам кине "Already available"
    book.markReturned();
  }

  getBookOrThrow(id: string): Book {
    const book = this.items.get(id);
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  }
}
