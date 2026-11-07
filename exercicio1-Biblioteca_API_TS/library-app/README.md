# Minha Livraria

Aplicação React + TypeScript para cadastrar, listar e remover livros.

## Instalação

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite no navegador.

## Fonte de dados

A aplicação aceita dois modos:

- Sem configuração adicional, os livros são salvos no `localStorage` do navegador. Esse é o modo padrão e permite listar, cadastrar e remover livros sem depender de um serviço externo.
- Opcionalmente, copie `.env.example` para `.env` e substitua `SEU_ID` por um endpoint de coleção criado no [CrudCrud](https://crudcrud.com/). Depois reinicie o servidor do Vite.

Exemplo de `.env`:

```env
VITE_API_URL=https://crudcrud.com/api/SEU_ID/books
```

O arquivo `.env` é ignorado pelo Git para não publicar configurações locais.

## Scripts

```bash
npm run dev      # desenvolvimento
npm run build    # valida TypeScript e gera a versão de produção
npm run lint     # verifica o código com ESLint
npm run preview  # visualiza o build de produção
```

Durante o carregamento inicial é exibido um estado de carregamento. O botão de cadastro fica desabilitado enquanto a operação está em andamento.
