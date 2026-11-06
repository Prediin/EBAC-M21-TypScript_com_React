import styled from 'styled-components';

export const Card = styled.li`display: flex; min-height: 220px; flex-direction: column; padding: 1.25rem; border: 1px solid #dce8e7; border-radius: .8rem; background: #fff; box-shadow: 0 .5rem 1.25rem rgba(18, 52, 82, .06); transition: transform 160ms, box-shadow 160ms; &:hover { transform: translateY(-3px); box-shadow: 0 .9rem 1.8rem rgba(18, 52, 82, .12); }`;
export const BookTitle = styled.h3`margin: 0 0 .7rem; color: #123452; font: 700 1.25rem Georgia, serif;`;
export const Author = styled.p`margin: 0 0 1rem; color: #61727b; font-size: .95rem;`;
export const Details = styled.div`display: grid; gap: .55rem; margin-bottom: auto;`;
export const Status = styled.span<{ $read: boolean }>`width: fit-content; padding: .25rem .55rem; border-radius: 999px; color: ${({ $read }) => ($read ? '#176b55' : '#8b5b16')}; background: ${({ $read }) => ($read ? '#def3e9' : '#fff0c9')}; font-size: .78rem; font-weight: 700;`;
export const Rating = styled.p`margin: 0; color: #e39a2e; letter-spacing: .12em;`;
export const DeleteButton = styled.button`align-self: flex-start; margin-top: 1.25rem; padding: .55rem .75rem; border: 1px solid #e3c8c4; border-radius: .4rem; color: #a34a3e; background: #fff8f7; cursor: pointer; font-size: .85rem; font-weight: 700; &:hover { color: #fff; background: #b65a4e; }`;
