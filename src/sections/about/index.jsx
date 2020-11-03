import React from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import CV from '../../assets/CV-Victor_Marques.pdf';
import Img from '../../assets/images/ab-img.png';
import { Loading, Text } from '../../components';
import { Col, Container, Row } from '../../styles';
import SectionAbout, { Download, Photo, Skill } from './styles';

export default function About({ bio, skills }) {
    return (
        <SectionAbout id={'about'}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Photo src={Img} alt="Figura" />
                    </Col>
                    <Col xs={12} md={6}>
                        {!skills ? (
                            <Loading />
                        ) : (
                            <>
                                <Text
                                    size={32}
                                    lineHeight={38}
                                    mb={20}
                                    weight={700}
                                >
                                    Um pouco sobre mim
                                </Text>

                                <Text size={20} mb={32}>
                                    {bio}
                                </Text>

                                <Row mb={32} className="box-skills">
                                    {skills.map((skill, index) => (
                                        <Skill key={index}>
                                            {skill.name}
                                            {skill.strong && <AiOutlineFire />}
                                        </Skill>
                                    ))}
                                </Row>

                                <Download href={CV} download>
                                    Download CV <FiDownload />
                                </Download>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </SectionAbout>
    );
}
