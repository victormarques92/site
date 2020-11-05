import styled from 'styled-components';
import { Colors } from '../../styles';

const SectionTimeline = styled.section`
    padding-top: 80px;
`;

export const Line = styled.ul`
    display: flex;
    position: relative;
    overflow: hidden;
    overflow-x: auto;
    padding-bottom: 12px;

    &::after {
        background-color: ${Colors.light};
        border-radius: 50%;
        content: '';
        height: 16px;
        left: 0;
        position: absolute;
        top: 22px;
        width: 16px;
    }

    .item {
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        justify-content: flex-end;
        max-width: 100%;
        min-width: 120px;
        position: relative;

        &::before {
            background-color: ${Colors.light};
            content: '';
            height: 2px;
            left: 0;
            position: absolute;
            top: calc(50% - 1px);
            width: 100%;
        }
    }
`;

export const Brand = styled.div`
    align-items: center;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.light};
    border-radius: 50%;
    cursor: help;
    display: flex;
    height: 60px;
    justify-content: center;
    overflow: hidden;
    padding: 8px;
    width: 60px;
    z-index: 10;

    img {
        border-radius: 50%;
        max-width: 100%;
    }

    &:hover {
        transform: rotate(360deg);
        transition: 0.5s ease-in-out;
        transform-origin: center center;
        transform-style: preserve-3D;
    }
`;

export default SectionTimeline;
