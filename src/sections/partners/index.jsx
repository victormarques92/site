import React from 'react';
import { Loading, Text } from '../../components';
import { Col, Row } from '../../styles';
import SectionPartners, { Brand, Button } from './styles';

export default function Partners({ data, buttonAction }) {
    const handleAnchor = anchor => {
        let section = document.getElementById(anchor);

        section.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };

    return (
        <SectionPartners>
            <Text size={32} weight={700} align={'center'} mb={32}>
                Empresas Parceiras
            </Text>

            {!data ? (
                <Loading />
            ) : (
                <Row halign={'center'} valign={'center'}>
                    {data.map((partner, index) => (
                        <Col key={index} xs={12} md={'auto'}>
                            <Brand title={partner.name}>
                                <img src={partner.brand} alt={partner.name} />
                            </Brand>
                        </Col>
                    ))}
                </Row>
            )}

            <Button onClick={() => handleAnchor('contact')}>
                Seja um parceiro
            </Button>
        </SectionPartners>
    );
}
