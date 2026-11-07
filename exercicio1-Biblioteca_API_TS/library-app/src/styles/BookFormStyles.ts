import styled from 'styled-components';

export const FormCard = styled.section`padding: 1.5rem; border: 1px solid #dce8e7; border-radius: .9rem; background: #fff; box-shadow: 0 .8rem 2rem rgba(18, 52, 82, .08);`;
export const FormTitle = styled.h2`margin: 0 0 1.25rem; color: #123452; font: 700 1.45rem Georgia, serif;`;
export const Form = styled.form`display: grid; gap: 1rem;`;
export const Field = styled.label`display: grid; gap: .4rem; color: #385466; font-size: .9rem; font-weight: 700;`;
export const Input = styled.input`width: 100%; padding: .75rem .85rem; border: 1px solid #c8d9d8; border-radius: .45rem; color: #17324d; background: #fbfdfc; outline: none; &:focus { border-color: #1b8b8d; box-shadow: 0 0 0 3px rgba(27, 139, 141, .15); }`;
export const Select = styled.select`width: 100%; padding: .75rem .85rem; border: 1px solid #c8d9d8; border-radius: .45rem; color: #17324d; background: #fbfdfc; outline: none; &:focus { border-color: #1b8b8d; box-shadow: 0 0 0 3px rgba(27, 139, 141, .15); }`;
export const SubmitButton = styled.button`margin-top: .25rem; padding: .8rem 1rem; border: 0; border-radius: .45rem; color: #fff; background: #e38b2c; cursor: pointer; font-weight: 700; transition: background 160ms, transform 160ms; &:hover:not(:disabled) { background: #c8751e; transform: translateY(-1px); } &:disabled { cursor: wait; opacity: .65; }`;
