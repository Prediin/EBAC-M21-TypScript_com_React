import type { Book } from "../types/book";
import BookItem from "./BookItem";
import { EmptyState, List } from "../styles/BookListStyles";

interface BookListProps {
    books: Book[];
    onDelete: (id: string) => void;
}

function BookList({ books, onDelete }: BookListProps) {
    return (
        <>
        {books.length === 0 ? (
            <EmptyState>Nenhum livro cadastrado ainda.</EmptyState>
        ) : (
          <List>
            {books.map((book) => (
                <BookItem
                    key={book._id}
                    book={book}
                    onDelete={onDelete}
                />
            ))}
          </List>
        )}
        </>
    )
}

export default BookList
