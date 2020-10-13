import React, { Component } from 'react';
import * as fipe from '../../domain/services/fipeCars';
import Text from '../../components/text';
import { Col, Container, Row } from '../../styles/grid';
import Card from '../../components/card';
import Colors, { Opacity } from '../../styles/colors';

export default class Home extends Component {
    state = {
        cars: [],
    };

    componentDidMount() {
        this.getCars();
    }

    render() {
        return (
            <Container>
                <Text
                    align={'center'}
                    size={50}
                    weigth={700}
                    mt={32}
                    mb={50}
                    color={Colors.primary}
                >
                    Marcas
                </Text>

                <Row>
                    {this.state.cars.map(car => (
                        <Col xs={12} md={6} xl={3}>
                            <Card>
                                <Text
                                    align={'center'}
                                    weigth={700}
                                    size={20}
                                    mt={12}
                                    uppercase
                                >
                                    {car.nome}
                                </Text>

                                <Text
                                    align={'right'}
                                    weigth={700}
                                    mt={24}
                                    color={Colors.grey + Opacity.op30}
                                    size={12}
                                >
                                    Código: {car.codigo}
                                </Text>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }

    getCars() {
        fipe.loadCars()
            .then(data => {
                this.onLoadCars(data);
            })
            .catch(err => {
                this.onFailureCars(err);
            });
    }

    onLoadCars(cars) {
        this.setState({ cars });
    }

    onFailureCars(err) {
        alert(err);
    }
}
