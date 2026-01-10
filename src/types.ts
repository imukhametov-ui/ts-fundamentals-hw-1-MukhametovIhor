export type BookId = string;

export type Genre = string;

export type LoanStatus = "available" | "borrowed";

export type BookStatus = LoanStatus;

export type BookInit = {
  id: BookId;
  title: string;
  author: string;
  year: number;
  genre: Genre;
};
