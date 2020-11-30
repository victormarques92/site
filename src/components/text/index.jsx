import React from 'react';
import Txt from './styles';

function Text({
    children,
    align,
    color,
    lineHeight,
    mb,
    mt,
    size,
    weight,
    uppercase,
}) {
    return (
        <Txt
            align={align}
            color={color}
            lineHeight={lineHeight}
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
