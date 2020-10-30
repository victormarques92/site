import React from 'react';
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGithub,
    FiInstagram,
    FiLinkedin,
} from 'react-icons/fi';
import ImgProfile from '../../assets/images/profile.jpg';
import { Loading, Text } from '../../components';
import { Col, Colors, Container, Row } from '../../styles';
import SectionHero, { ListContacts, Midias, Photo } from './styles';

export default function Hero({ data, loading }) {
    function renderListContacts() {
        return (
            <ListContacts>
                {data.email && (
                    <li className="item">
                        <a href={`mailto:${data.email}`} className="link">
                            <FiMail /> {data.email}
                        </a>
                    </li>
                )}
                {data.phone && (
                    <li className="item">
                        <a
                            href={`callto:${data.phone
                                .replace(/\s/g, '')
                                .replace('-', '')}`}
                            className="link"
                        >
                            <FiPhone /> +{data.phone}
                        </a>
                    </li>
                )}
                {data.address && (
                    <li className="item">
                        <FiMapPin />
                        {`${data.address.city}, ${data.address.state} - ${data.address.country}`}
                    </li>
                )}
            </ListContacts>
        );
    }

    function renderMidias() {
        return (
            <Midias>
                {data.midias.map((midia, index) => {
                    let icon = '';

                    switch (midia.name) {
                        case 'github':
                            icon = <FiGithub />;
                            break;

                        case 'instagram':
                            icon = <FiInstagram />;
                            break;

                        case 'linkedin':
                            icon = <FiLinkedin />;
                            break;

                        default:
                            break;
                    }
                    return (
                        <a
                            key={index}
                            href={midia.url}
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                        </a>
                    );
                })}
            </Midias>
        );
    }

    return (
        <SectionHero id={'hero'}>
            {loading ? (
                <Loading />
            ) : (
                <Container>
                    <Row mt={100}>
                        <Col xs={12} md={6} className="content">
                            <Text size={24} weight={500}>
                                Olá! Eu sou
                            </Text>
                            <Text
                                size={60}
                                weight={600}
                                lineHeight={65}
                                mb={12}
                                color={Colors.primary}
                            >
                                {`${data.name.firstName} ${data.name.lastName}`}
                            </Text>
                            <Text
                                size={28}
                                weight={700}
                                lineHeight={40}
                                mb={32}
                            >
                                {data.job}
                            </Text>

                            {renderListContacts()}

                            {renderMidias()}
                        </Col>

                        <Photo>
                            <img
                                src={ImgProfile}
                                alt={`${data.name.firstName} ${data.name.lastName}`}
                            />
                        </Photo>
                    </Row>
                </Container>
            )}
        </SectionHero>
    );
}
