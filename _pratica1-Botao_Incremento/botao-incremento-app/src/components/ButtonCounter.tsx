import { useState } from "react";
import styled from "styled-components";

type Props = {
    initialCount?: number;
}

const CounterCard = styled.main`
    position: relative;
    isolation: isolate;
    width: min(90vw, 430px);
    padding: 3.25rem 2.5rem 2.5rem;
    overflow: hidden;
    text-align: center;
    color: #f8fbff;
    background: rgba(17, 22, 43, 0.78);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 32px;
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.38), inset 0 1px rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(22px);

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -110px;
        left: 50%;
        width: 240px;
        height: 240px;
        transform: translateX(-50%);
        background: #8b5cf6;
        border-radius: 50%;
        filter: blur(75px);
        opacity: 0.48;
    }
`;

const Eyebrow = styled.p`
    margin: 0 0 0.7rem;
    color: #a5b4fc;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;

const Title = styled.h1`
    margin: 0;
    font-size: clamp(2rem, 8vw, 3rem);
    line-height: 1;
    letter-spacing: -0.06em;
`;

const Hint = styled.p`
    margin: 1rem 0 2rem;
    color: #aeb9d4;
    font-size: 0.95rem;
`;

const IncrementButton = styled.button`
    width: 100%;
    padding: 1rem 1.25rem;
    color: #fff;
    font: inherit;
    font-weight: 800;
    letter-spacing: 0.01em;
    cursor: pointer;
    background: linear-gradient(135deg, #8b5cf6, #6366f1 55%, #22d3ee);
    border: 0;
    border-radius: 16px;
    box-shadow: 0 12px 26px rgba(99, 102, 241, 0.35);
    transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-3px);
        box-shadow: 0 16px 32px rgba(99, 102, 241, 0.48);
    }

    &:active {
        transform: translateY(0) scale(0.98);
    }

    &:focus-visible {
        outline: 3px solid #67e8f9;
        outline-offset: 4px;
    }
`;

function ButtonCounter({ initialCount = 0}: Props) {
    
    const [count, setCount] = useState<number>(initialCount)

    function handleIncrement() {
        setCount(prev => prev + 1)
    }

    return (
        <CounterCard>
            <Eyebrow>Contador interativo</Eyebrow>
            <Title>{count}</Title>
            <Hint>Cada clique deixa esse número maior.</Hint>
            <IncrementButton onClick={handleIncrement}>
                + Aumentar contagem
            </IncrementButton>
        </CounterCard>
    )
}

export default ButtonCounter
