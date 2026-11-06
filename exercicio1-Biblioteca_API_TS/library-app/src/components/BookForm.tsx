import type { NewBook } from "../types/book";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { Field, Form, FormCard, FormTitle, Input, Select, SubmitButton } from "../styles/BookFormStyles";

interface BookFormProps {
    onAdd: (book: NewBook) => void;
}

function BookForm({ onAdd }: BookFormProps) {
    const [ formData, setFormData ] = useState<NewBook>({
        title: '',
        author: '',
        status: 'Não lido',
        rating: 0,
    })

    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: name === 'rating' ? Number(value) : value,
        }))
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        onAdd(formData);

        setFormData({
            title: '',
            author: '',
            status: 'Não lido',
            rating: 0,
        })
    }

    return (
        <FormCard>
            <FormTitle>Cadastrar livro</FormTitle>
            <Form onSubmit={handleSubmit}>
            <Field>
                Título:
                <Input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </Field>

            <Field>
                Autor:
                <Input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
            </Field>

            <Field>
                Status:
                <Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="Não lido">Não lido</option>
                    <option value="Lido">Lido</option>
                </Select>
            </Field>

            <Field>
                Avaliação:
                <Select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                >
                    <option value="0">Sem avaliação</option>
                    <option value="1">1 estrela</option>
                    <option value="2">2 estrelas</option>
                    <option value="3">3 estrelas</option>
                    <option value="4">4 estrelas</option>
                    <option value="5">5 estrelas</option>
                </Select>
            </Field>

            <SubmitButton type="submit">Adicionar livro</SubmitButton>
            </Form>
        </FormCard>
    )
}

export default BookForm
