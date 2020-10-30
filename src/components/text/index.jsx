import React from 'react';
import Txt from './styles';

function Text({ children, align, color, mb, mt, size, weight, uppercase }) {
    return (
        <Txt
            align={align}
            color={color}
            mb={mb}
            mt={mt}
            size={size}
            weight={weight}
            uppercase={uppercase}
        >
            {children}
        </Txt>
    );
}

export default Text;
