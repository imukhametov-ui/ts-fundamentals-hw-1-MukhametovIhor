export type BookId = string;

export type Genre = string;

export type BookStatus = "available" | "borrowed";

export type LoanStatus = BookStatus;

export type BookInit = {
  id: BookId;
  title: string;
  author: string;
  year: number;
  genre: Genre;
};
