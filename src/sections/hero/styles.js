import styled from 'styled-components';
import Colors from '../../styles/colors';

const SectionHero = styled.section`
    min-height: 100vh;
    padding-bottom: 80px;
    padding-top: 180px;

    @media (max-width: 768px) {
        .content {
            text-align: center;
        }
    }
`;

export const ListContacts = styled.ul`
    @media (max-width: 768px) {
        display: inline-block;
    }

    .item {
        align-items: center;
        display: flex;
        opacity: 0.9;
        padding: 4px 0;
        transition: 0.15s ease-in-out;

        svg {
            margin-top: 4px;
            margin-right: 12px;
            font-size: 18px;
        }

        &:hover {
            opacity: 1;

            svg {
                color: ${Colors.primary};
            }
        }

        .link {
            align-items: center;
            color: ${Colors.grey};
            display: flex;
            line-height: 28px;
        }
    }
`;

export const Midias = styled.div`
    display: flex;
    margin-top: 32px;

    .link {
        background-color: ${Colors.light};
        border-radius: 8px;
        color: ${Colors.grey};
        font-size: 20px;
        margin-right: 16px;
        padding: 12px 12px 8px;
        transition: 0.15s ease-in-out;

        &:last-of-type {
            margin-right: 0;
        }

        &:hover {
            color: ${Colors.primary};
        }
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const Photo = styled.div`
    flex: 0 0 100%;
    margin-bottom: 68px;
    max-width: 100%;
    order: -1;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;

    img {
        height: 200px;
        width: 200px;
        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.17),
            0 0 0 40px rgba(0, 0, 0, 0.07);
        border-radius: 50%;
        display: block;
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        flex: 0 0 50%;
        margin-bottom: 0;
        max-width: 50%;
        order: 0;

        img {
            height: 320px;
            width: 320px;
        }
    }
`;

export default SectionHero;
