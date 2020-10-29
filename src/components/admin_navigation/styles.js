import styled from 'styled-components';
import Colors, { Opacity } from '../../styles/colors';

const Nav = styled.nav`
    background-color: ${Colors.white};
    box-shadow: 0 0 16px 0 ${Colors.black + Opacity.op20};
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 250px;

    .brand {
        color: ${Colors.primary};
        display: block;
        font-size: 32px;
        font-weight: 700;
        padding: 32px;
        text-align: center;
    }

    .menu {
        flex: 1;

        .item {
            border-bottom: 1px solid ${Colors.light};

            &:last-of-type {
                border-bottom: 0;
            }

            .link {
                color: ${Colors.grey};
                display: block;
                font-size: 20px;
                padding: 12px 20px;
            }
        }
    }

    .logout {
        align-items: center;
        background-color: transparent;
        color: ${Colors.danger};
        cursor: pointer;
        display: flex;
        font-size: 20px;
        line-height: 17px;
        padding: 20px;

        svg {
            margin-right: 16px;
        }
    }
`;

export default Nav;
