import React from 'react';
import { IoMailOutline, IoRocketOutline } from 'react-icons/io5';
import { SiWhatsapp } from 'react-icons/si';
import { Text } from '../../components';
import { Col, Container, Row } from '../../styles';
import SectionContacts, { Copyright, Link } from './styles';

export default function Contacts() {
    return (
        <SectionContacts id={'contact'}>
            <Text size={32} weight={700} align={'center'} mb={20}>
                Contatos
            </Text>
            <Text size={20} align={'center'} mb={80}>
                Vamos conversar?
            </Text>

            <Container>
                <Row>
                    <Col xs={12} md={3} mb={40}>
                        <Text lineHeight={44} mb={12} size={28} weight={700}>
                            <IoRocketOutline size={22} />
                            Localização
                        </Text>
                        <Text lineHeight={32} size={20} weight={300}>
                            De Santos para o Mundo!
                        </Text>
                    </Col>

                    <Col xs={12} md={5} mb={40}>
                        <Text lineHeight={44} mb={12} size={28} weight={700}>
                            <IoMailOutline size={22} />
                            E-mail
                        </Text>

                        <Link
                            href="mailto:victormatheus92@gmail.com"
                            target="blank"
                        >
                            victormatheus92@gmail.com
                        </Link>

                        <Text lineHeight={32} size={20} weight={300}>
                            Utilize preferencialmente o email para contato.
                            <br />
                            Se você tem um projeto ou precisa de algum serviço
                            específico, mande todas informações possíveis para
                            agilizar o atendimento.
                        </Text>
                    </Col>

                    <Col xs={12} md={4} mb={40}>
                        <Text lineHeight={44} mb={12} size={28} weight={700}>
                            <SiWhatsapp size={22} />
                            WhatsApp
                        </Text>

                        <Link href="https://wa.me/5513996132418" target="blank">
                            +55 13 99613-2418
                        </Link>

                        <Text lineHeight={32} size={20} weight={300}>
                            WhatsApp com atendimento em horário comercial,
                            conforme disponibilidade (a prioridade é sempre
                            estar com o trabalho em dia).
                        </Text>
                    </Col>
                </Row>

                <Copyright>
                    &copy; {new Date().getFullYear()} &bull; Todos os direitos
                    reservados.
                </Copyright>
            </Container>
        </SectionContacts>
    );
}
