import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Book, NewBook } from './types/book';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import GlobalStyles from './styles/GlobalStyles';
import { Brand, BrandMark, BrandName, ContentGrid, ErrorMessage, Eyebrow, Footer, Header, HeaderNote, Hero, HeroContent, HeroText, HeroTitle, Main, Page, SectionHeading, SectionText, SectionTitle } from './styles/AppStyles';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get<Book[]>(API_URL);
        setBooks(response.data);
      } catch (requestError) {
        console.error('Erro ao buscar livros:', requestError);
        setError('Não foi possível carregar os livros.');
      }
    }

    fetchBooks();
  }, []);

  async function handleAddBook(newBook: NewBook) {
    try {
      const response = await axios.post<Book>(API_URL, newBook);
      setBooks((previousBooks) => [...previousBooks, response.data]);
      setError('');
    } catch (requestError) {
      console.error('Erro ao adicionar livro:', requestError);
      setError('Não foi possível adicionar o livro.');
    }
  }

  async function handleDeleteBook(id: string) {
    try {
      await axios.delete(`${API_URL}/${id}`);
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
            <BookList books={books} onDelete={handleDeleteBook} />
          </section>
        </ContentGrid>
      </Main>
      <Footer>Uma biblioteca organizada começa com uma boa leitura.</Footer>
    </Page>
  );
}

export default App;
