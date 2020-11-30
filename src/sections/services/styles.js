import styled from 'styled-components';
import { Colors, Opacity } from '../../styles';

const SectionServices = styled.section`
    padding-top: 80px;
`;

export const Card = styled.div`
    background-color: ${Colors.grey + Opacity.op10};
    border-radius: 8px;
    margin: 8px;
    padding: 20px;
    text-align: center;
    width: 100%;

    &:hover {
        p:first-of-type {
            color: ${Colors.primary};
            transition: 0.2s ease-in-out;
        }
    }
`;

export default SectionServices;
