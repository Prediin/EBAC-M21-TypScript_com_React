import type { Book } from "../types/book";
import { Author, BookTitle, Card, DeleteButton, Details, Rating, Status } from "../styles/BookItemStyles";

interface BookItemProps {
    book: Book;
    onDelete: (id: string) => void;
}

function BookItem({ book, onDelete }: BookItemProps) {
    return (
        <Card>
            <BookTitle>{book.title}</BookTitle>
            <Author>Por {book.author}</Author>
            <Details>
                <Status $read={book.status === 'Lido'}>{book.status}</Status>
                <Rating aria-label={`Avaliação: ${book.rating ?? 0} de 5 estrelas`}>
                Avaliação: {'★'.repeat(book.rating ?? 0)}
                {'☆'.repeat(5 - (book.rating ?? 0))}
                </Rating>
            </Details>
            <DeleteButton type="button" onClick={() => onDelete(book._id)}>
                Remover
            </DeleteButton>
        </Card>
    )
}

export default BookItem
