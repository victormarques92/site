import styled from 'styled-components';
import Colors from '../../styles/colors';

const Nav = styled.nav`
    background-color: ${Colors.white};
    box-shadow: ${props =>
        props.shadow &&
        '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'};
    height: 84px;
    left: 0;
    position: fixed;
    top: 0;
    transition: 0.15s ease-in-out;
    width: 100%;
    z-index: 9999;

    & > div {
        height: 100%;
    }
`;

export const Content = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;

    .brand {
        height: 60px;

        img {
            height: inherit;
        }
    }
`;

export const ButtonMobile = styled.button`
    background-color: transparent;
    border: 1px solid ${Colors.primary};
    border-radius: 4px;
    color: ${Colors.primary};
    cursor: pointer;
    font-size: 20px;
    padding: 8px 16px 4px;
    text-transform: uppercase;

    @media (min-width: 992px) {
        display: none;
    }
`;

export const Menu = styled.ul`
    display: flex;

    .item {
        margin-right: 16px;

        &:last-of-type {
            margin-right: 0;
        }

        .link {
            font-size: 20px;
            color: ${Colors.grey};
            display: block;
            padding: 12px 16px;
            transition: 0.15s ease-in-out;

            &:hover {
                color: ${Colors.primary};
            }
        }
    }

    @media (max-width: 992px) {
        background-color: ${Colors.white};
        display: ${props => (props.open ? 'flex' : 'none')};
        flex-direction: column;
        height: calc(100vh - 84px);
        left: 0;
        position: fixed;
        top: 84px;
        width: 100%;
        z-index: 9999;

        .item {
            margin: 0;

            .link {
                padding: 20px;
                text-align: center;
            }
        }
    }
`;

export default Nav;
