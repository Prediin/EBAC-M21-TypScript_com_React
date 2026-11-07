import axios from 'axios';
import type { Book, NewBook } from '../types/book';

const API_URL = import.meta.env.VITE_API_URL?.trim();
const STORAGE_KEY = 'library-app-books';

function createId() {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readLocalBooks(): Book[] {
  const storedBooks = localStorage.getItem(STORAGE_KEY);

  if (!storedBooks) {
    return [];
  }

  try {
    return JSON.parse(storedBooks) as Book[];
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

function writeLocalBooks(books: Book[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

export async function listBooks(): Promise<Book[]> {
  if (API_URL) {
    const response = await axios.get<Book[]>(API_URL);
    return response.data;
  }

  return readLocalBooks();
}

export async function addBook(newBook: NewBook): Promise<Book> {
  if (API_URL) {
    const response = await axios.post<Book>(API_URL, newBook);
    return response.data;
  }

  const book = { ...newBook, _id: createId() };
  writeLocalBooks([...readLocalBooks(), book]);
  return book;
}

export async function deleteBook(id: string): Promise<void> {
  if (API_URL) {
    await axios.delete(`${API_URL}/${id}`);
    return;
  }

  writeLocalBooks(readLocalBooks().filter((book) => book._id !== id));
}

export const usesLocalStorage = !API_URL;
