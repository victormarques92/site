import React from 'react';
import hkd from '../../assets/images/portfolios/hkd.png';
import inlinexperience from '../../assets/images/portfolios/inline-experience.png';
import juicee from '../../assets/images/portfolios/juicee.png';
import juiceeDesign from '../../assets/images/portfolios/juicee-design.png';
import kzas from '../../assets/images/portfolios/kzas.png';
import ricardoRibeiro from '../../assets/images/portfolios/ricardo-ribeiro.png';
import { Loading, Text } from '../../components';
import { Col, Row } from '../../styles';
import SectionPortfolios, { Info, Preview, Button } from './styles';

export default function Portfolios({ data }) {
    return (
        <SectionPortfolios id={'portfolios'}>
            <Text size={32} weight={700} align={'center'} mb={32}>
                Portfólios
            </Text>

            {!data ? (
                <Loading />
            ) : (
                <>
                    {data.map((portfolio, index) => {
                        let preview = '';

                        switch (portfolio.preview) {
                            case 'hkd':
                                preview = hkd;
                                break;

                            case 'inline-experience':
                                preview = inlinexperience;
                                break;

                            case 'juicee':
                                preview = juicee;
                                break;

                            case 'juicee-design':
                                preview = juiceeDesign;
                                break;

                            case 'kzas':
                                preview = kzas;
                                break;

                            case 'ricardo-ribeiro':
                                preview = ricardoRibeiro;
                                break;

                            default:
                                break;
                        }

                        return (
                            <Row key={index} reverse={index % 2 === 1}>
                                <Col xs={12} md={6} pl={'0'} pr={'0'}>
                                    <Info>
                                        <Text
                                            lineHeight={44}
                                            mb={40}
                                            size={28}
                                            weight={700}
                                        >
                                            {portfolio.title}
                                        </Text>

                                        <Text
                                            lineHeight={32}
                                            size={20}
                                            weight={300}
                                        >
                                            {portfolio.description}
                                        </Text>

                                        <Button
                                            href={portfolio.website}
                                            target="_blank"
                                        >
                                            Visitar website
                                        </Button>
                                    </Info>
                                </Col>
                                <Col xs={12} md={6} pl={'0'} pr={'0'}>
                                    <Preview>
                                        <img
                                            src={preview}
                                            alt={portfolio.title}
                                        />
                                    </Preview>
                                </Col>
                            </Row>
                        );
                    })}
                </>
            )}
        </SectionPortfolios>
    );
}
