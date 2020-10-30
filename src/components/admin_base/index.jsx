import React from 'react';
import AdminNavigation from '../admin_navigation';
import { Container } from '../../styles';

import Box from './styles';

export default function Base({ children }) {
    return (
        <Box>
            <div className="aside">
                <AdminNavigation />
            </div>

            <div className="main">
                <Container>{children}</Container>
            </div>
        </Box>
    );
}
