import React from 'react';
import { BounceLoader } from 'react-spinners';
import { Colors } from '../../styles';

export default function Loading() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: 20,
            }}
        >
            <BounceLoader size={60} color={Colors.primary} />
        </div>
    );
}
