export type BookStatus = "available" | "borrowed";

export type BookOpts = {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
};

export class Book {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;

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

  markBorrowed(personName: string) {
    if (this.status === "borrowed") {
      // borrowedBy тут вже має бути встановлений
      throw new Error(`Already borrowed by ${this.borrowedBy}`);
    }
    this.status = "borrowed";
    this.borrowedBy = personName;
  }

  markReturned() {
    if (this.status === "available") {
      throw new Error("Already available");
    }
    this.status = "available";
    this.borrowedBy = null;
  }

  getInfo(): string {
    // ВАЖЛИВО: тут EM DASH — (U+2014), не дефіс "-"
    const base = `${this.title} — ${this.author} (${this.year}), ${this.genre}`;

    if (this.status === "available") {
      return `${base} [Available]`;
    }

    return `${base} [Borrowed by ${this.borrowedBy}]`;
  }
}
