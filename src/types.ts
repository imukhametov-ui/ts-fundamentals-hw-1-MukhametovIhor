export type BookStatus = "available" | "borrowed";

export type BookInit = {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
};
