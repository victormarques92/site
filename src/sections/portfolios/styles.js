import styled from 'styled-components';
import { Colors } from '../../styles';

const SectionPortfolios = styled.section`
    padding-bottom: 80px;
    padding-top: 80px;
`;

export const Info = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 80px 32px 80px 80px;
`;

export const Preview = styled.div`
    height: 60vh;
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar-track {
        background-color: ${Colors.light};
    }
    &::-webkit-scrollbar {
        border-radius: 4px;
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${Colors.primary};
    }

    img {
        width: 100%;
    }
`;

export const Button = styled.a`
    background-color: transparent;
    border: 1px solid ${Colors.primary};
    border-radius: 8px;
    color: ${Colors.primary};
    cursor: pointer;
    display: block;
    font-size: 20px;
    margin: 40px auto 0;
    padding: 16px 40px;
    text-transform: uppercase;
    transition: 0.15s ease-in-out;

    &:hover {
        background-color: ${Colors.primary};
        color: ${Colors.white};
    }
`;

export default SectionPortfolios;
