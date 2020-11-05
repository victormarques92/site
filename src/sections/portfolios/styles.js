import styled from 'styled-components';
import { Colors } from '../../styles';

const SectionPortfolios = styled.section`
    padding-top: 132px;
`;

export const Info = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 80px 32px;
`;

export const Skills = styled.ul`
    display: flex;
    margin-top: 20px;

    .item {
        align-items: center;
        background-color: ${Colors.light};
        border-radius: 4px;
        display: flex;
        height: 40px;
        justify-content: center;
        margin-right: 8px;
        width: 40px;

        svg {
            color: ${Colors.primary};
            font-size: 24px;
        }
    }
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
    font-size: 16px;
    font-weight: 500;
    margin: 40px auto 0;
    padding: 8px 20px;
    text-transform: uppercase;
    transition: 0.15s ease-in-out;

    &:hover {
        background-color: ${Colors.primary};
        color: ${Colors.white};
    }
`;

export default SectionPortfolios;
