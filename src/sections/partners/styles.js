import styled from 'styled-components';
import { Colors } from '../../styles';

const SectionPartners = styled.section`
    padding-bottom: 80px;
`;

export const Brand = styled.div`
    align-items: center;
    background-color: ${Colors.white};
    cursor: default;
    display: flex;
    height: 80px;
    justify-content: center;
    padding: 16px;
    width: 250px;

    img {
        max-height: 100%;
        max-width: 100%;
        filter: grayscale(100%);
        transition: 0.15s ease-in-out;

        &:hover {
            filter: none;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    background-color: ${Colors.white};
    border: 1px solid ${Colors.primary};
    border-radius: 8px;
    color: ${Colors.primary};
    cursor: pointer;
    display: block;
    font-size: 20px;
    margin: 40px auto 0;
    padding: 16px 40px;
    transition: 0.15s ease-in-out;

    &:hover {
        background-color: ${Colors.primary};
        color: ${Colors.white};
    }
`;

export default SectionPartners;
