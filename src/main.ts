// src/main.ts

import { Book } from "./book";
import { Library } from "./library";

// Створення бібліотеки
const library = new Library();

// Створення книг
const book1 = new Book("1", "1984", "George Orwell", 1949, "dystopian");
const book2 = new Book("2", "The Hobbit", "J.R.R. Tolkien", 1937, "fantasy");
const book3 = new Book("3", "A Brief History of Time", "Stephen Hawking", 1988, "science");
const book4 = new Book("4", "The Great Gatsby", "F. Scott Fitzgerald", 1925, "fiction");

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
console.log();

// Демонстрація помилок
console.log("=== Демонстрація обробки помилок ===");

try {
  library.add(book1);
} catch (error) {
  console.log(`Помилка: ${(error as Error).message}`);
}

try {
  library.borrow("1", "Марія");
  library.borrow("1", "Петро");
} catch (error) {
  console.log(`Помилка: ${(error as Error).message}`);
}

try {
  library.return("1");
  library.return("1");
} catch (error) {
  console.log(`Помилка: ${(error as Error).message}`);
}

try {
  library.remove("1");
} catch (error) {
  console.log(`Помилка: ${(error as Error).message}`);
}

try {
  library.borrow("999", "Олена");
} catch (error) {
  console.log(`Помилка: ${(error as Error).message}`);
}