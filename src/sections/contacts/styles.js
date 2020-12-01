import styled from 'styled-components';
import { Colors, Opacity } from '../../styles';

const SectionContacts = styled.section`
    padding-top: 132px;

    svg {
        color: ${Colors.primary};
        margin-right: 12px;
    }
`;
export const Link = styled.a`
    color: ${Colors.primary};
    display: inline-block;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Copyright = styled.div`
    border-top: 1px solid ${Colors.grey + Opacity.op20};
    color: ${Colors.grey + Opacity.op50};
    padding: 20px 0;
    text-align: center;
`;

export default SectionContacts;
