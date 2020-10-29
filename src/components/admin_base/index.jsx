import React from 'react';
import { Container } from '../../styles/grid';
import AdminNavigation from '../admin_navigation';
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
