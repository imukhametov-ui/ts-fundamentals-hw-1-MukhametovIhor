import type { BookInit, BookStatus } from "./types";

export class Book {
  public id: string;
  public title: string;
  public author: string;
  public year: number;
  public genre: string;

  private status: BookStatus = "available";
  private borrowedBy: string | null = null;

  constructor(init: BookInit) {
    this.id = init.id;
    this.title = init.title;
    this.author = init.author;
    this.year = init.year;
    this.genre = init.genre;
  }

  getStatus(): BookStatus {
    return this.status;
  }

  markBorrowed(personName: string): void {
    if (this.status === "borrowed") {
      // помилка має показувати АКТУАЛЬНОГО позичальника
      throw new Error(`Already borrowed by ${this.borrowedBy}`);
    }

    this.status = "borrowed";
    this.borrowedBy = personName;
  }

  markReturned(): void {
    if (this.status === "available") {
      throw new Error("Already available");
    }

    this.status = "available";
    this.borrowedBy = null;
  }

  getInfo(): string {
    // саме довге тире — (em dash)
    const base = `${this.title} — ${this.author} (${this.year}), ${this.genre}`;

    if (this.status === "available") {
      return `${base} [Available]`;
    }

    return `${base} [Borrowed by ${this.borrowedBy}]`;
  }
}
