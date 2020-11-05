import React from 'react';
import { BsBootstrap } from 'react-icons/bs';
import { RiMapPinLine, RiVuejsLine } from 'react-icons/ri';
import {
    DiCss3Full,
    DiHtml5,
    DiJavascript1,
    DiGulp,
    DiPhp,
    DiLess,
    DiSass,
} from 'react-icons/di';
import {
    SiStyledComponents,
    SiJquery,
    SiReact,
    SiWordpress,
} from 'react-icons/si';
import hkd from '../../assets/images/portfolios/hkd.png';
import inlinexperience from '../../assets/images/portfolios/inline-experience.png';
import juicee from '../../assets/images/portfolios/juicee.png';
import juiceeDesign from '../../assets/images/portfolios/juicee-design.png';
import kzas from '../../assets/images/portfolios/kzas.png';
import ricardoRibeiro from '../../assets/images/portfolios/ricardo-ribeiro.png';
import { Loading, Text } from '../../components';
import { Col, Row } from '../../styles';
import SectionPortfolios, { Info, Preview, Button, Skills } from './styles';

export default function Portfolios({ data }) {
    const renderSkills = skills => {
        return (
            <Skills>
                {skills?.map((item, index) => {
                    let skill = '';

                    switch (item.name.toLowerCase()) {
                        case 'html':
                            skill = <DiHtml5 />;
                            break;

                        case 'css':
                            skill = <DiCss3Full />;
                            break;

                        case 'javascript':
                            skill = <DiJavascript1 />;
                            break;

                        case 'gulp':
                            skill = <DiGulp />;
                            break;

                        case 'bootstrap':
                            skill = <BsBootstrap />;
                            break;

                        case 'styled components':
                            skill = <SiStyledComponents />;
                            break;

                        case 'jquery':
                            skill = <SiJquery />;
                            break;

                        case 'react':
                            skill = <SiReact />;
                            break;

                        case 'vuejs':
                            skill = <RiVuejsLine />;
                            break;

                        case 'php':
                            skill = <DiPhp />;
                            break;

                        case 'less':
                            skill = <DiLess />;
                            break;

                        case 'sass':
                            skill = <DiSass />;
                            break;

                        case 'wordpress':
                            skill = <SiWordpress />;
                            break;

                        default:
                            break;
                    }

                    return (
                        <li key={index} className="item" title={item.name}>
                            {skill}
                        </li>
                    );
                })}
            </Skills>
        );
    };

    return (
        <SectionPortfolios id={'portfolios'}>
            <Text size={32} weight={700} align={'center'} mb={20}>
                Portfólios
            </Text>
            <Text size={20} align={'center'} mb={80}>
                Veja abaixo alguns dos meus trabalhos.
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
                                            mb={12}
                                            size={28}
                                            weight={700}
                                        >
                                            {portfolio.title}
                                        </Text>

                                        <Text mb={40}>
                                            <RiMapPinLine />
                                            &nbsp;&nbsp;
                                            {portfolio.location}
                                        </Text>

                                        <Text
                                            lineHeight={32}
                                            size={20}
                                            weight={300}
                                        >
                                            {portfolio.description}
                                        </Text>

                                        {renderSkills(portfolio.skills)}

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
