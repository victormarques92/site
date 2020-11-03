import React from 'react';
import moment from 'moment';
import { Loading, Text } from '../../components';
import { Container } from '../../styles';
import SectionTimeline, { Brand, Line } from './styles';

export default function Timeline({ data }) {
    const date = date => {
        let mm = moment(date).format('MM');
        let year = moment(date).format('YYYY');
        let month = '';

        switch (mm) {
            case '01':
                month = 'janeiro';
                break;

            case '02':
                month = 'fevereiro';
                break;

            case '03':
                month = 'março';
                break;

            case '04':
                month = 'abril';
                break;

            case '05':
                month = 'maio';
                break;

            case '06':
                month = 'junho';
                break;

            case '07':
                month = 'julho';
                break;

            case '08':
                month = 'agosto';
                break;

            case '09':
                month = 'setembro';
                break;

            case '10':
                month = 'outubro';
                break;

            case '11':
                month = 'novembro';
                break;

            default:
                month = 'dezembro';
                break;
        }

        return `${month.toUpperCase()}/${year}`;
    };

    return (
        <SectionTimeline>
            {!data ? (
                <Loading />
            ) : (
                <Container>
                    <Text size={32} weight={700} align={'center'} mb={32}>
                        Minha trajetória
                    </Text>

                    <Line>
                        {data?.map((job, index) => (
                            <li
                                key={index}
                                title={`${job.company} | ${date(
                                    job.period.start,
                                )} - ${
                                    job.period.end === undefined
                                        ? 'ATUAL'
                                        : date(job.period.end)
                                }`}
                                className="item"
                            >
                                <Brand>
                                    <img src={job.brand} alt={job.company} />
                                </Brand>
                            </li>
                        ))}
                    </Line>
                </Container>
            )}
        </SectionTimeline>
    );
}
