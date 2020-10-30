import styled from 'styled-components';
import { Colors } from '../../styles';

const SectionAbout = styled.section`
    padding: 80px 0;

    @media (max-width: 768px) {
        text-align: center;

        .box-skills {
            justify-content: center;
        }
    }
`;

export const Photo = styled.img`
    max-width: 100%;

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }
`;

export const Skill = styled.div`
    border: 1px solid ${Colors.primary};
    border-radius: 4px;
    cursor: default;
    display: inline-block;
    font-weight: 500;
    margin: 8px;
    padding: 4px 12px;

    svg {
        color: ${Colors.primary};
        margin-bottom: -2px;
        margin-left: 4px;
    }
`;

export const Download = styled.a`
    background-color: ${Colors.primary};
    border-radius: 32px;
    color: ${Colors.white};
    font-size: 20px;
    font-weight: 500;
    padding: 12px 40px;
    text-align: center;
`;

export default SectionAbout;
