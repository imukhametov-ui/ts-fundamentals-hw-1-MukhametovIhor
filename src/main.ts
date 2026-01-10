// src/main.ts

import { Book } from "./book";
import { Library } from "./library";

// Створення бібліотеки
const library = new Library();

// Створення книг
const book1 = new Book({
  id: "1",
  title: "1984",
  author: "George Orwell",
  year: 1949,
  genre: "dystopian"
});

const book2 = new Book({
  id: "2",
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  genre: "fantasy"
});

const book3 = new Book({
  id: "3",
  title: "A Brief History of Time",
  author: "Stephen Hawking",
  year: 1988,
  genre: "science"
});

const book4 = new Book({
  id: "4",
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "fiction"
});

// Додавання книг до бібліотеки
console.log("=== Додавання книг до бібліотеки ===");
library.add(book1);
library.add(book2);
library.add(book3);
library.add(book4);
console.log("Усі книги додані успішно!\n");

// Виведення всіх книг
console.log("=== Список усіх книг ===");
library.listAll().forEach(book => console.log(book.getInfo()));
console.log();

// Позичення книги
console.log("=== Позичення книги '1984' користувачу Іван ===");
library.borrow("1", "Іван");
console.log("Книгу позичено успішно!\n");

// Виведення оновленого списку
console.log("=== Оновлений список усіх книг ===");
library.listAll().forEach(book => console.log(book.getInfo()));
console.log();

// Виведення доступних книг
console.log("=== Список доступних книг ===");
library.listAvailable().forEach(book => console.log(book.getInfo()));
console.log();

// Повернення книги
console.log("=== Повернення книги '1984' ===");
library.return("1");
console.log("Книгу повернено успішно!\n");

// Виведення списку після повернення
console.log("=== Список після повернення ===");
library.listAll().forEach(book => console.log(book.getInfo()));
console.log();

// Видалення книги
console.log("=== Видалення книги 'The Hobbit' ===");
library.remove("2");
console.log("Книгу видалено успішно!\n");

// Фінальний список
console.log("=== Фінальний список книг ===");
library.listAll().forEach(book => console.log(book.getInfo()));