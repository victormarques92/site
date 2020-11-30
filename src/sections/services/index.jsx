import React from 'react';
import { Loading, Text } from '../../components';
import { Col, Container, Row } from '../../styles';
import SectionServices, { Card } from './styles';

export default function Services({ data }) {
    return (
        <SectionServices id={'services'}>
            <Text size={32} weight={700} align={'center'} mb={32}>
                Serviços
            </Text>

            <Container>
                {!data ? (
                    <Loading />
                ) : (
                    <Row>
                        {data?.map((service, index) => (
                            <Col xs={12} md={4} key={index}>
                                <Card>
                                    <Text
                                        lineHeight={44}
                                        mb={12}
                                        size={28}
                                        weight={700}
                                    >
                                        {service.title}
                                    </Text>
                                    <Text
                                        lineHeight={32}
                                        size={20}
                                        weight={300}
                                    >
                                        {service.description}
                                    </Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </SectionServices>
    );
}
