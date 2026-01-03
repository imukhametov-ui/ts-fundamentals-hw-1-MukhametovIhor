export type BookStatus = "available" | "borrowed";

export type BookOpts = {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
};

export class Book {
  public id: string;
  public title: string;
  public author: string;
  public year: number;
  public genre: string;

  private status: BookStatus = "available";
  private borrowedBy: string | null = null;

  constructor(opts: BookOpts) {
    this.id = opts.id;
    this.title = opts.title;
    this.author = opts.author;
    this.year = opts.year;
    this.genre = opts.genre;
  }

  getStatus(): BookStatus {
    return this.status;
  }

  markBorrowed(personName: string): void {
    if (this.status === "borrowed") {
      // borrowedBy тут вже має бути не null
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
    const base = `${this.title} — ${this.author} (${this.year}), ${this.genre}`;

    if (this.status === "available") {
      return `${base} [Available]`;
    }

    return `${base} [Borrowed by ${this.borrowedBy}]`;
  }
}
