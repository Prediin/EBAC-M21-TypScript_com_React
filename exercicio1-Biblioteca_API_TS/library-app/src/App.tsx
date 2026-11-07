import { useEffect, useState } from 'react';
import type { Book, NewBook } from './types/book';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import GlobalStyles from './styles/GlobalStyles';
import { addBook, deleteBook, listBooks, usesLocalStorage } from './services/bookService';
import { Brand, BrandMark, BrandName, ContentGrid, ErrorMessage, Eyebrow, Footer, Header, HeaderNote, Hero, HeroContent, HeroText, HeroTitle, LoadingMessage, Main, Page, SectionHeading, SectionText, SectionTitle } from './styles/AppStyles';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setBooks(await listBooks());
      } catch (requestError) {
        console.error('Erro ao buscar livros:', requestError);
        setError('Não foi possível carregar os livros.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();
  }, []);

  async function handleAddBook(newBook: NewBook) {
    try {
      const book = await addBook(newBook);
      setBooks((previousBooks) => [...previousBooks, book]);
      setError('');
    } catch (requestError) {
      console.error('Erro ao adicionar livro:', requestError);
      setError('Não foi possível adicionar o livro.');
      throw requestError;
    }
  }

  async function handleDeleteBook(id: string) {
    try {
      await deleteBook(id);
      setBooks((previousBooks) =>
        previousBooks.filter((book) => book._id !== id),
      );
      setError('');
    } catch (requestError) {
      console.error('Erro ao remover livro:', requestError);
      setError('Não foi possível remover o livro.');
    }
  }

  return (
    <Page>
      <GlobalStyles />
      <Header>
        <Brand><BrandMark aria-hidden="true">✦</BrandMark><BrandName>Minha Livraria</BrandName></Brand>
        <HeaderNote>Organize suas leituras</HeaderNote>
      </Header>
      <Hero><HeroContent><Eyebrow>Biblioteca pessoal</Eyebrow><HeroTitle>Gerencie seus livros com carinho.</HeroTitle><HeroText>Cadastre títulos, acompanhe o status da leitura e mantenha sua biblioteca sempre organizada em um só lugar.</HeroText></HeroContent></Hero>
      <Main>
        <ContentGrid>
          <BookForm onAdd={handleAddBook} />
          <section>
            <SectionHeading><SectionTitle>Minha coleção</SectionTitle><SectionText>{books.length} {books.length === 1 ? 'livro cadastrado' : 'livros cadastrados'}</SectionText></SectionHeading>
            {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
            {isLoading ? (
              <LoadingMessage role="status">Carregando livros...</LoadingMessage>
            ) : (
              <BookList books={books} onDelete={handleDeleteBook} />
            )}
            {usesLocalStorage && !isLoading && (
              <SectionText>Os livros estão sendo salvos neste navegador.</SectionText>
            )}
          </section>
        </ContentGrid>
      </Main>
      <Footer>Uma biblioteca organizada começa com uma boa leitura.</Footer>
    </Page>
  );
}

export default App;
