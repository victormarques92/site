import React from 'react';
import Text from '../../components/text';
import Colors from '../../styles/colors';
import notFound from '../../assets/images/404.svg';
import Box from '../home/styles';

export default function NotFound() {
    return (
        <Box>
            <Text
                align={'center'}
                size={50}
                weigth={700}
                mt={32}
                mb={100}
                color={Colors.primary}
            >
                Página não encontrada
            </Text>

            <img src={notFound} alt="Página não encontrada" />
        </Box>
    );
}
