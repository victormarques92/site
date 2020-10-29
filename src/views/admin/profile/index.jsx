import React, { useEffect, useState } from 'react';
import Base from '../../../components/admin_base';
import Text from '../../../components/text';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';
import { Col, Row } from '../../../styles/grid';
import firebase from '../../../domain/firebase';
import Loading from '../../../components/loading';
import swal from 'sweetalert';

const schema = yup.object().shape({
    name: yup.object({
        firstName: yup.string().required('Campo obrigatório'),
        lastName: yup.string().required('Campo obrigatório'),
    }),
    job: yup.string().required('Campo obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    phone: yup.number().required('Campo obrigatório'),
    address: yup.object({
        city: yup.string().required('Campo obrigatório'),
        state: yup.string().required('Campo obrigatório'),
        country: yup.string().required('Campo obrigatório'),
    }),
    midias: yup.object({
        linkedin: yup.string(),
        instagram: yup.string(),
        github: yup.string(),
    }),
    bio: yup.string().required('Campo obrigatório'),
});

export default function AdminProfile() {
    const [data, setData] = useState();

    useEffect(() => {
        getApiProfile();
    }, []);

    function getApiProfile() {
        const profile = firebase.database().ref('profile');
        profile.on('value', function (data) {
            setData(data.val());
        });
    }

    function handleSubmit(data) {
        firebase.database().ref('profile').set(data);

        swal('Alterações salvas!', '', 'success');
    }

    return (
        <Base>
            <Text size={40} weight={700} mb={40}>
                Profile
            </Text>
            {data === undefined ? (
                <Loading />
            ) : (
                <Form
                    schema={schema}
                    initialData={data}
                    onSubmit={handleSubmit}
                >
                    <Row>
                        <Col xs={6} mb={24}>
                            <label htmlFor={'name.firstName'}>
                                Primeiro nome
                            </label>
                            <Input
                                name={'name.firstName'}
                                placeholder={'José'}
                            />
                        </Col>
                        <Col xs={6} mb={24}>
                            <label htmlFor={'name.lastName'}>Último nome</label>
                            <Input
                                name={'name.lastName'}
                                placeholder={'Silva'}
                            />
                        </Col>

                        <Col xs={12} mb={24}>
                            <label htmlFor={'job'}>Função</label>
                            <Input name={'job'} placeholder={'Desenvolvedor'} />
                        </Col>

                        <Col xs={12} mb={24}>
                            <label htmlFor={'email'}>E-mail</label>
                            <Input
                                name={'email'}
                                placeholder={'jose.silva@mail.com'}
                            />
                        </Col>

                        <Col xs={12} mb={24}>
                            <label htmlFor={'phone'}>Telefone</label>
                            <Input
                                name={'phone'}
                                placeholder={'+55 13 99613-2418'}
                            />
                        </Col>

                        <Col xs={4} mb={24}>
                            <label htmlFor={'address.city'}>Cidade</label>
                            <Input
                                name={'address.city'}
                                placeholder={'Santos'}
                            />
                        </Col>
                        <Col xs={4} mb={24}>
                            <label htmlFor={'address.state'}>Estado</label>
                            <Input
                                name={'address.state'}
                                placeholder={'São Paulo'}
                            />
                        </Col>
                        <Col xs={4} mb={24}>
                            <label htmlFor={'address.country'}>País</label>
                            <Input
                                name={'address.country'}
                                placeholder={'Brasil'}
                            />
                        </Col>

                        <Col xs={4} mb={24}>
                            <label htmlFor={'midias.linkedin'}>LinkedIn</label>
                            <Input name={'midias.linkedin'} />
                        </Col>
                        <Col xs={4} mb={24}>
                            <label htmlFor={'midias.instagram'}>
                                Instagram
                            </label>
                            <Input name={'midias.instagram'} />
                        </Col>
                        <Col xs={4} mb={24}>
                            <label htmlFor={'midias.github'}>GitHub</label>
                            <Input name={'midias.github'} />
                        </Col>

                        <Col xs={12} mb={40}>
                            <label htmlFor={'bio'}>Biografia</label>
                            <Input
                                name={'bio'}
                                placeholder={'Lorem ipsum dolor...'}
                                multiline
                            />
                        </Col>

                        <Col xs={12}>
                            <button type="submit">Salvar</button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Base>
    );
}
