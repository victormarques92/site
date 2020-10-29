import styled from 'styled-components';
import Colors, { Opacity } from '../../styles/colors';

export const BoxLogin = styled.div`
    align-items: center;
    background-image: linear-gradient(
        to bottom right,
        ${Colors.primary},
        ${Colors.primary + Opacity.op30}
    );
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 20px;

    .title {
        color: ${Colors.primary};
        display: block;
        font-size: 40px;
        margin-bottom: 40px;
        text-align: center;
    }

    form {
        background-color: ${Colors.light};
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 500px;
        padding: 40px 16px;
        width: 100%;

        input {
            background-color: ${Colors.white};
            border-radius: 8px;
            color: ${Colors.grey};
            font-size: 20px;
            line-height: 1;
            margin-bottom: 16px;
            padding: 20px;
        }

        button {
            background: ${Colors.primary};
            border: 2px solid ${Colors.primary};
            border-radius: 8px;
            color: ${Colors.white};
            cursor: pointer;
            display: block;
            font-size: 20px;
            margin-top: 32px;
            padding: 12px;
        }
    }
`;
