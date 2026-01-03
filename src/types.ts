export type BookStatus = "available" | "borrowed";
export type BookInit = {
  title: string;
  author: string;
  year?: number;
  genre?: string;
};

