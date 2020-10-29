import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    height: 100vh;
    overflow-y: hidden;

    .main {
        flex: 1;
        height: 100%;
        padding: 32px 0;
        overflow-y: auto;
    }
`;

export default Box;
